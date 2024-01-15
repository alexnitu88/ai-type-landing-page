import java.io.File
import java.net.HttpURLConnection
import java.net.URL
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import com.google.gson.Gson
import javax.imageio.ImageIO
import java.awt.image.BufferedImage
import java.security.MessageDigest

val ARTICLE_IMAGES_PATH = "assets/images/article_images/"
val INDEX_FILE = "publisher/lastProcessedIndex.txt"
val INPUT_PATH = "publisher/input/"
val KEYWORDS_FILE = "keywords.txt"
val TOPICS_FILE = "topics.txt"

val authors = setOf(
        "alex",
        "paul",
        "emily",
        "zoe",
        "lily",
        "amelia"
)
val lastIndex = File(INDEX_FILE).readText().toIntOrNull() ?: 0
val baseInputFolder = File(INPUT_PATH)
val totalNumberOfInputSubfolders = baseInputFolder.listFiles().size
val nextFolderIndex = (lastIndex % totalNumberOfInputSubfolders) + 1
val nextDir = File("$INPUT_PATH/$nextFolderIndex")

if (nextDir.exists()) {
    val keywords = File(nextDir, KEYWORDS_FILE).readLines()
    val articleTopicsFile = File(nextDir, TOPICS_FILE)
    val articleTopic = articleTopicsFile.useLines { it.firstOrNull() ?: "" }

    generateBlogPost(keywords, articleTopic)

    File(INDEX_FILE).writeText(nextFolderIndex.toString())

    deleteFirstLine(articleTopicsFile)
} else {
    throw IllegalStateException("Directory does not exist: $nextDir")
}

fun generateBlogPost(keywords: List<String>, articleTopic: String) {
    require(articleTopic.isNotBlank()) { "null/empty topic" }
    require(keywords.isNotEmpty()) { "empty keyword list" }

    //generate image
    val imageFile = "${articleTopic.toMD5()}.jpg"
    val imageFullPath = File(ARTICLE_IMAGES_PATH + imageFile)
    if (imageFullPath.exists()) {
        println("Image file exists: $imageFile")
    } else {
        val dallePrompt = generateDallePrompt(articleTopic)
        val imgUrl = generateImage(dallePrompt)

        saveDalleImage(imgUrl, articleTopic.toMD5())
    }

    var articleContent: String
    val articleKeywords = keywords.shuffled()
            .subList(0, 7)
    do {
        articleContent = generateArticleContent(
                topic = articleTopic,
                keywords = articleKeywords.joinToString("\n")
        )
        Thread.sleep(3)
    } while (articleContent.isEmpty())

    saveArticle(articleTopic.split(":").first(), articleContent, articleKeywords, imageFile)
}

fun generateArticleContent(topic: String, keywords: String): String {
    println("Generating article: $topic")

    val formattedKeywords = keywords
            .trim()
            .split("\n")
            .joinToString(", ") {
                it.trim()
            }
    val appStoreLink = "https://apps.apple.com/us/app/aitype-grammar-check-keyboard/id6469163944"

    val prompt = """
        As an expert in website SEO and mobile app marketing, your task is to create a SEO-optimized blog post that promotes my AI-assisted keyboard iOS app, a sophisticated mobile application powered by ChatGPT and GPT-4 technology. The app suggests better word choices, checks spelling, grammar, translates, completes sentences based on context and helps write the perfect replies.
        
        The SEO-optimized blog post that you are tasked to create, should organically boost the website's visibility on search engines, drive traffic to the app store page, and encourage downloads.

        Topic: "$topic"

        Objectives:
        SEO Optimization: Integrate these keywords naturally throughout the article and SEO optimize the article for them: $keywords.
        Engaging and Informative Content: The article should be captivating, providing in-depth insights into the app's features, benefits, practical applications, and it should offer real value to readers.
        Tone: Use a more personal and authentic tone.
        Length: 1500 words.
        Call-to-Action: Conclude each article with a compelling call-to-action, directing readers to the app store link for downloads.
        Formatting: Format the article for easy integration into a Jekyll .md blog post file, while ensuring SEO
        App Store Link Integration: Include the provided app store link in each article, ensuring it's prominently placed and easily accessible. App store link: $appStoreLink

        Remember, the article should adhere to the guidelines above, offering unique, valuable insights to encourage app exploration and downloads.
        Your response will only contain the formatted article content, nothing else. Do not return the YAML Front Matter.
        """

    return askChatGPT(prompt)
}

fun askChatGPT(prompt: String): String {
    println("Asking ChatGPT")

    val prompt = prompt.trimMargin()
            .trimIndent()
            .replace("\"", "\\\"")
            .split("\n")
            .joinToString("\\n") {
                it.trim()
            }

    val apiUrl = "https://api.openai.com/v1/chat/completions"
    val apiKey = System.getenv("OPEN_AI_KEY")

    val url = URL(apiUrl)
    val httpURLConnection = (url.openConnection() as HttpURLConnection).apply {
        requestMethod = "POST"
        doOutput = true
        setRequestProperty("Content-Type", "application/json")
        setRequestProperty("Authorization", "Bearer $apiKey")

//    "model": "gpt-4-0314",
        val payload = """
        {
          "model": "gpt-4-1106-preview",
          "messages": [
            {
              "role": "user",
              "content": "$prompt"
            }
          ],
          "top_p": 0.7,
          "temperature": 1.1,
          "stream": false
        }
    """
                .trimIndent()
                .split("\n")
                .joinToString("\n") {
                    it.trim()
                }
        outputStream.write(payload.toByteArray())
    }

    return if (httpURLConnection.responseCode == HttpURLConnection.HTTP_OK) {
        val jsonStringResponse = httpURLConnection.inputStream.bufferedReader().readText()

        println("Got successful GPT response")

        val gson = Gson()
        val response = gson.fromJson(jsonStringResponse, ChatGptResponse::class.java)

        response.choices.firstOrNull()?.message?.content
                ?: throw IllegalStateException("Article not generated! Api response:\n$jsonStringResponse")
    } else {
        println("API request failed with response code: ${httpURLConnection.responseCode}\n\n${String(httpURLConnection.errorStream.readAllBytes())}")
        ""
    }
}

