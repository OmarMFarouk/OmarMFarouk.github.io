'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "c8274dacb7273fe01f7789d41dccb4f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7b057fb23ff5aa7bd1a42609309060e4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9bea48c41165c5687320b60110d81917",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f090a5ec7ea7c3308d76f4267ceded30",
".git/logs/refs/heads/main": "5d8fb97d76edec72d87f5e05b688012a",
".git/logs/refs/remotes/origin/HEAD": "13e4cdc5dc87e4504aa7625a8bbed64b",
".git/logs/refs/remotes/origin/main": "595190f79b42e9d2e5cc738dbbe3038a",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/04/bfbca3700aeb30fd015e53b02cc1b1dab96195": "98360c83f0f92b3588c50e5548a6f7d8",
".git/objects/06/56ac63a70c122fd801b9f309e50363093c0c21": "63969fa38c8379b5e8c0bca46abb4a29",
".git/objects/07/6ba20cc9e5e7e8628094a3274ed1fa0a36bd30": "9e3dc03947a637f89bfdf29bd0c254de",
".git/objects/0b/6fb48fca8a036eee230b949c6ff1c01de89029": "b3d374ae42d8a7938062b98a17bc46f9",
".git/objects/0b/9e54dd37354de9877fd2338238c75b14048337": "bfb487d8dab471b4c807dd07f0f64e67",
".git/objects/0e/9218b593ee3b6501c684b4ff0de27aeb449dda": "13993fa2fe1ba529c20fdfe70f2985a7",
".git/objects/0f/633d5a8b892c11ac46ef8ecb5d326492c58537": "451032c6b9cda8aec835713d69057c74",
".git/objects/14/6b16fcb66b3508e1a0f0eea6428c946bdb2460": "0c654eaef71965ceee67f15e009fe738",
".git/objects/14/b0590ee86d0b70f80620bc1c20a0a9f61f591a": "a499429fe3688ad7edc4624013c72749",
".git/objects/19/66e1c18ff25cf188b07318cd22d5d978741cef": "06d040474f269b9b223a809211e7e41d",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/aae67d78f4bddb0096d533d87e32fa205f646a": "65623453130f3456ec2d5287f4366361",
".git/objects/1f/d19d85eabb768a55fc50dbde648c91b50a811b": "79d07e34dfaf7c0bafc9690ee7f5e944",
".git/objects/1f/f65e493c5a4282e99ed940f5c355a7fc04dfcd": "d278762c9f3d3af2eec17f220466c7c5",
".git/objects/20/b3e448751f890d94033fbc5faaebef8deecc73": "86b9c113fc20cac6546834e182075216",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/28/d51f3dd8f2c8283ce64a836c380f20eff18350": "4587a3cb25d5345ea0ebe106832aa659",
".git/objects/29/e541d496b41bfff4d4af8ae7e10dbd3e3f3c23": "71ee89f6b7f88d2226d703174a448e85",
".git/objects/2e/28ed152d7b6ecbc9c9104bcb55ed551dc6ef0e": "ed3eea1a08b1eb36223e1b2d7d86fdc9",
".git/objects/2e/836c165650ce1890be5c3a0b030e700d41c8ac": "587c346a0ee088de37d5843bfaef3726",
".git/objects/31/39dc7cf301ea55d8f5e781d98d5c58a6ee1ccd": "e26ff2b827306e1115fe3796b3329bdc",
".git/objects/31/57991e8dc41ee4f0f22bbf3be856c38e939fe4": "fe37faeb2584f928995db58cc2f1f3d8",
".git/objects/33/64ef0d71c4568cc31804a242cf9198fddb7d80": "75637288663544315297cc3528f487ef",
".git/objects/33/94f37f4db10a3df44d4ef9373818b9539efe7d": "cbc1634ea22766517c0299560e74e6dd",
".git/objects/35/3f923c6a46d81268d5c92b75bdcc4eb4ee2dd8": "fbe08b66ac1dab5ea9e597e702304e8a",
".git/objects/3c/38f510d6227e6085e190e1898125d12a71e5c1": "90fac2eecdb35902580fab85efcb6f2b",
".git/objects/40/ce73c3a286cfc4c18ee6b2ba70c8ab0cc642c6": "1f4bec9cae032092e86f5d551c44c9d2",
".git/objects/42/48c91e00bce1320695253ceefd1bebba7e48f5": "3087eb2b6e6c8453d42e1cfe7462b98d",
".git/objects/43/c3f1faaf37b2791b8857dc6aab39a1b214226e": "b387c74ad7054bceb28810232560d433",
".git/objects/46/5d0f0067b10bb5573cb93c7cc79b9cbff9bbce": "d9acb66cd8165e00a2b1504420d731b5",
".git/objects/48/1c873cbae8d124e334ec7e6e48a3de027446c6": "8a0884323ee2a3e2716bd445cfa635fe",
".git/objects/4a/295f7f99ce58255913a992f28ff66c6694957e": "77cdc2237b3fd54e5c7b271a1f33841f",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/7e312c07ea38d11f90a4f2775705f26f24a294": "0821ddde27926456d502ca4106170029",
".git/objects/50/72241903e8364940eb1878093cabc789c44895": "056d30b2b4bddb5fe8bf8a6b65fce0cd",
".git/objects/51/fa0d3dcf243c5d87c7b5ddefb6d740ea89bc15": "1e53d5dd5543dfbf14ad0b70df532ebd",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/ead70208d7284b79e9a396cf1e365098ff1de4": "654cf34eaa029e47b09fed1342ccd450",
".git/objects/54/76016e1becae305a24bd412c58638158d483ba": "466b51caa30f40458f43e3643b38d6b0",
".git/objects/56/34c98c327cfaf1e9387608eb78a0499a1ee565": "7fd10c4df8b0a7075d567981251033e0",
".git/objects/58/363245a63a2523bf7459116e5de71ea47fba37": "833796a4a787de46593e69cf4793114e",
".git/objects/59/02909867440dfa0b5142a8ba4919697c885d04": "5c79d484271e95c2079c52606f4dc38e",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/6dc6e9b5acfe64d9d8cf1100620dcbcaf268ce": "fb7933eabb53059a881103e79ce52336",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/61/8b633b950cc9b1933a39d66a96a1e0aa2e6caf": "80c67926b9e767f4cc0bccfb79e9a9f6",
".git/objects/65/5b3e75f12cc78451a626825655ff4f893fb0e0": "fcee5992163013d3ebe7fa2ad5e44ea6",
".git/objects/66/9fd19c1fd0927833e608ce81d3bdd59231fcd6": "6dcc2326b9207ef841bf04b8dc2e18b0",
".git/objects/67/2ce1000dd860f2ae9afd4a4f058eba8511903b": "bbd94eb67ddf017c6684e7712da200cc",
".git/objects/69/a62a0d77a6dfbf2c477584788dacc70b169902": "2381deaf2f4166d8306b60997c1e5279",
".git/objects/6d/5070affbbe91c4cd19a8219d7e780ad7de8a44": "c25b781a0ea28376731c679a8dded50f",
".git/objects/6d/dcb5f63580bc84616df0932921ddd86ed8baa4": "e4e7d66784c0a5852f1565ac84659485",
".git/objects/6f/be20cf393c21e66e3ad07256e2be4f82f23f5a": "e7a686143fd52453e9bfbf4ccb3732b1",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/7b/76be2abd64ce74d41a51676b72d306ad7e5774": "ec453b61e212b152d9b0439435f2e9f2",
".git/objects/7d/173dbaa16293c99265001795eace978fd63f4d": "3d1a39ba0fa8c911e9a581f57935941e",
".git/objects/80/9c68c4fa9e40a934fd116ac036e4142c093182": "97f50b273ad6ffe32d7e6e8dbec283f3",
".git/objects/80/a1ca24da33dedb14a60fdbc36991bb7a0f6521": "9d25eb98dc7faed0bc66fe6da1c57562",
".git/objects/81/18f0f8c0c2fd1f9c1acb6f2dc14e03f1a99a89": "df410ffb20ea5b99e54f9037fc41e3a3",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/84/613efa130939509d412979b7652c4c1caad5fc": "87877df81ef1899c11c7080b0b96f5ff",
".git/objects/85/6a26b657268a745439be49e3d4b98aa22ef30d": "7717b9377b82dbabad3c95e61450e264",
".git/objects/87/67730dd7c31e207f2d588fcacfb43cb5ae8d8c": "2652c8f3e7a59937da0707d690398512",
".git/objects/8c/ce94e9099042d6138452c7c61088659bf89f6c": "133fbb26b060c39e988b960d1f3f7c2e",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/02ad0e6cd684938bb511d107d95bb666b82495": "614aad182b632d3d37a89a310cb57eba",
".git/objects/92/0dfa8c26d196c7cb78317f2b72309676f3c25e": "2bd4e1f837c2b64a9d96bf08c5d7fe15",
".git/objects/95/c113929e1e0567b3cf3d2a484ce80dafdd4648": "e518aabfe3c7ff1822845aca3968bea1",
".git/objects/98/c5e87c9ec3f40fe901d5580860783915de88a4": "94421c8e51a31e0c840da6a26b2eff93",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/96b7a707ef4695249daad3c5229f7105a4bb61": "9f26bdf0320723bf89e2193adabb17ee",
".git/objects/9d/d652bd40fd8b509c23c2c3c309a5469a572b05": "97af4c5107a9da5cd8ea520400e8adc4",
".git/objects/a1/d65aa6f3e08f165258abcff3a3ca1762ac0097": "4b24191811ec171185f7fefcd6a2e1e2",
".git/objects/a1/ff89b51e44d0487e597ef11e4403824fa53174": "1214c760c79e2090113b6704e5939490",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a7/0867d189b6358225e51f7e42a978e25ee2912b": "0a1161567fdcaef0afeb8d6abab30a2b",
".git/objects/a7/db1f8401967073146300356aa620059d65cde2": "fb093f91240e1322ce3dfb5f849a223b",
".git/objects/a8/41373f8743b7704bdb8eee85e1d86476a81175": "dd357f313558fbb79759f1d9b6d0bf57",
".git/objects/a8/801492689d472bf7f0f275a2ca2695be57860d": "2aa1a6cc8544c529c89f932e92e83c2a",
".git/objects/ab/3927bd4b012874d112544417c3ac5359cf6dc7": "c02db32d07d9c11468c3df4f5174c3e6",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ae/315d4875aac9415fc9e92af1fd7a58254709c9": "83fb87084164e00b59414c800b4f66c3",
".git/objects/b2/0897de814939db38b6af7bcfe51d3abb2c7de0": "ab7d98e73e85fc34d8c8ca538449145c",
".git/objects/b4/829ca98db14d6e11d4b043cff47b2138ea0b95": "6da6816a6c8ce7d5eb0ed4dc8d036416",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/ba/5834800cadea0f4eb1a44f63ee3a89851cbf90": "19e692732d22299313218c80b0be589e",
".git/objects/ba/8f2e4f8982de0d4cfae9990a3975333c3f1f7a": "a4b5f8f54e01fb59cb728b17dfa2bf1c",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c2/2221b5ec491668d1ec04b60ba5559ff653f93b": "1c2d3a4dc4b00ffba50c9667b734b30b",
".git/objects/c2/a30422591516887e64bf3019df8bd685430cdc": "cacdc280d4c2e8fcbc5463250689add0",
".git/objects/c6/742fcaf457378c11896462d46f96507370e4d3": "9a35e8b7febeae340f49ca8336b6a726",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/835c3fce73a8d3f32e72cb290a9dd3f2318bb7": "5825c90bcbb54105ce97d162654c8cb6",
".git/objects/ca/2c51b0841ef3cbe0c2c3e01a469d94dd92ecf4": "5e568eb934b9d9d395e077ba2274f067",
".git/objects/ca/dea4e44d78341f3ed5aaa2704bda431e319198": "1fe3747539d9a9b4109dbdbd980fe9bb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/032d6042b68f0d32b689317b09f7e8b3387737": "ca7729493964b8aafad5221090bb6d86",
".git/objects/d6/949f58fba01da4cd5859cc56eb37d652f25b6c": "6446e97db0e12c9e99eb8f4b3ea8d9e9",
".git/objects/d8/fd77d8bcd620c33f14d6ec79880a6eadcc8acc": "6f721127eb6348d140cb4317265e6382",
".git/objects/d9/5082de6ab81e425caa24b9af7c47c518d21f34": "a7c5491eabc58848c60ccc418cde0dd9",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/db/7d811f8ab84fbf14300e62b6b04e8c3301b93b": "784f0eaa6453cbd52f13a5d6cbbdfb72",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/203d385ace15cd1a0d06626bc91bc4b0ba226a": "50612d69a2f43154f17fae79ab60c468",
".git/objects/e1/7a0ae6451606501e1dbca58567aba4fd6c8c80": "a9eafb1184829282a80877d9ca101fef",
".git/objects/e7/4827e14e441d8d1e7ce4437bbd1817e0441f75": "1ea9ab9aa36286582d6dd3c6d085443b",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f1/084b0db47bfa308fb28c0924012e9c16b68c77": "ad625bdedb9c63b090508b892bc59ff5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/482b2c33699e0784c52baa09eee374ba2afddc": "0e003e79699c893dd63538f2cb180b90",
".git/objects/f5/0b59a235635c884a0badcb6aaf4f90e74217df": "356db9aad8c8f02b0ad06fb1c62acfd8",
".git/objects/f5/0ceb713583fdd9b04db2a4c4727467d9b795aa": "4ee5a04e65922a91db2c6f1e913181ed",
".git/objects/fc/fc31a47d7c87a067b1405709aea91599e7a679": "827b393170dd348c0dd9ca72e94cc60f",
".git/objects/fd/5753a90d172013e16f7fd12fbf5dc20b5e3515": "a419420e3305172637c39fcbcb4f3f33",
".git/refs/heads/main": "378071b0dee9445327787d2ac799af2a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "378071b0dee9445327787d2ac799af2a",
"assets/AssetManifest.bin": "fa787a6a6e6f9a6cfe4c206e604194d9",
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
"data/CV.pdf": "b879fb48b6257d52ebe7fd4aea898452",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "9261cc0f2a209a82c364595813ec24cd",
"icons/apple-touch-icon.png": "d3efc637e1af65788dd581149764d3a1",
"icons/favicon-96x96.png": "edca43692d4bb1be1fc2abfd9c87ee64",
"icons/favicon.ico": "3161cba55f7f60f4f657c21c8c3a5e72",
"icons/favicon.svg": "1f32bf31baac094704ef9418c64690fa",
"icons/loading.gif": "1c587c6a66f493bb97df40fc6a01bfdc",
"icons/web-app-manifest-192x192.png": "d9d2aff4413d69faa10489a24b7af34f",
"icons/web-app-manifest-512x512.png": "4ae6864fad735e42cf01ed88b41f802b",
"index.html": "8c89063e6ef49744e8667f8c8ae75e99",
"/": "8c89063e6ef49744e8667f8c8ae75e99",
"main.dart.js": "5438bb13c676925a0cf3690d34278b9e",
"manifest.json": "d24e5e5235e557b66e7eac5be82298c2",
"README.md": "5808efa064679444d3f0b36ff53be77e",
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
