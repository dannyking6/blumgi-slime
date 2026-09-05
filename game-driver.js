// game-driver.js
// Loaded FIRST: before any game script.
// Idempotent: safe to load multiple times.
(function () {
  'use strict';
  if (typeof window === 'undefined') return;
  if (window.PokiSDK && window.PokiSDK.__neutralDriver) return;

  var resolveTrue = function () { return Promise.resolve(true); };
  var resolveFalse = function () { return Promise.resolve(false); };

  // PokiSDK surface (all methods no-op safely, promises always resolve)
  var driver = {
    __neutralDriver: true,
    init: function () { return Promise.resolve(); },
    setDebug: function () {},
    setLogCloudflare: function () {},
    debug: function (b) { this.setDebug(b); },
    gameLoadingStart: function () {},
    gameLoadingProgress: function () {},
    gameLoadingFinished: function () {},
    gameplayStart: function () {},
    gameplayStop: function () {},
    commercialBreak: function () { return Promise.resolve(); },
    rewardedBreak: function () { return Promise.resolve(false); }, // no ad watched -> no reward, but game keeps running
    happyTime: function () {},
    customEvent: function () {},
    logEvent: function () {},
    shareableURL: function () { return Promise.resolve({ url: location.href }); },
    sendClientEvent: function () {},
  };

  // Some builds probe these flags
  window.PokiHasInitialised = true;
  window.PokiSDK = driver;
  if (!window.PokiSDK_InitOK) window.PokiSDK_InitOK = true;

  // Global safety net: never let a stray SDK promise rejection freeze gameplay
  window.addEventListener('unhandledrejection', function (e) {
    if (e && e.reason && /poki/i.test(String(e.reason && e.reason.message || e.reason))) e.preventDefault();
  });

  console.log('[GameDriver] neutral PokiSDK active (offline build)');
})();
