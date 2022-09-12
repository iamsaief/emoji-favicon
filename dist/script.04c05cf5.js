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
})({"data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 20220912144357
// https://emoji-api.com/emojis?access_key=b19edaf15ecc00f977981d06c44f22de6efa8125
var _default = [{
  slug: 'grinning-face',
  character: '😀',
  unicodeName: 'grinning face',
  codePoint: '1F600',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'grinning-face-with-big-eyes',
  character: '😃',
  unicodeName: 'grinning face with big eyes',
  codePoint: '1F603',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'grinning-face-with-smiling-eyes',
  character: '😄',
  unicodeName: 'grinning face with smiling eyes',
  codePoint: '1F604',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'beaming-face-with-smiling-eyes',
  character: '😁',
  unicodeName: 'beaming face with smiling eyes',
  codePoint: '1F601',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'grinning-squinting-face',
  character: '😆',
  unicodeName: 'grinning squinting face',
  codePoint: '1F606',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'grinning-face-with-sweat',
  character: '😅',
  unicodeName: 'grinning face with sweat',
  codePoint: '1F605',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'rolling-on-the-floor-laughing',
  character: '🤣',
  unicodeName: 'rolling on the floor laughing',
  codePoint: '1F923',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'face-with-tears-of-joy',
  character: '😂',
  unicodeName: 'face with tears of joy',
  codePoint: '1F602',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'slightly-smiling-face',
  character: '🙂',
  unicodeName: 'slightly smiling face',
  codePoint: '1F642',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'upside-down-face',
  character: '🙃',
  unicodeName: 'upside-down face',
  codePoint: '1F643',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'winking-face',
  character: '😉',
  unicodeName: 'winking face',
  codePoint: '1F609',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'smiling-face-with-smiling-eyes',
  character: '😊',
  unicodeName: 'smiling face with smiling eyes',
  codePoint: '1F60A',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'smiling-face-with-halo',
  character: '😇',
  unicodeName: 'smiling face with halo',
  codePoint: '1F607',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'smiling-face-with-hearts',
  character: '🥰',
  unicodeName: 'smiling face with hearts',
  codePoint: '1F970',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'smiling-face-with-heart-eyes',
  character: '😍',
  unicodeName: 'smiling face with heart-eyes',
  codePoint: '1F60D',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'star-struck',
  character: '🤩',
  unicodeName: 'star-struck',
  codePoint: '1F929',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'face-blowing-a-kiss',
  character: '😘',
  unicodeName: 'face blowing a kiss',
  codePoint: '1F618',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'kissing-face',
  character: '😗',
  unicodeName: 'kissing face',
  codePoint: '1F617',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'smiling-face',
  character: '☺️',
  unicodeName: 'smiling face',
  codePoint: '263A FE0F',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'kissing-face-with-closed-eyes',
  character: '😚',
  unicodeName: 'kissing face with closed eyes',
  codePoint: '1F61A',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'kissing-face-with-smiling-eyes',
  character: '😙',
  unicodeName: 'kissing face with smiling eyes',
  codePoint: '1F619',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'smiling-face-with-tear',
  character: '🥲',
  unicodeName: 'smiling face with tear',
  codePoint: '1F972',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'face-savoring-food',
  character: '😋',
  unicodeName: 'face savoring food',
  codePoint: '1F60B',
  group: 'smileys-emotion',
  subGroup: 'face-tongue'
}, {
  slug: 'face-with-tongue',
  character: '😛',
  unicodeName: 'face with tongue',
  codePoint: '1F61B',
  group: 'smileys-emotion',
  subGroup: 'face-tongue'
}, {
  slug: 'winking-face-with-tongue',
  character: '😜',
  unicodeName: 'winking face with tongue',
  codePoint: '1F61C',
  group: 'smileys-emotion',
  subGroup: 'face-tongue'
}, {
  slug: 'zany-face',
  character: '🤪',
  unicodeName: 'zany face',
  codePoint: '1F92A',
  group: 'smileys-emotion',
  subGroup: 'face-tongue'
}, {
  slug: 'squinting-face-with-tongue',
  character: '😝',
  unicodeName: 'squinting face with tongue',
  codePoint: '1F61D',
  group: 'smileys-emotion',
  subGroup: 'face-tongue'
}, {
  slug: 'money-mouth-face',
  character: '🤑',
  unicodeName: 'money-mouth face',
  codePoint: '1F911',
  group: 'smileys-emotion',
  subGroup: 'face-tongue'
}, {
  slug: 'hugging-face',
  character: '🤗',
  unicodeName: 'hugging face',
  codePoint: '1F917',
  group: 'smileys-emotion',
  subGroup: 'face-hand'
}, {
  slug: 'face-with-hand-over-mouth',
  character: '🤭',
  unicodeName: 'face with hand over mouth',
  codePoint: '1F92D',
  group: 'smileys-emotion',
  subGroup: 'face-hand'
}, {
  slug: 'shushing-face',
  character: '🤫',
  unicodeName: 'shushing face',
  codePoint: '1F92B',
  group: 'smileys-emotion',
  subGroup: 'face-hand'
}, {
  slug: 'thinking-face',
  character: '🤔',
  unicodeName: 'thinking face',
  codePoint: '1F914',
  group: 'smileys-emotion',
  subGroup: 'face-hand'
}, {
  slug: 'zipper-mouth-face',
  character: '🤐',
  unicodeName: 'zipper-mouth face',
  codePoint: '1F910',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'face-with-raised-eyebrow',
  character: '🤨',
  unicodeName: 'face with raised eyebrow',
  codePoint: '1F928',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'neutral-face',
  character: '😐',
  unicodeName: 'neutral face',
  codePoint: '1F610',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'expressionless-face',
  character: '😑',
  unicodeName: 'expressionless face',
  codePoint: '1F611',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'face-without-mouth',
  character: '😶',
  unicodeName: 'face without mouth',
  codePoint: '1F636',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'smirking-face',
  character: '😏',
  unicodeName: 'smirking face',
  codePoint: '1F60F',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'unamused-face',
  character: '😒',
  unicodeName: 'unamused face',
  codePoint: '1F612',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'face-with-rolling-eyes',
  character: '🙄',
  unicodeName: 'face with rolling eyes',
  codePoint: '1F644',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'grimacing-face',
  character: '😬',
  unicodeName: 'grimacing face',
  codePoint: '1F62C',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'lying-face',
  character: '🤥',
  unicodeName: 'lying face',
  codePoint: '1F925',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'relieved-face',
  character: '😌',
  unicodeName: 'relieved face',
  codePoint: '1F60C',
  group: 'smileys-emotion',
  subGroup: 'face-sleepy'
}, {
  slug: 'pensive-face',
  character: '😔',
  unicodeName: 'pensive face',
  codePoint: '1F614',
  group: 'smileys-emotion',
  subGroup: 'face-sleepy'
}, {
  slug: 'sleepy-face',
  character: '😪',
  unicodeName: 'sleepy face',
  codePoint: '1F62A',
  group: 'smileys-emotion',
  subGroup: 'face-sleepy'
}, {
  slug: 'drooling-face',
  character: '🤤',
  unicodeName: 'drooling face',
  codePoint: '1F924',
  group: 'smileys-emotion',
  subGroup: 'face-sleepy'
}, {
  slug: 'sleeping-face',
  character: '😴',
  unicodeName: 'sleeping face',
  codePoint: '1F634',
  group: 'smileys-emotion',
  subGroup: 'face-sleepy'
}, {
  slug: 'face-with-medical-mask',
  character: '😷',
  unicodeName: 'face with medical mask',
  codePoint: '1F637',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'face-with-thermometer',
  character: '🤒',
  unicodeName: 'face with thermometer',
  codePoint: '1F912',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'face-with-head-bandage',
  character: '🤕',
  unicodeName: 'face with head-bandage',
  codePoint: '1F915',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'nauseated-face',
  character: '🤢',
  unicodeName: 'nauseated face',
  codePoint: '1F922',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'face-vomiting',
  character: '🤮',
  unicodeName: 'face vomiting',
  codePoint: '1F92E',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'sneezing-face',
  character: '🤧',
  unicodeName: 'sneezing face',
  codePoint: '1F927',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'hot-face',
  character: '🥵',
  unicodeName: 'hot face',
  codePoint: '1F975',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'cold-face',
  character: '🥶',
  unicodeName: 'cold face',
  codePoint: '1F976',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'woozy-face',
  character: '🥴',
  unicodeName: 'woozy face',
  codePoint: '1F974',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'dizzy-face',
  character: '😵',
  unicodeName: 'dizzy face',
  codePoint: '1F635',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'exploding-head',
  character: '🤯',
  unicodeName: 'exploding head',
  codePoint: '1F92F',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'cowboy-hat-face',
  character: '🤠',
  unicodeName: 'cowboy hat face',
  codePoint: '1F920',
  group: 'smileys-emotion',
  subGroup: 'face-hat'
}, {
  slug: 'partying-face',
  character: '🥳',
  unicodeName: 'partying face',
  codePoint: '1F973',
  group: 'smileys-emotion',
  subGroup: 'face-hat'
}, {
  slug: 'disguised-face',
  character: '🥸',
  unicodeName: 'disguised face',
  codePoint: '1F978',
  group: 'smileys-emotion',
  subGroup: 'face-hat'
}, {
  slug: 'smiling-face-with-sunglasses',
  character: '😎',
  unicodeName: 'smiling face with sunglasses',
  codePoint: '1F60E',
  group: 'smileys-emotion',
  subGroup: 'face-glasses'
}, {
  slug: 'nerd-face',
  character: '🤓',
  unicodeName: 'nerd face',
  codePoint: '1F913',
  group: 'smileys-emotion',
  subGroup: 'face-glasses'
}, {
  slug: 'face-with-monocle',
  character: '🧐',
  unicodeName: 'face with monocle',
  codePoint: '1F9D0',
  group: 'smileys-emotion',
  subGroup: 'face-glasses'
}, {
  slug: 'confused-face',
  character: '😕',
  unicodeName: 'confused face',
  codePoint: '1F615',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'worried-face',
  character: '😟',
  unicodeName: 'worried face',
  codePoint: '1F61F',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'slightly-frowning-face',
  character: '🙁',
  unicodeName: 'slightly frowning face',
  codePoint: '1F641',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'frowning-face',
  character: '☹️',
  unicodeName: 'frowning face',
  codePoint: '2639 FE0F',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'face-with-open-mouth',
  character: '😮',
  unicodeName: 'face with open mouth',
  codePoint: '1F62E',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'hushed-face',
  character: '😯',
  unicodeName: 'hushed face',
  codePoint: '1F62F',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'astonished-face',
  character: '😲',
  unicodeName: 'astonished face',
  codePoint: '1F632',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'flushed-face',
  character: '😳',
  unicodeName: 'flushed face',
  codePoint: '1F633',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'pleading-face',
  character: '🥺',
  unicodeName: 'pleading face',
  codePoint: '1F97A',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'frowning-face-with-open-mouth',
  character: '😦',
  unicodeName: 'frowning face with open mouth',
  codePoint: '1F626',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'anguished-face',
  character: '😧',
  unicodeName: 'anguished face',
  codePoint: '1F627',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'fearful-face',
  character: '😨',
  unicodeName: 'fearful face',
  codePoint: '1F628',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'anxious-face-with-sweat',
  character: '😰',
  unicodeName: 'anxious face with sweat',
  codePoint: '1F630',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'sad-but-relieved-face',
  character: '😥',
  unicodeName: 'sad but relieved face',
  codePoint: '1F625',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'crying-face',
  character: '😢',
  unicodeName: 'crying face',
  codePoint: '1F622',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'loudly-crying-face',
  character: '😭',
  unicodeName: 'loudly crying face',
  codePoint: '1F62D',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'face-screaming-in-fear',
  character: '😱',
  unicodeName: 'face screaming in fear',
  codePoint: '1F631',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'confounded-face',
  character: '😖',
  unicodeName: 'confounded face',
  codePoint: '1F616',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'persevering-face',
  character: '😣',
  unicodeName: 'persevering face',
  codePoint: '1F623',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'disappointed-face',
  character: '😞',
  unicodeName: 'disappointed face',
  codePoint: '1F61E',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'downcast-face-with-sweat',
  character: '😓',
  unicodeName: 'downcast face with sweat',
  codePoint: '1F613',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'weary-face',
  character: '😩',
  unicodeName: 'weary face',
  codePoint: '1F629',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'tired-face',
  character: '😫',
  unicodeName: 'tired face',
  codePoint: '1F62B',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'yawning-face',
  character: '🥱',
  unicodeName: 'yawning face',
  codePoint: '1F971',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'face-with-steam-from-nose',
  character: '😤',
  unicodeName: 'face with steam from nose',
  codePoint: '1F624',
  group: 'smileys-emotion',
  subGroup: 'face-negative'
}, {
  slug: 'pouting-face',
  character: '😡',
  unicodeName: 'pouting face',
  codePoint: '1F621',
  group: 'smileys-emotion',
  subGroup: 'face-negative'
}, {
  slug: 'angry-face',
  character: '😠',
  unicodeName: 'angry face',
  codePoint: '1F620',
  group: 'smileys-emotion',
  subGroup: 'face-negative'
}, {
  slug: 'face-with-symbols-on-mouth',
  character: '🤬',
  unicodeName: 'face with symbols on mouth',
  codePoint: '1F92C',
  group: 'smileys-emotion',
  subGroup: 'face-negative'
}, {
  slug: 'smiling-face-with-horns',
  character: '😈',
  unicodeName: 'smiling face with horns',
  codePoint: '1F608',
  group: 'smileys-emotion',
  subGroup: 'face-negative'
}, {
  slug: 'angry-face-with-horns',
  character: '👿',
  unicodeName: 'angry face with horns',
  codePoint: '1F47F',
  group: 'smileys-emotion',
  subGroup: 'face-negative'
}, {
  slug: 'skull',
  character: '💀',
  unicodeName: 'skull',
  codePoint: '1F480',
  group: 'smileys-emotion',
  subGroup: 'face-negative'
}, {
  slug: 'skull-and-crossbones',
  character: '☠️',
  unicodeName: 'skull and crossbones',
  codePoint: '2620 FE0F',
  group: 'smileys-emotion',
  subGroup: 'face-negative'
}, {
  slug: 'pile-of-poo',
  character: '💩',
  unicodeName: 'pile of poo',
  codePoint: '1F4A9',
  group: 'smileys-emotion',
  subGroup: 'face-costume'
}, {
  slug: 'clown-face',
  character: '🤡',
  unicodeName: 'clown face',
  codePoint: '1F921',
  group: 'smileys-emotion',
  subGroup: 'face-costume'
}, {
  slug: 'ogre',
  character: '👹',
  unicodeName: 'ogre',
  codePoint: '1F479',
  group: 'smileys-emotion',
  subGroup: 'face-costume'
}, {
  slug: 'goblin',
  character: '👺',
  unicodeName: 'goblin',
  codePoint: '1F47A',
  group: 'smileys-emotion',
  subGroup: 'face-costume'
}, {
  slug: 'ghost',
  character: '👻',
  unicodeName: 'ghost',
  codePoint: '1F47B',
  group: 'smileys-emotion',
  subGroup: 'face-costume'
}, {
  slug: 'alien',
  character: '👽',
  unicodeName: 'alien',
  codePoint: '1F47D',
  group: 'smileys-emotion',
  subGroup: 'face-costume'
}, {
  slug: 'alien-monster',
  character: '👾',
  unicodeName: 'alien monster',
  codePoint: '1F47E',
  group: 'smileys-emotion',
  subGroup: 'face-costume'
}, {
  slug: 'robot',
  character: '🤖',
  unicodeName: 'robot',
  codePoint: '1F916',
  group: 'smileys-emotion',
  subGroup: 'face-costume'
}, {
  slug: 'grinning-cat',
  character: '😺',
  unicodeName: 'grinning cat',
  codePoint: '1F63A',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'grinning-cat-with-smiling-eyes',
  character: '😸',
  unicodeName: 'grinning cat with smiling eyes',
  codePoint: '1F638',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'cat-with-tears-of-joy',
  character: '😹',
  unicodeName: 'cat with tears of joy',
  codePoint: '1F639',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'smiling-cat-with-heart-eyes',
  character: '😻',
  unicodeName: 'smiling cat with heart-eyes',
  codePoint: '1F63B',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'cat-with-wry-smile',
  character: '😼',
  unicodeName: 'cat with wry smile',
  codePoint: '1F63C',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'kissing-cat',
  character: '😽',
  unicodeName: 'kissing cat',
  codePoint: '1F63D',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'weary-cat',
  character: '🙀',
  unicodeName: 'weary cat',
  codePoint: '1F640',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'crying-cat',
  character: '😿',
  unicodeName: 'crying cat',
  codePoint: '1F63F',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'pouting-cat',
  character: '😾',
  unicodeName: 'pouting cat',
  codePoint: '1F63E',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'see-no-evil-monkey',
  character: '🙈',
  unicodeName: 'see-no-evil monkey',
  codePoint: '1F648',
  group: 'smileys-emotion',
  subGroup: 'monkey-face'
}, {
  slug: 'hear-no-evil-monkey',
  character: '🙉',
  unicodeName: 'hear-no-evil monkey',
  codePoint: '1F649',
  group: 'smileys-emotion',
  subGroup: 'monkey-face'
}, {
  slug: 'speak-no-evil-monkey',
  character: '🙊',
  unicodeName: 'speak-no-evil monkey',
  codePoint: '1F64A',
  group: 'smileys-emotion',
  subGroup: 'monkey-face'
}, {
  slug: 'kiss-mark',
  character: '💋',
  unicodeName: 'kiss mark',
  codePoint: '1F48B',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'love-letter',
  character: '💌',
  unicodeName: 'love letter',
  codePoint: '1F48C',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'heart-with-arrow',
  character: '💘',
  unicodeName: 'heart with arrow',
  codePoint: '1F498',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'heart-with-ribbon',
  character: '💝',
  unicodeName: 'heart with ribbon',
  codePoint: '1F49D',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'sparkling-heart',
  character: '💖',
  unicodeName: 'sparkling heart',
  codePoint: '1F496',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'growing-heart',
  character: '💗',
  unicodeName: 'growing heart',
  codePoint: '1F497',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'beating-heart',
  character: '💓',
  unicodeName: 'beating heart',
  codePoint: '1F493',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'revolving-hearts',
  character: '💞',
  unicodeName: 'revolving hearts',
  codePoint: '1F49E',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'two-hearts',
  character: '💕',
  unicodeName: 'two hearts',
  codePoint: '1F495',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'heart-decoration',
  character: '💟',
  unicodeName: 'heart decoration',
  codePoint: '1F49F',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'heart-exclamation',
  character: '❣️',
  unicodeName: 'heart exclamation',
  codePoint: '2763 FE0F',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'broken-heart',
  character: '💔',
  unicodeName: 'broken heart',
  codePoint: '1F494',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'red-heart',
  character: '❤️',
  unicodeName: 'red heart',
  codePoint: '2764 FE0F',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'orange-heart',
  character: '🧡',
  unicodeName: 'orange heart',
  codePoint: '1F9E1',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'yellow-heart',
  character: '💛',
  unicodeName: 'yellow heart',
  codePoint: '1F49B',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'green-heart',
  character: '💚',
  unicodeName: 'green heart',
  codePoint: '1F49A',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'blue-heart',
  character: '💙',
  unicodeName: 'blue heart',
  codePoint: '1F499',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'purple-heart',
  character: '💜',
  unicodeName: 'purple heart',
  codePoint: '1F49C',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'brown-heart',
  character: '🤎',
  unicodeName: 'brown heart',
  codePoint: '1F90E',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'black-heart',
  character: '🖤',
  unicodeName: 'black heart',
  codePoint: '1F5A4',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'white-heart',
  character: '🤍',
  unicodeName: 'white heart',
  codePoint: '1F90D',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'hundred-points',
  character: '💯',
  unicodeName: 'hundred points',
  codePoint: '1F4AF',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'anger-symbol',
  character: '💢',
  unicodeName: 'anger symbol',
  codePoint: '1F4A2',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'collision',
  character: '💥',
  unicodeName: 'collision',
  codePoint: '1F4A5',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'dizzy',
  character: '💫',
  unicodeName: 'dizzy',
  codePoint: '1F4AB',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'sweat-droplets',
  character: '💦',
  unicodeName: 'sweat droplets',
  codePoint: '1F4A6',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'dashing-away',
  character: '💨',
  unicodeName: 'dashing away',
  codePoint: '1F4A8',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'hole',
  character: '🕳️',
  unicodeName: 'hole',
  codePoint: '1F573 FE0F',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'bomb',
  character: '💣',
  unicodeName: 'bomb',
  codePoint: '1F4A3',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'speech-balloon',
  character: '💬',
  unicodeName: 'speech balloon',
  codePoint: '1F4AC',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'eye-in-speech-bubble',
  character: '👁️‍🗨️',
  unicodeName: 'eye in speech bubble',
  codePoint: '1F441 FE0F 200D 1F5E8 FE0F',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'left-speech-bubble',
  character: '🗨️',
  unicodeName: 'left speech bubble',
  codePoint: '1F5E8 FE0F',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'right-anger-bubble',
  character: '🗯️',
  unicodeName: 'right anger bubble',
  codePoint: '1F5EF FE0F',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'thought-balloon',
  character: '💭',
  unicodeName: 'thought balloon',
  codePoint: '1F4AD',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'zzz',
  character: '💤',
  unicodeName: 'zzz',
  codePoint: '1F4A4',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'waving-hand',
  character: '👋',
  unicodeName: 'waving hand',
  codePoint: '1F44B',
  group: 'people-body',
  subGroup: 'hand-fingers-open',
  variants: [{
    slug: 'waving-hand-light-skin-tone',
    character: '👋🏻'
  }, {
    slug: 'waving-hand-medium-light-skin-tone',
    character: '👋🏼'
  }, {
    slug: 'waving-hand-medium-skin-tone',
    character: '👋🏽'
  }, {
    slug: 'waving-hand-medium-dark-skin-tone',
    character: '👋🏾'
  }, {
    slug: 'waving-hand-dark-skin-tone',
    character: '👋🏿'
  }, {
    slug: 'e1-0-waving-hand-light-skin-tone',
    character: '👋🏻'
  }, {
    slug: 'e1-0-waving-hand-medium-light-skin-tone',
    character: '👋🏼'
  }, {
    slug: 'e1-0-waving-hand-medium-skin-tone',
    character: '👋🏽'
  }, {
    slug: 'e1-0-waving-hand-medium-dark-skin-tone',
    character: '👋🏾'
  }, {
    slug: 'e1-0-waving-hand-dark-skin-tone',
    character: '👋🏿'
  }]
}, {
  slug: 'raised-back-of-hand',
  character: '🤚',
  unicodeName: 'raised back of hand',
  codePoint: '1F91A',
  group: 'people-body',
  subGroup: 'hand-fingers-open',
  variants: [{
    slug: 'raised-back-of-hand-light-skin-tone',
    character: '🤚🏻'
  }, {
    slug: 'raised-back-of-hand-medium-light-skin-tone',
    character: '🤚🏼'
  }, {
    slug: 'raised-back-of-hand-medium-skin-tone',
    character: '🤚🏽'
  }, {
    slug: 'raised-back-of-hand-medium-dark-skin-tone',
    character: '🤚🏾'
  }, {
    slug: 'raised-back-of-hand-dark-skin-tone',
    character: '🤚🏿'
  }, {
    slug: 'e3-0-raised-back-of-hand-light-skin-tone',
    character: '🤚🏻'
  }, {
    slug: 'e3-0-raised-back-of-hand-medium-light-skin-tone',
    character: '🤚🏼'
  }, {
    slug: 'e3-0-raised-back-of-hand-medium-skin-tone',
    character: '🤚🏽'
  }, {
    slug: 'e3-0-raised-back-of-hand-medium-dark-skin-tone',
    character: '🤚🏾'
  }, {
    slug: 'e3-0-raised-back-of-hand-dark-skin-tone',
    character: '🤚🏿'
  }]
}, {
  slug: 'hand-with-fingers-splayed',
  character: '🖐️',
  unicodeName: 'hand with fingers splayed',
  codePoint: '1F590 FE0F',
  group: 'people-body',
  subGroup: 'hand-fingers-open'
}, {
  slug: 'hand-with-fingers-splayed-light-skin-tone',
  character: '🖐🏻',
  unicodeName: 'hand with fingers splayed: light skin tone',
  codePoint: '1F590 1F3FB',
  group: 'people-body',
  subGroup: 'hand-fingers-open'
}, {
  slug: 'hand-with-fingers-splayed-medium-light-skin-tone',
  character: '🖐🏼',
  unicodeName: 'hand with fingers splayed: medium-light skin tone',
  codePoint: '1F590 1F3FC',
  group: 'people-body',
  subGroup: 'hand-fingers-open'
}, {
  slug: 'hand-with-fingers-splayed-medium-skin-tone',
  character: '🖐🏽',
  unicodeName: 'hand with fingers splayed: medium skin tone',
  codePoint: '1F590 1F3FD',
  group: 'people-body',
  subGroup: 'hand-fingers-open'
}, {
  slug: 'hand-with-fingers-splayed-medium-dark-skin-tone',
  character: '🖐🏾',
  unicodeName: 'hand with fingers splayed: medium-dark skin tone',
  codePoint: '1F590 1F3FE',
  group: 'people-body',
  subGroup: 'hand-fingers-open'
}, {
  slug: 'hand-with-fingers-splayed-dark-skin-tone',
  character: '🖐🏿',
  unicodeName: 'hand with fingers splayed: dark skin tone',
  codePoint: '1F590 1F3FF',
  group: 'people-body',
  subGroup: 'hand-fingers-open'
}, {
  slug: 'raised-hand',
  character: '✋',
  unicodeName: 'raised hand',
  codePoint: '270B',
  group: 'people-body',
  subGroup: 'hand-fingers-open',
  variants: [{
    slug: 'raised-hand-light-skin-tone',
    character: '✋🏻'
  }, {
    slug: 'raised-hand-medium-light-skin-tone',
    character: '✋🏼'
  }, {
    slug: 'raised-hand-medium-skin-tone',
    character: '✋🏽'
  }, {
    slug: 'raised-hand-medium-dark-skin-tone',
    character: '✋🏾'
  }, {
    slug: 'raised-hand-dark-skin-tone',
    character: '✋🏿'
  }, {
    slug: 'e1-0-raised-hand-light-skin-tone',
    character: '✋🏻'
  }, {
    slug: 'e1-0-raised-hand-medium-light-skin-tone',
    character: '✋🏼'
  }, {
    slug: 'e1-0-raised-hand-medium-skin-tone',
    character: '✋🏽'
  }, {
    slug: 'e1-0-raised-hand-medium-dark-skin-tone',
    character: '✋🏾'
  }, {
    slug: 'e1-0-raised-hand-dark-skin-tone',
    character: '✋🏿'
  }]
}, {
  slug: 'vulcan-salute',
  character: '🖖',
  unicodeName: 'vulcan salute',
  codePoint: '1F596',
  group: 'people-body',
  subGroup: 'hand-fingers-open',
  variants: [{
    slug: 'vulcan-salute-light-skin-tone',
    character: '🖖🏻'
  }, {
    slug: 'vulcan-salute-medium-light-skin-tone',
    character: '🖖🏼'
  }, {
    slug: 'vulcan-salute-medium-skin-tone',
    character: '🖖🏽'
  }, {
    slug: 'vulcan-salute-medium-dark-skin-tone',
    character: '🖖🏾'
  }, {
    slug: 'vulcan-salute-dark-skin-tone',
    character: '🖖🏿'
  }, {
    slug: 'e1-0-vulcan-salute-light-skin-tone',
    character: '🖖🏻'
  }, {
    slug: 'e1-0-vulcan-salute-medium-light-skin-tone',
    character: '🖖🏼'
  }, {
    slug: 'e1-0-vulcan-salute-medium-skin-tone',
    character: '🖖🏽'
  }, {
    slug: 'e1-0-vulcan-salute-medium-dark-skin-tone',
    character: '🖖🏾'
  }, {
    slug: 'e1-0-vulcan-salute-dark-skin-tone',
    character: '🖖🏿'
  }]
}, {
  slug: 'ok-hand',
  character: '👌',
  unicodeName: 'OK hand',
  codePoint: '1F44C',
  group: 'people-body',
  subGroup: 'hand-fingers-partial',
  variants: [{
    slug: 'ok-hand-light-skin-tone',
    character: '👌🏻'
  }, {
    slug: 'ok-hand-medium-light-skin-tone',
    character: '👌🏼'
  }, {
    slug: 'ok-hand-medium-skin-tone',
    character: '👌🏽'
  }, {
    slug: 'ok-hand-medium-dark-skin-tone',
    character: '👌🏾'
  }, {
    slug: 'ok-hand-dark-skin-tone',
    character: '👌🏿'
  }, {
    slug: 'e1-0-ok-hand-light-skin-tone',
    character: '👌🏻'
  }, {
    slug: 'e1-0-ok-hand-medium-light-skin-tone',
    character: '👌🏼'
  }, {
    slug: 'e1-0-ok-hand-medium-skin-tone',
    character: '👌🏽'
  }, {
    slug: 'e1-0-ok-hand-medium-dark-skin-tone',
    character: '👌🏾'
  }, {
    slug: 'e1-0-ok-hand-dark-skin-tone',
    character: '👌🏿'
  }]
}, {
  slug: 'pinched-fingers',
  character: '🤌',
  unicodeName: 'pinched fingers',
  codePoint: '1F90C',
  group: 'people-body',
  subGroup: 'hand-fingers-partial',
  variants: [{
    slug: 'pinched-fingers-light-skin-tone',
    character: '🤌🏻'
  }, {
    slug: 'pinched-fingers-medium-light-skin-tone',
    character: '🤌🏼'
  }, {
    slug: 'pinched-fingers-medium-skin-tone',
    character: '🤌🏽'
  }, {
    slug: 'pinched-fingers-medium-dark-skin-tone',
    character: '🤌🏾'
  }, {
    slug: 'pinched-fingers-dark-skin-tone',
    character: '🤌🏿'
  }, {
    slug: 'e13-0-pinched-fingers-light-skin-tone',
    character: '🤌🏻'
  }, {
    slug: 'e13-0-pinched-fingers-medium-light-skin-tone',
    character: '🤌🏼'
  }, {
    slug: 'e13-0-pinched-fingers-medium-skin-tone',
    character: '🤌🏽'
  }, {
    slug: 'e13-0-pinched-fingers-medium-dark-skin-tone',
    character: '🤌🏾'
  }, {
    slug: 'e13-0-pinched-fingers-dark-skin-tone',
    character: '🤌🏿'
  }]
}, {
  slug: 'pinching-hand',
  character: '🤏',
  unicodeName: 'pinching hand',
  codePoint: '1F90F',
  group: 'people-body',
  subGroup: 'hand-fingers-partial',
  variants: [{
    slug: 'pinching-hand-light-skin-tone',
    character: '🤏🏻'
  }, {
    slug: 'pinching-hand-medium-light-skin-tone',
    character: '🤏🏼'
  }, {
    slug: 'pinching-hand-medium-skin-tone',
    character: '🤏🏽'
  }, {
    slug: 'pinching-hand-medium-dark-skin-tone',
    character: '🤏🏾'
  }, {
    slug: 'pinching-hand-dark-skin-tone',
    character: '🤏🏿'
  }, {
    slug: 'e12-0-pinching-hand-light-skin-tone',
    character: '🤏🏻'
  }, {
    slug: 'e12-0-pinching-hand-medium-light-skin-tone',
    character: '🤏🏼'
  }, {
    slug: 'e12-0-pinching-hand-medium-skin-tone',
    character: '🤏🏽'
  }, {
    slug: 'e12-0-pinching-hand-medium-dark-skin-tone',
    character: '🤏🏾'
  }, {
    slug: 'e12-0-pinching-hand-dark-skin-tone',
    character: '🤏🏿'
  }]
}, {
  slug: 'victory-hand',
  character: '✌️',
  unicodeName: 'victory hand',
  codePoint: '270C FE0F',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'victory-hand-light-skin-tone',
  character: '✌🏻',
  unicodeName: 'victory hand: light skin tone',
  codePoint: '270C 1F3FB',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'victory-hand-medium-light-skin-tone',
  character: '✌🏼',
  unicodeName: 'victory hand: medium-light skin tone',
  codePoint: '270C 1F3FC',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'victory-hand-medium-skin-tone',
  character: '✌🏽',
  unicodeName: 'victory hand: medium skin tone',
  codePoint: '270C 1F3FD',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'victory-hand-medium-dark-skin-tone',
  character: '✌🏾',
  unicodeName: 'victory hand: medium-dark skin tone',
  codePoint: '270C 1F3FE',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'victory-hand-dark-skin-tone',
  character: '✌🏿',
  unicodeName: 'victory hand: dark skin tone',
  codePoint: '270C 1F3FF',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'crossed-fingers',
  character: '🤞',
  unicodeName: 'crossed fingers',
  codePoint: '1F91E',
  group: 'people-body',
  subGroup: 'hand-fingers-partial',
  variants: [{
    slug: 'crossed-fingers-light-skin-tone',
    character: '🤞🏻'
  }, {
    slug: 'crossed-fingers-medium-light-skin-tone',
    character: '🤞🏼'
  }, {
    slug: 'crossed-fingers-medium-skin-tone',
    character: '🤞🏽'
  }, {
    slug: 'crossed-fingers-medium-dark-skin-tone',
    character: '🤞🏾'
  }, {
    slug: 'crossed-fingers-dark-skin-tone',
    character: '🤞🏿'
  }, {
    slug: 'e3-0-crossed-fingers-light-skin-tone',
    character: '🤞🏻'
  }, {
    slug: 'e3-0-crossed-fingers-medium-light-skin-tone',
    character: '🤞🏼'
  }, {
    slug: 'e3-0-crossed-fingers-medium-skin-tone',
    character: '🤞🏽'
  }, {
    slug: 'e3-0-crossed-fingers-medium-dark-skin-tone',
    character: '🤞🏾'
  }, {
    slug: 'e3-0-crossed-fingers-dark-skin-tone',
    character: '🤞🏿'
  }]
}, {
  slug: 'love-you-gesture',
  character: '🤟',
  unicodeName: 'love-you gesture',
  codePoint: '1F91F',
  group: 'people-body',
  subGroup: 'hand-fingers-partial',
  variants: [{
    slug: 'love-you-gesture-light-skin-tone',
    character: '🤟🏻'
  }, {
    slug: 'love-you-gesture-medium-light-skin-tone',
    character: '🤟🏼'
  }, {
    slug: 'love-you-gesture-medium-skin-tone',
    character: '🤟🏽'
  }, {
    slug: 'love-you-gesture-medium-dark-skin-tone',
    character: '🤟🏾'
  }, {
    slug: 'love-you-gesture-dark-skin-tone',
    character: '🤟🏿'
  }, {
    slug: 'e5-0-love-you-gesture-light-skin-tone',
    character: '🤟🏻'
  }, {
    slug: 'e5-0-love-you-gesture-medium-light-skin-tone',
    character: '🤟🏼'
  }, {
    slug: 'e5-0-love-you-gesture-medium-skin-tone',
    character: '🤟🏽'
  }, {
    slug: 'e5-0-love-you-gesture-medium-dark-skin-tone',
    character: '🤟🏾'
  }, {
    slug: 'e5-0-love-you-gesture-dark-skin-tone',
    character: '🤟🏿'
  }]
}, {
  slug: 'sign-of-the-horns',
  character: '🤘',
  unicodeName: 'sign of the horns',
  codePoint: '1F918',
  group: 'people-body',
  subGroup: 'hand-fingers-partial',
  variants: [{
    slug: 'sign-of-the-horns-light-skin-tone',
    character: '🤘🏻'
  }, {
    slug: 'sign-of-the-horns-medium-light-skin-tone',
    character: '🤘🏼'
  }, {
    slug: 'sign-of-the-horns-medium-skin-tone',
    character: '🤘🏽'
  }, {
    slug: 'sign-of-the-horns-medium-dark-skin-tone',
    character: '🤘🏾'
  }, {
    slug: 'sign-of-the-horns-dark-skin-tone',
    character: '🤘🏿'
  }, {
    slug: 'e1-0-sign-of-the-horns-light-skin-tone',
    character: '🤘🏻'
  }, {
    slug: 'e1-0-sign-of-the-horns-medium-light-skin-tone',
    character: '🤘🏼'
  }, {
    slug: 'e1-0-sign-of-the-horns-medium-skin-tone',
    character: '🤘🏽'
  }, {
    slug: 'e1-0-sign-of-the-horns-medium-dark-skin-tone',
    character: '🤘🏾'
  }, {
    slug: 'e1-0-sign-of-the-horns-dark-skin-tone',
    character: '🤘🏿'
  }]
}, {
  slug: 'call-me-hand',
  character: '🤙',
  unicodeName: 'call me hand',
  codePoint: '1F919',
  group: 'people-body',
  subGroup: 'hand-fingers-partial',
  variants: [{
    slug: 'call-me-hand-light-skin-tone',
    character: '🤙🏻'
  }, {
    slug: 'call-me-hand-medium-light-skin-tone',
    character: '🤙🏼'
  }, {
    slug: 'call-me-hand-medium-skin-tone',
    character: '🤙🏽'
  }, {
    slug: 'call-me-hand-medium-dark-skin-tone',
    character: '🤙🏾'
  }, {
    slug: 'call-me-hand-dark-skin-tone',
    character: '🤙🏿'
  }, {
    slug: 'e3-0-call-me-hand-light-skin-tone',
    character: '🤙🏻'
  }, {
    slug: 'e3-0-call-me-hand-medium-light-skin-tone',
    character: '🤙🏼'
  }, {
    slug: 'e3-0-call-me-hand-medium-skin-tone',
    character: '🤙🏽'
  }, {
    slug: 'e3-0-call-me-hand-medium-dark-skin-tone',
    character: '🤙🏾'
  }, {
    slug: 'e3-0-call-me-hand-dark-skin-tone',
    character: '🤙🏿'
  }]
}, {
  slug: 'backhand-index-pointing-left',
  character: '👈',
  unicodeName: 'backhand index pointing left',
  codePoint: '1F448',
  group: 'people-body',
  subGroup: 'hand-single-finger',
  variants: [{
    slug: 'backhand-index-pointing-left-light-skin-tone',
    character: '👈🏻'
  }, {
    slug: 'backhand-index-pointing-left-medium-light-skin-tone',
    character: '👈🏼'
  }, {
    slug: 'backhand-index-pointing-left-medium-skin-tone',
    character: '👈🏽'
  }, {
    slug: 'backhand-index-pointing-left-medium-dark-skin-tone',
    character: '👈🏾'
  }, {
    slug: 'backhand-index-pointing-left-dark-skin-tone',
    character: '👈🏿'
  }, {
    slug: 'e1-0-backhand-index-pointing-left-light-skin-tone',
    character: '👈🏻'
  }, {
    slug: 'e1-0-backhand-index-pointing-left-medium-light-skin-tone',
    character: '👈🏼'
  }, {
    slug: 'e1-0-backhand-index-pointing-left-medium-skin-tone',
    character: '👈🏽'
  }, {
    slug: 'e1-0-backhand-index-pointing-left-medium-dark-skin-tone',
    character: '👈🏾'
  }, {
    slug: 'e1-0-backhand-index-pointing-left-dark-skin-tone',
    character: '👈🏿'
  }]
}, {
  slug: 'backhand-index-pointing-right',
  character: '👉',
  unicodeName: 'backhand index pointing right',
  codePoint: '1F449',
  group: 'people-body',
  subGroup: 'hand-single-finger',
  variants: [{
    slug: 'backhand-index-pointing-right-light-skin-tone',
    character: '👉🏻'
  }, {
    slug: 'backhand-index-pointing-right-medium-light-skin-tone',
    character: '👉🏼'
  }, {
    slug: 'backhand-index-pointing-right-medium-skin-tone',
    character: '👉🏽'
  }, {
    slug: 'backhand-index-pointing-right-medium-dark-skin-tone',
    character: '👉🏾'
  }, {
    slug: 'backhand-index-pointing-right-dark-skin-tone',
    character: '👉🏿'
  }, {
    slug: 'e1-0-backhand-index-pointing-right-light-skin-tone',
    character: '👉🏻'
  }, {
    slug: 'e1-0-backhand-index-pointing-right-medium-light-skin-tone',
    character: '👉🏼'
  }, {
    slug: 'e1-0-backhand-index-pointing-right-medium-skin-tone',
    character: '👉🏽'
  }, {
    slug: 'e1-0-backhand-index-pointing-right-medium-dark-skin-tone',
    character: '👉🏾'
  }, {
    slug: 'e1-0-backhand-index-pointing-right-dark-skin-tone',
    character: '👉🏿'
  }]
}, {
  slug: 'backhand-index-pointing-up',
  character: '👆',
  unicodeName: 'backhand index pointing up',
  codePoint: '1F446',
  group: 'people-body',
  subGroup: 'hand-single-finger',
  variants: [{
    slug: 'backhand-index-pointing-up-light-skin-tone',
    character: '👆🏻'
  }, {
    slug: 'backhand-index-pointing-up-medium-light-skin-tone',
    character: '👆🏼'
  }, {
    slug: 'backhand-index-pointing-up-medium-skin-tone',
    character: '👆🏽'
  }, {
    slug: 'backhand-index-pointing-up-medium-dark-skin-tone',
    character: '👆🏾'
  }, {
    slug: 'backhand-index-pointing-up-dark-skin-tone',
    character: '👆🏿'
  }, {
    slug: 'e1-0-backhand-index-pointing-up-light-skin-tone',
    character: '👆🏻'
  }, {
    slug: 'e1-0-backhand-index-pointing-up-medium-light-skin-tone',
    character: '👆🏼'
  }, {
    slug: 'e1-0-backhand-index-pointing-up-medium-skin-tone',
    character: '👆🏽'
  }, {
    slug: 'e1-0-backhand-index-pointing-up-medium-dark-skin-tone',
    character: '👆🏾'
  }, {
    slug: 'e1-0-backhand-index-pointing-up-dark-skin-tone',
    character: '👆🏿'
  }]
}, {
  slug: 'middle-finger',
  character: '🖕',
  unicodeName: 'middle finger',
  codePoint: '1F595',
  group: 'people-body',
  subGroup: 'hand-single-finger',
  variants: [{
    slug: 'middle-finger-light-skin-tone',
    character: '🖕🏻'
  }, {
    slug: 'middle-finger-medium-light-skin-tone',
    character: '🖕🏼'
  }, {
    slug: 'middle-finger-medium-skin-tone',
    character: '🖕🏽'
  }, {
    slug: 'middle-finger-medium-dark-skin-tone',
    character: '🖕🏾'
  }, {
    slug: 'middle-finger-dark-skin-tone',
    character: '🖕🏿'
  }, {
    slug: 'e1-0-middle-finger-light-skin-tone',
    character: '🖕🏻'
  }, {
    slug: 'e1-0-middle-finger-medium-light-skin-tone',
    character: '🖕🏼'
  }, {
    slug: 'e1-0-middle-finger-medium-skin-tone',
    character: '🖕🏽'
  }, {
    slug: 'e1-0-middle-finger-medium-dark-skin-tone',
    character: '🖕🏾'
  }, {
    slug: 'e1-0-middle-finger-dark-skin-tone',
    character: '🖕🏿'
  }]
}, {
  slug: 'backhand-index-pointing-down',
  character: '👇',
  unicodeName: 'backhand index pointing down',
  codePoint: '1F447',
  group: 'people-body',
  subGroup: 'hand-single-finger',
  variants: [{
    slug: 'backhand-index-pointing-down-light-skin-tone',
    character: '👇🏻'
  }, {
    slug: 'backhand-index-pointing-down-medium-light-skin-tone',
    character: '👇🏼'
  }, {
    slug: 'backhand-index-pointing-down-medium-skin-tone',
    character: '👇🏽'
  }, {
    slug: 'backhand-index-pointing-down-medium-dark-skin-tone',
    character: '👇🏾'
  }, {
    slug: 'backhand-index-pointing-down-dark-skin-tone',
    character: '👇🏿'
  }, {
    slug: 'e1-0-backhand-index-pointing-down-light-skin-tone',
    character: '👇🏻'
  }, {
    slug: 'e1-0-backhand-index-pointing-down-medium-light-skin-tone',
    character: '👇🏼'
  }, {
    slug: 'e1-0-backhand-index-pointing-down-medium-skin-tone',
    character: '👇🏽'
  }, {
    slug: 'e1-0-backhand-index-pointing-down-medium-dark-skin-tone',
    character: '👇🏾'
  }, {
    slug: 'e1-0-backhand-index-pointing-down-dark-skin-tone',
    character: '👇🏿'
  }]
}, {
  slug: 'index-pointing-up',
  character: '☝️',
  unicodeName: 'index pointing up',
  codePoint: '261D FE0F',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'index-pointing-up-light-skin-tone',
  character: '☝🏻',
  unicodeName: 'index pointing up: light skin tone',
  codePoint: '261D 1F3FB',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'index-pointing-up-medium-light-skin-tone',
  character: '☝🏼',
  unicodeName: 'index pointing up: medium-light skin tone',
  codePoint: '261D 1F3FC',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'index-pointing-up-medium-skin-tone',
  character: '☝🏽',
  unicodeName: 'index pointing up: medium skin tone',
  codePoint: '261D 1F3FD',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'index-pointing-up-medium-dark-skin-tone',
  character: '☝🏾',
  unicodeName: 'index pointing up: medium-dark skin tone',
  codePoint: '261D 1F3FE',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'index-pointing-up-dark-skin-tone',
  character: '☝🏿',
  unicodeName: 'index pointing up: dark skin tone',
  codePoint: '261D 1F3FF',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'thumbs-up',
  character: '👍',
  unicodeName: 'thumbs up',
  codePoint: '1F44D',
  group: 'people-body',
  subGroup: 'hand-fingers-closed',
  variants: [{
    slug: 'thumbs-up-light-skin-tone',
    character: '👍🏻'
  }, {
    slug: 'thumbs-up-medium-light-skin-tone',
    character: '👍🏼'
  }, {
    slug: 'thumbs-up-medium-skin-tone',
    character: '👍🏽'
  }, {
    slug: 'thumbs-up-medium-dark-skin-tone',
    character: '👍🏾'
  }, {
    slug: 'thumbs-up-dark-skin-tone',
    character: '👍🏿'
  }, {
    slug: 'e1-0-thumbs-up-light-skin-tone',
    character: '👍🏻'
  }, {
    slug: 'e1-0-thumbs-up-medium-light-skin-tone',
    character: '👍🏼'
  }, {
    slug: 'e1-0-thumbs-up-medium-skin-tone',
    character: '👍🏽'
  }, {
    slug: 'e1-0-thumbs-up-medium-dark-skin-tone',
    character: '👍🏾'
  }, {
    slug: 'e1-0-thumbs-up-dark-skin-tone',
    character: '👍🏿'
  }]
}, {
  slug: 'thumbs-down',
  character: '👎',
  unicodeName: 'thumbs down',
  codePoint: '1F44E',
  group: 'people-body',
  subGroup: 'hand-fingers-closed',
  variants: [{
    slug: 'thumbs-down-light-skin-tone',
    character: '👎🏻'
  }, {
    slug: 'thumbs-down-medium-light-skin-tone',
    character: '👎🏼'
  }, {
    slug: 'thumbs-down-medium-skin-tone',
    character: '👎🏽'
  }, {
    slug: 'thumbs-down-medium-dark-skin-tone',
    character: '👎🏾'
  }, {
    slug: 'thumbs-down-dark-skin-tone',
    character: '👎🏿'
  }, {
    slug: 'e1-0-thumbs-down-light-skin-tone',
    character: '👎🏻'
  }, {
    slug: 'e1-0-thumbs-down-medium-light-skin-tone',
    character: '👎🏼'
  }, {
    slug: 'e1-0-thumbs-down-medium-skin-tone',
    character: '👎🏽'
  }, {
    slug: 'e1-0-thumbs-down-medium-dark-skin-tone',
    character: '👎🏾'
  }, {
    slug: 'e1-0-thumbs-down-dark-skin-tone',
    character: '👎🏿'
  }]
}, {
  slug: 'raised-fist',
  character: '✊',
  unicodeName: 'raised fist',
  codePoint: '270A',
  group: 'people-body',
  subGroup: 'hand-fingers-closed',
  variants: [{
    slug: 'raised-fist-light-skin-tone',
    character: '✊🏻'
  }, {
    slug: 'raised-fist-medium-light-skin-tone',
    character: '✊🏼'
  }, {
    slug: 'raised-fist-medium-skin-tone',
    character: '✊🏽'
  }, {
    slug: 'raised-fist-medium-dark-skin-tone',
    character: '✊🏾'
  }, {
    slug: 'raised-fist-dark-skin-tone',
    character: '✊🏿'
  }, {
    slug: 'e1-0-raised-fist-light-skin-tone',
    character: '✊🏻'
  }, {
    slug: 'e1-0-raised-fist-medium-light-skin-tone',
    character: '✊🏼'
  }, {
    slug: 'e1-0-raised-fist-medium-skin-tone',
    character: '✊🏽'
  }, {
    slug: 'e1-0-raised-fist-medium-dark-skin-tone',
    character: '✊🏾'
  }, {
    slug: 'e1-0-raised-fist-dark-skin-tone',
    character: '✊🏿'
  }]
}, {
  slug: 'oncoming-fist',
  character: '👊',
  unicodeName: 'oncoming fist',
  codePoint: '1F44A',
  group: 'people-body',
  subGroup: 'hand-fingers-closed',
  variants: [{
    slug: 'oncoming-fist-light-skin-tone',
    character: '👊🏻'
  }, {
    slug: 'oncoming-fist-medium-light-skin-tone',
    character: '👊🏼'
  }, {
    slug: 'oncoming-fist-medium-skin-tone',
    character: '👊🏽'
  }, {
    slug: 'oncoming-fist-medium-dark-skin-tone',
    character: '👊🏾'
  }, {
    slug: 'oncoming-fist-dark-skin-tone',
    character: '👊🏿'
  }, {
    slug: 'e1-0-oncoming-fist-light-skin-tone',
    character: '👊🏻'
  }, {
    slug: 'e1-0-oncoming-fist-medium-light-skin-tone',
    character: '👊🏼'
  }, {
    slug: 'e1-0-oncoming-fist-medium-skin-tone',
    character: '👊🏽'
  }, {
    slug: 'e1-0-oncoming-fist-medium-dark-skin-tone',
    character: '👊🏾'
  }, {
    slug: 'e1-0-oncoming-fist-dark-skin-tone',
    character: '👊🏿'
  }]
}, {
  slug: 'left-facing-fist',
  character: '🤛',
  unicodeName: 'left-facing fist',
  codePoint: '1F91B',
  group: 'people-body',
  subGroup: 'hand-fingers-closed',
  variants: [{
    slug: 'left-facing-fist-light-skin-tone',
    character: '🤛🏻'
  }, {
    slug: 'left-facing-fist-medium-light-skin-tone',
    character: '🤛🏼'
  }, {
    slug: 'left-facing-fist-medium-skin-tone',
    character: '🤛🏽'
  }, {
    slug: 'left-facing-fist-medium-dark-skin-tone',
    character: '🤛🏾'
  }, {
    slug: 'left-facing-fist-dark-skin-tone',
    character: '🤛🏿'
  }, {
    slug: 'e3-0-left-facing-fist-light-skin-tone',
    character: '🤛🏻'
  }, {
    slug: 'e3-0-left-facing-fist-medium-light-skin-tone',
    character: '🤛🏼'
  }, {
    slug: 'e3-0-left-facing-fist-medium-skin-tone',
    character: '🤛🏽'
  }, {
    slug: 'e3-0-left-facing-fist-medium-dark-skin-tone',
    character: '🤛🏾'
  }, {
    slug: 'e3-0-left-facing-fist-dark-skin-tone',
    character: '🤛🏿'
  }]
}, {
  slug: 'right-facing-fist',
  character: '🤜',
  unicodeName: 'right-facing fist',
  codePoint: '1F91C',
  group: 'people-body',
  subGroup: 'hand-fingers-closed',
  variants: [{
    slug: 'right-facing-fist-light-skin-tone',
    character: '🤜🏻'
  }, {
    slug: 'right-facing-fist-medium-light-skin-tone',
    character: '🤜🏼'
  }, {
    slug: 'right-facing-fist-medium-skin-tone',
    character: '🤜🏽'
  }, {
    slug: 'right-facing-fist-medium-dark-skin-tone',
    character: '🤜🏾'
  }, {
    slug: 'right-facing-fist-dark-skin-tone',
    character: '🤜🏿'
  }, {
    slug: 'e3-0-right-facing-fist-light-skin-tone',
    character: '🤜🏻'
  }, {
    slug: 'e3-0-right-facing-fist-medium-light-skin-tone',
    character: '🤜🏼'
  }, {
    slug: 'e3-0-right-facing-fist-medium-skin-tone',
    character: '🤜🏽'
  }, {
    slug: 'e3-0-right-facing-fist-medium-dark-skin-tone',
    character: '🤜🏾'
  }, {
    slug: 'e3-0-right-facing-fist-dark-skin-tone',
    character: '🤜🏿'
  }]
}, {
  slug: 'clapping-hands',
  character: '👏',
  unicodeName: 'clapping hands',
  codePoint: '1F44F',
  group: 'people-body',
  subGroup: 'hands',
  variants: [{
    slug: 'clapping-hands-light-skin-tone',
    character: '👏🏻'
  }, {
    slug: 'clapping-hands-medium-light-skin-tone',
    character: '👏🏼'
  }, {
    slug: 'clapping-hands-medium-skin-tone',
    character: '👏🏽'
  }, {
    slug: 'clapping-hands-medium-dark-skin-tone',
    character: '👏🏾'
  }, {
    slug: 'clapping-hands-dark-skin-tone',
    character: '👏🏿'
  }, {
    slug: 'e1-0-clapping-hands-light-skin-tone',
    character: '👏🏻'
  }, {
    slug: 'e1-0-clapping-hands-medium-light-skin-tone',
    character: '👏🏼'
  }, {
    slug: 'e1-0-clapping-hands-medium-skin-tone',
    character: '👏🏽'
  }, {
    slug: 'e1-0-clapping-hands-medium-dark-skin-tone',
    character: '👏🏾'
  }, {
    slug: 'e1-0-clapping-hands-dark-skin-tone',
    character: '👏🏿'
  }]
}, {
  slug: 'raising-hands',
  character: '🙌',
  unicodeName: 'raising hands',
  codePoint: '1F64C',
  group: 'people-body',
  subGroup: 'hands',
  variants: [{
    slug: 'raising-hands-light-skin-tone',
    character: '🙌🏻'
  }, {
    slug: 'raising-hands-medium-light-skin-tone',
    character: '🙌🏼'
  }, {
    slug: 'raising-hands-medium-skin-tone',
    character: '🙌🏽'
  }, {
    slug: 'raising-hands-medium-dark-skin-tone',
    character: '🙌🏾'
  }, {
    slug: 'raising-hands-dark-skin-tone',
    character: '🙌🏿'
  }, {
    slug: 'e1-0-raising-hands-light-skin-tone',
    character: '🙌🏻'
  }, {
    slug: 'e1-0-raising-hands-medium-light-skin-tone',
    character: '🙌🏼'
  }, {
    slug: 'e1-0-raising-hands-medium-skin-tone',
    character: '🙌🏽'
  }, {
    slug: 'e1-0-raising-hands-medium-dark-skin-tone',
    character: '🙌🏾'
  }, {
    slug: 'e1-0-raising-hands-dark-skin-tone',
    character: '🙌🏿'
  }]
}, {
  slug: 'open-hands',
  character: '👐',
  unicodeName: 'open hands',
  codePoint: '1F450',
  group: 'people-body',
  subGroup: 'hands',
  variants: [{
    slug: 'open-hands-light-skin-tone',
    character: '👐🏻'
  }, {
    slug: 'open-hands-medium-light-skin-tone',
    character: '👐🏼'
  }, {
    slug: 'open-hands-medium-skin-tone',
    character: '👐🏽'
  }, {
    slug: 'open-hands-medium-dark-skin-tone',
    character: '👐🏾'
  }, {
    slug: 'open-hands-dark-skin-tone',
    character: '👐🏿'
  }, {
    slug: 'e1-0-open-hands-light-skin-tone',
    character: '👐🏻'
  }, {
    slug: 'e1-0-open-hands-medium-light-skin-tone',
    character: '👐🏼'
  }, {
    slug: 'e1-0-open-hands-medium-skin-tone',
    character: '👐🏽'
  }, {
    slug: 'e1-0-open-hands-medium-dark-skin-tone',
    character: '👐🏾'
  }, {
    slug: 'e1-0-open-hands-dark-skin-tone',
    character: '👐🏿'
  }]
}, {
  slug: 'palms-up-together',
  character: '🤲',
  unicodeName: 'palms up together',
  codePoint: '1F932',
  group: 'people-body',
  subGroup: 'hands',
  variants: [{
    slug: 'palms-up-together-light-skin-tone',
    character: '🤲🏻'
  }, {
    slug: 'palms-up-together-medium-light-skin-tone',
    character: '🤲🏼'
  }, {
    slug: 'palms-up-together-medium-skin-tone',
    character: '🤲🏽'
  }, {
    slug: 'palms-up-together-medium-dark-skin-tone',
    character: '🤲🏾'
  }, {
    slug: 'palms-up-together-dark-skin-tone',
    character: '🤲🏿'
  }, {
    slug: 'e5-0-palms-up-together-light-skin-tone',
    character: '🤲🏻'
  }, {
    slug: 'e5-0-palms-up-together-medium-light-skin-tone',
    character: '🤲🏼'
  }, {
    slug: 'e5-0-palms-up-together-medium-skin-tone',
    character: '🤲🏽'
  }, {
    slug: 'e5-0-palms-up-together-medium-dark-skin-tone',
    character: '🤲🏾'
  }, {
    slug: 'e5-0-palms-up-together-dark-skin-tone',
    character: '🤲🏿'
  }]
}, {
  slug: 'handshake',
  character: '🤝',
  unicodeName: 'handshake',
  codePoint: '1F91D',
  group: 'people-body',
  subGroup: 'hands'
}, {
  slug: 'folded-hands',
  character: '🙏',
  unicodeName: 'folded hands',
  codePoint: '1F64F',
  group: 'people-body',
  subGroup: 'hands',
  variants: [{
    slug: 'folded-hands-light-skin-tone',
    character: '🙏🏻'
  }, {
    slug: 'folded-hands-medium-light-skin-tone',
    character: '🙏🏼'
  }, {
    slug: 'folded-hands-medium-skin-tone',
    character: '🙏🏽'
  }, {
    slug: 'folded-hands-medium-dark-skin-tone',
    character: '🙏🏾'
  }, {
    slug: 'folded-hands-dark-skin-tone',
    character: '🙏🏿'
  }, {
    slug: 'e1-0-folded-hands-light-skin-tone',
    character: '🙏🏻'
  }, {
    slug: 'e1-0-folded-hands-medium-light-skin-tone',
    character: '🙏🏼'
  }, {
    slug: 'e1-0-folded-hands-medium-skin-tone',
    character: '🙏🏽'
  }, {
    slug: 'e1-0-folded-hands-medium-dark-skin-tone',
    character: '🙏🏾'
  }, {
    slug: 'e1-0-folded-hands-dark-skin-tone',
    character: '🙏🏿'
  }]
}, {
  slug: 'writing-hand',
  character: '✍️',
  unicodeName: 'writing hand',
  codePoint: '270D FE0F',
  group: 'people-body',
  subGroup: 'hand-prop'
}, {
  slug: 'writing-hand-light-skin-tone',
  character: '✍🏻',
  unicodeName: 'writing hand: light skin tone',
  codePoint: '270D 1F3FB',
  group: 'people-body',
  subGroup: 'hand-prop'
}, {
  slug: 'writing-hand-medium-light-skin-tone',
  character: '✍🏼',
  unicodeName: 'writing hand: medium-light skin tone',
  codePoint: '270D 1F3FC',
  group: 'people-body',
  subGroup: 'hand-prop'
}, {
  slug: 'writing-hand-medium-skin-tone',
  character: '✍🏽',
  unicodeName: 'writing hand: medium skin tone',
  codePoint: '270D 1F3FD',
  group: 'people-body',
  subGroup: 'hand-prop'
}, {
  slug: 'writing-hand-medium-dark-skin-tone',
  character: '✍🏾',
  unicodeName: 'writing hand: medium-dark skin tone',
  codePoint: '270D 1F3FE',
  group: 'people-body',
  subGroup: 'hand-prop'
}, {
  slug: 'writing-hand-dark-skin-tone',
  character: '✍🏿',
  unicodeName: 'writing hand: dark skin tone',
  codePoint: '270D 1F3FF',
  group: 'people-body',
  subGroup: 'hand-prop'
}, {
  slug: 'nail-polish',
  character: '💅',
  unicodeName: 'nail polish',
  codePoint: '1F485',
  group: 'people-body',
  subGroup: 'hand-prop',
  variants: [{
    slug: 'nail-polish-light-skin-tone',
    character: '💅🏻'
  }, {
    slug: 'nail-polish-medium-light-skin-tone',
    character: '💅🏼'
  }, {
    slug: 'nail-polish-medium-skin-tone',
    character: '💅🏽'
  }, {
    slug: 'nail-polish-medium-dark-skin-tone',
    character: '💅🏾'
  }, {
    slug: 'nail-polish-dark-skin-tone',
    character: '💅🏿'
  }, {
    slug: 'e1-0-nail-polish-light-skin-tone',
    character: '💅🏻'
  }, {
    slug: 'e1-0-nail-polish-medium-light-skin-tone',
    character: '💅🏼'
  }, {
    slug: 'e1-0-nail-polish-medium-skin-tone',
    character: '💅🏽'
  }, {
    slug: 'e1-0-nail-polish-medium-dark-skin-tone',
    character: '💅🏾'
  }, {
    slug: 'e1-0-nail-polish-dark-skin-tone',
    character: '💅🏿'
  }]
}, {
  slug: 'selfie',
  character: '🤳',
  unicodeName: 'selfie',
  codePoint: '1F933',
  group: 'people-body',
  subGroup: 'hand-prop',
  variants: [{
    slug: 'selfie-light-skin-tone',
    character: '🤳🏻'
  }, {
    slug: 'selfie-medium-light-skin-tone',
    character: '🤳🏼'
  }, {
    slug: 'selfie-medium-skin-tone',
    character: '🤳🏽'
  }, {
    slug: 'selfie-medium-dark-skin-tone',
    character: '🤳🏾'
  }, {
    slug: 'selfie-dark-skin-tone',
    character: '🤳🏿'
  }, {
    slug: 'e3-0-selfie-light-skin-tone',
    character: '🤳🏻'
  }, {
    slug: 'e3-0-selfie-medium-light-skin-tone',
    character: '🤳🏼'
  }, {
    slug: 'e3-0-selfie-medium-skin-tone',
    character: '🤳🏽'
  }, {
    slug: 'e3-0-selfie-medium-dark-skin-tone',
    character: '🤳🏾'
  }, {
    slug: 'e3-0-selfie-dark-skin-tone',
    character: '🤳🏿'
  }]
}, {
  slug: 'flexed-biceps',
  character: '💪',
  unicodeName: 'flexed biceps',
  codePoint: '1F4AA',
  group: 'people-body',
  subGroup: 'body-parts',
  variants: [{
    slug: 'flexed-biceps-light-skin-tone',
    character: '💪🏻'
  }, {
    slug: 'flexed-biceps-medium-light-skin-tone',
    character: '💪🏼'
  }, {
    slug: 'flexed-biceps-medium-skin-tone',
    character: '💪🏽'
  }, {
    slug: 'flexed-biceps-medium-dark-skin-tone',
    character: '💪🏾'
  }, {
    slug: 'flexed-biceps-dark-skin-tone',
    character: '💪🏿'
  }, {
    slug: 'e1-0-flexed-biceps-light-skin-tone',
    character: '💪🏻'
  }, {
    slug: 'e1-0-flexed-biceps-medium-light-skin-tone',
    character: '💪🏼'
  }, {
    slug: 'e1-0-flexed-biceps-medium-skin-tone',
    character: '💪🏽'
  }, {
    slug: 'e1-0-flexed-biceps-medium-dark-skin-tone',
    character: '💪🏾'
  }, {
    slug: 'e1-0-flexed-biceps-dark-skin-tone',
    character: '💪🏿'
  }]
}, {
  slug: 'mechanical-arm',
  character: '🦾',
  unicodeName: 'mechanical arm',
  codePoint: '1F9BE',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'mechanical-leg',
  character: '🦿',
  unicodeName: 'mechanical leg',
  codePoint: '1F9BF',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'leg',
  character: '🦵',
  unicodeName: 'leg',
  codePoint: '1F9B5',
  group: 'people-body',
  subGroup: 'body-parts',
  variants: [{
    slug: 'leg-light-skin-tone',
    character: '🦵🏻'
  }, {
    slug: 'leg-medium-light-skin-tone',
    character: '🦵🏼'
  }, {
    slug: 'leg-medium-skin-tone',
    character: '🦵🏽'
  }, {
    slug: 'leg-medium-dark-skin-tone',
    character: '🦵🏾'
  }, {
    slug: 'leg-dark-skin-tone',
    character: '🦵🏿'
  }, {
    slug: 'e11-0-leg-light-skin-tone',
    character: '🦵🏻'
  }, {
    slug: 'e11-0-leg-medium-light-skin-tone',
    character: '🦵🏼'
  }, {
    slug: 'e11-0-leg-medium-skin-tone',
    character: '🦵🏽'
  }, {
    slug: 'e11-0-leg-medium-dark-skin-tone',
    character: '🦵🏾'
  }, {
    slug: 'e11-0-leg-dark-skin-tone',
    character: '🦵🏿'
  }]
}, {
  slug: 'foot',
  character: '🦶',
  unicodeName: 'foot',
  codePoint: '1F9B6',
  group: 'people-body',
  subGroup: 'body-parts',
  variants: [{
    slug: 'foot-light-skin-tone',
    character: '🦶🏻'
  }, {
    slug: 'foot-medium-light-skin-tone',
    character: '🦶🏼'
  }, {
    slug: 'foot-medium-skin-tone',
    character: '🦶🏽'
  }, {
    slug: 'foot-medium-dark-skin-tone',
    character: '🦶🏾'
  }, {
    slug: 'foot-dark-skin-tone',
    character: '🦶🏿'
  }, {
    slug: 'e11-0-foot-light-skin-tone',
    character: '🦶🏻'
  }, {
    slug: 'e11-0-foot-medium-light-skin-tone',
    character: '🦶🏼'
  }, {
    slug: 'e11-0-foot-medium-skin-tone',
    character: '🦶🏽'
  }, {
    slug: 'e11-0-foot-medium-dark-skin-tone',
    character: '🦶🏾'
  }, {
    slug: 'e11-0-foot-dark-skin-tone',
    character: '🦶🏿'
  }]
}, {
  slug: 'ear',
  character: '👂',
  unicodeName: 'ear',
  codePoint: '1F442',
  group: 'people-body',
  subGroup: 'body-parts',
  variants: [{
    slug: 'ear-light-skin-tone',
    character: '👂🏻'
  }, {
    slug: 'ear-medium-light-skin-tone',
    character: '👂🏼'
  }, {
    slug: 'ear-medium-skin-tone',
    character: '👂🏽'
  }, {
    slug: 'ear-medium-dark-skin-tone',
    character: '👂🏾'
  }, {
    slug: 'ear-dark-skin-tone',
    character: '👂🏿'
  }, {
    slug: 'e1-0-ear-light-skin-tone',
    character: '👂🏻'
  }, {
    slug: 'e1-0-ear-medium-light-skin-tone',
    character: '👂🏼'
  }, {
    slug: 'e1-0-ear-medium-skin-tone',
    character: '👂🏽'
  }, {
    slug: 'e1-0-ear-medium-dark-skin-tone',
    character: '👂🏾'
  }, {
    slug: 'e1-0-ear-dark-skin-tone',
    character: '👂🏿'
  }]
}, {
  slug: 'ear-with-hearing-aid',
  character: '🦻',
  unicodeName: 'ear with hearing aid',
  codePoint: '1F9BB',
  group: 'people-body',
  subGroup: 'body-parts',
  variants: [{
    slug: 'ear-with-hearing-aid-light-skin-tone',
    character: '🦻🏻'
  }, {
    slug: 'ear-with-hearing-aid-medium-light-skin-tone',
    character: '🦻🏼'
  }, {
    slug: 'ear-with-hearing-aid-medium-skin-tone',
    character: '🦻🏽'
  }, {
    slug: 'ear-with-hearing-aid-medium-dark-skin-tone',
    character: '🦻🏾'
  }, {
    slug: 'ear-with-hearing-aid-dark-skin-tone',
    character: '🦻🏿'
  }, {
    slug: 'e12-0-ear-with-hearing-aid-light-skin-tone',
    character: '🦻🏻'
  }, {
    slug: 'e12-0-ear-with-hearing-aid-medium-light-skin-tone',
    character: '🦻🏼'
  }, {
    slug: 'e12-0-ear-with-hearing-aid-medium-skin-tone',
    character: '🦻🏽'
  }, {
    slug: 'e12-0-ear-with-hearing-aid-medium-dark-skin-tone',
    character: '🦻🏾'
  }, {
    slug: 'e12-0-ear-with-hearing-aid-dark-skin-tone',
    character: '🦻🏿'
  }]
}, {
  slug: 'nose',
  character: '👃',
  unicodeName: 'nose',
  codePoint: '1F443',
  group: 'people-body',
  subGroup: 'body-parts',
  variants: [{
    slug: 'nose-light-skin-tone',
    character: '👃🏻'
  }, {
    slug: 'nose-medium-light-skin-tone',
    character: '👃🏼'
  }, {
    slug: 'nose-medium-skin-tone',
    character: '👃🏽'
  }, {
    slug: 'nose-medium-dark-skin-tone',
    character: '👃🏾'
  }, {
    slug: 'nose-dark-skin-tone',
    character: '👃🏿'
  }, {
    slug: 'e1-0-nose-light-skin-tone',
    character: '👃🏻'
  }, {
    slug: 'e1-0-nose-medium-light-skin-tone',
    character: '👃🏼'
  }, {
    slug: 'e1-0-nose-medium-skin-tone',
    character: '👃🏽'
  }, {
    slug: 'e1-0-nose-medium-dark-skin-tone',
    character: '👃🏾'
  }, {
    slug: 'e1-0-nose-dark-skin-tone',
    character: '👃🏿'
  }]
}, {
  slug: 'brain',
  character: '🧠',
  unicodeName: 'brain',
  codePoint: '1F9E0',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'anatomical-heart',
  character: '🫀',
  unicodeName: 'anatomical heart',
  codePoint: '1FAC0',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'lungs',
  character: '🫁',
  unicodeName: 'lungs',
  codePoint: '1FAC1',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'tooth',
  character: '🦷',
  unicodeName: 'tooth',
  codePoint: '1F9B7',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'bone',
  character: '🦴',
  unicodeName: 'bone',
  codePoint: '1F9B4',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'eyes',
  character: '👀',
  unicodeName: 'eyes',
  codePoint: '1F440',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'eye',
  character: '👁️',
  unicodeName: 'eye',
  codePoint: '1F441 FE0F',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'tongue',
  character: '👅',
  unicodeName: 'tongue',
  codePoint: '1F445',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'mouth',
  character: '👄',
  unicodeName: 'mouth',
  codePoint: '1F444',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'baby',
  character: '👶',
  unicodeName: 'baby',
  codePoint: '1F476',
  group: 'people-body',
  subGroup: 'person',
  variants: [{
    slug: 'baby-light-skin-tone',
    character: '👶🏻'
  }, {
    slug: 'baby-medium-light-skin-tone',
    character: '👶🏼'
  }, {
    slug: 'baby-medium-skin-tone',
    character: '👶🏽'
  }, {
    slug: 'baby-medium-dark-skin-tone',
    character: '👶🏾'
  }, {
    slug: 'baby-dark-skin-tone',
    character: '👶🏿'
  }, {
    slug: 'e1-0-baby-light-skin-tone',
    character: '👶🏻'
  }, {
    slug: 'e1-0-baby-medium-light-skin-tone',
    character: '👶🏼'
  }, {
    slug: 'e1-0-baby-medium-skin-tone',
    character: '👶🏽'
  }, {
    slug: 'e1-0-baby-medium-dark-skin-tone',
    character: '👶🏾'
  }, {
    slug: 'e1-0-baby-dark-skin-tone',
    character: '👶🏿'
  }]
}, {
  slug: 'child',
  character: '🧒',
  unicodeName: 'child',
  codePoint: '1F9D2',
  group: 'people-body',
  subGroup: 'person',
  variants: [{
    slug: 'child-light-skin-tone',
    character: '🧒🏻'
  }, {
    slug: 'child-medium-light-skin-tone',
    character: '🧒🏼'
  }, {
    slug: 'child-medium-skin-tone',
    character: '🧒🏽'
  }, {
    slug: 'child-medium-dark-skin-tone',
    character: '🧒🏾'
  }, {
    slug: 'child-dark-skin-tone',
    character: '🧒🏿'
  }, {
    slug: 'e5-0-child-light-skin-tone',
    character: '🧒🏻'
  }, {
    slug: 'e5-0-child-medium-light-skin-tone',
    character: '🧒🏼'
  }, {
    slug: 'e5-0-child-medium-skin-tone',
    character: '🧒🏽'
  }, {
    slug: 'e5-0-child-medium-dark-skin-tone',
    character: '🧒🏾'
  }, {
    slug: 'e5-0-child-dark-skin-tone',
    character: '🧒🏿'
  }]
}, {
  slug: 'boy',
  character: '👦',
  unicodeName: 'boy',
  codePoint: '1F466',
  group: 'people-body',
  subGroup: 'person',
  variants: [{
    slug: 'boy-light-skin-tone',
    character: '👦🏻'
  }, {
    slug: 'boy-medium-light-skin-tone',
    character: '👦🏼'
  }, {
    slug: 'boy-medium-skin-tone',
    character: '👦🏽'
  }, {
    slug: 'boy-medium-dark-skin-tone',
    character: '👦🏾'
  }, {
    slug: 'boy-dark-skin-tone',
    character: '👦🏿'
  }, {
    slug: 'e1-0-boy-light-skin-tone',
    character: '👦🏻'
  }, {
    slug: 'e1-0-boy-medium-light-skin-tone',
    character: '👦🏼'
  }, {
    slug: 'e1-0-boy-medium-skin-tone',
    character: '👦🏽'
  }, {
    slug: 'e1-0-boy-medium-dark-skin-tone',
    character: '👦🏾'
  }, {
    slug: 'e1-0-boy-dark-skin-tone',
    character: '👦🏿'
  }]
}, {
  slug: 'girl',
  character: '👧',
  unicodeName: 'girl',
  codePoint: '1F467',
  group: 'people-body',
  subGroup: 'person',
  variants: [{
    slug: 'girl-light-skin-tone',
    character: '👧🏻'
  }, {
    slug: 'girl-medium-light-skin-tone',
    character: '👧🏼'
  }, {
    slug: 'girl-medium-skin-tone',
    character: '👧🏽'
  }, {
    slug: 'girl-medium-dark-skin-tone',
    character: '👧🏾'
  }, {
    slug: 'girl-dark-skin-tone',
    character: '👧🏿'
  }, {
    slug: 'e1-0-girl-light-skin-tone',
    character: '👧🏻'
  }, {
    slug: 'e1-0-girl-medium-light-skin-tone',
    character: '👧🏼'
  }, {
    slug: 'e1-0-girl-medium-skin-tone',
    character: '👧🏽'
  }, {
    slug: 'e1-0-girl-medium-dark-skin-tone',
    character: '👧🏾'
  }, {
    slug: 'e1-0-girl-dark-skin-tone',
    character: '👧🏿'
  }]
}, {
  slug: 'person',
  character: '🧑',
  unicodeName: 'person',
  codePoint: '1F9D1',
  group: 'people-body',
  subGroup: 'person',
  variants: [{
    slug: 'person-light-skin-tone',
    character: '🧑🏻'
  }, {
    slug: 'person-medium-light-skin-tone',
    character: '🧑🏼'
  }, {
    slug: 'person-medium-skin-tone',
    character: '🧑🏽'
  }, {
    slug: 'person-medium-dark-skin-tone',
    character: '🧑🏾'
  }, {
    slug: 'person-dark-skin-tone',
    character: '🧑🏿'
  }, {
    slug: 'person-light-skin-tone-red-hair',
    character: '🧑🏻‍🦰'
  }, {
    slug: 'person-medium-light-skin-tone-red-hair',
    character: '🧑🏼‍🦰'
  }, {
    slug: 'person-medium-skin-tone-red-hair',
    character: '🧑🏽‍🦰'
  }, {
    slug: 'person-medium-dark-skin-tone-red-hair',
    character: '🧑🏾‍🦰'
  }, {
    slug: 'person-dark-skin-tone-red-hair',
    character: '🧑🏿‍🦰'
  }, {
    slug: 'person-light-skin-tone-curly-hair',
    character: '🧑🏻‍🦱'
  }, {
    slug: 'person-medium-light-skin-tone-curly-hair',
    character: '🧑🏼‍🦱'
  }, {
    slug: 'person-medium-skin-tone-curly-hair',
    character: '🧑🏽‍🦱'
  }, {
    slug: 'person-medium-dark-skin-tone-curly-hair',
    character: '🧑🏾‍🦱'
  }, {
    slug: 'person-dark-skin-tone-curly-hair',
    character: '🧑🏿‍🦱'
  }, {
    slug: 'person-light-skin-tone-white-hair',
    character: '🧑🏻‍🦳'
  }, {
    slug: 'person-medium-light-skin-tone-white-hair',
    character: '🧑🏼‍🦳'
  }, {
    slug: 'person-medium-skin-tone-white-hair',
    character: '🧑🏽‍🦳'
  }, {
    slug: 'person-medium-dark-skin-tone-white-hair',
    character: '🧑🏾‍🦳'
  }, {
    slug: 'person-dark-skin-tone-white-hair',
    character: '🧑🏿‍🦳'
  }, {
    slug: 'person-light-skin-tone-bald',
    character: '🧑🏻‍🦲'
  }, {
    slug: 'person-medium-light-skin-tone-bald',
    character: '🧑🏼‍🦲'
  }, {
    slug: 'person-medium-skin-tone-bald',
    character: '🧑🏽‍🦲'
  }, {
    slug: 'person-medium-dark-skin-tone-bald',
    character: '🧑🏾‍🦲'
  }, {
    slug: 'person-dark-skin-tone-bald',
    character: '🧑🏿‍🦲'
  }, {
    slug: 'health-worker-light-skin-tone',
    character: '🧑🏻‍⚕️'
  }, {
    slug: 'health-worker-medium-light-skin-tone',
    character: '🧑🏼‍⚕️'
  }, {
    slug: 'health-worker-medium-skin-tone',
    character: '🧑🏽‍⚕️'
  }, {
    slug: 'health-worker-medium-dark-skin-tone',
    character: '🧑🏾‍⚕️'
  }, {
    slug: 'health-worker-dark-skin-tone',
    character: '🧑🏿‍⚕️'
  }, {
    slug: 'student-light-skin-tone',
    character: '🧑🏻‍🎓'
  }, {
    slug: 'student-medium-light-skin-tone',
    character: '🧑🏼‍🎓'
  }, {
    slug: 'student-medium-skin-tone',
    character: '🧑🏽‍🎓'
  }, {
    slug: 'student-medium-dark-skin-tone',
    character: '🧑🏾‍🎓'
  }, {
    slug: 'student-dark-skin-tone',
    character: '🧑🏿‍🎓'
  }, {
    slug: 'teacher-light-skin-tone',
    character: '🧑🏻‍🏫'
  }, {
    slug: 'teacher-medium-light-skin-tone',
    character: '🧑🏼‍🏫'
  }, {
    slug: 'teacher-medium-skin-tone',
    character: '🧑🏽‍🏫'
  }, {
    slug: 'teacher-medium-dark-skin-tone',
    character: '🧑🏾‍🏫'
  }, {
    slug: 'teacher-dark-skin-tone',
    character: '🧑🏿‍🏫'
  }, {
    slug: 'judge-light-skin-tone',
    character: '🧑🏻‍⚖️'
  }, {
    slug: 'judge-medium-light-skin-tone',
    character: '🧑🏼‍⚖️'
  }, {
    slug: 'judge-medium-skin-tone',
    character: '🧑🏽‍⚖️'
  }, {
    slug: 'judge-medium-dark-skin-tone',
    character: '🧑🏾‍⚖️'
  }, {
    slug: 'judge-dark-skin-tone',
    character: '🧑🏿‍⚖️'
  }, {
    slug: 'farmer-light-skin-tone',
    character: '🧑🏻‍🌾'
  }, {
    slug: 'farmer-medium-light-skin-tone',
    character: '🧑🏼‍🌾'
  }, {
    slug: 'farmer-medium-skin-tone',
    character: '🧑🏽‍🌾'
  }, {
    slug: 'farmer-medium-dark-skin-tone',
    character: '🧑🏾‍🌾'
  }, {
    slug: 'farmer-dark-skin-tone',
    character: '🧑🏿‍🌾'
  }, {
    slug: 'cook-light-skin-tone',
    character: '🧑🏻‍🍳'
  }, {
    slug: 'cook-medium-light-skin-tone',
    character: '🧑🏼‍🍳'
  }, {
    slug: 'cook-medium-skin-tone',
    character: '🧑🏽‍🍳'
  }, {
    slug: 'cook-medium-dark-skin-tone',
    character: '🧑🏾‍🍳'
  }, {
    slug: 'cook-dark-skin-tone',
    character: '🧑🏿‍🍳'
  }, {
    slug: 'mechanic-light-skin-tone',
    character: '🧑🏻‍🔧'
  }, {
    slug: 'mechanic-medium-light-skin-tone',
    character: '🧑🏼‍🔧'
  }, {
    slug: 'mechanic-medium-skin-tone',
    character: '🧑🏽‍🔧'
  }, {
    slug: 'mechanic-medium-dark-skin-tone',
    character: '🧑🏾‍🔧'
  }, {
    slug: 'mechanic-dark-skin-tone',
    character: '🧑🏿‍🔧'
  }, {
    slug: 'factory-worker-light-skin-tone',
    character: '🧑🏻‍🏭'
  }, {
    slug: 'factory-worker-medium-light-skin-tone',
    character: '🧑🏼‍🏭'
  }, {
    slug: 'factory-worker-medium-skin-tone',
    character: '🧑🏽‍🏭'
  }, {
    slug: 'factory-worker-medium-dark-skin-tone',
    character: '🧑🏾‍🏭'
  }, {
    slug: 'factory-worker-dark-skin-tone',
    character: '🧑🏿‍🏭'
  }, {
    slug: 'office-worker-light-skin-tone',
    character: '🧑🏻‍💼'
  }, {
    slug: 'office-worker-medium-light-skin-tone',
    character: '🧑🏼‍💼'
  }, {
    slug: 'office-worker-medium-skin-tone',
    character: '🧑🏽‍💼'
  }, {
    slug: 'office-worker-medium-dark-skin-tone',
    character: '🧑🏾‍💼'
  }, {
    slug: 'office-worker-dark-skin-tone',
    character: '🧑🏿‍💼'
  }, {
    slug: 'scientist-light-skin-tone',
    character: '🧑🏻‍🔬'
  }, {
    slug: 'scientist-medium-light-skin-tone',
    character: '🧑🏼‍🔬'
  }, {
    slug: 'scientist-medium-skin-tone',
    character: '🧑🏽‍🔬'
  }, {
    slug: 'scientist-medium-dark-skin-tone',
    character: '🧑🏾‍🔬'
  }, {
    slug: 'scientist-dark-skin-tone',
    character: '🧑🏿‍🔬'
  }, {
    slug: 'technologist-light-skin-tone',
    character: '🧑🏻‍💻'
  }, {
    slug: 'technologist-medium-light-skin-tone',
    character: '🧑🏼‍💻'
  }, {
    slug: 'technologist-medium-skin-tone',
    character: '🧑🏽‍💻'
  }, {
    slug: 'technologist-medium-dark-skin-tone',
    character: '🧑🏾‍💻'
  }, {
    slug: 'technologist-dark-skin-tone',
    character: '🧑🏿‍💻'
  }, {
    slug: 'singer-light-skin-tone',
    character: '🧑🏻‍🎤'
  }, {
    slug: 'singer-medium-light-skin-tone',
    character: '🧑🏼‍🎤'
  }, {
    slug: 'singer-medium-skin-tone',
    character: '🧑🏽‍🎤'
  }, {
    slug: 'singer-medium-dark-skin-tone',
    character: '🧑🏾‍🎤'
  }, {
    slug: 'singer-dark-skin-tone',
    character: '🧑🏿‍🎤'
  }, {
    slug: 'artist-light-skin-tone',
    character: '🧑🏻‍🎨'
  }, {
    slug: 'artist-medium-light-skin-tone',
    character: '🧑🏼‍🎨'
  }, {
    slug: 'artist-medium-skin-tone',
    character: '🧑🏽‍🎨'
  }, {
    slug: 'artist-medium-dark-skin-tone',
    character: '🧑🏾‍🎨'
  }, {
    slug: 'artist-dark-skin-tone',
    character: '🧑🏿‍🎨'
  }, {
    slug: 'pilot-light-skin-tone',
    character: '🧑🏻‍✈️'
  }, {
    slug: 'pilot-medium-light-skin-tone',
    character: '🧑🏼‍✈️'
  }, {
    slug: 'pilot-medium-skin-tone',
    character: '🧑🏽‍✈️'
  }, {
    slug: 'pilot-medium-dark-skin-tone',
    character: '🧑🏾‍✈️'
  }, {
    slug: 'pilot-dark-skin-tone',
    character: '🧑🏿‍✈️'
  }, {
    slug: 'astronaut-light-skin-tone',
    character: '🧑🏻‍🚀'
  }, {
    slug: 'astronaut-medium-light-skin-tone',
    character: '🧑🏼‍🚀'
  }, {
    slug: 'astronaut-medium-skin-tone',
    character: '🧑🏽‍🚀'
  }, {
    slug: 'astronaut-medium-dark-skin-tone',
    character: '🧑🏾‍🚀'
  }, {
    slug: 'astronaut-dark-skin-tone',
    character: '🧑🏿‍🚀'
  }, {
    slug: 'firefighter-light-skin-tone',
    character: '🧑🏻‍🚒'
  }, {
    slug: 'firefighter-medium-light-skin-tone',
    character: '🧑🏼‍🚒'
  }, {
    slug: 'firefighter-medium-skin-tone',
    character: '🧑🏽‍🚒'
  }, {
    slug: 'firefighter-medium-dark-skin-tone',
    character: '🧑🏾‍🚒'
  }, {
    slug: 'firefighter-dark-skin-tone',
    character: '🧑🏿‍🚒'
  }, {
    slug: 'person-feeding-baby-light-skin-tone',
    character: '🧑🏻‍🍼'
  }, {
    slug: 'person-feeding-baby-medium-light-skin-tone',
    character: '🧑🏼‍🍼'
  }, {
    slug: 'person-feeding-baby-medium-skin-tone',
    character: '🧑🏽‍🍼'
  }, {
    slug: 'person-feeding-baby-medium-dark-skin-tone',
    character: '🧑🏾‍🍼'
  }, {
    slug: 'person-feeding-baby-dark-skin-tone',
    character: '🧑🏿‍🍼'
  }, {
    slug: 'mx-claus-light-skin-tone',
    character: '🧑🏻‍🎄'
  }, {
    slug: 'mx-claus-medium-light-skin-tone',
    character: '🧑🏼‍🎄'
  }, {
    slug: 'mx-claus-medium-skin-tone',
    character: '🧑🏽‍🎄'
  }, {
    slug: 'mx-claus-medium-dark-skin-tone',
    character: '🧑🏾‍🎄'
  }, {
    slug: 'mx-claus-dark-skin-tone',
    character: '🧑🏿‍🎄'
  }, {
    slug: 'person-with-white-cane-light-skin-tone',
    character: '🧑🏻‍🦯'
  }, {
    slug: 'person-with-white-cane-medium-light-skin-tone',
    character: '🧑🏼‍🦯'
  }, {
    slug: 'person-with-white-cane-medium-skin-tone',
    character: '🧑🏽‍🦯'
  }, {
    slug: 'person-with-white-cane-medium-dark-skin-tone',
    character: '🧑🏾‍🦯'
  }, {
    slug: 'person-with-white-cane-dark-skin-tone',
    character: '🧑🏿‍🦯'
  }, {
    slug: 'person-in-motorized-wheelchair-light-skin-tone',
    character: '🧑🏻‍🦼'
  }, {
    slug: 'person-in-motorized-wheelchair-medium-light-skin-tone',
    character: '🧑🏼‍🦼'
  }, {
    slug: 'person-in-motorized-wheelchair-medium-skin-tone',
    character: '🧑🏽‍🦼'
  }, {
    slug: 'person-in-motorized-wheelchair-medium-dark-skin-tone',
    character: '🧑🏾‍🦼'
  }, {
    slug: 'person-in-motorized-wheelchair-dark-skin-tone',
    character: '🧑🏿‍🦼'
  }, {
    slug: 'person-in-manual-wheelchair-light-skin-tone',
    character: '🧑🏻‍🦽'
  }, {
    slug: 'person-in-manual-wheelchair-medium-light-skin-tone',
    character: '🧑🏼‍🦽'
  }, {
    slug: 'person-in-manual-wheelchair-medium-skin-tone',
    character: '🧑🏽‍🦽'
  }, {
    slug: 'person-in-manual-wheelchair-medium-dark-skin-tone',
    character: '🧑🏾‍🦽'
  }, {
    slug: 'person-in-manual-wheelchair-dark-skin-tone',
    character: '🧑🏿‍🦽'
  }, {
    slug: 'people-holding-hands-light-skin-tone',
    character: '🧑🏻‍🤝‍🧑🏻'
  }, {
    slug: 'people-holding-hands-light-skin-tone-medium-light-skin-tone',
    character: '🧑🏻‍🤝‍🧑🏼'
  }, {
    slug: 'people-holding-hands-light-skin-tone-medium-skin-tone',
    character: '🧑🏻‍🤝‍🧑🏽'
  }, {
    slug: 'people-holding-hands-light-skin-tone-medium-dark-skin-tone',
    character: '🧑🏻‍🤝‍🧑🏾'
  }, {
    slug: 'people-holding-hands-light-skin-tone-dark-skin-tone',
    character: '🧑🏻‍🤝‍🧑🏿'
  }, {
    slug: 'people-holding-hands-medium-light-skin-tone-light-skin-tone',
    character: '🧑🏼‍🤝‍🧑🏻'
  }, {
    slug: 'people-holding-hands-medium-light-skin-tone',
    character: '🧑🏼‍🤝‍🧑🏼'
  }, {
    slug: 'people-holding-hands-medium-light-skin-tone-medium-skin-tone',
    character: '🧑🏼‍🤝‍🧑🏽'
  }, {
    slug: 'people-holding-hands-medium-light-skin-tone-medium-dark-skin-tone',
    character: '🧑🏼‍🤝‍🧑🏾'
  }, {
    slug: 'people-holding-hands-medium-light-skin-tone-dark-skin-tone',
    character: '🧑🏼‍🤝‍🧑🏿'
  }, {
    slug: 'people-holding-hands-medium-skin-tone-light-skin-tone',
    character: '🧑🏽‍🤝‍🧑🏻'
  }, {
    slug: 'people-holding-hands-medium-skin-tone-medium-light-skin-tone',
    character: '🧑🏽‍🤝‍🧑🏼'
  }, {
    slug: 'people-holding-hands-medium-skin-tone',
    character: '🧑🏽‍🤝‍🧑🏽'
  }, {
    slug: 'people-holding-hands-medium-skin-tone-medium-dark-skin-tone',
    character: '🧑🏽‍🤝‍🧑🏾'
  }, {
    slug: 'people-holding-hands-medium-skin-tone-dark-skin-tone',
    character: '🧑🏽‍🤝‍🧑🏿'
  }, {
    slug: 'people-holding-hands-medium-dark-skin-tone-light-skin-tone',
    character: '🧑🏾‍🤝‍🧑🏻'
  }, {
    slug: 'people-holding-hands-medium-dark-skin-tone-medium-light-skin-tone',
    character: '🧑🏾‍🤝‍🧑🏼'
  }, {
    slug: 'people-holding-hands-medium-dark-skin-tone-medium-skin-tone',
    character: '🧑🏾‍🤝‍🧑🏽'
  }, {
    slug: 'people-holding-hands-medium-dark-skin-tone',
    character: '🧑🏾‍🤝‍🧑🏾'
  }, {
    slug: 'people-holding-hands-medium-dark-skin-tone-dark-skin-tone',
    character: '🧑🏾‍🤝‍🧑🏿'
  }, {
    slug: 'people-holding-hands-dark-skin-tone-light-skin-tone',
    character: '🧑🏿‍🤝‍🧑🏻'
  }, {
    slug: 'people-holding-hands-dark-skin-tone-medium-light-skin-tone',
    character: '🧑🏿‍🤝‍🧑🏼'
  }, {
    slug: 'people-holding-hands-dark-skin-tone-medium-skin-tone',
    character: '🧑🏿‍🤝‍🧑🏽'
  }, {
    slug: 'people-holding-hands-dark-skin-tone-medium-dark-skin-tone',
    character: '🧑🏿‍🤝‍🧑🏾'
  }, {
    slug: 'people-holding-hands-dark-skin-tone',
    character: '🧑🏿‍🤝‍🧑🏿'
  }, {
    slug: 'e5-0-person-light-skin-tone',
    character: '🧑🏻'
  }, {
    slug: 'e5-0-person-medium-light-skin-tone',
    character: '🧑🏼'
  }, {
    slug: 'e5-0-person-medium-skin-tone',
    character: '🧑🏽'
  }, {
    slug: 'e5-0-person-medium-dark-skin-tone',
    character: '🧑🏾'
  }, {
    slug: 'e5-0-person-dark-skin-tone',
    character: '🧑🏿'
  }, {
    slug: 'e12-1-person-light-skin-tone-red-hair',
    character: '🧑🏻‍🦰'
  }, {
    slug: 'e12-1-person-medium-light-skin-tone-red-hair',
    character: '🧑🏼‍🦰'
  }, {
    slug: 'e12-1-person-medium-skin-tone-red-hair',
    character: '🧑🏽‍🦰'
  }, {
    slug: 'e12-1-person-medium-dark-skin-tone-red-hair',
    character: '🧑🏾‍🦰'
  }, {
    slug: 'e12-1-person-dark-skin-tone-red-hair',
    character: '🧑🏿‍🦰'
  }, {
    slug: 'e12-1-person-light-skin-tone-curly-hair',
    character: '🧑🏻‍🦱'
  }, {
    slug: 'e12-1-person-medium-light-skin-tone-curly-hair',
    character: '🧑🏼‍🦱'
  }, {
    slug: 'e12-1-person-medium-skin-tone-curly-hair',
    character: '🧑🏽‍🦱'
  }, {
    slug: 'e12-1-person-medium-dark-skin-tone-curly-hair',
    character: '🧑🏾‍🦱'
  }, {
    slug: 'e12-1-person-dark-skin-tone-curly-hair',
    character: '🧑🏿‍🦱'
  }, {
    slug: 'e12-1-person-light-skin-tone-white-hair',
    character: '🧑🏻‍🦳'
  }, {
    slug: 'e12-1-person-medium-light-skin-tone-white-hair',
    character: '🧑🏼‍🦳'
  }, {
    slug: 'e12-1-person-medium-skin-tone-white-hair',
    character: '🧑🏽‍🦳'
  }, {
    slug: 'e12-1-person-medium-dark-skin-tone-white-hair',
    character: '🧑🏾‍🦳'
  }, {
    slug: 'e12-1-person-dark-skin-tone-white-hair',
    character: '🧑🏿‍🦳'
  }, {
    slug: 'e12-1-person-light-skin-tone-bald',
    character: '🧑🏻‍🦲'
  }, {
    slug: 'e12-1-person-medium-light-skin-tone-bald',
    character: '🧑🏼‍🦲'
  }, {
    slug: 'e12-1-person-medium-skin-tone-bald',
    character: '🧑🏽‍🦲'
  }, {
    slug: 'e12-1-person-medium-dark-skin-tone-bald',
    character: '🧑🏾‍🦲'
  }, {
    slug: 'e12-1-person-dark-skin-tone-bald',
    character: '🧑🏿‍🦲'
  }, {
    slug: 'e12-1-health-worker-light-skin-tone',
    character: '🧑🏻‍⚕️'
  }, {
    slug: 'e12-1-health-worker-medium-light-skin-tone',
    character: '🧑🏼‍⚕️'
  }, {
    slug: 'e12-1-health-worker-medium-skin-tone',
    character: '🧑🏽‍⚕️'
  }, {
    slug: 'e12-1-health-worker-medium-dark-skin-tone',
    character: '🧑🏾‍⚕️'
  }, {
    slug: 'e12-1-health-worker-dark-skin-tone',
    character: '🧑🏿‍⚕️'
  }, {
    slug: 'e12-1-student-light-skin-tone',
    character: '🧑🏻‍🎓'
  }, {
    slug: 'e12-1-student-medium-light-skin-tone',
    character: '🧑🏼‍🎓'
  }, {
    slug: 'e12-1-student-medium-skin-tone',
    character: '🧑🏽‍🎓'
  }, {
    slug: 'e12-1-student-medium-dark-skin-tone',
    character: '🧑🏾‍🎓'
  }, {
    slug: 'e12-1-student-dark-skin-tone',
    character: '🧑🏿‍🎓'
  }, {
    slug: 'e12-1-teacher-light-skin-tone',
    character: '🧑🏻‍🏫'
  }, {
    slug: 'e12-1-teacher-medium-light-skin-tone',
    character: '🧑🏼‍🏫'
  }, {
    slug: 'e12-1-teacher-medium-skin-tone',
    character: '🧑🏽‍🏫'
  }, {
    slug: 'e12-1-teacher-medium-dark-skin-tone',
    character: '🧑🏾‍🏫'
  }, {
    slug: 'e12-1-teacher-dark-skin-tone',
    character: '🧑🏿‍🏫'
  }, {
    slug: 'e12-1-judge-light-skin-tone',
    character: '🧑🏻‍⚖️'
  }, {
    slug: 'e12-1-judge-medium-light-skin-tone',
    character: '🧑🏼‍⚖️'
  }, {
    slug: 'e12-1-judge-medium-skin-tone',
    character: '🧑🏽‍⚖️'
  }, {
    slug: 'e12-1-judge-medium-dark-skin-tone',
    character: '🧑🏾‍⚖️'
  }, {
    slug: 'e12-1-judge-dark-skin-tone',
    character: '🧑🏿‍⚖️'
  }, {
    slug: 'e12-1-farmer-light-skin-tone',
    character: '🧑🏻‍🌾'
  }, {
    slug: 'e12-1-farmer-medium-light-skin-tone',
    character: '🧑🏼‍🌾'
  }, {
    slug: 'e12-1-farmer-medium-skin-tone',
    character: '🧑🏽‍🌾'
  }, {
    slug: 'e12-1-farmer-medium-dark-skin-tone',
    character: '🧑🏾‍🌾'
  }, {
    slug: 'e12-1-farmer-dark-skin-tone',
    character: '🧑🏿‍🌾'
  }, {
    slug: 'e12-1-cook-light-skin-tone',
    character: '🧑🏻‍🍳'
  }, {
    slug: 'e12-1-cook-medium-light-skin-tone',
    character: '🧑🏼‍🍳'
  }, {
    slug: 'e12-1-cook-medium-skin-tone',
    character: '🧑🏽‍🍳'
  }, {
    slug: 'e12-1-cook-medium-dark-skin-tone',
    character: '🧑🏾‍🍳'
  }, {
    slug: 'e12-1-cook-dark-skin-tone',
    character: '🧑🏿‍🍳'
  }, {
    slug: 'e12-1-mechanic-light-skin-tone',
    character: '🧑🏻‍🔧'
  }, {
    slug: 'e12-1-mechanic-medium-light-skin-tone',
    character: '🧑🏼‍🔧'
  }, {
    slug: 'e12-1-mechanic-medium-skin-tone',
    character: '🧑🏽‍🔧'
  }, {
    slug: 'e12-1-mechanic-medium-dark-skin-tone',
    character: '🧑🏾‍🔧'
  }, {
    slug: 'e12-1-mechanic-dark-skin-tone',
    character: '🧑🏿‍🔧'
  }, {
    slug: 'e12-1-factory-worker-light-skin-tone',
    character: '🧑🏻‍🏭'
  }, {
    slug: 'e12-1-factory-worker-medium-light-skin-tone',
    character: '🧑🏼‍🏭'
  }, {
    slug: 'e12-1-factory-worker-medium-skin-tone',
    character: '🧑🏽‍🏭'
  }, {
    slug: 'e12-1-factory-worker-medium-dark-skin-tone',
    character: '🧑🏾‍🏭'
  }, {
    slug: 'e12-1-factory-worker-dark-skin-tone',
    character: '🧑🏿‍🏭'
  }, {
    slug: 'e12-1-office-worker-light-skin-tone',
    character: '🧑🏻‍💼'
  }, {
    slug: 'e12-1-office-worker-medium-light-skin-tone',
    character: '🧑🏼‍💼'
  }, {
    slug: 'e12-1-office-worker-medium-skin-tone',
    character: '🧑🏽‍💼'
  }, {
    slug: 'e12-1-office-worker-medium-dark-skin-tone',
    character: '🧑🏾‍💼'
  }, {
    slug: 'e12-1-office-worker-dark-skin-tone',
    character: '🧑🏿‍💼'
  }, {
    slug: 'e12-1-scientist-light-skin-tone',
    character: '🧑🏻‍🔬'
  }, {
    slug: 'e12-1-scientist-medium-light-skin-tone',
    character: '🧑🏼‍🔬'
  }, {
    slug: 'e12-1-scientist-medium-skin-tone',
    character: '🧑🏽‍🔬'
  }, {
    slug: 'e12-1-scientist-medium-dark-skin-tone',
    character: '🧑🏾‍🔬'
  }, {
    slug: 'e12-1-scientist-dark-skin-tone',
    character: '🧑🏿‍🔬'
  }, {
    slug: 'e12-1-technologist-light-skin-tone',
    character: '🧑🏻‍💻'
  }, {
    slug: 'e12-1-technologist-medium-light-skin-tone',
    character: '🧑🏼‍💻'
  }, {
    slug: 'e12-1-technologist-medium-skin-tone',
    character: '🧑🏽‍💻'
  }, {
    slug: 'e12-1-technologist-medium-dark-skin-tone',
    character: '🧑🏾‍💻'
  }, {
    slug: 'e12-1-technologist-dark-skin-tone',
    character: '🧑🏿‍💻'
  }, {
    slug: 'e12-1-singer-light-skin-tone',
    character: '🧑🏻‍🎤'
  }, {
    slug: 'e12-1-singer-medium-light-skin-tone',
    character: '🧑🏼‍🎤'
  }, {
    slug: 'e12-1-singer-medium-skin-tone',
    character: '🧑🏽‍🎤'
  }, {
    slug: 'e12-1-singer-medium-dark-skin-tone',
    character: '🧑🏾‍🎤'
  }, {
    slug: 'e12-1-singer-dark-skin-tone',
    character: '🧑🏿‍🎤'
  }, {
    slug: 'e12-1-artist-light-skin-tone',
    character: '🧑🏻‍🎨'
  }, {
    slug: 'e12-1-artist-medium-light-skin-tone',
    character: '🧑🏼‍🎨'
  }, {
    slug: 'e12-1-artist-medium-skin-tone',
    character: '🧑🏽‍🎨'
  }, {
    slug: 'e12-1-artist-medium-dark-skin-tone',
    character: '🧑🏾‍🎨'
  }, {
    slug: 'e12-1-artist-dark-skin-tone',
    character: '🧑🏿‍🎨'
  }, {
    slug: 'e12-1-pilot-light-skin-tone',
    character: '🧑🏻‍✈️'
  }, {
    slug: 'e12-1-pilot-medium-light-skin-tone',
    character: '🧑🏼‍✈️'
  }, {
    slug: 'e12-1-pilot-medium-skin-tone',
    character: '🧑🏽‍✈️'
  }, {
    slug: 'e12-1-pilot-medium-dark-skin-tone',
    character: '🧑🏾‍✈️'
  }, {
    slug: 'e12-1-pilot-dark-skin-tone',
    character: '🧑🏿‍✈️'
  }, {
    slug: 'e12-1-astronaut-light-skin-tone',
    character: '🧑🏻‍🚀'
  }, {
    slug: 'e12-1-astronaut-medium-light-skin-tone',
    character: '🧑🏼‍🚀'
  }, {
    slug: 'e12-1-astronaut-medium-skin-tone',
    character: '🧑🏽‍🚀'
  }, {
    slug: 'e12-1-astronaut-medium-dark-skin-tone',
    character: '🧑🏾‍🚀'
  }, {
    slug: 'e12-1-astronaut-dark-skin-tone',
    character: '🧑🏿‍🚀'
  }, {
    slug: 'e12-1-firefighter-light-skin-tone',
    character: '🧑🏻‍🚒'
  }, {
    slug: 'e12-1-firefighter-medium-light-skin-tone',
    character: '🧑🏼‍🚒'
  }, {
    slug: 'e12-1-firefighter-medium-skin-tone',
    character: '🧑🏽‍🚒'
  }, {
    slug: 'e12-1-firefighter-medium-dark-skin-tone',
    character: '🧑🏾‍🚒'
  }, {
    slug: 'e12-1-firefighter-dark-skin-tone',
    character: '🧑🏿‍🚒'
  }, {
    slug: 'e13-0-person-feeding-baby-light-skin-tone',
    character: '🧑🏻‍🍼'
  }, {
    slug: 'e13-0-person-feeding-baby-medium-light-skin-tone',
    character: '🧑🏼‍🍼'
  }, {
    slug: 'e13-0-person-feeding-baby-medium-skin-tone',
    character: '🧑🏽‍🍼'
  }, {
    slug: 'e13-0-person-feeding-baby-medium-dark-skin-tone',
    character: '🧑🏾‍🍼'
  }, {
    slug: 'e13-0-person-feeding-baby-dark-skin-tone',
    character: '🧑🏿‍🍼'
  }, {
    slug: 'e13-0-mx-claus-light-skin-tone',
    character: '🧑🏻‍🎄'
  }, {
    slug: 'e13-0-mx-claus-medium-light-skin-tone',
    character: '🧑🏼‍🎄'
  }, {
    slug: 'e13-0-mx-claus-medium-skin-tone',
    character: '🧑🏽‍🎄'
  }, {
    slug: 'e13-0-mx-claus-medium-dark-skin-tone',
    character: '🧑🏾‍🎄'
  }, {
    slug: 'e13-0-mx-claus-dark-skin-tone',
    character: '🧑🏿‍🎄'
  }, {
    slug: 'e12-1-person-with-white-cane-light-skin-tone',
    character: '🧑🏻‍🦯'
  }, {
    slug: 'e12-1-person-with-white-cane-medium-light-skin-tone',
    character: '🧑🏼‍🦯'
  }, {
    slug: 'e12-1-person-with-white-cane-medium-skin-tone',
    character: '🧑🏽‍🦯'
  }, {
    slug: 'e12-1-person-with-white-cane-medium-dark-skin-tone',
    character: '🧑🏾‍🦯'
  }, {
    slug: 'e12-1-person-with-white-cane-dark-skin-tone',
    character: '🧑🏿‍🦯'
  }, {
    slug: 'e12-1-person-in-motorized-wheelchair-light-skin-tone',
    character: '🧑🏻‍🦼'
  }, {
    slug: 'e12-1-person-in-motorized-wheelchair-medium-light-skin-tone',
    character: '🧑🏼‍🦼'
  }, {
    slug: 'e12-1-person-in-motorized-wheelchair-medium-skin-tone',
    character: '🧑🏽‍🦼'
  }, {
    slug: 'e12-1-person-in-motorized-wheelchair-medium-dark-skin-tone',
    character: '🧑🏾‍🦼'
  }, {
    slug: 'e12-1-person-in-motorized-wheelchair-dark-skin-tone',
    character: '🧑🏿‍🦼'
  }, {
    slug: 'e12-1-person-in-manual-wheelchair-light-skin-tone',
    character: '🧑🏻‍🦽'
  }, {
    slug: 'e12-1-person-in-manual-wheelchair-medium-light-skin-tone',
    character: '🧑🏼‍🦽'
  }, {
    slug: 'e12-1-person-in-manual-wheelchair-medium-skin-tone',
    character: '🧑🏽‍🦽'
  }, {
    slug: 'e12-1-person-in-manual-wheelchair-medium-dark-skin-tone',
    character: '🧑🏾‍🦽'
  }, {
    slug: 'e12-1-person-in-manual-wheelchair-dark-skin-tone',
    character: '🧑🏿‍🦽'
  }, {
    slug: 'e12-0-people-holding-hands-light-skin-tone',
    character: '🧑🏻‍🤝‍🧑🏻'
  }, {
    slug: 'e12-1-people-holding-hands-light-skin-tone-medium-light-skin-tone',
    character: '🧑🏻‍🤝‍🧑🏼'
  }, {
    slug: 'e12-1-people-holding-hands-light-skin-tone-medium-skin-tone',
    character: '🧑🏻‍🤝‍🧑🏽'
  }, {
    slug: 'e12-1-people-holding-hands-light-skin-tone-medium-dark-skin-tone',
    character: '🧑🏻‍🤝‍🧑🏾'
  }, {
    slug: 'e12-1-people-holding-hands-light-skin-tone-dark-skin-tone',
    character: '🧑🏻‍🤝‍🧑🏿'
  }, {
    slug: 'e12-0-people-holding-hands-medium-light-skin-tone-light-skin-tone',
    character: '🧑🏼‍🤝‍🧑🏻'
  }, {
    slug: 'e12-0-people-holding-hands-medium-light-skin-tone',
    character: '🧑🏼‍🤝‍🧑🏼'
  }, {
    slug: 'e12-1-people-holding-hands-medium-light-skin-tone-medium-skin-tone',
    character: '🧑🏼‍🤝‍🧑🏽'
  }, {
    slug: 'e12-1-people-holding-hands-medium-light-skin-tone-medium-dark-skin-tone',
    character: '🧑🏼‍🤝‍🧑🏾'
  }, {
    slug: 'e12-1-people-holding-hands-medium-light-skin-tone-dark-skin-tone',
    character: '🧑🏼‍🤝‍🧑🏿'
  }, {
    slug: 'e12-0-people-holding-hands-medium-skin-tone-light-skin-tone',
    character: '🧑🏽‍🤝‍🧑🏻'
  }, {
    slug: 'e12-0-people-holding-hands-medium-skin-tone-medium-light-skin-tone',
    character: '🧑🏽‍🤝‍🧑🏼'
  }, {
    slug: 'e12-0-people-holding-hands-medium-skin-tone',
    character: '🧑🏽‍🤝‍🧑🏽'
  }, {
    slug: 'e12-1-people-holding-hands-medium-skin-tone-medium-dark-skin-tone',
    character: '🧑🏽‍🤝‍🧑🏾'
  }, {
    slug: 'e12-1-people-holding-hands-medium-skin-tone-dark-skin-tone',
    character: '🧑🏽‍🤝‍🧑🏿'
  }, {
    slug: 'e12-0-people-holding-hands-medium-dark-skin-tone-light-skin-tone',
    character: '🧑🏾‍🤝‍🧑🏻'
  }, {
    slug: 'e12-0-people-holding-hands-medium-dark-skin-tone-medium-light-skin-tone',
    character: '🧑🏾‍🤝‍🧑🏼'
  }, {
    slug: 'e12-0-people-holding-hands-medium-dark-skin-tone-medium-skin-tone',
    character: '🧑🏾‍🤝‍🧑🏽'
  }, {
    slug: 'e12-0-people-holding-hands-medium-dark-skin-tone',
    character: '🧑🏾‍🤝‍🧑🏾'
  }, {
    slug: 'e12-1-people-holding-hands-medium-dark-skin-tone-dark-skin-tone',
    character: '🧑🏾‍🤝‍🧑🏿'
  }, {
    slug: 'e12-0-people-holding-hands-dark-skin-tone-light-skin-tone',
    character: '🧑🏿‍🤝‍🧑🏻'
  }, {
    slug: 'e12-0-people-holding-hands-dark-skin-tone-medium-light-skin-tone',
    character: '🧑🏿‍🤝‍🧑🏼'
  }, {
    slug: 'e12-0-people-holding-hands-dark-skin-tone-medium-skin-tone',
    character: '🧑🏿‍🤝‍🧑🏽'
  }, {
    slug: 'e12-0-people-holding-hands-dark-skin-tone-medium-dark-skin-tone',
    character: '🧑🏿‍🤝‍🧑🏾'
  }, {
    slug: 'e12-0-people-holding-hands-dark-skin-tone',
    character: '🧑🏿‍🤝‍🧑🏿'
  }]
}, {
  slug: 'person-blond-hair',
  character: '👱',
  unicodeName: 'person: blond hair',
  codePoint: '1F471',
  group: 'people-body',
  subGroup: 'person',
  variants: [{
    slug: 'person-light-skin-tone-blond-hair',
    character: '👱🏻'
  }, {
    slug: 'person-medium-light-skin-tone-blond-hair',
    character: '👱🏼'
  }, {
    slug: 'person-medium-skin-tone-blond-hair',
    character: '👱🏽'
  }, {
    slug: 'person-medium-dark-skin-tone-blond-hair',
    character: '👱🏾'
  }, {
    slug: 'person-dark-skin-tone-blond-hair',
    character: '👱🏿'
  }, {
    slug: 'woman-light-skin-tone-blond-hair',
    character: '👱🏻‍♀️'
  }, {
    slug: 'woman-medium-light-skin-tone-blond-hair',
    character: '👱🏼‍♀️'
  }, {
    slug: 'woman-medium-skin-tone-blond-hair',
    character: '👱🏽‍♀️'
  }, {
    slug: 'woman-medium-dark-skin-tone-blond-hair',
    character: '👱🏾‍♀️'
  }, {
    slug: 'woman-dark-skin-tone-blond-hair',
    character: '👱🏿‍♀️'
  }, {
    slug: 'man-blond-hair',
    character: '👱‍♂️'
  }, {
    slug: 'man-light-skin-tone-blond-hair',
    character: '👱🏻‍♂️'
  }, {
    slug: 'man-medium-light-skin-tone-blond-hair',
    character: '👱🏼‍♂️'
  }, {
    slug: 'man-medium-skin-tone-blond-hair',
    character: '👱🏽‍♂️'
  }, {
    slug: 'man-medium-dark-skin-tone-blond-hair',
    character: '👱🏾‍♂️'
  }, {
    slug: 'man-dark-skin-tone-blond-hair',
    character: '👱🏿‍♂️'
  }, {
    slug: 'e1-0-person-light-skin-tone-blond-hair',
    character: '👱🏻'
  }, {
    slug: 'e1-0-person-medium-light-skin-tone-blond-hair',
    character: '👱🏼'
  }, {
    slug: 'e1-0-person-medium-skin-tone-blond-hair',
    character: '👱🏽'
  }, {
    slug: 'e1-0-person-medium-dark-skin-tone-blond-hair',
    character: '👱🏾'
  }, {
    slug: 'e1-0-person-dark-skin-tone-blond-hair',
    character: '👱🏿'
  }, {
    slug: 'e4-0-woman-light-skin-tone-blond-hair',
    character: '👱🏻‍♀️'
  }, {
    slug: 'e4-0-woman-medium-light-skin-tone-blond-hair',
    character: '👱🏼‍♀️'
  }, {
    slug: 'e4-0-woman-medium-skin-tone-blond-hair',
    character: '👱🏽‍♀️'
  }, {
    slug: 'e4-0-woman-medium-dark-skin-tone-blond-hair',
    character: '👱🏾‍♀️'
  }, {
    slug: 'e4-0-woman-dark-skin-tone-blond-hair',
    character: '👱🏿‍♀️'
  }, {
    slug: 'e4-0-man-blond-hair',
    character: '👱‍♂️'
  }, {
    slug: 'e4-0-man-light-skin-tone-blond-hair',
    character: '👱🏻‍♂️'
  }, {
    slug: 'e4-0-man-medium-light-skin-tone-blond-hair',
    character: '👱🏼‍♂️'
  }, {
    slug: 'e4-0-man-medium-skin-tone-blond-hair',
    character: '👱🏽‍♂️'
  }, {
    slug: 'e4-0-man-medium-dark-skin-tone-blond-hair',
    character: '👱🏾‍♂️'
  }, {
    slug: 'e4-0-man-dark-skin-tone-blond-hair',
    character: '👱🏿‍♂️'
  }]
}, {
  slug: 'man',
  character: '👨',
  unicodeName: 'man',
  codePoint: '1F468',
  group: 'people-body',
  subGroup: 'person',
  variants: [{
    slug: 'man-light-skin-tone',
    character: '👨🏻'
  }, {
    slug: 'man-medium-light-skin-tone',
    character: '👨🏼'
  }, {
    slug: 'man-medium-skin-tone',
    character: '👨🏽'
  }, {
    slug: 'man-medium-dark-skin-tone',
    character: '👨🏾'
  }, {
    slug: 'man-dark-skin-tone',
    character: '👨🏿'
  }, {
    slug: 'man-light-skin-tone-red-hair',
    character: '👨🏻‍🦰'
  }, {
    slug: 'man-medium-light-skin-tone-red-hair',
    character: '👨🏼‍🦰'
  }, {
    slug: 'man-medium-skin-tone-red-hair',
    character: '👨🏽‍🦰'
  }, {
    slug: 'man-medium-dark-skin-tone-red-hair',
    character: '👨🏾‍🦰'
  }, {
    slug: 'man-dark-skin-tone-red-hair',
    character: '👨🏿‍🦰'
  }, {
    slug: 'man-curly-hair',
    character: '👨‍🦱'
  }, {
    slug: 'man-light-skin-tone-curly-hair',
    character: '👨🏻‍🦱'
  }, {
    slug: 'man-medium-light-skin-tone-curly-hair',
    character: '👨🏼‍🦱'
  }, {
    slug: 'man-medium-skin-tone-curly-hair',
    character: '👨🏽‍🦱'
  }, {
    slug: 'man-medium-dark-skin-tone-curly-hair',
    character: '👨🏾‍🦱'
  }, {
    slug: 'man-dark-skin-tone-curly-hair',
    character: '👨🏿‍🦱'
  }, {
    slug: 'man-white-hair',
    character: '👨‍🦳'
  }, {
    slug: 'man-light-skin-tone-white-hair',
    character: '👨🏻‍🦳'
  }, {
    slug: 'man-medium-light-skin-tone-white-hair',
    character: '👨🏼‍🦳'
  }, {
    slug: 'man-medium-skin-tone-white-hair',
    character: '👨🏽‍🦳'
  }, {
    slug: 'man-medium-dark-skin-tone-white-hair',
    character: '👨🏾‍🦳'
  }, {
    slug: 'man-dark-skin-tone-white-hair',
    character: '👨🏿‍🦳'
  }, {
    slug: 'man-bald',
    character: '👨‍🦲'
  }, {
    slug: 'man-light-skin-tone-bald',
    character: '👨🏻‍🦲'
  }, {
    slug: 'man-medium-light-skin-tone-bald',
    character: '👨🏼‍🦲'
  }, {
    slug: 'man-medium-skin-tone-bald',
    character: '👨🏽‍🦲'
  }, {
    slug: 'man-medium-dark-skin-tone-bald',
    character: '👨🏾‍🦲'
  }, {
    slug: 'man-dark-skin-tone-bald',
    character: '👨🏿‍🦲'
  }, {
    slug: 'man-health-worker-light-skin-tone',
    character: '👨🏻‍⚕️'
  }, {
    slug: 'man-health-worker-medium-light-skin-tone',
    character: '👨🏼‍⚕️'
  }, {
    slug: 'man-health-worker-medium-skin-tone',
    character: '👨🏽‍⚕️'
  }, {
    slug: 'man-health-worker-medium-dark-skin-tone',
    character: '👨🏾‍⚕️'
  }, {
    slug: 'man-health-worker-dark-skin-tone',
    character: '👨🏿‍⚕️'
  }, {
    slug: 'man-student-light-skin-tone',
    character: '👨🏻‍🎓'
  }, {
    slug: 'man-student-medium-light-skin-tone',
    character: '👨🏼‍🎓'
  }, {
    slug: 'man-student-medium-skin-tone',
    character: '👨🏽‍🎓'
  }, {
    slug: 'man-student-medium-dark-skin-tone',
    character: '👨🏾‍🎓'
  }, {
    slug: 'man-student-dark-skin-tone',
    character: '👨🏿‍🎓'
  }, {
    slug: 'man-teacher-light-skin-tone',
    character: '👨🏻‍🏫'
  }, {
    slug: 'man-teacher-medium-light-skin-tone',
    character: '👨🏼‍🏫'
  }, {
    slug: 'man-teacher-medium-skin-tone',
    character: '👨🏽‍🏫'
  }, {
    slug: 'man-teacher-medium-dark-skin-tone',
    character: '👨🏾‍🏫'
  }, {
    slug: 'man-teacher-dark-skin-tone',
    character: '👨🏿‍🏫'
  }, {
    slug: 'man-judge-light-skin-tone',
    character: '👨🏻‍⚖️'
  }, {
    slug: 'man-judge-medium-light-skin-tone',
    character: '👨🏼‍⚖️'
  }, {
    slug: 'man-judge-medium-skin-tone',
    character: '👨🏽‍⚖️'
  }, {
    slug: 'man-judge-medium-dark-skin-tone',
    character: '👨🏾‍⚖️'
  }, {
    slug: 'man-judge-dark-skin-tone',
    character: '👨🏿‍⚖️'
  }, {
    slug: 'man-farmer-light-skin-tone',
    character: '👨🏻‍🌾'
  }, {
    slug: 'man-farmer-medium-light-skin-tone',
    character: '👨🏼‍🌾'
  }, {
    slug: 'man-farmer-medium-skin-tone',
    character: '👨🏽‍🌾'
  }, {
    slug: 'man-farmer-medium-dark-skin-tone',
    character: '👨🏾‍🌾'
  }, {
    slug: 'man-farmer-dark-skin-tone',
    character: '👨🏿‍🌾'
  }, {
    slug: 'man-cook-light-skin-tone',
    character: '👨🏻‍🍳'
  }, {
    slug: 'man-cook-medium-light-skin-tone',
    character: '👨🏼‍🍳'
  }, {
    slug: 'man-cook-medium-skin-tone',
    character: '👨🏽‍🍳'
  }, {
    slug: 'man-cook-medium-dark-skin-tone',
    character: '👨🏾‍🍳'
  }, {
    slug: 'man-cook-dark-skin-tone',
    character: '👨🏿‍🍳'
  }, {
    slug: 'man-mechanic-light-skin-tone',
    character: '👨🏻‍🔧'
  }, {
    slug: 'man-mechanic-medium-light-skin-tone',
    character: '👨🏼‍🔧'
  }, {
    slug: 'man-mechanic-medium-skin-tone',
    character: '👨🏽‍🔧'
  }, {
    slug: 'man-mechanic-medium-dark-skin-tone',
    character: '👨🏾‍🔧'
  }, {
    slug: 'man-mechanic-dark-skin-tone',
    character: '👨🏿‍🔧'
  }, {
    slug: 'man-factory-worker-light-skin-tone',
    character: '👨🏻‍🏭'
  }, {
    slug: 'man-factory-worker-medium-light-skin-tone',
    character: '👨🏼‍🏭'
  }, {
    slug: 'man-factory-worker-medium-skin-tone',
    character: '👨🏽‍🏭'
  }, {
    slug: 'man-factory-worker-medium-dark-skin-tone',
    character: '👨🏾‍🏭'
  }, {
    slug: 'man-factory-worker-dark-skin-tone',
    character: '👨🏿‍🏭'
  }, {
    slug: 'man-office-worker-light-skin-tone',
    character: '👨🏻‍💼'
  }, {
    slug: 'man-office-worker-medium-light-skin-tone',
    character: '👨🏼‍💼'
  }, {
    slug: 'man-office-worker-medium-skin-tone',
    character: '👨🏽‍💼'
  }, {
    slug: 'man-office-worker-medium-dark-skin-tone',
    character: '👨🏾‍💼'
  }, {
    slug: 'man-office-worker-dark-skin-tone',
    character: '👨🏿‍💼'
  }, {
    slug: 'man-scientist-light-skin-tone',
    character: '👨🏻‍🔬'
  }, {
    slug: 'man-scientist-medium-light-skin-tone',
    character: '👨🏼‍🔬'
  }, {
    slug: 'man-scientist-medium-skin-tone',
    character: '👨🏽‍🔬'
  }, {
    slug: 'man-scientist-medium-dark-skin-tone',
    character: '👨🏾‍🔬'
  }, {
    slug: 'man-scientist-dark-skin-tone',
    character: '👨🏿‍🔬'
  }, {
    slug: 'man-technologist-light-skin-tone',
    character: '👨🏻‍💻'
  }, {
    slug: 'man-technologist-medium-light-skin-tone',
    character: '👨🏼‍💻'
  }, {
    slug: 'man-technologist-medium-skin-tone',
    character: '👨🏽‍💻'
  }, {
    slug: 'man-technologist-medium-dark-skin-tone',
    character: '👨🏾‍💻'
  }, {
    slug: 'man-technologist-dark-skin-tone',
    character: '👨🏿‍💻'
  }, {
    slug: 'man-singer-light-skin-tone',
    character: '👨🏻‍🎤'
  }, {
    slug: 'man-singer-medium-light-skin-tone',
    character: '👨🏼‍🎤'
  }, {
    slug: 'man-singer-medium-skin-tone',
    character: '👨🏽‍🎤'
  }, {
    slug: 'man-singer-medium-dark-skin-tone',
    character: '👨🏾‍🎤'
  }, {
    slug: 'man-singer-dark-skin-tone',
    character: '👨🏿‍🎤'
  }, {
    slug: 'man-artist-light-skin-tone',
    character: '👨🏻‍🎨'
  }, {
    slug: 'man-artist-medium-light-skin-tone',
    character: '👨🏼‍🎨'
  }, {
    slug: 'man-artist-medium-skin-tone',
    character: '👨🏽‍🎨'
  }, {
    slug: 'man-artist-medium-dark-skin-tone',
    character: '👨🏾‍🎨'
  }, {
    slug: 'man-artist-dark-skin-tone',
    character: '👨🏿‍🎨'
  }, {
    slug: 'man-pilot-light-skin-tone',
    character: '👨🏻‍✈️'
  }, {
    slug: 'man-pilot-medium-light-skin-tone',
    character: '👨🏼‍✈️'
  }, {
    slug: 'man-pilot-medium-skin-tone',
    character: '👨🏽‍✈️'
  }, {
    slug: 'man-pilot-medium-dark-skin-tone',
    character: '👨🏾‍✈️'
  }, {
    slug: 'man-pilot-dark-skin-tone',
    character: '👨🏿‍✈️'
  }, {
    slug: 'man-astronaut-light-skin-tone',
    character: '👨🏻‍🚀'
  }, {
    slug: 'man-astronaut-medium-light-skin-tone',
    character: '👨🏼‍🚀'
  }, {
    slug: 'man-astronaut-medium-skin-tone',
    character: '👨🏽‍🚀'
  }, {
    slug: 'man-astronaut-medium-dark-skin-tone',
    character: '👨🏾‍🚀'
  }, {
    slug: 'man-astronaut-dark-skin-tone',
    character: '👨🏿‍🚀'
  }, {
    slug: 'man-firefighter-light-skin-tone',
    character: '👨🏻‍🚒'
  }, {
    slug: 'man-firefighter-medium-light-skin-tone',
    character: '👨🏼‍🚒'
  }, {
    slug: 'man-firefighter-medium-skin-tone',
    character: '👨🏽‍🚒'
  }, {
    slug: 'man-firefighter-medium-dark-skin-tone',
    character: '👨🏾‍🚒'
  }, {
    slug: 'man-firefighter-dark-skin-tone',
    character: '👨🏿‍🚒'
  }, {
    slug: 'man-feeding-baby-light-skin-tone',
    character: '👨🏻‍🍼'
  }, {
    slug: 'man-feeding-baby-medium-light-skin-tone',
    character: '👨🏼‍🍼'
  }, {
    slug: 'man-feeding-baby-medium-skin-tone',
    character: '👨🏽‍🍼'
  }, {
    slug: 'man-feeding-baby-medium-dark-skin-tone',
    character: '👨🏾‍🍼'
  }, {
    slug: 'man-feeding-baby-dark-skin-tone',
    character: '👨🏿‍🍼'
  }, {
    slug: 'man-with-white-cane-light-skin-tone',
    character: '👨🏻‍🦯'
  }, {
    slug: 'man-with-white-cane-medium-light-skin-tone',
    character: '👨🏼‍🦯'
  }, {
    slug: 'man-with-white-cane-medium-skin-tone',
    character: '👨🏽‍🦯'
  }, {
    slug: 'man-with-white-cane-medium-dark-skin-tone',
    character: '👨🏾‍🦯'
  }, {
    slug: 'man-with-white-cane-dark-skin-tone',
    character: '👨🏿‍🦯'
  }, {
    slug: 'man-in-motorized-wheelchair-light-skin-tone',
    character: '👨🏻‍🦼'
  }, {
    slug: 'man-in-motorized-wheelchair-medium-light-skin-tone',
    character: '👨🏼‍🦼'
  }, {
    slug: 'man-in-motorized-wheelchair-medium-skin-tone',
    character: '👨🏽‍🦼'
  }, {
    slug: 'man-in-motorized-wheelchair-medium-dark-skin-tone',
    character: '👨🏾‍🦼'
  }, {
    slug: 'man-in-motorized-wheelchair-dark-skin-tone',
    character: '👨🏿‍🦼'
  }, {
    slug: 'man-in-manual-wheelchair-light-skin-tone',
    character: '👨🏻‍🦽'
  }, {
    slug: 'man-in-manual-wheelchair-medium-light-skin-tone',
    character: '👨🏼‍🦽'
  }, {
    slug: 'man-in-manual-wheelchair-medium-skin-tone',
    character: '👨🏽‍🦽'
  }, {
    slug: 'man-in-manual-wheelchair-medium-dark-skin-tone',
    character: '👨🏾‍🦽'
  }, {
    slug: 'man-in-manual-wheelchair-dark-skin-tone',
    character: '👨🏿‍🦽'
  }, {
    slug: 'men-holding-hands-light-skin-tone-medium-skin-tone',
    character: '👨🏻‍🤝‍👨🏽'
  }, {
    slug: 'men-holding-hands-light-skin-tone-medium-dark-skin-tone',
    character: '👨🏻‍🤝‍👨🏾'
  }, {
    slug: 'men-holding-hands-light-skin-tone-dark-skin-tone',
    character: '👨🏻‍🤝‍👨🏿'
  }, {
    slug: 'men-holding-hands-medium-light-skin-tone-light-skin-tone',
    character: '👨🏼‍🤝‍👨🏻'
  }, {
    slug: 'men-holding-hands-medium-light-skin-tone-medium-dark-skin-tone',
    character: '👨🏼‍🤝‍👨🏾'
  }, {
    slug: 'men-holding-hands-medium-light-skin-tone-dark-skin-tone',
    character: '👨🏼‍🤝‍👨🏿'
  }, {
    slug: 'men-holding-hands-medium-skin-tone-light-skin-tone',
    character: '👨🏽‍🤝‍👨🏻'
  }, {
    slug: 'men-holding-hands-medium-skin-tone-medium-light-skin-tone',
    character: '👨🏽‍🤝‍👨🏼'
  }, {
    slug: 'men-holding-hands-medium-skin-tone-dark-skin-tone',
    character: '👨🏽‍🤝‍👨🏿'
  }, {
    slug: 'men-holding-hands-medium-dark-skin-tone-light-skin-tone',
    character: '👨🏾‍🤝‍👨🏻'
  }, {
    slug: 'men-holding-hands-medium-dark-skin-tone-medium-light-skin-tone',
    character: '👨🏾‍🤝‍👨🏼'
  }, {
    slug: 'men-holding-hands-medium-dark-skin-tone-medium-skin-tone',
    character: '👨🏾‍🤝‍👨🏽'
  }, {
    slug: 'men-holding-hands-dark-skin-tone-light-skin-tone',
    character: '👨🏿‍🤝‍👨🏻'
  }, {
    slug: 'men-holding-hands-dark-skin-tone-medium-light-skin-tone',
    character: '👨🏿‍🤝‍👨🏼'
  }, {
    slug: 'men-holding-hands-dark-skin-tone-medium-skin-tone',
    character: '👨🏿‍🤝‍👨🏽'
  }, {
    slug: 'men-holding-hands-dark-skin-tone-medium-dark-skin-tone',
    character: '👨🏿‍🤝‍👨🏾'
  }, {
    slug: 'family-man-woman-girl',
    character: '👨‍👩‍👧'
  }, {
    slug: 'family-man-woman-girl-boy',
    character: '👨‍👩‍👧‍👦'
  }, {
    slug: 'family-man-woman-boy-boy',
    character: '👨‍👩‍👦‍👦'
  }, {
    slug: 'family-man-woman-girl-girl',
    character: '👨‍👩‍👧‍👧'
  }, {
    slug: 'family-man-man-boy',
    character: '👨‍👨‍👦'
  }, {
    slug: 'family-man-man-girl',
    character: '👨‍👨‍👧'
  }, {
    slug: 'family-man-man-girl-boy',
    character: '👨‍👨‍👧‍👦'
  }, {
    slug: 'family-man-man-boy-boy',
    character: '👨‍👨‍👦‍👦'
  }, {
    slug: 'family-man-man-girl-girl',
    character: '👨‍👨‍👧‍👧'
  }, {
    slug: 'family-man-boy-boy',
    character: '👨‍👦‍👦'
  }, {
    slug: 'family-man-girl',
    character: '👨‍👧'
  }, {
    slug: 'family-man-girl-boy',
    character: '👨‍👧‍👦'
  }, {
    slug: 'family-man-girl-girl',
    character: '👨‍👧‍👧'
  }, {
    slug: 'e1-0-man-light-skin-tone',
    character: '👨🏻'
  }, {
    slug: 'e1-0-man-medium-light-skin-tone',
    character: '👨🏼'
  }, {
    slug: 'e1-0-man-medium-skin-tone',
    character: '👨🏽'
  }, {
    slug: 'e1-0-man-medium-dark-skin-tone',
    character: '👨🏾'
  }, {
    slug: 'e1-0-man-dark-skin-tone',
    character: '👨🏿'
  }, {
    slug: 'e11-0-man-light-skin-tone-red-hair',
    character: '👨🏻‍🦰'
  }, {
    slug: 'e11-0-man-medium-light-skin-tone-red-hair',
    character: '👨🏼‍🦰'
  }, {
    slug: 'e11-0-man-medium-skin-tone-red-hair',
    character: '👨🏽‍🦰'
  }, {
    slug: 'e11-0-man-medium-dark-skin-tone-red-hair',
    character: '👨🏾‍🦰'
  }, {
    slug: 'e11-0-man-dark-skin-tone-red-hair',
    character: '👨🏿‍🦰'
  }, {
    slug: 'e11-0-man-curly-hair',
    character: '👨‍🦱'
  }, {
    slug: 'e11-0-man-light-skin-tone-curly-hair',
    character: '👨🏻‍🦱'
  }, {
    slug: 'e11-0-man-medium-light-skin-tone-curly-hair',
    character: '👨🏼‍🦱'
  }, {
    slug: 'e11-0-man-medium-skin-tone-curly-hair',
    character: '👨🏽‍🦱'
  }, {
    slug: 'e11-0-man-medium-dark-skin-tone-curly-hair',
    character: '👨🏾‍🦱'
  }, {
    slug: 'e11-0-man-dark-skin-tone-curly-hair',
    character: '👨🏿‍🦱'
  }, {
    slug: 'e11-0-man-white-hair',
    character: '👨‍🦳'
  }, {
    slug: 'e11-0-man-light-skin-tone-white-hair',
    character: '👨🏻‍🦳'
  }, {
    slug: 'e11-0-man-medium-light-skin-tone-white-hair',
    character: '👨🏼‍🦳'
  }, {
    slug: 'e11-0-man-medium-skin-tone-white-hair',
    character: '👨🏽‍🦳'
  }, {
    slug: 'e11-0-man-medium-dark-skin-tone-white-hair',
    character: '👨🏾‍🦳'
  }, {
    slug: 'e11-0-man-dark-skin-tone-white-hair',
    character: '👨🏿‍🦳'
  }, {
    slug: 'e11-0-man-bald',
    character: '👨‍🦲'
  }, {
    slug: 'e11-0-man-light-skin-tone-bald',
    character: '👨🏻‍🦲'
  }, {
    slug: 'e11-0-man-medium-light-skin-tone-bald',
    character: '👨🏼‍🦲'
  }, {
    slug: 'e11-0-man-medium-skin-tone-bald',
    character: '👨🏽‍🦲'
  }, {
    slug: 'e11-0-man-medium-dark-skin-tone-bald',
    character: '👨🏾‍🦲'
  }, {
    slug: 'e11-0-man-dark-skin-tone-bald',
    character: '👨🏿‍🦲'
  }, {
    slug: 'e4-0-man-health-worker-light-skin-tone',
    character: '👨🏻‍⚕️'
  }, {
    slug: 'e4-0-man-health-worker-medium-light-skin-tone',
    character: '👨🏼‍⚕️'
  }, {
    slug: 'e4-0-man-health-worker-medium-skin-tone',
    character: '👨🏽‍⚕️'
  }, {
    slug: 'e4-0-man-health-worker-medium-dark-skin-tone',
    character: '👨🏾‍⚕️'
  }, {
    slug: 'e4-0-man-health-worker-dark-skin-tone',
    character: '👨🏿‍⚕️'
  }, {
    slug: 'e4-0-man-student-light-skin-tone',
    character: '👨🏻‍🎓'
  }, {
    slug: 'e4-0-man-student-medium-light-skin-tone',
    character: '👨🏼‍🎓'
  }, {
    slug: 'e4-0-man-student-medium-skin-tone',
    character: '👨🏽‍🎓'
  }, {
    slug: 'e4-0-man-student-medium-dark-skin-tone',
    character: '👨🏾‍🎓'
  }, {
    slug: 'e4-0-man-student-dark-skin-tone',
    character: '👨🏿‍🎓'
  }, {
    slug: 'e4-0-man-teacher-light-skin-tone',
    character: '👨🏻‍🏫'
  }, {
    slug: 'e4-0-man-teacher-medium-light-skin-tone',
    character: '👨🏼‍🏫'
  }, {
    slug: 'e4-0-man-teacher-medium-skin-tone',
    character: '👨🏽‍🏫'
  }, {
    slug: 'e4-0-man-teacher-medium-dark-skin-tone',
    character: '👨🏾‍🏫'
  }, {
    slug: 'e4-0-man-teacher-dark-skin-tone',
    character: '👨🏿‍🏫'
  }, {
    slug: 'e4-0-man-judge-light-skin-tone',
    character: '👨🏻‍⚖️'
  }, {
    slug: 'e4-0-man-judge-medium-light-skin-tone',
    character: '👨🏼‍⚖️'
  }, {
    slug: 'e4-0-man-judge-medium-skin-tone',
    character: '👨🏽‍⚖️'
  }, {
    slug: 'e4-0-man-judge-medium-dark-skin-tone',
    character: '👨🏾‍⚖️'
  }, {
    slug: 'e4-0-man-judge-dark-skin-tone',
    character: '👨🏿‍⚖️'
  }, {
    slug: 'e4-0-man-farmer-light-skin-tone',
    character: '👨🏻‍🌾'
  }, {
    slug: 'e4-0-man-farmer-medium-light-skin-tone',
    character: '👨🏼‍🌾'
  }, {
    slug: 'e4-0-man-farmer-medium-skin-tone',
    character: '👨🏽‍🌾'
  }, {
    slug: 'e4-0-man-farmer-medium-dark-skin-tone',
    character: '👨🏾‍🌾'
  }, {
    slug: 'e4-0-man-farmer-dark-skin-tone',
    character: '👨🏿‍🌾'
  }, {
    slug: 'e4-0-man-cook-light-skin-tone',
    character: '👨🏻‍🍳'
  }, {
    slug: 'e4-0-man-cook-medium-light-skin-tone',
    character: '👨🏼‍🍳'
  }, {
    slug: 'e4-0-man-cook-medium-skin-tone',
    character: '👨🏽‍🍳'
  }, {
    slug: 'e4-0-man-cook-medium-dark-skin-tone',
    character: '👨🏾‍🍳'
  }, {
    slug: 'e4-0-man-cook-dark-skin-tone',
    character: '👨🏿‍🍳'
  }, {
    slug: 'e4-0-man-mechanic-light-skin-tone',
    character: '👨🏻‍🔧'
  }, {
    slug: 'e4-0-man-mechanic-medium-light-skin-tone',
    character: '👨🏼‍🔧'
  }, {
    slug: 'e4-0-man-mechanic-medium-skin-tone',
    character: '👨🏽‍🔧'
  }, {
    slug: 'e4-0-man-mechanic-medium-dark-skin-tone',
    character: '👨🏾‍🔧'
  }, {
    slug: 'e4-0-man-mechanic-dark-skin-tone',
    character: '👨🏿‍🔧'
  }, {
    slug: 'e4-0-man-factory-worker-light-skin-tone',
    character: '👨🏻‍🏭'
  }, {
    slug: 'e4-0-man-factory-worker-medium-light-skin-tone',
    character: '👨🏼‍🏭'
  }, {
    slug: 'e4-0-man-factory-worker-medium-skin-tone',
    character: '👨🏽‍🏭'
  }, {
    slug: 'e4-0-man-factory-worker-medium-dark-skin-tone',
    character: '👨🏾‍🏭'
  }, {
    slug: 'e4-0-man-factory-worker-dark-skin-tone',
    character: '👨🏿‍🏭'
  }, {
    slug: 'e4-0-man-office-worker-light-skin-tone',
    character: '👨🏻‍💼'
  }, {
    slug: 'e4-0-man-office-worker-medium-light-skin-tone',
    character: '👨🏼‍💼'
  }, {
    slug: 'e4-0-man-office-worker-medium-skin-tone',
    character: '👨🏽‍💼'
  }, {
    slug: 'e4-0-man-office-worker-medium-dark-skin-tone',
    character: '👨🏾‍💼'
  }, {
    slug: 'e4-0-man-office-worker-dark-skin-tone',
    character: '👨🏿‍💼'
  }, {
    slug: 'e4-0-man-scientist-light-skin-tone',
    character: '👨🏻‍🔬'
  }, {
    slug: 'e4-0-man-scientist-medium-light-skin-tone',
    character: '👨🏼‍🔬'
  }, {
    slug: 'e4-0-man-scientist-medium-skin-tone',
    character: '👨🏽‍🔬'
  }, {
    slug: 'e4-0-man-scientist-medium-dark-skin-tone',
    character: '👨🏾‍🔬'
  }, {
    slug: 'e4-0-man-scientist-dark-skin-tone',
    character: '👨🏿‍🔬'
  }, {
    slug: 'e4-0-man-technologist-light-skin-tone',
    character: '👨🏻‍💻'
  }, {
    slug: 'e4-0-man-technologist-medium-light-skin-tone',
    character: '👨🏼‍💻'
  }, {
    slug: 'e4-0-man-technologist-medium-skin-tone',
    character: '👨🏽‍💻'
  }, {
    slug: 'e4-0-man-technologist-medium-dark-skin-tone',
    character: '👨🏾‍💻'
  }, {
    slug: 'e4-0-man-technologist-dark-skin-tone',
    character: '👨🏿‍💻'
  }, {
    slug: 'e4-0-man-singer-light-skin-tone',
    character: '👨🏻‍🎤'
  }, {
    slug: 'e4-0-man-singer-medium-light-skin-tone',
    character: '👨🏼‍🎤'
  }, {
    slug: 'e4-0-man-singer-medium-skin-tone',
    character: '👨🏽‍🎤'
  }, {
    slug: 'e4-0-man-singer-medium-dark-skin-tone',
    character: '👨🏾‍🎤'
  }, {
    slug: 'e4-0-man-singer-dark-skin-tone',
    character: '👨🏿‍🎤'
  }, {
    slug: 'e4-0-man-artist-light-skin-tone',
    character: '👨🏻‍🎨'
  }, {
    slug: 'e4-0-man-artist-medium-light-skin-tone',
    character: '👨🏼‍🎨'
  }, {
    slug: 'e4-0-man-artist-medium-skin-tone',
    character: '👨🏽‍🎨'
  }, {
    slug: 'e4-0-man-artist-medium-dark-skin-tone',
    character: '👨🏾‍🎨'
  }, {
    slug: 'e4-0-man-artist-dark-skin-tone',
    character: '👨🏿‍🎨'
  }, {
    slug: 'e4-0-man-pilot-light-skin-tone',
    character: '👨🏻‍✈️'
  }, {
    slug: 'e4-0-man-pilot-medium-light-skin-tone',
    character: '👨🏼‍✈️'
  }, {
    slug: 'e4-0-man-pilot-medium-skin-tone',
    character: '👨🏽‍✈️'
  }, {
    slug: 'e4-0-man-pilot-medium-dark-skin-tone',
    character: '👨🏾‍✈️'
  }, {
    slug: 'e4-0-man-pilot-dark-skin-tone',
    character: '👨🏿‍✈️'
  }, {
    slug: 'e4-0-man-astronaut-light-skin-tone',
    character: '👨🏻‍🚀'
  }, {
    slug: 'e4-0-man-astronaut-medium-light-skin-tone',
    character: '👨🏼‍🚀'
  }, {
    slug: 'e4-0-man-astronaut-medium-skin-tone',
    character: '👨🏽‍🚀'
  }, {
    slug: 'e4-0-man-astronaut-medium-dark-skin-tone',
    character: '👨🏾‍🚀'
  }, {
    slug: 'e4-0-man-astronaut-dark-skin-tone',
    character: '👨🏿‍🚀'
  }, {
    slug: 'e4-0-man-firefighter-light-skin-tone',
    character: '👨🏻‍🚒'
  }, {
    slug: 'e4-0-man-firefighter-medium-light-skin-tone',
    character: '👨🏼‍🚒'
  }, {
    slug: 'e4-0-man-firefighter-medium-skin-tone',
    character: '👨🏽‍🚒'
  }, {
    slug: 'e4-0-man-firefighter-medium-dark-skin-tone',
    character: '👨🏾‍🚒'
  }, {
    slug: 'e4-0-man-firefighter-dark-skin-tone',
    character: '👨🏿‍🚒'
  }, {
    slug: 'e13-0-man-feeding-baby-light-skin-tone',
    character: '👨🏻‍🍼'
  }, {
    slug: 'e13-0-man-feeding-baby-medium-light-skin-tone',
    character: '👨🏼‍🍼'
  }, {
    slug: 'e13-0-man-feeding-baby-medium-skin-tone',
    character: '👨🏽‍🍼'
  }, {
    slug: 'e13-0-man-feeding-baby-medium-dark-skin-tone',
    character: '👨🏾‍🍼'
  }, {
    slug: 'e13-0-man-feeding-baby-dark-skin-tone',
    character: '👨🏿‍🍼'
  }, {
    slug: 'e12-0-man-with-white-cane-light-skin-tone',
    character: '👨🏻‍🦯'
  }, {
    slug: 'e12-0-man-with-white-cane-medium-light-skin-tone',
    character: '👨🏼‍🦯'
  }, {
    slug: 'e12-0-man-with-white-cane-medium-skin-tone',
    character: '👨🏽‍🦯'
  }, {
    slug: 'e12-0-man-with-white-cane-medium-dark-skin-tone',
    character: '👨🏾‍🦯'
  }, {
    slug: 'e12-0-man-with-white-cane-dark-skin-tone',
    character: '👨🏿‍🦯'
  }, {
    slug: 'e12-0-man-in-motorized-wheelchair-light-skin-tone',
    character: '👨🏻‍🦼'
  }, {
    slug: 'e12-0-man-in-motorized-wheelchair-medium-light-skin-tone',
    character: '👨🏼‍🦼'
  }, {
    slug: 'e12-0-man-in-motorized-wheelchair-medium-skin-tone',
    character: '👨🏽‍🦼'
  }, {
    slug: 'e12-0-man-in-motorized-wheelchair-medium-dark-skin-tone',
    character: '👨🏾‍🦼'
  }, {
    slug: 'e12-0-man-in-motorized-wheelchair-dark-skin-tone',
    character: '👨🏿‍🦼'
  }, {
    slug: 'e12-0-man-in-manual-wheelchair-light-skin-tone',
    character: '👨🏻‍🦽'
  }, {
    slug: 'e12-0-man-in-manual-wheelchair-medium-light-skin-tone',
    character: '👨🏼‍🦽'
  }, {
    slug: 'e12-0-man-in-manual-wheelchair-medium-skin-tone',
    character: '👨🏽‍🦽'
  }, {
    slug: 'e12-0-man-in-manual-wheelchair-medium-dark-skin-tone',
    character: '👨🏾‍🦽'
  }, {
    slug: 'e12-0-man-in-manual-wheelchair-dark-skin-tone',
    character: '👨🏿‍🦽'
  }, {
    slug: 'e12-1-men-holding-hands-light-skin-tone-medium-skin-tone',
    character: '👨🏻‍🤝‍👨🏽'
  }, {
    slug: 'e12-1-men-holding-hands-light-skin-tone-medium-dark-skin-tone',
    character: '👨🏻‍🤝‍👨🏾'
  }, {
    slug: 'e12-1-men-holding-hands-light-skin-tone-dark-skin-tone',
    character: '👨🏻‍🤝‍👨🏿'
  }, {
    slug: 'e12-0-men-holding-hands-medium-light-skin-tone-light-skin-tone',
    character: '👨🏼‍🤝‍👨🏻'
  }, {
    slug: 'e12-1-men-holding-hands-medium-light-skin-tone-medium-dark-skin-tone',
    character: '👨🏼‍🤝‍👨🏾'
  }, {
    slug: 'e12-1-men-holding-hands-medium-light-skin-tone-dark-skin-tone',
    character: '👨🏼‍🤝‍👨🏿'
  }, {
    slug: 'e12-0-men-holding-hands-medium-skin-tone-light-skin-tone',
    character: '👨🏽‍🤝‍👨🏻'
  }, {
    slug: 'e12-0-men-holding-hands-medium-skin-tone-medium-light-skin-tone',
    character: '👨🏽‍🤝‍👨🏼'
  }, {
    slug: 'e12-1-men-holding-hands-medium-skin-tone-dark-skin-tone',
    character: '👨🏽‍🤝‍👨🏿'
  }, {
    slug: 'e12-0-men-holding-hands-medium-dark-skin-tone-light-skin-tone',
    character: '👨🏾‍🤝‍👨🏻'
  }, {
    slug: 'e12-0-men-holding-hands-medium-dark-skin-tone-medium-light-skin-tone',
    character: '👨🏾‍🤝‍👨🏼'
  }, {
    slug: 'e12-0-men-holding-hands-medium-dark-skin-tone-medium-skin-tone',
    character: '👨🏾‍🤝‍👨🏽'
  }, {
    slug: 'e12-0-men-holding-hands-dark-skin-tone-light-skin-tone',
    character: '👨🏿‍🤝‍👨🏻'
  }, {
    slug: 'e12-0-men-holding-hands-dark-skin-tone-medium-light-skin-tone',
    character: '👨🏿‍🤝‍👨🏼'
  }, {
    slug: 'e12-0-men-holding-hands-dark-skin-tone-medium-skin-tone',
    character: '👨🏿‍🤝‍👨🏽'
  }, {
    slug: 'e12-0-men-holding-hands-dark-skin-tone-medium-dark-skin-tone',
    character: '👨🏿‍🤝‍👨🏾'
  }, {
    slug: 'e2-0-family-man-woman-girl',
    character: '👨‍👩‍👧'
  }, {
    slug: 'e2-0-family-man-woman-girl-boy',
    character: '👨‍👩‍👧‍👦'
  }, {
    slug: 'e2-0-family-man-woman-boy-boy',
    character: '👨‍👩‍👦‍👦'
  }, {
    slug: 'e2-0-family-man-woman-girl-girl',
    character: '👨‍👩‍👧‍👧'
  }, {
    slug: 'e2-0-family-man-man-boy',
    character: '👨‍👨‍👦'
  }, {
    slug: 'e2-0-family-man-man-girl',
    character: '👨‍👨‍👧'
  }, {
    slug: 'e2-0-family-man-man-girl-boy',
    character: '👨‍👨‍👧‍👦'
  }, {
    slug: 'e2-0-family-man-man-boy-boy',
    character: '👨‍👨‍👦‍👦'
  }, {
    slug: 'e2-0-family-man-man-girl-girl',
    character: '👨‍👨‍👧‍👧'
  }, {
    slug: 'e4-0-family-man-boy-boy',
    character: '👨‍👦‍👦'
  }, {
    slug: 'e4-0-family-man-girl',
    character: '👨‍👧'
  }, {
    slug: 'e4-0-family-man-girl-boy',
    character: '👨‍👧‍👦'
  }, {
    slug: 'e4-0-family-man-girl-girl',
    character: '👨‍👧‍👧'
  }]
}, {
  slug: 'man-beard',
  character: '🧔',
  unicodeName: 'man: beard',
  codePoint: '1F9D4',
  group: 'people-body',
  subGroup: 'person',
  variants: [{
    slug: 'man-light-skin-tone-beard',
    character: '🧔🏻'
  }, {
    slug: 'man-medium-light-skin-tone-beard',
    character: '🧔🏼'
  }, {
    slug: 'man-medium-skin-tone-beard',
    character: '🧔🏽'
  }, {
    slug: 'man-medium-dark-skin-tone-beard',
    character: '🧔🏾'
  }, {
    slug: 'man-dark-skin-tone-beard',
    character: '🧔🏿'
  }, {
    slug: 'e5-0-man-light-skin-tone-beard',
    character: '🧔🏻'
  }, {
    slug: 'e5-0-man-medium-light-skin-tone-beard',
    character: '🧔🏼'
  }, {
    slug: 'e5-0-man-medium-skin-tone-beard',
    character: '🧔🏽'
  }, {
    slug: 'e5-0-man-medium-dark-skin-tone-beard',
    character: '🧔🏾'
  }, {
    slug: 'e5-0-man-dark-skin-tone-beard',
    character: '🧔🏿'
  }]
}, {
  slug: 'man-red-hair',
  character: '👨‍🦰',
  unicodeName: 'man: red hair',
  codePoint: '1F468 200D 1F9B0',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'woman',
  character: '👩',
  unicodeName: 'woman',
  codePoint: '1F469',
  group: 'people-body',
  subGroup: 'person',
  variants: [{
    slug: 'woman-light-skin-tone',
    character: '👩🏻'
  }, {
    slug: 'woman-medium-light-skin-tone',
    character: '👩🏼'
  }, {
    slug: 'woman-medium-skin-tone',
    character: '👩🏽'
  }, {
    slug: 'woman-medium-dark-skin-tone',
    character: '👩🏾'
  }, {
    slug: 'woman-dark-skin-tone',
    character: '👩🏿'
  }, {
    slug: 'woman-red-hair',
    character: '👩‍🦰'
  }, {
    slug: 'woman-light-skin-tone-red-hair',
    character: '👩🏻‍🦰'
  }, {
    slug: 'woman-medium-light-skin-tone-red-hair',
    character: '👩🏼‍🦰'
  }, {
    slug: 'woman-medium-skin-tone-red-hair',
    character: '👩🏽‍🦰'
  }, {
    slug: 'woman-medium-dark-skin-tone-red-hair',
    character: '👩🏾‍🦰'
  }, {
    slug: 'woman-dark-skin-tone-red-hair',
    character: '👩🏿‍🦰'
  }, {
    slug: 'woman-light-skin-tone-curly-hair',
    character: '👩🏻‍🦱'
  }, {
    slug: 'woman-medium-light-skin-tone-curly-hair',
    character: '👩🏼‍🦱'
  }, {
    slug: 'woman-medium-skin-tone-curly-hair',
    character: '👩🏽‍🦱'
  }, {
    slug: 'woman-medium-dark-skin-tone-curly-hair',
    character: '👩🏾‍🦱'
  }, {
    slug: 'woman-dark-skin-tone-curly-hair',
    character: '👩🏿‍🦱'
  }, {
    slug: 'woman-light-skin-tone-white-hair',
    character: '👩🏻‍🦳'
  }, {
    slug: 'woman-medium-light-skin-tone-white-hair',
    character: '👩🏼‍🦳'
  }, {
    slug: 'woman-medium-skin-tone-white-hair',
    character: '👩🏽‍🦳'
  }, {
    slug: 'woman-medium-dark-skin-tone-white-hair',
    character: '👩🏾‍🦳'
  }, {
    slug: 'woman-dark-skin-tone-white-hair',
    character: '👩🏿‍🦳'
  }, {
    slug: 'woman-light-skin-tone-bald',
    character: '👩🏻‍🦲'
  }, {
    slug: 'woman-medium-light-skin-tone-bald',
    character: '👩🏼‍🦲'
  }, {
    slug: 'woman-medium-skin-tone-bald',
    character: '👩🏽‍🦲'
  }, {
    slug: 'woman-medium-dark-skin-tone-bald',
    character: '👩🏾‍🦲'
  }, {
    slug: 'woman-dark-skin-tone-bald',
    character: '👩🏿‍🦲'
  }, {
    slug: 'woman-health-worker-light-skin-tone',
    character: '👩🏻‍⚕️'
  }, {
    slug: 'woman-health-worker-medium-light-skin-tone',
    character: '👩🏼‍⚕️'
  }, {
    slug: 'woman-health-worker-medium-skin-tone',
    character: '👩🏽‍⚕️'
  }, {
    slug: 'woman-health-worker-medium-dark-skin-tone',
    character: '👩🏾‍⚕️'
  }, {
    slug: 'woman-health-worker-dark-skin-tone',
    character: '👩🏿‍⚕️'
  }, {
    slug: 'woman-student-light-skin-tone',
    character: '👩🏻‍🎓'
  }, {
    slug: 'woman-student-medium-light-skin-tone',
    character: '👩🏼‍🎓'
  }, {
    slug: 'woman-student-medium-skin-tone',
    character: '👩🏽‍🎓'
  }, {
    slug: 'woman-student-medium-dark-skin-tone',
    character: '👩🏾‍🎓'
  }, {
    slug: 'woman-student-dark-skin-tone',
    character: '👩🏿‍🎓'
  }, {
    slug: 'woman-teacher-light-skin-tone',
    character: '👩🏻‍🏫'
  }, {
    slug: 'woman-teacher-medium-light-skin-tone',
    character: '👩🏼‍🏫'
  }, {
    slug: 'woman-teacher-medium-skin-tone',
    character: '👩🏽‍🏫'
  }, {
    slug: 'woman-teacher-medium-dark-skin-tone',
    character: '👩🏾‍🏫'
  }, {
    slug: 'woman-teacher-dark-skin-tone',
    character: '👩🏿‍🏫'
  }, {
    slug: 'woman-judge-light-skin-tone',
    character: '👩🏻‍⚖️'
  }, {
    slug: 'woman-judge-medium-light-skin-tone',
    character: '👩🏼‍⚖️'
  }, {
    slug: 'woman-judge-medium-skin-tone',
    character: '👩🏽‍⚖️'
  }, {
    slug: 'woman-judge-medium-dark-skin-tone',
    character: '👩🏾‍⚖️'
  }, {
    slug: 'woman-judge-dark-skin-tone',
    character: '👩🏿‍⚖️'
  }, {
    slug: 'woman-farmer-light-skin-tone',
    character: '👩🏻‍🌾'
  }, {
    slug: 'woman-farmer-medium-light-skin-tone',
    character: '👩🏼‍🌾'
  }, {
    slug: 'woman-farmer-medium-skin-tone',
    character: '👩🏽‍🌾'
  }, {
    slug: 'woman-farmer-medium-dark-skin-tone',
    character: '👩🏾‍🌾'
  }, {
    slug: 'woman-farmer-dark-skin-tone',
    character: '👩🏿‍🌾'
  }, {
    slug: 'woman-cook-light-skin-tone',
    character: '👩🏻‍🍳'
  }, {
    slug: 'woman-cook-medium-light-skin-tone',
    character: '👩🏼‍🍳'
  }, {
    slug: 'woman-cook-medium-skin-tone',
    character: '👩🏽‍🍳'
  }, {
    slug: 'woman-cook-medium-dark-skin-tone',
    character: '👩🏾‍🍳'
  }, {
    slug: 'woman-cook-dark-skin-tone',
    character: '👩🏿‍🍳'
  }, {
    slug: 'woman-mechanic-light-skin-tone',
    character: '👩🏻‍🔧'
  }, {
    slug: 'woman-mechanic-medium-light-skin-tone',
    character: '👩🏼‍🔧'
  }, {
    slug: 'woman-mechanic-medium-skin-tone',
    character: '👩🏽‍🔧'
  }, {
    slug: 'woman-mechanic-medium-dark-skin-tone',
    character: '👩🏾‍🔧'
  }, {
    slug: 'woman-mechanic-dark-skin-tone',
    character: '👩🏿‍🔧'
  }, {
    slug: 'woman-factory-worker-light-skin-tone',
    character: '👩🏻‍🏭'
  }, {
    slug: 'woman-factory-worker-medium-light-skin-tone',
    character: '👩🏼‍🏭'
  }, {
    slug: 'woman-factory-worker-medium-skin-tone',
    character: '👩🏽‍🏭'
  }, {
    slug: 'woman-factory-worker-medium-dark-skin-tone',
    character: '👩🏾‍🏭'
  }, {
    slug: 'woman-factory-worker-dark-skin-tone',
    character: '👩🏿‍🏭'
  }, {
    slug: 'woman-office-worker-light-skin-tone',
    character: '👩🏻‍💼'
  }, {
    slug: 'woman-office-worker-medium-light-skin-tone',
    character: '👩🏼‍💼'
  }, {
    slug: 'woman-office-worker-medium-skin-tone',
    character: '👩🏽‍💼'
  }, {
    slug: 'woman-office-worker-medium-dark-skin-tone',
    character: '👩🏾‍💼'
  }, {
    slug: 'woman-office-worker-dark-skin-tone',
    character: '👩🏿‍💼'
  }, {
    slug: 'woman-scientist-light-skin-tone',
    character: '👩🏻‍🔬'
  }, {
    slug: 'woman-scientist-medium-light-skin-tone',
    character: '👩🏼‍🔬'
  }, {
    slug: 'woman-scientist-medium-skin-tone',
    character: '👩🏽‍🔬'
  }, {
    slug: 'woman-scientist-medium-dark-skin-tone',
    character: '👩🏾‍🔬'
  }, {
    slug: 'woman-scientist-dark-skin-tone',
    character: '👩🏿‍🔬'
  }, {
    slug: 'woman-technologist-light-skin-tone',
    character: '👩🏻‍💻'
  }, {
    slug: 'woman-technologist-medium-light-skin-tone',
    character: '👩🏼‍💻'
  }, {
    slug: 'woman-technologist-medium-skin-tone',
    character: '👩🏽‍💻'
  }, {
    slug: 'woman-technologist-medium-dark-skin-tone',
    character: '👩🏾‍💻'
  }, {
    slug: 'woman-technologist-dark-skin-tone',
    character: '👩🏿‍💻'
  }, {
    slug: 'woman-singer-light-skin-tone',
    character: '👩🏻‍🎤'
  }, {
    slug: 'woman-singer-medium-light-skin-tone',
    character: '👩🏼‍🎤'
  }, {
    slug: 'woman-singer-medium-skin-tone',
    character: '👩🏽‍🎤'
  }, {
    slug: 'woman-singer-medium-dark-skin-tone',
    character: '👩🏾‍🎤'
  }, {
    slug: 'woman-singer-dark-skin-tone',
    character: '👩🏿‍🎤'
  }, {
    slug: 'woman-artist-light-skin-tone',
    character: '👩🏻‍🎨'
  }, {
    slug: 'woman-artist-medium-light-skin-tone',
    character: '👩🏼‍🎨'
  }, {
    slug: 'woman-artist-medium-skin-tone',
    character: '👩🏽‍🎨'
  }, {
    slug: 'woman-artist-medium-dark-skin-tone',
    character: '👩🏾‍🎨'
  }, {
    slug: 'woman-artist-dark-skin-tone',
    character: '👩🏿‍🎨'
  }, {
    slug: 'woman-pilot-light-skin-tone',
    character: '👩🏻‍✈️'
  }, {
    slug: 'woman-pilot-medium-light-skin-tone',
    character: '👩🏼‍✈️'
  }, {
    slug: 'woman-pilot-medium-skin-tone',
    character: '👩🏽‍✈️'
  }, {
    slug: 'woman-pilot-medium-dark-skin-tone',
    character: '👩🏾‍✈️'
  }, {
    slug: 'woman-pilot-dark-skin-tone',
    character: '👩🏿‍✈️'
  }, {
    slug: 'woman-astronaut-light-skin-tone',
    character: '👩🏻‍🚀'
  }, {
    slug: 'woman-astronaut-medium-light-skin-tone',
    character: '👩🏼‍🚀'
  }, {
    slug: 'woman-astronaut-medium-skin-tone',
    character: '👩🏽‍🚀'
  }, {
    slug: 'woman-astronaut-medium-dark-skin-tone',
    character: '👩🏾‍🚀'
  }, {
    slug: 'woman-astronaut-dark-skin-tone',
    character: '👩🏿‍🚀'
  }, {
    slug: 'woman-firefighter-light-skin-tone',
    character: '👩🏻‍🚒'
  }, {
    slug: 'woman-firefighter-medium-light-skin-tone',
    character: '👩🏼‍🚒'
  }, {
    slug: 'woman-firefighter-medium-skin-tone',
    character: '👩🏽‍🚒'
  }, {
    slug: 'woman-firefighter-medium-dark-skin-tone',
    character: '👩🏾‍🚒'
  }, {
    slug: 'woman-firefighter-dark-skin-tone',
    character: '👩🏿‍🚒'
  }, {
    slug: 'woman-feeding-baby-light-skin-tone',
    character: '👩🏻‍🍼'
  }, {
    slug: 'woman-feeding-baby-medium-light-skin-tone',
    character: '👩🏼‍🍼'
  }, {
    slug: 'woman-feeding-baby-medium-skin-tone',
    character: '👩🏽‍🍼'
  }, {
    slug: 'woman-feeding-baby-medium-dark-skin-tone',
    character: '👩🏾‍🍼'
  }, {
    slug: 'woman-feeding-baby-dark-skin-tone',
    character: '👩🏿‍🍼'
  }, {
    slug: 'woman-with-white-cane-light-skin-tone',
    character: '👩🏻‍🦯'
  }, {
    slug: 'woman-with-white-cane-medium-light-skin-tone',
    character: '👩🏼‍🦯'
  }, {
    slug: 'woman-with-white-cane-medium-skin-tone',
    character: '👩🏽‍🦯'
  }, {
    slug: 'woman-with-white-cane-medium-dark-skin-tone',
    character: '👩🏾‍🦯'
  }, {
    slug: 'woman-with-white-cane-dark-skin-tone',
    character: '👩🏿‍🦯'
  }, {
    slug: 'woman-in-motorized-wheelchair-light-skin-tone',
    character: '👩🏻‍🦼'
  }, {
    slug: 'woman-in-motorized-wheelchair-medium-light-skin-tone',
    character: '👩🏼‍🦼'
  }, {
    slug: 'woman-in-motorized-wheelchair-medium-skin-tone',
    character: '👩🏽‍🦼'
  }, {
    slug: 'woman-in-motorized-wheelchair-medium-dark-skin-tone',
    character: '👩🏾‍🦼'
  }, {
    slug: 'woman-in-motorized-wheelchair-dark-skin-tone',
    character: '👩🏿‍🦼'
  }, {
    slug: 'woman-in-manual-wheelchair-light-skin-tone',
    character: '👩🏻‍🦽'
  }, {
    slug: 'woman-in-manual-wheelchair-medium-light-skin-tone',
    character: '👩🏼‍🦽'
  }, {
    slug: 'woman-in-manual-wheelchair-medium-skin-tone',
    character: '👩🏽‍🦽'
  }, {
    slug: 'woman-in-manual-wheelchair-medium-dark-skin-tone',
    character: '👩🏾‍🦽'
  }, {
    slug: 'woman-in-manual-wheelchair-dark-skin-tone',
    character: '👩🏿‍🦽'
  }, {
    slug: 'women-holding-hands-light-skin-tone-medium-skin-tone',
    character: '👩🏻‍🤝‍👩🏽'
  }, {
    slug: 'women-holding-hands-light-skin-tone-medium-dark-skin-tone',
    character: '👩🏻‍🤝‍👩🏾'
  }, {
    slug: 'women-holding-hands-light-skin-tone-dark-skin-tone',
    character: '👩🏻‍🤝‍👩🏿'
  }, {
    slug: 'women-holding-hands-medium-light-skin-tone-light-skin-tone',
    character: '👩🏼‍🤝‍👩🏻'
  }, {
    slug: 'women-holding-hands-medium-light-skin-tone-medium-dark-skin-tone',
    character: '👩🏼‍🤝‍👩🏾'
  }, {
    slug: 'women-holding-hands-medium-light-skin-tone-dark-skin-tone',
    character: '👩🏼‍🤝‍👩🏿'
  }, {
    slug: 'women-holding-hands-medium-skin-tone-light-skin-tone',
    character: '👩🏽‍🤝‍👩🏻'
  }, {
    slug: 'women-holding-hands-medium-skin-tone-medium-light-skin-tone',
    character: '👩🏽‍🤝‍👩🏼'
  }, {
    slug: 'women-holding-hands-medium-skin-tone-dark-skin-tone',
    character: '👩🏽‍🤝‍👩🏿'
  }, {
    slug: 'women-holding-hands-medium-dark-skin-tone-light-skin-tone',
    character: '👩🏾‍🤝‍👩🏻'
  }, {
    slug: 'women-holding-hands-medium-dark-skin-tone-medium-light-skin-tone',
    character: '👩🏾‍🤝‍👩🏼'
  }, {
    slug: 'women-holding-hands-medium-dark-skin-tone-medium-skin-tone',
    character: '👩🏾‍🤝‍👩🏽'
  }, {
    slug: 'women-holding-hands-dark-skin-tone-light-skin-tone',
    character: '👩🏿‍🤝‍👩🏻'
  }, {
    slug: 'women-holding-hands-dark-skin-tone-medium-light-skin-tone',
    character: '👩🏿‍🤝‍👩🏼'
  }, {
    slug: 'women-holding-hands-dark-skin-tone-medium-skin-tone',
    character: '👩🏿‍🤝‍👩🏽'
  }, {
    slug: 'women-holding-hands-dark-skin-tone-medium-dark-skin-tone',
    character: '👩🏿‍🤝‍👩🏾'
  }, {
    slug: 'woman-and-man-holding-hands-light-skin-tone-medium-skin-tone',
    character: '👩🏻‍🤝‍👨🏽'
  }, {
    slug: 'woman-and-man-holding-hands-light-skin-tone-medium-dark-skin-tone',
    character: '👩🏻‍🤝‍👨🏾'
  }, {
    slug: 'woman-and-man-holding-hands-light-skin-tone-dark-skin-tone',
    character: '👩🏻‍🤝‍👨🏿'
  }, {
    slug: 'woman-and-man-holding-hands-medium-light-skin-tone-light-skin-tone',
    character: '👩🏼‍🤝‍👨🏻'
  }, {
    slug: 'woman-and-man-holding-hands-medium-light-skin-tone-medium-dark-skin-tone',
    character: '👩🏼‍🤝‍👨🏾'
  }, {
    slug: 'woman-and-man-holding-hands-medium-light-skin-tone-dark-skin-tone',
    character: '👩🏼‍🤝‍👨🏿'
  }, {
    slug: 'woman-and-man-holding-hands-medium-skin-tone-light-skin-tone',
    character: '👩🏽‍🤝‍👨🏻'
  }, {
    slug: 'woman-and-man-holding-hands-medium-skin-tone-medium-light-skin-tone',
    character: '👩🏽‍🤝‍👨🏼'
  }, {
    slug: 'woman-and-man-holding-hands-medium-skin-tone-dark-skin-tone',
    character: '👩🏽‍🤝‍👨🏿'
  }, {
    slug: 'woman-and-man-holding-hands-medium-dark-skin-tone-light-skin-tone',
    character: '👩🏾‍🤝‍👨🏻'
  }, {
    slug: 'woman-and-man-holding-hands-medium-dark-skin-tone-medium-light-skin-tone',
    character: '👩🏾‍🤝‍👨🏼'
  }, {
    slug: 'woman-and-man-holding-hands-medium-dark-skin-tone-medium-skin-tone',
    character: '👩🏾‍🤝‍👨🏽'
  }, {
    slug: 'woman-and-man-holding-hands-dark-skin-tone-light-skin-tone',
    character: '👩🏿‍🤝‍👨🏻'
  }, {
    slug: 'woman-and-man-holding-hands-dark-skin-tone-medium-light-skin-tone',
    character: '👩🏿‍🤝‍👨🏼'
  }, {
    slug: 'woman-and-man-holding-hands-dark-skin-tone-medium-skin-tone',
    character: '👩🏿‍🤝‍👨🏽'
  }, {
    slug: 'woman-and-man-holding-hands-dark-skin-tone-medium-dark-skin-tone',
    character: '👩🏿‍🤝‍👨🏾'
  }, {
    slug: 'family-woman-woman-girl',
    character: '👩‍👩‍👧'
  }, {
    slug: 'family-woman-woman-girl-boy',
    character: '👩‍👩‍👧‍👦'
  }, {
    slug: 'family-woman-woman-boy-boy',
    character: '👩‍👩‍👦‍👦'
  }, {
    slug: 'family-woman-woman-girl-girl',
    character: '👩‍👩‍👧‍👧'
  }, {
    slug: 'family-woman-boy-boy',
    character: '👩‍👦‍👦'
  }, {
    slug: 'family-woman-girl',
    character: '👩‍👧'
  }, {
    slug: 'family-woman-girl-boy',
    character: '👩‍👧‍👦'
  }, {
    slug: 'family-woman-girl-girl',
    character: '👩‍👧‍👧'
  }, {
    slug: 'e1-0-woman-light-skin-tone',
    character: '👩🏻'
  }, {
    slug: 'e1-0-woman-medium-light-skin-tone',
    character: '👩🏼'
  }, {
    slug: 'e1-0-woman-medium-skin-tone',
    character: '👩🏽'
  }, {
    slug: 'e1-0-woman-medium-dark-skin-tone',
    character: '👩🏾'
  }, {
    slug: 'e1-0-woman-dark-skin-tone',
    character: '👩🏿'
  }, {
    slug: 'e11-0-woman-red-hair',
    character: '👩‍🦰'
  }, {
    slug: 'e11-0-woman-light-skin-tone-red-hair',
    character: '👩🏻‍🦰'
  }, {
    slug: 'e11-0-woman-medium-light-skin-tone-red-hair',
    character: '👩🏼‍🦰'
  }, {
    slug: 'e11-0-woman-medium-skin-tone-red-hair',
    character: '👩🏽‍🦰'
  }, {
    slug: 'e11-0-woman-medium-dark-skin-tone-red-hair',
    character: '👩🏾‍🦰'
  }, {
    slug: 'e11-0-woman-dark-skin-tone-red-hair',
    character: '👩🏿‍🦰'
  }, {
    slug: 'e11-0-woman-light-skin-tone-curly-hair',
    character: '👩🏻‍🦱'
  }, {
    slug: 'e11-0-woman-medium-light-skin-tone-curly-hair',
    character: '👩🏼‍🦱'
  }, {
    slug: 'e11-0-woman-medium-skin-tone-curly-hair',
    character: '👩🏽‍🦱'
  }, {
    slug: 'e11-0-woman-medium-dark-skin-tone-curly-hair',
    character: '👩🏾‍🦱'
  }, {
    slug: 'e11-0-woman-dark-skin-tone-curly-hair',
    character: '👩🏿‍🦱'
  }, {
    slug: 'e11-0-woman-light-skin-tone-white-hair',
    character: '👩🏻‍🦳'
  }, {
    slug: 'e11-0-woman-medium-light-skin-tone-white-hair',
    character: '👩🏼‍🦳'
  }, {
    slug: 'e11-0-woman-medium-skin-tone-white-hair',
    character: '👩🏽‍🦳'
  }, {
    slug: 'e11-0-woman-medium-dark-skin-tone-white-hair',
    character: '👩🏾‍🦳'
  }, {
    slug: 'e11-0-woman-dark-skin-tone-white-hair',
    character: '👩🏿‍🦳'
  }, {
    slug: 'e11-0-woman-light-skin-tone-bald',
    character: '👩🏻‍🦲'
  }, {
    slug: 'e11-0-woman-medium-light-skin-tone-bald',
    character: '👩🏼‍🦲'
  }, {
    slug: 'e11-0-woman-medium-skin-tone-bald',
    character: '👩🏽‍🦲'
  }, {
    slug: 'e11-0-woman-medium-dark-skin-tone-bald',
    character: '👩🏾‍🦲'
  }, {
    slug: 'e11-0-woman-dark-skin-tone-bald',
    character: '👩🏿‍🦲'
  }, {
    slug: 'e4-0-woman-health-worker-light-skin-tone',
    character: '👩🏻‍⚕️'
  }, {
    slug: 'e4-0-woman-health-worker-medium-light-skin-tone',
    character: '👩🏼‍⚕️'
  }, {
    slug: 'e4-0-woman-health-worker-medium-skin-tone',
    character: '👩🏽‍⚕️'
  }, {
    slug: 'e4-0-woman-health-worker-medium-dark-skin-tone',
    character: '👩🏾‍⚕️'
  }, {
    slug: 'e4-0-woman-health-worker-dark-skin-tone',
    character: '👩🏿‍⚕️'
  }, {
    slug: 'e4-0-woman-student-light-skin-tone',
    character: '👩🏻‍🎓'
  }, {
    slug: 'e4-0-woman-student-medium-light-skin-tone',
    character: '👩🏼‍🎓'
  }, {
    slug: 'e4-0-woman-student-medium-skin-tone',
    character: '👩🏽‍🎓'
  }, {
    slug: 'e4-0-woman-student-medium-dark-skin-tone',
    character: '👩🏾‍🎓'
  }, {
    slug: 'e4-0-woman-student-dark-skin-tone',
    character: '👩🏿‍🎓'
  }, {
    slug: 'e4-0-woman-teacher-light-skin-tone',
    character: '👩🏻‍🏫'
  }, {
    slug: 'e4-0-woman-teacher-medium-light-skin-tone',
    character: '👩🏼‍🏫'
  }, {
    slug: 'e4-0-woman-teacher-medium-skin-tone',
    character: '👩🏽‍🏫'
  }, {
    slug: 'e4-0-woman-teacher-medium-dark-skin-tone',
    character: '👩🏾‍🏫'
  }, {
    slug: 'e4-0-woman-teacher-dark-skin-tone',
    character: '👩🏿‍🏫'
  }, {
    slug: 'e4-0-woman-judge-light-skin-tone',
    character: '👩🏻‍⚖️'
  }, {
    slug: 'e4-0-woman-judge-medium-light-skin-tone',
    character: '👩🏼‍⚖️'
  }, {
    slug: 'e4-0-woman-judge-medium-skin-tone',
    character: '👩🏽‍⚖️'
  }, {
    slug: 'e4-0-woman-judge-medium-dark-skin-tone',
    character: '👩🏾‍⚖️'
  }, {
    slug: 'e4-0-woman-judge-dark-skin-tone',
    character: '👩🏿‍⚖️'
  }, {
    slug: 'e4-0-woman-farmer-light-skin-tone',
    character: '👩🏻‍🌾'
  }, {
    slug: 'e4-0-woman-farmer-medium-light-skin-tone',
    character: '👩🏼‍🌾'
  }, {
    slug: 'e4-0-woman-farmer-medium-skin-tone',
    character: '👩🏽‍🌾'
  }, {
    slug: 'e4-0-woman-farmer-medium-dark-skin-tone',
    character: '👩🏾‍🌾'
  }, {
    slug: 'e4-0-woman-farmer-dark-skin-tone',
    character: '👩🏿‍🌾'
  }, {
    slug: 'e4-0-woman-cook-light-skin-tone',
    character: '👩🏻‍🍳'
  }, {
    slug: 'e4-0-woman-cook-medium-light-skin-tone',
    character: '👩🏼‍🍳'
  }, {
    slug: 'e4-0-woman-cook-medium-skin-tone',
    character: '👩🏽‍🍳'
  }, {
    slug: 'e4-0-woman-cook-medium-dark-skin-tone',
    character: '👩🏾‍🍳'
  }, {
    slug: 'e4-0-woman-cook-dark-skin-tone',
    character: '👩🏿‍🍳'
  }, {
    slug: 'e4-0-woman-mechanic-light-skin-tone',
    character: '👩🏻‍🔧'
  }, {
    slug: 'e4-0-woman-mechanic-medium-light-skin-tone',
    character: '👩🏼‍🔧'
  }, {
    slug: 'e4-0-woman-mechanic-medium-skin-tone',
    character: '👩🏽‍🔧'
  }, {
    slug: 'e4-0-woman-mechanic-medium-dark-skin-tone',
    character: '👩🏾‍🔧'
  }, {
    slug: 'e4-0-woman-mechanic-dark-skin-tone',
    character: '👩🏿‍🔧'
  }, {
    slug: 'e4-0-woman-factory-worker-light-skin-tone',
    character: '👩🏻‍🏭'
  }, {
    slug: 'e4-0-woman-factory-worker-medium-light-skin-tone',
    character: '👩🏼‍🏭'
  }, {
    slug: 'e4-0-woman-factory-worker-medium-skin-tone',
    character: '👩🏽‍🏭'
  }, {
    slug: 'e4-0-woman-factory-worker-medium-dark-skin-tone',
    character: '👩🏾‍🏭'
  }, {
    slug: 'e4-0-woman-factory-worker-dark-skin-tone',
    character: '👩🏿‍🏭'
  }, {
    slug: 'e4-0-woman-office-worker-light-skin-tone',
    character: '👩🏻‍💼'
  }, {
    slug: 'e4-0-woman-office-worker-medium-light-skin-tone',
    character: '👩🏼‍💼'
  }, {
    slug: 'e4-0-woman-office-worker-medium-skin-tone',
    character: '👩🏽‍💼'
  }, {
    slug: 'e4-0-woman-office-worker-medium-dark-skin-tone',
    character: '👩🏾‍💼'
  }, {
    slug: 'e4-0-woman-office-worker-dark-skin-tone',
    character: '👩🏿‍💼'
  }, {
    slug: 'e4-0-woman-scientist-light-skin-tone',
    character: '👩🏻‍🔬'
  }, {
    slug: 'e4-0-woman-scientist-medium-light-skin-tone',
    character: '👩🏼‍🔬'
  }, {
    slug: 'e4-0-woman-scientist-medium-skin-tone',
    character: '👩🏽‍🔬'
  }, {
    slug: 'e4-0-woman-scientist-medium-dark-skin-tone',
    character: '👩🏾‍🔬'
  }, {
    slug: 'e4-0-woman-scientist-dark-skin-tone',
    character: '👩🏿‍🔬'
  }, {
    slug: 'e4-0-woman-technologist-light-skin-tone',
    character: '👩🏻‍💻'
  }, {
    slug: 'e4-0-woman-technologist-medium-light-skin-tone',
    character: '👩🏼‍💻'
  }, {
    slug: 'e4-0-woman-technologist-medium-skin-tone',
    character: '👩🏽‍💻'
  }, {
    slug: 'e4-0-woman-technologist-medium-dark-skin-tone',
    character: '👩🏾‍💻'
  }, {
    slug: 'e4-0-woman-technologist-dark-skin-tone',
    character: '👩🏿‍💻'
  }, {
    slug: 'e4-0-woman-singer-light-skin-tone',
    character: '👩🏻‍🎤'
  }, {
    slug: 'e4-0-woman-singer-medium-light-skin-tone',
    character: '👩🏼‍🎤'
  }, {
    slug: 'e4-0-woman-singer-medium-skin-tone',
    character: '👩🏽‍🎤'
  }, {
    slug: 'e4-0-woman-singer-medium-dark-skin-tone',
    character: '👩🏾‍🎤'
  }, {
    slug: 'e4-0-woman-singer-dark-skin-tone',
    character: '👩🏿‍🎤'
  }, {
    slug: 'e4-0-woman-artist-light-skin-tone',
    character: '👩🏻‍🎨'
  }, {
    slug: 'e4-0-woman-artist-medium-light-skin-tone',
    character: '👩🏼‍🎨'
  }, {
    slug: 'e4-0-woman-artist-medium-skin-tone',
    character: '👩🏽‍🎨'
  }, {
    slug: 'e4-0-woman-artist-medium-dark-skin-tone',
    character: '👩🏾‍🎨'
  }, {
    slug: 'e4-0-woman-artist-dark-skin-tone',
    character: '👩🏿‍🎨'
  }, {
    slug: 'e4-0-woman-pilot-light-skin-tone',
    character: '👩🏻‍✈️'
  }, {
    slug: 'e4-0-woman-pilot-medium-light-skin-tone',
    character: '👩🏼‍✈️'
  }, {
    slug: 'e4-0-woman-pilot-medium-skin-tone',
    character: '👩🏽‍✈️'
  }, {
    slug: 'e4-0-woman-pilot-medium-dark-skin-tone',
    character: '👩🏾‍✈️'
  }, {
    slug: 'e4-0-woman-pilot-dark-skin-tone',
    character: '👩🏿‍✈️'
  }, {
    slug: 'e4-0-woman-astronaut-light-skin-tone',
    character: '👩🏻‍🚀'
  }, {
    slug: 'e4-0-woman-astronaut-medium-light-skin-tone',
    character: '👩🏼‍🚀'
  }, {
    slug: 'e4-0-woman-astronaut-medium-skin-tone',
    character: '👩🏽‍🚀'
  }, {
    slug: 'e4-0-woman-astronaut-medium-dark-skin-tone',
    character: '👩🏾‍🚀'
  }, {
    slug: 'e4-0-woman-astronaut-dark-skin-tone',
    character: '👩🏿‍🚀'
  }, {
    slug: 'e4-0-woman-firefighter-light-skin-tone',
    character: '👩🏻‍🚒'
  }, {
    slug: 'e4-0-woman-firefighter-medium-light-skin-tone',
    character: '👩🏼‍🚒'
  }, {
    slug: 'e4-0-woman-firefighter-medium-skin-tone',
    character: '👩🏽‍🚒'
  }, {
    slug: 'e4-0-woman-firefighter-medium-dark-skin-tone',
    character: '👩🏾‍🚒'
  }, {
    slug: 'e4-0-woman-firefighter-dark-skin-tone',
    character: '👩🏿‍🚒'
  }, {
    slug: 'e13-0-woman-feeding-baby-light-skin-tone',
    character: '👩🏻‍🍼'
  }, {
    slug: 'e13-0-woman-feeding-baby-medium-light-skin-tone',
    character: '👩🏼‍🍼'
  }, {
    slug: 'e13-0-woman-feeding-baby-medium-skin-tone',
    character: '👩🏽‍🍼'
  }, {
    slug: 'e13-0-woman-feeding-baby-medium-dark-skin-tone',
    character: '👩🏾‍🍼'
  }, {
    slug: 'e13-0-woman-feeding-baby-dark-skin-tone',
    character: '👩🏿‍🍼'
  }, {
    slug: 'e12-0-woman-with-white-cane-light-skin-tone',
    character: '👩🏻‍🦯'
  }, {
    slug: 'e12-0-woman-with-white-cane-medium-light-skin-tone',
    character: '👩🏼‍🦯'
  }, {
    slug: 'e12-0-woman-with-white-cane-medium-skin-tone',
    character: '👩🏽‍🦯'
  }, {
    slug: 'e12-0-woman-with-white-cane-medium-dark-skin-tone',
    character: '👩🏾‍🦯'
  }, {
    slug: 'e12-0-woman-with-white-cane-dark-skin-tone',
    character: '👩🏿‍🦯'
  }, {
    slug: 'e12-0-woman-in-motorized-wheelchair-light-skin-tone',
    character: '👩🏻‍🦼'
  }, {
    slug: 'e12-0-woman-in-motorized-wheelchair-medium-light-skin-tone',
    character: '👩🏼‍🦼'
  }, {
    slug: 'e12-0-woman-in-motorized-wheelchair-medium-skin-tone',
    character: '👩🏽‍🦼'
  }, {
    slug: 'e12-0-woman-in-motorized-wheelchair-medium-dark-skin-tone',
    character: '👩🏾‍🦼'
  }, {
    slug: 'e12-0-woman-in-motorized-wheelchair-dark-skin-tone',
    character: '👩🏿‍🦼'
  }, {
    slug: 'e12-0-woman-in-manual-wheelchair-light-skin-tone',
    character: '👩🏻‍🦽'
  }, {
    slug: 'e12-0-woman-in-manual-wheelchair-medium-light-skin-tone',
    character: '👩🏼‍🦽'
  }, {
    slug: 'e12-0-woman-in-manual-wheelchair-medium-skin-tone',
    character: '👩🏽‍🦽'
  }, {
    slug: 'e12-0-woman-in-manual-wheelchair-medium-dark-skin-tone',
    character: '👩🏾‍🦽'
  }, {
    slug: 'e12-0-woman-in-manual-wheelchair-dark-skin-tone',
    character: '👩🏿‍🦽'
  }, {
    slug: 'e12-1-women-holding-hands-light-skin-tone-medium-skin-tone',
    character: '👩🏻‍🤝‍👩🏽'
  }, {
    slug: 'e12-1-women-holding-hands-light-skin-tone-medium-dark-skin-tone',
    character: '👩🏻‍🤝‍👩🏾'
  }, {
    slug: 'e12-1-women-holding-hands-light-skin-tone-dark-skin-tone',
    character: '👩🏻‍🤝‍👩🏿'
  }, {
    slug: 'e12-0-women-holding-hands-medium-light-skin-tone-light-skin-tone',
    character: '👩🏼‍🤝‍👩🏻'
  }, {
    slug: 'e12-1-women-holding-hands-medium-light-skin-tone-medium-dark-skin-tone',
    character: '👩🏼‍🤝‍👩🏾'
  }, {
    slug: 'e12-1-women-holding-hands-medium-light-skin-tone-dark-skin-tone',
    character: '👩🏼‍🤝‍👩🏿'
  }, {
    slug: 'e12-0-women-holding-hands-medium-skin-tone-light-skin-tone',
    character: '👩🏽‍🤝‍👩🏻'
  }, {
    slug: 'e12-0-women-holding-hands-medium-skin-tone-medium-light-skin-tone',
    character: '👩🏽‍🤝‍👩🏼'
  }, {
    slug: 'e12-1-women-holding-hands-medium-skin-tone-dark-skin-tone',
    character: '👩🏽‍🤝‍👩🏿'
  }, {
    slug: 'e12-0-women-holding-hands-medium-dark-skin-tone-light-skin-tone',
    character: '👩🏾‍🤝‍👩🏻'
  }, {
    slug: 'e12-0-women-holding-hands-medium-dark-skin-tone-medium-light-skin-tone',
    character: '👩🏾‍🤝‍👩🏼'
  }, {
    slug: 'e12-0-women-holding-hands-medium-dark-skin-tone-medium-skin-tone',
    character: '👩🏾‍🤝‍👩🏽'
  }, {
    slug: 'e12-0-women-holding-hands-dark-skin-tone-light-skin-tone',
    character: '👩🏿‍🤝‍👩🏻'
  }, {
    slug: 'e12-0-women-holding-hands-dark-skin-tone-medium-light-skin-tone',
    character: '👩🏿‍🤝‍👩🏼'
  }, {
    slug: 'e12-0-women-holding-hands-dark-skin-tone-medium-skin-tone',
    character: '👩🏿‍🤝‍👩🏽'
  }, {
    slug: 'e12-0-women-holding-hands-dark-skin-tone-medium-dark-skin-tone',
    character: '👩🏿‍🤝‍👩🏾'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-light-skin-tone-medium-skin-tone',
    character: '👩🏻‍🤝‍👨🏽'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-light-skin-tone-medium-dark-skin-tone',
    character: '👩🏻‍🤝‍👨🏾'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-light-skin-tone-dark-skin-tone',
    character: '👩🏻‍🤝‍👨🏿'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-medium-light-skin-tone-light-skin-tone',
    character: '👩🏼‍🤝‍👨🏻'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-medium-light-skin-tone-medium-dark-skin-tone',
    character: '👩🏼‍🤝‍👨🏾'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-medium-light-skin-tone-dark-skin-tone',
    character: '👩🏼‍🤝‍👨🏿'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-medium-skin-tone-light-skin-tone',
    character: '👩🏽‍🤝‍👨🏻'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-medium-skin-tone-medium-light-skin-tone',
    character: '👩🏽‍🤝‍👨🏼'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-medium-skin-tone-dark-skin-tone',
    character: '👩🏽‍🤝‍👨🏿'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-medium-dark-skin-tone-light-skin-tone',
    character: '👩🏾‍🤝‍👨🏻'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-medium-dark-skin-tone-medium-light-skin-tone',
    character: '👩🏾‍🤝‍👨🏼'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-medium-dark-skin-tone-medium-skin-tone',
    character: '👩🏾‍🤝‍👨🏽'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-dark-skin-tone-light-skin-tone',
    character: '👩🏿‍🤝‍👨🏻'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-dark-skin-tone-medium-light-skin-tone',
    character: '👩🏿‍🤝‍👨🏼'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-dark-skin-tone-medium-skin-tone',
    character: '👩🏿‍🤝‍👨🏽'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-dark-skin-tone-medium-dark-skin-tone',
    character: '👩🏿‍🤝‍👨🏾'
  }, {
    slug: 'e2-0-family-woman-woman-girl',
    character: '👩‍👩‍👧'
  }, {
    slug: 'e2-0-family-woman-woman-girl-boy',
    character: '👩‍👩‍👧‍👦'
  }, {
    slug: 'e2-0-family-woman-woman-boy-boy',
    character: '👩‍👩‍👦‍👦'
  }, {
    slug: 'e2-0-family-woman-woman-girl-girl',
    character: '👩‍👩‍👧‍👧'
  }, {
    slug: 'e4-0-family-woman-boy-boy',
    character: '👩‍👦‍👦'
  }, {
    slug: 'e4-0-family-woman-girl',
    character: '👩‍👧'
  }, {
    slug: 'e4-0-family-woman-girl-boy',
    character: '👩‍👧‍👦'
  }, {
    slug: 'e4-0-family-woman-girl-girl',
    character: '👩‍👧‍👧'
  }]
}, {
  slug: 'person-red-hair',
  character: '🧑‍🦰',
  unicodeName: 'person: red hair',
  codePoint: '1F9D1 200D 1F9B0',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'woman-curly-hair',
  character: '👩‍🦱',
  unicodeName: 'woman: curly hair',
  codePoint: '1F469 200D 1F9B1',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'person-curly-hair',
  character: '🧑‍🦱',
  unicodeName: 'person: curly hair',
  codePoint: '1F9D1 200D 1F9B1',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'woman-white-hair',
  character: '👩‍🦳',
  unicodeName: 'woman: white hair',
  codePoint: '1F469 200D 1F9B3',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'person-white-hair',
  character: '🧑‍🦳',
  unicodeName: 'person: white hair',
  codePoint: '1F9D1 200D 1F9B3',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'woman-bald',
  character: '👩‍🦲',
  unicodeName: 'woman: bald',
  codePoint: '1F469 200D 1F9B2',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'person-bald',
  character: '🧑‍🦲',
  unicodeName: 'person: bald',
  codePoint: '1F9D1 200D 1F9B2',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'woman-blond-hair',
  character: '👱‍♀️',
  unicodeName: 'woman: blond hair',
  codePoint: '1F471 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'older-person',
  character: '🧓',
  unicodeName: 'older person',
  codePoint: '1F9D3',
  group: 'people-body',
  subGroup: 'person',
  variants: [{
    slug: 'older-person-light-skin-tone',
    character: '🧓🏻'
  }, {
    slug: 'older-person-medium-light-skin-tone',
    character: '🧓🏼'
  }, {
    slug: 'older-person-medium-skin-tone',
    character: '🧓🏽'
  }, {
    slug: 'older-person-medium-dark-skin-tone',
    character: '🧓🏾'
  }, {
    slug: 'older-person-dark-skin-tone',
    character: '🧓🏿'
  }, {
    slug: 'e5-0-older-person-light-skin-tone',
    character: '🧓🏻'
  }, {
    slug: 'e5-0-older-person-medium-light-skin-tone',
    character: '🧓🏼'
  }, {
    slug: 'e5-0-older-person-medium-skin-tone',
    character: '🧓🏽'
  }, {
    slug: 'e5-0-older-person-medium-dark-skin-tone',
    character: '🧓🏾'
  }, {
    slug: 'e5-0-older-person-dark-skin-tone',
    character: '🧓🏿'
  }]
}, {
  slug: 'old-man',
  character: '👴',
  unicodeName: 'old man',
  codePoint: '1F474',
  group: 'people-body',
  subGroup: 'person',
  variants: [{
    slug: 'old-man-light-skin-tone',
    character: '👴🏻'
  }, {
    slug: 'old-man-medium-light-skin-tone',
    character: '👴🏼'
  }, {
    slug: 'old-man-medium-skin-tone',
    character: '👴🏽'
  }, {
    slug: 'old-man-medium-dark-skin-tone',
    character: '👴🏾'
  }, {
    slug: 'old-man-dark-skin-tone',
    character: '👴🏿'
  }, {
    slug: 'e1-0-old-man-light-skin-tone',
    character: '👴🏻'
  }, {
    slug: 'e1-0-old-man-medium-light-skin-tone',
    character: '👴🏼'
  }, {
    slug: 'e1-0-old-man-medium-skin-tone',
    character: '👴🏽'
  }, {
    slug: 'e1-0-old-man-medium-dark-skin-tone',
    character: '👴🏾'
  }, {
    slug: 'e1-0-old-man-dark-skin-tone',
    character: '👴🏿'
  }]
}, {
  slug: 'old-woman',
  character: '👵',
  unicodeName: 'old woman',
  codePoint: '1F475',
  group: 'people-body',
  subGroup: 'person',
  variants: [{
    slug: 'old-woman-light-skin-tone',
    character: '👵🏻'
  }, {
    slug: 'old-woman-medium-light-skin-tone',
    character: '👵🏼'
  }, {
    slug: 'old-woman-medium-skin-tone',
    character: '👵🏽'
  }, {
    slug: 'old-woman-medium-dark-skin-tone',
    character: '👵🏾'
  }, {
    slug: 'old-woman-dark-skin-tone',
    character: '👵🏿'
  }, {
    slug: 'e1-0-old-woman-light-skin-tone',
    character: '👵🏻'
  }, {
    slug: 'e1-0-old-woman-medium-light-skin-tone',
    character: '👵🏼'
  }, {
    slug: 'e1-0-old-woman-medium-skin-tone',
    character: '👵🏽'
  }, {
    slug: 'e1-0-old-woman-medium-dark-skin-tone',
    character: '👵🏾'
  }, {
    slug: 'e1-0-old-woman-dark-skin-tone',
    character: '👵🏿'
  }]
}, {
  slug: 'person-frowning',
  character: '🙍',
  unicodeName: 'person frowning',
  codePoint: '1F64D',
  group: 'people-body',
  subGroup: 'person-gesture',
  variants: [{
    slug: 'person-frowning-light-skin-tone',
    character: '🙍🏻'
  }, {
    slug: 'person-frowning-medium-light-skin-tone',
    character: '🙍🏼'
  }, {
    slug: 'person-frowning-medium-skin-tone',
    character: '🙍🏽'
  }, {
    slug: 'person-frowning-medium-dark-skin-tone',
    character: '🙍🏾'
  }, {
    slug: 'person-frowning-dark-skin-tone',
    character: '🙍🏿'
  }, {
    slug: 'man-frowning',
    character: '🙍‍♂️'
  }, {
    slug: 'man-frowning-light-skin-tone',
    character: '🙍🏻‍♂️'
  }, {
    slug: 'man-frowning-medium-light-skin-tone',
    character: '🙍🏼‍♂️'
  }, {
    slug: 'man-frowning-medium-skin-tone',
    character: '🙍🏽‍♂️'
  }, {
    slug: 'man-frowning-medium-dark-skin-tone',
    character: '🙍🏾‍♂️'
  }, {
    slug: 'man-frowning-dark-skin-tone',
    character: '🙍🏿‍♂️'
  }, {
    slug: 'woman-frowning',
    character: '🙍‍♀️'
  }, {
    slug: 'woman-frowning-light-skin-tone',
    character: '🙍🏻‍♀️'
  }, {
    slug: 'woman-frowning-medium-light-skin-tone',
    character: '🙍🏼‍♀️'
  }, {
    slug: 'woman-frowning-medium-skin-tone',
    character: '🙍🏽‍♀️'
  }, {
    slug: 'woman-frowning-medium-dark-skin-tone',
    character: '🙍🏾‍♀️'
  }, {
    slug: 'woman-frowning-dark-skin-tone',
    character: '🙍🏿‍♀️'
  }, {
    slug: 'e1-0-person-frowning-light-skin-tone',
    character: '🙍🏻'
  }, {
    slug: 'e1-0-person-frowning-medium-light-skin-tone',
    character: '🙍🏼'
  }, {
    slug: 'e1-0-person-frowning-medium-skin-tone',
    character: '🙍🏽'
  }, {
    slug: 'e1-0-person-frowning-medium-dark-skin-tone',
    character: '🙍🏾'
  }, {
    slug: 'e1-0-person-frowning-dark-skin-tone',
    character: '🙍🏿'
  }, {
    slug: 'e4-0-man-frowning',
    character: '🙍‍♂️'
  }, {
    slug: 'e4-0-man-frowning-light-skin-tone',
    character: '🙍🏻‍♂️'
  }, {
    slug: 'e4-0-man-frowning-medium-light-skin-tone',
    character: '🙍🏼‍♂️'
  }, {
    slug: 'e4-0-man-frowning-medium-skin-tone',
    character: '🙍🏽‍♂️'
  }, {
    slug: 'e4-0-man-frowning-medium-dark-skin-tone',
    character: '🙍🏾‍♂️'
  }, {
    slug: 'e4-0-man-frowning-dark-skin-tone',
    character: '🙍🏿‍♂️'
  }, {
    slug: 'e4-0-woman-frowning',
    character: '🙍‍♀️'
  }, {
    slug: 'e4-0-woman-frowning-light-skin-tone',
    character: '🙍🏻‍♀️'
  }, {
    slug: 'e4-0-woman-frowning-medium-light-skin-tone',
    character: '🙍🏼‍♀️'
  }, {
    slug: 'e4-0-woman-frowning-medium-skin-tone',
    character: '🙍🏽‍♀️'
  }, {
    slug: 'e4-0-woman-frowning-medium-dark-skin-tone',
    character: '🙍🏾‍♀️'
  }, {
    slug: 'e4-0-woman-frowning-dark-skin-tone',
    character: '🙍🏿‍♀️'
  }]
}, {
  slug: 'person-pouting',
  character: '🙎',
  unicodeName: 'person pouting',
  codePoint: '1F64E',
  group: 'people-body',
  subGroup: 'person-gesture',
  variants: [{
    slug: 'person-pouting-light-skin-tone',
    character: '🙎🏻'
  }, {
    slug: 'person-pouting-medium-light-skin-tone',
    character: '🙎🏼'
  }, {
    slug: 'person-pouting-medium-skin-tone',
    character: '🙎🏽'
  }, {
    slug: 'person-pouting-medium-dark-skin-tone',
    character: '🙎🏾'
  }, {
    slug: 'person-pouting-dark-skin-tone',
    character: '🙎🏿'
  }, {
    slug: 'man-pouting',
    character: '🙎‍♂️'
  }, {
    slug: 'man-pouting-light-skin-tone',
    character: '🙎🏻‍♂️'
  }, {
    slug: 'man-pouting-medium-light-skin-tone',
    character: '🙎🏼‍♂️'
  }, {
    slug: 'man-pouting-medium-skin-tone',
    character: '🙎🏽‍♂️'
  }, {
    slug: 'man-pouting-medium-dark-skin-tone',
    character: '🙎🏾‍♂️'
  }, {
    slug: 'man-pouting-dark-skin-tone',
    character: '🙎🏿‍♂️'
  }, {
    slug: 'woman-pouting',
    character: '🙎‍♀️'
  }, {
    slug: 'woman-pouting-light-skin-tone',
    character: '🙎🏻‍♀️'
  }, {
    slug: 'woman-pouting-medium-light-skin-tone',
    character: '🙎🏼‍♀️'
  }, {
    slug: 'woman-pouting-medium-skin-tone',
    character: '🙎🏽‍♀️'
  }, {
    slug: 'woman-pouting-medium-dark-skin-tone',
    character: '🙎🏾‍♀️'
  }, {
    slug: 'woman-pouting-dark-skin-tone',
    character: '🙎🏿‍♀️'
  }, {
    slug: 'e1-0-person-pouting-light-skin-tone',
    character: '🙎🏻'
  }, {
    slug: 'e1-0-person-pouting-medium-light-skin-tone',
    character: '🙎🏼'
  }, {
    slug: 'e1-0-person-pouting-medium-skin-tone',
    character: '🙎🏽'
  }, {
    slug: 'e1-0-person-pouting-medium-dark-skin-tone',
    character: '🙎🏾'
  }, {
    slug: 'e1-0-person-pouting-dark-skin-tone',
    character: '🙎🏿'
  }, {
    slug: 'e4-0-man-pouting',
    character: '🙎‍♂️'
  }, {
    slug: 'e4-0-man-pouting-light-skin-tone',
    character: '🙎🏻‍♂️'
  }, {
    slug: 'e4-0-man-pouting-medium-light-skin-tone',
    character: '🙎🏼‍♂️'
  }, {
    slug: 'e4-0-man-pouting-medium-skin-tone',
    character: '🙎🏽‍♂️'
  }, {
    slug: 'e4-0-man-pouting-medium-dark-skin-tone',
    character: '🙎🏾‍♂️'
  }, {
    slug: 'e4-0-man-pouting-dark-skin-tone',
    character: '🙎🏿‍♂️'
  }, {
    slug: 'e4-0-woman-pouting',
    character: '🙎‍♀️'
  }, {
    slug: 'e4-0-woman-pouting-light-skin-tone',
    character: '🙎🏻‍♀️'
  }, {
    slug: 'e4-0-woman-pouting-medium-light-skin-tone',
    character: '🙎🏼‍♀️'
  }, {
    slug: 'e4-0-woman-pouting-medium-skin-tone',
    character: '🙎🏽‍♀️'
  }, {
    slug: 'e4-0-woman-pouting-medium-dark-skin-tone',
    character: '🙎🏾‍♀️'
  }, {
    slug: 'e4-0-woman-pouting-dark-skin-tone',
    character: '🙎🏿‍♀️'
  }]
}, {
  slug: 'person-gesturing-no',
  character: '🙅',
  unicodeName: 'person gesturing NO',
  codePoint: '1F645',
  group: 'people-body',
  subGroup: 'person-gesture',
  variants: [{
    slug: 'person-gesturing-no-light-skin-tone',
    character: '🙅🏻'
  }, {
    slug: 'person-gesturing-no-medium-light-skin-tone',
    character: '🙅🏼'
  }, {
    slug: 'person-gesturing-no-medium-skin-tone',
    character: '🙅🏽'
  }, {
    slug: 'person-gesturing-no-medium-dark-skin-tone',
    character: '🙅🏾'
  }, {
    slug: 'person-gesturing-no-dark-skin-tone',
    character: '🙅🏿'
  }, {
    slug: 'man-gesturing-no',
    character: '🙅‍♂️'
  }, {
    slug: 'man-gesturing-no-light-skin-tone',
    character: '🙅🏻‍♂️'
  }, {
    slug: 'man-gesturing-no-medium-light-skin-tone',
    character: '🙅🏼‍♂️'
  }, {
    slug: 'man-gesturing-no-medium-skin-tone',
    character: '🙅🏽‍♂️'
  }, {
    slug: 'man-gesturing-no-medium-dark-skin-tone',
    character: '🙅🏾‍♂️'
  }, {
    slug: 'man-gesturing-no-dark-skin-tone',
    character: '🙅🏿‍♂️'
  }, {
    slug: 'woman-gesturing-no',
    character: '🙅‍♀️'
  }, {
    slug: 'woman-gesturing-no-light-skin-tone',
    character: '🙅🏻‍♀️'
  }, {
    slug: 'woman-gesturing-no-medium-light-skin-tone',
    character: '🙅🏼‍♀️'
  }, {
    slug: 'woman-gesturing-no-medium-skin-tone',
    character: '🙅🏽‍♀️'
  }, {
    slug: 'woman-gesturing-no-medium-dark-skin-tone',
    character: '🙅🏾‍♀️'
  }, {
    slug: 'woman-gesturing-no-dark-skin-tone',
    character: '🙅🏿‍♀️'
  }, {
    slug: 'e1-0-person-gesturing-no-light-skin-tone',
    character: '🙅🏻'
  }, {
    slug: 'e1-0-person-gesturing-no-medium-light-skin-tone',
    character: '🙅🏼'
  }, {
    slug: 'e1-0-person-gesturing-no-medium-skin-tone',
    character: '🙅🏽'
  }, {
    slug: 'e1-0-person-gesturing-no-medium-dark-skin-tone',
    character: '🙅🏾'
  }, {
    slug: 'e1-0-person-gesturing-no-dark-skin-tone',
    character: '🙅🏿'
  }, {
    slug: 'e4-0-man-gesturing-no',
    character: '🙅‍♂️'
  }, {
    slug: 'e4-0-man-gesturing-no-light-skin-tone',
    character: '🙅🏻‍♂️'
  }, {
    slug: 'e4-0-man-gesturing-no-medium-light-skin-tone',
    character: '🙅🏼‍♂️'
  }, {
    slug: 'e4-0-man-gesturing-no-medium-skin-tone',
    character: '🙅🏽‍♂️'
  }, {
    slug: 'e4-0-man-gesturing-no-medium-dark-skin-tone',
    character: '🙅🏾‍♂️'
  }, {
    slug: 'e4-0-man-gesturing-no-dark-skin-tone',
    character: '🙅🏿‍♂️'
  }, {
    slug: 'e4-0-woman-gesturing-no',
    character: '🙅‍♀️'
  }, {
    slug: 'e4-0-woman-gesturing-no-light-skin-tone',
    character: '🙅🏻‍♀️'
  }, {
    slug: 'e4-0-woman-gesturing-no-medium-light-skin-tone',
    character: '🙅🏼‍♀️'
  }, {
    slug: 'e4-0-woman-gesturing-no-medium-skin-tone',
    character: '🙅🏽‍♀️'
  }, {
    slug: 'e4-0-woman-gesturing-no-medium-dark-skin-tone',
    character: '🙅🏾‍♀️'
  }, {
    slug: 'e4-0-woman-gesturing-no-dark-skin-tone',
    character: '🙅🏿‍♀️'
  }]
}, {
  slug: 'person-gesturing-ok',
  character: '🙆',
  unicodeName: 'person gesturing OK',
  codePoint: '1F646',
  group: 'people-body',
  subGroup: 'person-gesture',
  variants: [{
    slug: 'person-gesturing-ok-light-skin-tone',
    character: '🙆🏻'
  }, {
    slug: 'person-gesturing-ok-medium-light-skin-tone',
    character: '🙆🏼'
  }, {
    slug: 'person-gesturing-ok-medium-skin-tone',
    character: '🙆🏽'
  }, {
    slug: 'person-gesturing-ok-medium-dark-skin-tone',
    character: '🙆🏾'
  }, {
    slug: 'person-gesturing-ok-dark-skin-tone',
    character: '🙆🏿'
  }, {
    slug: 'man-gesturing-ok',
    character: '🙆‍♂️'
  }, {
    slug: 'man-gesturing-ok-light-skin-tone',
    character: '🙆🏻‍♂️'
  }, {
    slug: 'man-gesturing-ok-medium-light-skin-tone',
    character: '🙆🏼‍♂️'
  }, {
    slug: 'man-gesturing-ok-medium-skin-tone',
    character: '🙆🏽‍♂️'
  }, {
    slug: 'man-gesturing-ok-medium-dark-skin-tone',
    character: '🙆🏾‍♂️'
  }, {
    slug: 'man-gesturing-ok-dark-skin-tone',
    character: '🙆🏿‍♂️'
  }, {
    slug: 'woman-gesturing-ok',
    character: '🙆‍♀️'
  }, {
    slug: 'woman-gesturing-ok-light-skin-tone',
    character: '🙆🏻‍♀️'
  }, {
    slug: 'woman-gesturing-ok-medium-light-skin-tone',
    character: '🙆🏼‍♀️'
  }, {
    slug: 'woman-gesturing-ok-medium-skin-tone',
    character: '🙆🏽‍♀️'
  }, {
    slug: 'woman-gesturing-ok-medium-dark-skin-tone',
    character: '🙆🏾‍♀️'
  }, {
    slug: 'woman-gesturing-ok-dark-skin-tone',
    character: '🙆🏿‍♀️'
  }, {
    slug: 'e1-0-person-gesturing-ok-light-skin-tone',
    character: '🙆🏻'
  }, {
    slug: 'e1-0-person-gesturing-ok-medium-light-skin-tone',
    character: '🙆🏼'
  }, {
    slug: 'e1-0-person-gesturing-ok-medium-skin-tone',
    character: '🙆🏽'
  }, {
    slug: 'e1-0-person-gesturing-ok-medium-dark-skin-tone',
    character: '🙆🏾'
  }, {
    slug: 'e1-0-person-gesturing-ok-dark-skin-tone',
    character: '🙆🏿'
  }, {
    slug: 'e4-0-man-gesturing-ok',
    character: '🙆‍♂️'
  }, {
    slug: 'e4-0-man-gesturing-ok-light-skin-tone',
    character: '🙆🏻‍♂️'
  }, {
    slug: 'e4-0-man-gesturing-ok-medium-light-skin-tone',
    character: '🙆🏼‍♂️'
  }, {
    slug: 'e4-0-man-gesturing-ok-medium-skin-tone',
    character: '🙆🏽‍♂️'
  }, {
    slug: 'e4-0-man-gesturing-ok-medium-dark-skin-tone',
    character: '🙆🏾‍♂️'
  }, {
    slug: 'e4-0-man-gesturing-ok-dark-skin-tone',
    character: '🙆🏿‍♂️'
  }, {
    slug: 'e4-0-woman-gesturing-ok',
    character: '🙆‍♀️'
  }, {
    slug: 'e4-0-woman-gesturing-ok-light-skin-tone',
    character: '🙆🏻‍♀️'
  }, {
    slug: 'e4-0-woman-gesturing-ok-medium-light-skin-tone',
    character: '🙆🏼‍♀️'
  }, {
    slug: 'e4-0-woman-gesturing-ok-medium-skin-tone',
    character: '🙆🏽‍♀️'
  }, {
    slug: 'e4-0-woman-gesturing-ok-medium-dark-skin-tone',
    character: '🙆🏾‍♀️'
  }, {
    slug: 'e4-0-woman-gesturing-ok-dark-skin-tone',
    character: '🙆🏿‍♀️'
  }]
}, {
  slug: 'person-tipping-hand',
  character: '💁',
  unicodeName: 'person tipping hand',
  codePoint: '1F481',
  group: 'people-body',
  subGroup: 'person-gesture',
  variants: [{
    slug: 'person-tipping-hand-light-skin-tone',
    character: '💁🏻'
  }, {
    slug: 'person-tipping-hand-medium-light-skin-tone',
    character: '💁🏼'
  }, {
    slug: 'person-tipping-hand-medium-skin-tone',
    character: '💁🏽'
  }, {
    slug: 'person-tipping-hand-medium-dark-skin-tone',
    character: '💁🏾'
  }, {
    slug: 'person-tipping-hand-dark-skin-tone',
    character: '💁🏿'
  }, {
    slug: 'man-tipping-hand',
    character: '💁‍♂️'
  }, {
    slug: 'man-tipping-hand-light-skin-tone',
    character: '💁🏻‍♂️'
  }, {
    slug: 'man-tipping-hand-medium-light-skin-tone',
    character: '💁🏼‍♂️'
  }, {
    slug: 'man-tipping-hand-medium-skin-tone',
    character: '💁🏽‍♂️'
  }, {
    slug: 'man-tipping-hand-medium-dark-skin-tone',
    character: '💁🏾‍♂️'
  }, {
    slug: 'man-tipping-hand-dark-skin-tone',
    character: '💁🏿‍♂️'
  }, {
    slug: 'woman-tipping-hand',
    character: '💁‍♀️'
  }, {
    slug: 'woman-tipping-hand-light-skin-tone',
    character: '💁🏻‍♀️'
  }, {
    slug: 'woman-tipping-hand-medium-light-skin-tone',
    character: '💁🏼‍♀️'
  }, {
    slug: 'woman-tipping-hand-medium-skin-tone',
    character: '💁🏽‍♀️'
  }, {
    slug: 'woman-tipping-hand-medium-dark-skin-tone',
    character: '💁🏾‍♀️'
  }, {
    slug: 'woman-tipping-hand-dark-skin-tone',
    character: '💁🏿‍♀️'
  }, {
    slug: 'e1-0-person-tipping-hand-light-skin-tone',
    character: '💁🏻'
  }, {
    slug: 'e1-0-person-tipping-hand-medium-light-skin-tone',
    character: '💁🏼'
  }, {
    slug: 'e1-0-person-tipping-hand-medium-skin-tone',
    character: '💁🏽'
  }, {
    slug: 'e1-0-person-tipping-hand-medium-dark-skin-tone',
    character: '💁🏾'
  }, {
    slug: 'e1-0-person-tipping-hand-dark-skin-tone',
    character: '💁🏿'
  }, {
    slug: 'e4-0-man-tipping-hand',
    character: '💁‍♂️'
  }, {
    slug: 'e4-0-man-tipping-hand-light-skin-tone',
    character: '💁🏻‍♂️'
  }, {
    slug: 'e4-0-man-tipping-hand-medium-light-skin-tone',
    character: '💁🏼‍♂️'
  }, {
    slug: 'e4-0-man-tipping-hand-medium-skin-tone',
    character: '💁🏽‍♂️'
  }, {
    slug: 'e4-0-man-tipping-hand-medium-dark-skin-tone',
    character: '💁🏾‍♂️'
  }, {
    slug: 'e4-0-man-tipping-hand-dark-skin-tone',
    character: '💁🏿‍♂️'
  }, {
    slug: 'e4-0-woman-tipping-hand',
    character: '💁‍♀️'
  }, {
    slug: 'e4-0-woman-tipping-hand-light-skin-tone',
    character: '💁🏻‍♀️'
  }, {
    slug: 'e4-0-woman-tipping-hand-medium-light-skin-tone',
    character: '💁🏼‍♀️'
  }, {
    slug: 'e4-0-woman-tipping-hand-medium-skin-tone',
    character: '💁🏽‍♀️'
  }, {
    slug: 'e4-0-woman-tipping-hand-medium-dark-skin-tone',
    character: '💁🏾‍♀️'
  }, {
    slug: 'e4-0-woman-tipping-hand-dark-skin-tone',
    character: '💁🏿‍♀️'
  }]
}, {
  slug: 'person-raising-hand',
  character: '🙋',
  unicodeName: 'person raising hand',
  codePoint: '1F64B',
  group: 'people-body',
  subGroup: 'person-gesture',
  variants: [{
    slug: 'person-raising-hand-light-skin-tone',
    character: '🙋🏻'
  }, {
    slug: 'person-raising-hand-medium-light-skin-tone',
    character: '🙋🏼'
  }, {
    slug: 'person-raising-hand-medium-skin-tone',
    character: '🙋🏽'
  }, {
    slug: 'person-raising-hand-medium-dark-skin-tone',
    character: '🙋🏾'
  }, {
    slug: 'person-raising-hand-dark-skin-tone',
    character: '🙋🏿'
  }, {
    slug: 'man-raising-hand',
    character: '🙋‍♂️'
  }, {
    slug: 'man-raising-hand-light-skin-tone',
    character: '🙋🏻‍♂️'
  }, {
    slug: 'man-raising-hand-medium-light-skin-tone',
    character: '🙋🏼‍♂️'
  }, {
    slug: 'man-raising-hand-medium-skin-tone',
    character: '🙋🏽‍♂️'
  }, {
    slug: 'man-raising-hand-medium-dark-skin-tone',
    character: '🙋🏾‍♂️'
  }, {
    slug: 'man-raising-hand-dark-skin-tone',
    character: '🙋🏿‍♂️'
  }, {
    slug: 'woman-raising-hand',
    character: '🙋‍♀️'
  }, {
    slug: 'woman-raising-hand-light-skin-tone',
    character: '🙋🏻‍♀️'
  }, {
    slug: 'woman-raising-hand-medium-light-skin-tone',
    character: '🙋🏼‍♀️'
  }, {
    slug: 'woman-raising-hand-medium-skin-tone',
    character: '🙋🏽‍♀️'
  }, {
    slug: 'woman-raising-hand-medium-dark-skin-tone',
    character: '🙋🏾‍♀️'
  }, {
    slug: 'woman-raising-hand-dark-skin-tone',
    character: '🙋🏿‍♀️'
  }, {
    slug: 'e1-0-person-raising-hand-light-skin-tone',
    character: '🙋🏻'
  }, {
    slug: 'e1-0-person-raising-hand-medium-light-skin-tone',
    character: '🙋🏼'
  }, {
    slug: 'e1-0-person-raising-hand-medium-skin-tone',
    character: '🙋🏽'
  }, {
    slug: 'e1-0-person-raising-hand-medium-dark-skin-tone',
    character: '🙋🏾'
  }, {
    slug: 'e1-0-person-raising-hand-dark-skin-tone',
    character: '🙋🏿'
  }, {
    slug: 'e4-0-man-raising-hand',
    character: '🙋‍♂️'
  }, {
    slug: 'e4-0-man-raising-hand-light-skin-tone',
    character: '🙋🏻‍♂️'
  }, {
    slug: 'e4-0-man-raising-hand-medium-light-skin-tone',
    character: '🙋🏼‍♂️'
  }, {
    slug: 'e4-0-man-raising-hand-medium-skin-tone',
    character: '🙋🏽‍♂️'
  }, {
    slug: 'e4-0-man-raising-hand-medium-dark-skin-tone',
    character: '🙋🏾‍♂️'
  }, {
    slug: 'e4-0-man-raising-hand-dark-skin-tone',
    character: '🙋🏿‍♂️'
  }, {
    slug: 'e4-0-woman-raising-hand',
    character: '🙋‍♀️'
  }, {
    slug: 'e4-0-woman-raising-hand-light-skin-tone',
    character: '🙋🏻‍♀️'
  }, {
    slug: 'e4-0-woman-raising-hand-medium-light-skin-tone',
    character: '🙋🏼‍♀️'
  }, {
    slug: 'e4-0-woman-raising-hand-medium-skin-tone',
    character: '🙋🏽‍♀️'
  }, {
    slug: 'e4-0-woman-raising-hand-medium-dark-skin-tone',
    character: '🙋🏾‍♀️'
  }, {
    slug: 'e4-0-woman-raising-hand-dark-skin-tone',
    character: '🙋🏿‍♀️'
  }]
}, {
  slug: 'deaf-person',
  character: '🧏',
  unicodeName: 'deaf person',
  codePoint: '1F9CF',
  group: 'people-body',
  subGroup: 'person-gesture',
  variants: [{
    slug: 'deaf-person-light-skin-tone',
    character: '🧏🏻'
  }, {
    slug: 'deaf-person-medium-light-skin-tone',
    character: '🧏🏼'
  }, {
    slug: 'deaf-person-medium-skin-tone',
    character: '🧏🏽'
  }, {
    slug: 'deaf-person-medium-dark-skin-tone',
    character: '🧏🏾'
  }, {
    slug: 'deaf-person-dark-skin-tone',
    character: '🧏🏿'
  }, {
    slug: 'deaf-man',
    character: '🧏‍♂️'
  }, {
    slug: 'deaf-man-light-skin-tone',
    character: '🧏🏻‍♂️'
  }, {
    slug: 'deaf-man-medium-light-skin-tone',
    character: '🧏🏼‍♂️'
  }, {
    slug: 'deaf-man-medium-skin-tone',
    character: '🧏🏽‍♂️'
  }, {
    slug: 'deaf-man-medium-dark-skin-tone',
    character: '🧏🏾‍♂️'
  }, {
    slug: 'deaf-man-dark-skin-tone',
    character: '🧏🏿‍♂️'
  }, {
    slug: 'deaf-woman',
    character: '🧏‍♀️'
  }, {
    slug: 'deaf-woman-light-skin-tone',
    character: '🧏🏻‍♀️'
  }, {
    slug: 'deaf-woman-medium-light-skin-tone',
    character: '🧏🏼‍♀️'
  }, {
    slug: 'deaf-woman-medium-skin-tone',
    character: '🧏🏽‍♀️'
  }, {
    slug: 'deaf-woman-medium-dark-skin-tone',
    character: '🧏🏾‍♀️'
  }, {
    slug: 'deaf-woman-dark-skin-tone',
    character: '🧏🏿‍♀️'
  }, {
    slug: 'e12-0-deaf-person-light-skin-tone',
    character: '🧏🏻'
  }, {
    slug: 'e12-0-deaf-person-medium-light-skin-tone',
    character: '🧏🏼'
  }, {
    slug: 'e12-0-deaf-person-medium-skin-tone',
    character: '🧏🏽'
  }, {
    slug: 'e12-0-deaf-person-medium-dark-skin-tone',
    character: '🧏🏾'
  }, {
    slug: 'e12-0-deaf-person-dark-skin-tone',
    character: '🧏🏿'
  }, {
    slug: 'e12-0-deaf-man',
    character: '🧏‍♂️'
  }, {
    slug: 'e12-0-deaf-man-light-skin-tone',
    character: '🧏🏻‍♂️'
  }, {
    slug: 'e12-0-deaf-man-medium-light-skin-tone',
    character: '🧏🏼‍♂️'
  }, {
    slug: 'e12-0-deaf-man-medium-skin-tone',
    character: '🧏🏽‍♂️'
  }, {
    slug: 'e12-0-deaf-man-medium-dark-skin-tone',
    character: '🧏🏾‍♂️'
  }, {
    slug: 'e12-0-deaf-man-dark-skin-tone',
    character: '🧏🏿‍♂️'
  }, {
    slug: 'e12-0-deaf-woman',
    character: '🧏‍♀️'
  }, {
    slug: 'e12-0-deaf-woman-light-skin-tone',
    character: '🧏🏻‍♀️'
  }, {
    slug: 'e12-0-deaf-woman-medium-light-skin-tone',
    character: '🧏🏼‍♀️'
  }, {
    slug: 'e12-0-deaf-woman-medium-skin-tone',
    character: '🧏🏽‍♀️'
  }, {
    slug: 'e12-0-deaf-woman-medium-dark-skin-tone',
    character: '🧏🏾‍♀️'
  }, {
    slug: 'e12-0-deaf-woman-dark-skin-tone',
    character: '🧏🏿‍♀️'
  }]
}, {
  slug: 'person-bowing',
  character: '🙇',
  unicodeName: 'person bowing',
  codePoint: '1F647',
  group: 'people-body',
  subGroup: 'person-gesture',
  variants: [{
    slug: 'person-bowing-light-skin-tone',
    character: '🙇🏻'
  }, {
    slug: 'person-bowing-medium-light-skin-tone',
    character: '🙇🏼'
  }, {
    slug: 'person-bowing-medium-skin-tone',
    character: '🙇🏽'
  }, {
    slug: 'person-bowing-medium-dark-skin-tone',
    character: '🙇🏾'
  }, {
    slug: 'person-bowing-dark-skin-tone',
    character: '🙇🏿'
  }, {
    slug: 'man-bowing',
    character: '🙇‍♂️'
  }, {
    slug: 'man-bowing-light-skin-tone',
    character: '🙇🏻‍♂️'
  }, {
    slug: 'man-bowing-medium-light-skin-tone',
    character: '🙇🏼‍♂️'
  }, {
    slug: 'man-bowing-medium-skin-tone',
    character: '🙇🏽‍♂️'
  }, {
    slug: 'man-bowing-medium-dark-skin-tone',
    character: '🙇🏾‍♂️'
  }, {
    slug: 'man-bowing-dark-skin-tone',
    character: '🙇🏿‍♂️'
  }, {
    slug: 'woman-bowing',
    character: '🙇‍♀️'
  }, {
    slug: 'woman-bowing-light-skin-tone',
    character: '🙇🏻‍♀️'
  }, {
    slug: 'woman-bowing-medium-light-skin-tone',
    character: '🙇🏼‍♀️'
  }, {
    slug: 'woman-bowing-medium-skin-tone',
    character: '🙇🏽‍♀️'
  }, {
    slug: 'woman-bowing-medium-dark-skin-tone',
    character: '🙇🏾‍♀️'
  }, {
    slug: 'woman-bowing-dark-skin-tone',
    character: '🙇🏿‍♀️'
  }, {
    slug: 'e1-0-person-bowing-light-skin-tone',
    character: '🙇🏻'
  }, {
    slug: 'e1-0-person-bowing-medium-light-skin-tone',
    character: '🙇🏼'
  }, {
    slug: 'e1-0-person-bowing-medium-skin-tone',
    character: '🙇🏽'
  }, {
    slug: 'e1-0-person-bowing-medium-dark-skin-tone',
    character: '🙇🏾'
  }, {
    slug: 'e1-0-person-bowing-dark-skin-tone',
    character: '🙇🏿'
  }, {
    slug: 'e4-0-man-bowing',
    character: '🙇‍♂️'
  }, {
    slug: 'e4-0-man-bowing-light-skin-tone',
    character: '🙇🏻‍♂️'
  }, {
    slug: 'e4-0-man-bowing-medium-light-skin-tone',
    character: '🙇🏼‍♂️'
  }, {
    slug: 'e4-0-man-bowing-medium-skin-tone',
    character: '🙇🏽‍♂️'
  }, {
    slug: 'e4-0-man-bowing-medium-dark-skin-tone',
    character: '🙇🏾‍♂️'
  }, {
    slug: 'e4-0-man-bowing-dark-skin-tone',
    character: '🙇🏿‍♂️'
  }, {
    slug: 'e4-0-woman-bowing',
    character: '🙇‍♀️'
  }, {
    slug: 'e4-0-woman-bowing-light-skin-tone',
    character: '🙇🏻‍♀️'
  }, {
    slug: 'e4-0-woman-bowing-medium-light-skin-tone',
    character: '🙇🏼‍♀️'
  }, {
    slug: 'e4-0-woman-bowing-medium-skin-tone',
    character: '🙇🏽‍♀️'
  }, {
    slug: 'e4-0-woman-bowing-medium-dark-skin-tone',
    character: '🙇🏾‍♀️'
  }, {
    slug: 'e4-0-woman-bowing-dark-skin-tone',
    character: '🙇🏿‍♀️'
  }]
}, {
  slug: 'person-facepalming',
  character: '🤦',
  unicodeName: 'person facepalming',
  codePoint: '1F926',
  group: 'people-body',
  subGroup: 'person-gesture',
  variants: [{
    slug: 'person-facepalming-light-skin-tone',
    character: '🤦🏻'
  }, {
    slug: 'person-facepalming-medium-light-skin-tone',
    character: '🤦🏼'
  }, {
    slug: 'person-facepalming-medium-skin-tone',
    character: '🤦🏽'
  }, {
    slug: 'person-facepalming-medium-dark-skin-tone',
    character: '🤦🏾'
  }, {
    slug: 'person-facepalming-dark-skin-tone',
    character: '🤦🏿'
  }, {
    slug: 'man-facepalming',
    character: '🤦‍♂️'
  }, {
    slug: 'man-facepalming-light-skin-tone',
    character: '🤦🏻‍♂️'
  }, {
    slug: 'man-facepalming-medium-light-skin-tone',
    character: '🤦🏼‍♂️'
  }, {
    slug: 'man-facepalming-medium-skin-tone',
    character: '🤦🏽‍♂️'
  }, {
    slug: 'man-facepalming-medium-dark-skin-tone',
    character: '🤦🏾‍♂️'
  }, {
    slug: 'man-facepalming-dark-skin-tone',
    character: '🤦🏿‍♂️'
  }, {
    slug: 'woman-facepalming',
    character: '🤦‍♀️'
  }, {
    slug: 'woman-facepalming-light-skin-tone',
    character: '🤦🏻‍♀️'
  }, {
    slug: 'woman-facepalming-medium-light-skin-tone',
    character: '🤦🏼‍♀️'
  }, {
    slug: 'woman-facepalming-medium-skin-tone',
    character: '🤦🏽‍♀️'
  }, {
    slug: 'woman-facepalming-medium-dark-skin-tone',
    character: '🤦🏾‍♀️'
  }, {
    slug: 'woman-facepalming-dark-skin-tone',
    character: '🤦🏿‍♀️'
  }, {
    slug: 'e3-0-person-facepalming-light-skin-tone',
    character: '🤦🏻'
  }, {
    slug: 'e3-0-person-facepalming-medium-light-skin-tone',
    character: '🤦🏼'
  }, {
    slug: 'e3-0-person-facepalming-medium-skin-tone',
    character: '🤦🏽'
  }, {
    slug: 'e3-0-person-facepalming-medium-dark-skin-tone',
    character: '🤦🏾'
  }, {
    slug: 'e3-0-person-facepalming-dark-skin-tone',
    character: '🤦🏿'
  }, {
    slug: 'e4-0-man-facepalming',
    character: '🤦‍♂️'
  }, {
    slug: 'e4-0-man-facepalming-light-skin-tone',
    character: '🤦🏻‍♂️'
  }, {
    slug: 'e4-0-man-facepalming-medium-light-skin-tone',
    character: '🤦🏼‍♂️'
  }, {
    slug: 'e4-0-man-facepalming-medium-skin-tone',
    character: '🤦🏽‍♂️'
  }, {
    slug: 'e4-0-man-facepalming-medium-dark-skin-tone',
    character: '🤦🏾‍♂️'
  }, {
    slug: 'e4-0-man-facepalming-dark-skin-tone',
    character: '🤦🏿‍♂️'
  }, {
    slug: 'e4-0-woman-facepalming',
    character: '🤦‍♀️'
  }, {
    slug: 'e4-0-woman-facepalming-light-skin-tone',
    character: '🤦🏻‍♀️'
  }, {
    slug: 'e4-0-woman-facepalming-medium-light-skin-tone',
    character: '🤦🏼‍♀️'
  }, {
    slug: 'e4-0-woman-facepalming-medium-skin-tone',
    character: '🤦🏽‍♀️'
  }, {
    slug: 'e4-0-woman-facepalming-medium-dark-skin-tone',
    character: '🤦🏾‍♀️'
  }, {
    slug: 'e4-0-woman-facepalming-dark-skin-tone',
    character: '🤦🏿‍♀️'
  }]
}, {
  slug: 'person-shrugging',
  character: '🤷',
  unicodeName: 'person shrugging',
  codePoint: '1F937',
  group: 'people-body',
  subGroup: 'person-gesture',
  variants: [{
    slug: 'person-shrugging-light-skin-tone',
    character: '🤷🏻'
  }, {
    slug: 'person-shrugging-medium-light-skin-tone',
    character: '🤷🏼'
  }, {
    slug: 'person-shrugging-medium-skin-tone',
    character: '🤷🏽'
  }, {
    slug: 'person-shrugging-medium-dark-skin-tone',
    character: '🤷🏾'
  }, {
    slug: 'person-shrugging-dark-skin-tone',
    character: '🤷🏿'
  }, {
    slug: 'man-shrugging',
    character: '🤷‍♂️'
  }, {
    slug: 'man-shrugging-light-skin-tone',
    character: '🤷🏻‍♂️'
  }, {
    slug: 'man-shrugging-medium-light-skin-tone',
    character: '🤷🏼‍♂️'
  }, {
    slug: 'man-shrugging-medium-skin-tone',
    character: '🤷🏽‍♂️'
  }, {
    slug: 'man-shrugging-medium-dark-skin-tone',
    character: '🤷🏾‍♂️'
  }, {
    slug: 'man-shrugging-dark-skin-tone',
    character: '🤷🏿‍♂️'
  }, {
    slug: 'woman-shrugging',
    character: '🤷‍♀️'
  }, {
    slug: 'woman-shrugging-light-skin-tone',
    character: '🤷🏻‍♀️'
  }, {
    slug: 'woman-shrugging-medium-light-skin-tone',
    character: '🤷🏼‍♀️'
  }, {
    slug: 'woman-shrugging-medium-skin-tone',
    character: '🤷🏽‍♀️'
  }, {
    slug: 'woman-shrugging-medium-dark-skin-tone',
    character: '🤷🏾‍♀️'
  }, {
    slug: 'woman-shrugging-dark-skin-tone',
    character: '🤷🏿‍♀️'
  }, {
    slug: 'e3-0-person-shrugging-light-skin-tone',
    character: '🤷🏻'
  }, {
    slug: 'e3-0-person-shrugging-medium-light-skin-tone',
    character: '🤷🏼'
  }, {
    slug: 'e3-0-person-shrugging-medium-skin-tone',
    character: '🤷🏽'
  }, {
    slug: 'e3-0-person-shrugging-medium-dark-skin-tone',
    character: '🤷🏾'
  }, {
    slug: 'e3-0-person-shrugging-dark-skin-tone',
    character: '🤷🏿'
  }, {
    slug: 'e4-0-man-shrugging',
    character: '🤷‍♂️'
  }, {
    slug: 'e4-0-man-shrugging-light-skin-tone',
    character: '🤷🏻‍♂️'
  }, {
    slug: 'e4-0-man-shrugging-medium-light-skin-tone',
    character: '🤷🏼‍♂️'
  }, {
    slug: 'e4-0-man-shrugging-medium-skin-tone',
    character: '🤷🏽‍♂️'
  }, {
    slug: 'e4-0-man-shrugging-medium-dark-skin-tone',
    character: '🤷🏾‍♂️'
  }, {
    slug: 'e4-0-man-shrugging-dark-skin-tone',
    character: '🤷🏿‍♂️'
  }, {
    slug: 'e4-0-woman-shrugging',
    character: '🤷‍♀️'
  }, {
    slug: 'e4-0-woman-shrugging-light-skin-tone',
    character: '🤷🏻‍♀️'
  }, {
    slug: 'e4-0-woman-shrugging-medium-light-skin-tone',
    character: '🤷🏼‍♀️'
  }, {
    slug: 'e4-0-woman-shrugging-medium-skin-tone',
    character: '🤷🏽‍♀️'
  }, {
    slug: 'e4-0-woman-shrugging-medium-dark-skin-tone',
    character: '🤷🏾‍♀️'
  }, {
    slug: 'e4-0-woman-shrugging-dark-skin-tone',
    character: '🤷🏿‍♀️'
  }]
}, {
  slug: 'health-worker',
  character: '🧑‍⚕️',
  unicodeName: 'health worker',
  codePoint: '1F9D1 200D 2695 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-health-worker',
  character: '👨‍⚕️',
  unicodeName: 'man health worker',
  codePoint: '1F468 200D 2695 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-health-worker',
  character: '👩‍⚕️',
  unicodeName: 'woman health worker',
  codePoint: '1F469 200D 2695 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'student',
  character: '🧑‍🎓',
  unicodeName: 'student',
  codePoint: '1F9D1 200D 1F393',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-student',
  character: '👨‍🎓',
  unicodeName: 'man student',
  codePoint: '1F468 200D 1F393',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-student',
  character: '👩‍🎓',
  unicodeName: 'woman student',
  codePoint: '1F469 200D 1F393',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'teacher',
  character: '🧑‍🏫',
  unicodeName: 'teacher',
  codePoint: '1F9D1 200D 1F3EB',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-teacher',
  character: '👨‍🏫',
  unicodeName: 'man teacher',
  codePoint: '1F468 200D 1F3EB',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-teacher',
  character: '👩‍🏫',
  unicodeName: 'woman teacher',
  codePoint: '1F469 200D 1F3EB',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'judge',
  character: '🧑‍⚖️',
  unicodeName: 'judge',
  codePoint: '1F9D1 200D 2696 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-judge',
  character: '👨‍⚖️',
  unicodeName: 'man judge',
  codePoint: '1F468 200D 2696 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-judge',
  character: '👩‍⚖️',
  unicodeName: 'woman judge',
  codePoint: '1F469 200D 2696 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'farmer',
  character: '🧑‍🌾',
  unicodeName: 'farmer',
  codePoint: '1F9D1 200D 1F33E',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-farmer',
  character: '👨‍🌾',
  unicodeName: 'man farmer',
  codePoint: '1F468 200D 1F33E',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-farmer',
  character: '👩‍🌾',
  unicodeName: 'woman farmer',
  codePoint: '1F469 200D 1F33E',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'cook',
  character: '🧑‍🍳',
  unicodeName: 'cook',
  codePoint: '1F9D1 200D 1F373',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-cook',
  character: '👨‍🍳',
  unicodeName: 'man cook',
  codePoint: '1F468 200D 1F373',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-cook',
  character: '👩‍🍳',
  unicodeName: 'woman cook',
  codePoint: '1F469 200D 1F373',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'mechanic',
  character: '🧑‍🔧',
  unicodeName: 'mechanic',
  codePoint: '1F9D1 200D 1F527',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-mechanic',
  character: '👨‍🔧',
  unicodeName: 'man mechanic',
  codePoint: '1F468 200D 1F527',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-mechanic',
  character: '👩‍🔧',
  unicodeName: 'woman mechanic',
  codePoint: '1F469 200D 1F527',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'factory-worker',
  character: '🧑‍🏭',
  unicodeName: 'factory worker',
  codePoint: '1F9D1 200D 1F3ED',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-factory-worker',
  character: '👨‍🏭',
  unicodeName: 'man factory worker',
  codePoint: '1F468 200D 1F3ED',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-factory-worker',
  character: '👩‍🏭',
  unicodeName: 'woman factory worker',
  codePoint: '1F469 200D 1F3ED',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'office-worker',
  character: '🧑‍💼',
  unicodeName: 'office worker',
  codePoint: '1F9D1 200D 1F4BC',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-office-worker',
  character: '👨‍💼',
  unicodeName: 'man office worker',
  codePoint: '1F468 200D 1F4BC',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-office-worker',
  character: '👩‍💼',
  unicodeName: 'woman office worker',
  codePoint: '1F469 200D 1F4BC',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'scientist',
  character: '🧑‍🔬',
  unicodeName: 'scientist',
  codePoint: '1F9D1 200D 1F52C',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-scientist',
  character: '👨‍🔬',
  unicodeName: 'man scientist',
  codePoint: '1F468 200D 1F52C',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-scientist',
  character: '👩‍🔬',
  unicodeName: 'woman scientist',
  codePoint: '1F469 200D 1F52C',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'technologist',
  character: '🧑‍💻',
  unicodeName: 'technologist',
  codePoint: '1F9D1 200D 1F4BB',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-technologist',
  character: '👨‍💻',
  unicodeName: 'man technologist',
  codePoint: '1F468 200D 1F4BB',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-technologist',
  character: '👩‍💻',
  unicodeName: 'woman technologist',
  codePoint: '1F469 200D 1F4BB',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'singer',
  character: '🧑‍🎤',
  unicodeName: 'singer',
  codePoint: '1F9D1 200D 1F3A4',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-singer',
  character: '👨‍🎤',
  unicodeName: 'man singer',
  codePoint: '1F468 200D 1F3A4',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-singer',
  character: '👩‍🎤',
  unicodeName: 'woman singer',
  codePoint: '1F469 200D 1F3A4',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'artist',
  character: '🧑‍🎨',
  unicodeName: 'artist',
  codePoint: '1F9D1 200D 1F3A8',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-artist',
  character: '👨‍🎨',
  unicodeName: 'man artist',
  codePoint: '1F468 200D 1F3A8',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-artist',
  character: '👩‍🎨',
  unicodeName: 'woman artist',
  codePoint: '1F469 200D 1F3A8',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'pilot',
  character: '🧑‍✈️',
  unicodeName: 'pilot',
  codePoint: '1F9D1 200D 2708 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-pilot',
  character: '👨‍✈️',
  unicodeName: 'man pilot',
  codePoint: '1F468 200D 2708 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-pilot',
  character: '👩‍✈️',
  unicodeName: 'woman pilot',
  codePoint: '1F469 200D 2708 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'astronaut',
  character: '🧑‍🚀',
  unicodeName: 'astronaut',
  codePoint: '1F9D1 200D 1F680',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-astronaut',
  character: '👨‍🚀',
  unicodeName: 'man astronaut',
  codePoint: '1F468 200D 1F680',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-astronaut',
  character: '👩‍🚀',
  unicodeName: 'woman astronaut',
  codePoint: '1F469 200D 1F680',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'firefighter',
  character: '🧑‍🚒',
  unicodeName: 'firefighter',
  codePoint: '1F9D1 200D 1F692',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-firefighter',
  character: '👨‍🚒',
  unicodeName: 'man firefighter',
  codePoint: '1F468 200D 1F692',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-firefighter',
  character: '👩‍🚒',
  unicodeName: 'woman firefighter',
  codePoint: '1F469 200D 1F692',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'police-officer',
  character: '👮',
  unicodeName: 'police officer',
  codePoint: '1F46E',
  group: 'people-body',
  subGroup: 'person-role',
  variants: [{
    slug: 'police-officer-light-skin-tone',
    character: '👮🏻'
  }, {
    slug: 'police-officer-medium-light-skin-tone',
    character: '👮🏼'
  }, {
    slug: 'police-officer-medium-skin-tone',
    character: '👮🏽'
  }, {
    slug: 'police-officer-medium-dark-skin-tone',
    character: '👮🏾'
  }, {
    slug: 'police-officer-dark-skin-tone',
    character: '👮🏿'
  }, {
    slug: 'man-police-officer',
    character: '👮‍♂️'
  }, {
    slug: 'man-police-officer-light-skin-tone',
    character: '👮🏻‍♂️'
  }, {
    slug: 'man-police-officer-medium-light-skin-tone',
    character: '👮🏼‍♂️'
  }, {
    slug: 'man-police-officer-medium-skin-tone',
    character: '👮🏽‍♂️'
  }, {
    slug: 'man-police-officer-medium-dark-skin-tone',
    character: '👮🏾‍♂️'
  }, {
    slug: 'man-police-officer-dark-skin-tone',
    character: '👮🏿‍♂️'
  }, {
    slug: 'woman-police-officer',
    character: '👮‍♀️'
  }, {
    slug: 'woman-police-officer-light-skin-tone',
    character: '👮🏻‍♀️'
  }, {
    slug: 'woman-police-officer-medium-light-skin-tone',
    character: '👮🏼‍♀️'
  }, {
    slug: 'woman-police-officer-medium-skin-tone',
    character: '👮🏽‍♀️'
  }, {
    slug: 'woman-police-officer-medium-dark-skin-tone',
    character: '👮🏾‍♀️'
  }, {
    slug: 'woman-police-officer-dark-skin-tone',
    character: '👮🏿‍♀️'
  }, {
    slug: 'e1-0-police-officer-light-skin-tone',
    character: '👮🏻'
  }, {
    slug: 'e1-0-police-officer-medium-light-skin-tone',
    character: '👮🏼'
  }, {
    slug: 'e1-0-police-officer-medium-skin-tone',
    character: '👮🏽'
  }, {
    slug: 'e1-0-police-officer-medium-dark-skin-tone',
    character: '👮🏾'
  }, {
    slug: 'e1-0-police-officer-dark-skin-tone',
    character: '👮🏿'
  }, {
    slug: 'e4-0-man-police-officer',
    character: '👮‍♂️'
  }, {
    slug: 'e4-0-man-police-officer-light-skin-tone',
    character: '👮🏻‍♂️'
  }, {
    slug: 'e4-0-man-police-officer-medium-light-skin-tone',
    character: '👮🏼‍♂️'
  }, {
    slug: 'e4-0-man-police-officer-medium-skin-tone',
    character: '👮🏽‍♂️'
  }, {
    slug: 'e4-0-man-police-officer-medium-dark-skin-tone',
    character: '👮🏾‍♂️'
  }, {
    slug: 'e4-0-man-police-officer-dark-skin-tone',
    character: '👮🏿‍♂️'
  }, {
    slug: 'e4-0-woman-police-officer',
    character: '👮‍♀️'
  }, {
    slug: 'e4-0-woman-police-officer-light-skin-tone',
    character: '👮🏻‍♀️'
  }, {
    slug: 'e4-0-woman-police-officer-medium-light-skin-tone',
    character: '👮🏼‍♀️'
  }, {
    slug: 'e4-0-woman-police-officer-medium-skin-tone',
    character: '👮🏽‍♀️'
  }, {
    slug: 'e4-0-woman-police-officer-medium-dark-skin-tone',
    character: '👮🏾‍♀️'
  }, {
    slug: 'e4-0-woman-police-officer-dark-skin-tone',
    character: '👮🏿‍♀️'
  }]
}, {
  slug: 'detective',
  character: '🕵️',
  unicodeName: 'detective',
  codePoint: '1F575 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'detective-light-skin-tone',
  character: '🕵🏻',
  unicodeName: 'detective: light skin tone',
  codePoint: '1F575 1F3FB',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'detective-medium-light-skin-tone',
  character: '🕵🏼',
  unicodeName: 'detective: medium-light skin tone',
  codePoint: '1F575 1F3FC',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'detective-medium-skin-tone',
  character: '🕵🏽',
  unicodeName: 'detective: medium skin tone',
  codePoint: '1F575 1F3FD',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'detective-medium-dark-skin-tone',
  character: '🕵🏾',
  unicodeName: 'detective: medium-dark skin tone',
  codePoint: '1F575 1F3FE',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'detective-dark-skin-tone',
  character: '🕵🏿',
  unicodeName: 'detective: dark skin tone',
  codePoint: '1F575 1F3FF',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-detective',
  character: '🕵️‍♂️',
  unicodeName: 'man detective',
  codePoint: '1F575 FE0F 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-detective-light-skin-tone',
  character: '🕵🏻‍♂️',
  unicodeName: 'man detective: light skin tone',
  codePoint: '1F575 1F3FB 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-detective-medium-light-skin-tone',
  character: '🕵🏼‍♂️',
  unicodeName: 'man detective: medium-light skin tone',
  codePoint: '1F575 1F3FC 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-detective-medium-skin-tone',
  character: '🕵🏽‍♂️',
  unicodeName: 'man detective: medium skin tone',
  codePoint: '1F575 1F3FD 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-detective-medium-dark-skin-tone',
  character: '🕵🏾‍♂️',
  unicodeName: 'man detective: medium-dark skin tone',
  codePoint: '1F575 1F3FE 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-detective-dark-skin-tone',
  character: '🕵🏿‍♂️',
  unicodeName: 'man detective: dark skin tone',
  codePoint: '1F575 1F3FF 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-detective',
  character: '🕵️‍♀️',
  unicodeName: 'woman detective',
  codePoint: '1F575 FE0F 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-detective-light-skin-tone',
  character: '🕵🏻‍♀️',
  unicodeName: 'woman detective: light skin tone',
  codePoint: '1F575 1F3FB 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-detective-medium-light-skin-tone',
  character: '🕵🏼‍♀️',
  unicodeName: 'woman detective: medium-light skin tone',
  codePoint: '1F575 1F3FC 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-detective-medium-skin-tone',
  character: '🕵🏽‍♀️',
  unicodeName: 'woman detective: medium skin tone',
  codePoint: '1F575 1F3FD 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-detective-medium-dark-skin-tone',
  character: '🕵🏾‍♀️',
  unicodeName: 'woman detective: medium-dark skin tone',
  codePoint: '1F575 1F3FE 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'woman-detective-dark-skin-tone',
  character: '🕵🏿‍♀️',
  unicodeName: 'woman detective: dark skin tone',
  codePoint: '1F575 1F3FF 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'guard',
  character: '💂',
  unicodeName: 'guard',
  codePoint: '1F482',
  group: 'people-body',
  subGroup: 'person-role',
  variants: [{
    slug: 'guard-light-skin-tone',
    character: '💂🏻'
  }, {
    slug: 'guard-medium-light-skin-tone',
    character: '💂🏼'
  }, {
    slug: 'guard-medium-skin-tone',
    character: '💂🏽'
  }, {
    slug: 'guard-medium-dark-skin-tone',
    character: '💂🏾'
  }, {
    slug: 'guard-dark-skin-tone',
    character: '💂🏿'
  }, {
    slug: 'man-guard',
    character: '💂‍♂️'
  }, {
    slug: 'man-guard-light-skin-tone',
    character: '💂🏻‍♂️'
  }, {
    slug: 'man-guard-medium-light-skin-tone',
    character: '💂🏼‍♂️'
  }, {
    slug: 'man-guard-medium-skin-tone',
    character: '💂🏽‍♂️'
  }, {
    slug: 'man-guard-medium-dark-skin-tone',
    character: '💂🏾‍♂️'
  }, {
    slug: 'man-guard-dark-skin-tone',
    character: '💂🏿‍♂️'
  }, {
    slug: 'woman-guard',
    character: '💂‍♀️'
  }, {
    slug: 'woman-guard-light-skin-tone',
    character: '💂🏻‍♀️'
  }, {
    slug: 'woman-guard-medium-light-skin-tone',
    character: '💂🏼‍♀️'
  }, {
    slug: 'woman-guard-medium-skin-tone',
    character: '💂🏽‍♀️'
  }, {
    slug: 'woman-guard-medium-dark-skin-tone',
    character: '💂🏾‍♀️'
  }, {
    slug: 'woman-guard-dark-skin-tone',
    character: '💂🏿‍♀️'
  }, {
    slug: 'e1-0-guard-light-skin-tone',
    character: '💂🏻'
  }, {
    slug: 'e1-0-guard-medium-light-skin-tone',
    character: '💂🏼'
  }, {
    slug: 'e1-0-guard-medium-skin-tone',
    character: '💂🏽'
  }, {
    slug: 'e1-0-guard-medium-dark-skin-tone',
    character: '💂🏾'
  }, {
    slug: 'e1-0-guard-dark-skin-tone',
    character: '💂🏿'
  }, {
    slug: 'e4-0-man-guard',
    character: '💂‍♂️'
  }, {
    slug: 'e4-0-man-guard-light-skin-tone',
    character: '💂🏻‍♂️'
  }, {
    slug: 'e4-0-man-guard-medium-light-skin-tone',
    character: '💂🏼‍♂️'
  }, {
    slug: 'e4-0-man-guard-medium-skin-tone',
    character: '💂🏽‍♂️'
  }, {
    slug: 'e4-0-man-guard-medium-dark-skin-tone',
    character: '💂🏾‍♂️'
  }, {
    slug: 'e4-0-man-guard-dark-skin-tone',
    character: '💂🏿‍♂️'
  }, {
    slug: 'e4-0-woman-guard',
    character: '💂‍♀️'
  }, {
    slug: 'e4-0-woman-guard-light-skin-tone',
    character: '💂🏻‍♀️'
  }, {
    slug: 'e4-0-woman-guard-medium-light-skin-tone',
    character: '💂🏼‍♀️'
  }, {
    slug: 'e4-0-woman-guard-medium-skin-tone',
    character: '💂🏽‍♀️'
  }, {
    slug: 'e4-0-woman-guard-medium-dark-skin-tone',
    character: '💂🏾‍♀️'
  }, {
    slug: 'e4-0-woman-guard-dark-skin-tone',
    character: '💂🏿‍♀️'
  }]
}, {
  slug: 'ninja',
  character: '🥷',
  unicodeName: 'ninja',
  codePoint: '1F977',
  group: 'people-body',
  subGroup: 'person-role',
  variants: [{
    slug: 'ninja-light-skin-tone',
    character: '🥷🏻'
  }, {
    slug: 'ninja-medium-light-skin-tone',
    character: '🥷🏼'
  }, {
    slug: 'ninja-medium-skin-tone',
    character: '🥷🏽'
  }, {
    slug: 'ninja-medium-dark-skin-tone',
    character: '🥷🏾'
  }, {
    slug: 'ninja-dark-skin-tone',
    character: '🥷🏿'
  }, {
    slug: 'e13-0-ninja-light-skin-tone',
    character: '🥷🏻'
  }, {
    slug: 'e13-0-ninja-medium-light-skin-tone',
    character: '🥷🏼'
  }, {
    slug: 'e13-0-ninja-medium-skin-tone',
    character: '🥷🏽'
  }, {
    slug: 'e13-0-ninja-medium-dark-skin-tone',
    character: '🥷🏾'
  }, {
    slug: 'e13-0-ninja-dark-skin-tone',
    character: '🥷🏿'
  }]
}, {
  slug: 'construction-worker',
  character: '👷',
  unicodeName: 'construction worker',
  codePoint: '1F477',
  group: 'people-body',
  subGroup: 'person-role',
  variants: [{
    slug: 'construction-worker-light-skin-tone',
    character: '👷🏻'
  }, {
    slug: 'construction-worker-medium-light-skin-tone',
    character: '👷🏼'
  }, {
    slug: 'construction-worker-medium-skin-tone',
    character: '👷🏽'
  }, {
    slug: 'construction-worker-medium-dark-skin-tone',
    character: '👷🏾'
  }, {
    slug: 'construction-worker-dark-skin-tone',
    character: '👷🏿'
  }, {
    slug: 'man-construction-worker',
    character: '👷‍♂️'
  }, {
    slug: 'man-construction-worker-light-skin-tone',
    character: '👷🏻‍♂️'
  }, {
    slug: 'man-construction-worker-medium-light-skin-tone',
    character: '👷🏼‍♂️'
  }, {
    slug: 'man-construction-worker-medium-skin-tone',
    character: '👷🏽‍♂️'
  }, {
    slug: 'man-construction-worker-medium-dark-skin-tone',
    character: '👷🏾‍♂️'
  }, {
    slug: 'man-construction-worker-dark-skin-tone',
    character: '👷🏿‍♂️'
  }, {
    slug: 'woman-construction-worker',
    character: '👷‍♀️'
  }, {
    slug: 'woman-construction-worker-light-skin-tone',
    character: '👷🏻‍♀️'
  }, {
    slug: 'woman-construction-worker-medium-light-skin-tone',
    character: '👷🏼‍♀️'
  }, {
    slug: 'woman-construction-worker-medium-skin-tone',
    character: '👷🏽‍♀️'
  }, {
    slug: 'woman-construction-worker-medium-dark-skin-tone',
    character: '👷🏾‍♀️'
  }, {
    slug: 'woman-construction-worker-dark-skin-tone',
    character: '👷🏿‍♀️'
  }, {
    slug: 'e1-0-construction-worker-light-skin-tone',
    character: '👷🏻'
  }, {
    slug: 'e1-0-construction-worker-medium-light-skin-tone',
    character: '👷🏼'
  }, {
    slug: 'e1-0-construction-worker-medium-skin-tone',
    character: '👷🏽'
  }, {
    slug: 'e1-0-construction-worker-medium-dark-skin-tone',
    character: '👷🏾'
  }, {
    slug: 'e1-0-construction-worker-dark-skin-tone',
    character: '👷🏿'
  }, {
    slug: 'e4-0-man-construction-worker',
    character: '👷‍♂️'
  }, {
    slug: 'e4-0-man-construction-worker-light-skin-tone',
    character: '👷🏻‍♂️'
  }, {
    slug: 'e4-0-man-construction-worker-medium-light-skin-tone',
    character: '👷🏼‍♂️'
  }, {
    slug: 'e4-0-man-construction-worker-medium-skin-tone',
    character: '👷🏽‍♂️'
  }, {
    slug: 'e4-0-man-construction-worker-medium-dark-skin-tone',
    character: '👷🏾‍♂️'
  }, {
    slug: 'e4-0-man-construction-worker-dark-skin-tone',
    character: '👷🏿‍♂️'
  }, {
    slug: 'e4-0-woman-construction-worker',
    character: '👷‍♀️'
  }, {
    slug: 'e4-0-woman-construction-worker-light-skin-tone',
    character: '👷🏻‍♀️'
  }, {
    slug: 'e4-0-woman-construction-worker-medium-light-skin-tone',
    character: '👷🏼‍♀️'
  }, {
    slug: 'e4-0-woman-construction-worker-medium-skin-tone',
    character: '👷🏽‍♀️'
  }, {
    slug: 'e4-0-woman-construction-worker-medium-dark-skin-tone',
    character: '👷🏾‍♀️'
  }, {
    slug: 'e4-0-woman-construction-worker-dark-skin-tone',
    character: '👷🏿‍♀️'
  }]
}, {
  slug: 'prince',
  character: '🤴',
  unicodeName: 'prince',
  codePoint: '1F934',
  group: 'people-body',
  subGroup: 'person-role',
  variants: [{
    slug: 'prince-light-skin-tone',
    character: '🤴🏻'
  }, {
    slug: 'prince-medium-light-skin-tone',
    character: '🤴🏼'
  }, {
    slug: 'prince-medium-skin-tone',
    character: '🤴🏽'
  }, {
    slug: 'prince-medium-dark-skin-tone',
    character: '🤴🏾'
  }, {
    slug: 'prince-dark-skin-tone',
    character: '🤴🏿'
  }, {
    slug: 'e3-0-prince-light-skin-tone',
    character: '🤴🏻'
  }, {
    slug: 'e3-0-prince-medium-light-skin-tone',
    character: '🤴🏼'
  }, {
    slug: 'e3-0-prince-medium-skin-tone',
    character: '🤴🏽'
  }, {
    slug: 'e3-0-prince-medium-dark-skin-tone',
    character: '🤴🏾'
  }, {
    slug: 'e3-0-prince-dark-skin-tone',
    character: '🤴🏿'
  }]
}, {
  slug: 'princess',
  character: '👸',
  unicodeName: 'princess',
  codePoint: '1F478',
  group: 'people-body',
  subGroup: 'person-role',
  variants: [{
    slug: 'princess-light-skin-tone',
    character: '👸🏻'
  }, {
    slug: 'princess-medium-light-skin-tone',
    character: '👸🏼'
  }, {
    slug: 'princess-medium-skin-tone',
    character: '👸🏽'
  }, {
    slug: 'princess-medium-dark-skin-tone',
    character: '👸🏾'
  }, {
    slug: 'princess-dark-skin-tone',
    character: '👸🏿'
  }, {
    slug: 'e1-0-princess-light-skin-tone',
    character: '👸🏻'
  }, {
    slug: 'e1-0-princess-medium-light-skin-tone',
    character: '👸🏼'
  }, {
    slug: 'e1-0-princess-medium-skin-tone',
    character: '👸🏽'
  }, {
    slug: 'e1-0-princess-medium-dark-skin-tone',
    character: '👸🏾'
  }, {
    slug: 'e1-0-princess-dark-skin-tone',
    character: '👸🏿'
  }]
}, {
  slug: 'person-wearing-turban',
  character: '👳',
  unicodeName: 'person wearing turban',
  codePoint: '1F473',
  group: 'people-body',
  subGroup: 'person-role',
  variants: [{
    slug: 'person-wearing-turban-light-skin-tone',
    character: '👳🏻'
  }, {
    slug: 'person-wearing-turban-medium-light-skin-tone',
    character: '👳🏼'
  }, {
    slug: 'person-wearing-turban-medium-skin-tone',
    character: '👳🏽'
  }, {
    slug: 'person-wearing-turban-medium-dark-skin-tone',
    character: '👳🏾'
  }, {
    slug: 'person-wearing-turban-dark-skin-tone',
    character: '👳🏿'
  }, {
    slug: 'man-wearing-turban',
    character: '👳‍♂️'
  }, {
    slug: 'man-wearing-turban-light-skin-tone',
    character: '👳🏻‍♂️'
  }, {
    slug: 'man-wearing-turban-medium-light-skin-tone',
    character: '👳🏼‍♂️'
  }, {
    slug: 'man-wearing-turban-medium-skin-tone',
    character: '👳🏽‍♂️'
  }, {
    slug: 'man-wearing-turban-medium-dark-skin-tone',
    character: '👳🏾‍♂️'
  }, {
    slug: 'man-wearing-turban-dark-skin-tone',
    character: '👳🏿‍♂️'
  }, {
    slug: 'woman-wearing-turban',
    character: '👳‍♀️'
  }, {
    slug: 'woman-wearing-turban-light-skin-tone',
    character: '👳🏻‍♀️'
  }, {
    slug: 'woman-wearing-turban-medium-light-skin-tone',
    character: '👳🏼‍♀️'
  }, {
    slug: 'woman-wearing-turban-medium-skin-tone',
    character: '👳🏽‍♀️'
  }, {
    slug: 'woman-wearing-turban-medium-dark-skin-tone',
    character: '👳🏾‍♀️'
  }, {
    slug: 'woman-wearing-turban-dark-skin-tone',
    character: '👳🏿‍♀️'
  }, {
    slug: 'e1-0-person-wearing-turban-light-skin-tone',
    character: '👳🏻'
  }, {
    slug: 'e1-0-person-wearing-turban-medium-light-skin-tone',
    character: '👳🏼'
  }, {
    slug: 'e1-0-person-wearing-turban-medium-skin-tone',
    character: '👳🏽'
  }, {
    slug: 'e1-0-person-wearing-turban-medium-dark-skin-tone',
    character: '👳🏾'
  }, {
    slug: 'e1-0-person-wearing-turban-dark-skin-tone',
    character: '👳🏿'
  }, {
    slug: 'e4-0-man-wearing-turban',
    character: '👳‍♂️'
  }, {
    slug: 'e4-0-man-wearing-turban-light-skin-tone',
    character: '👳🏻‍♂️'
  }, {
    slug: 'e4-0-man-wearing-turban-medium-light-skin-tone',
    character: '👳🏼‍♂️'
  }, {
    slug: 'e4-0-man-wearing-turban-medium-skin-tone',
    character: '👳🏽‍♂️'
  }, {
    slug: 'e4-0-man-wearing-turban-medium-dark-skin-tone',
    character: '👳🏾‍♂️'
  }, {
    slug: 'e4-0-man-wearing-turban-dark-skin-tone',
    character: '👳🏿‍♂️'
  }, {
    slug: 'e4-0-woman-wearing-turban',
    character: '👳‍♀️'
  }, {
    slug: 'e4-0-woman-wearing-turban-light-skin-tone',
    character: '👳🏻‍♀️'
  }, {
    slug: 'e4-0-woman-wearing-turban-medium-light-skin-tone',
    character: '👳🏼‍♀️'
  }, {
    slug: 'e4-0-woman-wearing-turban-medium-skin-tone',
    character: '👳🏽‍♀️'
  }, {
    slug: 'e4-0-woman-wearing-turban-medium-dark-skin-tone',
    character: '👳🏾‍♀️'
  }, {
    slug: 'e4-0-woman-wearing-turban-dark-skin-tone',
    character: '👳🏿‍♀️'
  }]
}, {
  slug: 'person-with-skullcap',
  character: '👲',
  unicodeName: 'person with skullcap',
  codePoint: '1F472',
  group: 'people-body',
  subGroup: 'person-role',
  variants: [{
    slug: 'person-with-skullcap-light-skin-tone',
    character: '👲🏻'
  }, {
    slug: 'person-with-skullcap-medium-light-skin-tone',
    character: '👲🏼'
  }, {
    slug: 'person-with-skullcap-medium-skin-tone',
    character: '👲🏽'
  }, {
    slug: 'person-with-skullcap-medium-dark-skin-tone',
    character: '👲🏾'
  }, {
    slug: 'person-with-skullcap-dark-skin-tone',
    character: '👲🏿'
  }, {
    slug: 'e1-0-person-with-skullcap-light-skin-tone',
    character: '👲🏻'
  }, {
    slug: 'e1-0-person-with-skullcap-medium-light-skin-tone',
    character: '👲🏼'
  }, {
    slug: 'e1-0-person-with-skullcap-medium-skin-tone',
    character: '👲🏽'
  }, {
    slug: 'e1-0-person-with-skullcap-medium-dark-skin-tone',
    character: '👲🏾'
  }, {
    slug: 'e1-0-person-with-skullcap-dark-skin-tone',
    character: '👲🏿'
  }]
}, {
  slug: 'woman-with-headscarf',
  character: '🧕',
  unicodeName: 'woman with headscarf',
  codePoint: '1F9D5',
  group: 'people-body',
  subGroup: 'person-role',
  variants: [{
    slug: 'woman-with-headscarf-light-skin-tone',
    character: '🧕🏻'
  }, {
    slug: 'woman-with-headscarf-medium-light-skin-tone',
    character: '🧕🏼'
  }, {
    slug: 'woman-with-headscarf-medium-skin-tone',
    character: '🧕🏽'
  }, {
    slug: 'woman-with-headscarf-medium-dark-skin-tone',
    character: '🧕🏾'
  }, {
    slug: 'woman-with-headscarf-dark-skin-tone',
    character: '🧕🏿'
  }, {
    slug: 'e5-0-woman-with-headscarf-light-skin-tone',
    character: '🧕🏻'
  }, {
    slug: 'e5-0-woman-with-headscarf-medium-light-skin-tone',
    character: '🧕🏼'
  }, {
    slug: 'e5-0-woman-with-headscarf-medium-skin-tone',
    character: '🧕🏽'
  }, {
    slug: 'e5-0-woman-with-headscarf-medium-dark-skin-tone',
    character: '🧕🏾'
  }, {
    slug: 'e5-0-woman-with-headscarf-dark-skin-tone',
    character: '🧕🏿'
  }]
}, {
  slug: 'person-in-tuxedo',
  character: '🤵',
  unicodeName: 'person in tuxedo',
  codePoint: '1F935',
  group: 'people-body',
  subGroup: 'person-role',
  variants: [{
    slug: 'person-in-tuxedo-light-skin-tone',
    character: '🤵🏻'
  }, {
    slug: 'person-in-tuxedo-medium-light-skin-tone',
    character: '🤵🏼'
  }, {
    slug: 'person-in-tuxedo-medium-skin-tone',
    character: '🤵🏽'
  }, {
    slug: 'person-in-tuxedo-medium-dark-skin-tone',
    character: '🤵🏾'
  }, {
    slug: 'person-in-tuxedo-dark-skin-tone',
    character: '🤵🏿'
  }, {
    slug: 'man-in-tuxedo',
    character: '🤵‍♂️'
  }, {
    slug: 'man-in-tuxedo-light-skin-tone',
    character: '🤵🏻‍♂️'
  }, {
    slug: 'man-in-tuxedo-medium-light-skin-tone',
    character: '🤵🏼‍♂️'
  }, {
    slug: 'man-in-tuxedo-medium-skin-tone',
    character: '🤵🏽‍♂️'
  }, {
    slug: 'man-in-tuxedo-medium-dark-skin-tone',
    character: '🤵🏾‍♂️'
  }, {
    slug: 'man-in-tuxedo-dark-skin-tone',
    character: '🤵🏿‍♂️'
  }, {
    slug: 'woman-in-tuxedo',
    character: '🤵‍♀️'
  }, {
    slug: 'woman-in-tuxedo-light-skin-tone',
    character: '🤵🏻‍♀️'
  }, {
    slug: 'woman-in-tuxedo-medium-light-skin-tone',
    character: '🤵🏼‍♀️'
  }, {
    slug: 'woman-in-tuxedo-medium-skin-tone',
    character: '🤵🏽‍♀️'
  }, {
    slug: 'woman-in-tuxedo-medium-dark-skin-tone',
    character: '🤵🏾‍♀️'
  }, {
    slug: 'woman-in-tuxedo-dark-skin-tone',
    character: '🤵🏿‍♀️'
  }, {
    slug: 'e3-0-person-in-tuxedo-light-skin-tone',
    character: '🤵🏻'
  }, {
    slug: 'e3-0-person-in-tuxedo-medium-light-skin-tone',
    character: '🤵🏼'
  }, {
    slug: 'e3-0-person-in-tuxedo-medium-skin-tone',
    character: '🤵🏽'
  }, {
    slug: 'e3-0-person-in-tuxedo-medium-dark-skin-tone',
    character: '🤵🏾'
  }, {
    slug: 'e3-0-person-in-tuxedo-dark-skin-tone',
    character: '🤵🏿'
  }, {
    slug: 'e13-0-man-in-tuxedo',
    character: '🤵‍♂️'
  }, {
    slug: 'e13-0-man-in-tuxedo-light-skin-tone',
    character: '🤵🏻‍♂️'
  }, {
    slug: 'e13-0-man-in-tuxedo-medium-light-skin-tone',
    character: '🤵🏼‍♂️'
  }, {
    slug: 'e13-0-man-in-tuxedo-medium-skin-tone',
    character: '🤵🏽‍♂️'
  }, {
    slug: 'e13-0-man-in-tuxedo-medium-dark-skin-tone',
    character: '🤵🏾‍♂️'
  }, {
    slug: 'e13-0-man-in-tuxedo-dark-skin-tone',
    character: '🤵🏿‍♂️'
  }, {
    slug: 'e13-0-woman-in-tuxedo',
    character: '🤵‍♀️'
  }, {
    slug: 'e13-0-woman-in-tuxedo-light-skin-tone',
    character: '🤵🏻‍♀️'
  }, {
    slug: 'e13-0-woman-in-tuxedo-medium-light-skin-tone',
    character: '🤵🏼‍♀️'
  }, {
    slug: 'e13-0-woman-in-tuxedo-medium-skin-tone',
    character: '🤵🏽‍♀️'
  }, {
    slug: 'e13-0-woman-in-tuxedo-medium-dark-skin-tone',
    character: '🤵🏾‍♀️'
  }, {
    slug: 'e13-0-woman-in-tuxedo-dark-skin-tone',
    character: '🤵🏿‍♀️'
  }]
}, {
  slug: 'person-with-veil',
  character: '👰',
  unicodeName: 'person with veil',
  codePoint: '1F470',
  group: 'people-body',
  subGroup: 'person-role',
  variants: [{
    slug: 'person-with-veil-light-skin-tone',
    character: '👰🏻'
  }, {
    slug: 'person-with-veil-medium-light-skin-tone',
    character: '👰🏼'
  }, {
    slug: 'person-with-veil-medium-skin-tone',
    character: '👰🏽'
  }, {
    slug: 'person-with-veil-medium-dark-skin-tone',
    character: '👰🏾'
  }, {
    slug: 'person-with-veil-dark-skin-tone',
    character: '👰🏿'
  }, {
    slug: 'man-with-veil',
    character: '👰‍♂️'
  }, {
    slug: 'man-with-veil-light-skin-tone',
    character: '👰🏻‍♂️'
  }, {
    slug: 'man-with-veil-medium-light-skin-tone',
    character: '👰🏼‍♂️'
  }, {
    slug: 'man-with-veil-medium-skin-tone',
    character: '👰🏽‍♂️'
  }, {
    slug: 'man-with-veil-medium-dark-skin-tone',
    character: '👰🏾‍♂️'
  }, {
    slug: 'man-with-veil-dark-skin-tone',
    character: '👰🏿‍♂️'
  }, {
    slug: 'woman-with-veil',
    character: '👰‍♀️'
  }, {
    slug: 'woman-with-veil-light-skin-tone',
    character: '👰🏻‍♀️'
  }, {
    slug: 'woman-with-veil-medium-light-skin-tone',
    character: '👰🏼‍♀️'
  }, {
    slug: 'woman-with-veil-medium-skin-tone',
    character: '👰🏽‍♀️'
  }, {
    slug: 'woman-with-veil-medium-dark-skin-tone',
    character: '👰🏾‍♀️'
  }, {
    slug: 'woman-with-veil-dark-skin-tone',
    character: '👰🏿‍♀️'
  }, {
    slug: 'e1-0-person-with-veil-light-skin-tone',
    character: '👰🏻'
  }, {
    slug: 'e1-0-person-with-veil-medium-light-skin-tone',
    character: '👰🏼'
  }, {
    slug: 'e1-0-person-with-veil-medium-skin-tone',
    character: '👰🏽'
  }, {
    slug: 'e1-0-person-with-veil-medium-dark-skin-tone',
    character: '👰🏾'
  }, {
    slug: 'e1-0-person-with-veil-dark-skin-tone',
    character: '👰🏿'
  }, {
    slug: 'e13-0-man-with-veil',
    character: '👰‍♂️'
  }, {
    slug: 'e13-0-man-with-veil-light-skin-tone',
    character: '👰🏻‍♂️'
  }, {
    slug: 'e13-0-man-with-veil-medium-light-skin-tone',
    character: '👰🏼‍♂️'
  }, {
    slug: 'e13-0-man-with-veil-medium-skin-tone',
    character: '👰🏽‍♂️'
  }, {
    slug: 'e13-0-man-with-veil-medium-dark-skin-tone',
    character: '👰🏾‍♂️'
  }, {
    slug: 'e13-0-man-with-veil-dark-skin-tone',
    character: '👰🏿‍♂️'
  }, {
    slug: 'e13-0-woman-with-veil',
    character: '👰‍♀️'
  }, {
    slug: 'e13-0-woman-with-veil-light-skin-tone',
    character: '👰🏻‍♀️'
  }, {
    slug: 'e13-0-woman-with-veil-medium-light-skin-tone',
    character: '👰🏼‍♀️'
  }, {
    slug: 'e13-0-woman-with-veil-medium-skin-tone',
    character: '👰🏽‍♀️'
  }, {
    slug: 'e13-0-woman-with-veil-medium-dark-skin-tone',
    character: '👰🏾‍♀️'
  }, {
    slug: 'e13-0-woman-with-veil-dark-skin-tone',
    character: '👰🏿‍♀️'
  }]
}, {
  slug: 'pregnant-woman',
  character: '🤰',
  unicodeName: 'pregnant woman',
  codePoint: '1F930',
  group: 'people-body',
  subGroup: 'person-role',
  variants: [{
    slug: 'pregnant-woman-light-skin-tone',
    character: '🤰🏻'
  }, {
    slug: 'pregnant-woman-medium-light-skin-tone',
    character: '🤰🏼'
  }, {
    slug: 'pregnant-woman-medium-skin-tone',
    character: '🤰🏽'
  }, {
    slug: 'pregnant-woman-medium-dark-skin-tone',
    character: '🤰🏾'
  }, {
    slug: 'pregnant-woman-dark-skin-tone',
    character: '🤰🏿'
  }, {
    slug: 'e3-0-pregnant-woman-light-skin-tone',
    character: '🤰🏻'
  }, {
    slug: 'e3-0-pregnant-woman-medium-light-skin-tone',
    character: '🤰🏼'
  }, {
    slug: 'e3-0-pregnant-woman-medium-skin-tone',
    character: '🤰🏽'
  }, {
    slug: 'e3-0-pregnant-woman-medium-dark-skin-tone',
    character: '🤰🏾'
  }, {
    slug: 'e3-0-pregnant-woman-dark-skin-tone',
    character: '🤰🏿'
  }]
}, {
  slug: 'breast-feeding',
  character: '🤱',
  unicodeName: 'breast-feeding',
  codePoint: '1F931',
  group: 'people-body',
  subGroup: 'person-role',
  variants: [{
    slug: 'breast-feeding-light-skin-tone',
    character: '🤱🏻'
  }, {
    slug: 'breast-feeding-medium-light-skin-tone',
    character: '🤱🏼'
  }, {
    slug: 'breast-feeding-medium-skin-tone',
    character: '🤱🏽'
  }, {
    slug: 'breast-feeding-medium-dark-skin-tone',
    character: '🤱🏾'
  }, {
    slug: 'breast-feeding-dark-skin-tone',
    character: '🤱🏿'
  }, {
    slug: 'e5-0-breast-feeding-light-skin-tone',
    character: '🤱🏻'
  }, {
    slug: 'e5-0-breast-feeding-medium-light-skin-tone',
    character: '🤱🏼'
  }, {
    slug: 'e5-0-breast-feeding-medium-skin-tone',
    character: '🤱🏽'
  }, {
    slug: 'e5-0-breast-feeding-medium-dark-skin-tone',
    character: '🤱🏾'
  }, {
    slug: 'e5-0-breast-feeding-dark-skin-tone',
    character: '🤱🏿'
  }]
}, {
  slug: 'woman-feeding-baby',
  character: '👩‍🍼',
  unicodeName: 'woman feeding baby',
  codePoint: '1F469 200D 1F37C',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'man-feeding-baby',
  character: '👨‍🍼',
  unicodeName: 'man feeding baby',
  codePoint: '1F468 200D 1F37C',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'person-feeding-baby',
  character: '🧑‍🍼',
  unicodeName: 'person feeding baby',
  codePoint: '1F9D1 200D 1F37C',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'baby-angel',
  character: '👼',
  unicodeName: 'baby angel',
  codePoint: '1F47C',
  group: 'people-body',
  subGroup: 'person-fantasy',
  variants: [{
    slug: 'baby-angel-light-skin-tone',
    character: '👼🏻'
  }, {
    slug: 'baby-angel-medium-light-skin-tone',
    character: '👼🏼'
  }, {
    slug: 'baby-angel-medium-skin-tone',
    character: '👼🏽'
  }, {
    slug: 'baby-angel-medium-dark-skin-tone',
    character: '👼🏾'
  }, {
    slug: 'baby-angel-dark-skin-tone',
    character: '👼🏿'
  }, {
    slug: 'e1-0-baby-angel-light-skin-tone',
    character: '👼🏻'
  }, {
    slug: 'e1-0-baby-angel-medium-light-skin-tone',
    character: '👼🏼'
  }, {
    slug: 'e1-0-baby-angel-medium-skin-tone',
    character: '👼🏽'
  }, {
    slug: 'e1-0-baby-angel-medium-dark-skin-tone',
    character: '👼🏾'
  }, {
    slug: 'e1-0-baby-angel-dark-skin-tone',
    character: '👼🏿'
  }]
}, {
  slug: 'santa-claus',
  character: '🎅',
  unicodeName: 'Santa Claus',
  codePoint: '1F385',
  group: 'people-body',
  subGroup: 'person-fantasy',
  variants: [{
    slug: 'santa-claus-light-skin-tone',
    character: '🎅🏻'
  }, {
    slug: 'santa-claus-medium-light-skin-tone',
    character: '🎅🏼'
  }, {
    slug: 'santa-claus-medium-skin-tone',
    character: '🎅🏽'
  }, {
    slug: 'santa-claus-medium-dark-skin-tone',
    character: '🎅🏾'
  }, {
    slug: 'santa-claus-dark-skin-tone',
    character: '🎅🏿'
  }, {
    slug: 'e1-0-santa-claus-light-skin-tone',
    character: '🎅🏻'
  }, {
    slug: 'e1-0-santa-claus-medium-light-skin-tone',
    character: '🎅🏼'
  }, {
    slug: 'e1-0-santa-claus-medium-skin-tone',
    character: '🎅🏽'
  }, {
    slug: 'e1-0-santa-claus-medium-dark-skin-tone',
    character: '🎅🏾'
  }, {
    slug: 'e1-0-santa-claus-dark-skin-tone',
    character: '🎅🏿'
  }]
}, {
  slug: 'mrs-claus',
  character: '🤶',
  unicodeName: 'Mrs. Claus',
  codePoint: '1F936',
  group: 'people-body',
  subGroup: 'person-fantasy',
  variants: [{
    slug: 'mrs-claus-light-skin-tone',
    character: '🤶🏻'
  }, {
    slug: 'mrs-claus-medium-light-skin-tone',
    character: '🤶🏼'
  }, {
    slug: 'mrs-claus-medium-skin-tone',
    character: '🤶🏽'
  }, {
    slug: 'mrs-claus-medium-dark-skin-tone',
    character: '🤶🏾'
  }, {
    slug: 'mrs-claus-dark-skin-tone',
    character: '🤶🏿'
  }, {
    slug: 'e3-0-mrs-claus-light-skin-tone',
    character: '🤶🏻'
  }, {
    slug: 'e3-0-mrs-claus-medium-light-skin-tone',
    character: '🤶🏼'
  }, {
    slug: 'e3-0-mrs-claus-medium-skin-tone',
    character: '🤶🏽'
  }, {
    slug: 'e3-0-mrs-claus-medium-dark-skin-tone',
    character: '🤶🏾'
  }, {
    slug: 'e3-0-mrs-claus-dark-skin-tone',
    character: '🤶🏿'
  }]
}, {
  slug: 'mx-claus',
  character: '🧑‍🎄',
  unicodeName: 'mx claus',
  codePoint: '1F9D1 200D 1F384',
  group: 'people-body',
  subGroup: 'person-fantasy'
}, {
  slug: 'superhero',
  character: '🦸',
  unicodeName: 'superhero',
  codePoint: '1F9B8',
  group: 'people-body',
  subGroup: 'person-fantasy',
  variants: [{
    slug: 'superhero-light-skin-tone',
    character: '🦸🏻'
  }, {
    slug: 'superhero-medium-light-skin-tone',
    character: '🦸🏼'
  }, {
    slug: 'superhero-medium-skin-tone',
    character: '🦸🏽'
  }, {
    slug: 'superhero-medium-dark-skin-tone',
    character: '🦸🏾'
  }, {
    slug: 'superhero-dark-skin-tone',
    character: '🦸🏿'
  }, {
    slug: 'man-superhero',
    character: '🦸‍♂️'
  }, {
    slug: 'man-superhero-light-skin-tone',
    character: '🦸🏻‍♂️'
  }, {
    slug: 'man-superhero-medium-light-skin-tone',
    character: '🦸🏼‍♂️'
  }, {
    slug: 'man-superhero-medium-skin-tone',
    character: '🦸🏽‍♂️'
  }, {
    slug: 'man-superhero-medium-dark-skin-tone',
    character: '🦸🏾‍♂️'
  }, {
    slug: 'man-superhero-dark-skin-tone',
    character: '🦸🏿‍♂️'
  }, {
    slug: 'woman-superhero',
    character: '🦸‍♀️'
  }, {
    slug: 'woman-superhero-light-skin-tone',
    character: '🦸🏻‍♀️'
  }, {
    slug: 'woman-superhero-medium-light-skin-tone',
    character: '🦸🏼‍♀️'
  }, {
    slug: 'woman-superhero-medium-skin-tone',
    character: '🦸🏽‍♀️'
  }, {
    slug: 'woman-superhero-medium-dark-skin-tone',
    character: '🦸🏾‍♀️'
  }, {
    slug: 'woman-superhero-dark-skin-tone',
    character: '🦸🏿‍♀️'
  }, {
    slug: 'e11-0-superhero-light-skin-tone',
    character: '🦸🏻'
  }, {
    slug: 'e11-0-superhero-medium-light-skin-tone',
    character: '🦸🏼'
  }, {
    slug: 'e11-0-superhero-medium-skin-tone',
    character: '🦸🏽'
  }, {
    slug: 'e11-0-superhero-medium-dark-skin-tone',
    character: '🦸🏾'
  }, {
    slug: 'e11-0-superhero-dark-skin-tone',
    character: '🦸🏿'
  }, {
    slug: 'e11-0-man-superhero',
    character: '🦸‍♂️'
  }, {
    slug: 'e11-0-man-superhero-light-skin-tone',
    character: '🦸🏻‍♂️'
  }, {
    slug: 'e11-0-man-superhero-medium-light-skin-tone',
    character: '🦸🏼‍♂️'
  }, {
    slug: 'e11-0-man-superhero-medium-skin-tone',
    character: '🦸🏽‍♂️'
  }, {
    slug: 'e11-0-man-superhero-medium-dark-skin-tone',
    character: '🦸🏾‍♂️'
  }, {
    slug: 'e11-0-man-superhero-dark-skin-tone',
    character: '🦸🏿‍♂️'
  }, {
    slug: 'e11-0-woman-superhero',
    character: '🦸‍♀️'
  }, {
    slug: 'e11-0-woman-superhero-light-skin-tone',
    character: '🦸🏻‍♀️'
  }, {
    slug: 'e11-0-woman-superhero-medium-light-skin-tone',
    character: '🦸🏼‍♀️'
  }, {
    slug: 'e11-0-woman-superhero-medium-skin-tone',
    character: '🦸🏽‍♀️'
  }, {
    slug: 'e11-0-woman-superhero-medium-dark-skin-tone',
    character: '🦸🏾‍♀️'
  }, {
    slug: 'e11-0-woman-superhero-dark-skin-tone',
    character: '🦸🏿‍♀️'
  }]
}, {
  slug: 'supervillain',
  character: '🦹',
  unicodeName: 'supervillain',
  codePoint: '1F9B9',
  group: 'people-body',
  subGroup: 'person-fantasy',
  variants: [{
    slug: 'supervillain-light-skin-tone',
    character: '🦹🏻'
  }, {
    slug: 'supervillain-medium-light-skin-tone',
    character: '🦹🏼'
  }, {
    slug: 'supervillain-medium-skin-tone',
    character: '🦹🏽'
  }, {
    slug: 'supervillain-medium-dark-skin-tone',
    character: '🦹🏾'
  }, {
    slug: 'supervillain-dark-skin-tone',
    character: '🦹🏿'
  }, {
    slug: 'man-supervillain',
    character: '🦹‍♂️'
  }, {
    slug: 'man-supervillain-light-skin-tone',
    character: '🦹🏻‍♂️'
  }, {
    slug: 'man-supervillain-medium-light-skin-tone',
    character: '🦹🏼‍♂️'
  }, {
    slug: 'man-supervillain-medium-skin-tone',
    character: '🦹🏽‍♂️'
  }, {
    slug: 'man-supervillain-medium-dark-skin-tone',
    character: '🦹🏾‍♂️'
  }, {
    slug: 'man-supervillain-dark-skin-tone',
    character: '🦹🏿‍♂️'
  }, {
    slug: 'woman-supervillain',
    character: '🦹‍♀️'
  }, {
    slug: 'woman-supervillain-light-skin-tone',
    character: '🦹🏻‍♀️'
  }, {
    slug: 'woman-supervillain-medium-light-skin-tone',
    character: '🦹🏼‍♀️'
  }, {
    slug: 'woman-supervillain-medium-skin-tone',
    character: '🦹🏽‍♀️'
  }, {
    slug: 'woman-supervillain-medium-dark-skin-tone',
    character: '🦹🏾‍♀️'
  }, {
    slug: 'woman-supervillain-dark-skin-tone',
    character: '🦹🏿‍♀️'
  }, {
    slug: 'e11-0-supervillain-light-skin-tone',
    character: '🦹🏻'
  }, {
    slug: 'e11-0-supervillain-medium-light-skin-tone',
    character: '🦹🏼'
  }, {
    slug: 'e11-0-supervillain-medium-skin-tone',
    character: '🦹🏽'
  }, {
    slug: 'e11-0-supervillain-medium-dark-skin-tone',
    character: '🦹🏾'
  }, {
    slug: 'e11-0-supervillain-dark-skin-tone',
    character: '🦹🏿'
  }, {
    slug: 'e11-0-man-supervillain',
    character: '🦹‍♂️'
  }, {
    slug: 'e11-0-man-supervillain-light-skin-tone',
    character: '🦹🏻‍♂️'
  }, {
    slug: 'e11-0-man-supervillain-medium-light-skin-tone',
    character: '🦹🏼‍♂️'
  }, {
    slug: 'e11-0-man-supervillain-medium-skin-tone',
    character: '🦹🏽‍♂️'
  }, {
    slug: 'e11-0-man-supervillain-medium-dark-skin-tone',
    character: '🦹🏾‍♂️'
  }, {
    slug: 'e11-0-man-supervillain-dark-skin-tone',
    character: '🦹🏿‍♂️'
  }, {
    slug: 'e11-0-woman-supervillain',
    character: '🦹‍♀️'
  }, {
    slug: 'e11-0-woman-supervillain-light-skin-tone',
    character: '🦹🏻‍♀️'
  }, {
    slug: 'e11-0-woman-supervillain-medium-light-skin-tone',
    character: '🦹🏼‍♀️'
  }, {
    slug: 'e11-0-woman-supervillain-medium-skin-tone',
    character: '🦹🏽‍♀️'
  }, {
    slug: 'e11-0-woman-supervillain-medium-dark-skin-tone',
    character: '🦹🏾‍♀️'
  }, {
    slug: 'e11-0-woman-supervillain-dark-skin-tone',
    character: '🦹🏿‍♀️'
  }]
}, {
  slug: 'mage',
  character: '🧙',
  unicodeName: 'mage',
  codePoint: '1F9D9',
  group: 'people-body',
  subGroup: 'person-fantasy',
  variants: [{
    slug: 'mage-light-skin-tone',
    character: '🧙🏻'
  }, {
    slug: 'mage-medium-light-skin-tone',
    character: '🧙🏼'
  }, {
    slug: 'mage-medium-skin-tone',
    character: '🧙🏽'
  }, {
    slug: 'mage-medium-dark-skin-tone',
    character: '🧙🏾'
  }, {
    slug: 'mage-dark-skin-tone',
    character: '🧙🏿'
  }, {
    slug: 'man-mage',
    character: '🧙‍♂️'
  }, {
    slug: 'man-mage-light-skin-tone',
    character: '🧙🏻‍♂️'
  }, {
    slug: 'man-mage-medium-light-skin-tone',
    character: '🧙🏼‍♂️'
  }, {
    slug: 'man-mage-medium-skin-tone',
    character: '🧙🏽‍♂️'
  }, {
    slug: 'man-mage-medium-dark-skin-tone',
    character: '🧙🏾‍♂️'
  }, {
    slug: 'man-mage-dark-skin-tone',
    character: '🧙🏿‍♂️'
  }, {
    slug: 'woman-mage',
    character: '🧙‍♀️'
  }, {
    slug: 'woman-mage-light-skin-tone',
    character: '🧙🏻‍♀️'
  }, {
    slug: 'woman-mage-medium-light-skin-tone',
    character: '🧙🏼‍♀️'
  }, {
    slug: 'woman-mage-medium-skin-tone',
    character: '🧙🏽‍♀️'
  }, {
    slug: 'woman-mage-medium-dark-skin-tone',
    character: '🧙🏾‍♀️'
  }, {
    slug: 'woman-mage-dark-skin-tone',
    character: '🧙🏿‍♀️'
  }, {
    slug: 'e5-0-mage-light-skin-tone',
    character: '🧙🏻'
  }, {
    slug: 'e5-0-mage-medium-light-skin-tone',
    character: '🧙🏼'
  }, {
    slug: 'e5-0-mage-medium-skin-tone',
    character: '🧙🏽'
  }, {
    slug: 'e5-0-mage-medium-dark-skin-tone',
    character: '🧙🏾'
  }, {
    slug: 'e5-0-mage-dark-skin-tone',
    character: '🧙🏿'
  }, {
    slug: 'e5-0-man-mage',
    character: '🧙‍♂️'
  }, {
    slug: 'e5-0-man-mage-light-skin-tone',
    character: '🧙🏻‍♂️'
  }, {
    slug: 'e5-0-man-mage-medium-light-skin-tone',
    character: '🧙🏼‍♂️'
  }, {
    slug: 'e5-0-man-mage-medium-skin-tone',
    character: '🧙🏽‍♂️'
  }, {
    slug: 'e5-0-man-mage-medium-dark-skin-tone',
    character: '🧙🏾‍♂️'
  }, {
    slug: 'e5-0-man-mage-dark-skin-tone',
    character: '🧙🏿‍♂️'
  }, {
    slug: 'e5-0-woman-mage',
    character: '🧙‍♀️'
  }, {
    slug: 'e5-0-woman-mage-light-skin-tone',
    character: '🧙🏻‍♀️'
  }, {
    slug: 'e5-0-woman-mage-medium-light-skin-tone',
    character: '🧙🏼‍♀️'
  }, {
    slug: 'e5-0-woman-mage-medium-skin-tone',
    character: '🧙🏽‍♀️'
  }, {
    slug: 'e5-0-woman-mage-medium-dark-skin-tone',
    character: '🧙🏾‍♀️'
  }, {
    slug: 'e5-0-woman-mage-dark-skin-tone',
    character: '🧙🏿‍♀️'
  }]
}, {
  slug: 'fairy',
  character: '🧚',
  unicodeName: 'fairy',
  codePoint: '1F9DA',
  group: 'people-body',
  subGroup: 'person-fantasy',
  variants: [{
    slug: 'fairy-light-skin-tone',
    character: '🧚🏻'
  }, {
    slug: 'fairy-medium-light-skin-tone',
    character: '🧚🏼'
  }, {
    slug: 'fairy-medium-skin-tone',
    character: '🧚🏽'
  }, {
    slug: 'fairy-medium-dark-skin-tone',
    character: '🧚🏾'
  }, {
    slug: 'fairy-dark-skin-tone',
    character: '🧚🏿'
  }, {
    slug: 'man-fairy',
    character: '🧚‍♂️'
  }, {
    slug: 'man-fairy-light-skin-tone',
    character: '🧚🏻‍♂️'
  }, {
    slug: 'man-fairy-medium-light-skin-tone',
    character: '🧚🏼‍♂️'
  }, {
    slug: 'man-fairy-medium-skin-tone',
    character: '🧚🏽‍♂️'
  }, {
    slug: 'man-fairy-medium-dark-skin-tone',
    character: '🧚🏾‍♂️'
  }, {
    slug: 'man-fairy-dark-skin-tone',
    character: '🧚🏿‍♂️'
  }, {
    slug: 'woman-fairy',
    character: '🧚‍♀️'
  }, {
    slug: 'woman-fairy-light-skin-tone',
    character: '🧚🏻‍♀️'
  }, {
    slug: 'woman-fairy-medium-light-skin-tone',
    character: '🧚🏼‍♀️'
  }, {
    slug: 'woman-fairy-medium-skin-tone',
    character: '🧚🏽‍♀️'
  }, {
    slug: 'woman-fairy-medium-dark-skin-tone',
    character: '🧚🏾‍♀️'
  }, {
    slug: 'woman-fairy-dark-skin-tone',
    character: '🧚🏿‍♀️'
  }, {
    slug: 'e5-0-fairy-light-skin-tone',
    character: '🧚🏻'
  }, {
    slug: 'e5-0-fairy-medium-light-skin-tone',
    character: '🧚🏼'
  }, {
    slug: 'e5-0-fairy-medium-skin-tone',
    character: '🧚🏽'
  }, {
    slug: 'e5-0-fairy-medium-dark-skin-tone',
    character: '🧚🏾'
  }, {
    slug: 'e5-0-fairy-dark-skin-tone',
    character: '🧚🏿'
  }, {
    slug: 'e5-0-man-fairy',
    character: '🧚‍♂️'
  }, {
    slug: 'e5-0-man-fairy-light-skin-tone',
    character: '🧚🏻‍♂️'
  }, {
    slug: 'e5-0-man-fairy-medium-light-skin-tone',
    character: '🧚🏼‍♂️'
  }, {
    slug: 'e5-0-man-fairy-medium-skin-tone',
    character: '🧚🏽‍♂️'
  }, {
    slug: 'e5-0-man-fairy-medium-dark-skin-tone',
    character: '🧚🏾‍♂️'
  }, {
    slug: 'e5-0-man-fairy-dark-skin-tone',
    character: '🧚🏿‍♂️'
  }, {
    slug: 'e5-0-woman-fairy',
    character: '🧚‍♀️'
  }, {
    slug: 'e5-0-woman-fairy-light-skin-tone',
    character: '🧚🏻‍♀️'
  }, {
    slug: 'e5-0-woman-fairy-medium-light-skin-tone',
    character: '🧚🏼‍♀️'
  }, {
    slug: 'e5-0-woman-fairy-medium-skin-tone',
    character: '🧚🏽‍♀️'
  }, {
    slug: 'e5-0-woman-fairy-medium-dark-skin-tone',
    character: '🧚🏾‍♀️'
  }, {
    slug: 'e5-0-woman-fairy-dark-skin-tone',
    character: '🧚🏿‍♀️'
  }]
}, {
  slug: 'vampire',
  character: '🧛',
  unicodeName: 'vampire',
  codePoint: '1F9DB',
  group: 'people-body',
  subGroup: 'person-fantasy',
  variants: [{
    slug: 'vampire-light-skin-tone',
    character: '🧛🏻'
  }, {
    slug: 'vampire-medium-light-skin-tone',
    character: '🧛🏼'
  }, {
    slug: 'vampire-medium-skin-tone',
    character: '🧛🏽'
  }, {
    slug: 'vampire-medium-dark-skin-tone',
    character: '🧛🏾'
  }, {
    slug: 'vampire-dark-skin-tone',
    character: '🧛🏿'
  }, {
    slug: 'man-vampire',
    character: '🧛‍♂️'
  }, {
    slug: 'man-vampire-light-skin-tone',
    character: '🧛🏻‍♂️'
  }, {
    slug: 'man-vampire-medium-light-skin-tone',
    character: '🧛🏼‍♂️'
  }, {
    slug: 'man-vampire-medium-skin-tone',
    character: '🧛🏽‍♂️'
  }, {
    slug: 'man-vampire-medium-dark-skin-tone',
    character: '🧛🏾‍♂️'
  }, {
    slug: 'man-vampire-dark-skin-tone',
    character: '🧛🏿‍♂️'
  }, {
    slug: 'woman-vampire',
    character: '🧛‍♀️'
  }, {
    slug: 'woman-vampire-light-skin-tone',
    character: '🧛🏻‍♀️'
  }, {
    slug: 'woman-vampire-medium-light-skin-tone',
    character: '🧛🏼‍♀️'
  }, {
    slug: 'woman-vampire-medium-skin-tone',
    character: '🧛🏽‍♀️'
  }, {
    slug: 'woman-vampire-medium-dark-skin-tone',
    character: '🧛🏾‍♀️'
  }, {
    slug: 'woman-vampire-dark-skin-tone',
    character: '🧛🏿‍♀️'
  }, {
    slug: 'e5-0-vampire-light-skin-tone',
    character: '🧛🏻'
  }, {
    slug: 'e5-0-vampire-medium-light-skin-tone',
    character: '🧛🏼'
  }, {
    slug: 'e5-0-vampire-medium-skin-tone',
    character: '🧛🏽'
  }, {
    slug: 'e5-0-vampire-medium-dark-skin-tone',
    character: '🧛🏾'
  }, {
    slug: 'e5-0-vampire-dark-skin-tone',
    character: '🧛🏿'
  }, {
    slug: 'e5-0-man-vampire',
    character: '🧛‍♂️'
  }, {
    slug: 'e5-0-man-vampire-light-skin-tone',
    character: '🧛🏻‍♂️'
  }, {
    slug: 'e5-0-man-vampire-medium-light-skin-tone',
    character: '🧛🏼‍♂️'
  }, {
    slug: 'e5-0-man-vampire-medium-skin-tone',
    character: '🧛🏽‍♂️'
  }, {
    slug: 'e5-0-man-vampire-medium-dark-skin-tone',
    character: '🧛🏾‍♂️'
  }, {
    slug: 'e5-0-man-vampire-dark-skin-tone',
    character: '🧛🏿‍♂️'
  }, {
    slug: 'e5-0-woman-vampire',
    character: '🧛‍♀️'
  }, {
    slug: 'e5-0-woman-vampire-light-skin-tone',
    character: '🧛🏻‍♀️'
  }, {
    slug: 'e5-0-woman-vampire-medium-light-skin-tone',
    character: '🧛🏼‍♀️'
  }, {
    slug: 'e5-0-woman-vampire-medium-skin-tone',
    character: '🧛🏽‍♀️'
  }, {
    slug: 'e5-0-woman-vampire-medium-dark-skin-tone',
    character: '🧛🏾‍♀️'
  }, {
    slug: 'e5-0-woman-vampire-dark-skin-tone',
    character: '🧛🏿‍♀️'
  }]
}, {
  slug: 'merperson',
  character: '🧜',
  unicodeName: 'merperson',
  codePoint: '1F9DC',
  group: 'people-body',
  subGroup: 'person-fantasy',
  variants: [{
    slug: 'merperson-light-skin-tone',
    character: '🧜🏻'
  }, {
    slug: 'merperson-medium-light-skin-tone',
    character: '🧜🏼'
  }, {
    slug: 'merperson-medium-skin-tone',
    character: '🧜🏽'
  }, {
    slug: 'merperson-medium-dark-skin-tone',
    character: '🧜🏾'
  }, {
    slug: 'merperson-dark-skin-tone',
    character: '🧜🏿'
  }, {
    slug: 'merman',
    character: '🧜‍♂️'
  }, {
    slug: 'merman-light-skin-tone',
    character: '🧜🏻‍♂️'
  }, {
    slug: 'merman-medium-light-skin-tone',
    character: '🧜🏼‍♂️'
  }, {
    slug: 'merman-medium-skin-tone',
    character: '🧜🏽‍♂️'
  }, {
    slug: 'merman-medium-dark-skin-tone',
    character: '🧜🏾‍♂️'
  }, {
    slug: 'merman-dark-skin-tone',
    character: '🧜🏿‍♂️'
  }, {
    slug: 'mermaid',
    character: '🧜‍♀️'
  }, {
    slug: 'mermaid-light-skin-tone',
    character: '🧜🏻‍♀️'
  }, {
    slug: 'mermaid-medium-light-skin-tone',
    character: '🧜🏼‍♀️'
  }, {
    slug: 'mermaid-medium-skin-tone',
    character: '🧜🏽‍♀️'
  }, {
    slug: 'mermaid-medium-dark-skin-tone',
    character: '🧜🏾‍♀️'
  }, {
    slug: 'mermaid-dark-skin-tone',
    character: '🧜🏿‍♀️'
  }, {
    slug: 'e5-0-merperson-light-skin-tone',
    character: '🧜🏻'
  }, {
    slug: 'e5-0-merperson-medium-light-skin-tone',
    character: '🧜🏼'
  }, {
    slug: 'e5-0-merperson-medium-skin-tone',
    character: '🧜🏽'
  }, {
    slug: 'e5-0-merperson-medium-dark-skin-tone',
    character: '🧜🏾'
  }, {
    slug: 'e5-0-merperson-dark-skin-tone',
    character: '🧜🏿'
  }, {
    slug: 'e5-0-merman',
    character: '🧜‍♂️'
  }, {
    slug: 'e5-0-merman-light-skin-tone',
    character: '🧜🏻‍♂️'
  }, {
    slug: 'e5-0-merman-medium-light-skin-tone',
    character: '🧜🏼‍♂️'
  }, {
    slug: 'e5-0-merman-medium-skin-tone',
    character: '🧜🏽‍♂️'
  }, {
    slug: 'e5-0-merman-medium-dark-skin-tone',
    character: '🧜🏾‍♂️'
  }, {
    slug: 'e5-0-merman-dark-skin-tone',
    character: '🧜🏿‍♂️'
  }, {
    slug: 'e5-0-mermaid',
    character: '🧜‍♀️'
  }, {
    slug: 'e5-0-mermaid-light-skin-tone',
    character: '🧜🏻‍♀️'
  }, {
    slug: 'e5-0-mermaid-medium-light-skin-tone',
    character: '🧜🏼‍♀️'
  }, {
    slug: 'e5-0-mermaid-medium-skin-tone',
    character: '🧜🏽‍♀️'
  }, {
    slug: 'e5-0-mermaid-medium-dark-skin-tone',
    character: '🧜🏾‍♀️'
  }, {
    slug: 'e5-0-mermaid-dark-skin-tone',
    character: '🧜🏿‍♀️'
  }]
}, {
  slug: 'elf',
  character: '🧝',
  unicodeName: 'elf',
  codePoint: '1F9DD',
  group: 'people-body',
  subGroup: 'person-fantasy',
  variants: [{
    slug: 'elf-light-skin-tone',
    character: '🧝🏻'
  }, {
    slug: 'elf-medium-light-skin-tone',
    character: '🧝🏼'
  }, {
    slug: 'elf-medium-skin-tone',
    character: '🧝🏽'
  }, {
    slug: 'elf-medium-dark-skin-tone',
    character: '🧝🏾'
  }, {
    slug: 'elf-dark-skin-tone',
    character: '🧝🏿'
  }, {
    slug: 'man-elf',
    character: '🧝‍♂️'
  }, {
    slug: 'man-elf-light-skin-tone',
    character: '🧝🏻‍♂️'
  }, {
    slug: 'man-elf-medium-light-skin-tone',
    character: '🧝🏼‍♂️'
  }, {
    slug: 'man-elf-medium-skin-tone',
    character: '🧝🏽‍♂️'
  }, {
    slug: 'man-elf-medium-dark-skin-tone',
    character: '🧝🏾‍♂️'
  }, {
    slug: 'man-elf-dark-skin-tone',
    character: '🧝🏿‍♂️'
  }, {
    slug: 'woman-elf',
    character: '🧝‍♀️'
  }, {
    slug: 'woman-elf-light-skin-tone',
    character: '🧝🏻‍♀️'
  }, {
    slug: 'woman-elf-medium-light-skin-tone',
    character: '🧝🏼‍♀️'
  }, {
    slug: 'woman-elf-medium-skin-tone',
    character: '🧝🏽‍♀️'
  }, {
    slug: 'woman-elf-medium-dark-skin-tone',
    character: '🧝🏾‍♀️'
  }, {
    slug: 'woman-elf-dark-skin-tone',
    character: '🧝🏿‍♀️'
  }, {
    slug: 'e5-0-elf-light-skin-tone',
    character: '🧝🏻'
  }, {
    slug: 'e5-0-elf-medium-light-skin-tone',
    character: '🧝🏼'
  }, {
    slug: 'e5-0-elf-medium-skin-tone',
    character: '🧝🏽'
  }, {
    slug: 'e5-0-elf-medium-dark-skin-tone',
    character: '🧝🏾'
  }, {
    slug: 'e5-0-elf-dark-skin-tone',
    character: '🧝🏿'
  }, {
    slug: 'e5-0-man-elf',
    character: '🧝‍♂️'
  }, {
    slug: 'e5-0-man-elf-light-skin-tone',
    character: '🧝🏻‍♂️'
  }, {
    slug: 'e5-0-man-elf-medium-light-skin-tone',
    character: '🧝🏼‍♂️'
  }, {
    slug: 'e5-0-man-elf-medium-skin-tone',
    character: '🧝🏽‍♂️'
  }, {
    slug: 'e5-0-man-elf-medium-dark-skin-tone',
    character: '🧝🏾‍♂️'
  }, {
    slug: 'e5-0-man-elf-dark-skin-tone',
    character: '🧝🏿‍♂️'
  }, {
    slug: 'e5-0-woman-elf',
    character: '🧝‍♀️'
  }, {
    slug: 'e5-0-woman-elf-light-skin-tone',
    character: '🧝🏻‍♀️'
  }, {
    slug: 'e5-0-woman-elf-medium-light-skin-tone',
    character: '🧝🏼‍♀️'
  }, {
    slug: 'e5-0-woman-elf-medium-skin-tone',
    character: '🧝🏽‍♀️'
  }, {
    slug: 'e5-0-woman-elf-medium-dark-skin-tone',
    character: '🧝🏾‍♀️'
  }, {
    slug: 'e5-0-woman-elf-dark-skin-tone',
    character: '🧝🏿‍♀️'
  }]
}, {
  slug: 'genie',
  character: '🧞',
  unicodeName: 'genie',
  codePoint: '1F9DE',
  group: 'people-body',
  subGroup: 'person-fantasy',
  variants: [{
    slug: 'man-genie',
    character: '🧞‍♂️'
  }, {
    slug: 'woman-genie',
    character: '🧞‍♀️'
  }, {
    slug: 'e5-0-man-genie',
    character: '🧞‍♂️'
  }, {
    slug: 'e5-0-woman-genie',
    character: '🧞‍♀️'
  }]
}, {
  slug: 'zombie',
  character: '🧟',
  unicodeName: 'zombie',
  codePoint: '1F9DF',
  group: 'people-body',
  subGroup: 'person-fantasy',
  variants: [{
    slug: 'man-zombie',
    character: '🧟‍♂️'
  }, {
    slug: 'woman-zombie',
    character: '🧟‍♀️'
  }, {
    slug: 'e5-0-man-zombie',
    character: '🧟‍♂️'
  }, {
    slug: 'e5-0-woman-zombie',
    character: '🧟‍♀️'
  }]
}, {
  slug: 'person-getting-massage',
  character: '💆',
  unicodeName: 'person getting massage',
  codePoint: '1F486',
  group: 'people-body',
  subGroup: 'person-activity',
  variants: [{
    slug: 'person-getting-massage-light-skin-tone',
    character: '💆🏻'
  }, {
    slug: 'person-getting-massage-medium-light-skin-tone',
    character: '💆🏼'
  }, {
    slug: 'person-getting-massage-medium-skin-tone',
    character: '💆🏽'
  }, {
    slug: 'person-getting-massage-medium-dark-skin-tone',
    character: '💆🏾'
  }, {
    slug: 'person-getting-massage-dark-skin-tone',
    character: '💆🏿'
  }, {
    slug: 'man-getting-massage',
    character: '💆‍♂️'
  }, {
    slug: 'man-getting-massage-light-skin-tone',
    character: '💆🏻‍♂️'
  }, {
    slug: 'man-getting-massage-medium-light-skin-tone',
    character: '💆🏼‍♂️'
  }, {
    slug: 'man-getting-massage-medium-skin-tone',
    character: '💆🏽‍♂️'
  }, {
    slug: 'man-getting-massage-medium-dark-skin-tone',
    character: '💆🏾‍♂️'
  }, {
    slug: 'man-getting-massage-dark-skin-tone',
    character: '💆🏿‍♂️'
  }, {
    slug: 'woman-getting-massage',
    character: '💆‍♀️'
  }, {
    slug: 'woman-getting-massage-light-skin-tone',
    character: '💆🏻‍♀️'
  }, {
    slug: 'woman-getting-massage-medium-light-skin-tone',
    character: '💆🏼‍♀️'
  }, {
    slug: 'woman-getting-massage-medium-skin-tone',
    character: '💆🏽‍♀️'
  }, {
    slug: 'woman-getting-massage-medium-dark-skin-tone',
    character: '💆🏾‍♀️'
  }, {
    slug: 'woman-getting-massage-dark-skin-tone',
    character: '💆🏿‍♀️'
  }, {
    slug: 'e1-0-person-getting-massage-light-skin-tone',
    character: '💆🏻'
  }, {
    slug: 'e1-0-person-getting-massage-medium-light-skin-tone',
    character: '💆🏼'
  }, {
    slug: 'e1-0-person-getting-massage-medium-skin-tone',
    character: '💆🏽'
  }, {
    slug: 'e1-0-person-getting-massage-medium-dark-skin-tone',
    character: '💆🏾'
  }, {
    slug: 'e1-0-person-getting-massage-dark-skin-tone',
    character: '💆🏿'
  }, {
    slug: 'e4-0-man-getting-massage',
    character: '💆‍♂️'
  }, {
    slug: 'e4-0-man-getting-massage-light-skin-tone',
    character: '💆🏻‍♂️'
  }, {
    slug: 'e4-0-man-getting-massage-medium-light-skin-tone',
    character: '💆🏼‍♂️'
  }, {
    slug: 'e4-0-man-getting-massage-medium-skin-tone',
    character: '💆🏽‍♂️'
  }, {
    slug: 'e4-0-man-getting-massage-medium-dark-skin-tone',
    character: '💆🏾‍♂️'
  }, {
    slug: 'e4-0-man-getting-massage-dark-skin-tone',
    character: '💆🏿‍♂️'
  }, {
    slug: 'e4-0-woman-getting-massage',
    character: '💆‍♀️'
  }, {
    slug: 'e4-0-woman-getting-massage-light-skin-tone',
    character: '💆🏻‍♀️'
  }, {
    slug: 'e4-0-woman-getting-massage-medium-light-skin-tone',
    character: '💆🏼‍♀️'
  }, {
    slug: 'e4-0-woman-getting-massage-medium-skin-tone',
    character: '💆🏽‍♀️'
  }, {
    slug: 'e4-0-woman-getting-massage-medium-dark-skin-tone',
    character: '💆🏾‍♀️'
  }, {
    slug: 'e4-0-woman-getting-massage-dark-skin-tone',
    character: '💆🏿‍♀️'
  }]
}, {
  slug: 'person-getting-haircut',
  character: '💇',
  unicodeName: 'person getting haircut',
  codePoint: '1F487',
  group: 'people-body',
  subGroup: 'person-activity',
  variants: [{
    slug: 'person-getting-haircut-light-skin-tone',
    character: '💇🏻'
  }, {
    slug: 'person-getting-haircut-medium-light-skin-tone',
    character: '💇🏼'
  }, {
    slug: 'person-getting-haircut-medium-skin-tone',
    character: '💇🏽'
  }, {
    slug: 'person-getting-haircut-medium-dark-skin-tone',
    character: '💇🏾'
  }, {
    slug: 'person-getting-haircut-dark-skin-tone',
    character: '💇🏿'
  }, {
    slug: 'man-getting-haircut',
    character: '💇‍♂️'
  }, {
    slug: 'man-getting-haircut-light-skin-tone',
    character: '💇🏻‍♂️'
  }, {
    slug: 'man-getting-haircut-medium-light-skin-tone',
    character: '💇🏼‍♂️'
  }, {
    slug: 'man-getting-haircut-medium-skin-tone',
    character: '💇🏽‍♂️'
  }, {
    slug: 'man-getting-haircut-medium-dark-skin-tone',
    character: '💇🏾‍♂️'
  }, {
    slug: 'man-getting-haircut-dark-skin-tone',
    character: '💇🏿‍♂️'
  }, {
    slug: 'woman-getting-haircut',
    character: '💇‍♀️'
  }, {
    slug: 'woman-getting-haircut-light-skin-tone',
    character: '💇🏻‍♀️'
  }, {
    slug: 'woman-getting-haircut-medium-light-skin-tone',
    character: '💇🏼‍♀️'
  }, {
    slug: 'woman-getting-haircut-medium-skin-tone',
    character: '💇🏽‍♀️'
  }, {
    slug: 'woman-getting-haircut-medium-dark-skin-tone',
    character: '💇🏾‍♀️'
  }, {
    slug: 'woman-getting-haircut-dark-skin-tone',
    character: '💇🏿‍♀️'
  }, {
    slug: 'e1-0-person-getting-haircut-light-skin-tone',
    character: '💇🏻'
  }, {
    slug: 'e1-0-person-getting-haircut-medium-light-skin-tone',
    character: '💇🏼'
  }, {
    slug: 'e1-0-person-getting-haircut-medium-skin-tone',
    character: '💇🏽'
  }, {
    slug: 'e1-0-person-getting-haircut-medium-dark-skin-tone',
    character: '💇🏾'
  }, {
    slug: 'e1-0-person-getting-haircut-dark-skin-tone',
    character: '💇🏿'
  }, {
    slug: 'e4-0-man-getting-haircut',
    character: '💇‍♂️'
  }, {
    slug: 'e4-0-man-getting-haircut-light-skin-tone',
    character: '💇🏻‍♂️'
  }, {
    slug: 'e4-0-man-getting-haircut-medium-light-skin-tone',
    character: '💇🏼‍♂️'
  }, {
    slug: 'e4-0-man-getting-haircut-medium-skin-tone',
    character: '💇🏽‍♂️'
  }, {
    slug: 'e4-0-man-getting-haircut-medium-dark-skin-tone',
    character: '💇🏾‍♂️'
  }, {
    slug: 'e4-0-man-getting-haircut-dark-skin-tone',
    character: '💇🏿‍♂️'
  }, {
    slug: 'e4-0-woman-getting-haircut',
    character: '💇‍♀️'
  }, {
    slug: 'e4-0-woman-getting-haircut-light-skin-tone',
    character: '💇🏻‍♀️'
  }, {
    slug: 'e4-0-woman-getting-haircut-medium-light-skin-tone',
    character: '💇🏼‍♀️'
  }, {
    slug: 'e4-0-woman-getting-haircut-medium-skin-tone',
    character: '💇🏽‍♀️'
  }, {
    slug: 'e4-0-woman-getting-haircut-medium-dark-skin-tone',
    character: '💇🏾‍♀️'
  }, {
    slug: 'e4-0-woman-getting-haircut-dark-skin-tone',
    character: '💇🏿‍♀️'
  }]
}, {
  slug: 'person-walking',
  character: '🚶',
  unicodeName: 'person walking',
  codePoint: '1F6B6',
  group: 'people-body',
  subGroup: 'person-activity',
  variants: [{
    slug: 'person-walking-light-skin-tone',
    character: '🚶🏻'
  }, {
    slug: 'person-walking-medium-light-skin-tone',
    character: '🚶🏼'
  }, {
    slug: 'person-walking-medium-skin-tone',
    character: '🚶🏽'
  }, {
    slug: 'person-walking-medium-dark-skin-tone',
    character: '🚶🏾'
  }, {
    slug: 'person-walking-dark-skin-tone',
    character: '🚶🏿'
  }, {
    slug: 'man-walking',
    character: '🚶‍♂️'
  }, {
    slug: 'man-walking-light-skin-tone',
    character: '🚶🏻‍♂️'
  }, {
    slug: 'man-walking-medium-light-skin-tone',
    character: '🚶🏼‍♂️'
  }, {
    slug: 'man-walking-medium-skin-tone',
    character: '🚶🏽‍♂️'
  }, {
    slug: 'man-walking-medium-dark-skin-tone',
    character: '🚶🏾‍♂️'
  }, {
    slug: 'man-walking-dark-skin-tone',
    character: '🚶🏿‍♂️'
  }, {
    slug: 'woman-walking',
    character: '🚶‍♀️'
  }, {
    slug: 'woman-walking-light-skin-tone',
    character: '🚶🏻‍♀️'
  }, {
    slug: 'woman-walking-medium-light-skin-tone',
    character: '🚶🏼‍♀️'
  }, {
    slug: 'woman-walking-medium-skin-tone',
    character: '🚶🏽‍♀️'
  }, {
    slug: 'woman-walking-medium-dark-skin-tone',
    character: '🚶🏾‍♀️'
  }, {
    slug: 'woman-walking-dark-skin-tone',
    character: '🚶🏿‍♀️'
  }, {
    slug: 'e1-0-person-walking-light-skin-tone',
    character: '🚶🏻'
  }, {
    slug: 'e1-0-person-walking-medium-light-skin-tone',
    character: '🚶🏼'
  }, {
    slug: 'e1-0-person-walking-medium-skin-tone',
    character: '🚶🏽'
  }, {
    slug: 'e1-0-person-walking-medium-dark-skin-tone',
    character: '🚶🏾'
  }, {
    slug: 'e1-0-person-walking-dark-skin-tone',
    character: '🚶🏿'
  }, {
    slug: 'e4-0-man-walking',
    character: '🚶‍♂️'
  }, {
    slug: 'e4-0-man-walking-light-skin-tone',
    character: '🚶🏻‍♂️'
  }, {
    slug: 'e4-0-man-walking-medium-light-skin-tone',
    character: '🚶🏼‍♂️'
  }, {
    slug: 'e4-0-man-walking-medium-skin-tone',
    character: '🚶🏽‍♂️'
  }, {
    slug: 'e4-0-man-walking-medium-dark-skin-tone',
    character: '🚶🏾‍♂️'
  }, {
    slug: 'e4-0-man-walking-dark-skin-tone',
    character: '🚶🏿‍♂️'
  }, {
    slug: 'e4-0-woman-walking',
    character: '🚶‍♀️'
  }, {
    slug: 'e4-0-woman-walking-light-skin-tone',
    character: '🚶🏻‍♀️'
  }, {
    slug: 'e4-0-woman-walking-medium-light-skin-tone',
    character: '🚶🏼‍♀️'
  }, {
    slug: 'e4-0-woman-walking-medium-skin-tone',
    character: '🚶🏽‍♀️'
  }, {
    slug: 'e4-0-woman-walking-medium-dark-skin-tone',
    character: '🚶🏾‍♀️'
  }, {
    slug: 'e4-0-woman-walking-dark-skin-tone',
    character: '🚶🏿‍♀️'
  }]
}, {
  slug: 'person-standing',
  character: '🧍',
  unicodeName: 'person standing',
  codePoint: '1F9CD',
  group: 'people-body',
  subGroup: 'person-activity',
  variants: [{
    slug: 'person-standing-light-skin-tone',
    character: '🧍🏻'
  }, {
    slug: 'person-standing-medium-light-skin-tone',
    character: '🧍🏼'
  }, {
    slug: 'person-standing-medium-skin-tone',
    character: '🧍🏽'
  }, {
    slug: 'person-standing-medium-dark-skin-tone',
    character: '🧍🏾'
  }, {
    slug: 'person-standing-dark-skin-tone',
    character: '🧍🏿'
  }, {
    slug: 'man-standing',
    character: '🧍‍♂️'
  }, {
    slug: 'man-standing-light-skin-tone',
    character: '🧍🏻‍♂️'
  }, {
    slug: 'man-standing-medium-light-skin-tone',
    character: '🧍🏼‍♂️'
  }, {
    slug: 'man-standing-medium-skin-tone',
    character: '🧍🏽‍♂️'
  }, {
    slug: 'man-standing-medium-dark-skin-tone',
    character: '🧍🏾‍♂️'
  }, {
    slug: 'man-standing-dark-skin-tone',
    character: '🧍🏿‍♂️'
  }, {
    slug: 'woman-standing',
    character: '🧍‍♀️'
  }, {
    slug: 'woman-standing-light-skin-tone',
    character: '🧍🏻‍♀️'
  }, {
    slug: 'woman-standing-medium-light-skin-tone',
    character: '🧍🏼‍♀️'
  }, {
    slug: 'woman-standing-medium-skin-tone',
    character: '🧍🏽‍♀️'
  }, {
    slug: 'woman-standing-medium-dark-skin-tone',
    character: '🧍🏾‍♀️'
  }, {
    slug: 'woman-standing-dark-skin-tone',
    character: '🧍🏿‍♀️'
  }, {
    slug: 'e12-0-person-standing-light-skin-tone',
    character: '🧍🏻'
  }, {
    slug: 'e12-0-person-standing-medium-light-skin-tone',
    character: '🧍🏼'
  }, {
    slug: 'e12-0-person-standing-medium-skin-tone',
    character: '🧍🏽'
  }, {
    slug: 'e12-0-person-standing-medium-dark-skin-tone',
    character: '🧍🏾'
  }, {
    slug: 'e12-0-person-standing-dark-skin-tone',
    character: '🧍🏿'
  }, {
    slug: 'e12-0-man-standing',
    character: '🧍‍♂️'
  }, {
    slug: 'e12-0-man-standing-light-skin-tone',
    character: '🧍🏻‍♂️'
  }, {
    slug: 'e12-0-man-standing-medium-light-skin-tone',
    character: '🧍🏼‍♂️'
  }, {
    slug: 'e12-0-man-standing-medium-skin-tone',
    character: '🧍🏽‍♂️'
  }, {
    slug: 'e12-0-man-standing-medium-dark-skin-tone',
    character: '🧍🏾‍♂️'
  }, {
    slug: 'e12-0-man-standing-dark-skin-tone',
    character: '🧍🏿‍♂️'
  }, {
    slug: 'e12-0-woman-standing',
    character: '🧍‍♀️'
  }, {
    slug: 'e12-0-woman-standing-light-skin-tone',
    character: '🧍🏻‍♀️'
  }, {
    slug: 'e12-0-woman-standing-medium-light-skin-tone',
    character: '🧍🏼‍♀️'
  }, {
    slug: 'e12-0-woman-standing-medium-skin-tone',
    character: '🧍🏽‍♀️'
  }, {
    slug: 'e12-0-woman-standing-medium-dark-skin-tone',
    character: '🧍🏾‍♀️'
  }, {
    slug: 'e12-0-woman-standing-dark-skin-tone',
    character: '🧍🏿‍♀️'
  }]
}, {
  slug: 'person-kneeling',
  character: '🧎',
  unicodeName: 'person kneeling',
  codePoint: '1F9CE',
  group: 'people-body',
  subGroup: 'person-activity',
  variants: [{
    slug: 'person-kneeling-light-skin-tone',
    character: '🧎🏻'
  }, {
    slug: 'person-kneeling-medium-light-skin-tone',
    character: '🧎🏼'
  }, {
    slug: 'person-kneeling-medium-skin-tone',
    character: '🧎🏽'
  }, {
    slug: 'person-kneeling-medium-dark-skin-tone',
    character: '🧎🏾'
  }, {
    slug: 'person-kneeling-dark-skin-tone',
    character: '🧎🏿'
  }, {
    slug: 'man-kneeling',
    character: '🧎‍♂️'
  }, {
    slug: 'man-kneeling-light-skin-tone',
    character: '🧎🏻‍♂️'
  }, {
    slug: 'man-kneeling-medium-light-skin-tone',
    character: '🧎🏼‍♂️'
  }, {
    slug: 'man-kneeling-medium-skin-tone',
    character: '🧎🏽‍♂️'
  }, {
    slug: 'man-kneeling-medium-dark-skin-tone',
    character: '🧎🏾‍♂️'
  }, {
    slug: 'man-kneeling-dark-skin-tone',
    character: '🧎🏿‍♂️'
  }, {
    slug: 'woman-kneeling',
    character: '🧎‍♀️'
  }, {
    slug: 'woman-kneeling-light-skin-tone',
    character: '🧎🏻‍♀️'
  }, {
    slug: 'woman-kneeling-medium-light-skin-tone',
    character: '🧎🏼‍♀️'
  }, {
    slug: 'woman-kneeling-medium-skin-tone',
    character: '🧎🏽‍♀️'
  }, {
    slug: 'woman-kneeling-medium-dark-skin-tone',
    character: '🧎🏾‍♀️'
  }, {
    slug: 'woman-kneeling-dark-skin-tone',
    character: '🧎🏿‍♀️'
  }, {
    slug: 'e12-0-person-kneeling-light-skin-tone',
    character: '🧎🏻'
  }, {
    slug: 'e12-0-person-kneeling-medium-light-skin-tone',
    character: '🧎🏼'
  }, {
    slug: 'e12-0-person-kneeling-medium-skin-tone',
    character: '🧎🏽'
  }, {
    slug: 'e12-0-person-kneeling-medium-dark-skin-tone',
    character: '🧎🏾'
  }, {
    slug: 'e12-0-person-kneeling-dark-skin-tone',
    character: '🧎🏿'
  }, {
    slug: 'e12-0-man-kneeling',
    character: '🧎‍♂️'
  }, {
    slug: 'e12-0-man-kneeling-light-skin-tone',
    character: '🧎🏻‍♂️'
  }, {
    slug: 'e12-0-man-kneeling-medium-light-skin-tone',
    character: '🧎🏼‍♂️'
  }, {
    slug: 'e12-0-man-kneeling-medium-skin-tone',
    character: '🧎🏽‍♂️'
  }, {
    slug: 'e12-0-man-kneeling-medium-dark-skin-tone',
    character: '🧎🏾‍♂️'
  }, {
    slug: 'e12-0-man-kneeling-dark-skin-tone',
    character: '🧎🏿‍♂️'
  }, {
    slug: 'e12-0-woman-kneeling',
    character: '🧎‍♀️'
  }, {
    slug: 'e12-0-woman-kneeling-light-skin-tone',
    character: '🧎🏻‍♀️'
  }, {
    slug: 'e12-0-woman-kneeling-medium-light-skin-tone',
    character: '🧎🏼‍♀️'
  }, {
    slug: 'e12-0-woman-kneeling-medium-skin-tone',
    character: '🧎🏽‍♀️'
  }, {
    slug: 'e12-0-woman-kneeling-medium-dark-skin-tone',
    character: '🧎🏾‍♀️'
  }, {
    slug: 'e12-0-woman-kneeling-dark-skin-tone',
    character: '🧎🏿‍♀️'
  }]
}, {
  slug: 'person-with-white-cane',
  character: '🧑‍🦯',
  unicodeName: 'person with white cane',
  codePoint: '1F9D1 200D 1F9AF',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'man-with-white-cane',
  character: '👨‍🦯',
  unicodeName: 'man with white cane',
  codePoint: '1F468 200D 1F9AF',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'woman-with-white-cane',
  character: '👩‍🦯',
  unicodeName: 'woman with white cane',
  codePoint: '1F469 200D 1F9AF',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'person-in-motorized-wheelchair',
  character: '🧑‍🦼',
  unicodeName: 'person in motorized wheelchair',
  codePoint: '1F9D1 200D 1F9BC',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'man-in-motorized-wheelchair',
  character: '👨‍🦼',
  unicodeName: 'man in motorized wheelchair',
  codePoint: '1F468 200D 1F9BC',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'woman-in-motorized-wheelchair',
  character: '👩‍🦼',
  unicodeName: 'woman in motorized wheelchair',
  codePoint: '1F469 200D 1F9BC',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'person-in-manual-wheelchair',
  character: '🧑‍🦽',
  unicodeName: 'person in manual wheelchair',
  codePoint: '1F9D1 200D 1F9BD',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'man-in-manual-wheelchair',
  character: '👨‍🦽',
  unicodeName: 'man in manual wheelchair',
  codePoint: '1F468 200D 1F9BD',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'woman-in-manual-wheelchair',
  character: '👩‍🦽',
  unicodeName: 'woman in manual wheelchair',
  codePoint: '1F469 200D 1F9BD',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'person-running',
  character: '🏃',
  unicodeName: 'person running',
  codePoint: '1F3C3',
  group: 'people-body',
  subGroup: 'person-activity',
  variants: [{
    slug: 'person-running-light-skin-tone',
    character: '🏃🏻'
  }, {
    slug: 'person-running-medium-light-skin-tone',
    character: '🏃🏼'
  }, {
    slug: 'person-running-medium-skin-tone',
    character: '🏃🏽'
  }, {
    slug: 'person-running-medium-dark-skin-tone',
    character: '🏃🏾'
  }, {
    slug: 'person-running-dark-skin-tone',
    character: '🏃🏿'
  }, {
    slug: 'man-running',
    character: '🏃‍♂️'
  }, {
    slug: 'man-running-light-skin-tone',
    character: '🏃🏻‍♂️'
  }, {
    slug: 'man-running-medium-light-skin-tone',
    character: '🏃🏼‍♂️'
  }, {
    slug: 'man-running-medium-skin-tone',
    character: '🏃🏽‍♂️'
  }, {
    slug: 'man-running-medium-dark-skin-tone',
    character: '🏃🏾‍♂️'
  }, {
    slug: 'man-running-dark-skin-tone',
    character: '🏃🏿‍♂️'
  }, {
    slug: 'woman-running',
    character: '🏃‍♀️'
  }, {
    slug: 'woman-running-light-skin-tone',
    character: '🏃🏻‍♀️'
  }, {
    slug: 'woman-running-medium-light-skin-tone',
    character: '🏃🏼‍♀️'
  }, {
    slug: 'woman-running-medium-skin-tone',
    character: '🏃🏽‍♀️'
  }, {
    slug: 'woman-running-medium-dark-skin-tone',
    character: '🏃🏾‍♀️'
  }, {
    slug: 'woman-running-dark-skin-tone',
    character: '🏃🏿‍♀️'
  }, {
    slug: 'e1-0-person-running-light-skin-tone',
    character: '🏃🏻'
  }, {
    slug: 'e1-0-person-running-medium-light-skin-tone',
    character: '🏃🏼'
  }, {
    slug: 'e1-0-person-running-medium-skin-tone',
    character: '🏃🏽'
  }, {
    slug: 'e1-0-person-running-medium-dark-skin-tone',
    character: '🏃🏾'
  }, {
    slug: 'e1-0-person-running-dark-skin-tone',
    character: '🏃🏿'
  }, {
    slug: 'e4-0-man-running',
    character: '🏃‍♂️'
  }, {
    slug: 'e4-0-man-running-light-skin-tone',
    character: '🏃🏻‍♂️'
  }, {
    slug: 'e4-0-man-running-medium-light-skin-tone',
    character: '🏃🏼‍♂️'
  }, {
    slug: 'e4-0-man-running-medium-skin-tone',
    character: '🏃🏽‍♂️'
  }, {
    slug: 'e4-0-man-running-medium-dark-skin-tone',
    character: '🏃🏾‍♂️'
  }, {
    slug: 'e4-0-man-running-dark-skin-tone',
    character: '🏃🏿‍♂️'
  }, {
    slug: 'e4-0-woman-running',
    character: '🏃‍♀️'
  }, {
    slug: 'e4-0-woman-running-light-skin-tone',
    character: '🏃🏻‍♀️'
  }, {
    slug: 'e4-0-woman-running-medium-light-skin-tone',
    character: '🏃🏼‍♀️'
  }, {
    slug: 'e4-0-woman-running-medium-skin-tone',
    character: '🏃🏽‍♀️'
  }, {
    slug: 'e4-0-woman-running-medium-dark-skin-tone',
    character: '🏃🏾‍♀️'
  }, {
    slug: 'e4-0-woman-running-dark-skin-tone',
    character: '🏃🏿‍♀️'
  }]
}, {
  slug: 'woman-dancing',
  character: '💃',
  unicodeName: 'woman dancing',
  codePoint: '1F483',
  group: 'people-body',
  subGroup: 'person-activity',
  variants: [{
    slug: 'woman-dancing-light-skin-tone',
    character: '💃🏻'
  }, {
    slug: 'woman-dancing-medium-light-skin-tone',
    character: '💃🏼'
  }, {
    slug: 'woman-dancing-medium-skin-tone',
    character: '💃🏽'
  }, {
    slug: 'woman-dancing-medium-dark-skin-tone',
    character: '💃🏾'
  }, {
    slug: 'woman-dancing-dark-skin-tone',
    character: '💃🏿'
  }, {
    slug: 'e1-0-woman-dancing-light-skin-tone',
    character: '💃🏻'
  }, {
    slug: 'e1-0-woman-dancing-medium-light-skin-tone',
    character: '💃🏼'
  }, {
    slug: 'e1-0-woman-dancing-medium-skin-tone',
    character: '💃🏽'
  }, {
    slug: 'e1-0-woman-dancing-medium-dark-skin-tone',
    character: '💃🏾'
  }, {
    slug: 'e1-0-woman-dancing-dark-skin-tone',
    character: '💃🏿'
  }]
}, {
  slug: 'man-dancing',
  character: '🕺',
  unicodeName: 'man dancing',
  codePoint: '1F57A',
  group: 'people-body',
  subGroup: 'person-activity',
  variants: [{
    slug: 'man-dancing-light-skin-tone',
    character: '🕺🏻'
  }, {
    slug: 'man-dancing-medium-light-skin-tone',
    character: '🕺🏼'
  }, {
    slug: 'man-dancing-medium-skin-tone',
    character: '🕺🏽'
  }, {
    slug: 'man-dancing-medium-dark-skin-tone',
    character: '🕺🏾'
  }, {
    slug: 'man-dancing-dark-skin-tone',
    character: '🕺🏿'
  }, {
    slug: 'e3-0-man-dancing-light-skin-tone',
    character: '🕺🏻'
  }, {
    slug: 'e3-0-man-dancing-medium-light-skin-tone',
    character: '🕺🏼'
  }, {
    slug: 'e3-0-man-dancing-medium-skin-tone',
    character: '🕺🏽'
  }, {
    slug: 'e3-0-man-dancing-medium-dark-skin-tone',
    character: '🕺🏾'
  }, {
    slug: 'e3-0-man-dancing-dark-skin-tone',
    character: '🕺🏿'
  }]
}, {
  slug: 'person-in-suit-levitating',
  character: '🕴️',
  unicodeName: 'person in suit levitating',
  codePoint: '1F574 FE0F',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'person-in-suit-levitating-light-skin-tone',
  character: '🕴🏻',
  unicodeName: 'person in suit levitating: light skin tone',
  codePoint: '1F574 1F3FB',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'person-in-suit-levitating-medium-light-skin-tone',
  character: '🕴🏼',
  unicodeName: 'person in suit levitating: medium-light skin tone',
  codePoint: '1F574 1F3FC',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'person-in-suit-levitating-medium-skin-tone',
  character: '🕴🏽',
  unicodeName: 'person in suit levitating: medium skin tone',
  codePoint: '1F574 1F3FD',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'person-in-suit-levitating-medium-dark-skin-tone',
  character: '🕴🏾',
  unicodeName: 'person in suit levitating: medium-dark skin tone',
  codePoint: '1F574 1F3FE',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'person-in-suit-levitating-dark-skin-tone',
  character: '🕴🏿',
  unicodeName: 'person in suit levitating: dark skin tone',
  codePoint: '1F574 1F3FF',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'people-with-bunny-ears',
  character: '👯',
  unicodeName: 'people with bunny ears',
  codePoint: '1F46F',
  group: 'people-body',
  subGroup: 'person-activity',
  variants: [{
    slug: 'men-with-bunny-ears',
    character: '👯‍♂️'
  }, {
    slug: 'women-with-bunny-ears',
    character: '👯‍♀️'
  }, {
    slug: 'e4-0-men-with-bunny-ears',
    character: '👯‍♂️'
  }, {
    slug: 'e4-0-women-with-bunny-ears',
    character: '👯‍♀️'
  }]
}, {
  slug: 'person-in-steamy-room',
  character: '🧖',
  unicodeName: 'person in steamy room',
  codePoint: '1F9D6',
  group: 'people-body',
  subGroup: 'person-activity',
  variants: [{
    slug: 'person-in-steamy-room-light-skin-tone',
    character: '🧖🏻'
  }, {
    slug: 'person-in-steamy-room-medium-light-skin-tone',
    character: '🧖🏼'
  }, {
    slug: 'person-in-steamy-room-medium-skin-tone',
    character: '🧖🏽'
  }, {
    slug: 'person-in-steamy-room-medium-dark-skin-tone',
    character: '🧖🏾'
  }, {
    slug: 'person-in-steamy-room-dark-skin-tone',
    character: '🧖🏿'
  }, {
    slug: 'man-in-steamy-room',
    character: '🧖‍♂️'
  }, {
    slug: 'man-in-steamy-room-light-skin-tone',
    character: '🧖🏻‍♂️'
  }, {
    slug: 'man-in-steamy-room-medium-light-skin-tone',
    character: '🧖🏼‍♂️'
  }, {
    slug: 'man-in-steamy-room-medium-skin-tone',
    character: '🧖🏽‍♂️'
  }, {
    slug: 'man-in-steamy-room-medium-dark-skin-tone',
    character: '🧖🏾‍♂️'
  }, {
    slug: 'man-in-steamy-room-dark-skin-tone',
    character: '🧖🏿‍♂️'
  }, {
    slug: 'woman-in-steamy-room',
    character: '🧖‍♀️'
  }, {
    slug: 'woman-in-steamy-room-light-skin-tone',
    character: '🧖🏻‍♀️'
  }, {
    slug: 'woman-in-steamy-room-medium-light-skin-tone',
    character: '🧖🏼‍♀️'
  }, {
    slug: 'woman-in-steamy-room-medium-skin-tone',
    character: '🧖🏽‍♀️'
  }, {
    slug: 'woman-in-steamy-room-medium-dark-skin-tone',
    character: '🧖🏾‍♀️'
  }, {
    slug: 'woman-in-steamy-room-dark-skin-tone',
    character: '🧖🏿‍♀️'
  }, {
    slug: 'e5-0-person-in-steamy-room-light-skin-tone',
    character: '🧖🏻'
  }, {
    slug: 'e5-0-person-in-steamy-room-medium-light-skin-tone',
    character: '🧖🏼'
  }, {
    slug: 'e5-0-person-in-steamy-room-medium-skin-tone',
    character: '🧖🏽'
  }, {
    slug: 'e5-0-person-in-steamy-room-medium-dark-skin-tone',
    character: '🧖🏾'
  }, {
    slug: 'e5-0-person-in-steamy-room-dark-skin-tone',
    character: '🧖🏿'
  }, {
    slug: 'e5-0-man-in-steamy-room',
    character: '🧖‍♂️'
  }, {
    slug: 'e5-0-man-in-steamy-room-light-skin-tone',
    character: '🧖🏻‍♂️'
  }, {
    slug: 'e5-0-man-in-steamy-room-medium-light-skin-tone',
    character: '🧖🏼‍♂️'
  }, {
    slug: 'e5-0-man-in-steamy-room-medium-skin-tone',
    character: '🧖🏽‍♂️'
  }, {
    slug: 'e5-0-man-in-steamy-room-medium-dark-skin-tone',
    character: '🧖🏾‍♂️'
  }, {
    slug: 'e5-0-man-in-steamy-room-dark-skin-tone',
    character: '🧖🏿‍♂️'
  }, {
    slug: 'e5-0-woman-in-steamy-room',
    character: '🧖‍♀️'
  }, {
    slug: 'e5-0-woman-in-steamy-room-light-skin-tone',
    character: '🧖🏻‍♀️'
  }, {
    slug: 'e5-0-woman-in-steamy-room-medium-light-skin-tone',
    character: '🧖🏼‍♀️'
  }, {
    slug: 'e5-0-woman-in-steamy-room-medium-skin-tone',
    character: '🧖🏽‍♀️'
  }, {
    slug: 'e5-0-woman-in-steamy-room-medium-dark-skin-tone',
    character: '🧖🏾‍♀️'
  }, {
    slug: 'e5-0-woman-in-steamy-room-dark-skin-tone',
    character: '🧖🏿‍♀️'
  }]
}, {
  slug: 'person-climbing',
  character: '🧗',
  unicodeName: 'person climbing',
  codePoint: '1F9D7',
  group: 'people-body',
  subGroup: 'person-activity',
  variants: [{
    slug: 'person-climbing-light-skin-tone',
    character: '🧗🏻'
  }, {
    slug: 'person-climbing-medium-light-skin-tone',
    character: '🧗🏼'
  }, {
    slug: 'person-climbing-medium-skin-tone',
    character: '🧗🏽'
  }, {
    slug: 'person-climbing-medium-dark-skin-tone',
    character: '🧗🏾'
  }, {
    slug: 'person-climbing-dark-skin-tone',
    character: '🧗🏿'
  }, {
    slug: 'man-climbing',
    character: '🧗‍♂️'
  }, {
    slug: 'man-climbing-light-skin-tone',
    character: '🧗🏻‍♂️'
  }, {
    slug: 'man-climbing-medium-light-skin-tone',
    character: '🧗🏼‍♂️'
  }, {
    slug: 'man-climbing-medium-skin-tone',
    character: '🧗🏽‍♂️'
  }, {
    slug: 'man-climbing-medium-dark-skin-tone',
    character: '🧗🏾‍♂️'
  }, {
    slug: 'man-climbing-dark-skin-tone',
    character: '🧗🏿‍♂️'
  }, {
    slug: 'woman-climbing',
    character: '🧗‍♀️'
  }, {
    slug: 'woman-climbing-light-skin-tone',
    character: '🧗🏻‍♀️'
  }, {
    slug: 'woman-climbing-medium-light-skin-tone',
    character: '🧗🏼‍♀️'
  }, {
    slug: 'woman-climbing-medium-skin-tone',
    character: '🧗🏽‍♀️'
  }, {
    slug: 'woman-climbing-medium-dark-skin-tone',
    character: '🧗🏾‍♀️'
  }, {
    slug: 'woman-climbing-dark-skin-tone',
    character: '🧗🏿‍♀️'
  }, {
    slug: 'e5-0-person-climbing-light-skin-tone',
    character: '🧗🏻'
  }, {
    slug: 'e5-0-person-climbing-medium-light-skin-tone',
    character: '🧗🏼'
  }, {
    slug: 'e5-0-person-climbing-medium-skin-tone',
    character: '🧗🏽'
  }, {
    slug: 'e5-0-person-climbing-medium-dark-skin-tone',
    character: '🧗🏾'
  }, {
    slug: 'e5-0-person-climbing-dark-skin-tone',
    character: '🧗🏿'
  }, {
    slug: 'e5-0-man-climbing',
    character: '🧗‍♂️'
  }, {
    slug: 'e5-0-man-climbing-light-skin-tone',
    character: '🧗🏻‍♂️'
  }, {
    slug: 'e5-0-man-climbing-medium-light-skin-tone',
    character: '🧗🏼‍♂️'
  }, {
    slug: 'e5-0-man-climbing-medium-skin-tone',
    character: '🧗🏽‍♂️'
  }, {
    slug: 'e5-0-man-climbing-medium-dark-skin-tone',
    character: '🧗🏾‍♂️'
  }, {
    slug: 'e5-0-man-climbing-dark-skin-tone',
    character: '🧗🏿‍♂️'
  }, {
    slug: 'e5-0-woman-climbing',
    character: '🧗‍♀️'
  }, {
    slug: 'e5-0-woman-climbing-light-skin-tone',
    character: '🧗🏻‍♀️'
  }, {
    slug: 'e5-0-woman-climbing-medium-light-skin-tone',
    character: '🧗🏼‍♀️'
  }, {
    slug: 'e5-0-woman-climbing-medium-skin-tone',
    character: '🧗🏽‍♀️'
  }, {
    slug: 'e5-0-woman-climbing-medium-dark-skin-tone',
    character: '🧗🏾‍♀️'
  }, {
    slug: 'e5-0-woman-climbing-dark-skin-tone',
    character: '🧗🏿‍♀️'
  }]
}, {
  slug: 'person-fencing',
  character: '🤺',
  unicodeName: 'person fencing',
  codePoint: '1F93A',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'horse-racing',
  character: '🏇',
  unicodeName: 'horse racing',
  codePoint: '1F3C7',
  group: 'people-body',
  subGroup: 'person-sport',
  variants: [{
    slug: 'horse-racing-light-skin-tone',
    character: '🏇🏻'
  }, {
    slug: 'horse-racing-medium-light-skin-tone',
    character: '🏇🏼'
  }, {
    slug: 'horse-racing-medium-skin-tone',
    character: '🏇🏽'
  }, {
    slug: 'horse-racing-medium-dark-skin-tone',
    character: '🏇🏾'
  }, {
    slug: 'horse-racing-dark-skin-tone',
    character: '🏇🏿'
  }, {
    slug: 'e1-0-horse-racing-light-skin-tone',
    character: '🏇🏻'
  }, {
    slug: 'e1-0-horse-racing-medium-light-skin-tone',
    character: '🏇🏼'
  }, {
    slug: 'e1-0-horse-racing-medium-skin-tone',
    character: '🏇🏽'
  }, {
    slug: 'e1-0-horse-racing-medium-dark-skin-tone',
    character: '🏇🏾'
  }, {
    slug: 'e1-0-horse-racing-dark-skin-tone',
    character: '🏇🏿'
  }]
}, {
  slug: 'skier',
  character: '⛷️',
  unicodeName: 'skier',
  codePoint: '26F7 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'snowboarder',
  character: '🏂',
  unicodeName: 'snowboarder',
  codePoint: '1F3C2',
  group: 'people-body',
  subGroup: 'person-sport',
  variants: [{
    slug: 'snowboarder-light-skin-tone',
    character: '🏂🏻'
  }, {
    slug: 'snowboarder-medium-light-skin-tone',
    character: '🏂🏼'
  }, {
    slug: 'snowboarder-medium-skin-tone',
    character: '🏂🏽'
  }, {
    slug: 'snowboarder-medium-dark-skin-tone',
    character: '🏂🏾'
  }, {
    slug: 'snowboarder-dark-skin-tone',
    character: '🏂🏿'
  }, {
    slug: 'e1-0-snowboarder-light-skin-tone',
    character: '🏂🏻'
  }, {
    slug: 'e1-0-snowboarder-medium-light-skin-tone',
    character: '🏂🏼'
  }, {
    slug: 'e1-0-snowboarder-medium-skin-tone',
    character: '🏂🏽'
  }, {
    slug: 'e1-0-snowboarder-medium-dark-skin-tone',
    character: '🏂🏾'
  }, {
    slug: 'e1-0-snowboarder-dark-skin-tone',
    character: '🏂🏿'
  }]
}, {
  slug: 'person-golfing',
  character: '🏌️',
  unicodeName: 'person golfing',
  codePoint: '1F3CC FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-golfing-light-skin-tone',
  character: '🏌🏻',
  unicodeName: 'person golfing: light skin tone',
  codePoint: '1F3CC 1F3FB',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-golfing-medium-light-skin-tone',
  character: '🏌🏼',
  unicodeName: 'person golfing: medium-light skin tone',
  codePoint: '1F3CC 1F3FC',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-golfing-medium-skin-tone',
  character: '🏌🏽',
  unicodeName: 'person golfing: medium skin tone',
  codePoint: '1F3CC 1F3FD',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-golfing-medium-dark-skin-tone',
  character: '🏌🏾',
  unicodeName: 'person golfing: medium-dark skin tone',
  codePoint: '1F3CC 1F3FE',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-golfing-dark-skin-tone',
  character: '🏌🏿',
  unicodeName: 'person golfing: dark skin tone',
  codePoint: '1F3CC 1F3FF',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-golfing',
  character: '🏌️‍♂️',
  unicodeName: 'man golfing',
  codePoint: '1F3CC FE0F 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-golfing-light-skin-tone',
  character: '🏌🏻‍♂️',
  unicodeName: 'man golfing: light skin tone',
  codePoint: '1F3CC 1F3FB 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-golfing-medium-light-skin-tone',
  character: '🏌🏼‍♂️',
  unicodeName: 'man golfing: medium-light skin tone',
  codePoint: '1F3CC 1F3FC 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-golfing-medium-skin-tone',
  character: '🏌🏽‍♂️',
  unicodeName: 'man golfing: medium skin tone',
  codePoint: '1F3CC 1F3FD 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-golfing-medium-dark-skin-tone',
  character: '🏌🏾‍♂️',
  unicodeName: 'man golfing: medium-dark skin tone',
  codePoint: '1F3CC 1F3FE 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-golfing-dark-skin-tone',
  character: '🏌🏿‍♂️',
  unicodeName: 'man golfing: dark skin tone',
  codePoint: '1F3CC 1F3FF 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-golfing',
  character: '🏌️‍♀️',
  unicodeName: 'woman golfing',
  codePoint: '1F3CC FE0F 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-golfing-light-skin-tone',
  character: '🏌🏻‍♀️',
  unicodeName: 'woman golfing: light skin tone',
  codePoint: '1F3CC 1F3FB 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-golfing-medium-light-skin-tone',
  character: '🏌🏼‍♀️',
  unicodeName: 'woman golfing: medium-light skin tone',
  codePoint: '1F3CC 1F3FC 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-golfing-medium-skin-tone',
  character: '🏌🏽‍♀️',
  unicodeName: 'woman golfing: medium skin tone',
  codePoint: '1F3CC 1F3FD 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-golfing-medium-dark-skin-tone',
  character: '🏌🏾‍♀️',
  unicodeName: 'woman golfing: medium-dark skin tone',
  codePoint: '1F3CC 1F3FE 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-golfing-dark-skin-tone',
  character: '🏌🏿‍♀️',
  unicodeName: 'woman golfing: dark skin tone',
  codePoint: '1F3CC 1F3FF 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-surfing',
  character: '🏄',
  unicodeName: 'person surfing',
  codePoint: '1F3C4',
  group: 'people-body',
  subGroup: 'person-sport',
  variants: [{
    slug: 'person-surfing-light-skin-tone',
    character: '🏄🏻'
  }, {
    slug: 'person-surfing-medium-light-skin-tone',
    character: '🏄🏼'
  }, {
    slug: 'person-surfing-medium-skin-tone',
    character: '🏄🏽'
  }, {
    slug: 'person-surfing-medium-dark-skin-tone',
    character: '🏄🏾'
  }, {
    slug: 'person-surfing-dark-skin-tone',
    character: '🏄🏿'
  }, {
    slug: 'man-surfing',
    character: '🏄‍♂️'
  }, {
    slug: 'man-surfing-light-skin-tone',
    character: '🏄🏻‍♂️'
  }, {
    slug: 'man-surfing-medium-light-skin-tone',
    character: '🏄🏼‍♂️'
  }, {
    slug: 'man-surfing-medium-skin-tone',
    character: '🏄🏽‍♂️'
  }, {
    slug: 'man-surfing-medium-dark-skin-tone',
    character: '🏄🏾‍♂️'
  }, {
    slug: 'man-surfing-dark-skin-tone',
    character: '🏄🏿‍♂️'
  }, {
    slug: 'woman-surfing',
    character: '🏄‍♀️'
  }, {
    slug: 'woman-surfing-light-skin-tone',
    character: '🏄🏻‍♀️'
  }, {
    slug: 'woman-surfing-medium-light-skin-tone',
    character: '🏄🏼‍♀️'
  }, {
    slug: 'woman-surfing-medium-skin-tone',
    character: '🏄🏽‍♀️'
  }, {
    slug: 'woman-surfing-medium-dark-skin-tone',
    character: '🏄🏾‍♀️'
  }, {
    slug: 'woman-surfing-dark-skin-tone',
    character: '🏄🏿‍♀️'
  }, {
    slug: 'e1-0-person-surfing-light-skin-tone',
    character: '🏄🏻'
  }, {
    slug: 'e1-0-person-surfing-medium-light-skin-tone',
    character: '🏄🏼'
  }, {
    slug: 'e1-0-person-surfing-medium-skin-tone',
    character: '🏄🏽'
  }, {
    slug: 'e1-0-person-surfing-medium-dark-skin-tone',
    character: '🏄🏾'
  }, {
    slug: 'e1-0-person-surfing-dark-skin-tone',
    character: '🏄🏿'
  }, {
    slug: 'e4-0-man-surfing',
    character: '🏄‍♂️'
  }, {
    slug: 'e4-0-man-surfing-light-skin-tone',
    character: '🏄🏻‍♂️'
  }, {
    slug: 'e4-0-man-surfing-medium-light-skin-tone',
    character: '🏄🏼‍♂️'
  }, {
    slug: 'e4-0-man-surfing-medium-skin-tone',
    character: '🏄🏽‍♂️'
  }, {
    slug: 'e4-0-man-surfing-medium-dark-skin-tone',
    character: '🏄🏾‍♂️'
  }, {
    slug: 'e4-0-man-surfing-dark-skin-tone',
    character: '🏄🏿‍♂️'
  }, {
    slug: 'e4-0-woman-surfing',
    character: '🏄‍♀️'
  }, {
    slug: 'e4-0-woman-surfing-light-skin-tone',
    character: '🏄🏻‍♀️'
  }, {
    slug: 'e4-0-woman-surfing-medium-light-skin-tone',
    character: '🏄🏼‍♀️'
  }, {
    slug: 'e4-0-woman-surfing-medium-skin-tone',
    character: '🏄🏽‍♀️'
  }, {
    slug: 'e4-0-woman-surfing-medium-dark-skin-tone',
    character: '🏄🏾‍♀️'
  }, {
    slug: 'e4-0-woman-surfing-dark-skin-tone',
    character: '🏄🏿‍♀️'
  }]
}, {
  slug: 'person-rowing-boat',
  character: '🚣',
  unicodeName: 'person rowing boat',
  codePoint: '1F6A3',
  group: 'people-body',
  subGroup: 'person-sport',
  variants: [{
    slug: 'person-rowing-boat-light-skin-tone',
    character: '🚣🏻'
  }, {
    slug: 'person-rowing-boat-medium-light-skin-tone',
    character: '🚣🏼'
  }, {
    slug: 'person-rowing-boat-medium-skin-tone',
    character: '🚣🏽'
  }, {
    slug: 'person-rowing-boat-medium-dark-skin-tone',
    character: '🚣🏾'
  }, {
    slug: 'person-rowing-boat-dark-skin-tone',
    character: '🚣🏿'
  }, {
    slug: 'man-rowing-boat',
    character: '🚣‍♂️'
  }, {
    slug: 'man-rowing-boat-light-skin-tone',
    character: '🚣🏻‍♂️'
  }, {
    slug: 'man-rowing-boat-medium-light-skin-tone',
    character: '🚣🏼‍♂️'
  }, {
    slug: 'man-rowing-boat-medium-skin-tone',
    character: '🚣🏽‍♂️'
  }, {
    slug: 'man-rowing-boat-medium-dark-skin-tone',
    character: '🚣🏾‍♂️'
  }, {
    slug: 'man-rowing-boat-dark-skin-tone',
    character: '🚣🏿‍♂️'
  }, {
    slug: 'woman-rowing-boat',
    character: '🚣‍♀️'
  }, {
    slug: 'woman-rowing-boat-light-skin-tone',
    character: '🚣🏻‍♀️'
  }, {
    slug: 'woman-rowing-boat-medium-light-skin-tone',
    character: '🚣🏼‍♀️'
  }, {
    slug: 'woman-rowing-boat-medium-skin-tone',
    character: '🚣🏽‍♀️'
  }, {
    slug: 'woman-rowing-boat-medium-dark-skin-tone',
    character: '🚣🏾‍♀️'
  }, {
    slug: 'woman-rowing-boat-dark-skin-tone',
    character: '🚣🏿‍♀️'
  }, {
    slug: 'e1-0-person-rowing-boat-light-skin-tone',
    character: '🚣🏻'
  }, {
    slug: 'e1-0-person-rowing-boat-medium-light-skin-tone',
    character: '🚣🏼'
  }, {
    slug: 'e1-0-person-rowing-boat-medium-skin-tone',
    character: '🚣🏽'
  }, {
    slug: 'e1-0-person-rowing-boat-medium-dark-skin-tone',
    character: '🚣🏾'
  }, {
    slug: 'e1-0-person-rowing-boat-dark-skin-tone',
    character: '🚣🏿'
  }, {
    slug: 'e4-0-man-rowing-boat',
    character: '🚣‍♂️'
  }, {
    slug: 'e4-0-man-rowing-boat-light-skin-tone',
    character: '🚣🏻‍♂️'
  }, {
    slug: 'e4-0-man-rowing-boat-medium-light-skin-tone',
    character: '🚣🏼‍♂️'
  }, {
    slug: 'e4-0-man-rowing-boat-medium-skin-tone',
    character: '🚣🏽‍♂️'
  }, {
    slug: 'e4-0-man-rowing-boat-medium-dark-skin-tone',
    character: '🚣🏾‍♂️'
  }, {
    slug: 'e4-0-man-rowing-boat-dark-skin-tone',
    character: '🚣🏿‍♂️'
  }, {
    slug: 'e4-0-woman-rowing-boat',
    character: '🚣‍♀️'
  }, {
    slug: 'e4-0-woman-rowing-boat-light-skin-tone',
    character: '🚣🏻‍♀️'
  }, {
    slug: 'e4-0-woman-rowing-boat-medium-light-skin-tone',
    character: '🚣🏼‍♀️'
  }, {
    slug: 'e4-0-woman-rowing-boat-medium-skin-tone',
    character: '🚣🏽‍♀️'
  }, {
    slug: 'e4-0-woman-rowing-boat-medium-dark-skin-tone',
    character: '🚣🏾‍♀️'
  }, {
    slug: 'e4-0-woman-rowing-boat-dark-skin-tone',
    character: '🚣🏿‍♀️'
  }]
}, {
  slug: 'person-swimming',
  character: '🏊',
  unicodeName: 'person swimming',
  codePoint: '1F3CA',
  group: 'people-body',
  subGroup: 'person-sport',
  variants: [{
    slug: 'person-swimming-light-skin-tone',
    character: '🏊🏻'
  }, {
    slug: 'person-swimming-medium-light-skin-tone',
    character: '🏊🏼'
  }, {
    slug: 'person-swimming-medium-skin-tone',
    character: '🏊🏽'
  }, {
    slug: 'person-swimming-medium-dark-skin-tone',
    character: '🏊🏾'
  }, {
    slug: 'person-swimming-dark-skin-tone',
    character: '🏊🏿'
  }, {
    slug: 'man-swimming',
    character: '🏊‍♂️'
  }, {
    slug: 'man-swimming-light-skin-tone',
    character: '🏊🏻‍♂️'
  }, {
    slug: 'man-swimming-medium-light-skin-tone',
    character: '🏊🏼‍♂️'
  }, {
    slug: 'man-swimming-medium-skin-tone',
    character: '🏊🏽‍♂️'
  }, {
    slug: 'man-swimming-medium-dark-skin-tone',
    character: '🏊🏾‍♂️'
  }, {
    slug: 'man-swimming-dark-skin-tone',
    character: '🏊🏿‍♂️'
  }, {
    slug: 'woman-swimming',
    character: '🏊‍♀️'
  }, {
    slug: 'woman-swimming-light-skin-tone',
    character: '🏊🏻‍♀️'
  }, {
    slug: 'woman-swimming-medium-light-skin-tone',
    character: '🏊🏼‍♀️'
  }, {
    slug: 'woman-swimming-medium-skin-tone',
    character: '🏊🏽‍♀️'
  }, {
    slug: 'woman-swimming-medium-dark-skin-tone',
    character: '🏊🏾‍♀️'
  }, {
    slug: 'woman-swimming-dark-skin-tone',
    character: '🏊🏿‍♀️'
  }, {
    slug: 'e1-0-person-swimming-light-skin-tone',
    character: '🏊🏻'
  }, {
    slug: 'e1-0-person-swimming-medium-light-skin-tone',
    character: '🏊🏼'
  }, {
    slug: 'e1-0-person-swimming-medium-skin-tone',
    character: '🏊🏽'
  }, {
    slug: 'e1-0-person-swimming-medium-dark-skin-tone',
    character: '🏊🏾'
  }, {
    slug: 'e1-0-person-swimming-dark-skin-tone',
    character: '🏊🏿'
  }, {
    slug: 'e4-0-man-swimming',
    character: '🏊‍♂️'
  }, {
    slug: 'e4-0-man-swimming-light-skin-tone',
    character: '🏊🏻‍♂️'
  }, {
    slug: 'e4-0-man-swimming-medium-light-skin-tone',
    character: '🏊🏼‍♂️'
  }, {
    slug: 'e4-0-man-swimming-medium-skin-tone',
    character: '🏊🏽‍♂️'
  }, {
    slug: 'e4-0-man-swimming-medium-dark-skin-tone',
    character: '🏊🏾‍♂️'
  }, {
    slug: 'e4-0-man-swimming-dark-skin-tone',
    character: '🏊🏿‍♂️'
  }, {
    slug: 'e4-0-woman-swimming',
    character: '🏊‍♀️'
  }, {
    slug: 'e4-0-woman-swimming-light-skin-tone',
    character: '🏊🏻‍♀️'
  }, {
    slug: 'e4-0-woman-swimming-medium-light-skin-tone',
    character: '🏊🏼‍♀️'
  }, {
    slug: 'e4-0-woman-swimming-medium-skin-tone',
    character: '🏊🏽‍♀️'
  }, {
    slug: 'e4-0-woman-swimming-medium-dark-skin-tone',
    character: '🏊🏾‍♀️'
  }, {
    slug: 'e4-0-woman-swimming-dark-skin-tone',
    character: '🏊🏿‍♀️'
  }]
}, {
  slug: 'person-bouncing-ball',
  character: '⛹️',
  unicodeName: 'person bouncing ball',
  codePoint: '26F9 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-bouncing-ball-light-skin-tone',
  character: '⛹🏻',
  unicodeName: 'person bouncing ball: light skin tone',
  codePoint: '26F9 1F3FB',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-bouncing-ball-medium-light-skin-tone',
  character: '⛹🏼',
  unicodeName: 'person bouncing ball: medium-light skin tone',
  codePoint: '26F9 1F3FC',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-bouncing-ball-medium-skin-tone',
  character: '⛹🏽',
  unicodeName: 'person bouncing ball: medium skin tone',
  codePoint: '26F9 1F3FD',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-bouncing-ball-medium-dark-skin-tone',
  character: '⛹🏾',
  unicodeName: 'person bouncing ball: medium-dark skin tone',
  codePoint: '26F9 1F3FE',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-bouncing-ball-dark-skin-tone',
  character: '⛹🏿',
  unicodeName: 'person bouncing ball: dark skin tone',
  codePoint: '26F9 1F3FF',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-bouncing-ball',
  character: '⛹️‍♂️',
  unicodeName: 'man bouncing ball',
  codePoint: '26F9 FE0F 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-bouncing-ball-light-skin-tone',
  character: '⛹🏻‍♂️',
  unicodeName: 'man bouncing ball: light skin tone',
  codePoint: '26F9 1F3FB 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-bouncing-ball-medium-light-skin-tone',
  character: '⛹🏼‍♂️',
  unicodeName: 'man bouncing ball: medium-light skin tone',
  codePoint: '26F9 1F3FC 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-bouncing-ball-medium-skin-tone',
  character: '⛹🏽‍♂️',
  unicodeName: 'man bouncing ball: medium skin tone',
  codePoint: '26F9 1F3FD 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-bouncing-ball-medium-dark-skin-tone',
  character: '⛹🏾‍♂️',
  unicodeName: 'man bouncing ball: medium-dark skin tone',
  codePoint: '26F9 1F3FE 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-bouncing-ball-dark-skin-tone',
  character: '⛹🏿‍♂️',
  unicodeName: 'man bouncing ball: dark skin tone',
  codePoint: '26F9 1F3FF 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-bouncing-ball',
  character: '⛹️‍♀️',
  unicodeName: 'woman bouncing ball',
  codePoint: '26F9 FE0F 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-bouncing-ball-light-skin-tone',
  character: '⛹🏻‍♀️',
  unicodeName: 'woman bouncing ball: light skin tone',
  codePoint: '26F9 1F3FB 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-bouncing-ball-medium-light-skin-tone',
  character: '⛹🏼‍♀️',
  unicodeName: 'woman bouncing ball: medium-light skin tone',
  codePoint: '26F9 1F3FC 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-bouncing-ball-medium-skin-tone',
  character: '⛹🏽‍♀️',
  unicodeName: 'woman bouncing ball: medium skin tone',
  codePoint: '26F9 1F3FD 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-bouncing-ball-medium-dark-skin-tone',
  character: '⛹🏾‍♀️',
  unicodeName: 'woman bouncing ball: medium-dark skin tone',
  codePoint: '26F9 1F3FE 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-bouncing-ball-dark-skin-tone',
  character: '⛹🏿‍♀️',
  unicodeName: 'woman bouncing ball: dark skin tone',
  codePoint: '26F9 1F3FF 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-lifting-weights',
  character: '🏋️',
  unicodeName: 'person lifting weights',
  codePoint: '1F3CB FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-lifting-weights-light-skin-tone',
  character: '🏋🏻',
  unicodeName: 'person lifting weights: light skin tone',
  codePoint: '1F3CB 1F3FB',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-lifting-weights-medium-light-skin-tone',
  character: '🏋🏼',
  unicodeName: 'person lifting weights: medium-light skin tone',
  codePoint: '1F3CB 1F3FC',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-lifting-weights-medium-skin-tone',
  character: '🏋🏽',
  unicodeName: 'person lifting weights: medium skin tone',
  codePoint: '1F3CB 1F3FD',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-lifting-weights-medium-dark-skin-tone',
  character: '🏋🏾',
  unicodeName: 'person lifting weights: medium-dark skin tone',
  codePoint: '1F3CB 1F3FE',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-lifting-weights-dark-skin-tone',
  character: '🏋🏿',
  unicodeName: 'person lifting weights: dark skin tone',
  codePoint: '1F3CB 1F3FF',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-lifting-weights',
  character: '🏋️‍♂️',
  unicodeName: 'man lifting weights',
  codePoint: '1F3CB FE0F 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-lifting-weights-light-skin-tone',
  character: '🏋🏻‍♂️',
  unicodeName: 'man lifting weights: light skin tone',
  codePoint: '1F3CB 1F3FB 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-lifting-weights-medium-light-skin-tone',
  character: '🏋🏼‍♂️',
  unicodeName: 'man lifting weights: medium-light skin tone',
  codePoint: '1F3CB 1F3FC 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-lifting-weights-medium-skin-tone',
  character: '🏋🏽‍♂️',
  unicodeName: 'man lifting weights: medium skin tone',
  codePoint: '1F3CB 1F3FD 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-lifting-weights-medium-dark-skin-tone',
  character: '🏋🏾‍♂️',
  unicodeName: 'man lifting weights: medium-dark skin tone',
  codePoint: '1F3CB 1F3FE 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'man-lifting-weights-dark-skin-tone',
  character: '🏋🏿‍♂️',
  unicodeName: 'man lifting weights: dark skin tone',
  codePoint: '1F3CB 1F3FF 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-lifting-weights',
  character: '🏋️‍♀️',
  unicodeName: 'woman lifting weights',
  codePoint: '1F3CB FE0F 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-lifting-weights-light-skin-tone',
  character: '🏋🏻‍♀️',
  unicodeName: 'woman lifting weights: light skin tone',
  codePoint: '1F3CB 1F3FB 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-lifting-weights-medium-light-skin-tone',
  character: '🏋🏼‍♀️',
  unicodeName: 'woman lifting weights: medium-light skin tone',
  codePoint: '1F3CB 1F3FC 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-lifting-weights-medium-skin-tone',
  character: '🏋🏽‍♀️',
  unicodeName: 'woman lifting weights: medium skin tone',
  codePoint: '1F3CB 1F3FD 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-lifting-weights-medium-dark-skin-tone',
  character: '🏋🏾‍♀️',
  unicodeName: 'woman lifting weights: medium-dark skin tone',
  codePoint: '1F3CB 1F3FE 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'woman-lifting-weights-dark-skin-tone',
  character: '🏋🏿‍♀️',
  unicodeName: 'woman lifting weights: dark skin tone',
  codePoint: '1F3CB 1F3FF 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'person-biking',
  character: '🚴',
  unicodeName: 'person biking',
  codePoint: '1F6B4',
  group: 'people-body',
  subGroup: 'person-sport',
  variants: [{
    slug: 'person-biking-light-skin-tone',
    character: '🚴🏻'
  }, {
    slug: 'person-biking-medium-light-skin-tone',
    character: '🚴🏼'
  }, {
    slug: 'person-biking-medium-skin-tone',
    character: '🚴🏽'
  }, {
    slug: 'person-biking-medium-dark-skin-tone',
    character: '🚴🏾'
  }, {
    slug: 'person-biking-dark-skin-tone',
    character: '🚴🏿'
  }, {
    slug: 'man-biking',
    character: '🚴‍♂️'
  }, {
    slug: 'man-biking-light-skin-tone',
    character: '🚴🏻‍♂️'
  }, {
    slug: 'man-biking-medium-light-skin-tone',
    character: '🚴🏼‍♂️'
  }, {
    slug: 'man-biking-medium-skin-tone',
    character: '🚴🏽‍♂️'
  }, {
    slug: 'man-biking-medium-dark-skin-tone',
    character: '🚴🏾‍♂️'
  }, {
    slug: 'man-biking-dark-skin-tone',
    character: '🚴🏿‍♂️'
  }, {
    slug: 'woman-biking',
    character: '🚴‍♀️'
  }, {
    slug: 'woman-biking-light-skin-tone',
    character: '🚴🏻‍♀️'
  }, {
    slug: 'woman-biking-medium-light-skin-tone',
    character: '🚴🏼‍♀️'
  }, {
    slug: 'woman-biking-medium-skin-tone',
    character: '🚴🏽‍♀️'
  }, {
    slug: 'woman-biking-medium-dark-skin-tone',
    character: '🚴🏾‍♀️'
  }, {
    slug: 'woman-biking-dark-skin-tone',
    character: '🚴🏿‍♀️'
  }, {
    slug: 'e1-0-person-biking-light-skin-tone',
    character: '🚴🏻'
  }, {
    slug: 'e1-0-person-biking-medium-light-skin-tone',
    character: '🚴🏼'
  }, {
    slug: 'e1-0-person-biking-medium-skin-tone',
    character: '🚴🏽'
  }, {
    slug: 'e1-0-person-biking-medium-dark-skin-tone',
    character: '🚴🏾'
  }, {
    slug: 'e1-0-person-biking-dark-skin-tone',
    character: '🚴🏿'
  }, {
    slug: 'e4-0-man-biking',
    character: '🚴‍♂️'
  }, {
    slug: 'e4-0-man-biking-light-skin-tone',
    character: '🚴🏻‍♂️'
  }, {
    slug: 'e4-0-man-biking-medium-light-skin-tone',
    character: '🚴🏼‍♂️'
  }, {
    slug: 'e4-0-man-biking-medium-skin-tone',
    character: '🚴🏽‍♂️'
  }, {
    slug: 'e4-0-man-biking-medium-dark-skin-tone',
    character: '🚴🏾‍♂️'
  }, {
    slug: 'e4-0-man-biking-dark-skin-tone',
    character: '🚴🏿‍♂️'
  }, {
    slug: 'e4-0-woman-biking',
    character: '🚴‍♀️'
  }, {
    slug: 'e4-0-woman-biking-light-skin-tone',
    character: '🚴🏻‍♀️'
  }, {
    slug: 'e4-0-woman-biking-medium-light-skin-tone',
    character: '🚴🏼‍♀️'
  }, {
    slug: 'e4-0-woman-biking-medium-skin-tone',
    character: '🚴🏽‍♀️'
  }, {
    slug: 'e4-0-woman-biking-medium-dark-skin-tone',
    character: '🚴🏾‍♀️'
  }, {
    slug: 'e4-0-woman-biking-dark-skin-tone',
    character: '🚴🏿‍♀️'
  }]
}, {
  slug: 'person-mountain-biking',
  character: '🚵',
  unicodeName: 'person mountain biking',
  codePoint: '1F6B5',
  group: 'people-body',
  subGroup: 'person-sport',
  variants: [{
    slug: 'person-mountain-biking-light-skin-tone',
    character: '🚵🏻'
  }, {
    slug: 'person-mountain-biking-medium-light-skin-tone',
    character: '🚵🏼'
  }, {
    slug: 'person-mountain-biking-medium-skin-tone',
    character: '🚵🏽'
  }, {
    slug: 'person-mountain-biking-medium-dark-skin-tone',
    character: '🚵🏾'
  }, {
    slug: 'person-mountain-biking-dark-skin-tone',
    character: '🚵🏿'
  }, {
    slug: 'man-mountain-biking',
    character: '🚵‍♂️'
  }, {
    slug: 'man-mountain-biking-light-skin-tone',
    character: '🚵🏻‍♂️'
  }, {
    slug: 'man-mountain-biking-medium-light-skin-tone',
    character: '🚵🏼‍♂️'
  }, {
    slug: 'man-mountain-biking-medium-skin-tone',
    character: '🚵🏽‍♂️'
  }, {
    slug: 'man-mountain-biking-medium-dark-skin-tone',
    character: '🚵🏾‍♂️'
  }, {
    slug: 'man-mountain-biking-dark-skin-tone',
    character: '🚵🏿‍♂️'
  }, {
    slug: 'woman-mountain-biking',
    character: '🚵‍♀️'
  }, {
    slug: 'woman-mountain-biking-light-skin-tone',
    character: '🚵🏻‍♀️'
  }, {
    slug: 'woman-mountain-biking-medium-light-skin-tone',
    character: '🚵🏼‍♀️'
  }, {
    slug: 'woman-mountain-biking-medium-skin-tone',
    character: '🚵🏽‍♀️'
  }, {
    slug: 'woman-mountain-biking-medium-dark-skin-tone',
    character: '🚵🏾‍♀️'
  }, {
    slug: 'woman-mountain-biking-dark-skin-tone',
    character: '🚵🏿‍♀️'
  }, {
    slug: 'e1-0-person-mountain-biking-light-skin-tone',
    character: '🚵🏻'
  }, {
    slug: 'e1-0-person-mountain-biking-medium-light-skin-tone',
    character: '🚵🏼'
  }, {
    slug: 'e1-0-person-mountain-biking-medium-skin-tone',
    character: '🚵🏽'
  }, {
    slug: 'e1-0-person-mountain-biking-medium-dark-skin-tone',
    character: '🚵🏾'
  }, {
    slug: 'e1-0-person-mountain-biking-dark-skin-tone',
    character: '🚵🏿'
  }, {
    slug: 'e4-0-man-mountain-biking',
    character: '🚵‍♂️'
  }, {
    slug: 'e4-0-man-mountain-biking-light-skin-tone',
    character: '🚵🏻‍♂️'
  }, {
    slug: 'e4-0-man-mountain-biking-medium-light-skin-tone',
    character: '🚵🏼‍♂️'
  }, {
    slug: 'e4-0-man-mountain-biking-medium-skin-tone',
    character: '🚵🏽‍♂️'
  }, {
    slug: 'e4-0-man-mountain-biking-medium-dark-skin-tone',
    character: '🚵🏾‍♂️'
  }, {
    slug: 'e4-0-man-mountain-biking-dark-skin-tone',
    character: '🚵🏿‍♂️'
  }, {
    slug: 'e4-0-woman-mountain-biking',
    character: '🚵‍♀️'
  }, {
    slug: 'e4-0-woman-mountain-biking-light-skin-tone',
    character: '🚵🏻‍♀️'
  }, {
    slug: 'e4-0-woman-mountain-biking-medium-light-skin-tone',
    character: '🚵🏼‍♀️'
  }, {
    slug: 'e4-0-woman-mountain-biking-medium-skin-tone',
    character: '🚵🏽‍♀️'
  }, {
    slug: 'e4-0-woman-mountain-biking-medium-dark-skin-tone',
    character: '🚵🏾‍♀️'
  }, {
    slug: 'e4-0-woman-mountain-biking-dark-skin-tone',
    character: '🚵🏿‍♀️'
  }]
}, {
  slug: 'person-cartwheeling',
  character: '🤸',
  unicodeName: 'person cartwheeling',
  codePoint: '1F938',
  group: 'people-body',
  subGroup: 'person-sport',
  variants: [{
    slug: 'person-cartwheeling-light-skin-tone',
    character: '🤸🏻'
  }, {
    slug: 'person-cartwheeling-medium-light-skin-tone',
    character: '🤸🏼'
  }, {
    slug: 'person-cartwheeling-medium-skin-tone',
    character: '🤸🏽'
  }, {
    slug: 'person-cartwheeling-medium-dark-skin-tone',
    character: '🤸🏾'
  }, {
    slug: 'person-cartwheeling-dark-skin-tone',
    character: '🤸🏿'
  }, {
    slug: 'man-cartwheeling',
    character: '🤸‍♂️'
  }, {
    slug: 'man-cartwheeling-light-skin-tone',
    character: '🤸🏻‍♂️'
  }, {
    slug: 'man-cartwheeling-medium-light-skin-tone',
    character: '🤸🏼‍♂️'
  }, {
    slug: 'man-cartwheeling-medium-skin-tone',
    character: '🤸🏽‍♂️'
  }, {
    slug: 'man-cartwheeling-medium-dark-skin-tone',
    character: '🤸🏾‍♂️'
  }, {
    slug: 'man-cartwheeling-dark-skin-tone',
    character: '🤸🏿‍♂️'
  }, {
    slug: 'woman-cartwheeling',
    character: '🤸‍♀️'
  }, {
    slug: 'woman-cartwheeling-light-skin-tone',
    character: '🤸🏻‍♀️'
  }, {
    slug: 'woman-cartwheeling-medium-light-skin-tone',
    character: '🤸🏼‍♀️'
  }, {
    slug: 'woman-cartwheeling-medium-skin-tone',
    character: '🤸🏽‍♀️'
  }, {
    slug: 'woman-cartwheeling-medium-dark-skin-tone',
    character: '🤸🏾‍♀️'
  }, {
    slug: 'woman-cartwheeling-dark-skin-tone',
    character: '🤸🏿‍♀️'
  }, {
    slug: 'e3-0-person-cartwheeling-light-skin-tone',
    character: '🤸🏻'
  }, {
    slug: 'e3-0-person-cartwheeling-medium-light-skin-tone',
    character: '🤸🏼'
  }, {
    slug: 'e3-0-person-cartwheeling-medium-skin-tone',
    character: '🤸🏽'
  }, {
    slug: 'e3-0-person-cartwheeling-medium-dark-skin-tone',
    character: '🤸🏾'
  }, {
    slug: 'e3-0-person-cartwheeling-dark-skin-tone',
    character: '🤸🏿'
  }, {
    slug: 'e4-0-man-cartwheeling',
    character: '🤸‍♂️'
  }, {
    slug: 'e4-0-man-cartwheeling-light-skin-tone',
    character: '🤸🏻‍♂️'
  }, {
    slug: 'e4-0-man-cartwheeling-medium-light-skin-tone',
    character: '🤸🏼‍♂️'
  }, {
    slug: 'e4-0-man-cartwheeling-medium-skin-tone',
    character: '🤸🏽‍♂️'
  }, {
    slug: 'e4-0-man-cartwheeling-medium-dark-skin-tone',
    character: '🤸🏾‍♂️'
  }, {
    slug: 'e4-0-man-cartwheeling-dark-skin-tone',
    character: '🤸🏿‍♂️'
  }, {
    slug: 'e4-0-woman-cartwheeling',
    character: '🤸‍♀️'
  }, {
    slug: 'e4-0-woman-cartwheeling-light-skin-tone',
    character: '🤸🏻‍♀️'
  }, {
    slug: 'e4-0-woman-cartwheeling-medium-light-skin-tone',
    character: '🤸🏼‍♀️'
  }, {
    slug: 'e4-0-woman-cartwheeling-medium-skin-tone',
    character: '🤸🏽‍♀️'
  }, {
    slug: 'e4-0-woman-cartwheeling-medium-dark-skin-tone',
    character: '🤸🏾‍♀️'
  }, {
    slug: 'e4-0-woman-cartwheeling-dark-skin-tone',
    character: '🤸🏿‍♀️'
  }]
}, {
  slug: 'people-wrestling',
  character: '🤼',
  unicodeName: 'people wrestling',
  codePoint: '1F93C',
  group: 'people-body',
  subGroup: 'person-sport',
  variants: [{
    slug: 'men-wrestling',
    character: '🤼‍♂️'
  }, {
    slug: 'women-wrestling',
    character: '🤼‍♀️'
  }, {
    slug: 'e4-0-men-wrestling',
    character: '🤼‍♂️'
  }, {
    slug: 'e4-0-women-wrestling',
    character: '🤼‍♀️'
  }]
}, {
  slug: 'person-playing-water-polo',
  character: '🤽',
  unicodeName: 'person playing water polo',
  codePoint: '1F93D',
  group: 'people-body',
  subGroup: 'person-sport',
  variants: [{
    slug: 'person-playing-water-polo-light-skin-tone',
    character: '🤽🏻'
  }, {
    slug: 'person-playing-water-polo-medium-light-skin-tone',
    character: '🤽🏼'
  }, {
    slug: 'person-playing-water-polo-medium-skin-tone',
    character: '🤽🏽'
  }, {
    slug: 'person-playing-water-polo-medium-dark-skin-tone',
    character: '🤽🏾'
  }, {
    slug: 'person-playing-water-polo-dark-skin-tone',
    character: '🤽🏿'
  }, {
    slug: 'man-playing-water-polo',
    character: '🤽‍♂️'
  }, {
    slug: 'man-playing-water-polo-light-skin-tone',
    character: '🤽🏻‍♂️'
  }, {
    slug: 'man-playing-water-polo-medium-light-skin-tone',
    character: '🤽🏼‍♂️'
  }, {
    slug: 'man-playing-water-polo-medium-skin-tone',
    character: '🤽🏽‍♂️'
  }, {
    slug: 'man-playing-water-polo-medium-dark-skin-tone',
    character: '🤽🏾‍♂️'
  }, {
    slug: 'man-playing-water-polo-dark-skin-tone',
    character: '🤽🏿‍♂️'
  }, {
    slug: 'woman-playing-water-polo',
    character: '🤽‍♀️'
  }, {
    slug: 'woman-playing-water-polo-light-skin-tone',
    character: '🤽🏻‍♀️'
  }, {
    slug: 'woman-playing-water-polo-medium-light-skin-tone',
    character: '🤽🏼‍♀️'
  }, {
    slug: 'woman-playing-water-polo-medium-skin-tone',
    character: '🤽🏽‍♀️'
  }, {
    slug: 'woman-playing-water-polo-medium-dark-skin-tone',
    character: '🤽🏾‍♀️'
  }, {
    slug: 'woman-playing-water-polo-dark-skin-tone',
    character: '🤽🏿‍♀️'
  }, {
    slug: 'e3-0-person-playing-water-polo-light-skin-tone',
    character: '🤽🏻'
  }, {
    slug: 'e3-0-person-playing-water-polo-medium-light-skin-tone',
    character: '🤽🏼'
  }, {
    slug: 'e3-0-person-playing-water-polo-medium-skin-tone',
    character: '🤽🏽'
  }, {
    slug: 'e3-0-person-playing-water-polo-medium-dark-skin-tone',
    character: '🤽🏾'
  }, {
    slug: 'e3-0-person-playing-water-polo-dark-skin-tone',
    character: '🤽🏿'
  }, {
    slug: 'e4-0-man-playing-water-polo',
    character: '🤽‍♂️'
  }, {
    slug: 'e4-0-man-playing-water-polo-light-skin-tone',
    character: '🤽🏻‍♂️'
  }, {
    slug: 'e4-0-man-playing-water-polo-medium-light-skin-tone',
    character: '🤽🏼‍♂️'
  }, {
    slug: 'e4-0-man-playing-water-polo-medium-skin-tone',
    character: '🤽🏽‍♂️'
  }, {
    slug: 'e4-0-man-playing-water-polo-medium-dark-skin-tone',
    character: '🤽🏾‍♂️'
  }, {
    slug: 'e4-0-man-playing-water-polo-dark-skin-tone',
    character: '🤽🏿‍♂️'
  }, {
    slug: 'e4-0-woman-playing-water-polo',
    character: '🤽‍♀️'
  }, {
    slug: 'e4-0-woman-playing-water-polo-light-skin-tone',
    character: '🤽🏻‍♀️'
  }, {
    slug: 'e4-0-woman-playing-water-polo-medium-light-skin-tone',
    character: '🤽🏼‍♀️'
  }, {
    slug: 'e4-0-woman-playing-water-polo-medium-skin-tone',
    character: '🤽🏽‍♀️'
  }, {
    slug: 'e4-0-woman-playing-water-polo-medium-dark-skin-tone',
    character: '🤽🏾‍♀️'
  }, {
    slug: 'e4-0-woman-playing-water-polo-dark-skin-tone',
    character: '🤽🏿‍♀️'
  }]
}, {
  slug: 'person-playing-handball',
  character: '🤾',
  unicodeName: 'person playing handball',
  codePoint: '1F93E',
  group: 'people-body',
  subGroup: 'person-sport',
  variants: [{
    slug: 'person-playing-handball-light-skin-tone',
    character: '🤾🏻'
  }, {
    slug: 'person-playing-handball-medium-light-skin-tone',
    character: '🤾🏼'
  }, {
    slug: 'person-playing-handball-medium-skin-tone',
    character: '🤾🏽'
  }, {
    slug: 'person-playing-handball-medium-dark-skin-tone',
    character: '🤾🏾'
  }, {
    slug: 'person-playing-handball-dark-skin-tone',
    character: '🤾🏿'
  }, {
    slug: 'man-playing-handball',
    character: '🤾‍♂️'
  }, {
    slug: 'man-playing-handball-light-skin-tone',
    character: '🤾🏻‍♂️'
  }, {
    slug: 'man-playing-handball-medium-light-skin-tone',
    character: '🤾🏼‍♂️'
  }, {
    slug: 'man-playing-handball-medium-skin-tone',
    character: '🤾🏽‍♂️'
  }, {
    slug: 'man-playing-handball-medium-dark-skin-tone',
    character: '🤾🏾‍♂️'
  }, {
    slug: 'man-playing-handball-dark-skin-tone',
    character: '🤾🏿‍♂️'
  }, {
    slug: 'woman-playing-handball',
    character: '🤾‍♀️'
  }, {
    slug: 'woman-playing-handball-light-skin-tone',
    character: '🤾🏻‍♀️'
  }, {
    slug: 'woman-playing-handball-medium-light-skin-tone',
    character: '🤾🏼‍♀️'
  }, {
    slug: 'woman-playing-handball-medium-skin-tone',
    character: '🤾🏽‍♀️'
  }, {
    slug: 'woman-playing-handball-medium-dark-skin-tone',
    character: '🤾🏾‍♀️'
  }, {
    slug: 'woman-playing-handball-dark-skin-tone',
    character: '🤾🏿‍♀️'
  }, {
    slug: 'e3-0-person-playing-handball-light-skin-tone',
    character: '🤾🏻'
  }, {
    slug: 'e3-0-person-playing-handball-medium-light-skin-tone',
    character: '🤾🏼'
  }, {
    slug: 'e3-0-person-playing-handball-medium-skin-tone',
    character: '🤾🏽'
  }, {
    slug: 'e3-0-person-playing-handball-medium-dark-skin-tone',
    character: '🤾🏾'
  }, {
    slug: 'e3-0-person-playing-handball-dark-skin-tone',
    character: '🤾🏿'
  }, {
    slug: 'e4-0-man-playing-handball',
    character: '🤾‍♂️'
  }, {
    slug: 'e4-0-man-playing-handball-light-skin-tone',
    character: '🤾🏻‍♂️'
  }, {
    slug: 'e4-0-man-playing-handball-medium-light-skin-tone',
    character: '🤾🏼‍♂️'
  }, {
    slug: 'e4-0-man-playing-handball-medium-skin-tone',
    character: '🤾🏽‍♂️'
  }, {
    slug: 'e4-0-man-playing-handball-medium-dark-skin-tone',
    character: '🤾🏾‍♂️'
  }, {
    slug: 'e4-0-man-playing-handball-dark-skin-tone',
    character: '🤾🏿‍♂️'
  }, {
    slug: 'e4-0-woman-playing-handball',
    character: '🤾‍♀️'
  }, {
    slug: 'e4-0-woman-playing-handball-light-skin-tone',
    character: '🤾🏻‍♀️'
  }, {
    slug: 'e4-0-woman-playing-handball-medium-light-skin-tone',
    character: '🤾🏼‍♀️'
  }, {
    slug: 'e4-0-woman-playing-handball-medium-skin-tone',
    character: '🤾🏽‍♀️'
  }, {
    slug: 'e4-0-woman-playing-handball-medium-dark-skin-tone',
    character: '🤾🏾‍♀️'
  }, {
    slug: 'e4-0-woman-playing-handball-dark-skin-tone',
    character: '🤾🏿‍♀️'
  }]
}, {
  slug: 'person-juggling',
  character: '🤹',
  unicodeName: 'person juggling',
  codePoint: '1F939',
  group: 'people-body',
  subGroup: 'person-sport',
  variants: [{
    slug: 'person-juggling-light-skin-tone',
    character: '🤹🏻'
  }, {
    slug: 'person-juggling-medium-light-skin-tone',
    character: '🤹🏼'
  }, {
    slug: 'person-juggling-medium-skin-tone',
    character: '🤹🏽'
  }, {
    slug: 'person-juggling-medium-dark-skin-tone',
    character: '🤹🏾'
  }, {
    slug: 'person-juggling-dark-skin-tone',
    character: '🤹🏿'
  }, {
    slug: 'man-juggling',
    character: '🤹‍♂️'
  }, {
    slug: 'man-juggling-light-skin-tone',
    character: '🤹🏻‍♂️'
  }, {
    slug: 'man-juggling-medium-light-skin-tone',
    character: '🤹🏼‍♂️'
  }, {
    slug: 'man-juggling-medium-skin-tone',
    character: '🤹🏽‍♂️'
  }, {
    slug: 'man-juggling-medium-dark-skin-tone',
    character: '🤹🏾‍♂️'
  }, {
    slug: 'man-juggling-dark-skin-tone',
    character: '🤹🏿‍♂️'
  }, {
    slug: 'woman-juggling',
    character: '🤹‍♀️'
  }, {
    slug: 'woman-juggling-light-skin-tone',
    character: '🤹🏻‍♀️'
  }, {
    slug: 'woman-juggling-medium-light-skin-tone',
    character: '🤹🏼‍♀️'
  }, {
    slug: 'woman-juggling-medium-skin-tone',
    character: '🤹🏽‍♀️'
  }, {
    slug: 'woman-juggling-medium-dark-skin-tone',
    character: '🤹🏾‍♀️'
  }, {
    slug: 'woman-juggling-dark-skin-tone',
    character: '🤹🏿‍♀️'
  }, {
    slug: 'e3-0-person-juggling-light-skin-tone',
    character: '🤹🏻'
  }, {
    slug: 'e3-0-person-juggling-medium-light-skin-tone',
    character: '🤹🏼'
  }, {
    slug: 'e3-0-person-juggling-medium-skin-tone',
    character: '🤹🏽'
  }, {
    slug: 'e3-0-person-juggling-medium-dark-skin-tone',
    character: '🤹🏾'
  }, {
    slug: 'e3-0-person-juggling-dark-skin-tone',
    character: '🤹🏿'
  }, {
    slug: 'e4-0-man-juggling',
    character: '🤹‍♂️'
  }, {
    slug: 'e4-0-man-juggling-light-skin-tone',
    character: '🤹🏻‍♂️'
  }, {
    slug: 'e4-0-man-juggling-medium-light-skin-tone',
    character: '🤹🏼‍♂️'
  }, {
    slug: 'e4-0-man-juggling-medium-skin-tone',
    character: '🤹🏽‍♂️'
  }, {
    slug: 'e4-0-man-juggling-medium-dark-skin-tone',
    character: '🤹🏾‍♂️'
  }, {
    slug: 'e4-0-man-juggling-dark-skin-tone',
    character: '🤹🏿‍♂️'
  }, {
    slug: 'e4-0-woman-juggling',
    character: '🤹‍♀️'
  }, {
    slug: 'e4-0-woman-juggling-light-skin-tone',
    character: '🤹🏻‍♀️'
  }, {
    slug: 'e4-0-woman-juggling-medium-light-skin-tone',
    character: '🤹🏼‍♀️'
  }, {
    slug: 'e4-0-woman-juggling-medium-skin-tone',
    character: '🤹🏽‍♀️'
  }, {
    slug: 'e4-0-woman-juggling-medium-dark-skin-tone',
    character: '🤹🏾‍♀️'
  }, {
    slug: 'e4-0-woman-juggling-dark-skin-tone',
    character: '🤹🏿‍♀️'
  }]
}, {
  slug: 'person-in-lotus-position',
  character: '🧘',
  unicodeName: 'person in lotus position',
  codePoint: '1F9D8',
  group: 'people-body',
  subGroup: 'person-resting',
  variants: [{
    slug: 'person-in-lotus-position-light-skin-tone',
    character: '🧘🏻'
  }, {
    slug: 'person-in-lotus-position-medium-light-skin-tone',
    character: '🧘🏼'
  }, {
    slug: 'person-in-lotus-position-medium-skin-tone',
    character: '🧘🏽'
  }, {
    slug: 'person-in-lotus-position-medium-dark-skin-tone',
    character: '🧘🏾'
  }, {
    slug: 'person-in-lotus-position-dark-skin-tone',
    character: '🧘🏿'
  }, {
    slug: 'man-in-lotus-position',
    character: '🧘‍♂️'
  }, {
    slug: 'man-in-lotus-position-light-skin-tone',
    character: '🧘🏻‍♂️'
  }, {
    slug: 'man-in-lotus-position-medium-light-skin-tone',
    character: '🧘🏼‍♂️'
  }, {
    slug: 'man-in-lotus-position-medium-skin-tone',
    character: '🧘🏽‍♂️'
  }, {
    slug: 'man-in-lotus-position-medium-dark-skin-tone',
    character: '🧘🏾‍♂️'
  }, {
    slug: 'man-in-lotus-position-dark-skin-tone',
    character: '🧘🏿‍♂️'
  }, {
    slug: 'woman-in-lotus-position',
    character: '🧘‍♀️'
  }, {
    slug: 'woman-in-lotus-position-light-skin-tone',
    character: '🧘🏻‍♀️'
  }, {
    slug: 'woman-in-lotus-position-medium-light-skin-tone',
    character: '🧘🏼‍♀️'
  }, {
    slug: 'woman-in-lotus-position-medium-skin-tone',
    character: '🧘🏽‍♀️'
  }, {
    slug: 'woman-in-lotus-position-medium-dark-skin-tone',
    character: '🧘🏾‍♀️'
  }, {
    slug: 'woman-in-lotus-position-dark-skin-tone',
    character: '🧘🏿‍♀️'
  }, {
    slug: 'e5-0-person-in-lotus-position-light-skin-tone',
    character: '🧘🏻'
  }, {
    slug: 'e5-0-person-in-lotus-position-medium-light-skin-tone',
    character: '🧘🏼'
  }, {
    slug: 'e5-0-person-in-lotus-position-medium-skin-tone',
    character: '🧘🏽'
  }, {
    slug: 'e5-0-person-in-lotus-position-medium-dark-skin-tone',
    character: '🧘🏾'
  }, {
    slug: 'e5-0-person-in-lotus-position-dark-skin-tone',
    character: '🧘🏿'
  }, {
    slug: 'e5-0-man-in-lotus-position',
    character: '🧘‍♂️'
  }, {
    slug: 'e5-0-man-in-lotus-position-light-skin-tone',
    character: '🧘🏻‍♂️'
  }, {
    slug: 'e5-0-man-in-lotus-position-medium-light-skin-tone',
    character: '🧘🏼‍♂️'
  }, {
    slug: 'e5-0-man-in-lotus-position-medium-skin-tone',
    character: '🧘🏽‍♂️'
  }, {
    slug: 'e5-0-man-in-lotus-position-medium-dark-skin-tone',
    character: '🧘🏾‍♂️'
  }, {
    slug: 'e5-0-man-in-lotus-position-dark-skin-tone',
    character: '🧘🏿‍♂️'
  }, {
    slug: 'e5-0-woman-in-lotus-position',
    character: '🧘‍♀️'
  }, {
    slug: 'e5-0-woman-in-lotus-position-light-skin-tone',
    character: '🧘🏻‍♀️'
  }, {
    slug: 'e5-0-woman-in-lotus-position-medium-light-skin-tone',
    character: '🧘🏼‍♀️'
  }, {
    slug: 'e5-0-woman-in-lotus-position-medium-skin-tone',
    character: '🧘🏽‍♀️'
  }, {
    slug: 'e5-0-woman-in-lotus-position-medium-dark-skin-tone',
    character: '🧘🏾‍♀️'
  }, {
    slug: 'e5-0-woman-in-lotus-position-dark-skin-tone',
    character: '🧘🏿‍♀️'
  }]
}, {
  slug: 'person-taking-bath',
  character: '🛀',
  unicodeName: 'person taking bath',
  codePoint: '1F6C0',
  group: 'people-body',
  subGroup: 'person-resting',
  variants: [{
    slug: 'person-taking-bath-light-skin-tone',
    character: '🛀🏻'
  }, {
    slug: 'person-taking-bath-medium-light-skin-tone',
    character: '🛀🏼'
  }, {
    slug: 'person-taking-bath-medium-skin-tone',
    character: '🛀🏽'
  }, {
    slug: 'person-taking-bath-medium-dark-skin-tone',
    character: '🛀🏾'
  }, {
    slug: 'person-taking-bath-dark-skin-tone',
    character: '🛀🏿'
  }, {
    slug: 'e1-0-person-taking-bath-light-skin-tone',
    character: '🛀🏻'
  }, {
    slug: 'e1-0-person-taking-bath-medium-light-skin-tone',
    character: '🛀🏼'
  }, {
    slug: 'e1-0-person-taking-bath-medium-skin-tone',
    character: '🛀🏽'
  }, {
    slug: 'e1-0-person-taking-bath-medium-dark-skin-tone',
    character: '🛀🏾'
  }, {
    slug: 'e1-0-person-taking-bath-dark-skin-tone',
    character: '🛀🏿'
  }]
}, {
  slug: 'person-in-bed',
  character: '🛌',
  unicodeName: 'person in bed',
  codePoint: '1F6CC',
  group: 'people-body',
  subGroup: 'person-resting',
  variants: [{
    slug: 'person-in-bed-light-skin-tone',
    character: '🛌🏻'
  }, {
    slug: 'person-in-bed-medium-light-skin-tone',
    character: '🛌🏼'
  }, {
    slug: 'person-in-bed-medium-skin-tone',
    character: '🛌🏽'
  }, {
    slug: 'person-in-bed-medium-dark-skin-tone',
    character: '🛌🏾'
  }, {
    slug: 'person-in-bed-dark-skin-tone',
    character: '🛌🏿'
  }, {
    slug: 'e4-0-person-in-bed-light-skin-tone',
    character: '🛌🏻'
  }, {
    slug: 'e4-0-person-in-bed-medium-light-skin-tone',
    character: '🛌🏼'
  }, {
    slug: 'e4-0-person-in-bed-medium-skin-tone',
    character: '🛌🏽'
  }, {
    slug: 'e4-0-person-in-bed-medium-dark-skin-tone',
    character: '🛌🏾'
  }, {
    slug: 'e4-0-person-in-bed-dark-skin-tone',
    character: '🛌🏿'
  }]
}, {
  slug: 'people-holding-hands',
  character: '🧑‍🤝‍🧑',
  unicodeName: 'people holding hands',
  codePoint: '1F9D1 200D 1F91D 200D 1F9D1',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'women-holding-hands',
  character: '👭',
  unicodeName: 'women holding hands',
  codePoint: '1F46D',
  group: 'people-body',
  subGroup: 'family',
  variants: [{
    slug: 'women-holding-hands-light-skin-tone',
    character: '👭🏻'
  }, {
    slug: 'e12-0-women-holding-hands-light-skin-tone',
    character: '👭🏻'
  }]
}, {
  slug: 'women-holding-hands-light-skin-tone-medium-light-skin-tone',
  character: '👩🏻‍🤝‍👩🏼',
  unicodeName: 'women holding hands: light skin tone, medium-light skin tone',
  codePoint: '1F469 1F3FB 200D 1F91D 200D 1F469 1F3FC',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'women-holding-hands-medium-light-skin-tone',
  character: '👭🏼',
  unicodeName: 'women holding hands: medium-light skin tone',
  codePoint: '1F46D 1F3FC',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'women-holding-hands-medium-light-skin-tone-medium-skin-tone',
  character: '👩🏼‍🤝‍👩🏽',
  unicodeName: 'women holding hands: medium-light skin tone, medium skin tone',
  codePoint: '1F469 1F3FC 200D 1F91D 200D 1F469 1F3FD',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'women-holding-hands-medium-skin-tone',
  character: '👭🏽',
  unicodeName: 'women holding hands: medium skin tone',
  codePoint: '1F46D 1F3FD',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'women-holding-hands-medium-skin-tone-medium-dark-skin-tone',
  character: '👩🏽‍🤝‍👩🏾',
  unicodeName: 'women holding hands: medium skin tone, medium-dark skin tone',
  codePoint: '1F469 1F3FD 200D 1F91D 200D 1F469 1F3FE',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'women-holding-hands-medium-dark-skin-tone',
  character: '👭🏾',
  unicodeName: 'women holding hands: medium-dark skin tone',
  codePoint: '1F46D 1F3FE',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'women-holding-hands-medium-dark-skin-tone-dark-skin-tone',
  character: '👩🏾‍🤝‍👩🏿',
  unicodeName: 'women holding hands: medium-dark skin tone, dark skin tone',
  codePoint: '1F469 1F3FE 200D 1F91D 200D 1F469 1F3FF',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'women-holding-hands-dark-skin-tone',
  character: '👭🏿',
  unicodeName: 'women holding hands: dark skin tone',
  codePoint: '1F46D 1F3FF',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'woman-and-man-holding-hands',
  character: '👫',
  unicodeName: 'woman and man holding hands',
  codePoint: '1F46B',
  group: 'people-body',
  subGroup: 'family',
  variants: [{
    slug: 'woman-and-man-holding-hands-light-skin-tone',
    character: '👫🏻'
  }, {
    slug: 'e12-0-woman-and-man-holding-hands-light-skin-tone',
    character: '👫🏻'
  }]
}, {
  slug: 'woman-and-man-holding-hands-light-skin-tone-medium-light-skin-tone',
  character: '👩🏻‍🤝‍👨🏼',
  unicodeName: 'woman and man holding hands: light skin tone, medium-light skin tone',
  codePoint: '1F469 1F3FB 200D 1F91D 200D 1F468 1F3FC',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'woman-and-man-holding-hands-medium-light-skin-tone',
  character: '👫🏼',
  unicodeName: 'woman and man holding hands: medium-light skin tone',
  codePoint: '1F46B 1F3FC',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'woman-and-man-holding-hands-medium-light-skin-tone-medium-skin-tone',
  character: '👩🏼‍🤝‍👨🏽',
  unicodeName: 'woman and man holding hands: medium-light skin tone, medium skin tone',
  codePoint: '1F469 1F3FC 200D 1F91D 200D 1F468 1F3FD',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'woman-and-man-holding-hands-medium-skin-tone',
  character: '👫🏽',
  unicodeName: 'woman and man holding hands: medium skin tone',
  codePoint: '1F46B 1F3FD',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'woman-and-man-holding-hands-medium-skin-tone-medium-dark-skin-tone',
  character: '👩🏽‍🤝‍👨🏾',
  unicodeName: 'woman and man holding hands: medium skin tone, medium-dark skin tone',
  codePoint: '1F469 1F3FD 200D 1F91D 200D 1F468 1F3FE',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'woman-and-man-holding-hands-medium-dark-skin-tone',
  character: '👫🏾',
  unicodeName: 'woman and man holding hands: medium-dark skin tone',
  codePoint: '1F46B 1F3FE',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'woman-and-man-holding-hands-medium-dark-skin-tone-dark-skin-tone',
  character: '👩🏾‍🤝‍👨🏿',
  unicodeName: 'woman and man holding hands: medium-dark skin tone, dark skin tone',
  codePoint: '1F469 1F3FE 200D 1F91D 200D 1F468 1F3FF',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'woman-and-man-holding-hands-dark-skin-tone',
  character: '👫🏿',
  unicodeName: 'woman and man holding hands: dark skin tone',
  codePoint: '1F46B 1F3FF',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'men-holding-hands',
  character: '👬',
  unicodeName: 'men holding hands',
  codePoint: '1F46C',
  group: 'people-body',
  subGroup: 'family',
  variants: [{
    slug: 'men-holding-hands-light-skin-tone',
    character: '👬🏻'
  }, {
    slug: 'e12-0-men-holding-hands-light-skin-tone',
    character: '👬🏻'
  }]
}, {
  slug: 'men-holding-hands-light-skin-tone-medium-light-skin-tone',
  character: '👨🏻‍🤝‍👨🏼',
  unicodeName: 'men holding hands: light skin tone, medium-light skin tone',
  codePoint: '1F468 1F3FB 200D 1F91D 200D 1F468 1F3FC',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'men-holding-hands-medium-light-skin-tone',
  character: '👬🏼',
  unicodeName: 'men holding hands: medium-light skin tone',
  codePoint: '1F46C 1F3FC',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'men-holding-hands-medium-light-skin-tone-medium-skin-tone',
  character: '👨🏼‍🤝‍👨🏽',
  unicodeName: 'men holding hands: medium-light skin tone, medium skin tone',
  codePoint: '1F468 1F3FC 200D 1F91D 200D 1F468 1F3FD',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'men-holding-hands-medium-skin-tone',
  character: '👬🏽',
  unicodeName: 'men holding hands: medium skin tone',
  codePoint: '1F46C 1F3FD',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'men-holding-hands-medium-skin-tone-medium-dark-skin-tone',
  character: '👨🏽‍🤝‍👨🏾',
  unicodeName: 'men holding hands: medium skin tone, medium-dark skin tone',
  codePoint: '1F468 1F3FD 200D 1F91D 200D 1F468 1F3FE',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'men-holding-hands-medium-dark-skin-tone',
  character: '👬🏾',
  unicodeName: 'men holding hands: medium-dark skin tone',
  codePoint: '1F46C 1F3FE',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'men-holding-hands-medium-dark-skin-tone-dark-skin-tone',
  character: '👨🏾‍🤝‍👨🏿',
  unicodeName: 'men holding hands: medium-dark skin tone, dark skin tone',
  codePoint: '1F468 1F3FE 200D 1F91D 200D 1F468 1F3FF',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'men-holding-hands-dark-skin-tone',
  character: '👬🏿',
  unicodeName: 'men holding hands: dark skin tone',
  codePoint: '1F46C 1F3FF',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'kiss',
  character: '💏',
  unicodeName: 'kiss',
  codePoint: '1F48F',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'kiss-woman-man',
  character: '👩‍❤️‍💋‍👨',
  unicodeName: 'kiss: woman, man',
  codePoint: '1F469 200D 2764 FE0F 200D 1F48B 200D 1F468 ; fully-qualified',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'kiss-man-man',
  character: '👨‍❤️‍💋‍👨',
  unicodeName: 'kiss: man, man',
  codePoint: '1F468 200D 2764 FE0F 200D 1F48B 200D 1F468 ; fully-qualified',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'kiss-woman-woman',
  character: '👩‍❤️‍💋‍👩',
  unicodeName: 'kiss: woman, woman',
  codePoint: '1F469 200D 2764 FE0F 200D 1F48B 200D 1F469 ; fully-qualified',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'couple-with-heart',
  character: '💑',
  unicodeName: 'couple with heart',
  codePoint: '1F491',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'couple-with-heart-woman-man',
  character: '👩‍❤️‍👨',
  unicodeName: 'couple with heart: woman, man',
  codePoint: '1F469 200D 2764 FE0F 200D 1F468',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'couple-with-heart-man-man',
  character: '👨‍❤️‍👨',
  unicodeName: 'couple with heart: man, man',
  codePoint: '1F468 200D 2764 FE0F 200D 1F468',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'couple-with-heart-woman-woman',
  character: '👩‍❤️‍👩',
  unicodeName: 'couple with heart: woman, woman',
  codePoint: '1F469 200D 2764 FE0F 200D 1F469',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'family',
  character: '👪',
  unicodeName: 'family',
  codePoint: '1F46A',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'family-man-woman-boy',
  character: '👨‍👩‍👦',
  unicodeName: 'family: man, woman, boy',
  codePoint: '1F468 200D 1F469 200D 1F466',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'family-woman-woman-boy',
  character: '👩‍👩‍👦',
  unicodeName: 'family: woman, woman, boy',
  codePoint: '1F469 200D 1F469 200D 1F466',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'family-man-boy',
  character: '👨‍👦',
  unicodeName: 'family: man, boy',
  codePoint: '1F468 200D 1F466',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'family-woman-boy',
  character: '👩‍👦',
  unicodeName: 'family: woman, boy',
  codePoint: '1F469 200D 1F466',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'speaking-head',
  character: '🗣️',
  unicodeName: 'speaking head',
  codePoint: '1F5E3 FE0F',
  group: 'people-body',
  subGroup: 'person-symbol'
}, {
  slug: 'bust-in-silhouette',
  character: '👤',
  unicodeName: 'bust in silhouette',
  codePoint: '1F464',
  group: 'people-body',
  subGroup: 'person-symbol'
}, {
  slug: 'busts-in-silhouette',
  character: '👥',
  unicodeName: 'busts in silhouette',
  codePoint: '1F465',
  group: 'people-body',
  subGroup: 'person-symbol'
}, {
  slug: 'people-hugging',
  character: '🫂',
  unicodeName: 'people hugging',
  codePoint: '1FAC2',
  group: 'people-body',
  subGroup: 'person-symbol'
}, {
  slug: 'footprints',
  character: '👣',
  unicodeName: 'footprints',
  codePoint: '1F463',
  group: 'people-body',
  subGroup: 'person-symbol'
}, {
  slug: 'monkey-face',
  character: '🐵',
  unicodeName: 'monkey face',
  codePoint: '1F435',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'monkey',
  character: '🐒',
  unicodeName: 'monkey',
  codePoint: '1F412',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'gorilla',
  character: '🦍',
  unicodeName: 'gorilla',
  codePoint: '1F98D',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'orangutan',
  character: '🦧',
  unicodeName: 'orangutan',
  codePoint: '1F9A7',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'dog-face',
  character: '🐶',
  unicodeName: 'dog face',
  codePoint: '1F436',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'dog',
  character: '🐕',
  unicodeName: 'dog',
  codePoint: '1F415',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'guide-dog',
  character: '🦮',
  unicodeName: 'guide dog',
  codePoint: '1F9AE',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'service-dog',
  character: '🐕‍🦺',
  unicodeName: 'service dog',
  codePoint: '1F415 200D 1F9BA',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'poodle',
  character: '🐩',
  unicodeName: 'poodle',
  codePoint: '1F429',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'wolf',
  character: '🐺',
  unicodeName: 'wolf',
  codePoint: '1F43A',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'fox',
  character: '🦊',
  unicodeName: 'fox',
  codePoint: '1F98A',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'raccoon',
  character: '🦝',
  unicodeName: 'raccoon',
  codePoint: '1F99D',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'cat-face',
  character: '🐱',
  unicodeName: 'cat face',
  codePoint: '1F431',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'cat',
  character: '🐈',
  unicodeName: 'cat',
  codePoint: '1F408',
  group: 'animals-nature',
  subGroup: 'animal-mammal',
  variants: [{
    slug: 'black-cat',
    character: '🐈‍⬛'
  }, {
    slug: 'e13-0-black-cat',
    character: '🐈‍⬛'
  }]
}, {
  slug: 'lion',
  character: '🦁',
  unicodeName: 'lion',
  codePoint: '1F981',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'tiger-face',
  character: '🐯',
  unicodeName: 'tiger face',
  codePoint: '1F42F',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'tiger',
  character: '🐅',
  unicodeName: 'tiger',
  codePoint: '1F405',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'leopard',
  character: '🐆',
  unicodeName: 'leopard',
  codePoint: '1F406',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'horse-face',
  character: '🐴',
  unicodeName: 'horse face',
  codePoint: '1F434',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'horse',
  character: '🐎',
  unicodeName: 'horse',
  codePoint: '1F40E',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'unicorn',
  character: '🦄',
  unicodeName: 'unicorn',
  codePoint: '1F984',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'zebra',
  character: '🦓',
  unicodeName: 'zebra',
  codePoint: '1F993',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'deer',
  character: '🦌',
  unicodeName: 'deer',
  codePoint: '1F98C',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'bison',
  character: '🦬',
  unicodeName: 'bison',
  codePoint: '1F9AC',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'cow-face',
  character: '🐮',
  unicodeName: 'cow face',
  codePoint: '1F42E',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'ox',
  character: '🐂',
  unicodeName: 'ox',
  codePoint: '1F402',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'water-buffalo',
  character: '🐃',
  unicodeName: 'water buffalo',
  codePoint: '1F403',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'cow',
  character: '🐄',
  unicodeName: 'cow',
  codePoint: '1F404',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'pig-face',
  character: '🐷',
  unicodeName: 'pig face',
  codePoint: '1F437',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'pig',
  character: '🐖',
  unicodeName: 'pig',
  codePoint: '1F416',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'boar',
  character: '🐗',
  unicodeName: 'boar',
  codePoint: '1F417',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'pig-nose',
  character: '🐽',
  unicodeName: 'pig nose',
  codePoint: '1F43D',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'ram',
  character: '🐏',
  unicodeName: 'ram',
  codePoint: '1F40F',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'ewe',
  character: '🐑',
  unicodeName: 'ewe',
  codePoint: '1F411',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'goat',
  character: '🐐',
  unicodeName: 'goat',
  codePoint: '1F410',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'camel',
  character: '🐪',
  unicodeName: 'camel',
  codePoint: '1F42A',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'two-hump-camel',
  character: '🐫',
  unicodeName: 'two-hump camel',
  codePoint: '1F42B',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'llama',
  character: '🦙',
  unicodeName: 'llama',
  codePoint: '1F999',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'giraffe',
  character: '🦒',
  unicodeName: 'giraffe',
  codePoint: '1F992',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'elephant',
  character: '🐘',
  unicodeName: 'elephant',
  codePoint: '1F418',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'mammoth',
  character: '🦣',
  unicodeName: 'mammoth',
  codePoint: '1F9A3',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'rhinoceros',
  character: '🦏',
  unicodeName: 'rhinoceros',
  codePoint: '1F98F',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'hippopotamus',
  character: '🦛',
  unicodeName: 'hippopotamus',
  codePoint: '1F99B',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'mouse-face',
  character: '🐭',
  unicodeName: 'mouse face',
  codePoint: '1F42D',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'mouse',
  character: '🐁',
  unicodeName: 'mouse',
  codePoint: '1F401',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'rat',
  character: '🐀',
  unicodeName: 'rat',
  codePoint: '1F400',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'hamster',
  character: '🐹',
  unicodeName: 'hamster',
  codePoint: '1F439',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'rabbit-face',
  character: '🐰',
  unicodeName: 'rabbit face',
  codePoint: '1F430',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'rabbit',
  character: '🐇',
  unicodeName: 'rabbit',
  codePoint: '1F407',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'chipmunk',
  character: '🐿️',
  unicodeName: 'chipmunk',
  codePoint: '1F43F FE0F',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'beaver',
  character: '🦫',
  unicodeName: 'beaver',
  codePoint: '1F9AB',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'hedgehog',
  character: '🦔',
  unicodeName: 'hedgehog',
  codePoint: '1F994',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'bat',
  character: '🦇',
  unicodeName: 'bat',
  codePoint: '1F987',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'bear',
  character: '🐻',
  unicodeName: 'bear',
  codePoint: '1F43B',
  group: 'animals-nature',
  subGroup: 'animal-mammal',
  variants: [{
    slug: 'polar-bear',
    character: '🐻‍❄️'
  }, {
    slug: 'e13-0-polar-bear',
    character: '🐻‍❄️'
  }]
}, {
  slug: 'koala',
  character: '🐨',
  unicodeName: 'koala',
  codePoint: '1F428',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'panda',
  character: '🐼',
  unicodeName: 'panda',
  codePoint: '1F43C',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'sloth',
  character: '🦥',
  unicodeName: 'sloth',
  codePoint: '1F9A5',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'otter',
  character: '🦦',
  unicodeName: 'otter',
  codePoint: '1F9A6',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'skunk',
  character: '🦨',
  unicodeName: 'skunk',
  codePoint: '1F9A8',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'kangaroo',
  character: '🦘',
  unicodeName: 'kangaroo',
  codePoint: '1F998',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'badger',
  character: '🦡',
  unicodeName: 'badger',
  codePoint: '1F9A1',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'paw-prints',
  character: '🐾',
  unicodeName: 'paw prints',
  codePoint: '1F43E',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'turkey',
  character: '🦃',
  unicodeName: 'turkey',
  codePoint: '1F983',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'chicken',
  character: '🐔',
  unicodeName: 'chicken',
  codePoint: '1F414',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'rooster',
  character: '🐓',
  unicodeName: 'rooster',
  codePoint: '1F413',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'hatching-chick',
  character: '🐣',
  unicodeName: 'hatching chick',
  codePoint: '1F423',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'baby-chick',
  character: '🐤',
  unicodeName: 'baby chick',
  codePoint: '1F424',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'front-facing-baby-chick',
  character: '🐥',
  unicodeName: 'front-facing baby chick',
  codePoint: '1F425',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'bird',
  character: '🐦',
  unicodeName: 'bird',
  codePoint: '1F426',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'penguin',
  character: '🐧',
  unicodeName: 'penguin',
  codePoint: '1F427',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'dove',
  character: '🕊️',
  unicodeName: 'dove',
  codePoint: '1F54A FE0F',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'eagle',
  character: '🦅',
  unicodeName: 'eagle',
  codePoint: '1F985',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'duck',
  character: '🦆',
  unicodeName: 'duck',
  codePoint: '1F986',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'swan',
  character: '🦢',
  unicodeName: 'swan',
  codePoint: '1F9A2',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'owl',
  character: '🦉',
  unicodeName: 'owl',
  codePoint: '1F989',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'dodo',
  character: '🦤',
  unicodeName: 'dodo',
  codePoint: '1F9A4',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'feather',
  character: '🪶',
  unicodeName: 'feather',
  codePoint: '1FAB6',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'flamingo',
  character: '🦩',
  unicodeName: 'flamingo',
  codePoint: '1F9A9',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'peacock',
  character: '🦚',
  unicodeName: 'peacock',
  codePoint: '1F99A',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'parrot',
  character: '🦜',
  unicodeName: 'parrot',
  codePoint: '1F99C',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'frog',
  character: '🐸',
  unicodeName: 'frog',
  codePoint: '1F438',
  group: 'animals-nature',
  subGroup: 'animal-amphibian'
}, {
  slug: 'crocodile',
  character: '🐊',
  unicodeName: 'crocodile',
  codePoint: '1F40A',
  group: 'animals-nature',
  subGroup: 'animal-reptile'
}, {
  slug: 'turtle',
  character: '🐢',
  unicodeName: 'turtle',
  codePoint: '1F422',
  group: 'animals-nature',
  subGroup: 'animal-reptile'
}, {
  slug: 'lizard',
  character: '🦎',
  unicodeName: 'lizard',
  codePoint: '1F98E',
  group: 'animals-nature',
  subGroup: 'animal-reptile'
}, {
  slug: 'snake',
  character: '🐍',
  unicodeName: 'snake',
  codePoint: '1F40D',
  group: 'animals-nature',
  subGroup: 'animal-reptile'
}, {
  slug: 'dragon-face',
  character: '🐲',
  unicodeName: 'dragon face',
  codePoint: '1F432',
  group: 'animals-nature',
  subGroup: 'animal-reptile'
}, {
  slug: 'dragon',
  character: '🐉',
  unicodeName: 'dragon',
  codePoint: '1F409',
  group: 'animals-nature',
  subGroup: 'animal-reptile'
}, {
  slug: 'sauropod',
  character: '🦕',
  unicodeName: 'sauropod',
  codePoint: '1F995',
  group: 'animals-nature',
  subGroup: 'animal-reptile'
}, {
  slug: 't-rex',
  character: '🦖',
  unicodeName: 'T-Rex',
  codePoint: '1F996',
  group: 'animals-nature',
  subGroup: 'animal-reptile'
}, {
  slug: 'spouting-whale',
  character: '🐳',
  unicodeName: 'spouting whale',
  codePoint: '1F433',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'whale',
  character: '🐋',
  unicodeName: 'whale',
  codePoint: '1F40B',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'dolphin',
  character: '🐬',
  unicodeName: 'dolphin',
  codePoint: '1F42C',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'seal',
  character: '🦭',
  unicodeName: 'seal',
  codePoint: '1F9AD',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'fish',
  character: '🐟',
  unicodeName: 'fish',
  codePoint: '1F41F',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'tropical-fish',
  character: '🐠',
  unicodeName: 'tropical fish',
  codePoint: '1F420',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'blowfish',
  character: '🐡',
  unicodeName: 'blowfish',
  codePoint: '1F421',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'shark',
  character: '🦈',
  unicodeName: 'shark',
  codePoint: '1F988',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'octopus',
  character: '🐙',
  unicodeName: 'octopus',
  codePoint: '1F419',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'spiral-shell',
  character: '🐚',
  unicodeName: 'spiral shell',
  codePoint: '1F41A',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'snail',
  character: '🐌',
  unicodeName: 'snail',
  codePoint: '1F40C',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'butterfly',
  character: '🦋',
  unicodeName: 'butterfly',
  codePoint: '1F98B',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'bug',
  character: '🐛',
  unicodeName: 'bug',
  codePoint: '1F41B',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'ant',
  character: '🐜',
  unicodeName: 'ant',
  codePoint: '1F41C',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'honeybee',
  character: '🐝',
  unicodeName: 'honeybee',
  codePoint: '1F41D',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'beetle',
  character: '🪲',
  unicodeName: 'beetle',
  codePoint: '1FAB2',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'lady-beetle',
  character: '🐞',
  unicodeName: 'lady beetle',
  codePoint: '1F41E',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'cricket',
  character: '🦗',
  unicodeName: 'cricket',
  codePoint: '1F997',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'cockroach',
  character: '🪳',
  unicodeName: 'cockroach',
  codePoint: '1FAB3',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'spider',
  character: '🕷️',
  unicodeName: 'spider',
  codePoint: '1F577 FE0F',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'spider-web',
  character: '🕸️',
  unicodeName: 'spider web',
  codePoint: '1F578 FE0F',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'scorpion',
  character: '🦂',
  unicodeName: 'scorpion',
  codePoint: '1F982',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'mosquito',
  character: '🦟',
  unicodeName: 'mosquito',
  codePoint: '1F99F',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'fly',
  character: '🪰',
  unicodeName: 'fly',
  codePoint: '1FAB0',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'worm',
  character: '🪱',
  unicodeName: 'worm',
  codePoint: '1FAB1',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'microbe',
  character: '🦠',
  unicodeName: 'microbe',
  codePoint: '1F9A0',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'bouquet',
  character: '💐',
  unicodeName: 'bouquet',
  codePoint: '1F490',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'cherry-blossom',
  character: '🌸',
  unicodeName: 'cherry blossom',
  codePoint: '1F338',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'white-flower',
  character: '💮',
  unicodeName: 'white flower',
  codePoint: '1F4AE',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'rosette',
  character: '🏵️',
  unicodeName: 'rosette',
  codePoint: '1F3F5 FE0F',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'rose',
  character: '🌹',
  unicodeName: 'rose',
  codePoint: '1F339',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'wilted-flower',
  character: '🥀',
  unicodeName: 'wilted flower',
  codePoint: '1F940',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'hibiscus',
  character: '🌺',
  unicodeName: 'hibiscus',
  codePoint: '1F33A',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'sunflower',
  character: '🌻',
  unicodeName: 'sunflower',
  codePoint: '1F33B',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'blossom',
  character: '🌼',
  unicodeName: 'blossom',
  codePoint: '1F33C',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'tulip',
  character: '🌷',
  unicodeName: 'tulip',
  codePoint: '1F337',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'seedling',
  character: '🌱',
  unicodeName: 'seedling',
  codePoint: '1F331',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'potted-plant',
  character: '🪴',
  unicodeName: 'potted plant',
  codePoint: '1FAB4',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'evergreen-tree',
  character: '🌲',
  unicodeName: 'evergreen tree',
  codePoint: '1F332',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'deciduous-tree',
  character: '🌳',
  unicodeName: 'deciduous tree',
  codePoint: '1F333',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'palm-tree',
  character: '🌴',
  unicodeName: 'palm tree',
  codePoint: '1F334',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'cactus',
  character: '🌵',
  unicodeName: 'cactus',
  codePoint: '1F335',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'sheaf-of-rice',
  character: '🌾',
  unicodeName: 'sheaf of rice',
  codePoint: '1F33E',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'herb',
  character: '🌿',
  unicodeName: 'herb',
  codePoint: '1F33F',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'shamrock',
  character: '☘️',
  unicodeName: 'shamrock',
  codePoint: '2618 FE0F',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'four-leaf-clover',
  character: '🍀',
  unicodeName: 'four leaf clover',
  codePoint: '1F340',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'maple-leaf',
  character: '🍁',
  unicodeName: 'maple leaf',
  codePoint: '1F341',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'fallen-leaf',
  character: '🍂',
  unicodeName: 'fallen leaf',
  codePoint: '1F342',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'leaf-fluttering-in-wind',
  character: '🍃',
  unicodeName: 'leaf fluttering in wind',
  codePoint: '1F343',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'grapes',
  character: '🍇',
  unicodeName: 'grapes',
  codePoint: '1F347',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'melon',
  character: '🍈',
  unicodeName: 'melon',
  codePoint: '1F348',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'watermelon',
  character: '🍉',
  unicodeName: 'watermelon',
  codePoint: '1F349',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'tangerine',
  character: '🍊',
  unicodeName: 'tangerine',
  codePoint: '1F34A',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'lemon',
  character: '🍋',
  unicodeName: 'lemon',
  codePoint: '1F34B',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'banana',
  character: '🍌',
  unicodeName: 'banana',
  codePoint: '1F34C',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'pineapple',
  character: '🍍',
  unicodeName: 'pineapple',
  codePoint: '1F34D',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'mango',
  character: '🥭',
  unicodeName: 'mango',
  codePoint: '1F96D',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'red-apple',
  character: '🍎',
  unicodeName: 'red apple',
  codePoint: '1F34E',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'green-apple',
  character: '🍏',
  unicodeName: 'green apple',
  codePoint: '1F34F',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'pear',
  character: '🍐',
  unicodeName: 'pear',
  codePoint: '1F350',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'peach',
  character: '🍑',
  unicodeName: 'peach',
  codePoint: '1F351',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'cherries',
  character: '🍒',
  unicodeName: 'cherries',
  codePoint: '1F352',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'strawberry',
  character: '🍓',
  unicodeName: 'strawberry',
  codePoint: '1F353',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'blueberries',
  character: '🫐',
  unicodeName: 'blueberries',
  codePoint: '1FAD0',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'kiwi-fruit',
  character: '🥝',
  unicodeName: 'kiwi fruit',
  codePoint: '1F95D',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'tomato',
  character: '🍅',
  unicodeName: 'tomato',
  codePoint: '1F345',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'olive',
  character: '🫒',
  unicodeName: 'olive',
  codePoint: '1FAD2',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'coconut',
  character: '🥥',
  unicodeName: 'coconut',
  codePoint: '1F965',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'avocado',
  character: '🥑',
  unicodeName: 'avocado',
  codePoint: '1F951',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'eggplant',
  character: '🍆',
  unicodeName: 'eggplant',
  codePoint: '1F346',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'potato',
  character: '🥔',
  unicodeName: 'potato',
  codePoint: '1F954',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'carrot',
  character: '🥕',
  unicodeName: 'carrot',
  codePoint: '1F955',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'ear-of-corn',
  character: '🌽',
  unicodeName: 'ear of corn',
  codePoint: '1F33D',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'hot-pepper',
  character: '🌶️',
  unicodeName: 'hot pepper',
  codePoint: '1F336 FE0F',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'bell-pepper',
  character: '🫑',
  unicodeName: 'bell pepper',
  codePoint: '1FAD1',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'cucumber',
  character: '🥒',
  unicodeName: 'cucumber',
  codePoint: '1F952',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'leafy-green',
  character: '🥬',
  unicodeName: 'leafy green',
  codePoint: '1F96C',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'broccoli',
  character: '🥦',
  unicodeName: 'broccoli',
  codePoint: '1F966',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'garlic',
  character: '🧄',
  unicodeName: 'garlic',
  codePoint: '1F9C4',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'onion',
  character: '🧅',
  unicodeName: 'onion',
  codePoint: '1F9C5',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'mushroom',
  character: '🍄',
  unicodeName: 'mushroom',
  codePoint: '1F344',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'peanuts',
  character: '🥜',
  unicodeName: 'peanuts',
  codePoint: '1F95C',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'chestnut',
  character: '🌰',
  unicodeName: 'chestnut',
  codePoint: '1F330',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'bread',
  character: '🍞',
  unicodeName: 'bread',
  codePoint: '1F35E',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'croissant',
  character: '🥐',
  unicodeName: 'croissant',
  codePoint: '1F950',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'baguette-bread',
  character: '🥖',
  unicodeName: 'baguette bread',
  codePoint: '1F956',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'flatbread',
  character: '🫓',
  unicodeName: 'flatbread',
  codePoint: '1FAD3',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'pretzel',
  character: '🥨',
  unicodeName: 'pretzel',
  codePoint: '1F968',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'bagel',
  character: '🥯',
  unicodeName: 'bagel',
  codePoint: '1F96F',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'pancakes',
  character: '🥞',
  unicodeName: 'pancakes',
  codePoint: '1F95E',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'waffle',
  character: '🧇',
  unicodeName: 'waffle',
  codePoint: '1F9C7',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'cheese-wedge',
  character: '🧀',
  unicodeName: 'cheese wedge',
  codePoint: '1F9C0',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'meat-on-bone',
  character: '🍖',
  unicodeName: 'meat on bone',
  codePoint: '1F356',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'poultry-leg',
  character: '🍗',
  unicodeName: 'poultry leg',
  codePoint: '1F357',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'cut-of-meat',
  character: '🥩',
  unicodeName: 'cut of meat',
  codePoint: '1F969',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'bacon',
  character: '🥓',
  unicodeName: 'bacon',
  codePoint: '1F953',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'hamburger',
  character: '🍔',
  unicodeName: 'hamburger',
  codePoint: '1F354',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'french-fries',
  character: '🍟',
  unicodeName: 'french fries',
  codePoint: '1F35F',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'pizza',
  character: '🍕',
  unicodeName: 'pizza',
  codePoint: '1F355',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'hot-dog',
  character: '🌭',
  unicodeName: 'hot dog',
  codePoint: '1F32D',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'sandwich',
  character: '🥪',
  unicodeName: 'sandwich',
  codePoint: '1F96A',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'taco',
  character: '🌮',
  unicodeName: 'taco',
  codePoint: '1F32E',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'burrito',
  character: '🌯',
  unicodeName: 'burrito',
  codePoint: '1F32F',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'tamale',
  character: '🫔',
  unicodeName: 'tamale',
  codePoint: '1FAD4',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'stuffed-flatbread',
  character: '🥙',
  unicodeName: 'stuffed flatbread',
  codePoint: '1F959',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'falafel',
  character: '🧆',
  unicodeName: 'falafel',
  codePoint: '1F9C6',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'egg',
  character: '🥚',
  unicodeName: 'egg',
  codePoint: '1F95A',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'cooking',
  character: '🍳',
  unicodeName: 'cooking',
  codePoint: '1F373',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'shallow-pan-of-food',
  character: '🥘',
  unicodeName: 'shallow pan of food',
  codePoint: '1F958',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'pot-of-food',
  character: '🍲',
  unicodeName: 'pot of food',
  codePoint: '1F372',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'fondue',
  character: '🫕',
  unicodeName: 'fondue',
  codePoint: '1FAD5',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'bowl-with-spoon',
  character: '🥣',
  unicodeName: 'bowl with spoon',
  codePoint: '1F963',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'green-salad',
  character: '🥗',
  unicodeName: 'green salad',
  codePoint: '1F957',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'popcorn',
  character: '🍿',
  unicodeName: 'popcorn',
  codePoint: '1F37F',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'butter',
  character: '🧈',
  unicodeName: 'butter',
  codePoint: '1F9C8',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'salt',
  character: '🧂',
  unicodeName: 'salt',
  codePoint: '1F9C2',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'canned-food',
  character: '🥫',
  unicodeName: 'canned food',
  codePoint: '1F96B',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'bento-box',
  character: '🍱',
  unicodeName: 'bento box',
  codePoint: '1F371',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'rice-cracker',
  character: '🍘',
  unicodeName: 'rice cracker',
  codePoint: '1F358',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'rice-ball',
  character: '🍙',
  unicodeName: 'rice ball',
  codePoint: '1F359',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'cooked-rice',
  character: '🍚',
  unicodeName: 'cooked rice',
  codePoint: '1F35A',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'curry-rice',
  character: '🍛',
  unicodeName: 'curry rice',
  codePoint: '1F35B',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'steaming-bowl',
  character: '🍜',
  unicodeName: 'steaming bowl',
  codePoint: '1F35C',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'spaghetti',
  character: '🍝',
  unicodeName: 'spaghetti',
  codePoint: '1F35D',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'roasted-sweet-potato',
  character: '🍠',
  unicodeName: 'roasted sweet potato',
  codePoint: '1F360',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'oden',
  character: '🍢',
  unicodeName: 'oden',
  codePoint: '1F362',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'sushi',
  character: '🍣',
  unicodeName: 'sushi',
  codePoint: '1F363',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'fried-shrimp',
  character: '🍤',
  unicodeName: 'fried shrimp',
  codePoint: '1F364',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'fish-cake-with-swirl',
  character: '🍥',
  unicodeName: 'fish cake with swirl',
  codePoint: '1F365',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'moon-cake',
  character: '🥮',
  unicodeName: 'moon cake',
  codePoint: '1F96E',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'dango',
  character: '🍡',
  unicodeName: 'dango',
  codePoint: '1F361',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'dumpling',
  character: '🥟',
  unicodeName: 'dumpling',
  codePoint: '1F95F',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'fortune-cookie',
  character: '🥠',
  unicodeName: 'fortune cookie',
  codePoint: '1F960',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'takeout-box',
  character: '🥡',
  unicodeName: 'takeout box',
  codePoint: '1F961',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'crab',
  character: '🦀',
  unicodeName: 'crab',
  codePoint: '1F980',
  group: 'food-drink',
  subGroup: 'food-marine'
}, {
  slug: 'lobster',
  character: '🦞',
  unicodeName: 'lobster',
  codePoint: '1F99E',
  group: 'food-drink',
  subGroup: 'food-marine'
}, {
  slug: 'shrimp',
  character: '🦐',
  unicodeName: 'shrimp',
  codePoint: '1F990',
  group: 'food-drink',
  subGroup: 'food-marine'
}, {
  slug: 'squid',
  character: '🦑',
  unicodeName: 'squid',
  codePoint: '1F991',
  group: 'food-drink',
  subGroup: 'food-marine'
}, {
  slug: 'oyster',
  character: '🦪',
  unicodeName: 'oyster',
  codePoint: '1F9AA',
  group: 'food-drink',
  subGroup: 'food-marine'
}, {
  slug: 'soft-ice-cream',
  character: '🍦',
  unicodeName: 'soft ice cream',
  codePoint: '1F366',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'shaved-ice',
  character: '🍧',
  unicodeName: 'shaved ice',
  codePoint: '1F367',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'ice-cream',
  character: '🍨',
  unicodeName: 'ice cream',
  codePoint: '1F368',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'doughnut',
  character: '🍩',
  unicodeName: 'doughnut',
  codePoint: '1F369',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'cookie',
  character: '🍪',
  unicodeName: 'cookie',
  codePoint: '1F36A',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'birthday-cake',
  character: '🎂',
  unicodeName: 'birthday cake',
  codePoint: '1F382',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'shortcake',
  character: '🍰',
  unicodeName: 'shortcake',
  codePoint: '1F370',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'cupcake',
  character: '🧁',
  unicodeName: 'cupcake',
  codePoint: '1F9C1',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'pie',
  character: '🥧',
  unicodeName: 'pie',
  codePoint: '1F967',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'chocolate-bar',
  character: '🍫',
  unicodeName: 'chocolate bar',
  codePoint: '1F36B',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'candy',
  character: '🍬',
  unicodeName: 'candy',
  codePoint: '1F36C',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'lollipop',
  character: '🍭',
  unicodeName: 'lollipop',
  codePoint: '1F36D',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'custard',
  character: '🍮',
  unicodeName: 'custard',
  codePoint: '1F36E',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'honey-pot',
  character: '🍯',
  unicodeName: 'honey pot',
  codePoint: '1F36F',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'baby-bottle',
  character: '🍼',
  unicodeName: 'baby bottle',
  codePoint: '1F37C',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'glass-of-milk',
  character: '🥛',
  unicodeName: 'glass of milk',
  codePoint: '1F95B',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'hot-beverage',
  character: '☕',
  unicodeName: 'hot beverage',
  codePoint: '2615',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'teapot',
  character: '🫖',
  unicodeName: 'teapot',
  codePoint: '1FAD6',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'teacup-without-handle',
  character: '🍵',
  unicodeName: 'teacup without handle',
  codePoint: '1F375',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'sake',
  character: '🍶',
  unicodeName: 'sake',
  codePoint: '1F376',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'bottle-with-popping-cork',
  character: '🍾',
  unicodeName: 'bottle with popping cork',
  codePoint: '1F37E',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'wine-glass',
  character: '🍷',
  unicodeName: 'wine glass',
  codePoint: '1F377',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'cocktail-glass',
  character: '🍸',
  unicodeName: 'cocktail glass',
  codePoint: '1F378',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'tropical-drink',
  character: '🍹',
  unicodeName: 'tropical drink',
  codePoint: '1F379',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'beer-mug',
  character: '🍺',
  unicodeName: 'beer mug',
  codePoint: '1F37A',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'clinking-beer-mugs',
  character: '🍻',
  unicodeName: 'clinking beer mugs',
  codePoint: '1F37B',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'clinking-glasses',
  character: '🥂',
  unicodeName: 'clinking glasses',
  codePoint: '1F942',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'tumbler-glass',
  character: '🥃',
  unicodeName: 'tumbler glass',
  codePoint: '1F943',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'cup-with-straw',
  character: '🥤',
  unicodeName: 'cup with straw',
  codePoint: '1F964',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'bubble-tea',
  character: '🧋',
  unicodeName: 'bubble tea',
  codePoint: '1F9CB',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'beverage-box',
  character: '🧃',
  unicodeName: 'beverage box',
  codePoint: '1F9C3',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'mate',
  character: '🧉',
  unicodeName: 'mate',
  codePoint: '1F9C9',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'ice',
  character: '🧊',
  unicodeName: 'ice',
  codePoint: '1F9CA',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'chopsticks',
  character: '🥢',
  unicodeName: 'chopsticks',
  codePoint: '1F962',
  group: 'food-drink',
  subGroup: 'dishware'
}, {
  slug: 'fork-and-knife-with-plate',
  character: '🍽️',
  unicodeName: 'fork and knife with plate',
  codePoint: '1F37D FE0F',
  group: 'food-drink',
  subGroup: 'dishware'
}, {
  slug: 'fork-and-knife',
  character: '🍴',
  unicodeName: 'fork and knife',
  codePoint: '1F374',
  group: 'food-drink',
  subGroup: 'dishware'
}, {
  slug: 'spoon',
  character: '🥄',
  unicodeName: 'spoon',
  codePoint: '1F944',
  group: 'food-drink',
  subGroup: 'dishware'
}, {
  slug: 'kitchen-knife',
  character: '🔪',
  unicodeName: 'kitchen knife',
  codePoint: '1F52A',
  group: 'food-drink',
  subGroup: 'dishware'
}, {
  slug: 'amphora',
  character: '🏺',
  unicodeName: 'amphora',
  codePoint: '1F3FA',
  group: 'food-drink',
  subGroup: 'dishware'
}, {
  slug: 'globe-showing-europe-africa',
  character: '🌍',
  unicodeName: 'globe showing Europe-Africa',
  codePoint: '1F30D',
  group: 'travel-places',
  subGroup: 'place-map'
}, {
  slug: 'globe-showing-americas',
  character: '🌎',
  unicodeName: 'globe showing Americas',
  codePoint: '1F30E',
  group: 'travel-places',
  subGroup: 'place-map'
}, {
  slug: 'globe-showing-asia-australia',
  character: '🌏',
  unicodeName: 'globe showing Asia-Australia',
  codePoint: '1F30F',
  group: 'travel-places',
  subGroup: 'place-map'
}, {
  slug: 'globe-with-meridians',
  character: '🌐',
  unicodeName: 'globe with meridians',
  codePoint: '1F310',
  group: 'travel-places',
  subGroup: 'place-map'
}, {
  slug: 'world-map',
  character: '🗺️',
  unicodeName: 'world map',
  codePoint: '1F5FA FE0F',
  group: 'travel-places',
  subGroup: 'place-map'
}, {
  slug: 'map-of-japan',
  character: '🗾',
  unicodeName: 'map of Japan',
  codePoint: '1F5FE',
  group: 'travel-places',
  subGroup: 'place-map'
}, {
  slug: 'compass',
  character: '🧭',
  unicodeName: 'compass',
  codePoint: '1F9ED',
  group: 'travel-places',
  subGroup: 'place-map'
}, {
  slug: 'snow-capped-mountain',
  character: '🏔️',
  unicodeName: 'snow-capped mountain',
  codePoint: '1F3D4 FE0F',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'mountain',
  character: '⛰️',
  unicodeName: 'mountain',
  codePoint: '26F0 FE0F',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'volcano',
  character: '🌋',
  unicodeName: 'volcano',
  codePoint: '1F30B',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'mount-fuji',
  character: '🗻',
  unicodeName: 'mount fuji',
  codePoint: '1F5FB',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'camping',
  character: '🏕️',
  unicodeName: 'camping',
  codePoint: '1F3D5 FE0F',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'beach-with-umbrella',
  character: '🏖️',
  unicodeName: 'beach with umbrella',
  codePoint: '1F3D6 FE0F',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'desert',
  character: '🏜️',
  unicodeName: 'desert',
  codePoint: '1F3DC FE0F',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'desert-island',
  character: '🏝️',
  unicodeName: 'desert island',
  codePoint: '1F3DD FE0F',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'national-park',
  character: '🏞️',
  unicodeName: 'national park',
  codePoint: '1F3DE FE0F',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'stadium',
  character: '🏟️',
  unicodeName: 'stadium',
  codePoint: '1F3DF FE0F',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'classical-building',
  character: '🏛️',
  unicodeName: 'classical building',
  codePoint: '1F3DB FE0F',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'building-construction',
  character: '🏗️',
  unicodeName: 'building construction',
  codePoint: '1F3D7 FE0F',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'brick',
  character: '🧱',
  unicodeName: 'brick',
  codePoint: '1F9F1',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'rock',
  character: '🪨',
  unicodeName: 'rock',
  codePoint: '1FAA8',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'wood',
  character: '🪵',
  unicodeName: 'wood',
  codePoint: '1FAB5',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'hut',
  character: '🛖',
  unicodeName: 'hut',
  codePoint: '1F6D6',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'houses',
  character: '🏘️',
  unicodeName: 'houses',
  codePoint: '1F3D8 FE0F',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'derelict-house',
  character: '🏚️',
  unicodeName: 'derelict house',
  codePoint: '1F3DA FE0F',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'house',
  character: '🏠',
  unicodeName: 'house',
  codePoint: '1F3E0',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'house-with-garden',
  character: '🏡',
  unicodeName: 'house with garden',
  codePoint: '1F3E1',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'office-building',
  character: '🏢',
  unicodeName: 'office building',
  codePoint: '1F3E2',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'japanese-post-office',
  character: '🏣',
  unicodeName: 'Japanese post office',
  codePoint: '1F3E3',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'post-office',
  character: '🏤',
  unicodeName: 'post office',
  codePoint: '1F3E4',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'hospital',
  character: '🏥',
  unicodeName: 'hospital',
  codePoint: '1F3E5',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'bank',
  character: '🏦',
  unicodeName: 'bank',
  codePoint: '1F3E6',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'hotel',
  character: '🏨',
  unicodeName: 'hotel',
  codePoint: '1F3E8',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'love-hotel',
  character: '🏩',
  unicodeName: 'love hotel',
  codePoint: '1F3E9',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'convenience-store',
  character: '🏪',
  unicodeName: 'convenience store',
  codePoint: '1F3EA',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'school',
  character: '🏫',
  unicodeName: 'school',
  codePoint: '1F3EB',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'department-store',
  character: '🏬',
  unicodeName: 'department store',
  codePoint: '1F3EC',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'factory',
  character: '🏭',
  unicodeName: 'factory',
  codePoint: '1F3ED',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'japanese-castle',
  character: '🏯',
  unicodeName: 'Japanese castle',
  codePoint: '1F3EF',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'castle',
  character: '🏰',
  unicodeName: 'castle',
  codePoint: '1F3F0',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'wedding',
  character: '💒',
  unicodeName: 'wedding',
  codePoint: '1F492',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'tokyo-tower',
  character: '🗼',
  unicodeName: 'Tokyo tower',
  codePoint: '1F5FC',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'statue-of-liberty',
  character: '🗽',
  unicodeName: 'Statue of Liberty',
  codePoint: '1F5FD',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'church',
  character: '⛪',
  unicodeName: 'church',
  codePoint: '26EA',
  group: 'travel-places',
  subGroup: 'place-religious'
}, {
  slug: 'mosque',
  character: '🕌',
  unicodeName: 'mosque',
  codePoint: '1F54C',
  group: 'travel-places',
  subGroup: 'place-religious'
}, {
  slug: 'hindu-temple',
  character: '🛕',
  unicodeName: 'hindu temple',
  codePoint: '1F6D5',
  group: 'travel-places',
  subGroup: 'place-religious'
}, {
  slug: 'synagogue',
  character: '🕍',
  unicodeName: 'synagogue',
  codePoint: '1F54D',
  group: 'travel-places',
  subGroup: 'place-religious'
}, {
  slug: 'shinto-shrine',
  character: '⛩️',
  unicodeName: 'shinto shrine',
  codePoint: '26E9 FE0F',
  group: 'travel-places',
  subGroup: 'place-religious'
}, {
  slug: 'kaaba',
  character: '🕋',
  unicodeName: 'kaaba',
  codePoint: '1F54B',
  group: 'travel-places',
  subGroup: 'place-religious'
}, {
  slug: 'fountain',
  character: '⛲',
  unicodeName: 'fountain',
  codePoint: '26F2',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'tent',
  character: '⛺',
  unicodeName: 'tent',
  codePoint: '26FA',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'foggy',
  character: '🌁',
  unicodeName: 'foggy',
  codePoint: '1F301',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'night-with-stars',
  character: '🌃',
  unicodeName: 'night with stars',
  codePoint: '1F303',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'cityscape',
  character: '🏙️',
  unicodeName: 'cityscape',
  codePoint: '1F3D9 FE0F',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'sunrise-over-mountains',
  character: '🌄',
  unicodeName: 'sunrise over mountains',
  codePoint: '1F304',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'sunrise',
  character: '🌅',
  unicodeName: 'sunrise',
  codePoint: '1F305',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'cityscape-at-dusk',
  character: '🌆',
  unicodeName: 'cityscape at dusk',
  codePoint: '1F306',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'sunset',
  character: '🌇',
  unicodeName: 'sunset',
  codePoint: '1F307',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'bridge-at-night',
  character: '🌉',
  unicodeName: 'bridge at night',
  codePoint: '1F309',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'hot-springs',
  character: '♨️',
  unicodeName: 'hot springs',
  codePoint: '2668 FE0F',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'carousel-horse',
  character: '🎠',
  unicodeName: 'carousel horse',
  codePoint: '1F3A0',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'ferris-wheel',
  character: '🎡',
  unicodeName: 'ferris wheel',
  codePoint: '1F3A1',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'roller-coaster',
  character: '🎢',
  unicodeName: 'roller coaster',
  codePoint: '1F3A2',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'barber-pole',
  character: '💈',
  unicodeName: 'barber pole',
  codePoint: '1F488',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'circus-tent',
  character: '🎪',
  unicodeName: 'circus tent',
  codePoint: '1F3AA',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'locomotive',
  character: '🚂',
  unicodeName: 'locomotive',
  codePoint: '1F682',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'railway-car',
  character: '🚃',
  unicodeName: 'railway car',
  codePoint: '1F683',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'high-speed-train',
  character: '🚄',
  unicodeName: 'high-speed train',
  codePoint: '1F684',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'bullet-train',
  character: '🚅',
  unicodeName: 'bullet train',
  codePoint: '1F685',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'train',
  character: '🚆',
  unicodeName: 'train',
  codePoint: '1F686',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'metro',
  character: '🚇',
  unicodeName: 'metro',
  codePoint: '1F687',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'light-rail',
  character: '🚈',
  unicodeName: 'light rail',
  codePoint: '1F688',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'station',
  character: '🚉',
  unicodeName: 'station',
  codePoint: '1F689',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'tram',
  character: '🚊',
  unicodeName: 'tram',
  codePoint: '1F68A',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'monorail',
  character: '🚝',
  unicodeName: 'monorail',
  codePoint: '1F69D',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'mountain-railway',
  character: '🚞',
  unicodeName: 'mountain railway',
  codePoint: '1F69E',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'tram-car',
  character: '🚋',
  unicodeName: 'tram car',
  codePoint: '1F68B',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'bus',
  character: '🚌',
  unicodeName: 'bus',
  codePoint: '1F68C',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'oncoming-bus',
  character: '🚍',
  unicodeName: 'oncoming bus',
  codePoint: '1F68D',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'trolleybus',
  character: '🚎',
  unicodeName: 'trolleybus',
  codePoint: '1F68E',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'minibus',
  character: '🚐',
  unicodeName: 'minibus',
  codePoint: '1F690',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'ambulance',
  character: '🚑',
  unicodeName: 'ambulance',
  codePoint: '1F691',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'fire-engine',
  character: '🚒',
  unicodeName: 'fire engine',
  codePoint: '1F692',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'police-car',
  character: '🚓',
  unicodeName: 'police car',
  codePoint: '1F693',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'oncoming-police-car',
  character: '🚔',
  unicodeName: 'oncoming police car',
  codePoint: '1F694',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'taxi',
  character: '🚕',
  unicodeName: 'taxi',
  codePoint: '1F695',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'oncoming-taxi',
  character: '🚖',
  unicodeName: 'oncoming taxi',
  codePoint: '1F696',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'automobile',
  character: '🚗',
  unicodeName: 'automobile',
  codePoint: '1F697',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'oncoming-automobile',
  character: '🚘',
  unicodeName: 'oncoming automobile',
  codePoint: '1F698',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'sport-utility-vehicle',
  character: '🚙',
  unicodeName: 'sport utility vehicle',
  codePoint: '1F699',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'pickup-truck',
  character: '🛻',
  unicodeName: 'pickup truck',
  codePoint: '1F6FB',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'delivery-truck',
  character: '🚚',
  unicodeName: 'delivery truck',
  codePoint: '1F69A',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'articulated-lorry',
  character: '🚛',
  unicodeName: 'articulated lorry',
  codePoint: '1F69B',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'tractor',
  character: '🚜',
  unicodeName: 'tractor',
  codePoint: '1F69C',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'racing-car',
  character: '🏎️',
  unicodeName: 'racing car',
  codePoint: '1F3CE FE0F',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'motorcycle',
  character: '🏍️',
  unicodeName: 'motorcycle',
  codePoint: '1F3CD FE0F',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'motor-scooter',
  character: '🛵',
  unicodeName: 'motor scooter',
  codePoint: '1F6F5',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'manual-wheelchair',
  character: '🦽',
  unicodeName: 'manual wheelchair',
  codePoint: '1F9BD',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'motorized-wheelchair',
  character: '🦼',
  unicodeName: 'motorized wheelchair',
  codePoint: '1F9BC',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'auto-rickshaw',
  character: '🛺',
  unicodeName: 'auto rickshaw',
  codePoint: '1F6FA',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'bicycle',
  character: '🚲',
  unicodeName: 'bicycle',
  codePoint: '1F6B2',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'kick-scooter',
  character: '🛴',
  unicodeName: 'kick scooter',
  codePoint: '1F6F4',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'skateboard',
  character: '🛹',
  unicodeName: 'skateboard',
  codePoint: '1F6F9',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'roller-skate',
  character: '🛼',
  unicodeName: 'roller skate',
  codePoint: '1F6FC',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'bus-stop',
  character: '🚏',
  unicodeName: 'bus stop',
  codePoint: '1F68F',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'motorway',
  character: '🛣️',
  unicodeName: 'motorway',
  codePoint: '1F6E3 FE0F',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'railway-track',
  character: '🛤️',
  unicodeName: 'railway track',
  codePoint: '1F6E4 FE0F',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'oil-drum',
  character: '🛢️',
  unicodeName: 'oil drum',
  codePoint: '1F6E2 FE0F',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'fuel-pump',
  character: '⛽',
  unicodeName: 'fuel pump',
  codePoint: '26FD',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'police-car-light',
  character: '🚨',
  unicodeName: 'police car light',
  codePoint: '1F6A8',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'horizontal-traffic-light',
  character: '🚥',
  unicodeName: 'horizontal traffic light',
  codePoint: '1F6A5',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'vertical-traffic-light',
  character: '🚦',
  unicodeName: 'vertical traffic light',
  codePoint: '1F6A6',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'stop-sign',
  character: '🛑',
  unicodeName: 'stop sign',
  codePoint: '1F6D1',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'construction',
  character: '🚧',
  unicodeName: 'construction',
  codePoint: '1F6A7',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'anchor',
  character: '⚓',
  unicodeName: 'anchor',
  codePoint: '2693',
  group: 'travel-places',
  subGroup: 'transport-water'
}, {
  slug: 'sailboat',
  character: '⛵',
  unicodeName: 'sailboat',
  codePoint: '26F5',
  group: 'travel-places',
  subGroup: 'transport-water'
}, {
  slug: 'canoe',
  character: '🛶',
  unicodeName: 'canoe',
  codePoint: '1F6F6',
  group: 'travel-places',
  subGroup: 'transport-water'
}, {
  slug: 'speedboat',
  character: '🚤',
  unicodeName: 'speedboat',
  codePoint: '1F6A4',
  group: 'travel-places',
  subGroup: 'transport-water'
}, {
  slug: 'passenger-ship',
  character: '🛳️',
  unicodeName: 'passenger ship',
  codePoint: '1F6F3 FE0F',
  group: 'travel-places',
  subGroup: 'transport-water'
}, {
  slug: 'ferry',
  character: '⛴️',
  unicodeName: 'ferry',
  codePoint: '26F4 FE0F',
  group: 'travel-places',
  subGroup: 'transport-water'
}, {
  slug: 'motor-boat',
  character: '🛥️',
  unicodeName: 'motor boat',
  codePoint: '1F6E5 FE0F',
  group: 'travel-places',
  subGroup: 'transport-water'
}, {
  slug: 'ship',
  character: '🚢',
  unicodeName: 'ship',
  codePoint: '1F6A2',
  group: 'travel-places',
  subGroup: 'transport-water'
}, {
  slug: 'airplane',
  character: '✈️',
  unicodeName: 'airplane',
  codePoint: '2708 FE0F',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'small-airplane',
  character: '🛩️',
  unicodeName: 'small airplane',
  codePoint: '1F6E9 FE0F',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'airplane-departure',
  character: '🛫',
  unicodeName: 'airplane departure',
  codePoint: '1F6EB',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'airplane-arrival',
  character: '🛬',
  unicodeName: 'airplane arrival',
  codePoint: '1F6EC',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'parachute',
  character: '🪂',
  unicodeName: 'parachute',
  codePoint: '1FA82',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'seat',
  character: '💺',
  unicodeName: 'seat',
  codePoint: '1F4BA',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'helicopter',
  character: '🚁',
  unicodeName: 'helicopter',
  codePoint: '1F681',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'suspension-railway',
  character: '🚟',
  unicodeName: 'suspension railway',
  codePoint: '1F69F',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'mountain-cableway',
  character: '🚠',
  unicodeName: 'mountain cableway',
  codePoint: '1F6A0',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'aerial-tramway',
  character: '🚡',
  unicodeName: 'aerial tramway',
  codePoint: '1F6A1',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'satellite',
  character: '🛰️',
  unicodeName: 'satellite',
  codePoint: '1F6F0 FE0F',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'rocket',
  character: '🚀',
  unicodeName: 'rocket',
  codePoint: '1F680',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'flying-saucer',
  character: '🛸',
  unicodeName: 'flying saucer',
  codePoint: '1F6F8',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'bellhop-bell',
  character: '🛎️',
  unicodeName: 'bellhop bell',
  codePoint: '1F6CE FE0F',
  group: 'travel-places',
  subGroup: 'hotel'
}, {
  slug: 'luggage',
  character: '🧳',
  unicodeName: 'luggage',
  codePoint: '1F9F3',
  group: 'travel-places',
  subGroup: 'hotel'
}, {
  slug: 'hourglass-done',
  character: '⌛',
  unicodeName: 'hourglass done',
  codePoint: '231B',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'hourglass-not-done',
  character: '⏳',
  unicodeName: 'hourglass not done',
  codePoint: '23F3',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'watch',
  character: '⌚',
  unicodeName: 'watch',
  codePoint: '231A',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'alarm-clock',
  character: '⏰',
  unicodeName: 'alarm clock',
  codePoint: '23F0',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'stopwatch',
  character: '⏱️',
  unicodeName: 'stopwatch',
  codePoint: '23F1 FE0F',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'timer-clock',
  character: '⏲️',
  unicodeName: 'timer clock',
  codePoint: '23F2 FE0F',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'mantelpiece-clock',
  character: '🕰️',
  unicodeName: 'mantelpiece clock',
  codePoint: '1F570 FE0F',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'twelve-o-clock',
  character: '🕛',
  unicodeName: 'twelve o’clock',
  codePoint: '1F55B',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'twelve-thirty',
  character: '🕧',
  unicodeName: 'twelve-thirty',
  codePoint: '1F567',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'one-o-clock',
  character: '🕐',
  unicodeName: 'one o’clock',
  codePoint: '1F550',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'one-thirty',
  character: '🕜',
  unicodeName: 'one-thirty',
  codePoint: '1F55C',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'two-o-clock',
  character: '🕑',
  unicodeName: 'two o’clock',
  codePoint: '1F551',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'two-thirty',
  character: '🕝',
  unicodeName: 'two-thirty',
  codePoint: '1F55D',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'three-o-clock',
  character: '🕒',
  unicodeName: 'three o’clock',
  codePoint: '1F552',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'three-thirty',
  character: '🕞',
  unicodeName: 'three-thirty',
  codePoint: '1F55E',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'four-o-clock',
  character: '🕓',
  unicodeName: 'four o’clock',
  codePoint: '1F553',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'four-thirty',
  character: '🕟',
  unicodeName: 'four-thirty',
  codePoint: '1F55F',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'five-o-clock',
  character: '🕔',
  unicodeName: 'five o’clock',
  codePoint: '1F554',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'five-thirty',
  character: '🕠',
  unicodeName: 'five-thirty',
  codePoint: '1F560',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'six-o-clock',
  character: '🕕',
  unicodeName: 'six o’clock',
  codePoint: '1F555',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'six-thirty',
  character: '🕡',
  unicodeName: 'six-thirty',
  codePoint: '1F561',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'seven-o-clock',
  character: '🕖',
  unicodeName: 'seven o’clock',
  codePoint: '1F556',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'seven-thirty',
  character: '🕢',
  unicodeName: 'seven-thirty',
  codePoint: '1F562',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'eight-o-clock',
  character: '🕗',
  unicodeName: 'eight o’clock',
  codePoint: '1F557',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'eight-thirty',
  character: '🕣',
  unicodeName: 'eight-thirty',
  codePoint: '1F563',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'nine-o-clock',
  character: '🕘',
  unicodeName: 'nine o’clock',
  codePoint: '1F558',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'nine-thirty',
  character: '🕤',
  unicodeName: 'nine-thirty',
  codePoint: '1F564',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'ten-o-clock',
  character: '🕙',
  unicodeName: 'ten o’clock',
  codePoint: '1F559',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'ten-thirty',
  character: '🕥',
  unicodeName: 'ten-thirty',
  codePoint: '1F565',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'eleven-o-clock',
  character: '🕚',
  unicodeName: 'eleven o’clock',
  codePoint: '1F55A',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'eleven-thirty',
  character: '🕦',
  unicodeName: 'eleven-thirty',
  codePoint: '1F566',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'new-moon',
  character: '🌑',
  unicodeName: 'new moon',
  codePoint: '1F311',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'waxing-crescent-moon',
  character: '🌒',
  unicodeName: 'waxing crescent moon',
  codePoint: '1F312',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'first-quarter-moon',
  character: '🌓',
  unicodeName: 'first quarter moon',
  codePoint: '1F313',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'waxing-gibbous-moon',
  character: '🌔',
  unicodeName: 'waxing gibbous moon',
  codePoint: '1F314',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'full-moon',
  character: '🌕',
  unicodeName: 'full moon',
  codePoint: '1F315',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'waning-gibbous-moon',
  character: '🌖',
  unicodeName: 'waning gibbous moon',
  codePoint: '1F316',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'last-quarter-moon',
  character: '🌗',
  unicodeName: 'last quarter moon',
  codePoint: '1F317',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'waning-crescent-moon',
  character: '🌘',
  unicodeName: 'waning crescent moon',
  codePoint: '1F318',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'crescent-moon',
  character: '🌙',
  unicodeName: 'crescent moon',
  codePoint: '1F319',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'new-moon-face',
  character: '🌚',
  unicodeName: 'new moon face',
  codePoint: '1F31A',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'first-quarter-moon-face',
  character: '🌛',
  unicodeName: 'first quarter moon face',
  codePoint: '1F31B',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'last-quarter-moon-face',
  character: '🌜',
  unicodeName: 'last quarter moon face',
  codePoint: '1F31C',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'thermometer',
  character: '🌡️',
  unicodeName: 'thermometer',
  codePoint: '1F321 FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'sun',
  character: '☀️',
  unicodeName: 'sun',
  codePoint: '2600 FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'full-moon-face',
  character: '🌝',
  unicodeName: 'full moon face',
  codePoint: '1F31D',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'sun-with-face',
  character: '🌞',
  unicodeName: 'sun with face',
  codePoint: '1F31E',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'ringed-planet',
  character: '🪐',
  unicodeName: 'ringed planet',
  codePoint: '1FA90',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'star',
  character: '⭐',
  unicodeName: 'star',
  codePoint: '2B50',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'glowing-star',
  character: '🌟',
  unicodeName: 'glowing star',
  codePoint: '1F31F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'shooting-star',
  character: '🌠',
  unicodeName: 'shooting star',
  codePoint: '1F320',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'milky-way',
  character: '🌌',
  unicodeName: 'milky way',
  codePoint: '1F30C',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'cloud',
  character: '☁️',
  unicodeName: 'cloud',
  codePoint: '2601 FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'sun-behind-cloud',
  character: '⛅',
  unicodeName: 'sun behind cloud',
  codePoint: '26C5',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'cloud-with-lightning-and-rain',
  character: '⛈️',
  unicodeName: 'cloud with lightning and rain',
  codePoint: '26C8 FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'sun-behind-small-cloud',
  character: '🌤️',
  unicodeName: 'sun behind small cloud',
  codePoint: '1F324 FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'sun-behind-large-cloud',
  character: '🌥️',
  unicodeName: 'sun behind large cloud',
  codePoint: '1F325 FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'sun-behind-rain-cloud',
  character: '🌦️',
  unicodeName: 'sun behind rain cloud',
  codePoint: '1F326 FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'cloud-with-rain',
  character: '🌧️',
  unicodeName: 'cloud with rain',
  codePoint: '1F327 FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'cloud-with-snow',
  character: '🌨️',
  unicodeName: 'cloud with snow',
  codePoint: '1F328 FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'cloud-with-lightning',
  character: '🌩️',
  unicodeName: 'cloud with lightning',
  codePoint: '1F329 FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'tornado',
  character: '🌪️',
  unicodeName: 'tornado',
  codePoint: '1F32A FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'fog',
  character: '🌫️',
  unicodeName: 'fog',
  codePoint: '1F32B FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'wind-face',
  character: '🌬️',
  unicodeName: 'wind face',
  codePoint: '1F32C FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'cyclone',
  character: '🌀',
  unicodeName: 'cyclone',
  codePoint: '1F300',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'rainbow',
  character: '🌈',
  unicodeName: 'rainbow',
  codePoint: '1F308',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'closed-umbrella',
  character: '🌂',
  unicodeName: 'closed umbrella',
  codePoint: '1F302',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'umbrella',
  character: '☂️',
  unicodeName: 'umbrella',
  codePoint: '2602 FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'umbrella-with-rain-drops',
  character: '☔',
  unicodeName: 'umbrella with rain drops',
  codePoint: '2614',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'umbrella-on-ground',
  character: '⛱️',
  unicodeName: 'umbrella on ground',
  codePoint: '26F1 FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'high-voltage',
  character: '⚡',
  unicodeName: 'high voltage',
  codePoint: '26A1',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'snowflake',
  character: '❄️',
  unicodeName: 'snowflake',
  codePoint: '2744 FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'snowman',
  character: '☃️',
  unicodeName: 'snowman',
  codePoint: '2603 FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'snowman-without-snow',
  character: '⛄',
  unicodeName: 'snowman without snow',
  codePoint: '26C4',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'comet',
  character: '☄️',
  unicodeName: 'comet',
  codePoint: '2604 FE0F',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'fire',
  character: '🔥',
  unicodeName: 'fire',
  codePoint: '1F525',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'droplet',
  character: '💧',
  unicodeName: 'droplet',
  codePoint: '1F4A7',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'water-wave',
  character: '🌊',
  unicodeName: 'water wave',
  codePoint: '1F30A',
  group: 'travel-places',
  subGroup: 'sky-weather'
}, {
  slug: 'jack-o-lantern',
  character: '🎃',
  unicodeName: 'jack-o-lantern',
  codePoint: '1F383',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'christmas-tree',
  character: '🎄',
  unicodeName: 'Christmas tree',
  codePoint: '1F384',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'fireworks',
  character: '🎆',
  unicodeName: 'fireworks',
  codePoint: '1F386',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'sparkler',
  character: '🎇',
  unicodeName: 'sparkler',
  codePoint: '1F387',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'firecracker',
  character: '🧨',
  unicodeName: 'firecracker',
  codePoint: '1F9E8',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'sparkles',
  character: '✨',
  unicodeName: 'sparkles',
  codePoint: '2728',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'balloon',
  character: '🎈',
  unicodeName: 'balloon',
  codePoint: '1F388',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'party-popper',
  character: '🎉',
  unicodeName: 'party popper',
  codePoint: '1F389',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'confetti-ball',
  character: '🎊',
  unicodeName: 'confetti ball',
  codePoint: '1F38A',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'tanabata-tree',
  character: '🎋',
  unicodeName: 'tanabata tree',
  codePoint: '1F38B',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'pine-decoration',
  character: '🎍',
  unicodeName: 'pine decoration',
  codePoint: '1F38D',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'japanese-dolls',
  character: '🎎',
  unicodeName: 'Japanese dolls',
  codePoint: '1F38E',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'carp-streamer',
  character: '🎏',
  unicodeName: 'carp streamer',
  codePoint: '1F38F',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'wind-chime',
  character: '🎐',
  unicodeName: 'wind chime',
  codePoint: '1F390',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'moon-viewing-ceremony',
  character: '🎑',
  unicodeName: 'moon viewing ceremony',
  codePoint: '1F391',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'red-envelope',
  character: '🧧',
  unicodeName: 'red envelope',
  codePoint: '1F9E7',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'ribbon',
  character: '🎀',
  unicodeName: 'ribbon',
  codePoint: '1F380',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'wrapped-gift',
  character: '🎁',
  unicodeName: 'wrapped gift',
  codePoint: '1F381',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'reminder-ribbon',
  character: '🎗️',
  unicodeName: 'reminder ribbon',
  codePoint: '1F397 FE0F',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'admission-tickets',
  character: '🎟️',
  unicodeName: 'admission tickets',
  codePoint: '1F39F FE0F',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'ticket',
  character: '🎫',
  unicodeName: 'ticket',
  codePoint: '1F3AB',
  group: 'activities',
  subGroup: 'event'
}, {
  slug: 'military-medal',
  character: '🎖️',
  unicodeName: 'military medal',
  codePoint: '1F396 FE0F',
  group: 'activities',
  subGroup: 'award-medal'
}, {
  slug: 'trophy',
  character: '🏆',
  unicodeName: 'trophy',
  codePoint: '1F3C6',
  group: 'activities',
  subGroup: 'award-medal'
}, {
  slug: 'sports-medal',
  character: '🏅',
  unicodeName: 'sports medal',
  codePoint: '1F3C5',
  group: 'activities',
  subGroup: 'award-medal'
}, {
  slug: '1st-place-medal',
  character: '🥇',
  unicodeName: '1st place medal',
  codePoint: '1F947',
  group: 'activities',
  subGroup: 'award-medal'
}, {
  slug: '2nd-place-medal',
  character: '🥈',
  unicodeName: '2nd place medal',
  codePoint: '1F948',
  group: 'activities',
  subGroup: 'award-medal'
}, {
  slug: '3rd-place-medal',
  character: '🥉',
  unicodeName: '3rd place medal',
  codePoint: '1F949',
  group: 'activities',
  subGroup: 'award-medal'
}, {
  slug: 'soccer-ball',
  character: '⚽',
  unicodeName: 'soccer ball',
  codePoint: '26BD',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'baseball',
  character: '⚾',
  unicodeName: 'baseball',
  codePoint: '26BE',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'softball',
  character: '🥎',
  unicodeName: 'softball',
  codePoint: '1F94E',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'basketball',
  character: '🏀',
  unicodeName: 'basketball',
  codePoint: '1F3C0',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'volleyball',
  character: '🏐',
  unicodeName: 'volleyball',
  codePoint: '1F3D0',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'american-football',
  character: '🏈',
  unicodeName: 'american football',
  codePoint: '1F3C8',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'rugby-football',
  character: '🏉',
  unicodeName: 'rugby football',
  codePoint: '1F3C9',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'tennis',
  character: '🎾',
  unicodeName: 'tennis',
  codePoint: '1F3BE',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'flying-disc',
  character: '🥏',
  unicodeName: 'flying disc',
  codePoint: '1F94F',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'bowling',
  character: '🎳',
  unicodeName: 'bowling',
  codePoint: '1F3B3',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'cricket-game',
  character: '🏏',
  unicodeName: 'cricket game',
  codePoint: '1F3CF',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'field-hockey',
  character: '🏑',
  unicodeName: 'field hockey',
  codePoint: '1F3D1',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'ice-hockey',
  character: '🏒',
  unicodeName: 'ice hockey',
  codePoint: '1F3D2',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'lacrosse',
  character: '🥍',
  unicodeName: 'lacrosse',
  codePoint: '1F94D',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'ping-pong',
  character: '🏓',
  unicodeName: 'ping pong',
  codePoint: '1F3D3',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'badminton',
  character: '🏸',
  unicodeName: 'badminton',
  codePoint: '1F3F8',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'boxing-glove',
  character: '🥊',
  unicodeName: 'boxing glove',
  codePoint: '1F94A',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'martial-arts-uniform',
  character: '🥋',
  unicodeName: 'martial arts uniform',
  codePoint: '1F94B',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'goal-net',
  character: '🥅',
  unicodeName: 'goal net',
  codePoint: '1F945',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'flag-in-hole',
  character: '⛳',
  unicodeName: 'flag in hole',
  codePoint: '26F3',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'ice-skate',
  character: '⛸️',
  unicodeName: 'ice skate',
  codePoint: '26F8 FE0F',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'fishing-pole',
  character: '🎣',
  unicodeName: 'fishing pole',
  codePoint: '1F3A3',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'diving-mask',
  character: '🤿',
  unicodeName: 'diving mask',
  codePoint: '1F93F',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'running-shirt',
  character: '🎽',
  unicodeName: 'running shirt',
  codePoint: '1F3BD',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'skis',
  character: '🎿',
  unicodeName: 'skis',
  codePoint: '1F3BF',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'sled',
  character: '🛷',
  unicodeName: 'sled',
  codePoint: '1F6F7',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'curling-stone',
  character: '🥌',
  unicodeName: 'curling stone',
  codePoint: '1F94C',
  group: 'activities',
  subGroup: 'sport'
}, {
  slug: 'direct-hit',
  character: '🎯',
  unicodeName: 'direct hit',
  codePoint: '1F3AF',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'yo-yo',
  character: '🪀',
  unicodeName: 'yo-yo',
  codePoint: '1FA80',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'kite',
  character: '🪁',
  unicodeName: 'kite',
  codePoint: '1FA81',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'pool-8-ball',
  character: '🎱',
  unicodeName: 'pool 8 ball',
  codePoint: '1F3B1',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'crystal-ball',
  character: '🔮',
  unicodeName: 'crystal ball',
  codePoint: '1F52E',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'magic-wand',
  character: '🪄',
  unicodeName: 'magic wand',
  codePoint: '1FA84',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'nazar-amulet',
  character: '🧿',
  unicodeName: 'nazar amulet',
  codePoint: '1F9FF',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'video-game',
  character: '🎮',
  unicodeName: 'video game',
  codePoint: '1F3AE',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'joystick',
  character: '🕹️',
  unicodeName: 'joystick',
  codePoint: '1F579 FE0F',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'slot-machine',
  character: '🎰',
  unicodeName: 'slot machine',
  codePoint: '1F3B0',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'game-die',
  character: '🎲',
  unicodeName: 'game die',
  codePoint: '1F3B2',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'puzzle-piece',
  character: '🧩',
  unicodeName: 'puzzle piece',
  codePoint: '1F9E9',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'teddy-bear',
  character: '🧸',
  unicodeName: 'teddy bear',
  codePoint: '1F9F8',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'pinata',
  character: '🪅',
  unicodeName: 'piñata',
  codePoint: '1FA85',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'nesting-dolls',
  character: '🪆',
  unicodeName: 'nesting dolls',
  codePoint: '1FA86',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'spade-suit',
  character: '♠️',
  unicodeName: 'spade suit',
  codePoint: '2660 FE0F',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'heart-suit',
  character: '♥️',
  unicodeName: 'heart suit',
  codePoint: '2665 FE0F',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'diamond-suit',
  character: '♦️',
  unicodeName: 'diamond suit',
  codePoint: '2666 FE0F',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'club-suit',
  character: '♣️',
  unicodeName: 'club suit',
  codePoint: '2663 FE0F',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'chess-pawn',
  character: '♟️',
  unicodeName: 'chess pawn',
  codePoint: '265F FE0F',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'joker',
  character: '🃏',
  unicodeName: 'joker',
  codePoint: '1F0CF',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'mahjong-red-dragon',
  character: '🀄',
  unicodeName: 'mahjong red dragon',
  codePoint: '1F004',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'flower-playing-cards',
  character: '🎴',
  unicodeName: 'flower playing cards',
  codePoint: '1F3B4',
  group: 'activities',
  subGroup: 'game'
}, {
  slug: 'performing-arts',
  character: '🎭',
  unicodeName: 'performing arts',
  codePoint: '1F3AD',
  group: 'activities',
  subGroup: 'arts-crafts'
}, {
  slug: 'framed-picture',
  character: '🖼️',
  unicodeName: 'framed picture',
  codePoint: '1F5BC FE0F',
  group: 'activities',
  subGroup: 'arts-crafts'
}, {
  slug: 'artist-palette',
  character: '🎨',
  unicodeName: 'artist palette',
  codePoint: '1F3A8',
  group: 'activities',
  subGroup: 'arts-crafts'
}, {
  slug: 'thread',
  character: '🧵',
  unicodeName: 'thread',
  codePoint: '1F9F5',
  group: 'activities',
  subGroup: 'arts-crafts'
}, {
  slug: 'sewing-needle',
  character: '🪡',
  unicodeName: 'sewing needle',
  codePoint: '1FAA1',
  group: 'activities',
  subGroup: 'arts-crafts'
}, {
  slug: 'yarn',
  character: '🧶',
  unicodeName: 'yarn',
  codePoint: '1F9F6',
  group: 'activities',
  subGroup: 'arts-crafts'
}, {
  slug: 'knot',
  character: '🪢',
  unicodeName: 'knot',
  codePoint: '1FAA2',
  group: 'activities',
  subGroup: 'arts-crafts'
}, {
  slug: 'glasses',
  character: '👓',
  unicodeName: 'glasses',
  codePoint: '1F453',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'sunglasses',
  character: '🕶️',
  unicodeName: 'sunglasses',
  codePoint: '1F576 FE0F',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'goggles',
  character: '🥽',
  unicodeName: 'goggles',
  codePoint: '1F97D',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'lab-coat',
  character: '🥼',
  unicodeName: 'lab coat',
  codePoint: '1F97C',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'safety-vest',
  character: '🦺',
  unicodeName: 'safety vest',
  codePoint: '1F9BA',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'necktie',
  character: '👔',
  unicodeName: 'necktie',
  codePoint: '1F454',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 't-shirt',
  character: '👕',
  unicodeName: 't-shirt',
  codePoint: '1F455',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'jeans',
  character: '👖',
  unicodeName: 'jeans',
  codePoint: '1F456',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'scarf',
  character: '🧣',
  unicodeName: 'scarf',
  codePoint: '1F9E3',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'gloves',
  character: '🧤',
  unicodeName: 'gloves',
  codePoint: '1F9E4',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'coat',
  character: '🧥',
  unicodeName: 'coat',
  codePoint: '1F9E5',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'socks',
  character: '🧦',
  unicodeName: 'socks',
  codePoint: '1F9E6',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'dress',
  character: '👗',
  unicodeName: 'dress',
  codePoint: '1F457',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'kimono',
  character: '👘',
  unicodeName: 'kimono',
  codePoint: '1F458',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'sari',
  character: '🥻',
  unicodeName: 'sari',
  codePoint: '1F97B',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'one-piece-swimsuit',
  character: '🩱',
  unicodeName: 'one-piece swimsuit',
  codePoint: '1FA71',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'briefs',
  character: '🩲',
  unicodeName: 'briefs',
  codePoint: '1FA72',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'shorts',
  character: '🩳',
  unicodeName: 'shorts',
  codePoint: '1FA73',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'bikini',
  character: '👙',
  unicodeName: 'bikini',
  codePoint: '1F459',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'woman-s-clothes',
  character: '👚',
  unicodeName: 'woman’s clothes',
  codePoint: '1F45A',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'purse',
  character: '👛',
  unicodeName: 'purse',
  codePoint: '1F45B',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'handbag',
  character: '👜',
  unicodeName: 'handbag',
  codePoint: '1F45C',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'clutch-bag',
  character: '👝',
  unicodeName: 'clutch bag',
  codePoint: '1F45D',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'shopping-bags',
  character: '🛍️',
  unicodeName: 'shopping bags',
  codePoint: '1F6CD FE0F',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'backpack',
  character: '🎒',
  unicodeName: 'backpack',
  codePoint: '1F392',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'thong-sandal',
  character: '🩴',
  unicodeName: 'thong sandal',
  codePoint: '1FA74',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'man-s-shoe',
  character: '👞',
  unicodeName: 'man’s shoe',
  codePoint: '1F45E',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'running-shoe',
  character: '👟',
  unicodeName: 'running shoe',
  codePoint: '1F45F',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'hiking-boot',
  character: '🥾',
  unicodeName: 'hiking boot',
  codePoint: '1F97E',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'flat-shoe',
  character: '🥿',
  unicodeName: 'flat shoe',
  codePoint: '1F97F',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'high-heeled-shoe',
  character: '👠',
  unicodeName: 'high-heeled shoe',
  codePoint: '1F460',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'woman-s-sandal',
  character: '👡',
  unicodeName: 'woman’s sandal',
  codePoint: '1F461',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'ballet-shoes',
  character: '🩰',
  unicodeName: 'ballet shoes',
  codePoint: '1FA70',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'woman-s-boot',
  character: '👢',
  unicodeName: 'woman’s boot',
  codePoint: '1F462',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'crown',
  character: '👑',
  unicodeName: 'crown',
  codePoint: '1F451',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'woman-s-hat',
  character: '👒',
  unicodeName: 'woman’s hat',
  codePoint: '1F452',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'top-hat',
  character: '🎩',
  unicodeName: 'top hat',
  codePoint: '1F3A9',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'graduation-cap',
  character: '🎓',
  unicodeName: 'graduation cap',
  codePoint: '1F393',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'billed-cap',
  character: '🧢',
  unicodeName: 'billed cap',
  codePoint: '1F9E2',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'military-helmet',
  character: '🪖',
  unicodeName: 'military helmet',
  codePoint: '1FA96',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'rescue-worker-s-helmet',
  character: '⛑️',
  unicodeName: 'rescue worker’s helmet',
  codePoint: '26D1 FE0F',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'prayer-beads',
  character: '📿',
  unicodeName: 'prayer beads',
  codePoint: '1F4FF',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'lipstick',
  character: '💄',
  unicodeName: 'lipstick',
  codePoint: '1F484',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'ring',
  character: '💍',
  unicodeName: 'ring',
  codePoint: '1F48D',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'gem-stone',
  character: '💎',
  unicodeName: 'gem stone',
  codePoint: '1F48E',
  group: 'objects',
  subGroup: 'clothing'
}, {
  slug: 'muted-speaker',
  character: '🔇',
  unicodeName: 'muted speaker',
  codePoint: '1F507',
  group: 'objects',
  subGroup: 'sound'
}, {
  slug: 'speaker-low-volume',
  character: '🔈',
  unicodeName: 'speaker low volume',
  codePoint: '1F508',
  group: 'objects',
  subGroup: 'sound'
}, {
  slug: 'speaker-medium-volume',
  character: '🔉',
  unicodeName: 'speaker medium volume',
  codePoint: '1F509',
  group: 'objects',
  subGroup: 'sound'
}, {
  slug: 'speaker-high-volume',
  character: '🔊',
  unicodeName: 'speaker high volume',
  codePoint: '1F50A',
  group: 'objects',
  subGroup: 'sound'
}, {
  slug: 'loudspeaker',
  character: '📢',
  unicodeName: 'loudspeaker',
  codePoint: '1F4E2',
  group: 'objects',
  subGroup: 'sound'
}, {
  slug: 'megaphone',
  character: '📣',
  unicodeName: 'megaphone',
  codePoint: '1F4E3',
  group: 'objects',
  subGroup: 'sound'
}, {
  slug: 'postal-horn',
  character: '📯',
  unicodeName: 'postal horn',
  codePoint: '1F4EF',
  group: 'objects',
  subGroup: 'sound'
}, {
  slug: 'bell',
  character: '🔔',
  unicodeName: 'bell',
  codePoint: '1F514',
  group: 'objects',
  subGroup: 'sound'
}, {
  slug: 'bell-with-slash',
  character: '🔕',
  unicodeName: 'bell with slash',
  codePoint: '1F515',
  group: 'objects',
  subGroup: 'sound'
}, {
  slug: 'musical-score',
  character: '🎼',
  unicodeName: 'musical score',
  codePoint: '1F3BC',
  group: 'objects',
  subGroup: 'music'
}, {
  slug: 'musical-note',
  character: '🎵',
  unicodeName: 'musical note',
  codePoint: '1F3B5',
  group: 'objects',
  subGroup: 'music'
}, {
  slug: 'musical-notes',
  character: '🎶',
  unicodeName: 'musical notes',
  codePoint: '1F3B6',
  group: 'objects',
  subGroup: 'music'
}, {
  slug: 'studio-microphone',
  character: '🎙️',
  unicodeName: 'studio microphone',
  codePoint: '1F399 FE0F',
  group: 'objects',
  subGroup: 'music'
}, {
  slug: 'level-slider',
  character: '🎚️',
  unicodeName: 'level slider',
  codePoint: '1F39A FE0F',
  group: 'objects',
  subGroup: 'music'
}, {
  slug: 'control-knobs',
  character: '🎛️',
  unicodeName: 'control knobs',
  codePoint: '1F39B FE0F',
  group: 'objects',
  subGroup: 'music'
}, {
  slug: 'microphone',
  character: '🎤',
  unicodeName: 'microphone',
  codePoint: '1F3A4',
  group: 'objects',
  subGroup: 'music'
}, {
  slug: 'headphone',
  character: '🎧',
  unicodeName: 'headphone',
  codePoint: '1F3A7',
  group: 'objects',
  subGroup: 'music'
}, {
  slug: 'radio',
  character: '📻',
  unicodeName: 'radio',
  codePoint: '1F4FB',
  group: 'objects',
  subGroup: 'music'
}, {
  slug: 'saxophone',
  character: '🎷',
  unicodeName: 'saxophone',
  codePoint: '1F3B7',
  group: 'objects',
  subGroup: 'musical-instrument'
}, {
  slug: 'accordion',
  character: '🪗',
  unicodeName: 'accordion',
  codePoint: '1FA97',
  group: 'objects',
  subGroup: 'musical-instrument'
}, {
  slug: 'guitar',
  character: '🎸',
  unicodeName: 'guitar',
  codePoint: '1F3B8',
  group: 'objects',
  subGroup: 'musical-instrument'
}, {
  slug: 'musical-keyboard',
  character: '🎹',
  unicodeName: 'musical keyboard',
  codePoint: '1F3B9',
  group: 'objects',
  subGroup: 'musical-instrument'
}, {
  slug: 'trumpet',
  character: '🎺',
  unicodeName: 'trumpet',
  codePoint: '1F3BA',
  group: 'objects',
  subGroup: 'musical-instrument'
}, {
  slug: 'violin',
  character: '🎻',
  unicodeName: 'violin',
  codePoint: '1F3BB',
  group: 'objects',
  subGroup: 'musical-instrument'
}, {
  slug: 'banjo',
  character: '🪕',
  unicodeName: 'banjo',
  codePoint: '1FA95',
  group: 'objects',
  subGroup: 'musical-instrument'
}, {
  slug: 'drum',
  character: '🥁',
  unicodeName: 'drum',
  codePoint: '1F941',
  group: 'objects',
  subGroup: 'musical-instrument'
}, {
  slug: 'long-drum',
  character: '🪘',
  unicodeName: 'long drum',
  codePoint: '1FA98',
  group: 'objects',
  subGroup: 'musical-instrument'
}, {
  slug: 'mobile-phone',
  character: '📱',
  unicodeName: 'mobile phone',
  codePoint: '1F4F1',
  group: 'objects',
  subGroup: 'phone'
}, {
  slug: 'mobile-phone-with-arrow',
  character: '📲',
  unicodeName: 'mobile phone with arrow',
  codePoint: '1F4F2',
  group: 'objects',
  subGroup: 'phone'
}, {
  slug: 'telephone',
  character: '☎️',
  unicodeName: 'telephone',
  codePoint: '260E FE0F',
  group: 'objects',
  subGroup: 'phone'
}, {
  slug: 'telephone-receiver',
  character: '📞',
  unicodeName: 'telephone receiver',
  codePoint: '1F4DE',
  group: 'objects',
  subGroup: 'phone'
}, {
  slug: 'pager',
  character: '📟',
  unicodeName: 'pager',
  codePoint: '1F4DF',
  group: 'objects',
  subGroup: 'phone'
}, {
  slug: 'fax-machine',
  character: '📠',
  unicodeName: 'fax machine',
  codePoint: '1F4E0',
  group: 'objects',
  subGroup: 'phone'
}, {
  slug: 'battery',
  character: '🔋',
  unicodeName: 'battery',
  codePoint: '1F50B',
  group: 'objects',
  subGroup: 'computer'
}, {
  slug: 'electric-plug',
  character: '🔌',
  unicodeName: 'electric plug',
  codePoint: '1F50C',
  group: 'objects',
  subGroup: 'computer'
}, {
  slug: 'laptop',
  character: '💻',
  unicodeName: 'laptop',
  codePoint: '1F4BB',
  group: 'objects',
  subGroup: 'computer'
}, {
  slug: 'desktop-computer',
  character: '🖥️',
  unicodeName: 'desktop computer',
  codePoint: '1F5A5 FE0F',
  group: 'objects',
  subGroup: 'computer'
}, {
  slug: 'printer',
  character: '🖨️',
  unicodeName: 'printer',
  codePoint: '1F5A8 FE0F',
  group: 'objects',
  subGroup: 'computer'
}, {
  slug: 'keyboard',
  character: '⌨️',
  unicodeName: 'keyboard',
  codePoint: '2328 FE0F',
  group: 'objects',
  subGroup: 'computer'
}, {
  slug: 'computer-mouse',
  character: '🖱️',
  unicodeName: 'computer mouse',
  codePoint: '1F5B1 FE0F',
  group: 'objects',
  subGroup: 'computer'
}, {
  slug: 'trackball',
  character: '🖲️',
  unicodeName: 'trackball',
  codePoint: '1F5B2 FE0F',
  group: 'objects',
  subGroup: 'computer'
}, {
  slug: 'computer-disk',
  character: '💽',
  unicodeName: 'computer disk',
  codePoint: '1F4BD',
  group: 'objects',
  subGroup: 'computer'
}, {
  slug: 'floppy-disk',
  character: '💾',
  unicodeName: 'floppy disk',
  codePoint: '1F4BE',
  group: 'objects',
  subGroup: 'computer'
}, {
  slug: 'optical-disk',
  character: '💿',
  unicodeName: 'optical disk',
  codePoint: '1F4BF',
  group: 'objects',
  subGroup: 'computer'
}, {
  slug: 'dvd',
  character: '📀',
  unicodeName: 'dvd',
  codePoint: '1F4C0',
  group: 'objects',
  subGroup: 'computer'
}, {
  slug: 'abacus',
  character: '🧮',
  unicodeName: 'abacus',
  codePoint: '1F9EE',
  group: 'objects',
  subGroup: 'computer'
}, {
  slug: 'movie-camera',
  character: '🎥',
  unicodeName: 'movie camera',
  codePoint: '1F3A5',
  group: 'objects',
  subGroup: 'light-video'
}, {
  slug: 'film-frames',
  character: '🎞️',
  unicodeName: 'film frames',
  codePoint: '1F39E FE0F',
  group: 'objects',
  subGroup: 'light-video'
}, {
  slug: 'film-projector',
  character: '📽️',
  unicodeName: 'film projector',
  codePoint: '1F4FD FE0F',
  group: 'objects',
  subGroup: 'light-video'
}, {
  slug: 'clapper-board',
  character: '🎬',
  unicodeName: 'clapper board',
  codePoint: '1F3AC',
  group: 'objects',
  subGroup: 'light-video'
}, {
  slug: 'television',
  character: '📺',
  unicodeName: 'television',
  codePoint: '1F4FA',
  group: 'objects',
  subGroup: 'light-video'
}, {
  slug: 'camera',
  character: '📷',
  unicodeName: 'camera',
  codePoint: '1F4F7',
  group: 'objects',
  subGroup: 'light-video'
}, {
  slug: 'camera-with-flash',
  character: '📸',
  unicodeName: 'camera with flash',
  codePoint: '1F4F8',
  group: 'objects',
  subGroup: 'light-video'
}, {
  slug: 'video-camera',
  character: '📹',
  unicodeName: 'video camera',
  codePoint: '1F4F9',
  group: 'objects',
  subGroup: 'light-video'
}, {
  slug: 'videocassette',
  character: '📼',
  unicodeName: 'videocassette',
  codePoint: '1F4FC',
  group: 'objects',
  subGroup: 'light-video'
}, {
  slug: 'magnifying-glass-tilted-left',
  character: '🔍',
  unicodeName: 'magnifying glass tilted left',
  codePoint: '1F50D',
  group: 'objects',
  subGroup: 'light-video'
}, {
  slug: 'magnifying-glass-tilted-right',
  character: '🔎',
  unicodeName: 'magnifying glass tilted right',
  codePoint: '1F50E',
  group: 'objects',
  subGroup: 'light-video'
}, {
  slug: 'candle',
  character: '🕯️',
  unicodeName: 'candle',
  codePoint: '1F56F FE0F',
  group: 'objects',
  subGroup: 'light-video'
}, {
  slug: 'light-bulb',
  character: '💡',
  unicodeName: 'light bulb',
  codePoint: '1F4A1',
  group: 'objects',
  subGroup: 'light-video'
}, {
  slug: 'flashlight',
  character: '🔦',
  unicodeName: 'flashlight',
  codePoint: '1F526',
  group: 'objects',
  subGroup: 'light-video'
}, {
  slug: 'red-paper-lantern',
  character: '🏮',
  unicodeName: 'red paper lantern',
  codePoint: '1F3EE',
  group: 'objects',
  subGroup: 'light-video'
}, {
  slug: 'diya-lamp',
  character: '🪔',
  unicodeName: 'diya lamp',
  codePoint: '1FA94',
  group: 'objects',
  subGroup: 'light-video'
}, {
  slug: 'notebook-with-decorative-cover',
  character: '📔',
  unicodeName: 'notebook with decorative cover',
  codePoint: '1F4D4',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'closed-book',
  character: '📕',
  unicodeName: 'closed book',
  codePoint: '1F4D5',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'open-book',
  character: '📖',
  unicodeName: 'open book',
  codePoint: '1F4D6',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'green-book',
  character: '📗',
  unicodeName: 'green book',
  codePoint: '1F4D7',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'blue-book',
  character: '📘',
  unicodeName: 'blue book',
  codePoint: '1F4D8',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'orange-book',
  character: '📙',
  unicodeName: 'orange book',
  codePoint: '1F4D9',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'books',
  character: '📚',
  unicodeName: 'books',
  codePoint: '1F4DA',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'notebook',
  character: '📓',
  unicodeName: 'notebook',
  codePoint: '1F4D3',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'ledger',
  character: '📒',
  unicodeName: 'ledger',
  codePoint: '1F4D2',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'page-with-curl',
  character: '📃',
  unicodeName: 'page with curl',
  codePoint: '1F4C3',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'scroll',
  character: '📜',
  unicodeName: 'scroll',
  codePoint: '1F4DC',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'page-facing-up',
  character: '📄',
  unicodeName: 'page facing up',
  codePoint: '1F4C4',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'newspaper',
  character: '📰',
  unicodeName: 'newspaper',
  codePoint: '1F4F0',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'rolled-up-newspaper',
  character: '🗞️',
  unicodeName: 'rolled-up newspaper',
  codePoint: '1F5DE FE0F',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'bookmark-tabs',
  character: '📑',
  unicodeName: 'bookmark tabs',
  codePoint: '1F4D1',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'bookmark',
  character: '🔖',
  unicodeName: 'bookmark',
  codePoint: '1F516',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'label',
  character: '🏷️',
  unicodeName: 'label',
  codePoint: '1F3F7 FE0F',
  group: 'objects',
  subGroup: 'book-paper'
}, {
  slug: 'money-bag',
  character: '💰',
  unicodeName: 'money bag',
  codePoint: '1F4B0',
  group: 'objects',
  subGroup: 'money'
}, {
  slug: 'coin',
  character: '🪙',
  unicodeName: 'coin',
  codePoint: '1FA99',
  group: 'objects',
  subGroup: 'money'
}, {
  slug: 'yen-banknote',
  character: '💴',
  unicodeName: 'yen banknote',
  codePoint: '1F4B4',
  group: 'objects',
  subGroup: 'money'
}, {
  slug: 'dollar-banknote',
  character: '💵',
  unicodeName: 'dollar banknote',
  codePoint: '1F4B5',
  group: 'objects',
  subGroup: 'money'
}, {
  slug: 'euro-banknote',
  character: '💶',
  unicodeName: 'euro banknote',
  codePoint: '1F4B6',
  group: 'objects',
  subGroup: 'money'
}, {
  slug: 'pound-banknote',
  character: '💷',
  unicodeName: 'pound banknote',
  codePoint: '1F4B7',
  group: 'objects',
  subGroup: 'money'
}, {
  slug: 'money-with-wings',
  character: '💸',
  unicodeName: 'money with wings',
  codePoint: '1F4B8',
  group: 'objects',
  subGroup: 'money'
}, {
  slug: 'credit-card',
  character: '💳',
  unicodeName: 'credit card',
  codePoint: '1F4B3',
  group: 'objects',
  subGroup: 'money'
}, {
  slug: 'receipt',
  character: '🧾',
  unicodeName: 'receipt',
  codePoint: '1F9FE',
  group: 'objects',
  subGroup: 'money'
}, {
  slug: 'chart-increasing-with-yen',
  character: '💹',
  unicodeName: 'chart increasing with yen',
  codePoint: '1F4B9',
  group: 'objects',
  subGroup: 'money'
}, {
  slug: 'envelope',
  character: '✉️',
  unicodeName: 'envelope',
  codePoint: '2709 FE0F',
  group: 'objects',
  subGroup: 'mail'
}, {
  slug: 'e-mail',
  character: '📧',
  unicodeName: 'e-mail',
  codePoint: '1F4E7',
  group: 'objects',
  subGroup: 'mail'
}, {
  slug: 'incoming-envelope',
  character: '📨',
  unicodeName: 'incoming envelope',
  codePoint: '1F4E8',
  group: 'objects',
  subGroup: 'mail'
}, {
  slug: 'envelope-with-arrow',
  character: '📩',
  unicodeName: 'envelope with arrow',
  codePoint: '1F4E9',
  group: 'objects',
  subGroup: 'mail'
}, {
  slug: 'outbox-tray',
  character: '📤',
  unicodeName: 'outbox tray',
  codePoint: '1F4E4',
  group: 'objects',
  subGroup: 'mail'
}, {
  slug: 'inbox-tray',
  character: '📥',
  unicodeName: 'inbox tray',
  codePoint: '1F4E5',
  group: 'objects',
  subGroup: 'mail'
}, {
  slug: 'package',
  character: '📦',
  unicodeName: 'package',
  codePoint: '1F4E6',
  group: 'objects',
  subGroup: 'mail'
}, {
  slug: 'closed-mailbox-with-raised-flag',
  character: '📫',
  unicodeName: 'closed mailbox with raised flag',
  codePoint: '1F4EB',
  group: 'objects',
  subGroup: 'mail'
}, {
  slug: 'closed-mailbox-with-lowered-flag',
  character: '📪',
  unicodeName: 'closed mailbox with lowered flag',
  codePoint: '1F4EA',
  group: 'objects',
  subGroup: 'mail'
}, {
  slug: 'open-mailbox-with-raised-flag',
  character: '📬',
  unicodeName: 'open mailbox with raised flag',
  codePoint: '1F4EC',
  group: 'objects',
  subGroup: 'mail'
}, {
  slug: 'open-mailbox-with-lowered-flag',
  character: '📭',
  unicodeName: 'open mailbox with lowered flag',
  codePoint: '1F4ED',
  group: 'objects',
  subGroup: 'mail'
}, {
  slug: 'postbox',
  character: '📮',
  unicodeName: 'postbox',
  codePoint: '1F4EE',
  group: 'objects',
  subGroup: 'mail'
}, {
  slug: 'ballot-box-with-ballot',
  character: '🗳️',
  unicodeName: 'ballot box with ballot',
  codePoint: '1F5F3 FE0F',
  group: 'objects',
  subGroup: 'mail'
}, {
  slug: 'pencil',
  character: '✏️',
  unicodeName: 'pencil',
  codePoint: '270F FE0F',
  group: 'objects',
  subGroup: 'writing'
}, {
  slug: 'black-nib',
  character: '✒️',
  unicodeName: 'black nib',
  codePoint: '2712 FE0F',
  group: 'objects',
  subGroup: 'writing'
}, {
  slug: 'fountain-pen',
  character: '🖋️',
  unicodeName: 'fountain pen',
  codePoint: '1F58B FE0F',
  group: 'objects',
  subGroup: 'writing'
}, {
  slug: 'pen',
  character: '🖊️',
  unicodeName: 'pen',
  codePoint: '1F58A FE0F',
  group: 'objects',
  subGroup: 'writing'
}, {
  slug: 'paintbrush',
  character: '🖌️',
  unicodeName: 'paintbrush',
  codePoint: '1F58C FE0F',
  group: 'objects',
  subGroup: 'writing'
}, {
  slug: 'crayon',
  character: '🖍️',
  unicodeName: 'crayon',
  codePoint: '1F58D FE0F',
  group: 'objects',
  subGroup: 'writing'
}, {
  slug: 'memo',
  character: '📝',
  unicodeName: 'memo',
  codePoint: '1F4DD',
  group: 'objects',
  subGroup: 'writing'
}, {
  slug: 'briefcase',
  character: '💼',
  unicodeName: 'briefcase',
  codePoint: '1F4BC',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'file-folder',
  character: '📁',
  unicodeName: 'file folder',
  codePoint: '1F4C1',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'open-file-folder',
  character: '📂',
  unicodeName: 'open file folder',
  codePoint: '1F4C2',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'card-index-dividers',
  character: '🗂️',
  unicodeName: 'card index dividers',
  codePoint: '1F5C2 FE0F',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'calendar',
  character: '📅',
  unicodeName: 'calendar',
  codePoint: '1F4C5',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'tear-off-calendar',
  character: '📆',
  unicodeName: 'tear-off calendar',
  codePoint: '1F4C6',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'spiral-notepad',
  character: '🗒️',
  unicodeName: 'spiral notepad',
  codePoint: '1F5D2 FE0F',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'spiral-calendar',
  character: '🗓️',
  unicodeName: 'spiral calendar',
  codePoint: '1F5D3 FE0F',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'card-index',
  character: '📇',
  unicodeName: 'card index',
  codePoint: '1F4C7',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'chart-increasing',
  character: '📈',
  unicodeName: 'chart increasing',
  codePoint: '1F4C8',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'chart-decreasing',
  character: '📉',
  unicodeName: 'chart decreasing',
  codePoint: '1F4C9',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'bar-chart',
  character: '📊',
  unicodeName: 'bar chart',
  codePoint: '1F4CA',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'clipboard',
  character: '📋',
  unicodeName: 'clipboard',
  codePoint: '1F4CB',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'pushpin',
  character: '📌',
  unicodeName: 'pushpin',
  codePoint: '1F4CC',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'round-pushpin',
  character: '📍',
  unicodeName: 'round pushpin',
  codePoint: '1F4CD',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'paperclip',
  character: '📎',
  unicodeName: 'paperclip',
  codePoint: '1F4CE',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'linked-paperclips',
  character: '🖇️',
  unicodeName: 'linked paperclips',
  codePoint: '1F587 FE0F',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'straight-ruler',
  character: '📏',
  unicodeName: 'straight ruler',
  codePoint: '1F4CF',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'triangular-ruler',
  character: '📐',
  unicodeName: 'triangular ruler',
  codePoint: '1F4D0',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'scissors',
  character: '✂️',
  unicodeName: 'scissors',
  codePoint: '2702 FE0F',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'card-file-box',
  character: '🗃️',
  unicodeName: 'card file box',
  codePoint: '1F5C3 FE0F',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'file-cabinet',
  character: '🗄️',
  unicodeName: 'file cabinet',
  codePoint: '1F5C4 FE0F',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'wastebasket',
  character: '🗑️',
  unicodeName: 'wastebasket',
  codePoint: '1F5D1 FE0F',
  group: 'objects',
  subGroup: 'office'
}, {
  slug: 'locked',
  character: '🔒',
  unicodeName: 'locked',
  codePoint: '1F512',
  group: 'objects',
  subGroup: 'lock'
}, {
  slug: 'unlocked',
  character: '🔓',
  unicodeName: 'unlocked',
  codePoint: '1F513',
  group: 'objects',
  subGroup: 'lock'
}, {
  slug: 'locked-with-pen',
  character: '🔏',
  unicodeName: 'locked with pen',
  codePoint: '1F50F',
  group: 'objects',
  subGroup: 'lock'
}, {
  slug: 'locked-with-key',
  character: '🔐',
  unicodeName: 'locked with key',
  codePoint: '1F510',
  group: 'objects',
  subGroup: 'lock'
}, {
  slug: 'key',
  character: '🔑',
  unicodeName: 'key',
  codePoint: '1F511',
  group: 'objects',
  subGroup: 'lock'
}, {
  slug: 'old-key',
  character: '🗝️',
  unicodeName: 'old key',
  codePoint: '1F5DD FE0F',
  group: 'objects',
  subGroup: 'lock'
}, {
  slug: 'hammer',
  character: '🔨',
  unicodeName: 'hammer',
  codePoint: '1F528',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'axe',
  character: '🪓',
  unicodeName: 'axe',
  codePoint: '1FA93',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'pick',
  character: '⛏️',
  unicodeName: 'pick',
  codePoint: '26CF FE0F',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'hammer-and-pick',
  character: '⚒️',
  unicodeName: 'hammer and pick',
  codePoint: '2692 FE0F',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'hammer-and-wrench',
  character: '🛠️',
  unicodeName: 'hammer and wrench',
  codePoint: '1F6E0 FE0F',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'dagger',
  character: '🗡️',
  unicodeName: 'dagger',
  codePoint: '1F5E1 FE0F',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'crossed-swords',
  character: '⚔️',
  unicodeName: 'crossed swords',
  codePoint: '2694 FE0F',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'pistol',
  character: '🔫',
  unicodeName: 'pistol',
  codePoint: '1F52B',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'boomerang',
  character: '🪃',
  unicodeName: 'boomerang',
  codePoint: '1FA83',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'bow-and-arrow',
  character: '🏹',
  unicodeName: 'bow and arrow',
  codePoint: '1F3F9',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'shield',
  character: '🛡️',
  unicodeName: 'shield',
  codePoint: '1F6E1 FE0F',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'carpentry-saw',
  character: '🪚',
  unicodeName: 'carpentry saw',
  codePoint: '1FA9A',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'wrench',
  character: '🔧',
  unicodeName: 'wrench',
  codePoint: '1F527',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'screwdriver',
  character: '🪛',
  unicodeName: 'screwdriver',
  codePoint: '1FA9B',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'nut-and-bolt',
  character: '🔩',
  unicodeName: 'nut and bolt',
  codePoint: '1F529',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'gear',
  character: '⚙️',
  unicodeName: 'gear',
  codePoint: '2699 FE0F',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'clamp',
  character: '🗜️',
  unicodeName: 'clamp',
  codePoint: '1F5DC FE0F',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'balance-scale',
  character: '⚖️',
  unicodeName: 'balance scale',
  codePoint: '2696 FE0F',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'white-cane',
  character: '🦯',
  unicodeName: 'white cane',
  codePoint: '1F9AF',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'link',
  character: '🔗',
  unicodeName: 'link',
  codePoint: '1F517',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'chains',
  character: '⛓️',
  unicodeName: 'chains',
  codePoint: '26D3 FE0F',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'hook',
  character: '🪝',
  unicodeName: 'hook',
  codePoint: '1FA9D',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'toolbox',
  character: '🧰',
  unicodeName: 'toolbox',
  codePoint: '1F9F0',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'magnet',
  character: '🧲',
  unicodeName: 'magnet',
  codePoint: '1F9F2',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'ladder',
  character: '🪜',
  unicodeName: 'ladder',
  codePoint: '1FA9C',
  group: 'objects',
  subGroup: 'tool'
}, {
  slug: 'alembic',
  character: '⚗️',
  unicodeName: 'alembic',
  codePoint: '2697 FE0F',
  group: 'objects',
  subGroup: 'science'
}, {
  slug: 'test-tube',
  character: '🧪',
  unicodeName: 'test tube',
  codePoint: '1F9EA',
  group: 'objects',
  subGroup: 'science'
}, {
  slug: 'petri-dish',
  character: '🧫',
  unicodeName: 'petri dish',
  codePoint: '1F9EB',
  group: 'objects',
  subGroup: 'science'
}, {
  slug: 'dna',
  character: '🧬',
  unicodeName: 'dna',
  codePoint: '1F9EC',
  group: 'objects',
  subGroup: 'science'
}, {
  slug: 'microscope',
  character: '🔬',
  unicodeName: 'microscope',
  codePoint: '1F52C',
  group: 'objects',
  subGroup: 'science'
}, {
  slug: 'telescope',
  character: '🔭',
  unicodeName: 'telescope',
  codePoint: '1F52D',
  group: 'objects',
  subGroup: 'science'
}, {
  slug: 'satellite-antenna',
  character: '📡',
  unicodeName: 'satellite antenna',
  codePoint: '1F4E1',
  group: 'objects',
  subGroup: 'science'
}, {
  slug: 'syringe',
  character: '💉',
  unicodeName: 'syringe',
  codePoint: '1F489',
  group: 'objects',
  subGroup: 'medical'
}, {
  slug: 'drop-of-blood',
  character: '🩸',
  unicodeName: 'drop of blood',
  codePoint: '1FA78',
  group: 'objects',
  subGroup: 'medical'
}, {
  slug: 'pill',
  character: '💊',
  unicodeName: 'pill',
  codePoint: '1F48A',
  group: 'objects',
  subGroup: 'medical'
}, {
  slug: 'adhesive-bandage',
  character: '🩹',
  unicodeName: 'adhesive bandage',
  codePoint: '1FA79',
  group: 'objects',
  subGroup: 'medical'
}, {
  slug: 'stethoscope',
  character: '🩺',
  unicodeName: 'stethoscope',
  codePoint: '1FA7A',
  group: 'objects',
  subGroup: 'medical'
}, {
  slug: 'door',
  character: '🚪',
  unicodeName: 'door',
  codePoint: '1F6AA',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'elevator',
  character: '🛗',
  unicodeName: 'elevator',
  codePoint: '1F6D7',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'mirror',
  character: '🪞',
  unicodeName: 'mirror',
  codePoint: '1FA9E',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'window',
  character: '🪟',
  unicodeName: 'window',
  codePoint: '1FA9F',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'bed',
  character: '🛏️',
  unicodeName: 'bed',
  codePoint: '1F6CF FE0F',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'couch-and-lamp',
  character: '🛋️',
  unicodeName: 'couch and lamp',
  codePoint: '1F6CB FE0F',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'chair',
  character: '🪑',
  unicodeName: 'chair',
  codePoint: '1FA91',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'toilet',
  character: '🚽',
  unicodeName: 'toilet',
  codePoint: '1F6BD',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'plunger',
  character: '🪠',
  unicodeName: 'plunger',
  codePoint: '1FAA0',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'shower',
  character: '🚿',
  unicodeName: 'shower',
  codePoint: '1F6BF',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'bathtub',
  character: '🛁',
  unicodeName: 'bathtub',
  codePoint: '1F6C1',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'mouse-trap',
  character: '🪤',
  unicodeName: 'mouse trap',
  codePoint: '1FAA4',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'razor',
  character: '🪒',
  unicodeName: 'razor',
  codePoint: '1FA92',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'lotion-bottle',
  character: '🧴',
  unicodeName: 'lotion bottle',
  codePoint: '1F9F4',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'safety-pin',
  character: '🧷',
  unicodeName: 'safety pin',
  codePoint: '1F9F7',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'broom',
  character: '🧹',
  unicodeName: 'broom',
  codePoint: '1F9F9',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'basket',
  character: '🧺',
  unicodeName: 'basket',
  codePoint: '1F9FA',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'roll-of-paper',
  character: '🧻',
  unicodeName: 'roll of paper',
  codePoint: '1F9FB',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'bucket',
  character: '🪣',
  unicodeName: 'bucket',
  codePoint: '1FAA3',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'soap',
  character: '🧼',
  unicodeName: 'soap',
  codePoint: '1F9FC',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'toothbrush',
  character: '🪥',
  unicodeName: 'toothbrush',
  codePoint: '1FAA5',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'sponge',
  character: '🧽',
  unicodeName: 'sponge',
  codePoint: '1F9FD',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'fire-extinguisher',
  character: '🧯',
  unicodeName: 'fire extinguisher',
  codePoint: '1F9EF',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'shopping-cart',
  character: '🛒',
  unicodeName: 'shopping cart',
  codePoint: '1F6D2',
  group: 'objects',
  subGroup: 'household'
}, {
  slug: 'cigarette',
  character: '🚬',
  unicodeName: 'cigarette',
  codePoint: '1F6AC',
  group: 'objects',
  subGroup: 'other-object'
}, {
  slug: 'coffin',
  character: '⚰️',
  unicodeName: 'coffin',
  codePoint: '26B0 FE0F',
  group: 'objects',
  subGroup: 'other-object'
}, {
  slug: 'headstone',
  character: '🪦',
  unicodeName: 'headstone',
  codePoint: '1FAA6',
  group: 'objects',
  subGroup: 'other-object'
}, {
  slug: 'funeral-urn',
  character: '⚱️',
  unicodeName: 'funeral urn',
  codePoint: '26B1 FE0F',
  group: 'objects',
  subGroup: 'other-object'
}, {
  slug: 'moai',
  character: '🗿',
  unicodeName: 'moai',
  codePoint: '1F5FF',
  group: 'objects',
  subGroup: 'other-object'
}, {
  slug: 'placard',
  character: '🪧',
  unicodeName: 'placard',
  codePoint: '1FAA7',
  group: 'objects',
  subGroup: 'other-object'
}, {
  slug: 'atm-sign',
  character: '🏧',
  unicodeName: 'ATM sign',
  codePoint: '1F3E7',
  group: 'symbols',
  subGroup: 'transport-sign'
}, {
  slug: 'litter-in-bin-sign',
  character: '🚮',
  unicodeName: 'litter in bin sign',
  codePoint: '1F6AE',
  group: 'symbols',
  subGroup: 'transport-sign'
}, {
  slug: 'potable-water',
  character: '🚰',
  unicodeName: 'potable water',
  codePoint: '1F6B0',
  group: 'symbols',
  subGroup: 'transport-sign'
}, {
  slug: 'wheelchair-symbol',
  character: '♿',
  unicodeName: 'wheelchair symbol',
  codePoint: '267F',
  group: 'symbols',
  subGroup: 'transport-sign'
}, {
  slug: 'men-s-room',
  character: '🚹',
  unicodeName: 'men’s room',
  codePoint: '1F6B9',
  group: 'symbols',
  subGroup: 'transport-sign'
}, {
  slug: 'women-s-room',
  character: '🚺',
  unicodeName: 'women’s room',
  codePoint: '1F6BA',
  group: 'symbols',
  subGroup: 'transport-sign'
}, {
  slug: 'restroom',
  character: '🚻',
  unicodeName: 'restroom',
  codePoint: '1F6BB',
  group: 'symbols',
  subGroup: 'transport-sign'
}, {
  slug: 'baby-symbol',
  character: '🚼',
  unicodeName: 'baby symbol',
  codePoint: '1F6BC',
  group: 'symbols',
  subGroup: 'transport-sign'
}, {
  slug: 'water-closet',
  character: '🚾',
  unicodeName: 'water closet',
  codePoint: '1F6BE',
  group: 'symbols',
  subGroup: 'transport-sign'
}, {
  slug: 'passport-control',
  character: '🛂',
  unicodeName: 'passport control',
  codePoint: '1F6C2',
  group: 'symbols',
  subGroup: 'transport-sign'
}, {
  slug: 'customs',
  character: '🛃',
  unicodeName: 'customs',
  codePoint: '1F6C3',
  group: 'symbols',
  subGroup: 'transport-sign'
}, {
  slug: 'baggage-claim',
  character: '🛄',
  unicodeName: 'baggage claim',
  codePoint: '1F6C4',
  group: 'symbols',
  subGroup: 'transport-sign'
}, {
  slug: 'left-luggage',
  character: '🛅',
  unicodeName: 'left luggage',
  codePoint: '1F6C5',
  group: 'symbols',
  subGroup: 'transport-sign'
}, {
  slug: 'warning',
  character: '⚠️',
  unicodeName: 'warning',
  codePoint: '26A0 FE0F',
  group: 'symbols',
  subGroup: 'warning'
}, {
  slug: 'children-crossing',
  character: '🚸',
  unicodeName: 'children crossing',
  codePoint: '1F6B8',
  group: 'symbols',
  subGroup: 'warning'
}, {
  slug: 'no-entry',
  character: '⛔',
  unicodeName: 'no entry',
  codePoint: '26D4',
  group: 'symbols',
  subGroup: 'warning'
}, {
  slug: 'prohibited',
  character: '🚫',
  unicodeName: 'prohibited',
  codePoint: '1F6AB',
  group: 'symbols',
  subGroup: 'warning'
}, {
  slug: 'no-bicycles',
  character: '🚳',
  unicodeName: 'no bicycles',
  codePoint: '1F6B3',
  group: 'symbols',
  subGroup: 'warning'
}, {
  slug: 'no-smoking',
  character: '🚭',
  unicodeName: 'no smoking',
  codePoint: '1F6AD',
  group: 'symbols',
  subGroup: 'warning'
}, {
  slug: 'no-littering',
  character: '🚯',
  unicodeName: 'no littering',
  codePoint: '1F6AF',
  group: 'symbols',
  subGroup: 'warning'
}, {
  slug: 'non-potable-water',
  character: '🚱',
  unicodeName: 'non-potable water',
  codePoint: '1F6B1',
  group: 'symbols',
  subGroup: 'warning'
}, {
  slug: 'no-pedestrians',
  character: '🚷',
  unicodeName: 'no pedestrians',
  codePoint: '1F6B7',
  group: 'symbols',
  subGroup: 'warning'
}, {
  slug: 'no-mobile-phones',
  character: '📵',
  unicodeName: 'no mobile phones',
  codePoint: '1F4F5',
  group: 'symbols',
  subGroup: 'warning'
}, {
  slug: 'no-one-under-eighteen',
  character: '🔞',
  unicodeName: 'no one under eighteen',
  codePoint: '1F51E',
  group: 'symbols',
  subGroup: 'warning'
}, {
  slug: 'radioactive',
  character: '☢️',
  unicodeName: 'radioactive',
  codePoint: '2622 FE0F',
  group: 'symbols',
  subGroup: 'warning'
}, {
  slug: 'biohazard',
  character: '☣️',
  unicodeName: 'biohazard',
  codePoint: '2623 FE0F',
  group: 'symbols',
  subGroup: 'warning'
}, {
  slug: 'up-arrow',
  character: '⬆️',
  unicodeName: 'up arrow',
  codePoint: '2B06 FE0F',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'up-right-arrow',
  character: '↗️',
  unicodeName: 'up-right arrow',
  codePoint: '2197 FE0F',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'right-arrow',
  character: '➡️',
  unicodeName: 'right arrow',
  codePoint: '27A1 FE0F',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'down-right-arrow',
  character: '↘️',
  unicodeName: 'down-right arrow',
  codePoint: '2198 FE0F',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'down-arrow',
  character: '⬇️',
  unicodeName: 'down arrow',
  codePoint: '2B07 FE0F',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'down-left-arrow',
  character: '↙️',
  unicodeName: 'down-left arrow',
  codePoint: '2199 FE0F',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'left-arrow',
  character: '⬅️',
  unicodeName: 'left arrow',
  codePoint: '2B05 FE0F',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'up-left-arrow',
  character: '↖️',
  unicodeName: 'up-left arrow',
  codePoint: '2196 FE0F',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'up-down-arrow',
  character: '↕️',
  unicodeName: 'up-down arrow',
  codePoint: '2195 FE0F',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'left-right-arrow',
  character: '↔️',
  unicodeName: 'left-right arrow',
  codePoint: '2194 FE0F',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'right-arrow-curving-left',
  character: '↩️',
  unicodeName: 'right arrow curving left',
  codePoint: '21A9 FE0F',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'left-arrow-curving-right',
  character: '↪️',
  unicodeName: 'left arrow curving right',
  codePoint: '21AA FE0F',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'right-arrow-curving-up',
  character: '⤴️',
  unicodeName: 'right arrow curving up',
  codePoint: '2934 FE0F',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'right-arrow-curving-down',
  character: '⤵️',
  unicodeName: 'right arrow curving down',
  codePoint: '2935 FE0F',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'clockwise-vertical-arrows',
  character: '🔃',
  unicodeName: 'clockwise vertical arrows',
  codePoint: '1F503',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'counterclockwise-arrows-button',
  character: '🔄',
  unicodeName: 'counterclockwise arrows button',
  codePoint: '1F504',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'back-arrow',
  character: '🔙',
  unicodeName: 'BACK arrow',
  codePoint: '1F519',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'end-arrow',
  character: '🔚',
  unicodeName: 'END arrow',
  codePoint: '1F51A',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'on-arrow',
  character: '🔛',
  unicodeName: 'ON! arrow',
  codePoint: '1F51B',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'soon-arrow',
  character: '🔜',
  unicodeName: 'SOON arrow',
  codePoint: '1F51C',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'top-arrow',
  character: '🔝',
  unicodeName: 'TOP arrow',
  codePoint: '1F51D',
  group: 'symbols',
  subGroup: 'arrow'
}, {
  slug: 'place-of-worship',
  character: '🛐',
  unicodeName: 'place of worship',
  codePoint: '1F6D0',
  group: 'symbols',
  subGroup: 'religion'
}, {
  slug: 'atom-symbol',
  character: '⚛️',
  unicodeName: 'atom symbol',
  codePoint: '269B FE0F',
  group: 'symbols',
  subGroup: 'religion'
}, {
  slug: 'om',
  character: '🕉️',
  unicodeName: 'om',
  codePoint: '1F549 FE0F',
  group: 'symbols',
  subGroup: 'religion'
}, {
  slug: 'star-of-david',
  character: '✡️',
  unicodeName: 'star of David',
  codePoint: '2721 FE0F',
  group: 'symbols',
  subGroup: 'religion'
}, {
  slug: 'wheel-of-dharma',
  character: '☸️',
  unicodeName: 'wheel of dharma',
  codePoint: '2638 FE0F',
  group: 'symbols',
  subGroup: 'religion'
}, {
  slug: 'yin-yang',
  character: '☯️',
  unicodeName: 'yin yang',
  codePoint: '262F FE0F',
  group: 'symbols',
  subGroup: 'religion'
}, {
  slug: 'latin-cross',
  character: '✝️',
  unicodeName: 'latin cross',
  codePoint: '271D FE0F',
  group: 'symbols',
  subGroup: 'religion'
}, {
  slug: 'orthodox-cross',
  character: '☦️',
  unicodeName: 'orthodox cross',
  codePoint: '2626 FE0F',
  group: 'symbols',
  subGroup: 'religion'
}, {
  slug: 'star-and-crescent',
  character: '☪️',
  unicodeName: 'star and crescent',
  codePoint: '262A FE0F',
  group: 'symbols',
  subGroup: 'religion'
}, {
  slug: 'peace-symbol',
  character: '☮️',
  unicodeName: 'peace symbol',
  codePoint: '262E FE0F',
  group: 'symbols',
  subGroup: 'religion'
}, {
  slug: 'menorah',
  character: '🕎',
  unicodeName: 'menorah',
  codePoint: '1F54E',
  group: 'symbols',
  subGroup: 'religion'
}, {
  slug: 'dotted-six-pointed-star',
  character: '🔯',
  unicodeName: 'dotted six-pointed star',
  codePoint: '1F52F',
  group: 'symbols',
  subGroup: 'religion'
}, {
  slug: 'aries',
  character: '♈',
  unicodeName: 'Aries',
  codePoint: '2648',
  group: 'symbols',
  subGroup: 'zodiac'
}, {
  slug: 'taurus',
  character: '♉',
  unicodeName: 'Taurus',
  codePoint: '2649',
  group: 'symbols',
  subGroup: 'zodiac'
}, {
  slug: 'gemini',
  character: '♊',
  unicodeName: 'Gemini',
  codePoint: '264A',
  group: 'symbols',
  subGroup: 'zodiac'
}, {
  slug: 'cancer',
  character: '♋',
  unicodeName: 'Cancer',
  codePoint: '264B',
  group: 'symbols',
  subGroup: 'zodiac'
}, {
  slug: 'leo',
  character: '♌',
  unicodeName: 'Leo',
  codePoint: '264C',
  group: 'symbols',
  subGroup: 'zodiac'
}, {
  slug: 'virgo',
  character: '♍',
  unicodeName: 'Virgo',
  codePoint: '264D',
  group: 'symbols',
  subGroup: 'zodiac'
}, {
  slug: 'libra',
  character: '♎',
  unicodeName: 'Libra',
  codePoint: '264E',
  group: 'symbols',
  subGroup: 'zodiac'
}, {
  slug: 'scorpio',
  character: '♏',
  unicodeName: 'Scorpio',
  codePoint: '264F',
  group: 'symbols',
  subGroup: 'zodiac'
}, {
  slug: 'sagittarius',
  character: '♐',
  unicodeName: 'Sagittarius',
  codePoint: '2650',
  group: 'symbols',
  subGroup: 'zodiac'
}, {
  slug: 'capricorn',
  character: '♑',
  unicodeName: 'Capricorn',
  codePoint: '2651',
  group: 'symbols',
  subGroup: 'zodiac'
}, {
  slug: 'aquarius',
  character: '♒',
  unicodeName: 'Aquarius',
  codePoint: '2652',
  group: 'symbols',
  subGroup: 'zodiac'
}, {
  slug: 'pisces',
  character: '♓',
  unicodeName: 'Pisces',
  codePoint: '2653',
  group: 'symbols',
  subGroup: 'zodiac'
}, {
  slug: 'ophiuchus',
  character: '⛎',
  unicodeName: 'Ophiuchus',
  codePoint: '26CE',
  group: 'symbols',
  subGroup: 'zodiac'
}, {
  slug: 'shuffle-tracks-button',
  character: '🔀',
  unicodeName: 'shuffle tracks button',
  codePoint: '1F500',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'repeat-button',
  character: '🔁',
  unicodeName: 'repeat button',
  codePoint: '1F501',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'repeat-single-button',
  character: '🔂',
  unicodeName: 'repeat single button',
  codePoint: '1F502',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'play-button',
  character: '▶️',
  unicodeName: 'play button',
  codePoint: '25B6 FE0F',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'fast-forward-button',
  character: '⏩',
  unicodeName: 'fast-forward button',
  codePoint: '23E9',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'next-track-button',
  character: '⏭️',
  unicodeName: 'next track button',
  codePoint: '23ED FE0F',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'play-or-pause-button',
  character: '⏯️',
  unicodeName: 'play or pause button',
  codePoint: '23EF FE0F',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'reverse-button',
  character: '◀️',
  unicodeName: 'reverse button',
  codePoint: '25C0 FE0F',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'fast-reverse-button',
  character: '⏪',
  unicodeName: 'fast reverse button',
  codePoint: '23EA',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'last-track-button',
  character: '⏮️',
  unicodeName: 'last track button',
  codePoint: '23EE FE0F',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'upwards-button',
  character: '🔼',
  unicodeName: 'upwards button',
  codePoint: '1F53C',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'fast-up-button',
  character: '⏫',
  unicodeName: 'fast up button',
  codePoint: '23EB',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'downwards-button',
  character: '🔽',
  unicodeName: 'downwards button',
  codePoint: '1F53D',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'fast-down-button',
  character: '⏬',
  unicodeName: 'fast down button',
  codePoint: '23EC',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'pause-button',
  character: '⏸️',
  unicodeName: 'pause button',
  codePoint: '23F8 FE0F',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'stop-button',
  character: '⏹️',
  unicodeName: 'stop button',
  codePoint: '23F9 FE0F',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'record-button',
  character: '⏺️',
  unicodeName: 'record button',
  codePoint: '23FA FE0F',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'eject-button',
  character: '⏏️',
  unicodeName: 'eject button',
  codePoint: '23CF FE0F',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'cinema',
  character: '🎦',
  unicodeName: 'cinema',
  codePoint: '1F3A6',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'dim-button',
  character: '🔅',
  unicodeName: 'dim button',
  codePoint: '1F505',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'bright-button',
  character: '🔆',
  unicodeName: 'bright button',
  codePoint: '1F506',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'antenna-bars',
  character: '📶',
  unicodeName: 'antenna bars',
  codePoint: '1F4F6',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'vibration-mode',
  character: '📳',
  unicodeName: 'vibration mode',
  codePoint: '1F4F3',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'mobile-phone-off',
  character: '📴',
  unicodeName: 'mobile phone off',
  codePoint: '1F4F4',
  group: 'symbols',
  subGroup: 'av-symbol'
}, {
  slug: 'female-sign',
  character: '♀️',
  unicodeName: 'female sign',
  codePoint: '2640 FE0F',
  group: 'symbols',
  subGroup: 'gender'
}, {
  slug: 'male-sign',
  character: '♂️',
  unicodeName: 'male sign',
  codePoint: '2642 FE0F',
  group: 'symbols',
  subGroup: 'gender'
}, {
  slug: 'transgender-symbol',
  character: '⚧️',
  unicodeName: 'transgender symbol',
  codePoint: '26A7 FE0F',
  group: 'symbols',
  subGroup: 'gender'
}, {
  slug: 'multiply',
  character: '✖️',
  unicodeName: 'multiply',
  codePoint: '2716 FE0F',
  group: 'symbols',
  subGroup: 'math'
}, {
  slug: 'plus',
  character: '➕',
  unicodeName: 'plus',
  codePoint: '2795',
  group: 'symbols',
  subGroup: 'math'
}, {
  slug: 'minus',
  character: '➖',
  unicodeName: 'minus',
  codePoint: '2796',
  group: 'symbols',
  subGroup: 'math'
}, {
  slug: 'divide',
  character: '➗',
  unicodeName: 'divide',
  codePoint: '2797',
  group: 'symbols',
  subGroup: 'math'
}, {
  slug: 'infinity',
  character: '♾️',
  unicodeName: 'infinity',
  codePoint: '267E FE0F',
  group: 'symbols',
  subGroup: 'math'
}, {
  slug: 'double-exclamation-mark',
  character: '‼️',
  unicodeName: 'double exclamation mark',
  codePoint: '203C FE0F',
  group: 'symbols',
  subGroup: 'punctuation'
}, {
  slug: 'exclamation-question-mark',
  character: '⁉️',
  unicodeName: 'exclamation question mark',
  codePoint: '2049 FE0F',
  group: 'symbols',
  subGroup: 'punctuation'
}, {
  slug: 'question-mark',
  character: '❓',
  unicodeName: 'question mark',
  codePoint: '2753',
  group: 'symbols',
  subGroup: 'punctuation'
}, {
  slug: 'white-question-mark',
  character: '❔',
  unicodeName: 'white question mark',
  codePoint: '2754',
  group: 'symbols',
  subGroup: 'punctuation'
}, {
  slug: 'white-exclamation-mark',
  character: '❕',
  unicodeName: 'white exclamation mark',
  codePoint: '2755',
  group: 'symbols',
  subGroup: 'punctuation'
}, {
  slug: 'exclamation-mark',
  character: '❗',
  unicodeName: 'exclamation mark',
  codePoint: '2757',
  group: 'symbols',
  subGroup: 'punctuation'
}, {
  slug: 'wavy-dash',
  character: '〰️',
  unicodeName: 'wavy dash',
  codePoint: '3030 FE0F',
  group: 'symbols',
  subGroup: 'punctuation'
}, {
  slug: 'currency-exchange',
  character: '💱',
  unicodeName: 'currency exchange',
  codePoint: '1F4B1',
  group: 'symbols',
  subGroup: 'currency'
}, {
  slug: 'heavy-dollar-sign',
  character: '💲',
  unicodeName: 'heavy dollar sign',
  codePoint: '1F4B2',
  group: 'symbols',
  subGroup: 'currency'
}, {
  slug: 'medical-symbol',
  character: '⚕️',
  unicodeName: 'medical symbol',
  codePoint: '2695 FE0F',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'recycling-symbol',
  character: '♻️',
  unicodeName: 'recycling symbol',
  codePoint: '267B FE0F',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'fleur-de-lis',
  character: '⚜️',
  unicodeName: 'fleur-de-lis',
  codePoint: '269C FE0F',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'trident-emblem',
  character: '🔱',
  unicodeName: 'trident emblem',
  codePoint: '1F531',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'name-badge',
  character: '📛',
  unicodeName: 'name badge',
  codePoint: '1F4DB',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'japanese-symbol-for-beginner',
  character: '🔰',
  unicodeName: 'Japanese symbol for beginner',
  codePoint: '1F530',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'hollow-red-circle',
  character: '⭕',
  unicodeName: 'hollow red circle',
  codePoint: '2B55',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'check-mark-button',
  character: '✅',
  unicodeName: 'check mark button',
  codePoint: '2705',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'check-box-with-check',
  character: '☑️',
  unicodeName: 'check box with check',
  codePoint: '2611 FE0F',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'check-mark',
  character: '✔️',
  unicodeName: 'check mark',
  codePoint: '2714 FE0F',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'cross-mark',
  character: '❌',
  unicodeName: 'cross mark',
  codePoint: '274C',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'cross-mark-button',
  character: '❎',
  unicodeName: 'cross mark button',
  codePoint: '274E',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'curly-loop',
  character: '➰',
  unicodeName: 'curly loop',
  codePoint: '27B0',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'double-curly-loop',
  character: '➿',
  unicodeName: 'double curly loop',
  codePoint: '27BF',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'part-alternation-mark',
  character: '〽️',
  unicodeName: 'part alternation mark',
  codePoint: '303D FE0F',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'eight-spoked-asterisk',
  character: '✳️',
  unicodeName: 'eight-spoked asterisk',
  codePoint: '2733 FE0F',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'eight-pointed-star',
  character: '✴️',
  unicodeName: 'eight-pointed star',
  codePoint: '2734 FE0F',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'sparkle',
  character: '❇️',
  unicodeName: 'sparkle',
  codePoint: '2747 FE0F',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'copyright',
  character: '©️',
  unicodeName: 'copyright',
  codePoint: '00A9 FE0F',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'registered',
  character: '®️',
  unicodeName: 'registered',
  codePoint: '00AE FE0F',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'trade-mark',
  character: '™️',
  unicodeName: 'trade mark',
  codePoint: '2122 FE0F',
  group: 'symbols',
  subGroup: 'other-symbol'
}, {
  slug: 'keycap',
  character: '*️⃣',
  unicodeName: 'keycap: *',
  codePoint: '002A FE0F 20E3',
  group: 'symbols',
  subGroup: 'keycap'
}, {
  slug: 'keycap-0',
  character: '0️⃣',
  unicodeName: 'keycap: 0',
  codePoint: '0030 FE0F 20E3',
  group: 'symbols',
  subGroup: 'keycap'
}, {
  slug: 'keycap-1',
  character: '1️⃣',
  unicodeName: 'keycap: 1',
  codePoint: '0031 FE0F 20E3',
  group: 'symbols',
  subGroup: 'keycap'
}, {
  slug: 'keycap-2',
  character: '2️⃣',
  unicodeName: 'keycap: 2',
  codePoint: '0032 FE0F 20E3',
  group: 'symbols',
  subGroup: 'keycap'
}, {
  slug: 'keycap-3',
  character: '3️⃣',
  unicodeName: 'keycap: 3',
  codePoint: '0033 FE0F 20E3',
  group: 'symbols',
  subGroup: 'keycap'
}, {
  slug: 'keycap-4',
  character: '4️⃣',
  unicodeName: 'keycap: 4',
  codePoint: '0034 FE0F 20E3',
  group: 'symbols',
  subGroup: 'keycap'
}, {
  slug: 'keycap-5',
  character: '5️⃣',
  unicodeName: 'keycap: 5',
  codePoint: '0035 FE0F 20E3',
  group: 'symbols',
  subGroup: 'keycap'
}, {
  slug: 'keycap-6',
  character: '6️⃣',
  unicodeName: 'keycap: 6',
  codePoint: '0036 FE0F 20E3',
  group: 'symbols',
  subGroup: 'keycap'
}, {
  slug: 'keycap-7',
  character: '7️⃣',
  unicodeName: 'keycap: 7',
  codePoint: '0037 FE0F 20E3',
  group: 'symbols',
  subGroup: 'keycap'
}, {
  slug: 'keycap-8',
  character: '8️⃣',
  unicodeName: 'keycap: 8',
  codePoint: '0038 FE0F 20E3',
  group: 'symbols',
  subGroup: 'keycap'
}, {
  slug: 'keycap-9',
  character: '9️⃣',
  unicodeName: 'keycap: 9',
  codePoint: '0039 FE0F 20E3',
  group: 'symbols',
  subGroup: 'keycap'
}, {
  slug: 'keycap-10',
  character: '🔟',
  unicodeName: 'keycap: 10',
  codePoint: '1F51F',
  group: 'symbols',
  subGroup: 'keycap'
}, {
  slug: 'input-latin-uppercase',
  character: '🔠',
  unicodeName: 'input latin uppercase',
  codePoint: '1F520',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'input-latin-lowercase',
  character: '🔡',
  unicodeName: 'input latin lowercase',
  codePoint: '1F521',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'input-numbers',
  character: '🔢',
  unicodeName: 'input numbers',
  codePoint: '1F522',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'input-symbols',
  character: '🔣',
  unicodeName: 'input symbols',
  codePoint: '1F523',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'input-latin-letters',
  character: '🔤',
  unicodeName: 'input latin letters',
  codePoint: '1F524',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'a-button-blood-type',
  character: '🅰️',
  unicodeName: 'A button (blood type)',
  codePoint: '1F170 FE0F',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'ab-button-blood-type',
  character: '🆎',
  unicodeName: 'AB button (blood type)',
  codePoint: '1F18E',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'b-button-blood-type',
  character: '🅱️',
  unicodeName: 'B button (blood type)',
  codePoint: '1F171 FE0F',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'cl-button',
  character: '🆑',
  unicodeName: 'CL button',
  codePoint: '1F191',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'cool-button',
  character: '🆒',
  unicodeName: 'COOL button',
  codePoint: '1F192',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'free-button',
  character: '🆓',
  unicodeName: 'FREE button',
  codePoint: '1F193',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'information',
  character: 'ℹ️',
  unicodeName: 'information',
  codePoint: '2139 FE0F',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'id-button',
  character: '🆔',
  unicodeName: 'ID button',
  codePoint: '1F194',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'circled-m',
  character: 'Ⓜ️',
  unicodeName: 'circled M',
  codePoint: '24C2 FE0F',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'new-button',
  character: '🆕',
  unicodeName: 'NEW button',
  codePoint: '1F195',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'ng-button',
  character: '🆖',
  unicodeName: 'NG button',
  codePoint: '1F196',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'o-button-blood-type',
  character: '🅾️',
  unicodeName: 'O button (blood type)',
  codePoint: '1F17E FE0F',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'ok-button',
  character: '🆗',
  unicodeName: 'OK button',
  codePoint: '1F197',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'p-button',
  character: '🅿️',
  unicodeName: 'P button',
  codePoint: '1F17F FE0F',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'sos-button',
  character: '🆘',
  unicodeName: 'SOS button',
  codePoint: '1F198',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'up-button',
  character: '🆙',
  unicodeName: 'UP! button',
  codePoint: '1F199',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'vs-button',
  character: '🆚',
  unicodeName: 'VS button',
  codePoint: '1F19A',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-here-button',
  character: '🈁',
  unicodeName: 'Japanese “here” button',
  codePoint: '1F201',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-service-charge-button',
  character: '🈂️',
  unicodeName: 'Japanese “service charge” button',
  codePoint: '1F202 FE0F',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-monthly-amount-button',
  character: '🈷️',
  unicodeName: 'Japanese “monthly amount” button',
  codePoint: '1F237 FE0F',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-not-free-of-charge-button',
  character: '🈶',
  unicodeName: 'Japanese “not free of charge” button',
  codePoint: '1F236',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-reserved-button',
  character: '🈯',
  unicodeName: 'Japanese “reserved” button',
  codePoint: '1F22F',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-bargain-button',
  character: '🉐',
  unicodeName: 'Japanese “bargain” button',
  codePoint: '1F250',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-discount-button',
  character: '🈹',
  unicodeName: 'Japanese “discount” button',
  codePoint: '1F239',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-free-of-charge-button',
  character: '🈚',
  unicodeName: 'Japanese “free of charge” button',
  codePoint: '1F21A',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-prohibited-button',
  character: '🈲',
  unicodeName: 'Japanese “prohibited” button',
  codePoint: '1F232',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-acceptable-button',
  character: '🉑',
  unicodeName: 'Japanese “acceptable” button',
  codePoint: '1F251',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-application-button',
  character: '🈸',
  unicodeName: 'Japanese “application” button',
  codePoint: '1F238',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-passing-grade-button',
  character: '🈴',
  unicodeName: 'Japanese “passing grade” button',
  codePoint: '1F234',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-vacancy-button',
  character: '🈳',
  unicodeName: 'Japanese “vacancy” button',
  codePoint: '1F233',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-congratulations-button',
  character: '㊗️',
  unicodeName: 'Japanese “congratulations” button',
  codePoint: '3297 FE0F',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-secret-button',
  character: '㊙️',
  unicodeName: 'Japanese “secret” button',
  codePoint: '3299 FE0F',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-open-for-business-button',
  character: '🈺',
  unicodeName: 'Japanese “open for business” button',
  codePoint: '1F23A',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'japanese-no-vacancy-button',
  character: '🈵',
  unicodeName: 'Japanese “no vacancy” button',
  codePoint: '1F235',
  group: 'symbols',
  subGroup: 'alphanum'
}, {
  slug: 'red-circle',
  character: '🔴',
  unicodeName: 'red circle',
  codePoint: '1F534',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'orange-circle',
  character: '🟠',
  unicodeName: 'orange circle',
  codePoint: '1F7E0',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'yellow-circle',
  character: '🟡',
  unicodeName: 'yellow circle',
  codePoint: '1F7E1',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'green-circle',
  character: '🟢',
  unicodeName: 'green circle',
  codePoint: '1F7E2',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'blue-circle',
  character: '🔵',
  unicodeName: 'blue circle',
  codePoint: '1F535',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'purple-circle',
  character: '🟣',
  unicodeName: 'purple circle',
  codePoint: '1F7E3',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'brown-circle',
  character: '🟤',
  unicodeName: 'brown circle',
  codePoint: '1F7E4',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'black-circle',
  character: '⚫',
  unicodeName: 'black circle',
  codePoint: '26AB',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'white-circle',
  character: '⚪',
  unicodeName: 'white circle',
  codePoint: '26AA',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'red-square',
  character: '🟥',
  unicodeName: 'red square',
  codePoint: '1F7E5',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'orange-square',
  character: '🟧',
  unicodeName: 'orange square',
  codePoint: '1F7E7',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'yellow-square',
  character: '🟨',
  unicodeName: 'yellow square',
  codePoint: '1F7E8',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'green-square',
  character: '🟩',
  unicodeName: 'green square',
  codePoint: '1F7E9',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'blue-square',
  character: '🟦',
  unicodeName: 'blue square',
  codePoint: '1F7E6',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'purple-square',
  character: '🟪',
  unicodeName: 'purple square',
  codePoint: '1F7EA',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'brown-square',
  character: '🟫',
  unicodeName: 'brown square',
  codePoint: '1F7EB',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'black-large-square',
  character: '⬛',
  unicodeName: 'black large square',
  codePoint: '2B1B',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'white-large-square',
  character: '⬜',
  unicodeName: 'white large square',
  codePoint: '2B1C',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'black-medium-square',
  character: '◼️',
  unicodeName: 'black medium square',
  codePoint: '25FC FE0F',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'white-medium-square',
  character: '◻️',
  unicodeName: 'white medium square',
  codePoint: '25FB FE0F',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'black-medium-small-square',
  character: '◾',
  unicodeName: 'black medium-small square',
  codePoint: '25FE',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'white-medium-small-square',
  character: '◽',
  unicodeName: 'white medium-small square',
  codePoint: '25FD',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'black-small-square',
  character: '▪️',
  unicodeName: 'black small square',
  codePoint: '25AA FE0F',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'white-small-square',
  character: '▫️',
  unicodeName: 'white small square',
  codePoint: '25AB FE0F',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'large-orange-diamond',
  character: '🔶',
  unicodeName: 'large orange diamond',
  codePoint: '1F536',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'large-blue-diamond',
  character: '🔷',
  unicodeName: 'large blue diamond',
  codePoint: '1F537',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'small-orange-diamond',
  character: '🔸',
  unicodeName: 'small orange diamond',
  codePoint: '1F538',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'small-blue-diamond',
  character: '🔹',
  unicodeName: 'small blue diamond',
  codePoint: '1F539',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'red-triangle-pointed-up',
  character: '🔺',
  unicodeName: 'red triangle pointed up',
  codePoint: '1F53A',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'red-triangle-pointed-down',
  character: '🔻',
  unicodeName: 'red triangle pointed down',
  codePoint: '1F53B',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'diamond-with-a-dot',
  character: '💠',
  unicodeName: 'diamond with a dot',
  codePoint: '1F4A0',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'radio-button',
  character: '🔘',
  unicodeName: 'radio button',
  codePoint: '1F518',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'white-square-button',
  character: '🔳',
  unicodeName: 'white square button',
  codePoint: '1F533',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'black-square-button',
  character: '🔲',
  unicodeName: 'black square button',
  codePoint: '1F532',
  group: 'symbols',
  subGroup: 'geometric'
}, {
  slug: 'chequered-flag',
  character: '🏁',
  unicodeName: 'chequered flag',
  codePoint: '1F3C1',
  group: 'flags',
  subGroup: 'flag'
}, {
  slug: 'triangular-flag',
  character: '🚩',
  unicodeName: 'triangular flag',
  codePoint: '1F6A9',
  group: 'flags',
  subGroup: 'flag'
}, {
  slug: 'crossed-flags',
  character: '🎌',
  unicodeName: 'crossed flags',
  codePoint: '1F38C',
  group: 'flags',
  subGroup: 'flag'
}, {
  slug: 'black-flag',
  character: '🏴',
  unicodeName: 'black flag',
  codePoint: '1F3F4',
  group: 'flags',
  subGroup: 'flag',
  variants: [{
    slug: 'flag-scotland',
    character: '🏴󠁧󠁢󠁳󠁣󠁴󠁿'
  }, {
    slug: 'flag-wales',
    character: '🏴󠁧󠁢󠁷󠁬󠁳󠁿'
  }]
}, {
  slug: 'white-flag',
  character: '🏳️',
  unicodeName: 'white flag',
  codePoint: '1F3F3 FE0F',
  group: 'flags',
  subGroup: 'flag'
}, {
  slug: 'rainbow-flag',
  character: '🏳️‍🌈',
  unicodeName: 'rainbow flag',
  codePoint: '1F3F3 FE0F 200D 1F308',
  group: 'flags',
  subGroup: 'flag'
}, {
  slug: 'transgender-flag',
  character: '🏳️‍⚧️',
  unicodeName: 'transgender flag',
  codePoint: '1F3F3 FE0F 200D 26A7 FE0F',
  group: 'flags',
  subGroup: 'flag'
}, {
  slug: 'pirate-flag',
  character: '🏴‍☠️',
  unicodeName: 'pirate flag',
  codePoint: '1F3F4 200D 2620 FE0F',
  group: 'flags',
  subGroup: 'flag'
}, {
  slug: 'flag-ascension-island',
  character: '🇦🇨',
  unicodeName: 'flag: Ascension Island',
  codePoint: '1F1E6 1F1E8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-andorra',
  character: '🇦🇩',
  unicodeName: 'flag: Andorra',
  codePoint: '1F1E6 1F1E9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-united-arab-emirates',
  character: '🇦🇪',
  unicodeName: 'flag: United Arab Emirates',
  codePoint: '1F1E6 1F1EA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-afghanistan',
  character: '🇦🇫',
  unicodeName: 'flag: Afghanistan',
  codePoint: '1F1E6 1F1EB',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-antigua-barbuda',
  character: '🇦🇬',
  unicodeName: 'flag: Antigua & Barbuda',
  codePoint: '1F1E6 1F1EC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-anguilla',
  character: '🇦🇮',
  unicodeName: 'flag: Anguilla',
  codePoint: '1F1E6 1F1EE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-albania',
  character: '🇦🇱',
  unicodeName: 'flag: Albania',
  codePoint: '1F1E6 1F1F1',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-armenia',
  character: '🇦🇲',
  unicodeName: 'flag: Armenia',
  codePoint: '1F1E6 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-angola',
  character: '🇦🇴',
  unicodeName: 'flag: Angola',
  codePoint: '1F1E6 1F1F4',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-antarctica',
  character: '🇦🇶',
  unicodeName: 'flag: Antarctica',
  codePoint: '1F1E6 1F1F6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-argentina',
  character: '🇦🇷',
  unicodeName: 'flag: Argentina',
  codePoint: '1F1E6 1F1F7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-american-samoa',
  character: '🇦🇸',
  unicodeName: 'flag: American Samoa',
  codePoint: '1F1E6 1F1F8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-austria',
  character: '🇦🇹',
  unicodeName: 'flag: Austria',
  codePoint: '1F1E6 1F1F9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-australia',
  character: '🇦🇺',
  unicodeName: 'flag: Australia',
  codePoint: '1F1E6 1F1FA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-aruba',
  character: '🇦🇼',
  unicodeName: 'flag: Aruba',
  codePoint: '1F1E6 1F1FC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-aland-islands',
  character: '🇦🇽',
  unicodeName: 'flag: Åland Islands',
  codePoint: '1F1E6 1F1FD',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-azerbaijan',
  character: '🇦🇿',
  unicodeName: 'flag: Azerbaijan',
  codePoint: '1F1E6 1F1FF',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-bosnia-herzegovina',
  character: '🇧🇦',
  unicodeName: 'flag: Bosnia & Herzegovina',
  codePoint: '1F1E7 1F1E6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-barbados',
  character: '🇧🇧',
  unicodeName: 'flag: Barbados',
  codePoint: '1F1E7 1F1E7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-bangladesh',
  character: '🇧🇩',
  unicodeName: 'flag: Bangladesh',
  codePoint: '1F1E7 1F1E9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-belgium',
  character: '🇧🇪',
  unicodeName: 'flag: Belgium',
  codePoint: '1F1E7 1F1EA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-burkina-faso',
  character: '🇧🇫',
  unicodeName: 'flag: Burkina Faso',
  codePoint: '1F1E7 1F1EB',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-bulgaria',
  character: '🇧🇬',
  unicodeName: 'flag: Bulgaria',
  codePoint: '1F1E7 1F1EC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-bahrain',
  character: '🇧🇭',
  unicodeName: 'flag: Bahrain',
  codePoint: '1F1E7 1F1ED',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-burundi',
  character: '🇧🇮',
  unicodeName: 'flag: Burundi',
  codePoint: '1F1E7 1F1EE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-benin',
  character: '🇧🇯',
  unicodeName: 'flag: Benin',
  codePoint: '1F1E7 1F1EF',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-st-barthelemy',
  character: '🇧🇱',
  unicodeName: 'flag: St. Barthélemy',
  codePoint: '1F1E7 1F1F1',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-bermuda',
  character: '🇧🇲',
  unicodeName: 'flag: Bermuda',
  codePoint: '1F1E7 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-brunei',
  character: '🇧🇳',
  unicodeName: 'flag: Brunei',
  codePoint: '1F1E7 1F1F3',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-bolivia',
  character: '🇧🇴',
  unicodeName: 'flag: Bolivia',
  codePoint: '1F1E7 1F1F4',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-caribbean-netherlands',
  character: '🇧🇶',
  unicodeName: 'flag: Caribbean Netherlands',
  codePoint: '1F1E7 1F1F6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-brazil',
  character: '🇧🇷',
  unicodeName: 'flag: Brazil',
  codePoint: '1F1E7 1F1F7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-bahamas',
  character: '🇧🇸',
  unicodeName: 'flag: Bahamas',
  codePoint: '1F1E7 1F1F8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-bhutan',
  character: '🇧🇹',
  unicodeName: 'flag: Bhutan',
  codePoint: '1F1E7 1F1F9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-bouvet-island',
  character: '🇧🇻',
  unicodeName: 'flag: Bouvet Island',
  codePoint: '1F1E7 1F1FB',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-botswana',
  character: '🇧🇼',
  unicodeName: 'flag: Botswana',
  codePoint: '1F1E7 1F1FC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-belarus',
  character: '🇧🇾',
  unicodeName: 'flag: Belarus',
  codePoint: '1F1E7 1F1FE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-belize',
  character: '🇧🇿',
  unicodeName: 'flag: Belize',
  codePoint: '1F1E7 1F1FF',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-canada',
  character: '🇨🇦',
  unicodeName: 'flag: Canada',
  codePoint: '1F1E8 1F1E6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-cocos-keeling-islands',
  character: '🇨🇨',
  unicodeName: 'flag: Cocos (Keeling) Islands',
  codePoint: '1F1E8 1F1E8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-congo-kinshasa',
  character: '🇨🇩',
  unicodeName: 'flag: Congo - Kinshasa',
  codePoint: '1F1E8 1F1E9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-central-african-republic',
  character: '🇨🇫',
  unicodeName: 'flag: Central African Republic',
  codePoint: '1F1E8 1F1EB',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-congo-brazzaville',
  character: '🇨🇬',
  unicodeName: 'flag: Congo - Brazzaville',
  codePoint: '1F1E8 1F1EC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-switzerland',
  character: '🇨🇭',
  unicodeName: 'flag: Switzerland',
  codePoint: '1F1E8 1F1ED',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-cote-d-ivoire',
  character: '🇨🇮',
  unicodeName: 'flag: Côte d’Ivoire',
  codePoint: '1F1E8 1F1EE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-cook-islands',
  character: '🇨🇰',
  unicodeName: 'flag: Cook Islands',
  codePoint: '1F1E8 1F1F0',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-chile',
  character: '🇨🇱',
  unicodeName: 'flag: Chile',
  codePoint: '1F1E8 1F1F1',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-cameroon',
  character: '🇨🇲',
  unicodeName: 'flag: Cameroon',
  codePoint: '1F1E8 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-china',
  character: '🇨🇳',
  unicodeName: 'flag: China',
  codePoint: '1F1E8 1F1F3',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-colombia',
  character: '🇨🇴',
  unicodeName: 'flag: Colombia',
  codePoint: '1F1E8 1F1F4',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-clipperton-island',
  character: '🇨🇵',
  unicodeName: 'flag: Clipperton Island',
  codePoint: '1F1E8 1F1F5',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-costa-rica',
  character: '🇨🇷',
  unicodeName: 'flag: Costa Rica',
  codePoint: '1F1E8 1F1F7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-cuba',
  character: '🇨🇺',
  unicodeName: 'flag: Cuba',
  codePoint: '1F1E8 1F1FA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-cape-verde',
  character: '🇨🇻',
  unicodeName: 'flag: Cape Verde',
  codePoint: '1F1E8 1F1FB',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-curacao',
  character: '🇨🇼',
  unicodeName: 'flag: Curaçao',
  codePoint: '1F1E8 1F1FC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-christmas-island',
  character: '🇨🇽',
  unicodeName: 'flag: Christmas Island',
  codePoint: '1F1E8 1F1FD',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-cyprus',
  character: '🇨🇾',
  unicodeName: 'flag: Cyprus',
  codePoint: '1F1E8 1F1FE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-czechia',
  character: '🇨🇿',
  unicodeName: 'flag: Czechia',
  codePoint: '1F1E8 1F1FF',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-germany',
  character: '🇩🇪',
  unicodeName: 'flag: Germany',
  codePoint: '1F1E9 1F1EA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-diego-garcia',
  character: '🇩🇬',
  unicodeName: 'flag: Diego Garcia',
  codePoint: '1F1E9 1F1EC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-djibouti',
  character: '🇩🇯',
  unicodeName: 'flag: Djibouti',
  codePoint: '1F1E9 1F1EF',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-denmark',
  character: '🇩🇰',
  unicodeName: 'flag: Denmark',
  codePoint: '1F1E9 1F1F0',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-dominica',
  character: '🇩🇲',
  unicodeName: 'flag: Dominica',
  codePoint: '1F1E9 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-dominican-republic',
  character: '🇩🇴',
  unicodeName: 'flag: Dominican Republic',
  codePoint: '1F1E9 1F1F4',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-algeria',
  character: '🇩🇿',
  unicodeName: 'flag: Algeria',
  codePoint: '1F1E9 1F1FF',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-ceuta-melilla',
  character: '🇪🇦',
  unicodeName: 'flag: Ceuta & Melilla',
  codePoint: '1F1EA 1F1E6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-ecuador',
  character: '🇪🇨',
  unicodeName: 'flag: Ecuador',
  codePoint: '1F1EA 1F1E8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-estonia',
  character: '🇪🇪',
  unicodeName: 'flag: Estonia',
  codePoint: '1F1EA 1F1EA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-egypt',
  character: '🇪🇬',
  unicodeName: 'flag: Egypt',
  codePoint: '1F1EA 1F1EC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-western-sahara',
  character: '🇪🇭',
  unicodeName: 'flag: Western Sahara',
  codePoint: '1F1EA 1F1ED',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-eritrea',
  character: '🇪🇷',
  unicodeName: 'flag: Eritrea',
  codePoint: '1F1EA 1F1F7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-spain',
  character: '🇪🇸',
  unicodeName: 'flag: Spain',
  codePoint: '1F1EA 1F1F8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-ethiopia',
  character: '🇪🇹',
  unicodeName: 'flag: Ethiopia',
  codePoint: '1F1EA 1F1F9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-european-union',
  character: '🇪🇺',
  unicodeName: 'flag: European Union',
  codePoint: '1F1EA 1F1FA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-finland',
  character: '🇫🇮',
  unicodeName: 'flag: Finland',
  codePoint: '1F1EB 1F1EE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-fiji',
  character: '🇫🇯',
  unicodeName: 'flag: Fiji',
  codePoint: '1F1EB 1F1EF',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-falkland-islands',
  character: '🇫🇰',
  unicodeName: 'flag: Falkland Islands',
  codePoint: '1F1EB 1F1F0',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-micronesia',
  character: '🇫🇲',
  unicodeName: 'flag: Micronesia',
  codePoint: '1F1EB 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-faroe-islands',
  character: '🇫🇴',
  unicodeName: 'flag: Faroe Islands',
  codePoint: '1F1EB 1F1F4',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-france',
  character: '🇫🇷',
  unicodeName: 'flag: France',
  codePoint: '1F1EB 1F1F7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-gabon',
  character: '🇬🇦',
  unicodeName: 'flag: Gabon',
  codePoint: '1F1EC 1F1E6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-united-kingdom',
  character: '🇬🇧',
  unicodeName: 'flag: United Kingdom',
  codePoint: '1F1EC 1F1E7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-grenada',
  character: '🇬🇩',
  unicodeName: 'flag: Grenada',
  codePoint: '1F1EC 1F1E9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-georgia',
  character: '🇬🇪',
  unicodeName: 'flag: Georgia',
  codePoint: '1F1EC 1F1EA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-french-guiana',
  character: '🇬🇫',
  unicodeName: 'flag: French Guiana',
  codePoint: '1F1EC 1F1EB',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-guernsey',
  character: '🇬🇬',
  unicodeName: 'flag: Guernsey',
  codePoint: '1F1EC 1F1EC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-ghana',
  character: '🇬🇭',
  unicodeName: 'flag: Ghana',
  codePoint: '1F1EC 1F1ED',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-gibraltar',
  character: '🇬🇮',
  unicodeName: 'flag: Gibraltar',
  codePoint: '1F1EC 1F1EE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-greenland',
  character: '🇬🇱',
  unicodeName: 'flag: Greenland',
  codePoint: '1F1EC 1F1F1',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-gambia',
  character: '🇬🇲',
  unicodeName: 'flag: Gambia',
  codePoint: '1F1EC 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-guinea',
  character: '🇬🇳',
  unicodeName: 'flag: Guinea',
  codePoint: '1F1EC 1F1F3',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-guadeloupe',
  character: '🇬🇵',
  unicodeName: 'flag: Guadeloupe',
  codePoint: '1F1EC 1F1F5',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-equatorial-guinea',
  character: '🇬🇶',
  unicodeName: 'flag: Equatorial Guinea',
  codePoint: '1F1EC 1F1F6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-greece',
  character: '🇬🇷',
  unicodeName: 'flag: Greece',
  codePoint: '1F1EC 1F1F7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-south-georgia-south-sandwich-islands',
  character: '🇬🇸',
  unicodeName: 'flag: South Georgia & South Sandwich Islands',
  codePoint: '1F1EC 1F1F8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-guatemala',
  character: '🇬🇹',
  unicodeName: 'flag: Guatemala',
  codePoint: '1F1EC 1F1F9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-guam',
  character: '🇬🇺',
  unicodeName: 'flag: Guam',
  codePoint: '1F1EC 1F1FA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-guinea-bissau',
  character: '🇬🇼',
  unicodeName: 'flag: Guinea-Bissau',
  codePoint: '1F1EC 1F1FC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-guyana',
  character: '🇬🇾',
  unicodeName: 'flag: Guyana',
  codePoint: '1F1EC 1F1FE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-hong-kong-sar-china',
  character: '🇭🇰',
  unicodeName: 'flag: Hong Kong SAR China',
  codePoint: '1F1ED 1F1F0',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-heard-mcdonald-islands',
  character: '🇭🇲',
  unicodeName: 'flag: Heard & McDonald Islands',
  codePoint: '1F1ED 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-honduras',
  character: '🇭🇳',
  unicodeName: 'flag: Honduras',
  codePoint: '1F1ED 1F1F3',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-croatia',
  character: '🇭🇷',
  unicodeName: 'flag: Croatia',
  codePoint: '1F1ED 1F1F7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-haiti',
  character: '🇭🇹',
  unicodeName: 'flag: Haiti',
  codePoint: '1F1ED 1F1F9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-hungary',
  character: '🇭🇺',
  unicodeName: 'flag: Hungary',
  codePoint: '1F1ED 1F1FA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-canary-islands',
  character: '🇮🇨',
  unicodeName: 'flag: Canary Islands',
  codePoint: '1F1EE 1F1E8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-indonesia',
  character: '🇮🇩',
  unicodeName: 'flag: Indonesia',
  codePoint: '1F1EE 1F1E9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-ireland',
  character: '🇮🇪',
  unicodeName: 'flag: Ireland',
  codePoint: '1F1EE 1F1EA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-israel',
  character: '🇮🇱',
  unicodeName: 'flag: Israel',
  codePoint: '1F1EE 1F1F1',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-isle-of-man',
  character: '🇮🇲',
  unicodeName: 'flag: Isle of Man',
  codePoint: '1F1EE 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-india',
  character: '🇮🇳',
  unicodeName: 'flag: India',
  codePoint: '1F1EE 1F1F3',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-british-indian-ocean-territory',
  character: '🇮🇴',
  unicodeName: 'flag: British Indian Ocean Territory',
  codePoint: '1F1EE 1F1F4',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-iraq',
  character: '🇮🇶',
  unicodeName: 'flag: Iraq',
  codePoint: '1F1EE 1F1F6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-iran',
  character: '🇮🇷',
  unicodeName: 'flag: Iran',
  codePoint: '1F1EE 1F1F7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-iceland',
  character: '🇮🇸',
  unicodeName: 'flag: Iceland',
  codePoint: '1F1EE 1F1F8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-italy',
  character: '🇮🇹',
  unicodeName: 'flag: Italy',
  codePoint: '1F1EE 1F1F9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-jersey',
  character: '🇯🇪',
  unicodeName: 'flag: Jersey',
  codePoint: '1F1EF 1F1EA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-jamaica',
  character: '🇯🇲',
  unicodeName: 'flag: Jamaica',
  codePoint: '1F1EF 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-jordan',
  character: '🇯🇴',
  unicodeName: 'flag: Jordan',
  codePoint: '1F1EF 1F1F4',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-japan',
  character: '🇯🇵',
  unicodeName: 'flag: Japan',
  codePoint: '1F1EF 1F1F5',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-kenya',
  character: '🇰🇪',
  unicodeName: 'flag: Kenya',
  codePoint: '1F1F0 1F1EA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-kyrgyzstan',
  character: '🇰🇬',
  unicodeName: 'flag: Kyrgyzstan',
  codePoint: '1F1F0 1F1EC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-cambodia',
  character: '🇰🇭',
  unicodeName: 'flag: Cambodia',
  codePoint: '1F1F0 1F1ED',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-kiribati',
  character: '🇰🇮',
  unicodeName: 'flag: Kiribati',
  codePoint: '1F1F0 1F1EE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-comoros',
  character: '🇰🇲',
  unicodeName: 'flag: Comoros',
  codePoint: '1F1F0 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-st-kitts-nevis',
  character: '🇰🇳',
  unicodeName: 'flag: St. Kitts & Nevis',
  codePoint: '1F1F0 1F1F3',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-north-korea',
  character: '🇰🇵',
  unicodeName: 'flag: North Korea',
  codePoint: '1F1F0 1F1F5',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-south-korea',
  character: '🇰🇷',
  unicodeName: 'flag: South Korea',
  codePoint: '1F1F0 1F1F7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-kuwait',
  character: '🇰🇼',
  unicodeName: 'flag: Kuwait',
  codePoint: '1F1F0 1F1FC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-cayman-islands',
  character: '🇰🇾',
  unicodeName: 'flag: Cayman Islands',
  codePoint: '1F1F0 1F1FE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-kazakhstan',
  character: '🇰🇿',
  unicodeName: 'flag: Kazakhstan',
  codePoint: '1F1F0 1F1FF',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-laos',
  character: '🇱🇦',
  unicodeName: 'flag: Laos',
  codePoint: '1F1F1 1F1E6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-lebanon',
  character: '🇱🇧',
  unicodeName: 'flag: Lebanon',
  codePoint: '1F1F1 1F1E7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-st-lucia',
  character: '🇱🇨',
  unicodeName: 'flag: St. Lucia',
  codePoint: '1F1F1 1F1E8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-liechtenstein',
  character: '🇱🇮',
  unicodeName: 'flag: Liechtenstein',
  codePoint: '1F1F1 1F1EE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-sri-lanka',
  character: '🇱🇰',
  unicodeName: 'flag: Sri Lanka',
  codePoint: '1F1F1 1F1F0',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-liberia',
  character: '🇱🇷',
  unicodeName: 'flag: Liberia',
  codePoint: '1F1F1 1F1F7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-lesotho',
  character: '🇱🇸',
  unicodeName: 'flag: Lesotho',
  codePoint: '1F1F1 1F1F8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-lithuania',
  character: '🇱🇹',
  unicodeName: 'flag: Lithuania',
  codePoint: '1F1F1 1F1F9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-luxembourg',
  character: '🇱🇺',
  unicodeName: 'flag: Luxembourg',
  codePoint: '1F1F1 1F1FA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-latvia',
  character: '🇱🇻',
  unicodeName: 'flag: Latvia',
  codePoint: '1F1F1 1F1FB',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-libya',
  character: '🇱🇾',
  unicodeName: 'flag: Libya',
  codePoint: '1F1F1 1F1FE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-morocco',
  character: '🇲🇦',
  unicodeName: 'flag: Morocco',
  codePoint: '1F1F2 1F1E6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-monaco',
  character: '🇲🇨',
  unicodeName: 'flag: Monaco',
  codePoint: '1F1F2 1F1E8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-moldova',
  character: '🇲🇩',
  unicodeName: 'flag: Moldova',
  codePoint: '1F1F2 1F1E9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-montenegro',
  character: '🇲🇪',
  unicodeName: 'flag: Montenegro',
  codePoint: '1F1F2 1F1EA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-st-martin',
  character: '🇲🇫',
  unicodeName: 'flag: St. Martin',
  codePoint: '1F1F2 1F1EB',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-madagascar',
  character: '🇲🇬',
  unicodeName: 'flag: Madagascar',
  codePoint: '1F1F2 1F1EC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-marshall-islands',
  character: '🇲🇭',
  unicodeName: 'flag: Marshall Islands',
  codePoint: '1F1F2 1F1ED',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-north-macedonia',
  character: '🇲🇰',
  unicodeName: 'flag: North Macedonia',
  codePoint: '1F1F2 1F1F0',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-mali',
  character: '🇲🇱',
  unicodeName: 'flag: Mali',
  codePoint: '1F1F2 1F1F1',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-myanmar-burma',
  character: '🇲🇲',
  unicodeName: 'flag: Myanmar (Burma)',
  codePoint: '1F1F2 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-mongolia',
  character: '🇲🇳',
  unicodeName: 'flag: Mongolia',
  codePoint: '1F1F2 1F1F3',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-macao-sar-china',
  character: '🇲🇴',
  unicodeName: 'flag: Macao SAR China',
  codePoint: '1F1F2 1F1F4',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-northern-mariana-islands',
  character: '🇲🇵',
  unicodeName: 'flag: Northern Mariana Islands',
  codePoint: '1F1F2 1F1F5',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-martinique',
  character: '🇲🇶',
  unicodeName: 'flag: Martinique',
  codePoint: '1F1F2 1F1F6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-mauritania',
  character: '🇲🇷',
  unicodeName: 'flag: Mauritania',
  codePoint: '1F1F2 1F1F7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-montserrat',
  character: '🇲🇸',
  unicodeName: 'flag: Montserrat',
  codePoint: '1F1F2 1F1F8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-malta',
  character: '🇲🇹',
  unicodeName: 'flag: Malta',
  codePoint: '1F1F2 1F1F9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-mauritius',
  character: '🇲🇺',
  unicodeName: 'flag: Mauritius',
  codePoint: '1F1F2 1F1FA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-maldives',
  character: '🇲🇻',
  unicodeName: 'flag: Maldives',
  codePoint: '1F1F2 1F1FB',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-malawi',
  character: '🇲🇼',
  unicodeName: 'flag: Malawi',
  codePoint: '1F1F2 1F1FC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-mexico',
  character: '🇲🇽',
  unicodeName: 'flag: Mexico',
  codePoint: '1F1F2 1F1FD',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-malaysia',
  character: '🇲🇾',
  unicodeName: 'flag: Malaysia',
  codePoint: '1F1F2 1F1FE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-mozambique',
  character: '🇲🇿',
  unicodeName: 'flag: Mozambique',
  codePoint: '1F1F2 1F1FF',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-namibia',
  character: '🇳🇦',
  unicodeName: 'flag: Namibia',
  codePoint: '1F1F3 1F1E6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-new-caledonia',
  character: '🇳🇨',
  unicodeName: 'flag: New Caledonia',
  codePoint: '1F1F3 1F1E8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-niger',
  character: '🇳🇪',
  unicodeName: 'flag: Niger',
  codePoint: '1F1F3 1F1EA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-norfolk-island',
  character: '🇳🇫',
  unicodeName: 'flag: Norfolk Island',
  codePoint: '1F1F3 1F1EB',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-nigeria',
  character: '🇳🇬',
  unicodeName: 'flag: Nigeria',
  codePoint: '1F1F3 1F1EC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-nicaragua',
  character: '🇳🇮',
  unicodeName: 'flag: Nicaragua',
  codePoint: '1F1F3 1F1EE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-netherlands',
  character: '🇳🇱',
  unicodeName: 'flag: Netherlands',
  codePoint: '1F1F3 1F1F1',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-norway',
  character: '🇳🇴',
  unicodeName: 'flag: Norway',
  codePoint: '1F1F3 1F1F4',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-nepal',
  character: '🇳🇵',
  unicodeName: 'flag: Nepal',
  codePoint: '1F1F3 1F1F5',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-nauru',
  character: '🇳🇷',
  unicodeName: 'flag: Nauru',
  codePoint: '1F1F3 1F1F7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-niue',
  character: '🇳🇺',
  unicodeName: 'flag: Niue',
  codePoint: '1F1F3 1F1FA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-new-zealand',
  character: '🇳🇿',
  unicodeName: 'flag: New Zealand',
  codePoint: '1F1F3 1F1FF',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-oman',
  character: '🇴🇲',
  unicodeName: 'flag: Oman',
  codePoint: '1F1F4 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-panama',
  character: '🇵🇦',
  unicodeName: 'flag: Panama',
  codePoint: '1F1F5 1F1E6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-peru',
  character: '🇵🇪',
  unicodeName: 'flag: Peru',
  codePoint: '1F1F5 1F1EA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-french-polynesia',
  character: '🇵🇫',
  unicodeName: 'flag: French Polynesia',
  codePoint: '1F1F5 1F1EB',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-papua-new-guinea',
  character: '🇵🇬',
  unicodeName: 'flag: Papua New Guinea',
  codePoint: '1F1F5 1F1EC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-philippines',
  character: '🇵🇭',
  unicodeName: 'flag: Philippines',
  codePoint: '1F1F5 1F1ED',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-pakistan',
  character: '🇵🇰',
  unicodeName: 'flag: Pakistan',
  codePoint: '1F1F5 1F1F0',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-poland',
  character: '🇵🇱',
  unicodeName: 'flag: Poland',
  codePoint: '1F1F5 1F1F1',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-st-pierre-miquelon',
  character: '🇵🇲',
  unicodeName: 'flag: St. Pierre & Miquelon',
  codePoint: '1F1F5 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-pitcairn-islands',
  character: '🇵🇳',
  unicodeName: 'flag: Pitcairn Islands',
  codePoint: '1F1F5 1F1F3',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-puerto-rico',
  character: '🇵🇷',
  unicodeName: 'flag: Puerto Rico',
  codePoint: '1F1F5 1F1F7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-palestinian-territories',
  character: '🇵🇸',
  unicodeName: 'flag: Palestinian Territories',
  codePoint: '1F1F5 1F1F8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-portugal',
  character: '🇵🇹',
  unicodeName: 'flag: Portugal',
  codePoint: '1F1F5 1F1F9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-palau',
  character: '🇵🇼',
  unicodeName: 'flag: Palau',
  codePoint: '1F1F5 1F1FC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-paraguay',
  character: '🇵🇾',
  unicodeName: 'flag: Paraguay',
  codePoint: '1F1F5 1F1FE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-qatar',
  character: '🇶🇦',
  unicodeName: 'flag: Qatar',
  codePoint: '1F1F6 1F1E6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-reunion',
  character: '🇷🇪',
  unicodeName: 'flag: Réunion',
  codePoint: '1F1F7 1F1EA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-romania',
  character: '🇷🇴',
  unicodeName: 'flag: Romania',
  codePoint: '1F1F7 1F1F4',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-serbia',
  character: '🇷🇸',
  unicodeName: 'flag: Serbia',
  codePoint: '1F1F7 1F1F8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-russia',
  character: '🇷🇺',
  unicodeName: 'flag: Russia',
  codePoint: '1F1F7 1F1FA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-rwanda',
  character: '🇷🇼',
  unicodeName: 'flag: Rwanda',
  codePoint: '1F1F7 1F1FC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-saudi-arabia',
  character: '🇸🇦',
  unicodeName: 'flag: Saudi Arabia',
  codePoint: '1F1F8 1F1E6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-solomon-islands',
  character: '🇸🇧',
  unicodeName: 'flag: Solomon Islands',
  codePoint: '1F1F8 1F1E7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-seychelles',
  character: '🇸🇨',
  unicodeName: 'flag: Seychelles',
  codePoint: '1F1F8 1F1E8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-sudan',
  character: '🇸🇩',
  unicodeName: 'flag: Sudan',
  codePoint: '1F1F8 1F1E9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-sweden',
  character: '🇸🇪',
  unicodeName: 'flag: Sweden',
  codePoint: '1F1F8 1F1EA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-singapore',
  character: '🇸🇬',
  unicodeName: 'flag: Singapore',
  codePoint: '1F1F8 1F1EC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-st-helena',
  character: '🇸🇭',
  unicodeName: 'flag: St. Helena',
  codePoint: '1F1F8 1F1ED',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-slovenia',
  character: '🇸🇮',
  unicodeName: 'flag: Slovenia',
  codePoint: '1F1F8 1F1EE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-svalbard-jan-mayen',
  character: '🇸🇯',
  unicodeName: 'flag: Svalbard & Jan Mayen',
  codePoint: '1F1F8 1F1EF',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-slovakia',
  character: '🇸🇰',
  unicodeName: 'flag: Slovakia',
  codePoint: '1F1F8 1F1F0',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-sierra-leone',
  character: '🇸🇱',
  unicodeName: 'flag: Sierra Leone',
  codePoint: '1F1F8 1F1F1',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-san-marino',
  character: '🇸🇲',
  unicodeName: 'flag: San Marino',
  codePoint: '1F1F8 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-senegal',
  character: '🇸🇳',
  unicodeName: 'flag: Senegal',
  codePoint: '1F1F8 1F1F3',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-somalia',
  character: '🇸🇴',
  unicodeName: 'flag: Somalia',
  codePoint: '1F1F8 1F1F4',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-suriname',
  character: '🇸🇷',
  unicodeName: 'flag: Suriname',
  codePoint: '1F1F8 1F1F7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-south-sudan',
  character: '🇸🇸',
  unicodeName: 'flag: South Sudan',
  codePoint: '1F1F8 1F1F8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-sao-tome-principe',
  character: '🇸🇹',
  unicodeName: 'flag: São Tomé & Príncipe',
  codePoint: '1F1F8 1F1F9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-el-salvador',
  character: '🇸🇻',
  unicodeName: 'flag: El Salvador',
  codePoint: '1F1F8 1F1FB',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-sint-maarten',
  character: '🇸🇽',
  unicodeName: 'flag: Sint Maarten',
  codePoint: '1F1F8 1F1FD',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-syria',
  character: '🇸🇾',
  unicodeName: 'flag: Syria',
  codePoint: '1F1F8 1F1FE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-eswatini',
  character: '🇸🇿',
  unicodeName: 'flag: Eswatini',
  codePoint: '1F1F8 1F1FF',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-tristan-da-cunha',
  character: '🇹🇦',
  unicodeName: 'flag: Tristan da Cunha',
  codePoint: '1F1F9 1F1E6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-turks-caicos-islands',
  character: '🇹🇨',
  unicodeName: 'flag: Turks & Caicos Islands',
  codePoint: '1F1F9 1F1E8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-chad',
  character: '🇹🇩',
  unicodeName: 'flag: Chad',
  codePoint: '1F1F9 1F1E9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-french-southern-territories',
  character: '🇹🇫',
  unicodeName: 'flag: French Southern Territories',
  codePoint: '1F1F9 1F1EB',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-togo',
  character: '🇹🇬',
  unicodeName: 'flag: Togo',
  codePoint: '1F1F9 1F1EC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-thailand',
  character: '🇹🇭',
  unicodeName: 'flag: Thailand',
  codePoint: '1F1F9 1F1ED',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-tajikistan',
  character: '🇹🇯',
  unicodeName: 'flag: Tajikistan',
  codePoint: '1F1F9 1F1EF',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-tokelau',
  character: '🇹🇰',
  unicodeName: 'flag: Tokelau',
  codePoint: '1F1F9 1F1F0',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-timor-leste',
  character: '🇹🇱',
  unicodeName: 'flag: Timor-Leste',
  codePoint: '1F1F9 1F1F1',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-turkmenistan',
  character: '🇹🇲',
  unicodeName: 'flag: Turkmenistan',
  codePoint: '1F1F9 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-tunisia',
  character: '🇹🇳',
  unicodeName: 'flag: Tunisia',
  codePoint: '1F1F9 1F1F3',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-tonga',
  character: '🇹🇴',
  unicodeName: 'flag: Tonga',
  codePoint: '1F1F9 1F1F4',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-turkey',
  character: '🇹🇷',
  unicodeName: 'flag: Turkey',
  codePoint: '1F1F9 1F1F7',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-trinidad-tobago',
  character: '🇹🇹',
  unicodeName: 'flag: Trinidad & Tobago',
  codePoint: '1F1F9 1F1F9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-tuvalu',
  character: '🇹🇻',
  unicodeName: 'flag: Tuvalu',
  codePoint: '1F1F9 1F1FB',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-taiwan',
  character: '🇹🇼',
  unicodeName: 'flag: Taiwan',
  codePoint: '1F1F9 1F1FC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-tanzania',
  character: '🇹🇿',
  unicodeName: 'flag: Tanzania',
  codePoint: '1F1F9 1F1FF',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-ukraine',
  character: '🇺🇦',
  unicodeName: 'flag: Ukraine',
  codePoint: '1F1FA 1F1E6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-uganda',
  character: '🇺🇬',
  unicodeName: 'flag: Uganda',
  codePoint: '1F1FA 1F1EC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-u-s-outlying-islands',
  character: '🇺🇲',
  unicodeName: 'flag: U.S. Outlying Islands',
  codePoint: '1F1FA 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-united-nations',
  character: '🇺🇳',
  unicodeName: 'flag: United Nations',
  codePoint: '1F1FA 1F1F3',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-united-states',
  character: '🇺🇸',
  unicodeName: 'flag: United States',
  codePoint: '1F1FA 1F1F8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-uruguay',
  character: '🇺🇾',
  unicodeName: 'flag: Uruguay',
  codePoint: '1F1FA 1F1FE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-uzbekistan',
  character: '🇺🇿',
  unicodeName: 'flag: Uzbekistan',
  codePoint: '1F1FA 1F1FF',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-vatican-city',
  character: '🇻🇦',
  unicodeName: 'flag: Vatican City',
  codePoint: '1F1FB 1F1E6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-st-vincent-grenadines',
  character: '🇻🇨',
  unicodeName: 'flag: St. Vincent & Grenadines',
  codePoint: '1F1FB 1F1E8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-venezuela',
  character: '🇻🇪',
  unicodeName: 'flag: Venezuela',
  codePoint: '1F1FB 1F1EA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-british-virgin-islands',
  character: '🇻🇬',
  unicodeName: 'flag: British Virgin Islands',
  codePoint: '1F1FB 1F1EC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-u-s-virgin-islands',
  character: '🇻🇮',
  unicodeName: 'flag: U.S. Virgin Islands',
  codePoint: '1F1FB 1F1EE',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-vietnam',
  character: '🇻🇳',
  unicodeName: 'flag: Vietnam',
  codePoint: '1F1FB 1F1F3',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-vanuatu',
  character: '🇻🇺',
  unicodeName: 'flag: Vanuatu',
  codePoint: '1F1FB 1F1FA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-wallis-futuna',
  character: '🇼🇫',
  unicodeName: 'flag: Wallis & Futuna',
  codePoint: '1F1FC 1F1EB',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-samoa',
  character: '🇼🇸',
  unicodeName: 'flag: Samoa',
  codePoint: '1F1FC 1F1F8',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-kosovo',
  character: '🇽🇰',
  unicodeName: 'flag: Kosovo',
  codePoint: '1F1FD 1F1F0',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-yemen',
  character: '🇾🇪',
  unicodeName: 'flag: Yemen',
  codePoint: '1F1FE 1F1EA',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-mayotte',
  character: '🇾🇹',
  unicodeName: 'flag: Mayotte',
  codePoint: '1F1FE 1F1F9',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-south-africa',
  character: '🇿🇦',
  unicodeName: 'flag: South Africa',
  codePoint: '1F1FF 1F1E6',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-zambia',
  character: '🇿🇲',
  unicodeName: 'flag: Zambia',
  codePoint: '1F1FF 1F1F2',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-zimbabwe',
  character: '🇿🇼',
  unicodeName: 'flag: Zimbabwe',
  codePoint: '1F1FF 1F1FC',
  group: 'flags',
  subGroup: 'country-flag'
}, {
  slug: 'flag-england',
  character: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  unicodeName: 'flag: England',
  codePoint: '1F3F4 E0067 E0062 E0065 E006E E0067 E007F',
  group: 'flags',
  subGroup: 'subdivision-flag'
}, {
  slug: 'e1-0-grinning-face',
  character: '😀',
  unicodeName: 'E1.0 grinning face',
  codePoint: '1F600',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'e0-6-grinning-face-with-big-eyes',
  character: '😃',
  unicodeName: 'E0.6 grinning face with big eyes',
  codePoint: '1F603',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'e0-6-grinning-face-with-smiling-eyes',
  character: '😄',
  unicodeName: 'E0.6 grinning face with smiling eyes',
  codePoint: '1F604',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'e0-6-beaming-face-with-smiling-eyes',
  character: '😁',
  unicodeName: 'E0.6 beaming face with smiling eyes',
  codePoint: '1F601',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'e0-6-grinning-squinting-face',
  character: '😆',
  unicodeName: 'E0.6 grinning squinting face',
  codePoint: '1F606',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'e0-6-grinning-face-with-sweat',
  character: '😅',
  unicodeName: 'E0.6 grinning face with sweat',
  codePoint: '1F605',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'e3-0-rolling-on-the-floor-laughing',
  character: '🤣',
  unicodeName: 'E3.0 rolling on the floor laughing',
  codePoint: '1F923',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'e0-6-face-with-tears-of-joy',
  character: '😂',
  unicodeName: 'E0.6 face with tears of joy',
  codePoint: '1F602',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'e1-0-slightly-smiling-face',
  character: '🙂',
  unicodeName: 'E1.0 slightly smiling face',
  codePoint: '1F642',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'e1-0-upside-down-face',
  character: '🙃',
  unicodeName: 'E1.0 upside-down face',
  codePoint: '1F643',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'e0-6-winking-face',
  character: '😉',
  unicodeName: 'E0.6 winking face',
  codePoint: '1F609',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'e0-6-smiling-face-with-smiling-eyes',
  character: '😊',
  unicodeName: 'E0.6 smiling face with smiling eyes',
  codePoint: '1F60A',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'e1-0-smiling-face-with-halo',
  character: '😇',
  unicodeName: 'E1.0 smiling face with halo',
  codePoint: '1F607',
  group: 'smileys-emotion',
  subGroup: 'face-smiling'
}, {
  slug: 'e11-0-smiling-face-with-hearts',
  character: '🥰',
  unicodeName: 'E11.0 smiling face with hearts',
  codePoint: '1F970',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'e0-6-smiling-face-with-heart-eyes',
  character: '😍',
  unicodeName: 'E0.6 smiling face with heart-eyes',
  codePoint: '1F60D',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'e5-0-star-struck',
  character: '🤩',
  unicodeName: 'E5.0 star-struck',
  codePoint: '1F929',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'e0-6-face-blowing-a-kiss',
  character: '😘',
  unicodeName: 'E0.6 face blowing a kiss',
  codePoint: '1F618',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'e1-0-kissing-face',
  character: '😗',
  unicodeName: 'E1.0 kissing face',
  codePoint: '1F617',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'e0-6-smiling-face',
  character: '☺️',
  unicodeName: 'E0.6 smiling face',
  codePoint: '263A FE0F',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'e0-6-kissing-face-with-closed-eyes',
  character: '😚',
  unicodeName: 'E0.6 kissing face with closed eyes',
  codePoint: '1F61A',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'e1-0-kissing-face-with-smiling-eyes',
  character: '😙',
  unicodeName: 'E1.0 kissing face with smiling eyes',
  codePoint: '1F619',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'e13-0-smiling-face-with-tear',
  character: '🥲',
  unicodeName: 'E13.0 smiling face with tear',
  codePoint: '1F972',
  group: 'smileys-emotion',
  subGroup: 'face-affection'
}, {
  slug: 'e0-6-face-savoring-food',
  character: '😋',
  unicodeName: 'E0.6 face savoring food',
  codePoint: '1F60B',
  group: 'smileys-emotion',
  subGroup: 'face-tongue'
}, {
  slug: 'e1-0-face-with-tongue',
  character: '😛',
  unicodeName: 'E1.0 face with tongue',
  codePoint: '1F61B',
  group: 'smileys-emotion',
  subGroup: 'face-tongue'
}, {
  slug: 'e0-6-winking-face-with-tongue',
  character: '😜',
  unicodeName: 'E0.6 winking face with tongue',
  codePoint: '1F61C',
  group: 'smileys-emotion',
  subGroup: 'face-tongue'
}, {
  slug: 'e5-0-zany-face',
  character: '🤪',
  unicodeName: 'E5.0 zany face',
  codePoint: '1F92A',
  group: 'smileys-emotion',
  subGroup: 'face-tongue'
}, {
  slug: 'e0-6-squinting-face-with-tongue',
  character: '😝',
  unicodeName: 'E0.6 squinting face with tongue',
  codePoint: '1F61D',
  group: 'smileys-emotion',
  subGroup: 'face-tongue'
}, {
  slug: 'e1-0-money-mouth-face',
  character: '🤑',
  unicodeName: 'E1.0 money-mouth face',
  codePoint: '1F911',
  group: 'smileys-emotion',
  subGroup: 'face-tongue'
}, {
  slug: 'e1-0-hugging-face',
  character: '🤗',
  unicodeName: 'E1.0 hugging face',
  codePoint: '1F917',
  group: 'smileys-emotion',
  subGroup: 'face-hand'
}, {
  slug: 'e5-0-face-with-hand-over-mouth',
  character: '🤭',
  unicodeName: 'E5.0 face with hand over mouth',
  codePoint: '1F92D',
  group: 'smileys-emotion',
  subGroup: 'face-hand'
}, {
  slug: 'e5-0-shushing-face',
  character: '🤫',
  unicodeName: 'E5.0 shushing face',
  codePoint: '1F92B',
  group: 'smileys-emotion',
  subGroup: 'face-hand'
}, {
  slug: 'e1-0-thinking-face',
  character: '🤔',
  unicodeName: 'E1.0 thinking face',
  codePoint: '1F914',
  group: 'smileys-emotion',
  subGroup: 'face-hand'
}, {
  slug: 'e1-0-zipper-mouth-face',
  character: '🤐',
  unicodeName: 'E1.0 zipper-mouth face',
  codePoint: '1F910',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'e5-0-face-with-raised-eyebrow',
  character: '🤨',
  unicodeName: 'E5.0 face with raised eyebrow',
  codePoint: '1F928',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'e0-7-neutral-face',
  character: '😐',
  unicodeName: 'E0.7 neutral face',
  codePoint: '1F610',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'e1-0-expressionless-face',
  character: '😑',
  unicodeName: 'E1.0 expressionless face',
  codePoint: '1F611',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'e1-0-face-without-mouth',
  character: '😶',
  unicodeName: 'E1.0 face without mouth',
  codePoint: '1F636',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'e0-6-smirking-face',
  character: '😏',
  unicodeName: 'E0.6 smirking face',
  codePoint: '1F60F',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'e0-6-unamused-face',
  character: '😒',
  unicodeName: 'E0.6 unamused face',
  codePoint: '1F612',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'e1-0-face-with-rolling-eyes',
  character: '🙄',
  unicodeName: 'E1.0 face with rolling eyes',
  codePoint: '1F644',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'e1-0-grimacing-face',
  character: '😬',
  unicodeName: 'E1.0 grimacing face',
  codePoint: '1F62C',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'e3-0-lying-face',
  character: '🤥',
  unicodeName: 'E3.0 lying face',
  codePoint: '1F925',
  group: 'smileys-emotion',
  subGroup: 'face-neutral-skeptical'
}, {
  slug: 'e0-6-relieved-face',
  character: '😌',
  unicodeName: 'E0.6 relieved face',
  codePoint: '1F60C',
  group: 'smileys-emotion',
  subGroup: 'face-sleepy'
}, {
  slug: 'e0-6-pensive-face',
  character: '😔',
  unicodeName: 'E0.6 pensive face',
  codePoint: '1F614',
  group: 'smileys-emotion',
  subGroup: 'face-sleepy'
}, {
  slug: 'e0-6-sleepy-face',
  character: '😪',
  unicodeName: 'E0.6 sleepy face',
  codePoint: '1F62A',
  group: 'smileys-emotion',
  subGroup: 'face-sleepy'
}, {
  slug: 'e3-0-drooling-face',
  character: '🤤',
  unicodeName: 'E3.0 drooling face',
  codePoint: '1F924',
  group: 'smileys-emotion',
  subGroup: 'face-sleepy'
}, {
  slug: 'e1-0-sleeping-face',
  character: '😴',
  unicodeName: 'E1.0 sleeping face',
  codePoint: '1F634',
  group: 'smileys-emotion',
  subGroup: 'face-sleepy'
}, {
  slug: 'e0-6-face-with-medical-mask',
  character: '😷',
  unicodeName: 'E0.6 face with medical mask',
  codePoint: '1F637',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'e1-0-face-with-thermometer',
  character: '🤒',
  unicodeName: 'E1.0 face with thermometer',
  codePoint: '1F912',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'e1-0-face-with-head-bandage',
  character: '🤕',
  unicodeName: 'E1.0 face with head-bandage',
  codePoint: '1F915',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'e3-0-nauseated-face',
  character: '🤢',
  unicodeName: 'E3.0 nauseated face',
  codePoint: '1F922',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'e5-0-face-vomiting',
  character: '🤮',
  unicodeName: 'E5.0 face vomiting',
  codePoint: '1F92E',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'e3-0-sneezing-face',
  character: '🤧',
  unicodeName: 'E3.0 sneezing face',
  codePoint: '1F927',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'e11-0-hot-face',
  character: '🥵',
  unicodeName: 'E11.0 hot face',
  codePoint: '1F975',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'e11-0-cold-face',
  character: '🥶',
  unicodeName: 'E11.0 cold face',
  codePoint: '1F976',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'e11-0-woozy-face',
  character: '🥴',
  unicodeName: 'E11.0 woozy face',
  codePoint: '1F974',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'e0-6-dizzy-face',
  character: '😵',
  unicodeName: 'E0.6 dizzy face',
  codePoint: '1F635',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'e5-0-exploding-head',
  character: '🤯',
  unicodeName: 'E5.0 exploding head',
  codePoint: '1F92F',
  group: 'smileys-emotion',
  subGroup: 'face-unwell'
}, {
  slug: 'e3-0-cowboy-hat-face',
  character: '🤠',
  unicodeName: 'E3.0 cowboy hat face',
  codePoint: '1F920',
  group: 'smileys-emotion',
  subGroup: 'face-hat'
}, {
  slug: 'e11-0-partying-face',
  character: '🥳',
  unicodeName: 'E11.0 partying face',
  codePoint: '1F973',
  group: 'smileys-emotion',
  subGroup: 'face-hat'
}, {
  slug: 'e13-0-disguised-face',
  character: '🥸',
  unicodeName: 'E13.0 disguised face',
  codePoint: '1F978',
  group: 'smileys-emotion',
  subGroup: 'face-hat'
}, {
  slug: 'e1-0-smiling-face-with-sunglasses',
  character: '😎',
  unicodeName: 'E1.0 smiling face with sunglasses',
  codePoint: '1F60E',
  group: 'smileys-emotion',
  subGroup: 'face-glasses'
}, {
  slug: 'e1-0-nerd-face',
  character: '🤓',
  unicodeName: 'E1.0 nerd face',
  codePoint: '1F913',
  group: 'smileys-emotion',
  subGroup: 'face-glasses'
}, {
  slug: 'e5-0-face-with-monocle',
  character: '🧐',
  unicodeName: 'E5.0 face with monocle',
  codePoint: '1F9D0',
  group: 'smileys-emotion',
  subGroup: 'face-glasses'
}, {
  slug: 'e1-0-confused-face',
  character: '😕',
  unicodeName: 'E1.0 confused face',
  codePoint: '1F615',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e1-0-worried-face',
  character: '😟',
  unicodeName: 'E1.0 worried face',
  codePoint: '1F61F',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e1-0-slightly-frowning-face',
  character: '🙁',
  unicodeName: 'E1.0 slightly frowning face',
  codePoint: '1F641',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e0-7-frowning-face',
  character: '☹️',
  unicodeName: 'E0.7 frowning face',
  codePoint: '2639 FE0F',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e1-0-face-with-open-mouth',
  character: '😮',
  unicodeName: 'E1.0 face with open mouth',
  codePoint: '1F62E',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e1-0-hushed-face',
  character: '😯',
  unicodeName: 'E1.0 hushed face',
  codePoint: '1F62F',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e0-6-astonished-face',
  character: '😲',
  unicodeName: 'E0.6 astonished face',
  codePoint: '1F632',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e0-6-flushed-face',
  character: '😳',
  unicodeName: 'E0.6 flushed face',
  codePoint: '1F633',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e11-0-pleading-face',
  character: '🥺',
  unicodeName: 'E11.0 pleading face',
  codePoint: '1F97A',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e1-0-frowning-face-with-open-mouth',
  character: '😦',
  unicodeName: 'E1.0 frowning face with open mouth',
  codePoint: '1F626',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e1-0-anguished-face',
  character: '😧',
  unicodeName: 'E1.0 anguished face',
  codePoint: '1F627',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e0-6-fearful-face',
  character: '😨',
  unicodeName: 'E0.6 fearful face',
  codePoint: '1F628',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e0-6-anxious-face-with-sweat',
  character: '😰',
  unicodeName: 'E0.6 anxious face with sweat',
  codePoint: '1F630',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e0-6-sad-but-relieved-face',
  character: '😥',
  unicodeName: 'E0.6 sad but relieved face',
  codePoint: '1F625',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e0-6-crying-face',
  character: '😢',
  unicodeName: 'E0.6 crying face',
  codePoint: '1F622',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e0-6-loudly-crying-face',
  character: '😭',
  unicodeName: 'E0.6 loudly crying face',
  codePoint: '1F62D',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e0-6-face-screaming-in-fear',
  character: '😱',
  unicodeName: 'E0.6 face screaming in fear',
  codePoint: '1F631',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e0-6-confounded-face',
  character: '😖',
  unicodeName: 'E0.6 confounded face',
  codePoint: '1F616',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e0-6-persevering-face',
  character: '😣',
  unicodeName: 'E0.6 persevering face',
  codePoint: '1F623',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e0-6-disappointed-face',
  character: '😞',
  unicodeName: 'E0.6 disappointed face',
  codePoint: '1F61E',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e0-6-downcast-face-with-sweat',
  character: '😓',
  unicodeName: 'E0.6 downcast face with sweat',
  codePoint: '1F613',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e0-6-weary-face',
  character: '😩',
  unicodeName: 'E0.6 weary face',
  codePoint: '1F629',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e0-6-tired-face',
  character: '😫',
  unicodeName: 'E0.6 tired face',
  codePoint: '1F62B',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e12-0-yawning-face',
  character: '🥱',
  unicodeName: 'E12.0 yawning face',
  codePoint: '1F971',
  group: 'smileys-emotion',
  subGroup: 'face-concerned'
}, {
  slug: 'e0-6-face-with-steam-from-nose',
  character: '😤',
  unicodeName: 'E0.6 face with steam from nose',
  codePoint: '1F624',
  group: 'smileys-emotion',
  subGroup: 'face-negative'
}, {
  slug: 'e0-6-pouting-face',
  character: '😡',
  unicodeName: 'E0.6 pouting face',
  codePoint: '1F621',
  group: 'smileys-emotion',
  subGroup: 'face-negative'
}, {
  slug: 'e0-6-angry-face',
  character: '😠',
  unicodeName: 'E0.6 angry face',
  codePoint: '1F620',
  group: 'smileys-emotion',
  subGroup: 'face-negative'
}, {
  slug: 'e5-0-face-with-symbols-on-mouth',
  character: '🤬',
  unicodeName: 'E5.0 face with symbols on mouth',
  codePoint: '1F92C',
  group: 'smileys-emotion',
  subGroup: 'face-negative'
}, {
  slug: 'e1-0-smiling-face-with-horns',
  character: '😈',
  unicodeName: 'E1.0 smiling face with horns',
  codePoint: '1F608',
  group: 'smileys-emotion',
  subGroup: 'face-negative'
}, {
  slug: 'e0-6-angry-face-with-horns',
  character: '👿',
  unicodeName: 'E0.6 angry face with horns',
  codePoint: '1F47F',
  group: 'smileys-emotion',
  subGroup: 'face-negative'
}, {
  slug: 'e0-6-skull',
  character: '💀',
  unicodeName: 'E0.6 skull',
  codePoint: '1F480',
  group: 'smileys-emotion',
  subGroup: 'face-negative'
}, {
  slug: 'e1-0-skull-and-crossbones',
  character: '☠️',
  unicodeName: 'E1.0 skull and crossbones',
  codePoint: '2620 FE0F',
  group: 'smileys-emotion',
  subGroup: 'face-negative'
}, {
  slug: 'e0-6-pile-of-poo',
  character: '💩',
  unicodeName: 'E0.6 pile of poo',
  codePoint: '1F4A9',
  group: 'smileys-emotion',
  subGroup: 'face-costume'
}, {
  slug: 'e3-0-clown-face',
  character: '🤡',
  unicodeName: 'E3.0 clown face',
  codePoint: '1F921',
  group: 'smileys-emotion',
  subGroup: 'face-costume'
}, {
  slug: 'e0-6-ogre',
  character: '👹',
  unicodeName: 'E0.6 ogre',
  codePoint: '1F479',
  group: 'smileys-emotion',
  subGroup: 'face-costume'
}, {
  slug: 'e0-6-goblin',
  character: '👺',
  unicodeName: 'E0.6 goblin',
  codePoint: '1F47A',
  group: 'smileys-emotion',
  subGroup: 'face-costume'
}, {
  slug: 'e0-6-ghost',
  character: '👻',
  unicodeName: 'E0.6 ghost',
  codePoint: '1F47B',
  group: 'smileys-emotion',
  subGroup: 'face-costume'
}, {
  slug: 'e0-6-alien',
  character: '👽',
  unicodeName: 'E0.6 alien',
  codePoint: '1F47D',
  group: 'smileys-emotion',
  subGroup: 'face-costume'
}, {
  slug: 'e0-6-alien-monster',
  character: '👾',
  unicodeName: 'E0.6 alien monster',
  codePoint: '1F47E',
  group: 'smileys-emotion',
  subGroup: 'face-costume'
}, {
  slug: 'e1-0-robot',
  character: '🤖',
  unicodeName: 'E1.0 robot',
  codePoint: '1F916',
  group: 'smileys-emotion',
  subGroup: 'face-costume'
}, {
  slug: 'e0-6-grinning-cat',
  character: '😺',
  unicodeName: 'E0.6 grinning cat',
  codePoint: '1F63A',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'e0-6-grinning-cat-with-smiling-eyes',
  character: '😸',
  unicodeName: 'E0.6 grinning cat with smiling eyes',
  codePoint: '1F638',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'e0-6-cat-with-tears-of-joy',
  character: '😹',
  unicodeName: 'E0.6 cat with tears of joy',
  codePoint: '1F639',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'e0-6-smiling-cat-with-heart-eyes',
  character: '😻',
  unicodeName: 'E0.6 smiling cat with heart-eyes',
  codePoint: '1F63B',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'e0-6-cat-with-wry-smile',
  character: '😼',
  unicodeName: 'E0.6 cat with wry smile',
  codePoint: '1F63C',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'e0-6-kissing-cat',
  character: '😽',
  unicodeName: 'E0.6 kissing cat',
  codePoint: '1F63D',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'e0-6-weary-cat',
  character: '🙀',
  unicodeName: 'E0.6 weary cat',
  codePoint: '1F640',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'e0-6-crying-cat',
  character: '😿',
  unicodeName: 'E0.6 crying cat',
  codePoint: '1F63F',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'e0-6-pouting-cat',
  character: '😾',
  unicodeName: 'E0.6 pouting cat',
  codePoint: '1F63E',
  group: 'smileys-emotion',
  subGroup: 'cat-face'
}, {
  slug: 'e0-6-see-no-evil-monkey',
  character: '🙈',
  unicodeName: 'E0.6 see-no-evil monkey',
  codePoint: '1F648',
  group: 'smileys-emotion',
  subGroup: 'monkey-face'
}, {
  slug: 'e0-6-hear-no-evil-monkey',
  character: '🙉',
  unicodeName: 'E0.6 hear-no-evil monkey',
  codePoint: '1F649',
  group: 'smileys-emotion',
  subGroup: 'monkey-face'
}, {
  slug: 'e0-6-speak-no-evil-monkey',
  character: '🙊',
  unicodeName: 'E0.6 speak-no-evil monkey',
  codePoint: '1F64A',
  group: 'smileys-emotion',
  subGroup: 'monkey-face'
}, {
  slug: 'e0-6-kiss-mark',
  character: '💋',
  unicodeName: 'E0.6 kiss mark',
  codePoint: '1F48B',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-love-letter',
  character: '💌',
  unicodeName: 'E0.6 love letter',
  codePoint: '1F48C',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-heart-with-arrow',
  character: '💘',
  unicodeName: 'E0.6 heart with arrow',
  codePoint: '1F498',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-heart-with-ribbon',
  character: '💝',
  unicodeName: 'E0.6 heart with ribbon',
  codePoint: '1F49D',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-sparkling-heart',
  character: '💖',
  unicodeName: 'E0.6 sparkling heart',
  codePoint: '1F496',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-growing-heart',
  character: '💗',
  unicodeName: 'E0.6 growing heart',
  codePoint: '1F497',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-beating-heart',
  character: '💓',
  unicodeName: 'E0.6 beating heart',
  codePoint: '1F493',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-revolving-hearts',
  character: '💞',
  unicodeName: 'E0.6 revolving hearts',
  codePoint: '1F49E',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-two-hearts',
  character: '💕',
  unicodeName: 'E0.6 two hearts',
  codePoint: '1F495',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-heart-decoration',
  character: '💟',
  unicodeName: 'E0.6 heart decoration',
  codePoint: '1F49F',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e1-0-heart-exclamation',
  character: '❣️',
  unicodeName: 'E1.0 heart exclamation',
  codePoint: '2763 FE0F',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-broken-heart',
  character: '💔',
  unicodeName: 'E0.6 broken heart',
  codePoint: '1F494',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-red-heart',
  character: '❤️',
  unicodeName: 'E0.6 red heart',
  codePoint: '2764 FE0F',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e5-0-orange-heart',
  character: '🧡',
  unicodeName: 'E5.0 orange heart',
  codePoint: '1F9E1',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-yellow-heart',
  character: '💛',
  unicodeName: 'E0.6 yellow heart',
  codePoint: '1F49B',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-green-heart',
  character: '💚',
  unicodeName: 'E0.6 green heart',
  codePoint: '1F49A',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-blue-heart',
  character: '💙',
  unicodeName: 'E0.6 blue heart',
  codePoint: '1F499',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-purple-heart',
  character: '💜',
  unicodeName: 'E0.6 purple heart',
  codePoint: '1F49C',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e12-0-brown-heart',
  character: '🤎',
  unicodeName: 'E12.0 brown heart',
  codePoint: '1F90E',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e3-0-black-heart',
  character: '🖤',
  unicodeName: 'E3.0 black heart',
  codePoint: '1F5A4',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e12-0-white-heart',
  character: '🤍',
  unicodeName: 'E12.0 white heart',
  codePoint: '1F90D',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-hundred-points',
  character: '💯',
  unicodeName: 'E0.6 hundred points',
  codePoint: '1F4AF',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-anger-symbol',
  character: '💢',
  unicodeName: 'E0.6 anger symbol',
  codePoint: '1F4A2',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-collision',
  character: '💥',
  unicodeName: 'E0.6 collision',
  codePoint: '1F4A5',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-dizzy',
  character: '💫',
  unicodeName: 'E0.6 dizzy',
  codePoint: '1F4AB',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-sweat-droplets',
  character: '💦',
  unicodeName: 'E0.6 sweat droplets',
  codePoint: '1F4A6',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-dashing-away',
  character: '💨',
  unicodeName: 'E0.6 dashing away',
  codePoint: '1F4A8',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-7-hole',
  character: '🕳️',
  unicodeName: 'E0.7 hole',
  codePoint: '1F573 FE0F',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-bomb',
  character: '💣',
  unicodeName: 'E0.6 bomb',
  codePoint: '1F4A3',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-speech-balloon',
  character: '💬',
  unicodeName: 'E0.6 speech balloon',
  codePoint: '1F4AC',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e2-0-eye-in-speech-bubble',
  character: '👁️‍🗨️',
  unicodeName: 'E2.0 eye in speech bubble',
  codePoint: '1F441 FE0F 200D 1F5E8 FE0F',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e2-0-left-speech-bubble',
  character: '🗨️',
  unicodeName: 'E2.0 left speech bubble',
  codePoint: '1F5E8 FE0F',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-7-right-anger-bubble',
  character: '🗯️',
  unicodeName: 'E0.7 right anger bubble',
  codePoint: '1F5EF FE0F',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e1-0-thought-balloon',
  character: '💭',
  unicodeName: 'E1.0 thought balloon',
  codePoint: '1F4AD',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-zzz',
  character: '💤',
  unicodeName: 'E0.6 zzz',
  codePoint: '1F4A4',
  group: 'smileys-emotion',
  subGroup: 'emotion'
}, {
  slug: 'e0-6-waving-hand',
  character: '👋',
  unicodeName: 'E0.6 waving hand',
  codePoint: '1F44B',
  group: 'people-body',
  subGroup: 'hand-fingers-open'
}, {
  slug: 'e3-0-raised-back-of-hand',
  character: '🤚',
  unicodeName: 'E3.0 raised back of hand',
  codePoint: '1F91A',
  group: 'people-body',
  subGroup: 'hand-fingers-open'
}, {
  slug: 'e0-7-hand-with-fingers-splayed',
  character: '🖐️',
  unicodeName: 'E0.7 hand with fingers splayed',
  codePoint: '1F590 FE0F',
  group: 'people-body',
  subGroup: 'hand-fingers-open'
}, {
  slug: 'e1-0-hand-with-fingers-splayed-light-skin-tone',
  character: '🖐🏻',
  unicodeName: 'E1.0 hand with fingers splayed: light skin tone',
  codePoint: '1F590 1F3FB',
  group: 'people-body',
  subGroup: 'hand-fingers-open'
}, {
  slug: 'e1-0-hand-with-fingers-splayed-medium-light-skin-tone',
  character: '🖐🏼',
  unicodeName: 'E1.0 hand with fingers splayed: medium-light skin tone',
  codePoint: '1F590 1F3FC',
  group: 'people-body',
  subGroup: 'hand-fingers-open'
}, {
  slug: 'e1-0-hand-with-fingers-splayed-medium-skin-tone',
  character: '🖐🏽',
  unicodeName: 'E1.0 hand with fingers splayed: medium skin tone',
  codePoint: '1F590 1F3FD',
  group: 'people-body',
  subGroup: 'hand-fingers-open'
}, {
  slug: 'e1-0-hand-with-fingers-splayed-medium-dark-skin-tone',
  character: '🖐🏾',
  unicodeName: 'E1.0 hand with fingers splayed: medium-dark skin tone',
  codePoint: '1F590 1F3FE',
  group: 'people-body',
  subGroup: 'hand-fingers-open'
}, {
  slug: 'e1-0-hand-with-fingers-splayed-dark-skin-tone',
  character: '🖐🏿',
  unicodeName: 'E1.0 hand with fingers splayed: dark skin tone',
  codePoint: '1F590 1F3FF',
  group: 'people-body',
  subGroup: 'hand-fingers-open'
}, {
  slug: 'e0-6-raised-hand',
  character: '✋',
  unicodeName: 'E0.6 raised hand',
  codePoint: '270B',
  group: 'people-body',
  subGroup: 'hand-fingers-open'
}, {
  slug: 'e1-0-vulcan-salute',
  character: '🖖',
  unicodeName: 'E1.0 vulcan salute',
  codePoint: '1F596',
  group: 'people-body',
  subGroup: 'hand-fingers-open'
}, {
  slug: 'e0-6-ok-hand',
  character: '👌',
  unicodeName: 'E0.6 OK hand',
  codePoint: '1F44C',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'e13-0-pinched-fingers',
  character: '🤌',
  unicodeName: 'E13.0 pinched fingers',
  codePoint: '1F90C',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'e12-0-pinching-hand',
  character: '🤏',
  unicodeName: 'E12.0 pinching hand',
  codePoint: '1F90F',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'e0-6-victory-hand',
  character: '✌️',
  unicodeName: 'E0.6 victory hand',
  codePoint: '270C FE0F',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'e1-0-victory-hand-light-skin-tone',
  character: '✌🏻',
  unicodeName: 'E1.0 victory hand: light skin tone',
  codePoint: '270C 1F3FB',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'e1-0-victory-hand-medium-light-skin-tone',
  character: '✌🏼',
  unicodeName: 'E1.0 victory hand: medium-light skin tone',
  codePoint: '270C 1F3FC',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'e1-0-victory-hand-medium-skin-tone',
  character: '✌🏽',
  unicodeName: 'E1.0 victory hand: medium skin tone',
  codePoint: '270C 1F3FD',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'e1-0-victory-hand-medium-dark-skin-tone',
  character: '✌🏾',
  unicodeName: 'E1.0 victory hand: medium-dark skin tone',
  codePoint: '270C 1F3FE',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'e1-0-victory-hand-dark-skin-tone',
  character: '✌🏿',
  unicodeName: 'E1.0 victory hand: dark skin tone',
  codePoint: '270C 1F3FF',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'e3-0-crossed-fingers',
  character: '🤞',
  unicodeName: 'E3.0 crossed fingers',
  codePoint: '1F91E',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'e5-0-love-you-gesture',
  character: '🤟',
  unicodeName: 'E5.0 love-you gesture',
  codePoint: '1F91F',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'e1-0-sign-of-the-horns',
  character: '🤘',
  unicodeName: 'E1.0 sign of the horns',
  codePoint: '1F918',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'e3-0-call-me-hand',
  character: '🤙',
  unicodeName: 'E3.0 call me hand',
  codePoint: '1F919',
  group: 'people-body',
  subGroup: 'hand-fingers-partial'
}, {
  slug: 'e0-6-backhand-index-pointing-left',
  character: '👈',
  unicodeName: 'E0.6 backhand index pointing left',
  codePoint: '1F448',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'e0-6-backhand-index-pointing-right',
  character: '👉',
  unicodeName: 'E0.6 backhand index pointing right',
  codePoint: '1F449',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'e0-6-backhand-index-pointing-up',
  character: '👆',
  unicodeName: 'E0.6 backhand index pointing up',
  codePoint: '1F446',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'e1-0-middle-finger',
  character: '🖕',
  unicodeName: 'E1.0 middle finger',
  codePoint: '1F595',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'e0-6-backhand-index-pointing-down',
  character: '👇',
  unicodeName: 'E0.6 backhand index pointing down',
  codePoint: '1F447',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'e0-6-index-pointing-up',
  character: '☝️',
  unicodeName: 'E0.6 index pointing up',
  codePoint: '261D FE0F',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'e1-0-index-pointing-up-light-skin-tone',
  character: '☝🏻',
  unicodeName: 'E1.0 index pointing up: light skin tone',
  codePoint: '261D 1F3FB',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'e1-0-index-pointing-up-medium-light-skin-tone',
  character: '☝🏼',
  unicodeName: 'E1.0 index pointing up: medium-light skin tone',
  codePoint: '261D 1F3FC',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'e1-0-index-pointing-up-medium-skin-tone',
  character: '☝🏽',
  unicodeName: 'E1.0 index pointing up: medium skin tone',
  codePoint: '261D 1F3FD',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'e1-0-index-pointing-up-medium-dark-skin-tone',
  character: '☝🏾',
  unicodeName: 'E1.0 index pointing up: medium-dark skin tone',
  codePoint: '261D 1F3FE',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'e1-0-index-pointing-up-dark-skin-tone',
  character: '☝🏿',
  unicodeName: 'E1.0 index pointing up: dark skin tone',
  codePoint: '261D 1F3FF',
  group: 'people-body',
  subGroup: 'hand-single-finger'
}, {
  slug: 'e0-6-thumbs-up',
  character: '👍',
  unicodeName: 'E0.6 thumbs up',
  codePoint: '1F44D',
  group: 'people-body',
  subGroup: 'hand-fingers-closed'
}, {
  slug: 'e0-6-thumbs-down',
  character: '👎',
  unicodeName: 'E0.6 thumbs down',
  codePoint: '1F44E',
  group: 'people-body',
  subGroup: 'hand-fingers-closed'
}, {
  slug: 'e0-6-raised-fist',
  character: '✊',
  unicodeName: 'E0.6 raised fist',
  codePoint: '270A',
  group: 'people-body',
  subGroup: 'hand-fingers-closed'
}, {
  slug: 'e0-6-oncoming-fist',
  character: '👊',
  unicodeName: 'E0.6 oncoming fist',
  codePoint: '1F44A',
  group: 'people-body',
  subGroup: 'hand-fingers-closed'
}, {
  slug: 'e3-0-left-facing-fist',
  character: '🤛',
  unicodeName: 'E3.0 left-facing fist',
  codePoint: '1F91B',
  group: 'people-body',
  subGroup: 'hand-fingers-closed'
}, {
  slug: 'e3-0-right-facing-fist',
  character: '🤜',
  unicodeName: 'E3.0 right-facing fist',
  codePoint: '1F91C',
  group: 'people-body',
  subGroup: 'hand-fingers-closed'
}, {
  slug: 'e0-6-clapping-hands',
  character: '👏',
  unicodeName: 'E0.6 clapping hands',
  codePoint: '1F44F',
  group: 'people-body',
  subGroup: 'hands'
}, {
  slug: 'e0-6-raising-hands',
  character: '🙌',
  unicodeName: 'E0.6 raising hands',
  codePoint: '1F64C',
  group: 'people-body',
  subGroup: 'hands'
}, {
  slug: 'e0-6-open-hands',
  character: '👐',
  unicodeName: 'E0.6 open hands',
  codePoint: '1F450',
  group: 'people-body',
  subGroup: 'hands'
}, {
  slug: 'e5-0-palms-up-together',
  character: '🤲',
  unicodeName: 'E5.0 palms up together',
  codePoint: '1F932',
  group: 'people-body',
  subGroup: 'hands'
}, {
  slug: 'e3-0-handshake',
  character: '🤝',
  unicodeName: 'E3.0 handshake',
  codePoint: '1F91D',
  group: 'people-body',
  subGroup: 'hands'
}, {
  slug: 'e0-6-folded-hands',
  character: '🙏',
  unicodeName: 'E0.6 folded hands',
  codePoint: '1F64F',
  group: 'people-body',
  subGroup: 'hands'
}, {
  slug: 'e0-7-writing-hand',
  character: '✍️',
  unicodeName: 'E0.7 writing hand',
  codePoint: '270D FE0F',
  group: 'people-body',
  subGroup: 'hand-prop'
}, {
  slug: 'e1-0-writing-hand-light-skin-tone',
  character: '✍🏻',
  unicodeName: 'E1.0 writing hand: light skin tone',
  codePoint: '270D 1F3FB',
  group: 'people-body',
  subGroup: 'hand-prop'
}, {
  slug: 'e1-0-writing-hand-medium-light-skin-tone',
  character: '✍🏼',
  unicodeName: 'E1.0 writing hand: medium-light skin tone',
  codePoint: '270D 1F3FC',
  group: 'people-body',
  subGroup: 'hand-prop'
}, {
  slug: 'e1-0-writing-hand-medium-skin-tone',
  character: '✍🏽',
  unicodeName: 'E1.0 writing hand: medium skin tone',
  codePoint: '270D 1F3FD',
  group: 'people-body',
  subGroup: 'hand-prop'
}, {
  slug: 'e1-0-writing-hand-medium-dark-skin-tone',
  character: '✍🏾',
  unicodeName: 'E1.0 writing hand: medium-dark skin tone',
  codePoint: '270D 1F3FE',
  group: 'people-body',
  subGroup: 'hand-prop'
}, {
  slug: 'e1-0-writing-hand-dark-skin-tone',
  character: '✍🏿',
  unicodeName: 'E1.0 writing hand: dark skin tone',
  codePoint: '270D 1F3FF',
  group: 'people-body',
  subGroup: 'hand-prop'
}, {
  slug: 'e0-6-nail-polish',
  character: '💅',
  unicodeName: 'E0.6 nail polish',
  codePoint: '1F485',
  group: 'people-body',
  subGroup: 'hand-prop'
}, {
  slug: 'e3-0-selfie',
  character: '🤳',
  unicodeName: 'E3.0 selfie',
  codePoint: '1F933',
  group: 'people-body',
  subGroup: 'hand-prop'
}, {
  slug: 'e0-6-flexed-biceps',
  character: '💪',
  unicodeName: 'E0.6 flexed biceps',
  codePoint: '1F4AA',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e12-0-mechanical-arm',
  character: '🦾',
  unicodeName: 'E12.0 mechanical arm',
  codePoint: '1F9BE',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e12-0-mechanical-leg',
  character: '🦿',
  unicodeName: 'E12.0 mechanical leg',
  codePoint: '1F9BF',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e11-0-leg',
  character: '🦵',
  unicodeName: 'E11.0 leg',
  codePoint: '1F9B5',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e11-0-foot',
  character: '🦶',
  unicodeName: 'E11.0 foot',
  codePoint: '1F9B6',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e0-6-ear',
  character: '👂',
  unicodeName: 'E0.6 ear',
  codePoint: '1F442',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e12-0-ear-with-hearing-aid',
  character: '🦻',
  unicodeName: 'E12.0 ear with hearing aid',
  codePoint: '1F9BB',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e0-6-nose',
  character: '👃',
  unicodeName: 'E0.6 nose',
  codePoint: '1F443',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e5-0-brain',
  character: '🧠',
  unicodeName: 'E5.0 brain',
  codePoint: '1F9E0',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e13-0-anatomical-heart',
  character: '🫀',
  unicodeName: 'E13.0 anatomical heart',
  codePoint: '1FAC0',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e13-0-lungs',
  character: '🫁',
  unicodeName: 'E13.0 lungs',
  codePoint: '1FAC1',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e11-0-tooth',
  character: '🦷',
  unicodeName: 'E11.0 tooth',
  codePoint: '1F9B7',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e11-0-bone',
  character: '🦴',
  unicodeName: 'E11.0 bone',
  codePoint: '1F9B4',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e0-6-eyes',
  character: '👀',
  unicodeName: 'E0.6 eyes',
  codePoint: '1F440',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e0-7-eye',
  character: '👁️',
  unicodeName: 'E0.7 eye',
  codePoint: '1F441 FE0F',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e0-6-tongue',
  character: '👅',
  unicodeName: 'E0.6 tongue',
  codePoint: '1F445',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e0-6-mouth',
  character: '👄',
  unicodeName: 'E0.6 mouth',
  codePoint: '1F444',
  group: 'people-body',
  subGroup: 'body-parts'
}, {
  slug: 'e0-6-baby',
  character: '👶',
  unicodeName: 'E0.6 baby',
  codePoint: '1F476',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e5-0-child',
  character: '🧒',
  unicodeName: 'E5.0 child',
  codePoint: '1F9D2',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e0-6-boy',
  character: '👦',
  unicodeName: 'E0.6 boy',
  codePoint: '1F466',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e0-6-girl',
  character: '👧',
  unicodeName: 'E0.6 girl',
  codePoint: '1F467',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e5-0-person',
  character: '🧑',
  unicodeName: 'E5.0 person',
  codePoint: '1F9D1',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e0-6-person-blond-hair',
  character: '👱',
  unicodeName: 'E0.6 person: blond hair',
  codePoint: '1F471',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e0-6-man',
  character: '👨',
  unicodeName: 'E0.6 man',
  codePoint: '1F468',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e5-0-man-beard',
  character: '🧔',
  unicodeName: 'E5.0 man: beard',
  codePoint: '1F9D4',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e11-0-man-red-hair',
  character: '👨‍🦰',
  unicodeName: 'E11.0 man: red hair',
  codePoint: '1F468 200D 1F9B0',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e0-6-woman',
  character: '👩',
  unicodeName: 'E0.6 woman',
  codePoint: '1F469',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e12-1-person-red-hair',
  character: '🧑‍🦰',
  unicodeName: 'E12.1 person: red hair',
  codePoint: '1F9D1 200D 1F9B0',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e11-0-woman-curly-hair',
  character: '👩‍🦱',
  unicodeName: 'E11.0 woman: curly hair',
  codePoint: '1F469 200D 1F9B1',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e12-1-person-curly-hair',
  character: '🧑‍🦱',
  unicodeName: 'E12.1 person: curly hair',
  codePoint: '1F9D1 200D 1F9B1',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e11-0-woman-white-hair',
  character: '👩‍🦳',
  unicodeName: 'E11.0 woman: white hair',
  codePoint: '1F469 200D 1F9B3',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e12-1-person-white-hair',
  character: '🧑‍🦳',
  unicodeName: 'E12.1 person: white hair',
  codePoint: '1F9D1 200D 1F9B3',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e11-0-woman-bald',
  character: '👩‍🦲',
  unicodeName: 'E11.0 woman: bald',
  codePoint: '1F469 200D 1F9B2',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e12-1-person-bald',
  character: '🧑‍🦲',
  unicodeName: 'E12.1 person: bald',
  codePoint: '1F9D1 200D 1F9B2',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e4-0-woman-blond-hair',
  character: '👱‍♀️',
  unicodeName: 'E4.0 woman: blond hair',
  codePoint: '1F471 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e5-0-older-person',
  character: '🧓',
  unicodeName: 'E5.0 older person',
  codePoint: '1F9D3',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e0-6-old-man',
  character: '👴',
  unicodeName: 'E0.6 old man',
  codePoint: '1F474',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e0-6-old-woman',
  character: '👵',
  unicodeName: 'E0.6 old woman',
  codePoint: '1F475',
  group: 'people-body',
  subGroup: 'person'
}, {
  slug: 'e0-6-person-frowning',
  character: '🙍',
  unicodeName: 'E0.6 person frowning',
  codePoint: '1F64D',
  group: 'people-body',
  subGroup: 'person-gesture'
}, {
  slug: 'e0-6-person-pouting',
  character: '🙎',
  unicodeName: 'E0.6 person pouting',
  codePoint: '1F64E',
  group: 'people-body',
  subGroup: 'person-gesture'
}, {
  slug: 'e0-6-person-gesturing-no',
  character: '🙅',
  unicodeName: 'E0.6 person gesturing NO',
  codePoint: '1F645',
  group: 'people-body',
  subGroup: 'person-gesture'
}, {
  slug: 'e0-6-person-gesturing-ok',
  character: '🙆',
  unicodeName: 'E0.6 person gesturing OK',
  codePoint: '1F646',
  group: 'people-body',
  subGroup: 'person-gesture'
}, {
  slug: 'e0-6-person-tipping-hand',
  character: '💁',
  unicodeName: 'E0.6 person tipping hand',
  codePoint: '1F481',
  group: 'people-body',
  subGroup: 'person-gesture'
}, {
  slug: 'e0-6-person-raising-hand',
  character: '🙋',
  unicodeName: 'E0.6 person raising hand',
  codePoint: '1F64B',
  group: 'people-body',
  subGroup: 'person-gesture'
}, {
  slug: 'e12-0-deaf-person',
  character: '🧏',
  unicodeName: 'E12.0 deaf person',
  codePoint: '1F9CF',
  group: 'people-body',
  subGroup: 'person-gesture'
}, {
  slug: 'e0-6-person-bowing',
  character: '🙇',
  unicodeName: 'E0.6 person bowing',
  codePoint: '1F647',
  group: 'people-body',
  subGroup: 'person-gesture'
}, {
  slug: 'e3-0-person-facepalming',
  character: '🤦',
  unicodeName: 'E3.0 person facepalming',
  codePoint: '1F926',
  group: 'people-body',
  subGroup: 'person-gesture'
}, {
  slug: 'e3-0-person-shrugging',
  character: '🤷',
  unicodeName: 'E3.0 person shrugging',
  codePoint: '1F937',
  group: 'people-body',
  subGroup: 'person-gesture'
}, {
  slug: 'e12-1-health-worker',
  character: '🧑‍⚕️',
  unicodeName: 'E12.1 health worker',
  codePoint: '1F9D1 200D 2695 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-health-worker',
  character: '👨‍⚕️',
  unicodeName: 'E4.0 man health worker',
  codePoint: '1F468 200D 2695 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-health-worker',
  character: '👩‍⚕️',
  unicodeName: 'E4.0 woman health worker',
  codePoint: '1F469 200D 2695 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e12-1-student',
  character: '🧑‍🎓',
  unicodeName: 'E12.1 student',
  codePoint: '1F9D1 200D 1F393',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-student',
  character: '👨‍🎓',
  unicodeName: 'E4.0 man student',
  codePoint: '1F468 200D 1F393',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-student',
  character: '👩‍🎓',
  unicodeName: 'E4.0 woman student',
  codePoint: '1F469 200D 1F393',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e12-1-teacher',
  character: '🧑‍🏫',
  unicodeName: 'E12.1 teacher',
  codePoint: '1F9D1 200D 1F3EB',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-teacher',
  character: '👨‍🏫',
  unicodeName: 'E4.0 man teacher',
  codePoint: '1F468 200D 1F3EB',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-teacher',
  character: '👩‍🏫',
  unicodeName: 'E4.0 woman teacher',
  codePoint: '1F469 200D 1F3EB',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e12-1-judge',
  character: '🧑‍⚖️',
  unicodeName: 'E12.1 judge',
  codePoint: '1F9D1 200D 2696 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-judge',
  character: '👨‍⚖️',
  unicodeName: 'E4.0 man judge',
  codePoint: '1F468 200D 2696 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-judge',
  character: '👩‍⚖️',
  unicodeName: 'E4.0 woman judge',
  codePoint: '1F469 200D 2696 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e12-1-farmer',
  character: '🧑‍🌾',
  unicodeName: 'E12.1 farmer',
  codePoint: '1F9D1 200D 1F33E',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-farmer',
  character: '👨‍🌾',
  unicodeName: 'E4.0 man farmer',
  codePoint: '1F468 200D 1F33E',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-farmer',
  character: '👩‍🌾',
  unicodeName: 'E4.0 woman farmer',
  codePoint: '1F469 200D 1F33E',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e12-1-cook',
  character: '🧑‍🍳',
  unicodeName: 'E12.1 cook',
  codePoint: '1F9D1 200D 1F373',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-cook',
  character: '👨‍🍳',
  unicodeName: 'E4.0 man cook',
  codePoint: '1F468 200D 1F373',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-cook',
  character: '👩‍🍳',
  unicodeName: 'E4.0 woman cook',
  codePoint: '1F469 200D 1F373',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e12-1-mechanic',
  character: '🧑‍🔧',
  unicodeName: 'E12.1 mechanic',
  codePoint: '1F9D1 200D 1F527',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-mechanic',
  character: '👨‍🔧',
  unicodeName: 'E4.0 man mechanic',
  codePoint: '1F468 200D 1F527',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-mechanic',
  character: '👩‍🔧',
  unicodeName: 'E4.0 woman mechanic',
  codePoint: '1F469 200D 1F527',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e12-1-factory-worker',
  character: '🧑‍🏭',
  unicodeName: 'E12.1 factory worker',
  codePoint: '1F9D1 200D 1F3ED',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-factory-worker',
  character: '👨‍🏭',
  unicodeName: 'E4.0 man factory worker',
  codePoint: '1F468 200D 1F3ED',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-factory-worker',
  character: '👩‍🏭',
  unicodeName: 'E4.0 woman factory worker',
  codePoint: '1F469 200D 1F3ED',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e12-1-office-worker',
  character: '🧑‍💼',
  unicodeName: 'E12.1 office worker',
  codePoint: '1F9D1 200D 1F4BC',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-office-worker',
  character: '👨‍💼',
  unicodeName: 'E4.0 man office worker',
  codePoint: '1F468 200D 1F4BC',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-office-worker',
  character: '👩‍💼',
  unicodeName: 'E4.0 woman office worker',
  codePoint: '1F469 200D 1F4BC',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e12-1-scientist',
  character: '🧑‍🔬',
  unicodeName: 'E12.1 scientist',
  codePoint: '1F9D1 200D 1F52C',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-scientist',
  character: '👨‍🔬',
  unicodeName: 'E4.0 man scientist',
  codePoint: '1F468 200D 1F52C',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-scientist',
  character: '👩‍🔬',
  unicodeName: 'E4.0 woman scientist',
  codePoint: '1F469 200D 1F52C',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e12-1-technologist',
  character: '🧑‍💻',
  unicodeName: 'E12.1 technologist',
  codePoint: '1F9D1 200D 1F4BB',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-technologist',
  character: '👨‍💻',
  unicodeName: 'E4.0 man technologist',
  codePoint: '1F468 200D 1F4BB',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-technologist',
  character: '👩‍💻',
  unicodeName: 'E4.0 woman technologist',
  codePoint: '1F469 200D 1F4BB',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e12-1-singer',
  character: '🧑‍🎤',
  unicodeName: 'E12.1 singer',
  codePoint: '1F9D1 200D 1F3A4',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-singer',
  character: '👨‍🎤',
  unicodeName: 'E4.0 man singer',
  codePoint: '1F468 200D 1F3A4',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-singer',
  character: '👩‍🎤',
  unicodeName: 'E4.0 woman singer',
  codePoint: '1F469 200D 1F3A4',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e12-1-artist',
  character: '🧑‍🎨',
  unicodeName: 'E12.1 artist',
  codePoint: '1F9D1 200D 1F3A8',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-artist',
  character: '👨‍🎨',
  unicodeName: 'E4.0 man artist',
  codePoint: '1F468 200D 1F3A8',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-artist',
  character: '👩‍🎨',
  unicodeName: 'E4.0 woman artist',
  codePoint: '1F469 200D 1F3A8',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e12-1-pilot',
  character: '🧑‍✈️',
  unicodeName: 'E12.1 pilot',
  codePoint: '1F9D1 200D 2708 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-pilot',
  character: '👨‍✈️',
  unicodeName: 'E4.0 man pilot',
  codePoint: '1F468 200D 2708 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-pilot',
  character: '👩‍✈️',
  unicodeName: 'E4.0 woman pilot',
  codePoint: '1F469 200D 2708 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e12-1-astronaut',
  character: '🧑‍🚀',
  unicodeName: 'E12.1 astronaut',
  codePoint: '1F9D1 200D 1F680',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-astronaut',
  character: '👨‍🚀',
  unicodeName: 'E4.0 man astronaut',
  codePoint: '1F468 200D 1F680',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-astronaut',
  character: '👩‍🚀',
  unicodeName: 'E4.0 woman astronaut',
  codePoint: '1F469 200D 1F680',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e12-1-firefighter',
  character: '🧑‍🚒',
  unicodeName: 'E12.1 firefighter',
  codePoint: '1F9D1 200D 1F692',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-firefighter',
  character: '👨‍🚒',
  unicodeName: 'E4.0 man firefighter',
  codePoint: '1F468 200D 1F692',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-firefighter',
  character: '👩‍🚒',
  unicodeName: 'E4.0 woman firefighter',
  codePoint: '1F469 200D 1F692',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e0-6-police-officer',
  character: '👮',
  unicodeName: 'E0.6 police officer',
  codePoint: '1F46E',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e0-7-detective',
  character: '🕵️',
  unicodeName: 'E0.7 detective',
  codePoint: '1F575 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e2-0-detective-light-skin-tone',
  character: '🕵🏻',
  unicodeName: 'E2.0 detective: light skin tone',
  codePoint: '1F575 1F3FB',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e2-0-detective-medium-light-skin-tone',
  character: '🕵🏼',
  unicodeName: 'E2.0 detective: medium-light skin tone',
  codePoint: '1F575 1F3FC',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e2-0-detective-medium-skin-tone',
  character: '🕵🏽',
  unicodeName: 'E2.0 detective: medium skin tone',
  codePoint: '1F575 1F3FD',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e2-0-detective-medium-dark-skin-tone',
  character: '🕵🏾',
  unicodeName: 'E2.0 detective: medium-dark skin tone',
  codePoint: '1F575 1F3FE',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e2-0-detective-dark-skin-tone',
  character: '🕵🏿',
  unicodeName: 'E2.0 detective: dark skin tone',
  codePoint: '1F575 1F3FF',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-detective',
  character: '🕵️‍♂️',
  unicodeName: 'E4.0 man detective',
  codePoint: '1F575 FE0F 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-detective-light-skin-tone',
  character: '🕵🏻‍♂️',
  unicodeName: 'E4.0 man detective: light skin tone',
  codePoint: '1F575 1F3FB 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-detective-medium-light-skin-tone',
  character: '🕵🏼‍♂️',
  unicodeName: 'E4.0 man detective: medium-light skin tone',
  codePoint: '1F575 1F3FC 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-detective-medium-skin-tone',
  character: '🕵🏽‍♂️',
  unicodeName: 'E4.0 man detective: medium skin tone',
  codePoint: '1F575 1F3FD 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-detective-medium-dark-skin-tone',
  character: '🕵🏾‍♂️',
  unicodeName: 'E4.0 man detective: medium-dark skin tone',
  codePoint: '1F575 1F3FE 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-man-detective-dark-skin-tone',
  character: '🕵🏿‍♂️',
  unicodeName: 'E4.0 man detective: dark skin tone',
  codePoint: '1F575 1F3FF 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-detective',
  character: '🕵️‍♀️',
  unicodeName: 'E4.0 woman detective',
  codePoint: '1F575 FE0F 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-detective-light-skin-tone',
  character: '🕵🏻‍♀️',
  unicodeName: 'E4.0 woman detective: light skin tone',
  codePoint: '1F575 1F3FB 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-detective-medium-light-skin-tone',
  character: '🕵🏼‍♀️',
  unicodeName: 'E4.0 woman detective: medium-light skin tone',
  codePoint: '1F575 1F3FC 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-detective-medium-skin-tone',
  character: '🕵🏽‍♀️',
  unicodeName: 'E4.0 woman detective: medium skin tone',
  codePoint: '1F575 1F3FD 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-detective-medium-dark-skin-tone',
  character: '🕵🏾‍♀️',
  unicodeName: 'E4.0 woman detective: medium-dark skin tone',
  codePoint: '1F575 1F3FE 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e4-0-woman-detective-dark-skin-tone',
  character: '🕵🏿‍♀️',
  unicodeName: 'E4.0 woman detective: dark skin tone',
  codePoint: '1F575 1F3FF 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e0-6-guard',
  character: '💂',
  unicodeName: 'E0.6 guard',
  codePoint: '1F482',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e13-0-ninja',
  character: '🥷',
  unicodeName: 'E13.0 ninja',
  codePoint: '1F977',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e0-6-construction-worker',
  character: '👷',
  unicodeName: 'E0.6 construction worker',
  codePoint: '1F477',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e3-0-prince',
  character: '🤴',
  unicodeName: 'E3.0 prince',
  codePoint: '1F934',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e0-6-princess',
  character: '👸',
  unicodeName: 'E0.6 princess',
  codePoint: '1F478',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e0-6-person-wearing-turban',
  character: '👳',
  unicodeName: 'E0.6 person wearing turban',
  codePoint: '1F473',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e0-6-person-with-skullcap',
  character: '👲',
  unicodeName: 'E0.6 person with skullcap',
  codePoint: '1F472',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e5-0-woman-with-headscarf',
  character: '🧕',
  unicodeName: 'E5.0 woman with headscarf',
  codePoint: '1F9D5',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e3-0-person-in-tuxedo',
  character: '🤵',
  unicodeName: 'E3.0 person in tuxedo',
  codePoint: '1F935',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e0-6-person-with-veil',
  character: '👰',
  unicodeName: 'E0.6 person with veil',
  codePoint: '1F470',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e3-0-pregnant-woman',
  character: '🤰',
  unicodeName: 'E3.0 pregnant woman',
  codePoint: '1F930',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e5-0-breast-feeding',
  character: '🤱',
  unicodeName: 'E5.0 breast-feeding',
  codePoint: '1F931',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e13-0-woman-feeding-baby',
  character: '👩‍🍼',
  unicodeName: 'E13.0 woman feeding baby',
  codePoint: '1F469 200D 1F37C',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e13-0-man-feeding-baby',
  character: '👨‍🍼',
  unicodeName: 'E13.0 man feeding baby',
  codePoint: '1F468 200D 1F37C',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e13-0-person-feeding-baby',
  character: '🧑‍🍼',
  unicodeName: 'E13.0 person feeding baby',
  codePoint: '1F9D1 200D 1F37C',
  group: 'people-body',
  subGroup: 'person-role'
}, {
  slug: 'e0-6-baby-angel',
  character: '👼',
  unicodeName: 'E0.6 baby angel',
  codePoint: '1F47C',
  group: 'people-body',
  subGroup: 'person-fantasy'
}, {
  slug: 'e0-6-santa-claus',
  character: '🎅',
  unicodeName: 'E0.6 Santa Claus',
  codePoint: '1F385',
  group: 'people-body',
  subGroup: 'person-fantasy'
}, {
  slug: 'e3-0-mrs-claus',
  character: '🤶',
  unicodeName: 'E3.0 Mrs. Claus',
  codePoint: '1F936',
  group: 'people-body',
  subGroup: 'person-fantasy'
}, {
  slug: 'e13-0-mx-claus',
  character: '🧑‍🎄',
  unicodeName: 'E13.0 mx claus',
  codePoint: '1F9D1 200D 1F384',
  group: 'people-body',
  subGroup: 'person-fantasy'
}, {
  slug: 'e11-0-superhero',
  character: '🦸',
  unicodeName: 'E11.0 superhero',
  codePoint: '1F9B8',
  group: 'people-body',
  subGroup: 'person-fantasy'
}, {
  slug: 'e11-0-supervillain',
  character: '🦹',
  unicodeName: 'E11.0 supervillain',
  codePoint: '1F9B9',
  group: 'people-body',
  subGroup: 'person-fantasy'
}, {
  slug: 'e5-0-mage',
  character: '🧙',
  unicodeName: 'E5.0 mage',
  codePoint: '1F9D9',
  group: 'people-body',
  subGroup: 'person-fantasy'
}, {
  slug: 'e5-0-fairy',
  character: '🧚',
  unicodeName: 'E5.0 fairy',
  codePoint: '1F9DA',
  group: 'people-body',
  subGroup: 'person-fantasy'
}, {
  slug: 'e5-0-vampire',
  character: '🧛',
  unicodeName: 'E5.0 vampire',
  codePoint: '1F9DB',
  group: 'people-body',
  subGroup: 'person-fantasy'
}, {
  slug: 'e5-0-merperson',
  character: '🧜',
  unicodeName: 'E5.0 merperson',
  codePoint: '1F9DC',
  group: 'people-body',
  subGroup: 'person-fantasy'
}, {
  slug: 'e5-0-elf',
  character: '🧝',
  unicodeName: 'E5.0 elf',
  codePoint: '1F9DD',
  group: 'people-body',
  subGroup: 'person-fantasy'
}, {
  slug: 'e5-0-genie',
  character: '🧞',
  unicodeName: 'E5.0 genie',
  codePoint: '1F9DE',
  group: 'people-body',
  subGroup: 'person-fantasy'
}, {
  slug: 'e5-0-zombie',
  character: '🧟',
  unicodeName: 'E5.0 zombie',
  codePoint: '1F9DF',
  group: 'people-body',
  subGroup: 'person-fantasy'
}, {
  slug: 'e0-6-person-getting-massage',
  character: '💆',
  unicodeName: 'E0.6 person getting massage',
  codePoint: '1F486',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e0-6-person-getting-haircut',
  character: '💇',
  unicodeName: 'E0.6 person getting haircut',
  codePoint: '1F487',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e0-6-person-walking',
  character: '🚶',
  unicodeName: 'E0.6 person walking',
  codePoint: '1F6B6',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e12-0-person-standing',
  character: '🧍',
  unicodeName: 'E12.0 person standing',
  codePoint: '1F9CD',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e12-0-person-kneeling',
  character: '🧎',
  unicodeName: 'E12.0 person kneeling',
  codePoint: '1F9CE',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e12-1-person-with-white-cane',
  character: '🧑‍🦯',
  unicodeName: 'E12.1 person with white cane',
  codePoint: '1F9D1 200D 1F9AF',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e12-0-man-with-white-cane',
  character: '👨‍🦯',
  unicodeName: 'E12.0 man with white cane',
  codePoint: '1F468 200D 1F9AF',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e12-0-woman-with-white-cane',
  character: '👩‍🦯',
  unicodeName: 'E12.0 woman with white cane',
  codePoint: '1F469 200D 1F9AF',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e12-1-person-in-motorized-wheelchair',
  character: '🧑‍🦼',
  unicodeName: 'E12.1 person in motorized wheelchair',
  codePoint: '1F9D1 200D 1F9BC',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e12-0-man-in-motorized-wheelchair',
  character: '👨‍🦼',
  unicodeName: 'E12.0 man in motorized wheelchair',
  codePoint: '1F468 200D 1F9BC',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e12-0-woman-in-motorized-wheelchair',
  character: '👩‍🦼',
  unicodeName: 'E12.0 woman in motorized wheelchair',
  codePoint: '1F469 200D 1F9BC',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e12-1-person-in-manual-wheelchair',
  character: '🧑‍🦽',
  unicodeName: 'E12.1 person in manual wheelchair',
  codePoint: '1F9D1 200D 1F9BD',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e12-0-man-in-manual-wheelchair',
  character: '👨‍🦽',
  unicodeName: 'E12.0 man in manual wheelchair',
  codePoint: '1F468 200D 1F9BD',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e12-0-woman-in-manual-wheelchair',
  character: '👩‍🦽',
  unicodeName: 'E12.0 woman in manual wheelchair',
  codePoint: '1F469 200D 1F9BD',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e0-6-person-running',
  character: '🏃',
  unicodeName: 'E0.6 person running',
  codePoint: '1F3C3',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e0-6-woman-dancing',
  character: '💃',
  unicodeName: 'E0.6 woman dancing',
  codePoint: '1F483',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e3-0-man-dancing',
  character: '🕺',
  unicodeName: 'E3.0 man dancing',
  codePoint: '1F57A',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e0-7-person-in-suit-levitating',
  character: '🕴️',
  unicodeName: 'E0.7 person in suit levitating',
  codePoint: '1F574 FE0F',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e4-0-person-in-suit-levitating-light-skin-tone',
  character: '🕴🏻',
  unicodeName: 'E4.0 person in suit levitating: light skin tone',
  codePoint: '1F574 1F3FB',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e4-0-person-in-suit-levitating-medium-light-skin-tone',
  character: '🕴🏼',
  unicodeName: 'E4.0 person in suit levitating: medium-light skin tone',
  codePoint: '1F574 1F3FC',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e4-0-person-in-suit-levitating-medium-skin-tone',
  character: '🕴🏽',
  unicodeName: 'E4.0 person in suit levitating: medium skin tone',
  codePoint: '1F574 1F3FD',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e4-0-person-in-suit-levitating-medium-dark-skin-tone',
  character: '🕴🏾',
  unicodeName: 'E4.0 person in suit levitating: medium-dark skin tone',
  codePoint: '1F574 1F3FE',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e4-0-person-in-suit-levitating-dark-skin-tone',
  character: '🕴🏿',
  unicodeName: 'E4.0 person in suit levitating: dark skin tone',
  codePoint: '1F574 1F3FF',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e0-6-people-with-bunny-ears',
  character: '👯',
  unicodeName: 'E0.6 people with bunny ears',
  codePoint: '1F46F',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e5-0-person-in-steamy-room',
  character: '🧖',
  unicodeName: 'E5.0 person in steamy room',
  codePoint: '1F9D6',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e5-0-person-climbing',
  character: '🧗',
  unicodeName: 'E5.0 person climbing',
  codePoint: '1F9D7',
  group: 'people-body',
  subGroup: 'person-activity'
}, {
  slug: 'e3-0-person-fencing',
  character: '🤺',
  unicodeName: 'E3.0 person fencing',
  codePoint: '1F93A',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e1-0-horse-racing',
  character: '🏇',
  unicodeName: 'E1.0 horse racing',
  codePoint: '1F3C7',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e0-7-skier',
  character: '⛷️',
  unicodeName: 'E0.7 skier',
  codePoint: '26F7 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e0-6-snowboarder',
  character: '🏂',
  unicodeName: 'E0.6 snowboarder',
  codePoint: '1F3C2',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e0-7-person-golfing',
  character: '🏌️',
  unicodeName: 'E0.7 person golfing',
  codePoint: '1F3CC FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-person-golfing-light-skin-tone',
  character: '🏌🏻',
  unicodeName: 'E4.0 person golfing: light skin tone',
  codePoint: '1F3CC 1F3FB',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-person-golfing-medium-light-skin-tone',
  character: '🏌🏼',
  unicodeName: 'E4.0 person golfing: medium-light skin tone',
  codePoint: '1F3CC 1F3FC',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-person-golfing-medium-skin-tone',
  character: '🏌🏽',
  unicodeName: 'E4.0 person golfing: medium skin tone',
  codePoint: '1F3CC 1F3FD',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-person-golfing-medium-dark-skin-tone',
  character: '🏌🏾',
  unicodeName: 'E4.0 person golfing: medium-dark skin tone',
  codePoint: '1F3CC 1F3FE',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-person-golfing-dark-skin-tone',
  character: '🏌🏿',
  unicodeName: 'E4.0 person golfing: dark skin tone',
  codePoint: '1F3CC 1F3FF',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-golfing',
  character: '🏌️‍♂️',
  unicodeName: 'E4.0 man golfing',
  codePoint: '1F3CC FE0F 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-golfing-light-skin-tone',
  character: '🏌🏻‍♂️',
  unicodeName: 'E4.0 man golfing: light skin tone',
  codePoint: '1F3CC 1F3FB 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-golfing-medium-light-skin-tone',
  character: '🏌🏼‍♂️',
  unicodeName: 'E4.0 man golfing: medium-light skin tone',
  codePoint: '1F3CC 1F3FC 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-golfing-medium-skin-tone',
  character: '🏌🏽‍♂️',
  unicodeName: 'E4.0 man golfing: medium skin tone',
  codePoint: '1F3CC 1F3FD 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-golfing-medium-dark-skin-tone',
  character: '🏌🏾‍♂️',
  unicodeName: 'E4.0 man golfing: medium-dark skin tone',
  codePoint: '1F3CC 1F3FE 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-golfing-dark-skin-tone',
  character: '🏌🏿‍♂️',
  unicodeName: 'E4.0 man golfing: dark skin tone',
  codePoint: '1F3CC 1F3FF 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-golfing',
  character: '🏌️‍♀️',
  unicodeName: 'E4.0 woman golfing',
  codePoint: '1F3CC FE0F 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-golfing-light-skin-tone',
  character: '🏌🏻‍♀️',
  unicodeName: 'E4.0 woman golfing: light skin tone',
  codePoint: '1F3CC 1F3FB 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-golfing-medium-light-skin-tone',
  character: '🏌🏼‍♀️',
  unicodeName: 'E4.0 woman golfing: medium-light skin tone',
  codePoint: '1F3CC 1F3FC 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-golfing-medium-skin-tone',
  character: '🏌🏽‍♀️',
  unicodeName: 'E4.0 woman golfing: medium skin tone',
  codePoint: '1F3CC 1F3FD 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-golfing-medium-dark-skin-tone',
  character: '🏌🏾‍♀️',
  unicodeName: 'E4.0 woman golfing: medium-dark skin tone',
  codePoint: '1F3CC 1F3FE 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-golfing-dark-skin-tone',
  character: '🏌🏿‍♀️',
  unicodeName: 'E4.0 woman golfing: dark skin tone',
  codePoint: '1F3CC 1F3FF 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e0-6-person-surfing',
  character: '🏄',
  unicodeName: 'E0.6 person surfing',
  codePoint: '1F3C4',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e1-0-person-rowing-boat',
  character: '🚣',
  unicodeName: 'E1.0 person rowing boat',
  codePoint: '1F6A3',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e0-6-person-swimming',
  character: '🏊',
  unicodeName: 'E0.6 person swimming',
  codePoint: '1F3CA',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e0-7-person-bouncing-ball',
  character: '⛹️',
  unicodeName: 'E0.7 person bouncing ball',
  codePoint: '26F9 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e2-0-person-bouncing-ball-light-skin-tone',
  character: '⛹🏻',
  unicodeName: 'E2.0 person bouncing ball: light skin tone',
  codePoint: '26F9 1F3FB',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e2-0-person-bouncing-ball-medium-light-skin-tone',
  character: '⛹🏼',
  unicodeName: 'E2.0 person bouncing ball: medium-light skin tone',
  codePoint: '26F9 1F3FC',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e2-0-person-bouncing-ball-medium-skin-tone',
  character: '⛹🏽',
  unicodeName: 'E2.0 person bouncing ball: medium skin tone',
  codePoint: '26F9 1F3FD',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e2-0-person-bouncing-ball-medium-dark-skin-tone',
  character: '⛹🏾',
  unicodeName: 'E2.0 person bouncing ball: medium-dark skin tone',
  codePoint: '26F9 1F3FE',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e2-0-person-bouncing-ball-dark-skin-tone',
  character: '⛹🏿',
  unicodeName: 'E2.0 person bouncing ball: dark skin tone',
  codePoint: '26F9 1F3FF',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-bouncing-ball',
  character: '⛹️‍♂️',
  unicodeName: 'E4.0 man bouncing ball',
  codePoint: '26F9 FE0F 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-bouncing-ball-light-skin-tone',
  character: '⛹🏻‍♂️',
  unicodeName: 'E4.0 man bouncing ball: light skin tone',
  codePoint: '26F9 1F3FB 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-bouncing-ball-medium-light-skin-tone',
  character: '⛹🏼‍♂️',
  unicodeName: 'E4.0 man bouncing ball: medium-light skin tone',
  codePoint: '26F9 1F3FC 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-bouncing-ball-medium-skin-tone',
  character: '⛹🏽‍♂️',
  unicodeName: 'E4.0 man bouncing ball: medium skin tone',
  codePoint: '26F9 1F3FD 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-bouncing-ball-medium-dark-skin-tone',
  character: '⛹🏾‍♂️',
  unicodeName: 'E4.0 man bouncing ball: medium-dark skin tone',
  codePoint: '26F9 1F3FE 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-bouncing-ball-dark-skin-tone',
  character: '⛹🏿‍♂️',
  unicodeName: 'E4.0 man bouncing ball: dark skin tone',
  codePoint: '26F9 1F3FF 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-bouncing-ball',
  character: '⛹️‍♀️',
  unicodeName: 'E4.0 woman bouncing ball',
  codePoint: '26F9 FE0F 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-bouncing-ball-light-skin-tone',
  character: '⛹🏻‍♀️',
  unicodeName: 'E4.0 woman bouncing ball: light skin tone',
  codePoint: '26F9 1F3FB 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-bouncing-ball-medium-light-skin-tone',
  character: '⛹🏼‍♀️',
  unicodeName: 'E4.0 woman bouncing ball: medium-light skin tone',
  codePoint: '26F9 1F3FC 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-bouncing-ball-medium-skin-tone',
  character: '⛹🏽‍♀️',
  unicodeName: 'E4.0 woman bouncing ball: medium skin tone',
  codePoint: '26F9 1F3FD 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-bouncing-ball-medium-dark-skin-tone',
  character: '⛹🏾‍♀️',
  unicodeName: 'E4.0 woman bouncing ball: medium-dark skin tone',
  codePoint: '26F9 1F3FE 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-bouncing-ball-dark-skin-tone',
  character: '⛹🏿‍♀️',
  unicodeName: 'E4.0 woman bouncing ball: dark skin tone',
  codePoint: '26F9 1F3FF 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e0-7-person-lifting-weights',
  character: '🏋️',
  unicodeName: 'E0.7 person lifting weights',
  codePoint: '1F3CB FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e2-0-person-lifting-weights-light-skin-tone',
  character: '🏋🏻',
  unicodeName: 'E2.0 person lifting weights: light skin tone',
  codePoint: '1F3CB 1F3FB',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e2-0-person-lifting-weights-medium-light-skin-tone',
  character: '🏋🏼',
  unicodeName: 'E2.0 person lifting weights: medium-light skin tone',
  codePoint: '1F3CB 1F3FC',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e2-0-person-lifting-weights-medium-skin-tone',
  character: '🏋🏽',
  unicodeName: 'E2.0 person lifting weights: medium skin tone',
  codePoint: '1F3CB 1F3FD',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e2-0-person-lifting-weights-medium-dark-skin-tone',
  character: '🏋🏾',
  unicodeName: 'E2.0 person lifting weights: medium-dark skin tone',
  codePoint: '1F3CB 1F3FE',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e2-0-person-lifting-weights-dark-skin-tone',
  character: '🏋🏿',
  unicodeName: 'E2.0 person lifting weights: dark skin tone',
  codePoint: '1F3CB 1F3FF',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-lifting-weights',
  character: '🏋️‍♂️',
  unicodeName: 'E4.0 man lifting weights',
  codePoint: '1F3CB FE0F 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-lifting-weights-light-skin-tone',
  character: '🏋🏻‍♂️',
  unicodeName: 'E4.0 man lifting weights: light skin tone',
  codePoint: '1F3CB 1F3FB 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-lifting-weights-medium-light-skin-tone',
  character: '🏋🏼‍♂️',
  unicodeName: 'E4.0 man lifting weights: medium-light skin tone',
  codePoint: '1F3CB 1F3FC 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-lifting-weights-medium-skin-tone',
  character: '🏋🏽‍♂️',
  unicodeName: 'E4.0 man lifting weights: medium skin tone',
  codePoint: '1F3CB 1F3FD 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-lifting-weights-medium-dark-skin-tone',
  character: '🏋🏾‍♂️',
  unicodeName: 'E4.0 man lifting weights: medium-dark skin tone',
  codePoint: '1F3CB 1F3FE 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-man-lifting-weights-dark-skin-tone',
  character: '🏋🏿‍♂️',
  unicodeName: 'E4.0 man lifting weights: dark skin tone',
  codePoint: '1F3CB 1F3FF 200D 2642 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-lifting-weights',
  character: '🏋️‍♀️',
  unicodeName: 'E4.0 woman lifting weights',
  codePoint: '1F3CB FE0F 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-lifting-weights-light-skin-tone',
  character: '🏋🏻‍♀️',
  unicodeName: 'E4.0 woman lifting weights: light skin tone',
  codePoint: '1F3CB 1F3FB 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-lifting-weights-medium-light-skin-tone',
  character: '🏋🏼‍♀️',
  unicodeName: 'E4.0 woman lifting weights: medium-light skin tone',
  codePoint: '1F3CB 1F3FC 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-lifting-weights-medium-skin-tone',
  character: '🏋🏽‍♀️',
  unicodeName: 'E4.0 woman lifting weights: medium skin tone',
  codePoint: '1F3CB 1F3FD 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-lifting-weights-medium-dark-skin-tone',
  character: '🏋🏾‍♀️',
  unicodeName: 'E4.0 woman lifting weights: medium-dark skin tone',
  codePoint: '1F3CB 1F3FE 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e4-0-woman-lifting-weights-dark-skin-tone',
  character: '🏋🏿‍♀️',
  unicodeName: 'E4.0 woman lifting weights: dark skin tone',
  codePoint: '1F3CB 1F3FF 200D 2640 FE0F',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e1-0-person-biking',
  character: '🚴',
  unicodeName: 'E1.0 person biking',
  codePoint: '1F6B4',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e1-0-person-mountain-biking',
  character: '🚵',
  unicodeName: 'E1.0 person mountain biking',
  codePoint: '1F6B5',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e3-0-person-cartwheeling',
  character: '🤸',
  unicodeName: 'E3.0 person cartwheeling',
  codePoint: '1F938',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e3-0-people-wrestling',
  character: '🤼',
  unicodeName: 'E3.0 people wrestling',
  codePoint: '1F93C',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e3-0-person-playing-water-polo',
  character: '🤽',
  unicodeName: 'E3.0 person playing water polo',
  codePoint: '1F93D',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e3-0-person-playing-handball',
  character: '🤾',
  unicodeName: 'E3.0 person playing handball',
  codePoint: '1F93E',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e3-0-person-juggling',
  character: '🤹',
  unicodeName: 'E3.0 person juggling',
  codePoint: '1F939',
  group: 'people-body',
  subGroup: 'person-sport'
}, {
  slug: 'e5-0-person-in-lotus-position',
  character: '🧘',
  unicodeName: 'E5.0 person in lotus position',
  codePoint: '1F9D8',
  group: 'people-body',
  subGroup: 'person-resting'
}, {
  slug: 'e0-6-person-taking-bath',
  character: '🛀',
  unicodeName: 'E0.6 person taking bath',
  codePoint: '1F6C0',
  group: 'people-body',
  subGroup: 'person-resting'
}, {
  slug: 'e1-0-person-in-bed',
  character: '🛌',
  unicodeName: 'E1.0 person in bed',
  codePoint: '1F6CC',
  group: 'people-body',
  subGroup: 'person-resting'
}, {
  slug: 'e12-0-people-holding-hands',
  character: '🧑‍🤝‍🧑',
  unicodeName: 'E12.0 people holding hands',
  codePoint: '1F9D1 200D 1F91D 200D 1F9D1',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e1-0-women-holding-hands',
  character: '👭',
  unicodeName: 'E1.0 women holding hands',
  codePoint: '1F46D',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-1-women-holding-hands-light-skin-tone-medium-light-skin-tone',
  character: '👩🏻‍🤝‍👩🏼',
  unicodeName: 'E12.1 women holding hands: light skin tone, medium-light skin tone',
  codePoint: '1F469 1F3FB 200D 1F91D 200D 1F469 1F3FC',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-0-women-holding-hands-medium-light-skin-tone',
  character: '👭🏼',
  unicodeName: 'E12.0 women holding hands: medium-light skin tone',
  codePoint: '1F46D 1F3FC',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-1-women-holding-hands-medium-light-skin-tone-medium-skin-tone',
  character: '👩🏼‍🤝‍👩🏽',
  unicodeName: 'E12.1 women holding hands: medium-light skin tone, medium skin tone',
  codePoint: '1F469 1F3FC 200D 1F91D 200D 1F469 1F3FD',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-0-women-holding-hands-medium-skin-tone',
  character: '👭🏽',
  unicodeName: 'E12.0 women holding hands: medium skin tone',
  codePoint: '1F46D 1F3FD',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-1-women-holding-hands-medium-skin-tone-medium-dark-skin-tone',
  character: '👩🏽‍🤝‍👩🏾',
  unicodeName: 'E12.1 women holding hands: medium skin tone, medium-dark skin tone',
  codePoint: '1F469 1F3FD 200D 1F91D 200D 1F469 1F3FE',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-0-women-holding-hands-medium-dark-skin-tone',
  character: '👭🏾',
  unicodeName: 'E12.0 women holding hands: medium-dark skin tone',
  codePoint: '1F46D 1F3FE',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-1-women-holding-hands-medium-dark-skin-tone-dark-skin-tone',
  character: '👩🏾‍🤝‍👩🏿',
  unicodeName: 'E12.1 women holding hands: medium-dark skin tone, dark skin tone',
  codePoint: '1F469 1F3FE 200D 1F91D 200D 1F469 1F3FF',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-0-women-holding-hands-dark-skin-tone',
  character: '👭🏿',
  unicodeName: 'E12.0 women holding hands: dark skin tone',
  codePoint: '1F46D 1F3FF',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e0-6-woman-and-man-holding-hands',
  character: '👫',
  unicodeName: 'E0.6 woman and man holding hands',
  codePoint: '1F46B',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-0-woman-and-man-holding-hands-light-skin-tone-medium-light-skin-tone',
  character: '👩🏻‍🤝‍👨🏼',
  unicodeName: 'E12.0 woman and man holding hands: light skin tone, medium-light skin tone',
  codePoint: '1F469 1F3FB 200D 1F91D 200D 1F468 1F3FC',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-0-woman-and-man-holding-hands-medium-light-skin-tone',
  character: '👫🏼',
  unicodeName: 'E12.0 woman and man holding hands: medium-light skin tone',
  codePoint: '1F46B 1F3FC',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-0-woman-and-man-holding-hands-medium-light-skin-tone-medium-skin-tone',
  character: '👩🏼‍🤝‍👨🏽',
  unicodeName: 'E12.0 woman and man holding hands: medium-light skin tone, medium skin tone',
  codePoint: '1F469 1F3FC 200D 1F91D 200D 1F468 1F3FD',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-0-woman-and-man-holding-hands-medium-skin-tone',
  character: '👫🏽',
  unicodeName: 'E12.0 woman and man holding hands: medium skin tone',
  codePoint: '1F46B 1F3FD',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-0-woman-and-man-holding-hands-medium-skin-tone-medium-dark-skin-tone',
  character: '👩🏽‍🤝‍👨🏾',
  unicodeName: 'E12.0 woman and man holding hands: medium skin tone, medium-dark skin tone',
  codePoint: '1F469 1F3FD 200D 1F91D 200D 1F468 1F3FE',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-0-woman-and-man-holding-hands-medium-dark-skin-tone',
  character: '👫🏾',
  unicodeName: 'E12.0 woman and man holding hands: medium-dark skin tone',
  codePoint: '1F46B 1F3FE',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-0-woman-and-man-holding-hands-medium-dark-skin-tone-dark-skin-tone',
  character: '👩🏾‍🤝‍👨🏿',
  unicodeName: 'E12.0 woman and man holding hands: medium-dark skin tone, dark skin tone',
  codePoint: '1F469 1F3FE 200D 1F91D 200D 1F468 1F3FF',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-0-woman-and-man-holding-hands-dark-skin-tone',
  character: '👫🏿',
  unicodeName: 'E12.0 woman and man holding hands: dark skin tone',
  codePoint: '1F46B 1F3FF',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e1-0-men-holding-hands',
  character: '👬',
  unicodeName: 'E1.0 men holding hands',
  codePoint: '1F46C',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-1-men-holding-hands-light-skin-tone-medium-light-skin-tone',
  character: '👨🏻‍🤝‍👨🏼',
  unicodeName: 'E12.1 men holding hands: light skin tone, medium-light skin tone',
  codePoint: '1F468 1F3FB 200D 1F91D 200D 1F468 1F3FC',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-0-men-holding-hands-medium-light-skin-tone',
  character: '👬🏼',
  unicodeName: 'E12.0 men holding hands: medium-light skin tone',
  codePoint: '1F46C 1F3FC',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-1-men-holding-hands-medium-light-skin-tone-medium-skin-tone',
  character: '👨🏼‍🤝‍👨🏽',
  unicodeName: 'E12.1 men holding hands: medium-light skin tone, medium skin tone',
  codePoint: '1F468 1F3FC 200D 1F91D 200D 1F468 1F3FD',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-0-men-holding-hands-medium-skin-tone',
  character: '👬🏽',
  unicodeName: 'E12.0 men holding hands: medium skin tone',
  codePoint: '1F46C 1F3FD',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-1-men-holding-hands-medium-skin-tone-medium-dark-skin-tone',
  character: '👨🏽‍🤝‍👨🏾',
  unicodeName: 'E12.1 men holding hands: medium skin tone, medium-dark skin tone',
  codePoint: '1F468 1F3FD 200D 1F91D 200D 1F468 1F3FE',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-0-men-holding-hands-medium-dark-skin-tone',
  character: '👬🏾',
  unicodeName: 'E12.0 men holding hands: medium-dark skin tone',
  codePoint: '1F46C 1F3FE',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-1-men-holding-hands-medium-dark-skin-tone-dark-skin-tone',
  character: '👨🏾‍🤝‍👨🏿',
  unicodeName: 'E12.1 men holding hands: medium-dark skin tone, dark skin tone',
  codePoint: '1F468 1F3FE 200D 1F91D 200D 1F468 1F3FF',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e12-0-men-holding-hands-dark-skin-tone',
  character: '👬🏿',
  unicodeName: 'E12.0 men holding hands: dark skin tone',
  codePoint: '1F46C 1F3FF',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e0-6-kiss',
  character: '💏',
  unicodeName: 'E0.6 kiss',
  codePoint: '1F48F',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e2-0-kiss-woman-man',
  character: '👩‍❤️‍💋‍👨',
  unicodeName: 'E2.0 kiss: woman, man',
  codePoint: '1F469 200D 2764 FE0F 200D 1F48B 200D 1F468 ; fully-qualified',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e2-0-kiss-man-man',
  character: '👨‍❤️‍💋‍👨',
  unicodeName: 'E2.0 kiss: man, man',
  codePoint: '1F468 200D 2764 FE0F 200D 1F48B 200D 1F468 ; fully-qualified',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e2-0-kiss-woman-woman',
  character: '👩‍❤️‍💋‍👩',
  unicodeName: 'E2.0 kiss: woman, woman',
  codePoint: '1F469 200D 2764 FE0F 200D 1F48B 200D 1F469 ; fully-qualified',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e0-6-couple-with-heart',
  character: '💑',
  unicodeName: 'E0.6 couple with heart',
  codePoint: '1F491',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e2-0-couple-with-heart-woman-man',
  character: '👩‍❤️‍👨',
  unicodeName: 'E2.0 couple with heart: woman, man',
  codePoint: '1F469 200D 2764 FE0F 200D 1F468',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e2-0-couple-with-heart-man-man',
  character: '👨‍❤️‍👨',
  unicodeName: 'E2.0 couple with heart: man, man',
  codePoint: '1F468 200D 2764 FE0F 200D 1F468',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e2-0-couple-with-heart-woman-woman',
  character: '👩‍❤️‍👩',
  unicodeName: 'E2.0 couple with heart: woman, woman',
  codePoint: '1F469 200D 2764 FE0F 200D 1F469',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e0-6-family',
  character: '👪',
  unicodeName: 'E0.6 family',
  codePoint: '1F46A',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e2-0-family-man-woman-boy',
  character: '👨‍👩‍👦',
  unicodeName: 'E2.0 family: man, woman, boy',
  codePoint: '1F468 200D 1F469 200D 1F466',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e2-0-family-woman-woman-boy',
  character: '👩‍👩‍👦',
  unicodeName: 'E2.0 family: woman, woman, boy',
  codePoint: '1F469 200D 1F469 200D 1F466',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e4-0-family-man-boy',
  character: '👨‍👦',
  unicodeName: 'E4.0 family: man, boy',
  codePoint: '1F468 200D 1F466',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e4-0-family-woman-boy',
  character: '👩‍👦',
  unicodeName: 'E4.0 family: woman, boy',
  codePoint: '1F469 200D 1F466',
  group: 'people-body',
  subGroup: 'family'
}, {
  slug: 'e0-7-speaking-head',
  character: '🗣️',
  unicodeName: 'E0.7 speaking head',
  codePoint: '1F5E3 FE0F',
  group: 'people-body',
  subGroup: 'person-symbol'
}, {
  slug: 'e0-6-bust-in-silhouette',
  character: '👤',
  unicodeName: 'E0.6 bust in silhouette',
  codePoint: '1F464',
  group: 'people-body',
  subGroup: 'person-symbol'
}, {
  slug: 'e1-0-busts-in-silhouette',
  character: '👥',
  unicodeName: 'E1.0 busts in silhouette',
  codePoint: '1F465',
  group: 'people-body',
  subGroup: 'person-symbol'
}, {
  slug: 'e13-0-people-hugging',
  character: '🫂',
  unicodeName: 'E13.0 people hugging',
  codePoint: '1FAC2',
  group: 'people-body',
  subGroup: 'person-symbol'
}, {
  slug: 'e0-6-footprints',
  character: '👣',
  unicodeName: 'E0.6 footprints',
  codePoint: '1F463',
  group: 'people-body',
  subGroup: 'person-symbol'
}, {
  slug: 'e0-6-monkey-face',
  character: '🐵',
  unicodeName: 'E0.6 monkey face',
  codePoint: '1F435',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-monkey',
  character: '🐒',
  unicodeName: 'E0.6 monkey',
  codePoint: '1F412',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e3-0-gorilla',
  character: '🦍',
  unicodeName: 'E3.0 gorilla',
  codePoint: '1F98D',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e12-0-orangutan',
  character: '🦧',
  unicodeName: 'E12.0 orangutan',
  codePoint: '1F9A7',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-dog-face',
  character: '🐶',
  unicodeName: 'E0.6 dog face',
  codePoint: '1F436',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-7-dog',
  character: '🐕',
  unicodeName: 'E0.7 dog',
  codePoint: '1F415',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e12-0-guide-dog',
  character: '🦮',
  unicodeName: 'E12.0 guide dog',
  codePoint: '1F9AE',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e12-0-service-dog',
  character: '🐕‍🦺',
  unicodeName: 'E12.0 service dog',
  codePoint: '1F415 200D 1F9BA',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-poodle',
  character: '🐩',
  unicodeName: 'E0.6 poodle',
  codePoint: '1F429',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-wolf',
  character: '🐺',
  unicodeName: 'E0.6 wolf',
  codePoint: '1F43A',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e3-0-fox',
  character: '🦊',
  unicodeName: 'E3.0 fox',
  codePoint: '1F98A',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e11-0-raccoon',
  character: '🦝',
  unicodeName: 'E11.0 raccoon',
  codePoint: '1F99D',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-cat-face',
  character: '🐱',
  unicodeName: 'E0.6 cat face',
  codePoint: '1F431',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-7-cat',
  character: '🐈',
  unicodeName: 'E0.7 cat',
  codePoint: '1F408',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e1-0-lion',
  character: '🦁',
  unicodeName: 'E1.0 lion',
  codePoint: '1F981',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-tiger-face',
  character: '🐯',
  unicodeName: 'E0.6 tiger face',
  codePoint: '1F42F',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e1-0-tiger',
  character: '🐅',
  unicodeName: 'E1.0 tiger',
  codePoint: '1F405',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e1-0-leopard',
  character: '🐆',
  unicodeName: 'E1.0 leopard',
  codePoint: '1F406',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-horse-face',
  character: '🐴',
  unicodeName: 'E0.6 horse face',
  codePoint: '1F434',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-horse',
  character: '🐎',
  unicodeName: 'E0.6 horse',
  codePoint: '1F40E',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e1-0-unicorn',
  character: '🦄',
  unicodeName: 'E1.0 unicorn',
  codePoint: '1F984',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e5-0-zebra',
  character: '🦓',
  unicodeName: 'E5.0 zebra',
  codePoint: '1F993',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e3-0-deer',
  character: '🦌',
  unicodeName: 'E3.0 deer',
  codePoint: '1F98C',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e13-0-bison',
  character: '🦬',
  unicodeName: 'E13.0 bison',
  codePoint: '1F9AC',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-cow-face',
  character: '🐮',
  unicodeName: 'E0.6 cow face',
  codePoint: '1F42E',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e1-0-ox',
  character: '🐂',
  unicodeName: 'E1.0 ox',
  codePoint: '1F402',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e1-0-water-buffalo',
  character: '🐃',
  unicodeName: 'E1.0 water buffalo',
  codePoint: '1F403',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e1-0-cow',
  character: '🐄',
  unicodeName: 'E1.0 cow',
  codePoint: '1F404',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-pig-face',
  character: '🐷',
  unicodeName: 'E0.6 pig face',
  codePoint: '1F437',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e1-0-pig',
  character: '🐖',
  unicodeName: 'E1.0 pig',
  codePoint: '1F416',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-boar',
  character: '🐗',
  unicodeName: 'E0.6 boar',
  codePoint: '1F417',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-pig-nose',
  character: '🐽',
  unicodeName: 'E0.6 pig nose',
  codePoint: '1F43D',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e1-0-ram',
  character: '🐏',
  unicodeName: 'E1.0 ram',
  codePoint: '1F40F',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-ewe',
  character: '🐑',
  unicodeName: 'E0.6 ewe',
  codePoint: '1F411',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e1-0-goat',
  character: '🐐',
  unicodeName: 'E1.0 goat',
  codePoint: '1F410',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e1-0-camel',
  character: '🐪',
  unicodeName: 'E1.0 camel',
  codePoint: '1F42A',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-two-hump-camel',
  character: '🐫',
  unicodeName: 'E0.6 two-hump camel',
  codePoint: '1F42B',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e11-0-llama',
  character: '🦙',
  unicodeName: 'E11.0 llama',
  codePoint: '1F999',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e5-0-giraffe',
  character: '🦒',
  unicodeName: 'E5.0 giraffe',
  codePoint: '1F992',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-elephant',
  character: '🐘',
  unicodeName: 'E0.6 elephant',
  codePoint: '1F418',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e13-0-mammoth',
  character: '🦣',
  unicodeName: 'E13.0 mammoth',
  codePoint: '1F9A3',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e3-0-rhinoceros',
  character: '🦏',
  unicodeName: 'E3.0 rhinoceros',
  codePoint: '1F98F',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e11-0-hippopotamus',
  character: '🦛',
  unicodeName: 'E11.0 hippopotamus',
  codePoint: '1F99B',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-mouse-face',
  character: '🐭',
  unicodeName: 'E0.6 mouse face',
  codePoint: '1F42D',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e1-0-mouse',
  character: '🐁',
  unicodeName: 'E1.0 mouse',
  codePoint: '1F401',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e1-0-rat',
  character: '🐀',
  unicodeName: 'E1.0 rat',
  codePoint: '1F400',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-hamster',
  character: '🐹',
  unicodeName: 'E0.6 hamster',
  codePoint: '1F439',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-rabbit-face',
  character: '🐰',
  unicodeName: 'E0.6 rabbit face',
  codePoint: '1F430',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e1-0-rabbit',
  character: '🐇',
  unicodeName: 'E1.0 rabbit',
  codePoint: '1F407',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-7-chipmunk',
  character: '🐿️',
  unicodeName: 'E0.7 chipmunk',
  codePoint: '1F43F FE0F',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e13-0-beaver',
  character: '🦫',
  unicodeName: 'E13.0 beaver',
  codePoint: '1F9AB',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e5-0-hedgehog',
  character: '🦔',
  unicodeName: 'E5.0 hedgehog',
  codePoint: '1F994',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e3-0-bat',
  character: '🦇',
  unicodeName: 'E3.0 bat',
  codePoint: '1F987',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-bear',
  character: '🐻',
  unicodeName: 'E0.6 bear',
  codePoint: '1F43B',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-koala',
  character: '🐨',
  unicodeName: 'E0.6 koala',
  codePoint: '1F428',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-panda',
  character: '🐼',
  unicodeName: 'E0.6 panda',
  codePoint: '1F43C',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e12-0-sloth',
  character: '🦥',
  unicodeName: 'E12.0 sloth',
  codePoint: '1F9A5',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e12-0-otter',
  character: '🦦',
  unicodeName: 'E12.0 otter',
  codePoint: '1F9A6',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e12-0-skunk',
  character: '🦨',
  unicodeName: 'E12.0 skunk',
  codePoint: '1F9A8',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e11-0-kangaroo',
  character: '🦘',
  unicodeName: 'E11.0 kangaroo',
  codePoint: '1F998',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e11-0-badger',
  character: '🦡',
  unicodeName: 'E11.0 badger',
  codePoint: '1F9A1',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e0-6-paw-prints',
  character: '🐾',
  unicodeName: 'E0.6 paw prints',
  codePoint: '1F43E',
  group: 'animals-nature',
  subGroup: 'animal-mammal'
}, {
  slug: 'e1-0-turkey',
  character: '🦃',
  unicodeName: 'E1.0 turkey',
  codePoint: '1F983',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e0-6-chicken',
  character: '🐔',
  unicodeName: 'E0.6 chicken',
  codePoint: '1F414',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e1-0-rooster',
  character: '🐓',
  unicodeName: 'E1.0 rooster',
  codePoint: '1F413',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e0-6-hatching-chick',
  character: '🐣',
  unicodeName: 'E0.6 hatching chick',
  codePoint: '1F423',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e0-6-baby-chick',
  character: '🐤',
  unicodeName: 'E0.6 baby chick',
  codePoint: '1F424',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e0-6-front-facing-baby-chick',
  character: '🐥',
  unicodeName: 'E0.6 front-facing baby chick',
  codePoint: '1F425',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e0-6-bird',
  character: '🐦',
  unicodeName: 'E0.6 bird',
  codePoint: '1F426',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e0-6-penguin',
  character: '🐧',
  unicodeName: 'E0.6 penguin',
  codePoint: '1F427',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e0-7-dove',
  character: '🕊️',
  unicodeName: 'E0.7 dove',
  codePoint: '1F54A FE0F',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e3-0-eagle',
  character: '🦅',
  unicodeName: 'E3.0 eagle',
  codePoint: '1F985',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e3-0-duck',
  character: '🦆',
  unicodeName: 'E3.0 duck',
  codePoint: '1F986',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e11-0-swan',
  character: '🦢',
  unicodeName: 'E11.0 swan',
  codePoint: '1F9A2',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e3-0-owl',
  character: '🦉',
  unicodeName: 'E3.0 owl',
  codePoint: '1F989',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e13-0-dodo',
  character: '🦤',
  unicodeName: 'E13.0 dodo',
  codePoint: '1F9A4',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e13-0-feather',
  character: '🪶',
  unicodeName: 'E13.0 feather',
  codePoint: '1FAB6',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e12-0-flamingo',
  character: '🦩',
  unicodeName: 'E12.0 flamingo',
  codePoint: '1F9A9',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e11-0-peacock',
  character: '🦚',
  unicodeName: 'E11.0 peacock',
  codePoint: '1F99A',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e11-0-parrot',
  character: '🦜',
  unicodeName: 'E11.0 parrot',
  codePoint: '1F99C',
  group: 'animals-nature',
  subGroup: 'animal-bird'
}, {
  slug: 'e0-6-frog',
  character: '🐸',
  unicodeName: 'E0.6 frog',
  codePoint: '1F438',
  group: 'animals-nature',
  subGroup: 'animal-amphibian'
}, {
  slug: 'e1-0-crocodile',
  character: '🐊',
  unicodeName: 'E1.0 crocodile',
  codePoint: '1F40A',
  group: 'animals-nature',
  subGroup: 'animal-reptile'
}, {
  slug: 'e0-6-turtle',
  character: '🐢',
  unicodeName: 'E0.6 turtle',
  codePoint: '1F422',
  group: 'animals-nature',
  subGroup: 'animal-reptile'
}, {
  slug: 'e3-0-lizard',
  character: '🦎',
  unicodeName: 'E3.0 lizard',
  codePoint: '1F98E',
  group: 'animals-nature',
  subGroup: 'animal-reptile'
}, {
  slug: 'e0-6-snake',
  character: '🐍',
  unicodeName: 'E0.6 snake',
  codePoint: '1F40D',
  group: 'animals-nature',
  subGroup: 'animal-reptile'
}, {
  slug: 'e0-6-dragon-face',
  character: '🐲',
  unicodeName: 'E0.6 dragon face',
  codePoint: '1F432',
  group: 'animals-nature',
  subGroup: 'animal-reptile'
}, {
  slug: 'e1-0-dragon',
  character: '🐉',
  unicodeName: 'E1.0 dragon',
  codePoint: '1F409',
  group: 'animals-nature',
  subGroup: 'animal-reptile'
}, {
  slug: 'e5-0-sauropod',
  character: '🦕',
  unicodeName: 'E5.0 sauropod',
  codePoint: '1F995',
  group: 'animals-nature',
  subGroup: 'animal-reptile'
}, {
  slug: 'e5-0-t-rex',
  character: '🦖',
  unicodeName: 'E5.0 T-Rex',
  codePoint: '1F996',
  group: 'animals-nature',
  subGroup: 'animal-reptile'
}, {
  slug: 'e0-6-spouting-whale',
  character: '🐳',
  unicodeName: 'E0.6 spouting whale',
  codePoint: '1F433',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'e1-0-whale',
  character: '🐋',
  unicodeName: 'E1.0 whale',
  codePoint: '1F40B',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'e0-6-dolphin',
  character: '🐬',
  unicodeName: 'E0.6 dolphin',
  codePoint: '1F42C',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'e13-0-seal',
  character: '🦭',
  unicodeName: 'E13.0 seal',
  codePoint: '1F9AD',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'e0-6-fish',
  character: '🐟',
  unicodeName: 'E0.6 fish',
  codePoint: '1F41F',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'e0-6-tropical-fish',
  character: '🐠',
  unicodeName: 'E0.6 tropical fish',
  codePoint: '1F420',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'e0-6-blowfish',
  character: '🐡',
  unicodeName: 'E0.6 blowfish',
  codePoint: '1F421',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'e3-0-shark',
  character: '🦈',
  unicodeName: 'E3.0 shark',
  codePoint: '1F988',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'e0-6-octopus',
  character: '🐙',
  unicodeName: 'E0.6 octopus',
  codePoint: '1F419',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'e0-6-spiral-shell',
  character: '🐚',
  unicodeName: 'E0.6 spiral shell',
  codePoint: '1F41A',
  group: 'animals-nature',
  subGroup: 'animal-marine'
}, {
  slug: 'e0-6-snail',
  character: '🐌',
  unicodeName: 'E0.6 snail',
  codePoint: '1F40C',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'e3-0-butterfly',
  character: '🦋',
  unicodeName: 'E3.0 butterfly',
  codePoint: '1F98B',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'e0-6-bug',
  character: '🐛',
  unicodeName: 'E0.6 bug',
  codePoint: '1F41B',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'e0-6-ant',
  character: '🐜',
  unicodeName: 'E0.6 ant',
  codePoint: '1F41C',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'e0-6-honeybee',
  character: '🐝',
  unicodeName: 'E0.6 honeybee',
  codePoint: '1F41D',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'e13-0-beetle',
  character: '🪲',
  unicodeName: 'E13.0 beetle',
  codePoint: '1FAB2',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'e0-6-lady-beetle',
  character: '🐞',
  unicodeName: 'E0.6 lady beetle',
  codePoint: '1F41E',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'e5-0-cricket',
  character: '🦗',
  unicodeName: 'E5.0 cricket',
  codePoint: '1F997',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'e13-0-cockroach',
  character: '🪳',
  unicodeName: 'E13.0 cockroach',
  codePoint: '1FAB3',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'e0-7-spider',
  character: '🕷️',
  unicodeName: 'E0.7 spider',
  codePoint: '1F577 FE0F',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'e0-7-spider-web',
  character: '🕸️',
  unicodeName: 'E0.7 spider web',
  codePoint: '1F578 FE0F',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'e1-0-scorpion',
  character: '🦂',
  unicodeName: 'E1.0 scorpion',
  codePoint: '1F982',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'e11-0-mosquito',
  character: '🦟',
  unicodeName: 'E11.0 mosquito',
  codePoint: '1F99F',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'e13-0-fly',
  character: '🪰',
  unicodeName: 'E13.0 fly',
  codePoint: '1FAB0',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'e13-0-worm',
  character: '🪱',
  unicodeName: 'E13.0 worm',
  codePoint: '1FAB1',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'e11-0-microbe',
  character: '🦠',
  unicodeName: 'E11.0 microbe',
  codePoint: '1F9A0',
  group: 'animals-nature',
  subGroup: 'animal-bug'
}, {
  slug: 'e0-6-bouquet',
  character: '💐',
  unicodeName: 'E0.6 bouquet',
  codePoint: '1F490',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'e0-6-cherry-blossom',
  character: '🌸',
  unicodeName: 'E0.6 cherry blossom',
  codePoint: '1F338',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'e0-6-white-flower',
  character: '💮',
  unicodeName: 'E0.6 white flower',
  codePoint: '1F4AE',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'e0-7-rosette',
  character: '🏵️',
  unicodeName: 'E0.7 rosette',
  codePoint: '1F3F5 FE0F',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'e0-6-rose',
  character: '🌹',
  unicodeName: 'E0.6 rose',
  codePoint: '1F339',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'e3-0-wilted-flower',
  character: '🥀',
  unicodeName: 'E3.0 wilted flower',
  codePoint: '1F940',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'e0-6-hibiscus',
  character: '🌺',
  unicodeName: 'E0.6 hibiscus',
  codePoint: '1F33A',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'e0-6-sunflower',
  character: '🌻',
  unicodeName: 'E0.6 sunflower',
  codePoint: '1F33B',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'e0-6-blossom',
  character: '🌼',
  unicodeName: 'E0.6 blossom',
  codePoint: '1F33C',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'e0-6-tulip',
  character: '🌷',
  unicodeName: 'E0.6 tulip',
  codePoint: '1F337',
  group: 'animals-nature',
  subGroup: 'plant-flower'
}, {
  slug: 'e0-6-seedling',
  character: '🌱',
  unicodeName: 'E0.6 seedling',
  codePoint: '1F331',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'e13-0-potted-plant',
  character: '🪴',
  unicodeName: 'E13.0 potted plant',
  codePoint: '1FAB4',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'e1-0-evergreen-tree',
  character: '🌲',
  unicodeName: 'E1.0 evergreen tree',
  codePoint: '1F332',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'e1-0-deciduous-tree',
  character: '🌳',
  unicodeName: 'E1.0 deciduous tree',
  codePoint: '1F333',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'e0-6-palm-tree',
  character: '🌴',
  unicodeName: 'E0.6 palm tree',
  codePoint: '1F334',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'e0-6-cactus',
  character: '🌵',
  unicodeName: 'E0.6 cactus',
  codePoint: '1F335',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'e0-6-sheaf-of-rice',
  character: '🌾',
  unicodeName: 'E0.6 sheaf of rice',
  codePoint: '1F33E',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'e0-6-herb',
  character: '🌿',
  unicodeName: 'E0.6 herb',
  codePoint: '1F33F',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'e1-0-shamrock',
  character: '☘️',
  unicodeName: 'E1.0 shamrock',
  codePoint: '2618 FE0F',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'e0-6-four-leaf-clover',
  character: '🍀',
  unicodeName: 'E0.6 four leaf clover',
  codePoint: '1F340',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'e0-6-maple-leaf',
  character: '🍁',
  unicodeName: 'E0.6 maple leaf',
  codePoint: '1F341',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'e0-6-fallen-leaf',
  character: '🍂',
  unicodeName: 'E0.6 fallen leaf',
  codePoint: '1F342',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'e0-6-leaf-fluttering-in-wind',
  character: '🍃',
  unicodeName: 'E0.6 leaf fluttering in wind',
  codePoint: '1F343',
  group: 'animals-nature',
  subGroup: 'plant-other'
}, {
  slug: 'e0-6-grapes',
  character: '🍇',
  unicodeName: 'E0.6 grapes',
  codePoint: '1F347',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e0-6-melon',
  character: '🍈',
  unicodeName: 'E0.6 melon',
  codePoint: '1F348',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e0-6-watermelon',
  character: '🍉',
  unicodeName: 'E0.6 watermelon',
  codePoint: '1F349',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e0-6-tangerine',
  character: '🍊',
  unicodeName: 'E0.6 tangerine',
  codePoint: '1F34A',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e1-0-lemon',
  character: '🍋',
  unicodeName: 'E1.0 lemon',
  codePoint: '1F34B',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e0-6-banana',
  character: '🍌',
  unicodeName: 'E0.6 banana',
  codePoint: '1F34C',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e0-6-pineapple',
  character: '🍍',
  unicodeName: 'E0.6 pineapple',
  codePoint: '1F34D',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e11-0-mango',
  character: '🥭',
  unicodeName: 'E11.0 mango',
  codePoint: '1F96D',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e0-6-red-apple',
  character: '🍎',
  unicodeName: 'E0.6 red apple',
  codePoint: '1F34E',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e0-6-green-apple',
  character: '🍏',
  unicodeName: 'E0.6 green apple',
  codePoint: '1F34F',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e1-0-pear',
  character: '🍐',
  unicodeName: 'E1.0 pear',
  codePoint: '1F350',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e0-6-peach',
  character: '🍑',
  unicodeName: 'E0.6 peach',
  codePoint: '1F351',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e0-6-cherries',
  character: '🍒',
  unicodeName: 'E0.6 cherries',
  codePoint: '1F352',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e0-6-strawberry',
  character: '🍓',
  unicodeName: 'E0.6 strawberry',
  codePoint: '1F353',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e13-0-blueberries',
  character: '🫐',
  unicodeName: 'E13.0 blueberries',
  codePoint: '1FAD0',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e3-0-kiwi-fruit',
  character: '🥝',
  unicodeName: 'E3.0 kiwi fruit',
  codePoint: '1F95D',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e0-6-tomato',
  character: '🍅',
  unicodeName: 'E0.6 tomato',
  codePoint: '1F345',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e13-0-olive',
  character: '🫒',
  unicodeName: 'E13.0 olive',
  codePoint: '1FAD2',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e5-0-coconut',
  character: '🥥',
  unicodeName: 'E5.0 coconut',
  codePoint: '1F965',
  group: 'food-drink',
  subGroup: 'food-fruit'
}, {
  slug: 'e3-0-avocado',
  character: '🥑',
  unicodeName: 'E3.0 avocado',
  codePoint: '1F951',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'e0-6-eggplant',
  character: '🍆',
  unicodeName: 'E0.6 eggplant',
  codePoint: '1F346',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'e3-0-potato',
  character: '🥔',
  unicodeName: 'E3.0 potato',
  codePoint: '1F954',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'e3-0-carrot',
  character: '🥕',
  unicodeName: 'E3.0 carrot',
  codePoint: '1F955',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'e0-6-ear-of-corn',
  character: '🌽',
  unicodeName: 'E0.6 ear of corn',
  codePoint: '1F33D',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'e0-7-hot-pepper',
  character: '🌶️',
  unicodeName: 'E0.7 hot pepper',
  codePoint: '1F336 FE0F',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'e13-0-bell-pepper',
  character: '🫑',
  unicodeName: 'E13.0 bell pepper',
  codePoint: '1FAD1',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'e3-0-cucumber',
  character: '🥒',
  unicodeName: 'E3.0 cucumber',
  codePoint: '1F952',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'e11-0-leafy-green',
  character: '🥬',
  unicodeName: 'E11.0 leafy green',
  codePoint: '1F96C',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'e5-0-broccoli',
  character: '🥦',
  unicodeName: 'E5.0 broccoli',
  codePoint: '1F966',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'e12-0-garlic',
  character: '🧄',
  unicodeName: 'E12.0 garlic',
  codePoint: '1F9C4',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'e12-0-onion',
  character: '🧅',
  unicodeName: 'E12.0 onion',
  codePoint: '1F9C5',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'e0-6-mushroom',
  character: '🍄',
  unicodeName: 'E0.6 mushroom',
  codePoint: '1F344',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'e3-0-peanuts',
  character: '🥜',
  unicodeName: 'E3.0 peanuts',
  codePoint: '1F95C',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'e0-6-chestnut',
  character: '🌰',
  unicodeName: 'E0.6 chestnut',
  codePoint: '1F330',
  group: 'food-drink',
  subGroup: 'food-vegetable'
}, {
  slug: 'e0-6-bread',
  character: '🍞',
  unicodeName: 'E0.6 bread',
  codePoint: '1F35E',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e3-0-croissant',
  character: '🥐',
  unicodeName: 'E3.0 croissant',
  codePoint: '1F950',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e3-0-baguette-bread',
  character: '🥖',
  unicodeName: 'E3.0 baguette bread',
  codePoint: '1F956',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e13-0-flatbread',
  character: '🫓',
  unicodeName: 'E13.0 flatbread',
  codePoint: '1FAD3',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e5-0-pretzel',
  character: '🥨',
  unicodeName: 'E5.0 pretzel',
  codePoint: '1F968',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e11-0-bagel',
  character: '🥯',
  unicodeName: 'E11.0 bagel',
  codePoint: '1F96F',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e3-0-pancakes',
  character: '🥞',
  unicodeName: 'E3.0 pancakes',
  codePoint: '1F95E',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e12-0-waffle',
  character: '🧇',
  unicodeName: 'E12.0 waffle',
  codePoint: '1F9C7',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e1-0-cheese-wedge',
  character: '🧀',
  unicodeName: 'E1.0 cheese wedge',
  codePoint: '1F9C0',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e0-6-meat-on-bone',
  character: '🍖',
  unicodeName: 'E0.6 meat on bone',
  codePoint: '1F356',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e0-6-poultry-leg',
  character: '🍗',
  unicodeName: 'E0.6 poultry leg',
  codePoint: '1F357',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e5-0-cut-of-meat',
  character: '🥩',
  unicodeName: 'E5.0 cut of meat',
  codePoint: '1F969',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e3-0-bacon',
  character: '🥓',
  unicodeName: 'E3.0 bacon',
  codePoint: '1F953',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e0-6-hamburger',
  character: '🍔',
  unicodeName: 'E0.6 hamburger',
  codePoint: '1F354',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e0-6-french-fries',
  character: '🍟',
  unicodeName: 'E0.6 french fries',
  codePoint: '1F35F',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e0-6-pizza',
  character: '🍕',
  unicodeName: 'E0.6 pizza',
  codePoint: '1F355',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e1-0-hot-dog',
  character: '🌭',
  unicodeName: 'E1.0 hot dog',
  codePoint: '1F32D',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e5-0-sandwich',
  character: '🥪',
  unicodeName: 'E5.0 sandwich',
  codePoint: '1F96A',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e1-0-taco',
  character: '🌮',
  unicodeName: 'E1.0 taco',
  codePoint: '1F32E',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e1-0-burrito',
  character: '🌯',
  unicodeName: 'E1.0 burrito',
  codePoint: '1F32F',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e13-0-tamale',
  character: '🫔',
  unicodeName: 'E13.0 tamale',
  codePoint: '1FAD4',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e3-0-stuffed-flatbread',
  character: '🥙',
  unicodeName: 'E3.0 stuffed flatbread',
  codePoint: '1F959',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e12-0-falafel',
  character: '🧆',
  unicodeName: 'E12.0 falafel',
  codePoint: '1F9C6',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e3-0-egg',
  character: '🥚',
  unicodeName: 'E3.0 egg',
  codePoint: '1F95A',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e0-6-cooking',
  character: '🍳',
  unicodeName: 'E0.6 cooking',
  codePoint: '1F373',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e3-0-shallow-pan-of-food',
  character: '🥘',
  unicodeName: 'E3.0 shallow pan of food',
  codePoint: '1F958',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e0-6-pot-of-food',
  character: '🍲',
  unicodeName: 'E0.6 pot of food',
  codePoint: '1F372',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e13-0-fondue',
  character: '🫕',
  unicodeName: 'E13.0 fondue',
  codePoint: '1FAD5',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e5-0-bowl-with-spoon',
  character: '🥣',
  unicodeName: 'E5.0 bowl with spoon',
  codePoint: '1F963',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e3-0-green-salad',
  character: '🥗',
  unicodeName: 'E3.0 green salad',
  codePoint: '1F957',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e1-0-popcorn',
  character: '🍿',
  unicodeName: 'E1.0 popcorn',
  codePoint: '1F37F',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e12-0-butter',
  character: '🧈',
  unicodeName: 'E12.0 butter',
  codePoint: '1F9C8',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e11-0-salt',
  character: '🧂',
  unicodeName: 'E11.0 salt',
  codePoint: '1F9C2',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e5-0-canned-food',
  character: '🥫',
  unicodeName: 'E5.0 canned food',
  codePoint: '1F96B',
  group: 'food-drink',
  subGroup: 'food-prepared'
}, {
  slug: 'e0-6-bento-box',
  character: '🍱',
  unicodeName: 'E0.6 bento box',
  codePoint: '1F371',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e0-6-rice-cracker',
  character: '🍘',
  unicodeName: 'E0.6 rice cracker',
  codePoint: '1F358',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e0-6-rice-ball',
  character: '🍙',
  unicodeName: 'E0.6 rice ball',
  codePoint: '1F359',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e0-6-cooked-rice',
  character: '🍚',
  unicodeName: 'E0.6 cooked rice',
  codePoint: '1F35A',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e0-6-curry-rice',
  character: '🍛',
  unicodeName: 'E0.6 curry rice',
  codePoint: '1F35B',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e0-6-steaming-bowl',
  character: '🍜',
  unicodeName: 'E0.6 steaming bowl',
  codePoint: '1F35C',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e0-6-spaghetti',
  character: '🍝',
  unicodeName: 'E0.6 spaghetti',
  codePoint: '1F35D',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e0-6-roasted-sweet-potato',
  character: '🍠',
  unicodeName: 'E0.6 roasted sweet potato',
  codePoint: '1F360',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e0-6-oden',
  character: '🍢',
  unicodeName: 'E0.6 oden',
  codePoint: '1F362',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e0-6-sushi',
  character: '🍣',
  unicodeName: 'E0.6 sushi',
  codePoint: '1F363',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e0-6-fried-shrimp',
  character: '🍤',
  unicodeName: 'E0.6 fried shrimp',
  codePoint: '1F364',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e0-6-fish-cake-with-swirl',
  character: '🍥',
  unicodeName: 'E0.6 fish cake with swirl',
  codePoint: '1F365',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e11-0-moon-cake',
  character: '🥮',
  unicodeName: 'E11.0 moon cake',
  codePoint: '1F96E',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e0-6-dango',
  character: '🍡',
  unicodeName: 'E0.6 dango',
  codePoint: '1F361',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e5-0-dumpling',
  character: '🥟',
  unicodeName: 'E5.0 dumpling',
  codePoint: '1F95F',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e5-0-fortune-cookie',
  character: '🥠',
  unicodeName: 'E5.0 fortune cookie',
  codePoint: '1F960',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e5-0-takeout-box',
  character: '🥡',
  unicodeName: 'E5.0 takeout box',
  codePoint: '1F961',
  group: 'food-drink',
  subGroup: 'food-asian'
}, {
  slug: 'e1-0-crab',
  character: '🦀',
  unicodeName: 'E1.0 crab',
  codePoint: '1F980',
  group: 'food-drink',
  subGroup: 'food-marine'
}, {
  slug: 'e11-0-lobster',
  character: '🦞',
  unicodeName: 'E11.0 lobster',
  codePoint: '1F99E',
  group: 'food-drink',
  subGroup: 'food-marine'
}, {
  slug: 'e3-0-shrimp',
  character: '🦐',
  unicodeName: 'E3.0 shrimp',
  codePoint: '1F990',
  group: 'food-drink',
  subGroup: 'food-marine'
}, {
  slug: 'e3-0-squid',
  character: '🦑',
  unicodeName: 'E3.0 squid',
  codePoint: '1F991',
  group: 'food-drink',
  subGroup: 'food-marine'
}, {
  slug: 'e12-0-oyster',
  character: '🦪',
  unicodeName: 'E12.0 oyster',
  codePoint: '1F9AA',
  group: 'food-drink',
  subGroup: 'food-marine'
}, {
  slug: 'e0-6-soft-ice-cream',
  character: '🍦',
  unicodeName: 'E0.6 soft ice cream',
  codePoint: '1F366',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'e0-6-shaved-ice',
  character: '🍧',
  unicodeName: 'E0.6 shaved ice',
  codePoint: '1F367',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'e0-6-ice-cream',
  character: '🍨',
  unicodeName: 'E0.6 ice cream',
  codePoint: '1F368',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'e0-6-doughnut',
  character: '🍩',
  unicodeName: 'E0.6 doughnut',
  codePoint: '1F369',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'e0-6-cookie',
  character: '🍪',
  unicodeName: 'E0.6 cookie',
  codePoint: '1F36A',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'e0-6-birthday-cake',
  character: '🎂',
  unicodeName: 'E0.6 birthday cake',
  codePoint: '1F382',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'e0-6-shortcake',
  character: '🍰',
  unicodeName: 'E0.6 shortcake',
  codePoint: '1F370',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'e11-0-cupcake',
  character: '🧁',
  unicodeName: 'E11.0 cupcake',
  codePoint: '1F9C1',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'e5-0-pie',
  character: '🥧',
  unicodeName: 'E5.0 pie',
  codePoint: '1F967',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'e0-6-chocolate-bar',
  character: '🍫',
  unicodeName: 'E0.6 chocolate bar',
  codePoint: '1F36B',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'e0-6-candy',
  character: '🍬',
  unicodeName: 'E0.6 candy',
  codePoint: '1F36C',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'e0-6-lollipop',
  character: '🍭',
  unicodeName: 'E0.6 lollipop',
  codePoint: '1F36D',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'e0-6-custard',
  character: '🍮',
  unicodeName: 'E0.6 custard',
  codePoint: '1F36E',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'e0-6-honey-pot',
  character: '🍯',
  unicodeName: 'E0.6 honey pot',
  codePoint: '1F36F',
  group: 'food-drink',
  subGroup: 'food-sweet'
}, {
  slug: 'e1-0-baby-bottle',
  character: '🍼',
  unicodeName: 'E1.0 baby bottle',
  codePoint: '1F37C',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e3-0-glass-of-milk',
  character: '🥛',
  unicodeName: 'E3.0 glass of milk',
  codePoint: '1F95B',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e0-6-hot-beverage',
  character: '☕',
  unicodeName: 'E0.6 hot beverage',
  codePoint: '2615',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e13-0-teapot',
  character: '🫖',
  unicodeName: 'E13.0 teapot',
  codePoint: '1FAD6',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e0-6-teacup-without-handle',
  character: '🍵',
  unicodeName: 'E0.6 teacup without handle',
  codePoint: '1F375',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e0-6-sake',
  character: '🍶',
  unicodeName: 'E0.6 sake',
  codePoint: '1F376',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e1-0-bottle-with-popping-cork',
  character: '🍾',
  unicodeName: 'E1.0 bottle with popping cork',
  codePoint: '1F37E',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e0-6-wine-glass',
  character: '🍷',
  unicodeName: 'E0.6 wine glass',
  codePoint: '1F377',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e0-6-cocktail-glass',
  character: '🍸',
  unicodeName: 'E0.6 cocktail glass',
  codePoint: '1F378',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e0-6-tropical-drink',
  character: '🍹',
  unicodeName: 'E0.6 tropical drink',
  codePoint: '1F379',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e0-6-beer-mug',
  character: '🍺',
  unicodeName: 'E0.6 beer mug',
  codePoint: '1F37A',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e0-6-clinking-beer-mugs',
  character: '🍻',
  unicodeName: 'E0.6 clinking beer mugs',
  codePoint: '1F37B',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e3-0-clinking-glasses',
  character: '🥂',
  unicodeName: 'E3.0 clinking glasses',
  codePoint: '1F942',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e3-0-tumbler-glass',
  character: '🥃',
  unicodeName: 'E3.0 tumbler glass',
  codePoint: '1F943',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e5-0-cup-with-straw',
  character: '🥤',
  unicodeName: 'E5.0 cup with straw',
  codePoint: '1F964',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e13-0-bubble-tea',
  character: '🧋',
  unicodeName: 'E13.0 bubble tea',
  codePoint: '1F9CB',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e12-0-beverage-box',
  character: '🧃',
  unicodeName: 'E12.0 beverage box',
  codePoint: '1F9C3',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e12-0-mate',
  character: '🧉',
  unicodeName: 'E12.0 mate',
  codePoint: '1F9C9',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e12-0-ice',
  character: '🧊',
  unicodeName: 'E12.0 ice',
  codePoint: '1F9CA',
  group: 'food-drink',
  subGroup: 'drink'
}, {
  slug: 'e5-0-chopsticks',
  character: '🥢',
  unicodeName: 'E5.0 chopsticks',
  codePoint: '1F962',
  group: 'food-drink',
  subGroup: 'dishware'
}, {
  slug: 'e0-7-fork-and-knife-with-plate',
  character: '🍽️',
  unicodeName: 'E0.7 fork and knife with plate',
  codePoint: '1F37D FE0F',
  group: 'food-drink',
  subGroup: 'dishware'
}, {
  slug: 'e0-6-fork-and-knife',
  character: '🍴',
  unicodeName: 'E0.6 fork and knife',
  codePoint: '1F374',
  group: 'food-drink',
  subGroup: 'dishware'
}, {
  slug: 'e3-0-spoon',
  character: '🥄',
  unicodeName: 'E3.0 spoon',
  codePoint: '1F944',
  group: 'food-drink',
  subGroup: 'dishware'
}, {
  slug: 'e0-6-kitchen-knife',
  character: '🔪',
  unicodeName: 'E0.6 kitchen knife',
  codePoint: '1F52A',
  group: 'food-drink',
  subGroup: 'dishware'
}, {
  slug: 'e1-0-amphora',
  character: '🏺',
  unicodeName: 'E1.0 amphora',
  codePoint: '1F3FA',
  group: 'food-drink',
  subGroup: 'dishware'
}, {
  slug: 'e0-7-globe-showing-europe-africa',
  character: '🌍',
  unicodeName: 'E0.7 globe showing Europe-Africa',
  codePoint: '1F30D',
  group: 'travel-places',
  subGroup: 'place-map'
}, {
  slug: 'e0-7-globe-showing-americas',
  character: '🌎',
  unicodeName: 'E0.7 globe showing Americas',
  codePoint: '1F30E',
  group: 'travel-places',
  subGroup: 'place-map'
}, {
  slug: 'e0-6-globe-showing-asia-australia',
  character: '🌏',
  unicodeName: 'E0.6 globe showing Asia-Australia',
  codePoint: '1F30F',
  group: 'travel-places',
  subGroup: 'place-map'
}, {
  slug: 'e1-0-globe-with-meridians',
  character: '🌐',
  unicodeName: 'E1.0 globe with meridians',
  codePoint: '1F310',
  group: 'travel-places',
  subGroup: 'place-map'
}, {
  slug: 'e0-7-world-map',
  character: '🗺️',
  unicodeName: 'E0.7 world map',
  codePoint: '1F5FA FE0F',
  group: 'travel-places',
  subGroup: 'place-map'
}, {
  slug: 'e0-6-map-of-japan',
  character: '🗾',
  unicodeName: 'E0.6 map of Japan',
  codePoint: '1F5FE',
  group: 'travel-places',
  subGroup: 'place-map'
}, {
  slug: 'e11-0-compass',
  character: '🧭',
  unicodeName: 'E11.0 compass',
  codePoint: '1F9ED',
  group: 'travel-places',
  subGroup: 'place-map'
}, {
  slug: 'e0-7-snow-capped-mountain',
  character: '🏔️',
  unicodeName: 'E0.7 snow-capped mountain',
  codePoint: '1F3D4 FE0F',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'e0-7-mountain',
  character: '⛰️',
  unicodeName: 'E0.7 mountain',
  codePoint: '26F0 FE0F',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'e0-6-volcano',
  character: '🌋',
  unicodeName: 'E0.6 volcano',
  codePoint: '1F30B',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'e0-6-mount-fuji',
  character: '🗻',
  unicodeName: 'E0.6 mount fuji',
  codePoint: '1F5FB',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'e0-7-camping',
  character: '🏕️',
  unicodeName: 'E0.7 camping',
  codePoint: '1F3D5 FE0F',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'e0-7-beach-with-umbrella',
  character: '🏖️',
  unicodeName: 'E0.7 beach with umbrella',
  codePoint: '1F3D6 FE0F',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'e0-7-desert',
  character: '🏜️',
  unicodeName: 'E0.7 desert',
  codePoint: '1F3DC FE0F',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'e0-7-desert-island',
  character: '🏝️',
  unicodeName: 'E0.7 desert island',
  codePoint: '1F3DD FE0F',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'e0-7-national-park',
  character: '🏞️',
  unicodeName: 'E0.7 national park',
  codePoint: '1F3DE FE0F',
  group: 'travel-places',
  subGroup: 'place-geographic'
}, {
  slug: 'e0-7-stadium',
  character: '🏟️',
  unicodeName: 'E0.7 stadium',
  codePoint: '1F3DF FE0F',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-7-classical-building',
  character: '🏛️',
  unicodeName: 'E0.7 classical building',
  codePoint: '1F3DB FE0F',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-7-building-construction',
  character: '🏗️',
  unicodeName: 'E0.7 building construction',
  codePoint: '1F3D7 FE0F',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e11-0-brick',
  character: '🧱',
  unicodeName: 'E11.0 brick',
  codePoint: '1F9F1',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e13-0-rock',
  character: '🪨',
  unicodeName: 'E13.0 rock',
  codePoint: '1FAA8',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e13-0-wood',
  character: '🪵',
  unicodeName: 'E13.0 wood',
  codePoint: '1FAB5',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e13-0-hut',
  character: '🛖',
  unicodeName: 'E13.0 hut',
  codePoint: '1F6D6',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-7-houses',
  character: '🏘️',
  unicodeName: 'E0.7 houses',
  codePoint: '1F3D8 FE0F',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-7-derelict-house',
  character: '🏚️',
  unicodeName: 'E0.7 derelict house',
  codePoint: '1F3DA FE0F',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-house',
  character: '🏠',
  unicodeName: 'E0.6 house',
  codePoint: '1F3E0',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-house-with-garden',
  character: '🏡',
  unicodeName: 'E0.6 house with garden',
  codePoint: '1F3E1',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-office-building',
  character: '🏢',
  unicodeName: 'E0.6 office building',
  codePoint: '1F3E2',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-japanese-post-office',
  character: '🏣',
  unicodeName: 'E0.6 Japanese post office',
  codePoint: '1F3E3',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e1-0-post-office',
  character: '🏤',
  unicodeName: 'E1.0 post office',
  codePoint: '1F3E4',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-hospital',
  character: '🏥',
  unicodeName: 'E0.6 hospital',
  codePoint: '1F3E5',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-bank',
  character: '🏦',
  unicodeName: 'E0.6 bank',
  codePoint: '1F3E6',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-hotel',
  character: '🏨',
  unicodeName: 'E0.6 hotel',
  codePoint: '1F3E8',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-love-hotel',
  character: '🏩',
  unicodeName: 'E0.6 love hotel',
  codePoint: '1F3E9',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-convenience-store',
  character: '🏪',
  unicodeName: 'E0.6 convenience store',
  codePoint: '1F3EA',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-school',
  character: '🏫',
  unicodeName: 'E0.6 school',
  codePoint: '1F3EB',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-department-store',
  character: '🏬',
  unicodeName: 'E0.6 department store',
  codePoint: '1F3EC',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-factory',
  character: '🏭',
  unicodeName: 'E0.6 factory',
  codePoint: '1F3ED',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-japanese-castle',
  character: '🏯',
  unicodeName: 'E0.6 Japanese castle',
  codePoint: '1F3EF',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-castle',
  character: '🏰',
  unicodeName: 'E0.6 castle',
  codePoint: '1F3F0',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-wedding',
  character: '💒',
  unicodeName: 'E0.6 wedding',
  codePoint: '1F492',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-tokyo-tower',
  character: '🗼',
  unicodeName: 'E0.6 Tokyo tower',
  codePoint: '1F5FC',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-statue-of-liberty',
  character: '🗽',
  unicodeName: 'E0.6 Statue of Liberty',
  codePoint: '1F5FD',
  group: 'travel-places',
  subGroup: 'place-building'
}, {
  slug: 'e0-6-church',
  character: '⛪',
  unicodeName: 'E0.6 church',
  codePoint: '26EA',
  group: 'travel-places',
  subGroup: 'place-religious'
}, {
  slug: 'e1-0-mosque',
  character: '🕌',
  unicodeName: 'E1.0 mosque',
  codePoint: '1F54C',
  group: 'travel-places',
  subGroup: 'place-religious'
}, {
  slug: 'e12-0-hindu-temple',
  character: '🛕',
  unicodeName: 'E12.0 hindu temple',
  codePoint: '1F6D5',
  group: 'travel-places',
  subGroup: 'place-religious'
}, {
  slug: 'e1-0-synagogue',
  character: '🕍',
  unicodeName: 'E1.0 synagogue',
  codePoint: '1F54D',
  group: 'travel-places',
  subGroup: 'place-religious'
}, {
  slug: 'e0-7-shinto-shrine',
  character: '⛩️',
  unicodeName: 'E0.7 shinto shrine',
  codePoint: '26E9 FE0F',
  group: 'travel-places',
  subGroup: 'place-religious'
}, {
  slug: 'e1-0-kaaba',
  character: '🕋',
  unicodeName: 'E1.0 kaaba',
  codePoint: '1F54B',
  group: 'travel-places',
  subGroup: 'place-religious'
}, {
  slug: 'e0-6-fountain',
  character: '⛲',
  unicodeName: 'E0.6 fountain',
  codePoint: '26F2',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'e0-6-tent',
  character: '⛺',
  unicodeName: 'E0.6 tent',
  codePoint: '26FA',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'e0-6-foggy',
  character: '🌁',
  unicodeName: 'E0.6 foggy',
  codePoint: '1F301',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'e0-6-night-with-stars',
  character: '🌃',
  unicodeName: 'E0.6 night with stars',
  codePoint: '1F303',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'e0-7-cityscape',
  character: '🏙️',
  unicodeName: 'E0.7 cityscape',
  codePoint: '1F3D9 FE0F',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'e0-6-sunrise-over-mountains',
  character: '🌄',
  unicodeName: 'E0.6 sunrise over mountains',
  codePoint: '1F304',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'e0-6-sunrise',
  character: '🌅',
  unicodeName: 'E0.6 sunrise',
  codePoint: '1F305',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'e0-6-cityscape-at-dusk',
  character: '🌆',
  unicodeName: 'E0.6 cityscape at dusk',
  codePoint: '1F306',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'e0-6-sunset',
  character: '🌇',
  unicodeName: 'E0.6 sunset',
  codePoint: '1F307',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'e0-6-bridge-at-night',
  character: '🌉',
  unicodeName: 'E0.6 bridge at night',
  codePoint: '1F309',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'e0-6-hot-springs',
  character: '♨️',
  unicodeName: 'E0.6 hot springs',
  codePoint: '2668 FE0F',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'e0-6-carousel-horse',
  character: '🎠',
  unicodeName: 'E0.6 carousel horse',
  codePoint: '1F3A0',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'e0-6-ferris-wheel',
  character: '🎡',
  unicodeName: 'E0.6 ferris wheel',
  codePoint: '1F3A1',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'e0-6-roller-coaster',
  character: '🎢',
  unicodeName: 'E0.6 roller coaster',
  codePoint: '1F3A2',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'e0-6-barber-pole',
  character: '💈',
  unicodeName: 'E0.6 barber pole',
  codePoint: '1F488',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'e0-6-circus-tent',
  character: '🎪',
  unicodeName: 'E0.6 circus tent',
  codePoint: '1F3AA',
  group: 'travel-places',
  subGroup: 'place-other'
}, {
  slug: 'e1-0-locomotive',
  character: '🚂',
  unicodeName: 'E1.0 locomotive',
  codePoint: '1F682',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-railway-car',
  character: '🚃',
  unicodeName: 'E0.6 railway car',
  codePoint: '1F683',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-high-speed-train',
  character: '🚄',
  unicodeName: 'E0.6 high-speed train',
  codePoint: '1F684',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-bullet-train',
  character: '🚅',
  unicodeName: 'E0.6 bullet train',
  codePoint: '1F685',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e1-0-train',
  character: '🚆',
  unicodeName: 'E1.0 train',
  codePoint: '1F686',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-metro',
  character: '🚇',
  unicodeName: 'E0.6 metro',
  codePoint: '1F687',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e1-0-light-rail',
  character: '🚈',
  unicodeName: 'E1.0 light rail',
  codePoint: '1F688',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-station',
  character: '🚉',
  unicodeName: 'E0.6 station',
  codePoint: '1F689',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e1-0-tram',
  character: '🚊',
  unicodeName: 'E1.0 tram',
  codePoint: '1F68A',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e1-0-monorail',
  character: '🚝',
  unicodeName: 'E1.0 monorail',
  codePoint: '1F69D',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e1-0-mountain-railway',
  character: '🚞',
  unicodeName: 'E1.0 mountain railway',
  codePoint: '1F69E',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e1-0-tram-car',
  character: '🚋',
  unicodeName: 'E1.0 tram car',
  codePoint: '1F68B',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-bus',
  character: '🚌',
  unicodeName: 'E0.6 bus',
  codePoint: '1F68C',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-7-oncoming-bus',
  character: '🚍',
  unicodeName: 'E0.7 oncoming bus',
  codePoint: '1F68D',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e1-0-trolleybus',
  character: '🚎',
  unicodeName: 'E1.0 trolleybus',
  codePoint: '1F68E',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e1-0-minibus',
  character: '🚐',
  unicodeName: 'E1.0 minibus',
  codePoint: '1F690',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-ambulance',
  character: '🚑',
  unicodeName: 'E0.6 ambulance',
  codePoint: '1F691',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-fire-engine',
  character: '🚒',
  unicodeName: 'E0.6 fire engine',
  codePoint: '1F692',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-police-car',
  character: '🚓',
  unicodeName: 'E0.6 police car',
  codePoint: '1F693',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-7-oncoming-police-car',
  character: '🚔',
  unicodeName: 'E0.7 oncoming police car',
  codePoint: '1F694',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-taxi',
  character: '🚕',
  unicodeName: 'E0.6 taxi',
  codePoint: '1F695',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e1-0-oncoming-taxi',
  character: '🚖',
  unicodeName: 'E1.0 oncoming taxi',
  codePoint: '1F696',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-automobile',
  character: '🚗',
  unicodeName: 'E0.6 automobile',
  codePoint: '1F697',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-7-oncoming-automobile',
  character: '🚘',
  unicodeName: 'E0.7 oncoming automobile',
  codePoint: '1F698',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-sport-utility-vehicle',
  character: '🚙',
  unicodeName: 'E0.6 sport utility vehicle',
  codePoint: '1F699',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e13-0-pickup-truck',
  character: '🛻',
  unicodeName: 'E13.0 pickup truck',
  codePoint: '1F6FB',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-delivery-truck',
  character: '🚚',
  unicodeName: 'E0.6 delivery truck',
  codePoint: '1F69A',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e1-0-articulated-lorry',
  character: '🚛',
  unicodeName: 'E1.0 articulated lorry',
  codePoint: '1F69B',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e1-0-tractor',
  character: '🚜',
  unicodeName: 'E1.0 tractor',
  codePoint: '1F69C',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-7-racing-car',
  character: '🏎️',
  unicodeName: 'E0.7 racing car',
  codePoint: '1F3CE FE0F',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-7-motorcycle',
  character: '🏍️',
  unicodeName: 'E0.7 motorcycle',
  codePoint: '1F3CD FE0F',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e3-0-motor-scooter',
  character: '🛵',
  unicodeName: 'E3.0 motor scooter',
  codePoint: '1F6F5',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e12-0-manual-wheelchair',
  character: '🦽',
  unicodeName: 'E12.0 manual wheelchair',
  codePoint: '1F9BD',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e12-0-motorized-wheelchair',
  character: '🦼',
  unicodeName: 'E12.0 motorized wheelchair',
  codePoint: '1F9BC',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e12-0-auto-rickshaw',
  character: '🛺',
  unicodeName: 'E12.0 auto rickshaw',
  codePoint: '1F6FA',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-bicycle',
  character: '🚲',
  unicodeName: 'E0.6 bicycle',
  codePoint: '1F6B2',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e3-0-kick-scooter',
  character: '🛴',
  unicodeName: 'E3.0 kick scooter',
  codePoint: '1F6F4',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e11-0-skateboard',
  character: '🛹',
  unicodeName: 'E11.0 skateboard',
  codePoint: '1F6F9',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e13-0-roller-skate',
  character: '🛼',
  unicodeName: 'E13.0 roller skate',
  codePoint: '1F6FC',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-bus-stop',
  character: '🚏',
  unicodeName: 'E0.6 bus stop',
  codePoint: '1F68F',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-7-motorway',
  character: '🛣️',
  unicodeName: 'E0.7 motorway',
  codePoint: '1F6E3 FE0F',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-7-railway-track',
  character: '🛤️',
  unicodeName: 'E0.7 railway track',
  codePoint: '1F6E4 FE0F',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-7-oil-drum',
  character: '🛢️',
  unicodeName: 'E0.7 oil drum',
  codePoint: '1F6E2 FE0F',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-fuel-pump',
  character: '⛽',
  unicodeName: 'E0.6 fuel pump',
  codePoint: '26FD',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-police-car-light',
  character: '🚨',
  unicodeName: 'E0.6 police car light',
  codePoint: '1F6A8',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-horizontal-traffic-light',
  character: '🚥',
  unicodeName: 'E0.6 horizontal traffic light',
  codePoint: '1F6A5',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e1-0-vertical-traffic-light',
  character: '🚦',
  unicodeName: 'E1.0 vertical traffic light',
  codePoint: '1F6A6',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e3-0-stop-sign',
  character: '🛑',
  unicodeName: 'E3.0 stop sign',
  codePoint: '1F6D1',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-construction',
  character: '🚧',
  unicodeName: 'E0.6 construction',
  codePoint: '1F6A7',
  group: 'travel-places',
  subGroup: 'transport-ground'
}, {
  slug: 'e0-6-anchor',
  character: '⚓',
  unicodeName: 'E0.6 anchor',
  codePoint: '2693',
  group: 'travel-places',
  subGroup: 'transport-water'
}, {
  slug: 'e0-6-sailboat',
  character: '⛵',
  unicodeName: 'E0.6 sailboat',
  codePoint: '26F5',
  group: 'travel-places',
  subGroup: 'transport-water'
}, {
  slug: 'e3-0-canoe',
  character: '🛶',
  unicodeName: 'E3.0 canoe',
  codePoint: '1F6F6',
  group: 'travel-places',
  subGroup: 'transport-water'
}, {
  slug: 'e0-6-speedboat',
  character: '🚤',
  unicodeName: 'E0.6 speedboat',
  codePoint: '1F6A4',
  group: 'travel-places',
  subGroup: 'transport-water'
}, {
  slug: 'e0-7-passenger-ship',
  character: '🛳️',
  unicodeName: 'E0.7 passenger ship',
  codePoint: '1F6F3 FE0F',
  group: 'travel-places',
  subGroup: 'transport-water'
}, {
  slug: 'e0-7-ferry',
  character: '⛴️',
  unicodeName: 'E0.7 ferry',
  codePoint: '26F4 FE0F',
  group: 'travel-places',
  subGroup: 'transport-water'
}, {
  slug: 'e0-7-motor-boat',
  character: '🛥️',
  unicodeName: 'E0.7 motor boat',
  codePoint: '1F6E5 FE0F',
  group: 'travel-places',
  subGroup: 'transport-water'
}, {
  slug: 'e0-6-ship',
  character: '🚢',
  unicodeName: 'E0.6 ship',
  codePoint: '1F6A2',
  group: 'travel-places',
  subGroup: 'transport-water'
}, {
  slug: 'e0-6-airplane',
  character: '✈️',
  unicodeName: 'E0.6 airplane',
  codePoint: '2708 FE0F',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'e0-7-small-airplane',
  character: '🛩️',
  unicodeName: 'E0.7 small airplane',
  codePoint: '1F6E9 FE0F',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'e1-0-airplane-departure',
  character: '🛫',
  unicodeName: 'E1.0 airplane departure',
  codePoint: '1F6EB',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'e1-0-airplane-arrival',
  character: '🛬',
  unicodeName: 'E1.0 airplane arrival',
  codePoint: '1F6EC',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'e12-0-parachute',
  character: '🪂',
  unicodeName: 'E12.0 parachute',
  codePoint: '1FA82',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'e0-6-seat',
  character: '💺',
  unicodeName: 'E0.6 seat',
  codePoint: '1F4BA',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'e1-0-helicopter',
  character: '🚁',
  unicodeName: 'E1.0 helicopter',
  codePoint: '1F681',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'e1-0-suspension-railway',
  character: '🚟',
  unicodeName: 'E1.0 suspension railway',
  codePoint: '1F69F',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'e1-0-mountain-cableway',
  character: '🚠',
  unicodeName: 'E1.0 mountain cableway',
  codePoint: '1F6A0',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'e1-0-aerial-tramway',
  character: '🚡',
  unicodeName: 'E1.0 aerial tramway',
  codePoint: '1F6A1',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'e0-7-satellite',
  character: '🛰️',
  unicodeName: 'E0.7 satellite',
  codePoint: '1F6F0 FE0F',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'e0-6-rocket',
  character: '🚀',
  unicodeName: 'E0.6 rocket',
  codePoint: '1F680',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'e5-0-flying-saucer',
  character: '🛸',
  unicodeName: 'E5.0 flying saucer',
  codePoint: '1F6F8',
  group: 'travel-places',
  subGroup: 'transport-air'
}, {
  slug: 'e0-7-bellhop-bell',
  character: '🛎️',
  unicodeName: 'E0.7 bellhop bell',
  codePoint: '1F6CE FE0F',
  group: 'travel-places',
  subGroup: 'hotel'
}, {
  slug: 'e11-0-luggage',
  character: '🧳',
  unicodeName: 'E11.0 luggage',
  codePoint: '1F9F3',
  group: 'travel-places',
  subGroup: 'hotel'
}, {
  slug: 'e0-6-hourglass-done',
  character: '⌛',
  unicodeName: 'E0.6 hourglass done',
  codePoint: '231B',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'e0-6-hourglass-not-done',
  character: '⏳',
  unicodeName: 'E0.6 hourglass not done',
  codePoint: '23F3',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'e0-6-watch',
  character: '⌚',
  unicodeName: 'E0.6 watch',
  codePoint: '231A',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'e0-6-alarm-clock',
  character: '⏰',
  unicodeName: 'E0.6 alarm clock',
  codePoint: '23F0',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'e1-0-stopwatch',
  character: '⏱️',
  unicodeName: 'E1.0 stopwatch',
  codePoint: '23F1 FE0F',
  group: 'travel-places',
  subGroup: 'time'
}, {
  slug: 'e1-0-timer-clock',
  character: '⏲️',
  unicodeName: 'E1.0 timer clock',
  codePoint: '23F2 FE0F',
  group: 'travel-places',
  subGroup: 'time'
}];
exports.default = _default;
},{}],"src/js/script.js":[function(require,module,exports) {
var define;
"use strict";

var _data = _interopRequireDefault(require("../../data"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// API Data

/* require('dotenv').config();
const apiKey = process.env.API_KEY;

const fetchJSON = async () => {
	const response = await fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`);
	const json = await response.json();

	return json;
};

fetchJSON().then((json) => {
	console.log(json);
	const emojis = json.map((item) => item);

	renderEmojiList(emojis);
}); */

/**
 * Render Emoji List
 * @param {*} emojis
 */
var renderEmojiList = function renderEmojiList(emojis) {
  // console.log(emojis.slice(0, 10));
  var emojiListWrapper = document.querySelector('.emoji-list-wrapper');

  var emojiCategory = _toConsumableArray(new Set(emojis.map(function (item) {
    return item.group;
  })));

  var categoryBasedEmoji = emojiCategory.map(function (cat) {
    return _defineProperty({}, cat, _toConsumableArray(emojis.filter(function (item) {
      return item.group === cat;
    })));
  });
  var html = categoryBasedEmoji.map(function (item) {
    return [Object.keys(item).map(function (value) {
      return "<div class=\"emoji-list-category mb-4\">\n                            <h6 class=\"text-muted mb-3 fs-5\">".concat(value.replace(/-/g, ' '), "</h6>");
    }).join(''), Object.values(item).map(function (emoji) {
      return "<div class=\"emoji-list row row-cols-auto g-1\">".concat(emoji.map(function (n) {
        // console.log(n.character);
        return "<div class=\"col\"><span title=\"".concat(n.slug.replace(/-/g, ' '), "\" class=\"emoji d-inline-flex align-items-center justify-content-center\">").concat(n.character, "</span></div>");
      }).join(''), "</div></div>");
    }).join('')].join('');
  }).join('');
  emojiListWrapper.innerHTML = "".concat(html);
}; // Use local data


renderEmojiList(_data.default);
/**
 * Emoji as favicon
 */

window.addEventListener('DOMContentLoaded', function () {
  // console.log('DOM fully loaded and parsed');
  var linkForFavicon = document.querySelector("head > link[rel='icon']");

  var faviconTemplate = function faviconTemplate(string, icon) {
    return "\n          <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>\n            <text y=%22.9em%22 font-size=%2290%22>\n              ".concat(icon, "\n            </text>\n          </svg>\n        ").trim();
  };

  var buttons = document.querySelectorAll(".emoji-list span.emoji"); // console.log(buttons);

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      var newFavicon = faviconTemplate(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), button.innerText);
      console.log(newFavicon);
      linkForFavicon.setAttribute("href", "data:image/svg+xml,".concat(newFavicon));
      var copylinkTag = "<link rel=\"icon\" href=\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>".concat(button.innerText, "</text></svg>\" />");
      copyToClipboard(copylinkTag, e.target);
    });
  });
});
/**
 * Showing tooltip
 * @param {*} targetEl
 * @param {*} text
 */

var showToolTip = function showToolTip(targetEl) {
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Copied!';
  var toolTip = "<span class=\"tooltip-text tooltip-top\">".concat(text, "</span>");
  targetEl.insertAdjacentHTML('afterbegin', toolTip);
  setTimeout(function () {
    document.querySelector('.tooltip-text').remove();
  }, 500);
};
/**
 * copy to clipboard
 * @param {*} text
 */


var copyToClipboard = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(text, target) {
    var clipboardTxt;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!text) {
              _context.next = 9;
              break;
            }

            _context.next = 3;
            return navigator.clipboard.writeText(text);

          case 3:
            _context.next = 5;
            return navigator.clipboard.readText();

          case 5:
            clipboardTxt = _context.sent;
            console.log(clipboardTxt);
            console.log(target);
            showToolTip(target, 'Copied');

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function copyToClipboard(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Scroll To Top
 */


var scrollToTop = function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
};

document.querySelector('.scroll-to-top-btn').onclick = scrollToTop;
/**
 * Copyright Year
 */

document.querySelector('.copy-right-year').innerText = new Date().getFullYear();
},{"../../data":"data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64818" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/script.js"], null)
//# sourceMappingURL=/script.04c05cf5.js.map