fun saveArticle(title: String,
                content: String,
                articleKeywords: List<String>,
                imageFile: String) {
    println("Saving article")

    val postsDirectory = "_posts"
    val currentDateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))
    val fileName = "$currentDateTime-${title.replace("[^A-Za-z0-9]".toRegex(), "-")}.md"
    val filePath = "$postsDirectory/$fileName"
    val markdownContent = """
        ---
        layout: post
        title:  $title
        author: ${authors.random()}
        categories: [${articleKeywords.joinToString(", ")}]
        image: "$ARTICLE_IMAGES_PATH$imageFile"
        featured: true
        ---
    """.trimIndent() + "\n\n" + content

    File(filePath).writeText(markdownContent)
    println("Article saved as $filePath")
}

fun generateDallePrompt(topic: String): String {
    println("Generating the DALL-E-3 prompt for the article image.")

    val prompt = """
        Assume you're an expert in website SEO, mobile app marketing, mobile app design, and the DALL-E-3 AI. I'm developing an AI-assisted keyboard app for iOS, powered by ChatGPT technology. I want to promote this app through my website's blog.

        Your task is to create DALL-E-3 prompts that I can use to generate engaging images for my blog articles to captivate my audience.

        I will give you the article title and you will return only the DALL-E-3 prompt for it: 
        $topic

        Remember, return only the DALL-E-3 prompt and nothing else.
    """.trimIndent()

    return askChatGPT(prompt)
            .replace("\"", "")
}

fun generateImage(dallePrompt: String): String {
    println("Generating the article image using the DALL-E-3 prompt.")

    val apiUrl = "https://api.openai.com/v1/images/generations"
    val apiKey = System.getenv("OPEN_AI_KEY")

    val url = URL(apiUrl)
    val httpURLConnection = (url.openConnection() as HttpURLConnection).apply {
        requestMethod = "POST"
        doOutput = true
        setRequestProperty("Content-Type", "application/json")
        setRequestProperty("Authorization", "Bearer $apiKey")

        val payload = """
        {
          "model": "dall-e-3",
          "prompt": "${dallePrompt.replace("\"", "")}",
          "n": 1,
          "size": "1792x1024",
          "quality": "standard",
          "style": "natural"
        }
    """
                .trimIndent()
                .split("\n")
                .joinToString("\n") {
                    it.trim()
                }
        outputStream.write(payload.toByteArray())
    }

    return if (httpURLConnection.responseCode == HttpURLConnection.HTTP_OK) {
        val jsonStringResponse = httpURLConnection.inputStream.bufferedReader().readText()

        println("Got successful GPT response")

        val gson = Gson()
        val response = gson.fromJson(jsonStringResponse, DalleResponse::class.java)

        val imgUrl = response.data.firstOrNull()?.url

        require(!imgUrl.isNullOrBlank()) { "null/empty image url" }

        imgUrl
    } else {
        throw IllegalStateException("Dalle API request failed with response code: ${httpURLConnection.responseCode}")
    }
}

fun saveDalleImage(imageUrl: String, fileName: String) {
    val imageFullPath = ARTICLE_IMAGES_PATH + "$fileName.jpg"
    //ensure the directory exists
    val outputDir = File(ARTICLE_IMAGES_PATH)
    outputDir.mkdir()

    val outputFile = File(imageFullPath)

    println("Saving article image under ${outputFile.absolutePath}.")

    try {
        // Download the PNG image from the URL
        val inputImage: BufferedImage = ImageIO.read(URL(imageUrl))

        // Convert the image to JPG
        val outputImage = BufferedImage(inputImage.width, inputImage.height, BufferedImage.TYPE_INT_RGB)
        outputImage.graphics.drawImage(inputImage, 0, 0, null)

        // Save the JPG image to disk
        ImageIO.write(outputImage, "jpg", outputFile)

        println("Image downloaded and converted to JPG format at: ${outputFile.absolutePath}")
    } catch (e: Exception) {
        println("An error occurred while saving the dall-e image: ${e.message}")
        throw e
    }
}

fun String.toMD5(): String {
    val md = MessageDigest.getInstance("MD5")
    val digest = md.digest(this.toByteArray())
    return digest.joinToString("") { "%02x".format(it) }
}

fun deleteFirstLine(file: File) {
    val lines = file.readLines().drop(1)
    file.writeText(lines.joinToString("\n"))
}

data class ChatGptResponse(
        val choices: List<Choice>,
)

data class Choice(
        val message: Message,
)

data class Message(
        val content: String
)

data class DalleResponse(
        val data: List<DalleData>
)

data class DalleData(
        val url: String
)