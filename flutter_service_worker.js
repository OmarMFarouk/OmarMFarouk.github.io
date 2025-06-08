'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fa787a6a6e6f9a6cfe4c206e604194d9",
"assets/AssetManifest.bin.json": "74cb995f11d80df048af2a7f4cbbe760",
"assets/AssetManifest.json": "360612f2effa9b037fb2466616405f6a",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/ChatGPT%2520Image%2520Jun%25207,%25202025,%252004_27_43%2520AM.png": "ea039c111cbde288b3829f3392416a0f",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/php.png": "94242182bd0c201484a8e9d8e8f55d25",
"assets/assets/icons/sql.png": "7780db8b6281192e789a90e017e5bcdc",
"assets/assets/icons/telegram.svg": "8e40fba59ac9a2b3d90a8f940f3771bd",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/images/image.png": "a1e425f5f41521e3abbb576c48938b8a",
"assets/assets/images/logo.png": "54ccd0ade926795f18cd121cfe2e32c6",
"assets/assets/images/profile.png": "cdde97f0e2548debe8cc557ed3005ebc",
"assets/assets/projects/furqan/1.png": "2357c7969bb50803019868e32a8c8af0",
"assets/assets/projects/furqan/2.png": "b4345ad537387a7c9760724a91818d95",
"assets/assets/projects/furqan/3.png": "ab01ed755e04346f13f670e7973f354a",
"assets/assets/projects/furqan/4.png": "e87be4054602f527d78ca2172100c13b",
"assets/assets/projects/furqan/5.png": "f58a2b72ff63b535f3993bbd825898d1",
"assets/assets/projects/gym/1.png": "d7c5760ff8695697524ac96545393ea7",
"assets/assets/projects/gym/2.png": "e6a6b2ceba235c0dda3bb71436fdd80d",
"assets/assets/projects/gym/3.png": "aade94012b359bd05e197bc5100139a1",
"assets/assets/projects/komicash/1.png": "34db818948777657228f50965bc8616f",
"assets/assets/projects/komicash/2.jpg": "b78340ca21606530104544b02ba7fa60",
"assets/assets/projects/komicash/3.jpg": "7c54aa59f02ab506a5df0bc5d8876fda",
"assets/assets/projects/komicash/4.jpg": "3b8aa852f8c3e25549c92ac85ebe65ed",
"assets/assets/projects/komicash/5.jpg": "07d1fba6531273072d108b33c65b84fb",
"assets/assets/projects/mohadraty/1.jpeg": "3ca854126ee42dc797f828f5bd997778",
"assets/assets/projects/mohadraty/2.jpeg": "03aa8a26ef69865646c826ce992422ff",
"assets/assets/projects/mohadraty/3.jpeg": "39c9df9ea773a41b2de449a92f190c8c",
"assets/assets/projects/store/1.jpg": "a2984b4873847fb77f3d014163c12395",
"assets/assets/projects/store/2.jpg": "2c9bc6811caa813be5168a50817503e8",
"assets/assets/projects/store/3.jpg": "b41075440cd971c02e804cc7aee90a70",
"assets/assets/projects/store/4.jpg": "83558adb992906818b1127beb4dac5d7",
"assets/assets/projects/store/5.jpg": "ea8cd17836751b000f3674e40bfcc339",
"assets/assets/projects/store/6.jpg": "61f481349c9dab058a32512ff24a3408",
"assets/assets/projects/yofarmhub/1.jpg": "1d898bd7a82a199559818db53c42f461",
"assets/assets/projects/yofarmhub/2.jpg": "7ac6d04e028d05b376068ab432803ceb",
"assets/assets/projects/yofarmhub/3.jpg": "dc085e84853929aabe190fe2365c0e5e",
"assets/assets/projects/yofarmhub/4.jpg": "2422c8fe5c71dc666f3cb4ddcc1057f9",
"assets/assets/projects/yofarmhub/5.jpg": "ae352c17a33b6e6b318a1a3109ee692f",
"assets/assets/projects/yofarmhub/6.jpg": "a6e1244f918eaf2a29fc78a77d7af379",
"assets/assets/projects/yofarmhub/7.jpg": "d6a98eabda1edea0009733254289dee9",
"assets/assets/projects/yofarmhub/8.jpg": "dfc21193b1d6f4b4b01ae4b632f3c9dd",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0a92fd037de6f1add68b5cf1d8998284",
"assets/NOTICES": "5abee88915feb996799868a0de874a0c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a18d15b9cf93e44f98ad7354f6bfa3e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00a0d5a58ed34a52b40eb372392a8b98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "32a15f7713f52ace70814eec9f775ec2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"data/certificates/ees_mobile_networks.pdf": "c554e04838f5da7ab49e713be36e941e",
"data/certificates/ees_mobile_networks.png": "e8a98391c06939c4f2bcc5523e180c9f",
"data/certificates/engovation_mobile_networks.pdf": "8f2174293c3fb197df2efbc1730fe0d9",
"data/certificates/engovation_mobile_networks.png": "c528ba507c517b06aa7e1013e8c05f8e",
"data/certificates/icg_ccna.pdf": "a7c3e47f8b0b64b53c6fe360453e2199",
"data/certificates/mec_flutter.png": "7f83adc588baa9669ba08149dfd7f98f",
"data/certificates/mec_flutter_deploma.pdf": "4c34ae52b35af790e47a2607eee7b06b",
"data/certificates/udemy_flutter.jpg": "0fab4f4e447a4c71bcb58fb9aa06c3d7",
"data/certificates/udemy_flutter.pdf": "09f55dd751dc3758c9ece8957b90d8cc",
"data/certificates/udemy_flutter_advanced.jpg": "69cc4201578a824c04a682c02664f4bc",
"data/certificates/udemy_flutter_advanced.pdf": "1d3025af86ec8a5c8bb60c3b67c2af0a",
"data/CV.pdf": "ec348b77fda57c6f978ebf6897941a73",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "7dc7558928332a611d81c02fbdb700d0",
"icons/apple-touch-icon.png": "d3efc637e1af65788dd581149764d3a1",
"icons/favicon-96x96.png": "edca43692d4bb1be1fc2abfd9c87ee64",
"icons/favicon.ico": "3161cba55f7f60f4f657c21c8c3a5e72",
"icons/favicon.svg": "1f32bf31baac094704ef9418c64690fa",
"icons/loading.gif": "1c587c6a66f493bb97df40fc6a01bfdc",
"icons/web-app-manifest-192x192.png": "d9d2aff4413d69faa10489a24b7af34f",
"icons/web-app-manifest-512x512.png": "4ae6864fad735e42cf01ed88b41f802b",
"index.html": "8c89063e6ef49744e8667f8c8ae75e99",
"/": "8c89063e6ef49744e8667f8c8ae75e99",
"main.dart.js": "99d6a6e6a507d51ce08101265172929d",
"manifest.json": "d24e5e5235e557b66e7eac5be82298c2",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
