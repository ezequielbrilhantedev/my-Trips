if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,r,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/44LkkznqrqyYWvXByT4Dp/_buildManifest.js",revision:"44LkkznqrqyYWvXByT4Dp"},{url:"/_next/static/44LkkznqrqyYWvXByT4Dp/_ssgManifest.js",revision:"44LkkznqrqyYWvXByT4Dp"},{url:"/_next/static/chunks/0b7b90cd.29e69a5732431035a8f0.js",revision:"44LkkznqrqyYWvXByT4Dp"},{url:"/_next/static/chunks/13.0bbb4386e2a566946507.js",revision:"44LkkznqrqyYWvXByT4Dp"},{url:"/_next/static/chunks/612a5669ed7988766ff3084011b359dc5de30d6c.3606009b8f22843371a9.js",revision:"44LkkznqrqyYWvXByT4Dp"},{url:"/_next/static/chunks/bb9a4470b984507ac537ac1324ab5e51b615490f.a79bd759dd81f3d16e2c.js",revision:"44LkkznqrqyYWvXByT4Dp"},{url:"/_next/static/chunks/commons.78a41e26045f1ba08bcd.js",revision:"44LkkznqrqyYWvXByT4Dp"},{url:"/_next/static/chunks/framework.ce4a96022bc463719e4f.js",revision:"44LkkznqrqyYWvXByT4Dp"},{url:"/_next/static/chunks/main-bb61dfece041ffadea92.js",revision:"44LkkznqrqyYWvXByT4Dp"},{url:"/_next/static/chunks/pages/%5Bslug%5D-b3ecfa755404e1b87908.js",revision:"44LkkznqrqyYWvXByT4Dp"},{url:"/_next/static/chunks/pages/_app-de91a9fc7f2a05297a10.js",revision:"44LkkznqrqyYWvXByT4Dp"},{url:"/_next/static/chunks/pages/_error-dda845205db641d37c60.js",revision:"44LkkznqrqyYWvXByT4Dp"},{url:"/_next/static/chunks/pages/index-254d1cb10c749f37dd24.js",revision:"44LkkznqrqyYWvXByT4Dp"},{url:"/_next/static/chunks/pages/place/%5Bslug%5D-47d20d645a2d1657aaaa.js",revision:"44LkkznqrqyYWvXByT4Dp"},{url:"/_next/static/chunks/polyfills-6f7c72e370684550d611.js",revision:"44LkkznqrqyYWvXByT4Dp"},{url:"/_next/static/chunks/webpack-57b3f298e2f1dc1099d5.js",revision:"44LkkznqrqyYWvXByT4Dp"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/img/cover.png",revision:"17df08c555cc4a51f8c5882d3767d31e"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo-gh.svg",revision:"e3a0c31390db72fd374570f4a57c56b0"},{url:"/img/logo.svg",revision:"202525302ad30aca5b2b790d4b0b5796"},{url:"/manifest.json",revision:"2f5d4034ed82f37efb8830ee113dc4b8"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
