console.log( "Fichier carousel.js chargé !" );
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
    // Save the require from previous bundle to this closure if any
    var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
    var nodeRequire = typeof require === 'function' && require;
  
    function newRequire(name, jumped) {
      if (!cache[name]) {
        if (!modules[name]) {
          // if we cannot find the module within our internal map or
          // cache jump to the current global require ie. the last bundle
          // that was added to the page.
          var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
          if (!jumped && currentRequire) {
            return currentRequire(name, true);
          }
  
          // If there are other bundles on this page the require from the
          // previous one is saved to 'previousRequire'. Repeat this as
          // many times as there are bundles until the module is found or
          // we exhaust the require chain.
          if (previousRequire) {
            return previousRequire(name, true);
          }
  
          // Try the node require function if it exists.
          if (nodeRequire && typeof name === 'string') {
            return nodeRequire(name);
          }
  
          var err = new Error('Cannot find module \'' + name + '\'');
          err.code = 'MODULE_NOT_FOUND';
          throw err;
        }
  
        localRequire.resolve = resolve;
        localRequire.cache = {};
  
        var module = cache[name] = new newRequire.Module(name);
  
        modules[name][0].call(module.exports, localRequire, module, module.exports, this);
      }
  
      return cache[name].exports;
  
      function localRequire(x){
        return newRequire(localRequire.resolve(x));
      }
  
      function resolve(x){
        return modules[name][1][x] || x;
      }
    }
  
    function Module(moduleName) {
      this.id = moduleName;
      this.bundle = newRequire;
      this.exports = {};
    }
  
    newRequire.isParcelRequire = true;
    newRequire.Module = Module;
    newRequire.modules = modules;
    newRequire.cache = cache;
    newRequire.parent = previousRequire;
    newRequire.register = function (id, exports) {
      modules[id] = [function (require, module) {
        module.exports = exports;
      }, {}];
    };
  
    var error;
    for (var i = 0; i < entry.length; i++) {
      try {
        newRequire(entry[i]);
      } catch (e) {
        // Save first error but execute all entries
        if (!error) {
          error = e;
        }
      }
    }
  
    if (entry.length) {
      // Expose entry point to Node, AMD or browser globals
      // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
      var mainExports = newRequire(entry[entry.length - 1]);
  
      // CommonJS
      if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = mainExports;
  
      // RequireJS
      } else if (typeof define === "function" && define.amd) {
       define(function () {
         return mainExports;
       });
  
      // <script>
      } else if (globalName) {
        this[globalName] = mainExports;
      }
    }
  
    // Override the current require with this new one
    parcelRequire = newRequire;
  
    if (error) {
      // throw error from earlier, _after updating parcelRequire_
      throw error;
    }
  
    return newRequire;
  })({"node_modules/insert-css/index.js":[function(require,module,exports) {
  var inserted = [];
  
  module.exports = function (css) {
      if (inserted.indexOf(css) >= 0) return;
      inserted.push(css);
      
      var elem = document.createElement('style');
      var text = document.createTextNode(css);
      elem.appendChild(text);
      
      if (document.head.childNodes.length) {
          document.head.insertBefore(elem, document.head.childNodes[0]);
      }
      else {
          document.head.appendChild(elem);
      }
  };
  
  },{}],"node_modules/normalize-css/normalize.js":[function(require,module,exports) {
  module.exports = "/*! normalize.css v2.1.3 | MIT License | git.io/normalize */\n\n/* ==========================================================================\n   HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined in IE 8/9.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n    display: block;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 8/9.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9.\n * Hide the `template` element in IE, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n    display: none;\n}\n\n/* ==========================================================================\n   Base\n   ========================================================================== */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-family: sans-serif; /* 1 */\n    -ms-text-size-adjust: 100%; /* 2 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n    background: transparent;\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/* ==========================================================================\n   Typography\n   ========================================================================== */\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari 5, and Chrome.\n */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9, Safari 5, and Chrome.\n */\n\nabbr[title] {\n    border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\n */\n\nb,\nstrong {\n    font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari 5 and Chrome.\n */\n\ndfn {\n    font-style: italic;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n    height: 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n    background: #ff0;\n    color: #000;\n}\n\n/**\n * Correct font family set oddly in Safari 5 and Chrome.\n */\n\ncode,\nkbd,\npre,\nsamp {\n    font-family: monospace, serif;\n    font-size: 1em;\n}\n\n/**\n * Improve readability of pre-formatted text in all browsers.\n */\n\npre {\n    white-space: pre-wrap;\n}\n\n/**\n * Set consistent quote types.\n */\n\nq {\n    quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsup {\n    top: -0.5em;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\n/* ==========================================================================\n   Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9.\n */\n\nimg {\n    border: 0;\n}\n\n/**\n * Correct overflow displayed oddly in IE 9.\n */\n\nsvg:not(:root) {\n    overflow: hidden;\n}\n\n/* ==========================================================================\n   Figures\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari 5.\n */\n\nfigure {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Forms\n   ========================================================================== */\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * 1. Correct font family not being inherited in all browsers.\n * 2. Correct font size not being inherited in all browsers.\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 2 */\n    margin: 0; /* 3 */\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/* ==========================================================================\n   Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n"
  
  },{}],"node_modules/normalize-css/index.js":[function(require,module,exports) {
  var insert = require('insert-css');
  var normalize = require('./normalize');
  
  insert(normalize);
  
  },{"insert-css":"node_modules/insert-css/index.js","./normalize":"node_modules/normalize-css/normalize.js"}],"../../../.nvm/versions/node/v16.13.2/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
  var bundleURL = null;
  
  function getBundleURLCached() {
    if (!bundleURL) {
      bundleURL = getBundleURL();
    }
  
    return bundleURL;
  }
  
  function getBundleURL() {
    // Attempt to find the URL of the current script and use that as the base URL
    try {
      throw new Error();
    } catch (err) {
      var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
  
      if (matches) {
        return getBaseURL(matches[0]);
      }
    }
  
    return '/';
  }
  
  function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
  }
  
  exports.getBundleURL = getBundleURLCached;
  exports.getBaseURL = getBaseURL;
  },{}],"../../../.nvm/versions/node/v16.13.2/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
  var bundle = require('./bundle-url');
  
  function updateLink(link) {
    var newLink = link.cloneNode();
  
    newLink.onload = function () {
      link.remove();
    };
  
    newLink.href = link.href.split('?')[0] + '?' + Date.now();
    link.parentNode.insertBefore(newLink, link.nextSibling);
  }
  
  var cssTimeout = null;
  
  function reloadCSS() {
    if (cssTimeout) {
      return;
    }
  
    cssTimeout = setTimeout(function () {
      var links = document.querySelectorAll('link[rel="stylesheet"]');
  
      for (var i = 0; i < links.length; i++) {
        if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
          updateLink(links[i]);
        }
      }
  
      cssTimeout = null;
    }, 50);
  }
  
  module.exports = reloadCSS;
  },{"./bundle-url":"../../../.nvm/versions/node/v16.13.2/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"assets/scss/main.scss":[function(require,module,exports) {
  var reloadCSS = require('_css_loader');
  
  module.hot.dispose(reloadCSS);
  module.hot.accept(reloadCSS);
  },{"_css_loader":"../../../.nvm/versions/node/v16.13.2/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/js/components/carousel.js":[function(require,module,exports) {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  
  console.log("Fichier carousel.js chargé !");
  var carousel = {
    // Propriété contenant la taille du carousel à l'écran
    // Je n'ai pas cette info initialement, je vais devoir la trouver
    carouselWidth: null,
    // J'ai aussi besoin de stocker le numéro de la slide actuelle
    currentSlideNumber: 0,
    // BONUS : Je stocke aussi le nombre de slides max / total
    maxSlides: 0,
    // Je stocke l'élément du container du carousel
    // pour économiser des querySelector ;)
    carouselContainerElement: null,
    // Méthode d'initialisation
    init: function init() {
      console.log("Composant Carousel initialisé !"); // Je vais commencer par chercher la taille du carousel
      // Pour ça, je récupère d'abord l'élément
  
      carousel.carouselContainerElement = document.querySelector(".customer-quotes__container"); // Récupération de la taille d'un élément en JS :
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth
  
      carousel.carouselWidth = carousel.carouselContainerElement.offsetWidth; // Je récupère les trois boutons qui permettent de défiler
  
      var buttonElements = document.querySelectorAll(".customer-quotes__nav-item"); // buttonElements contient plusieurs HTMLElement, on doit boucler dessus
      // si on veut mettre un écouteur sur chacun d'eux ;)
  
      var _iterator = _createForOfIteratorHelper(buttonElements),
          _step;
  
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var currentButtonElement = _step.value;
          currentButtonElement.addEventListener("click", carousel.handleButtonClick); // console.log( currentButtonElement );
        } // BONUS : Pour que l'autoplay marche peu importe le nombre de slide
        // on stocke avec le nombre de boutons, on doit normalement avoir autant de <p> dans le container
        // => le nombre de commentaires 
  
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
  
      carousel.maxSlides = buttonElements.length; // TODO Bonus : Changer automatiquement de commentaires toutes les 10s
  
      setInterval(carousel.autoplay, 2000); // 10000ms => 10s
    },
    //============================================
    // Event Handlers
    //============================================
    handleButtonClick: function handleButtonClick(evt) {
      // Récupération du bouton sur lequel on vient de cliquer
      // => celui qui a déclenché l'appel a cette méthode
      // console.log( evt.currentTarget );
      // TODO Challenge : Modifier le commentaire affiché suite au clic 
      // 1. Je récupère le "numéro" du bouton
      // 2. Je le converti en Nombre entier, car un dataset sera toujours récupéré sous forme de String
      var slideNumber = Number(evt.currentTarget.dataset.slideNumber); // console.log( slideNumber );
      // TIPS : il faut scroll le container ;)
      // Je fais pour cela une méthode du module séparée qui attends le numéro de la slide en param
      // Ce découpage me facilitera la vie pour le bonus ;)
  
      carousel.displaySlide(slideNumber);
    },
    //============================================
    // Methods
    //============================================
    // Méthode qui s'occupe de défiler jusqu'a la slide au numéro fourni en paramètre
    displaySlide: function displaySlide(dataSlideNumber) {
      // TIPS : Au cas où l'utilisateur modifie la taille de son écran entre le chargement
      // de la page et le clic sur les bouton de slide, il faut recalculer la largeur du carousel
      carousel.carouselWidth = carousel.carouselContainerElement.offsetWidth; // J'indique, notamment pour l'autoplay, que la slide actuelle est celle correspondant au bouton cliqué
  
      carousel.currentSlideNumber = dataSlideNumber; // console.log( carousel.currentSlideNumber );
      // Je calcule de combien de pixel je dois scroll pour arriver sur la slide demandée
  
      var horizontalScrollAmount = carousel.carouselWidth * dataSlideNumber; // Maintenant que je sais de combien de pixel je dois défiler
      // j'utilise element.scrollTo pour défiler du montant demandé
      // DOC : https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo
  
      carousel.carouselContainerElement.scrollTo(horizontalScrollAmount, 0); // Info : On utilise .scrollTo() plutot que .scroll() car ce dernier n'est supporté
      // qu'à 75% d'après CanIUse, mais les deux ont un fonctionnement identique.
      // TODO Challenge : Changer le bouton "actif"
      // On commence par récupérer tout les boutons
  
      var allButtons = document.querySelectorAll('.customer-quotes__nav-item'); // Et leur retirer le statut actif (normalement y en a qu'un, mais on sait jamais)
  
      var _iterator2 = _createForOfIteratorHelper(allButtons),
          _step2;
  
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var buttonElement = _step2.value;
          buttonElement.classList.remove("active");
        } // Ensuite, je remet la classe active sur le bouton cliqué
        // Comme je n'ai plus accès à evt.currentTarget, je vais devoir ruser
        // j'ai le dataset cliqué, qui correspond heureusement aussi à l'index 
        // de l'élément dans le tableau allButtons
  
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
  
      var clickedButton = allButtons[dataSlideNumber];
      clickedButton.classList.add("active");
    },
    // Méthode qui sera appellée toutes les 10s pour passer d'un commentaire à l'autre
    autoplay: function autoplay() {
      // Première chose a faire, j'incrémente le numéro de la slide actuelle stocké dans le module
      carousel.currentSlideNumber += 1; // Je vérifié également que je ne dépasse pas carousel.maxSlides
  
      if (carousel.currentSlideNumber >= carousel.maxSlides) {
        // Si c'est le cas, on le remet à zéro, et on revient donc sur la première slide
        carousel.currentSlideNumber = 0;
      }
  
      carousel.displaySlide(carousel.currentSlideNumber); // console.log( carousel.currentSlideNumber );
    }
  }; // On déclenche l'initialisation du module une fois le DOM chargé
  
  document.addEventListener("DOMContentLoaded", carousel.init);
  },{}],"assets/main.js":[function(require,module,exports) {
  "use strict";
  
  require("normalize-css");
  
  require("./scss/main.scss");
  
  require("./js/components/carousel.js");
  
  // J'importe reset-css (qui s'install automatiquement grace a parcel et NPM)
  // J'importe également mon fichier SCSS principal
  // Parcel va alors installer le necessaire pour la traduction du Sass
  // Je n'oublie pas d'inclure les différents composants
  console.log("Fichier main.js chargé :)");
  },{"normalize-css":"node_modules/normalize-css/index.js","./scss/main.scss":"assets/scss/main.scss","./js/components/carousel.js":"assets/js/components/carousel.js"}],"../../../.nvm/versions/node/v16.13.2/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
  var global = arguments[3];
  var OVERLAY_ID = '__parcel__error__overlay__';
  var OldModule = module.bundle.Module;
  
  function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
      data: module.bundle.hotData,
      _acceptCallbacks: [],
      _disposeCallbacks: [],
      accept: function (fn) {
        this._acceptCallbacks.push(fn || function () {});
      },
      dispose: function (fn) {
        this._disposeCallbacks.push(fn);
      }
    };
    module.bundle.hotData = null;
  }
  
  module.bundle.Module = Module;
  var checkedAssets, assetsToAccept;
  var parent = module.bundle.parent;
  
  if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = "" || location.hostname;
    var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + ':' + "42099" + '/');
  
    ws.onmessage = function (event) {
      checkedAssets = {};
      assetsToAccept = [];
      var data = JSON.parse(event.data);
  
      if (data.type === 'update') {
        var handled = false;
        data.assets.forEach(function (asset) {
          if (!asset.isNew) {
            var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
  
            if (didAccept) {
              handled = true;
            }
          }
        }); // Enable HMR for CSS by default.
  
        handled = handled || data.assets.every(function (asset) {
          return asset.type === 'css' && asset.generated.js;
        });
  
        if (handled) {
          console.clear();
          data.assets.forEach(function (asset) {
            hmrApply(global.parcelRequire, asset);
          });
          assetsToAccept.forEach(function (v) {
            hmrAcceptRun(v[0], v[1]);
          });
        } else if (location.reload) {
          // `location` global exists in a web worker context but lacks `.reload()` function.
          location.reload();
        }
      }
  
      if (data.type === 'reload') {
        ws.close();
  
        ws.onclose = function () {
          location.reload();
        };
      }
  
      if (data.type === 'error-resolved') {
        console.log('[parcel] ✨ Error resolved');
        removeErrorOverlay();
      }
  
      if (data.type === 'error') {
        console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
        removeErrorOverlay();
        var overlay = createErrorOverlay(data);
        document.body.appendChild(overlay);
      }
    };
  }
  
  function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
  
    if (overlay) {
      overlay.remove();
    }
  }
  
  function createErrorOverlay(data) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID; // html encode message and stack trace
  
    var message = document.createElement('div');
    var stackTrace = document.createElement('pre');
    message.innerText = data.error.message;
    stackTrace.innerText = data.error.stack;
    overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
    return overlay;
  }
  
  function getParents(bundle, id) {
    var modules = bundle.modules;
  
    if (!modules) {
      return [];
    }
  
    var parents = [];
    var k, d, dep;
  
    for (k in modules) {
      for (d in modules[k][1]) {
        dep = modules[k][1][d];
  
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
          parents.push(k);
        }
      }
    }
  
    if (bundle.parent) {
      parents = parents.concat(getParents(bundle.parent, id));
    }
  
    return parents;
  }
  
  function hmrApply(bundle, asset) {
    var modules = bundle.modules;
  
    if (!modules) {
      return;
    }
  
    if (modules[asset.id] || !bundle.parent) {
      var fn = new Function('require', 'module', 'exports', asset.generated.js);
      asset.isNew = !modules[asset.id];
      modules[asset.id] = [fn, asset.deps];
    } else if (bundle.parent) {
      hmrApply(bundle.parent, asset);
    }
  }
  
  function hmrAcceptCheck(bundle, id) {
    var modules = bundle.modules;
  
    if (!modules) {
      return;
    }
  
    if (!modules[id] && bundle.parent) {
      return hmrAcceptCheck(bundle.parent, id);
    }
  
    if (checkedAssets[id]) {
      return;
    }
  
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([bundle, id]);
  
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
      return true;
    }
  
    return getParents(global.parcelRequire, id).some(function (id) {
      return hmrAcceptCheck(global.parcelRequire, id);
    });
  }
  
  function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
  
    if (cached) {
      cached.hot.data = bundle.hotData;
    }
  
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
      cached.hot._disposeCallbacks.forEach(function (cb) {
        cb(bundle.hotData);
      });
    }
  
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
  
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
      cached.hot._acceptCallbacks.forEach(function (cb) {
        cb();
      });
  
      return true;
    }
  }
  },{}]},{},["../../../.nvm/versions/node/v16.13.2/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/main.js"], null)
  //# sourceMappingURL=main.db1b0b10.js.map