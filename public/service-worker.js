"use strict";var precacheConfig=[["/index.html","289e77c8b91643a61fb4b88d7d750604"],["/static/css/main.653da357.css","521def3ae35e5b12d25e0300c45174f2"],["/static/js/main.fd433085.js","7b98afa52545453144f388dd029daaef"],["/static/media/doNotExist.9e59a30d.png","9e59a30d6410116c990890ea6deae3c1"],["/static/media/header1.78cb59d1.png","78cb59d11b84fe90db7eb9ffedb497ef"],["/static/media/header10.b79b3f8f.png","b79b3f8f9da0318c7070168c46baeaf1"],["/static/media/header11.552142bc.png","552142bca7b6edc64bf68a5f14ad51c1"],["/static/media/header12.af804cef.png","af804cef3be7a83433eb106f878b2d6c"],["/static/media/header13.af804cef.png","af804cef3be7a83433eb106f878b2d6c"],["/static/media/header14.b682bfea.png","b682bfea29d830bbb929d1d3d1ad5e60"],["/static/media/header15.7c3e682a.png","7c3e682aa148baa21407eba90d3b7e92"],["/static/media/header16.7f208e99.png","7f208e99723b365f71d973171157ebfb"],["/static/media/header17.13c0d974.png","13c0d9747a0faf2071f3161565177e37"],["/static/media/header18.633025df.png","633025df40335b1d9df4708150d6553d"],["/static/media/header19.70c4aceb.png","70c4acebd7d9bcff117f4dde6c9455e7"],["/static/media/header2.bd64b635.png","bd64b63584de3ae6e65170920403e09e"],["/static/media/header20.98edbb0f.png","98edbb0fe27d935fd02778eb585cc5c4"],["/static/media/header3.11e7d91e.png","11e7d91e55485368965722f167e7c9c7"],["/static/media/header4.11e7d91e.png","11e7d91e55485368965722f167e7c9c7"],["/static/media/header5.4b238878.png","4b238878dccacf9c91cab890b818714b"],["/static/media/header6.5bf2df9f.png","5bf2df9f3135dd32cc22d56ad4bc1895"],["/static/media/header7.9a5121b2.png","9a5121b22c6375efddfcf4c331aefc05"],["/static/media/header8.0d49002b.png","0d49002b12a74961185168f584ac4c58"],["/static/media/header9.0d49002b.png","0d49002b12a74961185168f584ac4c58"],["/static/media/logo.fe51f032.png","fe51f032a74618d14746f976012d3fa8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});