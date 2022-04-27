'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6dff4fec03db821b3ed1568811576d37",
"index.html": "035b08423e09f590700ed7376f793c54",
"/": "035b08423e09f590700ed7376f793c54",
"main.dart.js": "f10ac4e28bf59d575737ffbb1f5b4c39",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fb34bb195b5f79eec70c97a5f7f1d686",
".git/ORIG_HEAD": "1fb7350c49fbf1f5b2779e1c2b5ebf4b",
".git/config": "128a6c5a95b7ce11ef14a63d681fd894",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/578b3f6ad699d8b1990a1e8abdea8cddb9d5da": "d0004aed958b09807c94629e06430332",
".git/objects/66/7640bc21a03a42815b5279ed0c711279fbb634": "277705f6d9e8b4336e19396eeedb24b2",
".git/objects/03/1c427220eb267a5a8f8aa68bd971a644fafcba": "7d6ca1203b63e95c90a7bee6104fc1ec",
".git/objects/69/d1ae0d0699279a71d07782cf6fc32374393652": "c252b32ed6eba9300698c2c54da0c622",
".git/objects/3c/11468ceb80f3f44e63e98d069dcc8e393645fc": "959c76dc926b7b69e9da64865916bb97",
".git/objects/67/58344e10d843b41f2306f4a4bdf4675a4c67aa": "bf1905ec41c0952a713476c3645fe430",
".git/objects/0b/9a6a78c832d626f84837ea1a0ed1868d30dcc7": "a9f496a22f8fff51e2bffffa487edfd7",
".git/objects/93/e529acf5c770270c02fe95de533945d76edf72": "a44880eabfc9e1ae0389d8e1777ee745",
".git/objects/94/b63856758fc2b7b3da933d3508827dab90eb64": "2054ecc3523fcf907ce39dfe18415e97",
".git/objects/0e/d41579ccb9c34546aeb1afbea555c2e385ac6a": "53766a5c2b3681ee7653332fffcb7cf0",
".git/objects/60/f551dcf4e61e94fd36f294a5fb668a6528f45c": "932f0c00a2087a30f45145ca88d21d21",
".git/objects/9d/47556e2ece599efeb2216ba9cb426f51bc4eeb": "b6549fb9477090dfc092039e5ce6d1de",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/b2/b91cc2db7627246e09915b7f943204e00601d4": "681dd37527c8435f7ff8107bee96d132",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/d9/2957402a06794a43ca8454b5f97b1faeae8185": "2d80f81a19f204ebe0c3faea7dc4357a",
".git/objects/ad/9fc4bbdc2dd3896283225f2231d682c8e90815": "f9310cd1f4474c4c64621c985bdf8b51",
".git/objects/be/b890e07d7464dd5ab368faeac99010ab55b04f": "94da773bc938cdfb9f9d52c9436bd501",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/da/36d62566180f7b4946fb98c2583d0e0003212b": "a8dcfa0918a968dcfb23891b45474497",
".git/objects/d6/bfc82443ca83e2f4e017fa4a1ebfa20ebd8b2f": "b3b342f695264dd4955157c7c2a2bb02",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/9736c1f8cc401a772b2e4beee7c6dcb5c4a7b2": "b5d2ef906880da4d28de9e1842192dfa",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/2359e792a12da03d91ec7c392dc6a8ebccf496": "cd3380efc2c638a98f47e77127df344a",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/5eba17f1ee18efe88d6691490962475cc834c8": "45393ed23da0f3d4b6d6acb08a2055f9",
".git/objects/e2/790d7a156e5224158e6f09a8ad56681140784b": "26eee1198346b20d081c717a030df159",
".git/objects/f3/8235ad1d43deee61f9e28702b509c170f4accf": "888e85a305427a99d414ecffd34e15c8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e4c2e614ee26d62e149533e9f86325b412041c": "a60ba513f9c163d85ef6a6159d8e69a8",
".git/objects/fd/f8a4ae032a12f6396e091cf453ab609459efab": "6c0fd35449ed234fdf7b238a4aef4480",
".git/objects/fe/4cc7addd65597b6df67d746d27ccec9614a4ca": "3264ef807abfdcfa6ece45de6585295d",
".git/objects/ec/e327e6150827c25bd834a49251a168d5e3f4e2": "1ffd793114d2afad33e70e68e35a1e49",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/b0db6d948f57873ba6fd499d1c84fc2ea183a3": "5ef649fa0eca0ab80f86c4a5dfcda248",
".git/objects/18/a0ae6f3bb580ada4b420b41528cdfa82d9c265": "22197ab27b14a8a625cf974de465cac1",
".git/objects/18/e03496664e75e150450564800b8e1ee065ec8d": "a8ec9a76ea395f759c1b155d66bd6118",
".git/objects/29/e699e431099b0c6cf9deac4052f2e8870ddca9": "30761a1467b6d8038cd1a54d87411adf",
".git/objects/7c/1c499dfba61237e9435ac7095f54a75fe93f10": "6af90982bd3db03af23592c76ed257f9",
".git/objects/16/13259fc4168d7a2ead5867ba299a4fcc4a5253": "ce74bb4a33bf86700d685f600ae683d0",
".git/objects/1f/ff58e8edd3b515910ba6093e38eef94b62f34a": "bf9cb1fe6acc51b951581bdb79386dc0",
".git/objects/87/f583c55b32de6017177451927e00973933bab0": "c6edb04b490133794cf8a188ee15c4a7",
".git/objects/28/c548ee97d731ce05080e36879ce93d6ebd5109": "e7bcf72ae0c0d769aef7bacb009248af",
".git/objects/8f/365f80ce5fdee126d76e26cca28970755380c0": "eb79d3c174f4d981e894b84f5a7910dd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/30f4dcbff7e4d12ce4c6dc426b97b5a3ca8f55": "7e3537554c3f9a7d5d529cab0ee23667",
".git/objects/81/fb606cce890e76b1813dca0e310fa8eb6b676d": "98bc5a7c4a1d90c407a9f1ff308f009f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/fb797aafe45defd278b099700f07217c6f7646": "4489c98e2d4ec0b180838fc93fd5cc27",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/5c/e8ea21b6c618b844293cbfb81f3d5136c658b0": "a67732ad114e3f1caec2e35d4b0456aa",
".git/objects/98/2e7a599fb7103ccfb7524192e5ce3a00900975": "9dde256d73598f8c5fac64ac3e215ac0",
".git/objects/53/8870a257eebc6b74a87d7213c2fe54c7462480": "9b67dec4ccabc3759265cacd8c28b5c0",
".git/objects/5e/1012afd135167e61e2a85bc2bf839eb8295bc3": "da36e19096a8159ab297a2912f6acb1a",
".git/objects/08/26c6e45e5aed241ed199b5a2478f52f4ed3958": "4a91462903f19c91d43543ce2c30307c",
".git/objects/01/e926b30ce6374919b9f55106922db452cc810b": "a52acd066ad401fc016bb39b13ad10eb",
".git/objects/01/8464aa67adaaa087673fd4ad4f7b00a4481fc7": "cb12272610370bed3ba0d1c28f08e7d8",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/63/faf68b32426ddfc07458bcdb630f93973c53f1": "516aa48fddd276a46c5d60335ce52fd9",
".git/objects/64/32ffedbe7556c6316bf8b841dfb973e25c3259": "1819dfde6b6ed1a5cf35b93736c21942",
".git/objects/d3/1f5d89e22bb412a25f9a91eca513077bf4330e": "328b0a4d00c98c398cdab2d10e4b7a86",
".git/objects/d3/89644a6b413ce247ec89b2697fd37eeb0ed0e2": "68740b130b2700f4f805555c2faf31bb",
".git/objects/b8/987a3674022e2bac87ad8608746d7e02b1905b": "869e20b8fddefba6c701e2db0d122647",
".git/objects/d2/f4f9a06903b2299f6fc9f0eebc54972908b5de": "8f7e7f48ca7f9e63979c239811277589",
".git/objects/d2/d6610142e5c4a1db5ff028ee5d49da27350a80": "366e2f71613a72616e777f9bd82acb95",
".git/objects/aa/b35f8d3d2b820552180e806a1cbab76590115d": "1f0544c36e9389efb7164600255bd0f1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/e27a8bd282a1b48b40194ed9b48555c97a8007": "5f4a41e041068d848757c723649fbf76",
".git/objects/a8/bc25959b38b4922283b11b8c068b4a686c722b": "b9c332d2de55336067b94e50a04536bf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/539968a17fc6d908443ba774cfc48ae3f0707f": "a8a8d0c5ed2a0039114a724dc7f3062b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/ea/ae3dbb658a50cdb3d4c9738ba2d3fcf5cd7fd5": "6c8ca446f43f378d1e86fa000444f41c",
".git/objects/f0/0c6d989f9371fd106b2a589714a8628606abc4": "99d8f6c0dfa4067ca51c34d94d768c32",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/ea5d4785f099bd5783562cb69674dce3815fa2": "f51632bbf3cda822486def25e5cfdc92",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/52c78ae34ca3163eb9384a4ce0953006cd7efa": "9bc1666ca97c6c74f55fb4a26983add4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/83/344cf8d29870bafd852b9f2c75afa1954bd2b9": "aad92ecd2165206bb6916d82d5d4f710",
".git/objects/1e/0b61d0e0a9f809a91ee91f8fe160adc3cdff19": "1df3aa10005189d90989631170581855",
".git/objects/1e/8e358f7cc8cb645e26172cd3f16ad1bc828be7": "d93a8d82c1cb272204b56b06554669c3",
".git/objects/84/eb74e63df96994a96a0d1f86e058ecd9026835": "aa2e6acc4c24131f584725a898ce55fa",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/71/7be98a54c2ae690ff8dec5ed02caa17e0dd60f": "b581cbaee3bf00b5c04d312e6bba4630",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/13/db2994a486927dc41ade843834acb63cbdb3b6": "daf7252b0808869c1a7718ce6b977ade",
".git/objects/8e/8c6989cfc068589ca187ecbb190484277bd3f4": "ee1745c202a52795fed78acc7078a254",
".git/objects/22/c6c595d9ad989ffa707c634caef927ddb49324": "533ce2dbbe1c3e8b19fcf6bf4adf1e3f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fece4cb27937ccc90ff2ec40564ae33a",
".git/logs/refs/heads/main": "f5846b3f4892ae2a38bbe7ced136a4ca",
".git/logs/refs/remotes/origin/main": "6d907531345d02dd922331ffcdde8345",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "dc58a5d8ec61ff4d1ec86613a3671a35",
".git/refs/remotes/origin/main": "dc58a5d8ec61ff4d1ec86613a3671a35",
".git/index": "ba03441c39126e37e4c1286b6380a98c",
".git/COMMIT_EDITMSG": "375d65660f8fb02e55213848c5f0f48f",
".git/FETCH_HEAD": "37ab4ec49fb02f188b126f21d058dd1a",
"assets/AssetManifest.json": "dfb2755d2294666256b48110dde57399",
"assets/NOTICES": "844b37c960697020df91b4d5294ccdcd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/back.jpeg": "caf9ee5b3f1fc874fba83bf085ef31bb",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/IMG_7344.jpg": "bb74c3d7c6f5599d40c05a866b31ffd6",
"assets/assets/images/f.gif": "d47e58c71a6e6573f1e35fcb2beeee2a",
"assets/assets/images/profile.jpeg": "51f5ef8038453e113e41446abd444ca6",
"assets/assets/images/profile2.jpeg": "fa2bb86dd04b14f2acdbe20ac8b9d906",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
