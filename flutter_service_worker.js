'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c6978c45dd09cb0b4ea879bb5a26320a",
".git/config": "04212e505493b918eb5a90f2332859f0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "f121c26a4d05a3ec9c6e8919a0c971f7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "be7d42658d040675ba05f2f1e9331cfe",
".git/logs/refs/heads/main": "b4ac8ff53c4c56e9146bac478b201d4d",
".git/logs/refs/remotes/origin/main": "b279bfa42012e64473cc67086aefb7af",
".git/objects/0d/0e51ff97d37d34d358c64161b236b4299da8ab": "e42a2873cc877933a01631604dcc1981",
".git/objects/1a/db2f5a2245aa90869aa36016a33f21b97c8aeb": "99aa82f2a0955a6fad38bec882d55d7f",
".git/objects/1b/0c38bf814d51f4af7a914d94d9862fe313c3e6": "b2a3346985ffc0c6a739e027374ff78a",
".git/objects/1b/f90915b6bde1f5d6351abd8fe68bdccbe3b037": "fe5bbc3fa374f0a8047decafae998702",
".git/objects/1c/7a43d982620bd03a94457ff5954e1a666daa8f": "b8b9329c4b581b0eaae9c32ddaea379f",
".git/objects/1c/927a4f2f4ed48d50493ff0dd74f1cfdb6e44df": "4d4add3f0f2fd43f9a35096dc7329507",
".git/objects/1d/5663fef39ed0f72351de2f4028794eb180d79f": "2114fb04ff7767ea26585de34d1b2da3",
".git/objects/20/4b5ae217423a8d8e192923bc4a87aa5b552b1d": "c131b058253976cfe0924dd886bb42c8",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/39/5c8b59a976ea09aaf4fcd131ec49235a0636e7": "a347cd7307c4a11888fa81efcef21c41",
".git/objects/3e/2020b4e8cae899bb7ca0c228bf880c621c500e": "ce4a3972d2a3c1b3e7b9a00009d21451",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/a2776982e33b7d895112374b931fdc9b3eb0ce": "40e539a8494dbca445313403604c9d99",
".git/objects/69/502a8f3738159eafba65229a665a876be12deb": "a4729685b884aa2111b78191c51dceab",
".git/objects/73/e04c2edb3572f0b3e6eaa0b186468ffcae8cba": "08e359823674c74eadbec3760464d764",
".git/objects/76/106168cb90527144aa7fd55c065a3d1c199742": "1aff906dc93cf57a5df2c108c1e10b74",
".git/objects/76/37f1a47a6e3bc4b119481afcfc22ea6ae482a1": "2f49430f5197ea2bbd712112842cdc25",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/24431e7a9ff70f259e020ef7cd131d8c9f0c60": "f96c9e093783907b85539b89b188d04c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/dd7eb95d2f25574c9263dbab53ada0f9b68887": "91f87b710fa48aad69452dc82fa5418d",
".git/objects/8e/3bc09eb6a71d9458c3b32f84676e1a13ee8e91": "9b9b7ae7b32bb3b819b5a2d839fd21f1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/ca29e882e63f0133ba7af162f1dfaf6b92351a": "c6654367ba5e1fae70e9013d7433f2d0",
".git/objects/da/53951111cff77ce08045128cbba3b4ff012f90": "837be54978afd0ab9548f49bd148ce07",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/refs/heads/main": "ed1b7ba6af55f9b6a53a54397c78c94e",
".git/refs/remotes/origin/main": "ed1b7ba6af55f9b6a53a54397c78c94e",
"assets/AssetManifest.json": "f4af2679d2b78b0b62ef01e839b66af1",
"assets/assets/icons/apps.png": "dea330f48495dfbd8ca8dda870e3f5dd",
"assets/assets/icons/nine-circles.png": "3105eae08029ddeffa2340f0377d66cc",
"assets/assets/icons/profile.png": "055a91979264664a1ee12b9453610d82",
"assets/assets/icons/speech.png": "98a94401eaf7463d74c81f571c61cfaf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3e893f7e992debc015a1b9ef737bf808",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4035a9393ad6ed909089ae9628324c3e",
"/": "4035a9393ad6ed909089ae9628324c3e",
"main.dart.js": "e8f429105929bfaca2876e6f79970ca2",
"manifest.json": "45d725ad1bf5bda491c68b50cc98d842",
"version.json": "fe9ca1a5e3948d27da1b9036a7b43567"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
