/*
*
* LANDING PAGE
*
 */
(() => {
    var o = {
        630: function (o) {
            !function webpackUniversalModuleDefinition(a, s) {
                o.exports = s()
            }("undefined" != typeof self && self, (function () {
                return function (o) {
                    var a = {};

                    function __nested_webpack_require_597__(s) {
                        if (a[s]) return a[s].exports;
                        var d = a[s] = {i: s, l: !1, exports: {}};
                        return o[s].call(d.exports, d, d.exports, __nested_webpack_require_597__), d.l = !0, d.exports
                    }

                    return __nested_webpack_require_597__.m = o, __nested_webpack_require_597__.c = a, __nested_webpack_require_597__.d = function (o, a, s) {
                        __nested_webpack_require_597__.o(o, a) || Object.defineProperty(o, a, {enumerable: !0, get: s})
                    }, __nested_webpack_require_597__.r = function (o) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(o, "__esModule", {value: !0})
                    }, __nested_webpack_require_597__.t = function (o, a) {
                        if (1 & a && (o = __nested_webpack_require_597__(o)), 8 & a) return o;
                        if (4 & a && "object" == typeof o && o && o.__esModule) return o;
                        var s = Object.create(null);
                        if (__nested_webpack_require_597__.r(s), Object.defineProperty(s, "default", {
                            enumerable: !0,
                            value: o
                        }), 2 & a && "string" != typeof o) for (var d in o) __nested_webpack_require_597__.d(s, d, function (a) {
                            return o[a]
                        }.bind(null, d));
                        return s
                    }, __nested_webpack_require_597__.n = function (o) {
                        var a = o && o.__esModule ? function getDefault() {
                            return o.default
                        } : function getModuleExports() {
                            return o
                        };
                        return __nested_webpack_require_597__.d(a, "a", a), a
                    }, __nested_webpack_require_597__.o = function (o, a) {
                        return Object.prototype.hasOwnProperty.call(o, a)
                    }, __nested_webpack_require_597__.p = "", __nested_webpack_require_597__(__nested_webpack_require_597__.s = "./src/index.js")
                }({
                    "./src/darkmode.js": function (o, a, s) {
                        "use strict";

                        function _defineProperties(o, a) {
                            for (var s = 0; s < a.length; s++) {
                                var d = a[s];
                                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(o, d.key, d)
                            }
                        }

                        Object.defineProperty(a, "__esModule", {value: !0}), a.default = a.IS_BROWSER = void 0;
                        var d = "undefined" != typeof window;
                        a.IS_BROWSER = d;
                        var l = function () {
                            function Darkmode(o) {
                                if (function _classCallCheck(o, a) {
                                    if (!(o instanceof a)) throw new TypeError("Cannot call a class as a function")
                                }(this, Darkmode), d) {
                                    o = Object.assign({}, {
                                        bottom: "32px",
                                        right: "32px",
                                        left: "unset",
                                        time: "0.3s",
                                        mixColor: "#fff",
                                        backgroundColor: "#fff",
                                        buttonColorDark: "#100f2c",
                                        buttonColorLight: "#fff",
                                        label: "",
                                        saveInCookies: !0,
                                        autoMatchOsTheme: !0
                                    }, o);
                                    var a = "\n      .darkmode-layer {\n        position: fixed;\n        pointer-events: none;\n        background: ".concat(o.mixColor, ";\n        transition: all ").concat(o.time, " ease;\n        mix-blend-mode: difference;\n      }\n\n      .darkmode-layer--button {\n        width: 2.9rem;\n        height: 2.9rem;\n        border-radius: 50%;\n        right: ").concat(o.right, ";\n        bottom: ").concat(o.bottom, ";\n        left: ").concat(o.left, ";\n      }\n\n      .darkmode-layer--simple {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        transform: scale(1) !important;\n      }\n\n      .darkmode-layer--expanded {\n        transform: scale(100);\n        border-radius: 0;\n      }\n\n      .darkmode-layer--no-transition {\n        transition: none;\n      }\n\n      .darkmode-toggle {\n        background: ").concat(o.buttonColorDark, ";\n        width: 3rem;\n        height: 3rem;\n        position: fixed;\n        border-radius: 50%;\n        border:none;\n        right: ").concat(o.right, ";\n        bottom: ").concat(o.bottom, ";\n        left: ").concat(o.left, ";\n        cursor: pointer;\n        transition: all 0.5s ease;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .darkmode-toggle--white {\n        background: ").concat(o.buttonColorLight, ";\n      }\n\n      .darkmode-toggle--inactive {\n        display: none;\n      }\n\n      .darkmode-background {\n        background: ").concat(o.backgroundColor, ";\n        position: fixed;\n        pointer-events: none;\n        z-index: -10;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n\n      img, .darkmode-ignore {\n        isolation: isolate;\n        display: inline-block;\n      }\n\n      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n        .darkmode-toggle {display: none !important}\n      }\n\n      @supports (-ms-ime-align:auto), (-ms-accelerator:true) {\n        .darkmode-toggle {display: none !important}\n      }\n    "),
                                        s = document.createElement("div"), l = document.createElement("button"),
                                        c = document.createElement("div");
                                    l.innerHTML = o.label, l.classList.add("darkmode-toggle--inactive"), s.classList.add("darkmode-layer"), c.classList.add("darkmode-background");
                                    var u = "true" === window.localStorage.getItem("darkmode"),
                                        p = o.autoMatchOsTheme && window.matchMedia("(prefers-color-scheme: dark)").matches,
                                        b = null === window.localStorage.getItem("darkmode");
                                    (!0 === u && o.saveInCookies || b && p) && (s.classList.add("darkmode-layer--expanded", "darkmode-layer--simple", "darkmode-layer--no-transition"), l.classList.add("darkmode-toggle--white"), document.body.classList.add("darkmode--activated")), document.body.insertBefore(l, document.body.firstChild), document.body.insertBefore(s, document.body.firstChild), document.body.insertBefore(c, document.body.firstChild), this.addStyle(a), this.button = l, this.layer = s, this.saveInCookies = o.saveInCookies, this.time = o.time
                                }
                            }

                            return function _createClass(o, a, s) {
                                return a && _defineProperties(o.prototype, a), s && _defineProperties(o, s), o
                            }(Darkmode, [{
                                key: "addStyle", value: function addStyle(o) {
                                    var a = document.createElement("link");
                                    a.setAttribute("rel", "stylesheet"), a.setAttribute("type", "text/css"), a.setAttribute("href", "data:text/css;charset=UTF-8," + encodeURIComponent(o)), document.head.appendChild(a)
                                }
                            }, {
                                key: "showWidget", value: function showWidget() {
                                    var o = this;
                                    if (d) {
                                        var a = this.button, s = this.layer, l = 1e3 * parseFloat(this.time);
                                        a.classList.add("darkmode-toggle"), a.classList.remove("darkmode-toggle--inactive"), a.setAttribute("aria-label", "Activate dark mode"), a.setAttribute("aria-checked", "false"), a.setAttribute("role", "checkbox"), s.classList.add("darkmode-layer--button"), a.addEventListener("click", (function () {
                                            var d = o.isActivated();
                                            d ? (s.classList.remove("darkmode-layer--simple"), a.setAttribute("disabled", !0), setTimeout((function () {
                                                s.classList.remove("darkmode-layer--no-transition"), s.classList.remove("darkmode-layer--expanded"), a.removeAttribute("disabled")
                                            }), 1)) : (s.classList.add("darkmode-layer--expanded"), a.setAttribute("disabled", !0), setTimeout((function () {
                                                s.classList.add("darkmode-layer--no-transition"), s.classList.add("darkmode-layer--simple"), a.removeAttribute("disabled")
                                            }), l)), a.classList.toggle("darkmode-toggle--white"), document.body.classList.toggle("darkmode--activated"), window.localStorage.setItem("darkmode", !d)
                                        }))
                                    }
                                }
                            }, {
                                key: "toggle", value: function toggle() {
                                    if (d) {
                                        var o = this.layer, a = this.isActivated(), s = this.button;
                                        o.classList.toggle("darkmode-layer--simple"), document.body.classList.toggle("darkmode--activated"), window.localStorage.setItem("darkmode", !a), s.setAttribute("aria-label", "De-activate dark mode"), s.setAttribute("aria-checked", "true")
                                    }
                                }
                            }, {
                                key: "isActivated", value: function isActivated() {
                                    return d ? document.body.classList.contains("darkmode--activated") : null
                                }
                            }]), Darkmode
                        }();
                        a.default = l
                    }, "./src/index.js": function (o, a, s) {
                        "use strict";
                        Object.defineProperty(a, "__esModule", {value: !0}), a.default = void 0;
                        var d = function _interopRequireWildcard(o) {
                            if (o && o.__esModule) return o;
                            var a = {};
                            if (null != o) for (var s in o) if (Object.prototype.hasOwnProperty.call(o, s)) {
                                var d = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(o, s) : {};
                                d.get || d.set ? Object.defineProperty(a, s, d) : a[s] = o[s]
                            }
                            return a.default = o, a
                        }(s("./src/darkmode.js"));
                        var l = d.default;
                        a.default = l, d.IS_BROWSER && function (o) {
                            o.Darkmode = d.default
                        }(window), o.exports = a.default
                    }
                })
            }))
        }, 933: function (o) {
            !function webpackUniversalModuleDefinition(a, s) {
                o.exports = s()
            }("undefined" != typeof self && self, (function () {
                return function (o) {
                    var a = {};

                    function __nested_webpack_require_645__(s) {
                        if (a[s]) return a[s].exports;
                        var d = a[s] = {i: s, l: !1, exports: {}};
                        return o[s].call(d.exports, d, d.exports, __nested_webpack_require_645__), d.l = !0, d.exports
                    }

                    return __nested_webpack_require_645__.m = o, __nested_webpack_require_645__.c = a, __nested_webpack_require_645__.d = function (o, a, s) {
                        __nested_webpack_require_645__.o(o, a) || Object.defineProperty(o, a, {enumerable: !0, get: s})
                    }, __nested_webpack_require_645__.r = function (o) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(o, "__esModule", {value: !0})
                    }, __nested_webpack_require_645__.t = function (o, a) {
                        if (1 & a && (o = __nested_webpack_require_645__(o)), 8 & a) return o;
                        if (4 & a && "object" == typeof o && o && o.__esModule) return o;
                        var s = Object.create(null);
                        if (__nested_webpack_require_645__.r(s), Object.defineProperty(s, "default", {
                            enumerable: !0,
                            value: o
                        }), 2 & a && "string" != typeof o) for (var d in o) __nested_webpack_require_645__.d(s, d, function (a) {
                            return o[a]
                        }.bind(null, d));
                        return s
                    }, __nested_webpack_require_645__.n = function (o) {
                        var a = o && o.__esModule ? function getDefault() {
                            return o.default
                        } : function getModuleExports() {
                            return o
                        };
                        return __nested_webpack_require_645__.d(a, "a", a), a
                    }, __nested_webpack_require_645__.o = function (o, a) {
                        return Object.prototype.hasOwnProperty.call(o, a)
                    }, __nested_webpack_require_645__.p = "", __nested_webpack_require_645__(__nested_webpack_require_645__.s = "./src/index.js")
                }({
                    "./src/floatingPrompt.js": function (o, a, s) {
                        "use strict";
                        Object.defineProperty(a, "__esModule", {value: !0}), a.default = function floatingPrompt(o) {
                            // var a = o.name, s = o.url,
                            //     d = o.text ? o.text : "Hi, do you like ".concat(a, " ? Don't forget to show your love on Product Hunt 🚀"),
                            //     l = o.buttonText ? o.buttonText : "".concat(a, " on Product Hunt"),
                            //     c = o.width ? o.width : "300px", u = o.bottom ? o.bottom : "32px",
                            //     p = o.right ? o.right : "32px", b = o.left ? o.left : "unset",
                            //     _ = o.colorOne ? o.colorOne : "#da552f", m = o.colorTwo ? o.colorTwo : "#ea8e39",
                            //     h = "boolean" != typeof o.saveInCookies || o.saveInCookies,
                            //     f = o.target ? o.target : "_blank",
                            //     g = "product-hunt-".concat(a.toLowerCase().replace(/[^a-zA-Z]+/g, "-")),
                            //     y = '<div class="producthunt" id="'.concat(g, '"> <span class="producthunt__close" id="').concat(g, '-close">×</span><p class="producthunt__text">').concat(d, '</p> <a href="').concat(s, '" class="ph-button" target="').concat(f, '">').concat(l, "</a></div>"),
                            //     v = "\n  .ph-button {\n    background: linear-gradient(65deg,".concat(_, ",").concat(m, ");\n    font-family: sans-serif;\n    color: #fff !important;\n    display: block;\n    letter-spacing: 0;\n    font-weight: 700;\n    line-height: 16px;\n    font-size: 14px;\n    text-transform: uppercase;\n    text-decoration: none!important;\n    border: none;\n    border-radius: 2px;\n    cursor: pointer;\n    justify-content: center;\n    padding: 16px 16px;\n    text-align: center;\n    white-space: nowrap;\n    box-shadow: 0 8px 24px rgba(32,43,54,.12);\n    transition: all .3s ease;\n    margin-top: 16px;\n    font-size: 14px;\n  }\n  .ph-button:hover {\n    box-shadow: 0 6px 24px rgba(32,43,54,.4);\n  }\n  .producthunt {\n    position: fixed;\n    background-color: #fff;\n    padding: 24px;\n    box-shadow: 0 4px 16px rgba(16, 31, 59, 0.16);\n    z-index: 10;\n    font-size: 16px;\n    color: #65638f;\n    font-family: sans-serif;\n    opacity: 1;\n    transition: all .3s ease;\n  }\n  .producthunt__close {\n    position: absolute;\n    right: 16px;\n    top: 8px;\n    cursor: pointer;\n  }\n  .producthunt__text {\n    margin: 0;\n  }\n  @media (max-width: 768px) {\n    .producthunt {\n      width: calc(100% - 48px) !important;\n      bottom: 0 !important;\n      right: 0 !important;\n      left: 0 !important;\n      box-shadow: 0 -4px 16px rgba(16, 31, 59, 0.16) !important;\n    }\n  }");
                            // window.localStorage.getItem(g) && 0 != h || (!function createModal(o) {
                            //     var a = document.createElement("div");
                            //     a.innerHTML = o, document.body.appendChild(a)
                            // }(y), function setStyle(o, a, s, d, l) {
                            //     var c = document.getElementById(o);
                            //     c.style.bottom = a, c.style.left = s || "unset", c.style.right = d || "unset", c.style.width = l
                            // }(g, u, b, p, c), function addClosingEvent(o) {
                            //     var a = document.getElementById(o);
                            //     document.getElementById("".concat(o, "-close")).addEventListener("click", (function () {
                            //         a.style.opacity = 0, setTimeout((function () {
                            //             a.parentNode.removeChild(a), window.localStorage.setItem(o, !0)
                            //         }), 300)
                            //     }))
                            // }(g), function addStyle(o) {
                            //     var a = document.createElement("link");
                            //     a.setAttribute("rel", "stylesheet"), a.setAttribute("type", "text/css"), a.setAttribute("href", "data:text/css;charset=UTF-8," + encodeURIComponent(o)), document.head.appendChild(a)
                            // }(v))
                        }, o.exports = a.default
                    }, "./src/index.js": function (o, a, s) {
                        "use strict";
                        Object.defineProperty(a, "__esModule", {value: !0}), a.default = void 0;
                        var d = function _interopRequireDefault(o) {
                            return o && o.__esModule ? o : {default: o}
                        }(s("./src/floatingPrompt.js"));
                        var l = d.default;
                        a.default = l, function (o) {
                            o.FloatingPrompt = d.default
                        }(window), o.exports = a.default
                    }
                })
            }))
        }
    }, a = {};

    function __webpack_require__(s) {
        var d = a[s];
        if (void 0 !== d) return d.exports;
        var l = a[s] = {exports: {}};
        return o[s].call(l.exports, l, l.exports, __webpack_require__), l.exports
    }

    __webpack_require__.n = o => {
        var a = o && o.__esModule ? () => o.default : () => o;
        return __webpack_require__.d(a, {a}), a
    }, __webpack_require__.d = (o, a) => {
        for (var s in a) __webpack_require__.o(a, s) && !__webpack_require__.o(o, s) && Object.defineProperty(o, s, {
            enumerable: !0,
            get: a[s]
        })
    }, __webpack_require__.o = (o, a) => Object.prototype.hasOwnProperty.call(o, a), (() => {
        "use strict";

        class e {
            constructor() {
                this.figcaptionId = 0, this.userSettings = null
            }

            init(o, a, s) {
                this.userSettings = s;
                const d = document.createElement("figure"), l = document.createElement("figcaption"),
                    c = document.createElement("img"), u = o.querySelector("img"), p = document.createElement("div");
                d.style.opacity = "0", u && (c.alt = u.alt || ""), c.setAttribute("src", ""), c.setAttribute("data-src", o.href), o.hasAttribute("data-srcset") && c.setAttribute("srcset", o.getAttribute("data-srcset")), d.appendChild(c), this.userSettings.captions && ("function" == typeof this.userSettings.captionText ? l.textContent = this.userSettings.captionText(o) : "self" === this.userSettings.captionsSelector && o.getAttribute(this.userSettings.captionAttribute) ? l.textContent = o.getAttribute(this.userSettings.captionAttribute) : "img" === this.userSettings.captionsSelector && u && u.getAttribute(this.userSettings.captionAttribute) && (l.textContent = u.getAttribute(this.userSettings.captionAttribute)), l.textContent && (l.id = `tobii-figcaption-${this.figcaptionId}`, d.appendChild(l), c.setAttribute("aria-labelledby", l.id), ++this.figcaptionId)), a.appendChild(d), p.className = "tobii__loader", p.setAttribute("role", "progressbar"), p.setAttribute("aria-label", this.userSettings.loadingIndicatorLabel), a.appendChild(p), a.setAttribute("data-type", "image"), a.classList.add("tobii-image")
            }

            onPreload(o) {
                this.onLoad(o)
            }

            onLoad(o) {
                const a = o.querySelector("img");
                if (!a.hasAttribute("data-src")) return;
                const s = o.querySelector("figure"), d = o.querySelector(".tobii__loader");
                a.addEventListener("load", (() => {
                    o.removeChild(d), s.style.opacity = "1"
                })), a.addEventListener("error", (() => {
                    o.removeChild(d), s.style.opacity = "1"
                })), a.setAttribute("src", a.getAttribute("data-src")), a.removeAttribute("data-src")
            }

            onLeave(o) {
            }

            onCleanup(o) {
            }

            onReset() {
                this.figcaptionId = 0
            }
        }

        class t {
            constructor() {
                this.userSettings = null
            }

            init(o, a, s) {
                this.userSettings = s;
                const d = o.hasAttribute("data-target") ? o.getAttribute("data-target") : o.getAttribute("href");
                a.setAttribute("data-HREF", d), o.getAttribute("data-allow") && a.setAttribute("data-allow", o.getAttribute("data-allow")), o.hasAttribute("data-width") && a.setAttribute("data-width", `${o.getAttribute("data-width")}`), o.hasAttribute("data-height") && a.setAttribute("data-height", `${o.getAttribute("data-height")}`), a.setAttribute("data-type", "iframe"), a.classList.add("tobii-iframe")
            }

            onPreload(o) {
            }

            onLoad(o) {
                let a = o.querySelector("iframe");
                const s = document.createElement("div");
                if (s.className = "tobii__loader", s.setAttribute("role", "progressbar"), s.setAttribute("aria-label", this.userSettings.loadingIndicatorLabel), o.appendChild(s), null == a) {
                    a = document.createElement("iframe");
                    const s = o.getAttribute("data-href");
                    a.setAttribute("frameborder", "0"), a.setAttribute("src", s), a.setAttribute("allowfullscreen", ""), s.indexOf("youtube.com") > -1 ? a.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture") : s.indexOf("vimeo.com") > -1 ? a.setAttribute("allow", "autoplay; picture-in-picture") : o.hasAttribute("data-allow") && a.setAttribute("allow", o.getAttribute("data-allow")), o.getAttribute("data-width") && (a.style.maxWidth = `${o.getAttribute("data-width")}`), o.getAttribute("data-height") && (a.style.maxHeight = `${o.getAttribute("data-height")}`), a.style.opacity = "0", o.appendChild(a), a.addEventListener("load", (() => {
                        a.style.opacity = "1";
                        const s = o.querySelector(".tobii__loader");
                        s && o.removeChild(s)
                    })), a.addEventListener("error", (() => {
                        a.style.opacity = "1";
                        const s = o.querySelector(".tobii__loader");
                        s && o.removeChild(s)
                    }))
                } else a.setAttribute("src", o.getAttribute("data-href"))
            }

            onLeave(o) {
            }

            onCleanup(o) {
                const a = o.querySelector("iframe");
                a.setAttribute("src", ""), a.style.opacity = "0"
            }

            onReset() {
            }
        }

        class i {
            constructor() {
                this.userSettings = null
            }

            init(o, a, s) {
                this.userSettings = s;
                const d = o.hasAttribute("data-target") ? o.getAttribute("data-target") : o.getAttribute("href"),
                    l = document.querySelector(d).cloneNode(!0);
                if (!l) throw new Error(`Ups, I can't find the target ${d}.`);
                a.appendChild(l), a.setAttribute("data-type", "html"), a.classList.add("tobii-html")
            }

            onPreload(o) {
            }

            onLoad(o) {
                const a = o.querySelector("video");
                a && (a.hasAttribute("data-time") && a.readyState > 0 && (a.currentTime = a.getAttribute("data-time")), this.userSettings.autoplayVideo && a.play())
            }

            onLeave(o) {
                const a = o.querySelector("video");
                a && (a.paused || a.pause(), a.readyState > 0 && a.setAttribute("data-time", a.currentTime))
            }

            onCleanup(o) {
                const a = o.querySelector("video");
                if (a && a.readyState > 0 && a.readyState < 3 && a.duration !== a.currentTime) {
                    const s = a.cloneNode(!0);
                    this._removeSources(a), a.load(), a.parentNode.removeChild(a), o.appendChild(s)
                }
            }

            onReset() {
            }

            _removeSources(o) {
                const a = o.querySelectorAll("src");
                a && a.forEach((o => {
                    o.setAttribute("src", "")
                }))
            }
        }

        class r {
            constructor() {
                this.playerId = 0, this.PLAYER = [], this.userSettings = null
            }

            init(o, a, s) {
                this.userSettings = s;
                const d = document.createElement("div");
                a.appendChild(d), this.PLAYER[this.playerId] = new window.YT.Player(d, {
                    host: "https://www.youtube-nocookie.com",
                    height: o.getAttribute("data-height") || "360",
                    width: o.getAttribute("data-width") || "640",
                    videoId: o.getAttribute("data-id"),
                    playerVars: {controls: o.getAttribute("data-controls") || 1, rel: 0, playsinline: 1}
                }), a.setAttribute("data-player", this.playerId), a.setAttribute("data-type", "youtube"), a.classList.add("tobii-youtube"), this.playerId++
            }

            onPreload(o) {
            }

            onLoad(o) {
                this.userSettings.autoplayVideo && this.PLAYER[o.getAttribute("data-player")].playVideo()
            }

            onLeave(o) {
                1 === this.PLAYER[o.getAttribute("data-player")].getPlayerState() && this.PLAYER[o.getAttribute("data-player")].pauseVideo()
            }

            onCleanup(o) {
                1 === this.PLAYER[o.getAttribute("data-player")].getPlayerState() && this.PLAYER[o.getAttribute("data-player")].pauseVideo()
            }

            onReset() {
            }
        }

        var o = __webpack_require__(933), a = __webpack_require__.n(o), s = __webpack_require__(630),
            d = __webpack_require__.n(s);
        new function n(o) {
            const a = {image: new e, html: new i, iframe: new t, youtube: new r},
                s = ['a[href]:not([tabindex^="-"]):not([inert])', 'area[href]:not([tabindex^="-"]):not([inert])', "input:not([disabled]):not([inert])", "select:not([disabled]):not([inert])", "textarea:not([disabled]):not([inert])", "button:not([disabled]):not([inert])", 'iframe:not([tabindex^="-"]):not([inert])', 'audio:not([tabindex^="-"]):not([inert])', 'video:not([tabindex^="-"]):not([inert])', '[contenteditable]:not([tabindex^="-"]):not([inert])', '[tabindex]:not([tabindex^="-"]):not([inert])'];
            let d = {};
            const l = [], c = {gallery: [], slider: null, sliderElements: [], elementsLength: 0, currentIndex: 0, x: 0};
            let u = null, p = null, b = null, _ = null, m = null, h = {}, f = !1, g = !1, y = !1, v = null, w = null,
                x = null, A = !1, L = !1, E = {}, S = null, I = null;
            const C = o => {
                    if (null === document.querySelector('[data-type="youtube"]') || L) P(o); else {
                        if (null === document.getElementById("iframe_api")) {
                            const o = document.createElement("script"), a = document.getElementsByTagName("script")[0];
                            o.id = "iframe_api", o.src = "https://www.youtube.com/iframe_api", a.parentNode.insertBefore(o, a)
                        }
                        -1 === l.indexOf(o) && l.push(o), window.onYouTubePlayerAPIReady = () => {
                            l.forEach((o => {
                                P(o)
                            })), L = !0
                        }
                    }
                }, T = o => o.hasAttribute("data-group") ? o.getAttribute("data-group") : "default", P = o => {
                    if (S = T(o), Object.prototype.hasOwnProperty.call(E, S) || (E[S] = JSON.parse(JSON.stringify(c)), Y()), -1 !== E[S].gallery.indexOf(o)) throw new Error("Ups, element already added.");
                    if (E[S].gallery.push(o), E[S].elementsLength++, d.zoom && o.querySelector("img") && "false" !== o.getAttribute("data-zoom") || "true" === o.getAttribute("data-zoom")) {
                        const a = document.createElement("div");
                        a.className = "tobii-zoom__icon", a.innerHTML = d.zoomText, o.classList.add("tobii-zoom"), o.appendChild(a)
                    }
                    o.addEventListener("click", F), N(o), ue() && S === I && (oe(), de(null))
                }, q = o => {
                    const a = T(o);
                    if (-1 === E[a].gallery.indexOf(o)) throw new Error(`Ups, I can't find a slide for the element ${o}.`);
                    {
                        const s = E[a].gallery.indexOf(o), l = E[a].sliderElements[s];
                        if (ue() && a === I && s === E[a].currentIndex) {
                            if (1 === E[a].elementsLength) throw U(), new Error("Ups, I've closed. There are no slides more to show.");
                            0 === E[a].currentIndex ? R() : z()
                        }
                        if (E[a].elementsLength--, d.zoom && o.querySelector(".tobii-zoom__icon")) {
                            const a = o.querySelector(".tobii-zoom__icon");
                            a.parentNode.classList.remove("tobii-zoom"), a.parentNode.removeChild(a)
                        }
                        o.removeEventListener("click", F), l.parentNode.removeChild(l)
                    }
                }, Y = () => {
                    E[S].slider = document.createElement("div"), E[S].slider.className = "tobii__slider", E[S].slider.setAttribute("aria-hidden", "true"), u.appendChild(E[S].slider)
                }, N = o => {
                    const a = k(o), s = document.createElement("div"), l = document.createElement("div");
                    s.className = "tobii__slide", s.style.position = "absolute", s.style.left = 100 * E[S].x + "%", s.setAttribute("aria-hidden", "true"), a.init(o, l, d), s.appendChild(l), E[S].slider.appendChild(s), E[S].sliderElements.push(s), ++E[S].x
                }, k = o => {
                    const s = o.getAttribute("data-type");
                    return void 0 !== a[s] ? a[s] : (o.hasAttribute("data-type") && console.log("Unknown lightbox element type: " + s), a.image)
                }, O = o => {
                    if (I = null !== I ? I : S, ue()) throw new Error("Ups, I'm aleady open.");
                    if (!ue() && (o || (o = 0), -1 === o || o >= E[I].elementsLength)) throw new Error(`Ups, I can't find slide ${o}.`);
                    document.documentElement.classList.add("tobii-is-open"), document.body.classList.add("tobii-is-open"), document.body.classList.add("tobii-is-open-" + I), oe(), d.close || (_.disabled = !1, _.setAttribute("aria-hidden", "true")), v = document.activeElement;
                    const a = window.location.href;
                    window.history.pushState({tobii: "close"}, "Image", a), E[I].currentIndex = o, V(), ae(), $(E[I].currentIndex), E[I].slider.setAttribute("aria-hidden", "false"), u.setAttribute("aria-hidden", "false"), de(null), X(E[I].currentIndex + 1), X(E[I].currentIndex - 1), E[I].slider.classList.add("tobii__slider--animate");
                    const s = new window.CustomEvent("open", {detail: {group: I}});
                    u.dispatchEvent(s)
                }, U = () => {
                    if (!ue()) throw new Error("Ups, I'm already closed.");
                    document.documentElement.classList.remove("tobii-is-open"), document.body.classList.remove("tobii-is-open"), document.body.classList.remove("tobii-is-open-" + I), se(), null !== window.history.state && "close" === window.history.state.tobii && window.history.back(), v.focus(), H(E[I].currentIndex), D(E[I].currentIndex), u.setAttribute("aria-hidden", "true"), E[I].slider.setAttribute("aria-hidden", "true"), E[I].currentIndex = 0, E[I].slider.classList.remove("tobii__slider--animate");
                    const o = new window.CustomEvent("close", {detail: {group: I}});
                    u.dispatchEvent(o)
                }, X = o => {
                    if (void 0 === E[I].sliderElements[o]) return;
                    const a = E[I].sliderElements[o].querySelector("[data-type]");
                    k(a).onPreload(a)
                }, $ = o => {
                    if (void 0 === E[I].sliderElements[o]) return;
                    const a = E[I].sliderElements[o].querySelector("[data-type]"), s = k(a);
                    E[I].sliderElements[o].classList.add("tobii__slide--is-active"), E[I].sliderElements[o].setAttribute("aria-hidden", "false"), s.onLoad(a)
                }, z = () => {
                    if (!ue()) throw new Error("Ups, I'm closed.");
                    E[I].currentIndex > 0 && (H(E[I].currentIndex), $(--E[I].currentIndex), de("left"), D(E[I].currentIndex + 1), X(E[I].currentIndex - 1));
                    const o = new window.CustomEvent("previous", {detail: {group: I}});
                    u.dispatchEvent(o)
                }, R = () => {
                    if (!ue()) throw new Error("Ups, I'm closed.");
                    E[I].currentIndex < E[I].elementsLength - 1 && (H(E[I].currentIndex), $(++E[I].currentIndex), de("right"), D(E[I].currentIndex - 1), X(E[I].currentIndex + 1));
                    const o = new window.CustomEvent("next", {detail: {group: I}});
                    u.dispatchEvent(o)
                }, M = o => {
                    if (ue()) throw new Error("Ups, I'm open.");
                    if (!o) throw new Error("Ups, no group specified.");
                    if (o && !Object.prototype.hasOwnProperty.call(E, o)) throw new Error(`Ups, I don't have a group called "${o}".`);
                    I = o
                }, H = o => {
                    if (void 0 === E[I].sliderElements[o]) return;
                    const a = E[I].sliderElements[o].querySelector("[data-type]"), s = k(a);
                    E[I].sliderElements[o].classList.remove("tobii__slide--is-active"), E[I].sliderElements[o].setAttribute("aria-hidden", "true"), s.onLeave(a)
                }, D = o => {
                    if (void 0 === E[I].sliderElements[o]) return;
                    const a = E[I].sliderElements[o].querySelector("[data-type]");
                    k(a).onCleanup(a)
                }, B = () => {
                    I = null !== I ? I : S, w = -E[I].currentIndex * u.offsetWidth, E[I].slider.style.transform = `translate3d(${w}px, 0, 0)`, x = w
                }, V = () => {
                    h = {startX: 0, endX: 0, startY: 0, endY: 0}
                }, j = () => {
                    const o = h.endX - h.startX, a = h.endY - h.startY, s = Math.abs(o), l = Math.abs(a);
                    o > 0 && s > d.threshold && E[I].currentIndex > 0 ? z() : o < 0 && s > d.threshold && E[I].currentIndex !== E[I].elementsLength - 1 ? R() : a < 0 && l > d.threshold && d.swipeClose ? U() : B()
                }, W = () => {
                    A || (A = !0, window.requestAnimationFrame((() => {
                        B(), A = !1
                    })))
                }, F = o => {
                    o.preventDefault(), I = T(o.currentTarget), O(E[I].gallery.indexOf(o.currentTarget))
                }, G = o => {
                    o.target === p ? z() : o.target === b ? R() : (o.target === _ || !1 === f && !1 === g && o.target.classList.contains("tobii__slide") && d.docClose) && U(), o.stopPropagation()
                }, J = o => {
                    const a = Array.prototype.slice.call(u.querySelectorAll(`.tobii__btn:not([disabled]), .tobii__slide--is-active ${s.join(", .tobii__slide--is-active ")}`)).filter((o => !!(o.offsetWidth || o.offsetHeight || o.getClientRects().length))),
                        d = a.indexOf(document.activeElement);
                    9 === o.keyCode || "Tab" === o.code ? o.shiftKey && 0 === d ? (a[a.length - 1].focus(), o.preventDefault()) : o.shiftKey || d !== a.length - 1 || (a[0].focus(), o.preventDefault()) : 27 === o.keyCode || "Escape" === o.code ? (o.preventDefault(), U()) : 37 === o.keyCode || "ArrowLeft" === o.code ? (o.preventDefault(), z()) : 39 !== o.keyCode && "ArrowRight" !== o.code || (o.preventDefault(), R())
                }, K = o => {
                    be(o.target) || (o.stopPropagation(), f = !1, g = !1, y = !0, h.startX = o.touches[0].pageX, h.startY = o.touches[0].pageY, ce() && E[I].slider.classList.add("tobii__slider--is-dragging"))
                }, Q = o => {
                    o.stopPropagation(), y && (h.endX = o.touches[0].pageX, h.endY = o.touches[0].pageY, ne())
                }, Z = o => {
                    o.stopPropagation(), y = !1, E[I].slider.classList.remove("tobii__slider--is-dragging"), h.endX && j(), V()
                }, ee = o => {
                    be(o.target) || (o.preventDefault(), o.stopPropagation(), f = !1, g = !1, y = !0, h.startX = o.pageX, h.startY = o.pageY, ce() && E[I].slider.classList.add("tobii__slider--is-dragging"))
                }, te = o => {
                    o.preventDefault(), y && (h.endX = o.pageX, h.endY = o.pageY, ne())
                }, ie = o => {
                    o.stopPropagation(), y = !1, E[I].slider.classList.remove("tobii__slider--is-dragging"), h.endX && j(), V()
                }, re = () => {
                    y = !1
                }, ne = () => {
                    Math.abs(h.startX - h.endX) > 0 && !g && E[I].elementsLength > 1 ? (E[I].slider.style.transform = `translate3d(${x - Math.round(h.startX - h.endX)}px, 0, 0)`, f = !0, g = !1) : Math.abs(h.startY - h.endY) > 0 && !f && d.swipeClose && (E[I].slider.style.transform = `translate3d(${x}px, -${Math.round(h.startY - h.endY)}px, 0)`, f = !1, g = !0)
                }, ae = () => {
                    d.keyboard && window.addEventListener("keydown", J), window.addEventListener("resize", W), window.addEventListener("popstate", U), u.addEventListener("click", G), d.draggable && ce() && (u.addEventListener("touchstart", K), u.addEventListener("touchmove", Q), u.addEventListener("touchend", Z), u.addEventListener("mousedown", ee), u.addEventListener("mouseup", ie), u.addEventListener("mousemove", te), u.addEventListener("contextmenu", re))
                }, se = () => {
                    d.keyboard && window.removeEventListener("keydown", J), window.removeEventListener("resize", W), window.removeEventListener("popstate", U), u.removeEventListener("click", G), d.draggable && ce() && (u.removeEventListener("touchstart", K), u.removeEventListener("touchmove", Q), u.removeEventListener("touchend", Z), u.removeEventListener("mousedown", ee), u.removeEventListener("mouseup", ie), u.removeEventListener("mousemove", te), u.removeEventListener("contextmenu", re))
                }, oe = () => {
                    (d.draggable && d.swipeClose && ce() && !E[I].slider.classList.contains("tobii__slider--is-draggable") || d.draggable && E[I].elementsLength > 1 && !E[I].slider.classList.contains("tobii__slider--is-draggable")) && E[I].slider.classList.add("tobii__slider--is-draggable"), !d.nav || 1 === E[I].elementsLength || "auto" === d.nav && ce() ? (p.setAttribute("aria-hidden", "true"), p.disabled = !0, b.setAttribute("aria-hidden", "true"), b.disabled = !0) : (p.setAttribute("aria-hidden", "false"), p.disabled = !1, b.setAttribute("aria-hidden", "false"), b.disabled = !1), m.setAttribute("aria-hidden", d.counter && 1 !== E[I].elementsLength ? "false" : "true")
                }, de = o => {
                    B(), m.textContent = `${E[I].currentIndex + 1}/${E[I].elementsLength}`, (o => {
                        (!0 === d.nav || "auto" === d.nav) && !ce() && E[I].elementsLength > 1 ? (p.setAttribute("aria-hidden", "true"), p.disabled = !0, b.setAttribute("aria-hidden", "true"), b.disabled = !0, 1 === E[I].elementsLength ? d.close && _.focus() : 0 === E[I].currentIndex ? (b.setAttribute("aria-hidden", "false"), b.disabled = !1, b.focus()) : E[I].currentIndex === E[I].elementsLength - 1 ? (p.setAttribute("aria-hidden", "false"), p.disabled = !1, p.focus()) : (p.setAttribute("aria-hidden", "false"), p.disabled = !1, b.setAttribute("aria-hidden", "false"), b.disabled = !1, "left" === o ? p.focus() : b.focus())) : d.close && _.focus()
                    })(o)
                }, le = () => {
                    ue() && U(), Object.entries(E).forEach((o => {
                        o[1].gallery.forEach((o => {
                            q(o)
                        }))
                    })), E = {}, S = I = null;
                    for (const o in a) a[o].onReset()
                }, ue = () => "false" === u.getAttribute("aria-hidden"), ce = () => "ontouchstart" in window,
                be = o => -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(o.nodeName) || o === p || o === b || o === _;
            return (o => {
                if (document.querySelector("div.tobii")) return void console.log("Multiple lightbox instances not supported.");
                d = (o => ({
                    selector: ".lightbox",
                    captions: !0,
                    captionsSelector: "img",
                    captionAttribute: "alt",
                    captionText: null,
                    nav: "auto",
                    navText: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="15 6 9 12 15 18" /></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="9 6 15 12 9 18" /></svg>'],
                    navLabel: ["Previous image", "Next image"],
                    close: !0,
                    closeText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>',
                    closeLabel: "Close lightbox",
                    loadingIndicatorLabel: "Image loading",
                    counter: !0,
                    download: !1,
                    downloadText: "",
                    downloadLabel: "Download image",
                    keyboard: !0,
                    zoom: !0,
                    zoomText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="16 4 20 4 20 8" /><line x1="14" y1="10" x2="20" y2="4" /><polyline points="8 20 4 20 4 16" /><line x1="4" y1="20" x2="10" y2="14" /><polyline points="16 20 20 20 20 16" /><line x1="14" y1="14" x2="20" y2="20" /><polyline points="8 4 4 4 4 8" /><line x1="4" y1="4" x2="10" y2="10" /></svg>',
                    docClose: !0,
                    swipeClose: !0,
                    hideScrollbar: !0,
                    draggable: !0,
                    threshold: 100,
                    rtl: !1,
                    loop: !1,
                    autoplayVideo: !1,
                    modal: !1,
                    theme: "tobii--theme-default", ...o
                }))(o), u || (u = document.createElement("div"), u.setAttribute("role", "dialog"), u.setAttribute("aria-hidden", "true"), u.classList.add("tobii"), u.classList.add(d.theme), p = document.createElement("button"), p.className = "tobii__btn tobii__btn--previous", p.setAttribute("type", "button"), p.setAttribute("aria-label", d.navLabel[0]), p.innerHTML = d.navText[0], u.appendChild(p), b = document.createElement("button"), b.className = "tobii__btn tobii__btn--next", b.setAttribute("type", "button"), b.setAttribute("aria-label", d.navLabel[1]), b.innerHTML = d.navText[1], u.appendChild(b), _ = document.createElement("button"), _.className = "tobii__btn tobii__btn--close", _.setAttribute("type", "button"), _.setAttribute("aria-label", d.closeLabel), _.innerHTML = d.closeText, u.appendChild(_), m = document.createElement("div"), m.className = "tobii__counter", u.appendChild(m), document.body.appendChild(u));
                const a = document.querySelectorAll(d.selector);
                if (!a) throw new Error(`Ups, I can't find the selector ${d.selector} on this website.`);
                const s = [];
                a.forEach((o => {
                    const a = o.hasAttribute("data-group") ? o.getAttribute("data-group") : "default";
                    let d = o.href;
                    o.hasAttribute("data-target") && (d = o.getAttribute("data-target")), d += "__" + a, void 0 !== s[d] ? o.addEventListener("click", (o => {
                        M(a), O(), o.preventDefault()
                    })) : (s[d] = 1, C(o))
                }))
            })(o), n.open = O, n.previous = z, n.next = R, n.close = U, n.add = C, n.remove = q, n.reset = le, n.destroy = () => {
                le(), u.parentNode.removeChild(u)
            }, n.isOpen = ue, n.slidesIndex = () => E[I].currentIndex, n.select = o => {
                const a = E[I].currentIndex;
                if (!ue()) throw new Error("Ups, I'm closed.");
                if (ue()) {
                    if (!o && 0 !== o) throw new Error("Ups, no slide specified.");
                    if (o === E[I].currentIndex) throw new Error(`Ups, slide ${o} is already selected.`);
                    if (-1 === o || o >= E[I].elementsLength) throw new Error(`Ups, I can't find slide ${o}.`)
                }
                E[I].currentIndex = o, H(a), $(o), o < a && (de("left"), D(a), X(o - 1)), o > a && (de("right"), D(a), X(o + 1))
            }, n.slidesCount = () => E[I].elementsLength, n.selectGroup = M, n.currentGroup = () => null !== I ? I : S, n.on = (o, a) => {
                u.addEventListener(o, a)
            }, n.off = (o, a) => {
                u.removeEventListener(o, a)
            }, n
        };
        a()({
            name: "Mobile App Landing Page",
            url: "https://www.producthunt.com/posts/mobile-app-landing-page",
            bottom: "96px",
            width: "450px"
        }), window.addEventListener("load", (function addDarkmodeWidget() {
            (new (d())).showWidget()
        }))
    })()
})();