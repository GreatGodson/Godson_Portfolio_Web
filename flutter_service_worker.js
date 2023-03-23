'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6dff4fec03db821b3ed1568811576d37",
"splash/img/light-background.png": "49bd39b72456a7c715b1268bb8b97801",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "d427ebd72d2bad5b78875c0824c1b0e6",
"index.html": "951e05abfd90a2c2e4f29472a6e71bc6",
"/": "951e05abfd90a2c2e4f29472a6e71bc6",
"main.dart.js": "ca9d32b9fd5298f7120e6e8b13a24572",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
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
".git/objects/92/6a2d124417a64929a293212076d5c7e90fa076": "b7291b381579837683f140dcdc96ff94",
".git/objects/66/7640bc21a03a42815b5279ed0c711279fbb634": "277705f6d9e8b4336e19396eeedb24b2",
".git/objects/66/58c753756af725390598326e56d089952508cb": "52b22cfe23669cff903176a97f674836",
".git/objects/3e/5e2fdc4c90b886018d881f545cbc0629d5a14b": "c2598f88c2eb3ba889869645d5ce8cf2",
".git/objects/03/1c427220eb267a5a8f8aa68bd971a644fafcba": "7d6ca1203b63e95c90a7bee6104fc1ec",
".git/objects/9b/3a35e50bba91e51b6a34b5dbca4b3c1f67ac0f": "91bfd38ce4d8ff17958f12f8a862eb50",
".git/objects/9b/d9ac9ee37a7bd31607e225b200ca6856bea591": "853c48702a2aea2c4af8f35c641853d3",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/69/d1ae0d0699279a71d07782cf6fc32374393652": "c252b32ed6eba9300698c2c54da0c622",
".git/objects/3c/11468ceb80f3f44e63e98d069dcc8e393645fc": "959c76dc926b7b69e9da64865916bb97",
".git/objects/67/58344e10d843b41f2306f4a4bdf4675a4c67aa": "bf1905ec41c0952a713476c3645fe430",
".git/objects/0b/9a6a78c832d626f84837ea1a0ed1868d30dcc7": "a9f496a22f8fff51e2bffffa487edfd7",
".git/objects/93/e529acf5c770270c02fe95de533945d76edf72": "a44880eabfc9e1ae0389d8e1777ee745",
".git/objects/94/b63856758fc2b7b3da933d3508827dab90eb64": "2054ecc3523fcf907ce39dfe18415e97",
".git/objects/0e/d41579ccb9c34546aeb1afbea555c2e385ac6a": "53766a5c2b3681ee7653332fffcb7cf0",
".git/objects/60/f551dcf4e61e94fd36f294a5fb668a6528f45c": "932f0c00a2087a30f45145ca88d21d21",
".git/objects/5f/9feb274d4e1f965fa65bace250569574cb5935": "6f81c207f5319146cf9e8ff753f4df37",
".git/objects/9d/47556e2ece599efeb2216ba9cb426f51bc4eeb": "b6549fb9477090dfc092039e5ce6d1de",
".git/objects/9d/2d826a06ad32ad7f89aefc33fa4a901cf2d72f": "bdc410a314ecac1a29a82f05316b8ea0",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/b2/b91cc2db7627246e09915b7f943204e00601d4": "681dd37527c8435f7ff8107bee96d132",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/d9/2957402a06794a43ca8454b5f97b1faeae8185": "2d80f81a19f204ebe0c3faea7dc4357a",
".git/objects/d9/0506ccd21a5ce39be7470a07f88b41c0176959": "04a1176cb302303bcbf07c2ded939e8c",
".git/objects/ad/9fc4bbdc2dd3896283225f2231d682c8e90815": "f9310cd1f4474c4c64621c985bdf8b51",
".git/objects/be/730ab12d2908d5528c03572aa475438df9f366": "c484a361ffd9ad86efbe97f76d730d30",
".git/objects/be/b890e07d7464dd5ab368faeac99010ab55b04f": "94da773bc938cdfb9f9d52c9436bd501",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/da/36d62566180f7b4946fb98c2583d0e0003212b": "a8dcfa0918a968dcfb23891b45474497",
".git/objects/d6/bfc82443ca83e2f4e017fa4a1ebfa20ebd8b2f": "b3b342f695264dd4955157c7c2a2bb02",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/9736c1f8cc401a772b2e4beee7c6dcb5c4a7b2": "b5d2ef906880da4d28de9e1842192dfa",
".git/objects/d8/3129f8cd14bf9ec7e6bbb5d6618d1a994a37f5": "e9430ba79d0367a3ec9d23bcec90bb30",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/2359e792a12da03d91ec7c392dc6a8ebccf496": "cd3380efc2c638a98f47e77127df344a",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/e5/6adfc65114e95d460398f3444a35c8ee4673b8": "0cd8000edad2d656355082301321129d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/5eba17f1ee18efe88d6691490962475cc834c8": "45393ed23da0f3d4b6d6acb08a2055f9",
".git/objects/e2/790d7a156e5224158e6f09a8ad56681140784b": "26eee1198346b20d081c717a030df159",
".git/objects/f3/8235ad1d43deee61f9e28702b509c170f4accf": "888e85a305427a99d414ecffd34e15c8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/41c3d4f2a771a6704f106b0da28cdde84c4f99": "cc4873d5dce149f59d38f4fc3609088d",
".git/objects/eb/e4c2e614ee26d62e149533e9f86325b412041c": "a60ba513f9c163d85ef6a6159d8e69a8",
".git/objects/c7/80970024ee8714fc118497f4ef641bac2770f5": "c07a606521a981482cd318fa321cfbc7",
".git/objects/ee/8a41f1855727222a2bf361399705992b80ac49": "ccd3706de62d3f3ccad294a4f577be82",
".git/objects/ee/5e7414098528888cf926c37d4ee907d8a05652": "9b7b9669bf67389ff45400df7d77db67",
".git/objects/fd/f8a4ae032a12f6396e091cf453ab609459efab": "6c0fd35449ed234fdf7b238a4aef4480",
".git/objects/e3/f754eaab797854c8170399087c38a8f8a7cff2": "d39cb22e0bfa56d13d889647f3a52952",
".git/objects/cf/4a53c6e68c8912eeb482c744f8dd3e121d9788": "797c63947876761bb3ef69dd0e1473f1",
".git/objects/fe/4cc7addd65597b6df67d746d27ccec9614a4ca": "3264ef807abfdcfa6ece45de6585295d",
".git/objects/fb/605ff596f39bb16e426dcb950dcbdc03262475": "6c5ffb41bffa08443da9c22401a1edb1",
".git/objects/ed/f74feafe78a2e7b47bb536c6af27c1a3d2126b": "b108d127971af73a2a2e9820ab4742c6",
".git/objects/c6/588e64ba57d829cdd2aaec6b90e3eb518a5a15": "8640eaf17c17cf7d6ddc546632eff500",
".git/objects/c6/4320f93370ac23c4ed1bf9431172822711083f": "8765fdf43f52a9f9ae1fb960d49c7ed0",
".git/objects/ec/e327e6150827c25bd834a49251a168d5e3f4e2": "1ffd793114d2afad33e70e68e35a1e49",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/b0db6d948f57873ba6fd499d1c84fc2ea183a3": "5ef649fa0eca0ab80f86c4a5dfcda248",
".git/objects/20/6bc3652d8cb504f477370418eee9c343f8dbc7": "ee43069e4789bbe5653cc9da24d4b11a",
".git/objects/18/a0ae6f3bb580ada4b420b41528cdfa82d9c265": "22197ab27b14a8a625cf974de465cac1",
".git/objects/18/e03496664e75e150450564800b8e1ee065ec8d": "a8ec9a76ea395f759c1b155d66bd6118",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7d/45c0b6cf103274e34ec63a8e06cf1f693d650e": "434fcb998dce382c9cf602089571f579",
".git/objects/29/e699e431099b0c6cf9deac4052f2e8870ddca9": "30761a1467b6d8038cd1a54d87411adf",
".git/objects/7c/1c499dfba61237e9435ac7095f54a75fe93f10": "6af90982bd3db03af23592c76ed257f9",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/16/13259fc4168d7a2ead5867ba299a4fcc4a5253": "ce74bb4a33bf86700d685f600ae683d0",
".git/objects/1f/ff58e8edd3b515910ba6093e38eef94b62f34a": "bf9cb1fe6acc51b951581bdb79386dc0",
".git/objects/73/4345c9b9051c41ca54087d7ed76d74bf106ca8": "a555b439db287528f1723972211a9b65",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/87/f583c55b32de6017177451927e00973933bab0": "c6edb04b490133794cf8a188ee15c4a7",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/c548ee97d731ce05080e36879ce93d6ebd5109": "e7bcf72ae0c0d769aef7bacb009248af",
".git/objects/8f/365f80ce5fdee126d76e26cca28970755380c0": "eb79d3c174f4d981e894b84f5a7910dd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/30f4dcbff7e4d12ce4c6dc426b97b5a3ca8f55": "7e3537554c3f9a7d5d529cab0ee23667",
".git/objects/10/cbf3280e9776b999c495c800d64a35c61f4729": "d6ec1aec3561ba19894a849d3f9c24b7",
".git/objects/75/cf0c8b66b4f1dfde364b281497af677c5e379b": "2349666cec5570c570e24bcf177a162b",
".git/objects/81/269161f95dcdcdefcdbed14bbe086dc206106b": "3730c97cab424cceb6c95578dda96f9c",
".git/objects/81/fb606cce890e76b1813dca0e310fa8eb6b676d": "98bc5a7c4a1d90c407a9f1ff308f009f",
".git/objects/86/056dce779158563c783bd0e79d54bea726e421": "cfd3069e2ff6ab83bc1f2c0146b59292",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/fb797aafe45defd278b099700f07217c6f7646": "4489c98e2d4ec0b180838fc93fd5cc27",
".git/objects/00/332332200424aa660f177bb5f041c86e59098b": "a78a73acbebc68a7c83d65971b790cd8",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/5c/e8ea21b6c618b844293cbfb81f3d5136c658b0": "a67732ad114e3f1caec2e35d4b0456aa",
".git/objects/98/2e7a599fb7103ccfb7524192e5ce3a00900975": "9dde256d73598f8c5fac64ac3e215ac0",
".git/objects/53/8870a257eebc6b74a87d7213c2fe54c7462480": "9b67dec4ccabc3759265cacd8c28b5c0",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5e/1012afd135167e61e2a85bc2bf839eb8295bc3": "da36e19096a8159ab297a2912f6acb1a",
".git/objects/5e/cf43a108e714b7e59991263922895da844d284": "e49f91c6624e1315a81e564431f78f06",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/26c6e45e5aed241ed199b5a2478f52f4ed3958": "4a91462903f19c91d43543ce2c30307c",
".git/objects/01/e926b30ce6374919b9f55106922db452cc810b": "a52acd066ad401fc016bb39b13ad10eb",
".git/objects/01/8464aa67adaaa087673fd4ad4f7b00a4481fc7": "cb12272610370bed3ba0d1c28f08e7d8",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/55/398b1a85ac42aad065b5e9d9a6518c70d9ca1d": "6eb78f43d029c6fd0abc8d87d291a751",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/faf68b32426ddfc07458bcdb630f93973c53f1": "516aa48fddd276a46c5d60335ce52fd9",
".git/objects/64/32ffedbe7556c6316bf8b841dfb973e25c3259": "1819dfde6b6ed1a5cf35b93736c21942",
".git/objects/d3/1f5d89e22bb412a25f9a91eca513077bf4330e": "328b0a4d00c98c398cdab2d10e4b7a86",
".git/objects/d3/89644a6b413ce247ec89b2697fd37eeb0ed0e2": "68740b130b2700f4f805555c2faf31bb",
".git/objects/d4/d492dc5c930647323c143b490008611e549cc8": "e130702e2962452b996345920cfbb4a9",
".git/objects/b8/987a3674022e2bac87ad8608746d7e02b1905b": "869e20b8fddefba6c701e2db0d122647",
".git/objects/b6/2e567b84f229dcbad0bad091bd46c398d284cf": "f481c29f7dbaf8ef6f97260da0e8ba90",
".git/objects/d2/f4f9a06903b2299f6fc9f0eebc54972908b5de": "8f7e7f48ca7f9e63979c239811277589",
".git/objects/d2/d6610142e5c4a1db5ff028ee5d49da27350a80": "366e2f71613a72616e777f9bd82acb95",
".git/objects/aa/a7f00385e38dc59480a2eeda25fbb2b135d6fc": "82e64394c38573c06ae4ecb401bcffb9",
".git/objects/aa/b35f8d3d2b820552180e806a1cbab76590115d": "1f0544c36e9389efb7164600255bd0f1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/e27a8bd282a1b48b40194ed9b48555c97a8007": "5f4a41e041068d848757c723649fbf76",
".git/objects/a8/bc25959b38b4922283b11b8c068b4a686c722b": "b9c332d2de55336067b94e50a04536bf",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/f467f63cf87c9ad1e56f9552515bd1c7a524e1": "94188a228800518a04741714ecc8aa28",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2341d876983b8779c09ef6de7fc0f9068a6662": "8d707053e70161cb113b441f8e1df437",
".git/objects/b9/539968a17fc6d908443ba774cfc48ae3f0707f": "a8a8d0c5ed2a0039114a724dc7f3062b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/2ec59c9a3b3692b6677e43d244e1ab8d9cd1c1": "8fd1b67538ffe5e518c3b8e1e1eee4ac",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/ea/ae3dbb658a50cdb3d4c9738ba2d3fcf5cd7fd5": "6c8ca446f43f378d1e86fa000444f41c",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/c7b186adec73291cb73a43ebaed0ff3c383f26": "76f1c4cf04aee1c5cc3fb491f7c728a4",
".git/objects/f0/0c6d989f9371fd106b2a589714a8628606abc4": "99d8f6c0dfa4067ca51c34d94d768c32",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/7b566dc7f705136d9632af0bdf5b0e3d3370c5": "0d94875bf9332f63f4e0767429e9af64",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/ea5d4785f099bd5783562cb69674dce3815fa2": "f51632bbf3cda822486def25e5cfdc92",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/52c78ae34ca3163eb9384a4ce0953006cd7efa": "9bc1666ca97c6c74f55fb4a26983add4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/83/344cf8d29870bafd852b9f2c75afa1954bd2b9": "aad92ecd2165206bb6916d82d5d4f710",
".git/objects/1b/fd16549c53c7a0560f1b8476b081d7843e9021": "eef58c7aa54c36c628dae376e275e72d",
".git/objects/1e/0b61d0e0a9f809a91ee91f8fe160adc3cdff19": "1df3aa10005189d90989631170581855",
".git/objects/1e/8e358f7cc8cb645e26172cd3f16ad1bc828be7": "d93a8d82c1cb272204b56b06554669c3",
".git/objects/84/eb74e63df96994a96a0d1f86e058ecd9026835": "aa2e6acc4c24131f584725a898ce55fa",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/443aa1faad24beebfa09e80c245d278bcfa1c5": "fbe43b1723a9c8a4db45bc1d590c55e4",
".git/objects/8d/1ea6df512a4e33f2fefd9557cace6a61cd19d4": "897327d3563c940f7a4d8614e7ae5e30",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/87ffd6bf41c85b449601c790f00df937cef1cc": "f51ec484b5924bd84bc7ecb6b455969e",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/71/8fcad69d1ced787eb802242272d9d77929719b": "81b76da68fd32bc85b27d484d5c9f24b",
".git/objects/71/7be98a54c2ae690ff8dec5ed02caa17e0dd60f": "b581cbaee3bf00b5c04d312e6bba4630",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/8b/7faffe8e348b017d4623ff46bc93a0be4f7bb4": "7696ef331527ba1761207bbf643c46e2",
".git/objects/8b/0087b9ed533e44df4da28ce1e7b1d29651f2ce": "4f66f44f6b6788ade8a836c76698b1e9",
".git/objects/13/db2994a486927dc41ade843834acb63cbdb3b6": "daf7252b0808869c1a7718ce6b977ade",
".git/objects/7a/5c5e3d544bd24dcd1c6732ba732063a4b196af": "6ee4bd0fd012722227b0045f0fcf9fda",
".git/objects/8e/8c6989cfc068589ca187ecbb190484277bd3f4": "ee1745c202a52795fed78acc7078a254",
".git/objects/22/c6c595d9ad989ffa707c634caef927ddb49324": "533ce2dbbe1c3e8b19fcf6bf4adf1e3f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "df9433e0523da9d5724c813bb6bcac73",
".git/logs/refs/heads/main": "9747f88806dfbaaca1308a2cf35050d5",
".git/logs/refs/remotes/origin/main": "6c3e2698448bf71e5d985cc4129af0d5",
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
".git/refs/heads/main": "b8d8c4d60d37fc4b57d952d52b1f61f0",
".git/refs/remotes/origin/main": "b8d8c4d60d37fc4b57d952d52b1f61f0",
".git/index": "56b6000a8ca001e267f135a8708615e8",
".git/COMMIT_EDITMSG": "1c7892bb60ddf4f201c41b8849737ec3",
".git/FETCH_HEAD": "37ab4ec49fb02f188b126f21d058dd1a",
"assets/AssetManifest.json": "dfb2755d2294666256b48110dde57399",
"assets/NOTICES": "734b1e2fcfcf96948af1ce1fb6819834",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/back.jpeg": "caf9ee5b3f1fc874fba83bf085ef31bb",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
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
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
