// src/stores/products.js
import { ref, computed } from 'vue'

const allProducts = ref([
    {
        id: 'cp2077',
        title: 'Cyberpunk 2077',
        category: 'rpg',
        short_desc: 'Футуристична рольова гра з відкритим світом у мегаполісі Найт-Сіті.',
        full_desc: 'Cyberpunk 2077 — пригодницька рольова гра з відкритим світом, дія якої відбувається у футуристичному мегаполісі Найт-Сіті, де влада, розкіш та модифікації тіла цінуються понад усе. Ви граєте за V, найманця у пошуках унікального імпланта, що дозволяє здобути безсмертя. Досліджуйте величезне місто, приймайте рішення, що впливають на сюжет, та станьте легендою Найт-Сіті.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg?t=1696015587',
        price: 1399,
        system_requirements: {
            minimum: { os: 'Windows 10 (64-bit)', processor: 'Intel Core i7-6700 або AMD Ryzen 5 1600', memory: '12 ГБ ОЗП', graphics: 'NVIDIA GeForce GTX 1060 6ГБ або AMD Radeon RX 580 8ГБ', storage: '70 ГБ SSD' },
            recommended: { os: 'Windows 10 (64-bit)', processor: 'Intel Core i7-12700 або AMD Ryzen 7 7800X3D', memory: '16 ГБ ОЗП', graphics: 'NVIDIA GeForce RTX 2060 SUPER або AMD Radeon RX 5700 XT / Intel Arc A770', storage: '70 ГБ NVMe SSD' }
        }
    },
    {
        id: 'witcher3',
        title: 'Відьмак 3: Дикий Гін',
        category: 'rpg',
        short_desc: 'Епічна рольова гра про пригоди відьмака Геральта у величезному фентезійному світі.',
        full_desc: '«Відьмак 3: Дикий Гін» – це сюжетна рольова гра з відкритим світом, дія якої розгортається у приголомшливому фентезійному всесвіті, де необхідно приймати складні рішення з далекосяжними наслідками. Ви граєте за професійного мисливця на чудовиськ, Геральта з Рівії, якому доручено знайти дитину з пророцтва у величезному світі, повному торгових міст, островів вікінгів-піратів, небезпечних гірських перевалів та забутих печер.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1675178392',
        price: 599,
        system_requirements: {
            minimum: { os: 'Windows 7/8/8.1/10 (64-bit)', processor: 'Intel Core i5-2500K 3.3ГГц / AMD Phenom II X4 940', memory: '6 ГБ ОЗП', graphics: 'Nvidia GeForce GTX 660 / AMD Radeon HD 7870', storage: '35 ГБ' },
            recommended: { os: 'Windows 7/8/8.1/10 (64-bit)', processor: 'Intel Core i7 3770 3.4 ГГц / AMD FX-8350 4 ГГц', memory: '8 ГБ ОЗП', graphics: 'Nvidia GeForce GTX 770 / AMD Radeon R9 290', storage: '35 ГБ' }
        }
    },
    {
        id: 'easfc24',
        title: 'EA Sports FC 24',
        category: 'sport',
        short_desc: 'Новий футбольний симулятор з реалістичною графікою та ігровим процесом.',
        full_desc: 'EA SPORTS FC™ 24 відкриває нову еру футболу. Понад 19 000 повністю ліцензованих гравців, 700+ команд та 30+ ліг — такого реалістичного футболу ви ще не бачили. Технологія HyperMotionV, оптимізована за допомогою даних Opta, забезпечує безпрецедентний реалізм у кожному матчі, а покращений рушій Frostbite™ додає нові деталі.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg?t=1700091032',
        price: 1899,
        system_requirements: {
            minimum: { os: 'Windows 10 - 64-Bit', processor: 'Intel Core i5-6600K @ 3.50GHz або AMD Ryzen 5 1600 @ 3.2 GHZ', memory: '8 ГБ ОЗП', graphics: 'NVIDIA GeForce GTX 1050 Ti 4ГБ або AMD Radeon RX 570 4ГБ', storage: '100 ГБ' },
            recommended: { os: 'Windows 10 - 64-Bit', processor: 'Intel Core i7-6700 @ 3.40GHz або AMD Ryzen 7 2700X @ 3.7 GHZ', memory: '12 ГБ ОЗП', graphics: 'NVIDIA GeForce GTX 1660 або AMD RX 5600 XT', storage: '100 ГБ' }
        }
    },
    {
        id: 'codmw3',
        title: 'Call of Duty: Modern Warfare III',
        category: 'action',
        short_desc: 'Динамічний шутер від першої особи, продовження знаменитої серії.',
        full_desc: 'У прямому продовженні Call of Duty: Modern Warfare II капітан Прайс та Оперативно-тактична група 141 (ОТГ-141) стикаються з неймовірною загрозою. Ультранаціоналіст і військовий злочинець Володимир Макаров поширює свою владу по всьому світу, змушуючи ОТГ-141 боротися як ніколи раніше. На вас чекає захоплююча кампанія, новий багатокористувацький режим та повернення зомбі.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2519060/header.jpg?t=1700847566',
        price: 1799,
        system_requirements: {
            minimum: { os: 'Windows 10 64-bit (останнє оновлення)', processor: 'Intel Core i5-6600K / Core i7-4770 або AMD Ryzen 5 1400', memory: '8 ГБ ОЗП', graphics: 'NVIDIA GeForce GTX 960 / GTX 1650 або AMD Radeon RX 470', storage: 'SSD 149 ГБ' },
            recommended: { os: 'Windows 10 64-bit (останнє оновлення) або Windows 11 64-bit (останнє оновлення)', processor: 'Intel Core i7-6700K або AMD Ryzen 5 1600X', memory: '16 ГБ ОЗП', graphics: 'NVIDIA GeForce GTX 1080Ti / RTX 3060 або AMD Radeon RX 6600XT', storage: 'SSD 149 ГБ' }
        }
    },
    {
        id: 'minecraft_dungeons',
        title: 'Minecraft: Підземелля',
        category: 'action',
        short_desc: 'Пригодницька гра у всесвіті Minecraft, натхненна класичними данжен-кроулерами.',
        full_desc: 'Боріться з новими злісними мобами в цій абсолютно новій пригодницькій грі, натхненній класичними данжен-кроулерами та відбувається у всесвіті Minecraft! Можна грати поодинці або об\'єднатися з трьома друзями, щоб разом пройти різноманітні рівні, наповнені скарбами та битвами, щоб врятувати селян та перемогти злого Архізлодіянина.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/header.jpg?t=1699467894',
        price: 799,
        system_requirements: {
            minimum: { os: 'Windows 10, 8 або 7 (64-bit)', processor: 'Core i5 2.8ГГц або еквівалент', memory: '8 ГБ ОЗП', graphics: 'NVIDIA GeForce GTX 660 або AMD Radeon HD 7870', storage: '6 ГБ' },
            recommended: { os: 'Windows 10 (64-bit)', processor: 'Core i5 2.8ГГц або еквівалент', memory: '8 ГБ ОЗП', graphics: 'NVIDIA GeForce GTX 660 або AMD Radeon HD 7870', storage: '6 ГБ' }
        }
    },
    {
        id: 'baldursgate3',
        title: "Брама Балдура 3",
        category: 'rpg',
        short_desc: 'Глибока партійна RPG у всесвіті Dungeons & Dragons з неймовірною свободою вибору.',
        full_desc: "Зберіть свою партію та поверніться до Забутих Королівств у сюжетній партійній рольовій грі від творців Divinity: Original Sin 2. На вас чекає світ, повний таємниць, небезпек та обману, де дружба, зрада, самопожертва та жага абсолютної влади переплітаються в епічному оповіданні. Створена на рушії Divinity 4.0, Baldur's Gate 3 пропонує безпрецедентну свободу дослідження, експериментів та взаємодії зі світом.",
        os_supported: ['Windows', 'macOS'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg?t=1700679906',
        price: 999,
        system_requirements: {
            minimum: { os: 'Windows 10 64-bit', processor: 'Intel i5-4690 / AMD FX 8350', memory: '8 ГБ ОЗП', graphics: 'Nvidia GTX 970 / RX 480 (4ГБ+ VRAM)', storage: '150 ГБ SSD' },
            recommended: { os: 'Windows 10 64-bit', processor: 'Intel i7 8700K / AMD r5 3600', memory: '16 ГБ ОЗП', graphics: 'Nvidia 2060 Super / RX 5700 XT (8ГБ+ VRAM)', storage: '150 ГБ SSD' }
        }
    },
    {
        id: 'cs2',
        title: 'Counter-Strike 2',
        category: 'action',
        short_desc: 'Класичний командний онлайн-шутер, оновлений на рушії Source 2.',
        full_desc: 'Counter-Strike 2 — це безкоштовне поліпшення для CS:GO, що знаменує найбільший технологічний стрибок в історії серії. Створена на рушії Source 2, CS2 модернізована за рахунок реалістичного фізично коректного рендерингу, мережевих технологій нового покоління та поліпшених інструментів Майстерні Steam. На вас чекають оновлені карти, покращена графіка та звуки, а також новий геймплейний досвід.',
        os_supported: ['Windows', 'Linux (SteamOS)'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1696958034',
        price: 0,
        system_requirements: {
            minimum: { os: 'Windows® 10', processor: 'Intel® Core™ i5 750 або AMD еквівалент (4 апаратні потоки)', memory: '8 ГБ ОЗП', graphics: 'Відеокарта має бути 1 ГБ або більше та сумісна з DirectX 11 з підтримкою Shader Model 5.0', storage: '85 ГБ' },
            recommended: { os: 'Windows® 10 / 11', processor: 'Intel® Core™ i5 750 або краще', memory: '12 ГБ ОЗП', graphics: 'NVIDIA® GeForce® GTX 970 або AMD Radeon™ RX 580', storage: '85 ГБ SSD' }
        }
    },
    {
        id: 'eldenring',
        title: 'Elden Ring',
        category: 'rpg',
        short_desc: 'Епічна фентезійна рольова гра від FromSoftware та Джорджа Р.Р. Мартіна.',
        full_desc: 'Повстань, згасла душе! Міжземелля чекає свого повелителя. Нехай благодать приведе тебе до Кільця Елден. ELDEN RING – це масштабна фентезійна рольова гра в жанрі екшн, розроблена FromSoftware Inc. у співпраці з Джорджем Р.Р. Мартіном, автором "Пісні льоду й полум\'я". Досліджуйте величезний світ, повний небезпек та див, створюйте свого персонажа та розкрийте таємниці Кільця Елден.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg?t=1699528893',
        price: 1999,
        system_requirements: {
            minimum: { os: 'Windows 10', processor: 'INTEL CORE I5-8400 або AMD RYZEN 3 3300X', memory: '12 ГБ ОЗП', graphics: 'NVIDIA GEFORCE GTX 1060 3 ГБ або AMD RADEON RX 580 4 ГБ', storage: '60 ГБ' },
            recommended: { os: 'Windows 10/11', processor: 'INTEL CORE I7-8700K або AMD RYZEN 5 3600X', memory: '16 ГБ ОЗП', graphics: 'NVIDIA GEFORCE GTX 1070 8 ГБ або AMD RADEON RX VEGA 56 8 ГБ', storage: '60 ГБ SSD' }
        }
    },
    {
        id: 'hogwarts',
        title: 'Спадок Гоґвортсу',
        category: 'rpg',
        short_desc: 'Пориньте у магічний світ 1800-х років і станьте учнем Гоґвортсу.',
        full_desc: '«Спадок Гоґвортсу» — це захоплююча рольова гра з відкритим світом, дія якої розгортається у всесвіті книг про Гаррі Поттера у 1800-х роках. Ви граєте за учня, який володіє ключем до древньої таємниці, що загрожує розірвати чаклунський світ. Вирушайте в подорож знайомими та новими місцями, досліджуйте фантастичних істот, налаштовуйте свого персонажа, варіть зілля, вивчайте заклинання, розвивайте таланти та станьте тим чарівником, яким хочете бути.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg?t=1699023494',
        price: 1599,
        system_requirements: {
            minimum: { os: 'Windows 10 64-bit', processor: 'Intel Core i5-6600 (3.3ГГц) або AMD Ryzen 5 1400 (3.2ГГц)', memory: '16 ГБ ОЗП', graphics: 'NVIDIA GeForce GTX 960 4ГБ або AMD Radeon RX 470 4ГБ', storage: '85 ГБ HDD (рекомендовано SSD)' },
            recommended: { os: 'Windows 10 64-bit', processor: 'Intel Core i7-8700 (3.2ГГц) або AMD Ryzen 5 3600 (3.6ГГц)', memory: '16 ГБ ОЗП', graphics: 'NVIDIA GeForce 1080 Ti або AMD Radeon RX 5700 XT або INTEL Arc A770', storage: '85 ГБ SSD' }
        }
    },
    {
        id: 'nba2k24',
        title: 'NBA 2K24',
        category: 'sport',
        short_desc: 'Реалістичний баскетбол з новими можливостями та режимами гри.',
        full_desc: 'Збирайте команду та насолоджуйтесь минулим, сьогоденням та майбутнім баскетбольної культури в NBA 2K24. Насолоджуйтесь безліччю чистого, автентичного екшену та безмежними можливостями персоналізації MyPLAYER у MyCAREER. Зберіть своїх улюблених легенд та створіть ідеальну команду в MyTEAM, відчуйте покращений геймплей та реалістичну графіку.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2338770/header.jpg?t=1700257830',
        price: 1499,
        system_requirements: {
            minimum: { os: 'Windows 10 64-bit або Windows 11 64-bit', processor: 'Intel® Core™ i3-2100 @ 3.10 GHz/ AMD FX-4100 @ 3.60 GHz або краще', memory: '4 ГБ ОЗП', graphics: 'NVIDIA® GeForce® GT 450 1ГБ/ ATI® Radeon™ HD 7770 1ГБ або краще', storage: '110 ГБ' },
            recommended: { os: 'Windows 10 64-bit або Windows 11 64-bit', processor: 'Intel® Core™ i5-4430 @ 3 GHz/ AMD FX-8370 @ 3.4 GHz або краще', memory: '8 ГБ ОЗП', graphics: 'NVIDIA® GeForce® GTX 770 2ГБ/ ATI® Radeon™ R9 270 2ГБ або краще', storage: '110 ГБ' }
        }
    },
    {
        id: 'nfsunbound',
        title: 'Need for Speed Unbound',
        category: 'action',
        short_desc: 'Аркадні перегони з яскравим візуальним стилем, тюнінгом та поліцейськими погонями.',
        full_desc: 'Продемонструйте свої навички, обженіть поліцейських та беріть участь у щотижневих відбіркових турнірах, щоб дістатися до The Grand, головного вуличного гоночного виклику Лейкшора. Заповніть свій гараж точно налаштованими, кастомними машинами та освітіть вулиці своїм стилем, ексклюзивним спорядженням та яскравим глобальним саундтреком.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1846380/header.jpg?t=1694034915',
        price: 999,
        system_requirements: {
            minimum: { os: 'Windows 10 64-bit', processor: 'Ryzen 5 2600 або Core i5-8600', memory: '8 ГБ ОЗП', graphics: 'RX 570 або GTX 1050 Ti', storage: '50 ГБ' },
            recommended: { os: 'Windows 10 64-bit', processor: 'Ryzen 5 3600 або Core i7-8700', memory: '16 ГБ ОЗП', graphics: 'Radeon RX5700 (8ГБ) або GeForce RTX 2070 (8ГБ)', storage: '50 ГБ SSD' }
        }
    },
    {
        id: 'apexlegends',
        title: 'Apex Legends',
        category: 'action',
        short_desc: 'Безкоштовна королівська битва з унікальними легендами та командною грою.',
        full_desc: 'Apex Legends — це безкоштовна королівська битва, де легендарні персонажі з потужними здібностями борються за славу та багатство на просторах Фронтиру. Освоюйте постійно зростаючий список різноманітних Легенд, глибоку тактичну командну гру та сміливі інновації, що виходять за рамки жанру Battle Royale.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg?t=1700000262',
        price: 0,
        system_requirements: {
            minimum: { os: 'Windows 7 64-bit', processor: 'AMD FX 4350 або еквівалент / Intel Core i3 6300 або еквівалент', memory: '6 ГБ ОЗП', graphics: 'AMD Radeon™ HD 7730 / NVIDIA GeForce® GT 640', storage: '56 ГБ (мінімум)' },
            recommended: { os: 'Windows 10 64-bit', processor: 'Ryzen 5 CPU або еквівалент / Intel Core i5 3570K або еквівалент', memory: '8 ГБ ОЗП', graphics: 'AMD Radeon™ R9 290 / NVIDIA GeForce® GTX 970', storage: '56 ГБ SSD' }
        }
    },
    {
        id: 'rdr2',
        title: 'Red Dead Redemption 2',
        category: 'action',
        short_desc: 'Епічна історія життя та виживання в Америці наприкінці епохи Дикого Заходу.',
        full_desc: 'Артур Морган та банда Датча ван дер Лінде змушені переховуватися від закону. Коли федеральні агенти та найкращі мисливці за головами країни йдуть по п\'ятах, банда повинна грабувати, красти та боротися, щоб вижити в суворому серці Америки. Зростаючі внутрішні протиріччя загрожують розколоти банду, і Артур повинен зробити вибір між своїми ідеалами та вірністю банді, яка його виховала.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1671485009',
        price: 1199,
        system_requirements: {
            minimum: { os: 'Windows 7 - Service Pack 1 (6.1.7601)', processor: 'Intel® Core™ i5-2500K / AMD FX-6300', memory: '8 ГБ ОЗП', graphics: 'Nvidia GeForce GTX 770 2ГБ / AMD Radeon R9 280 3ГБ', storage: '150 ГБ' },
            recommended: { os: 'Windows 10 - April 2018 Update (v1803)', processor: 'Intel® Core™ i7-4770K / AMD Ryzen 5 1500X', memory: '12 ГБ ОЗП', graphics: 'Nvidia GeForce GTX 1060 6ГБ / AMD Radeon RX 480 4ГБ', storage: '150 ГБ' }
        }
    },
    {
        id: 'valhalla',
        title: 'Assassin’s Creed Вальгалла',
        category: 'rpg',
        short_desc: 'Станьте легендарним вікінгом Ейвором та поведіть свій клан до слави в Англії.',
        full_desc: 'Станьте Ейвором, легендарним воїном-вікінгом, вихованим на історіях про битви та славу. Грабуйте ворогів, розширюйте своє поселення та зміцнюйте свою політичну владу в Англії епохи Темних віків, шукаючи місце серед богів у Вальгаллі. Ведіть епічні набіги вікінгів на саксонські фортеці та армії.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg?t=1699008800',
        price: 999,
        system_requirements: {
            minimum: { os: 'Windows 10 (тільки 64-bit версії)', processor: 'Intel Core i5-4460 @ 3.2 ГГц або AMD Ryzen 3 1200 @ 3.1 ГГц', memory: '8 ГБ ОЗП (двоканальний режим)', graphics: 'NVIDIA GeForce GTX 960 (4 ГБ) або AMD Radeon R9 380 (4 ГБ)', storage: '50 ГБ HDD (рекомендовано SSD)' },
            recommended: { os: 'Windows 10 (тільки 64-bit версії)', processor: 'Intel Core i7-6700 @ 3.4 ГГц або AMD Ryzen 7 1700 @ 3.0 ГГц', memory: '8 ГБ ОЗП (двоканальний режим)', graphics: 'NVIDIA GeForce GTX 1080 (8 ГБ) або AMD Vega 64 (8 ГБ)', storage: '50 ГБ SSD' }
        }
    },
    {
        id: 'destiny2',
        title: 'Destiny 2',
        category: 'action',
        short_desc: 'Безкоштовний масштабний онлайн-шутер у науково-фантастичному всесвіті.',
        full_desc: 'Destiny 2 — це екшен-MMO з єдиним світом, що розвивається, де ви та ваші друзі можете об\'єднатися в будь-який час і в будь-якому місці. Досліджуйте таємниці Сонячної системи, виконуйте кооперативні місії, змагайтеся в PvP режимах та випробуйте захоплюючий шутер від першої особи з елементами RPG.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg?t=1700501220',
        price: 0,
        system_requirements: {
            minimum: { os: 'Windows® 7 / Windows® 8.1 / Windows® 10 64-bit (останній Service Pack)', processor: 'Intel® Core™ i3 3250 3.5 ГГц або Intel Pentium G4560 3.5 ГГц / AMD FX-4350 4.2 ГГц', memory: '6 ГБ ОЗП', graphics: 'NVIDIA® GeForce® GTX 660 2ГБ або GTX 1050 2ГБ / AMD Radeon HD 7850 2ГБ', storage: '105 ГБ' },
            recommended: { os: 'Windows® 10 64-bit (останній Service Pack)', processor: 'Intel® Core™ i5 2400 3.4 ГГц або i5 7400 3.5 ГГц / AMD Ryzen R5 1600X 3.6 ГГц', memory: '8 ГБ ОЗП', graphics: 'NVIDIA® GeForce® GTX 970 4ГБ або GTX 1060 6ГБ / AMD R9 390 8ГБ', storage: '105 ГБ SSD' }
        }
    },
    {
        id: 'forzah5',
        title: 'Forza Horizon 5',
        category: 'sport',
        short_desc: 'Захоплюючі перегони у відкритому світі Мексики з сотнями автомобілів.',
        full_desc: 'Ваша неймовірна пригода Horizon чекає! Досліджуйте яскраві та постійно мінливі ландшафти відкритого світу Мексики з безмежним, захоплюючим водінням на сотнях найвеличніших автомобілів світу. Беріть участь у різноманітних змаганнях, досліджуйте приховані куточки та насолоджуйтесь фестивальною атмосферою.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg?t=1699548884',
        price: 1799,
        system_requirements: {
            minimum: { os: 'Windows 10 версія 15063.0 або новіша', processor: 'Intel i5-4460 або AMD Ryzen 3 1200', memory: '8 ГБ ОЗП', graphics: 'NVidia GTX 970 АБО AMD RX 470', storage: '110 ГБ' },
            recommended: { os: 'Windows 10 версія 15063.0 або новіша', processor: 'Intel i5-8400 або AMD Ryzen 5 1500X', memory: '16 ГБ ОЗП', graphics: 'NVidia GTX 1070 АБО AMD RX 590', storage: '110 ГБ SSD' }
        }
    },
    {
        id: 'totalwar3',
        title: 'Total War: WARHAMMER III',
        category: 'strategy',
        short_desc: 'Епічна глобальна стратегія у фентезійному світі Warhammer Fantasy Battles.',
        full_desc: 'Далеко за межами світу та його дрібних воєн існує вимір чистої, зловмисної магії: Царство Хаосу. Це жахливе місце, незбагненне для смертного розуму. Зберіть свої сили та зробіть крок у Царство Хаосу, щоб битися за долю світу. Ведіть одну з багатьох фракцій, кожна з унікальними юнітами, механіками та легендарними лордами.',
        os_supported: ['Windows', 'macOS', 'Linux'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1142710/header.jpg?t=1698335386',
        price: 1499,
        system_requirements: {
            minimum: { os: 'Windows 7 64-bit', processor: 'Intel Core i3 / Ryzen 3 серії', memory: '6 ГБ ОЗП', graphics: 'Nvidia GTX 900 / AMD RX 400 серії | Intel Iris Xe Graphics', storage: '120 ГБ' },
            recommended: { os: 'Windows 10 64-bit', processor: 'Intel Core i5 / Ryzen 5 серії', memory: '8 ГБ ОЗП', graphics: 'Nvidia GeForce GTX 1660 Ti / AMD RX 5600 XT', storage: '120 ГБ SSD' }
        }
    },
    {
        id: 'gtav',
        title: 'Grand Theft Auto V',
        category: 'action',
        short_desc: 'Відкритий світ, кримінальні історії та безмежні можливості в Лос-Сантосі.',
        full_desc: 'Коли молодий вуличний кишеньковий злодій, колишній грабіжник банків та небезпечний психопат опиняються втягнутими в розбірки з найстрашнішими та найбожевільнішими елементами злочинного світу, уряду США та індустрії розваг, їм доводиться здійснити серію небезпечних пограбувань, щоб вижити в безжальному місті, де вони не можуть довіряти нікому — і найменше один одному. Включає Grand Theft Auto Online.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg?t=1695069013',
        price: 499,
        system_requirements: {
            minimum: { os: 'Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1', processor: 'Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHz', memory: '4 ГБ ОЗП', graphics: 'NVIDIA 9800 GT 1ГБ / AMD HD 4870 1ГБ (DX 10, 10.1, 11)', storage: '72 ГБ (може збільшитися)' },
            recommended: { os: 'Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1', processor: 'Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)', memory: '8 ГБ ОЗП', graphics: 'NVIDIA GTX 660 2ГБ / AMD HD 7870 2ГБ', storage: '72 ГБ' }
        }
    },
    {
        id: 'farcry6',
        title: 'Far Cry 6',
        category: 'action',
        short_desc: 'Революція на тропічному острові Яра проти жорстокого диктатора Антона Кастільйо.',
        full_desc: 'Ласкаво просимо до Яри, тропічного раю, застиглого в часі. Диктатор Антон Кастільйо має намір повернути своїй нації колишню славу будь-якими засобами, і його син Дієго йде його кривавими слідами. Їхнє безжальне правління запалило полум\'я революції. Грайте за Дані Рохас, місцевого жителя Яри, і станьте партизаном, щоб звільнити свою націю.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2369390/header.jpg?t=1699528764',
        price: 1299,
        system_requirements: {
            minimum: { os: 'Windows 10 (20H1 або новіша, 64-bit версії)', processor: 'AMD Ryzen 3 1200 – 3.1 ГГц або Intel Core i5-4460 – 3.2 ГГц', memory: '8 ГБ ОЗП (двоканальний режим)', graphics: 'AMD RX 460 (4 ГБ) або NVIDIA GeForce GTX 960 (4 ГБ)', storage: '60 ГБ HDD (рекомендовано SSD)' },
            recommended: { os: 'Windows 10 (20H1 або новіша, 64-bit версії)', processor: 'AMD Ryzen 5 3600X – 3.8 ГГц або Intel Core i7-7700 – 3.6 ГГц', memory: '16 ГБ ОЗП (двоканальний режим)', graphics: 'AMD RX Vega 64 (8 ГБ) або NVIDIA GeForce GTX 1080 (8 ГБ)', storage: '60 ГБ SSD' }
        }
    },
    {
        id: 'starfield',
        title: 'Starfield',
        category: 'rpg',
        short_desc: 'Нова космічна рольова гра від Bethesda Game Studios, творців Skyrim та Fallout.',
        full_desc: 'Starfield — це перша нова всесвіт за 25 років від Bethesda Game Studios, відзначених нагородами творців The Elder Scrolls V: Skyrim та Fallout 4. У цій рольовій грі нового покоління, дія якої відбувається серед зірок, створіть будь-якого персонажа, якого забажаєте, та досліджуйте з безпрецедентною свободою, вирушаючи в епічну подорож, щоб розгадати найбільшу таємницю людства.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg?t=1700089242',
        price: 2199,
        system_requirements: {
            minimum: { os: 'Windows 10 версія 21H1 (10.0.19043)', processor: 'AMD Ryzen 5 2600X, Intel Core i7-6800K', memory: '16 ГБ ОЗП', graphics: 'AMD Radeon RX 5700, NVIDIA GeForce 1070 Ti', storage: '125 ГБ SSD' },
            recommended: { os: 'Windows 10/11 з оновленнями', processor: 'AMD Ryzen 5 3600X, Intel i5-10600K', memory: '16 ГБ ОЗП', graphics: 'AMD Radeon RX 6800 XT, NVIDIA GeForce RTX 2080', storage: '125 ГБ SSD' }
        }
    },
    {
        id: 'doometernal',
        title: 'DOOM Eternal',
        category: 'action',
        short_desc: 'Безкомпромісний шутер від першої особи, де ви – Палач Року, що нищить демонів.',
        full_desc: 'Армії Пекла вторглися на Землю. Станьте Палачом Року в епічній одиночній кампанії, щоб підкорити демонів у всіх вимірах та зупинити остаточне знищення людства. Єдине, чого вони бояться... це тебе. Відчуйте ідеальне поєднання швидкості та сили в DOOM Eternal - наступному стрибку в жанрі шутерів від першої особи.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg?t=1695322087',
        price: 799,
        system_requirements: {
            minimum: { os: 'Windows 7 64-bit / Windows 10 64-bit', processor: 'Intel Core i5 @ 3.3 ГГц або краще, або AMD Ryzen 3 @ 3.1 ГГц або краще', memory: '8 ГБ ОЗП', graphics: 'NVIDIA GeForce GTX 1050Ti (4ГБ), GTX 1060 (3ГБ), GTX 1650 (4ГБ) або AMD Radeon R9 280 (3ГБ), RX 470 (4ГБ)', storage: '80 ГБ' },
            recommended: { os: 'Windows 10 64-bit', processor: 'Intel Core i7-6700K або краще, або AMD Ryzen 7 1800X або краще', memory: '8 ГБ ОЗП (рекомендується 16ГБ)', graphics: 'NVIDIA GeForce GTX 1080 (8ГБ), RTX 2060 (8ГБ) або AMD Radeon RX Vega56 (8ГБ)', storage: '80 ГБ' }
        }
    },
    {
        id: 'residentevil4remake',
        title: 'Resident Evil 4 (Рімейк)',
        category: 'action',
        short_desc: 'Повернення легендарного горрору на виживання з оновленою графікою та геймплеєм.',
        full_desc: 'Виживання — це лише початок. Минуло шість років після біологічної катастрофи в Раккун-Сіті. Леон С. Кеннеді, один із тих, хто вижив, вистежив дочку президента, яку викрали. Пошуки приводять його до відокремленого європейського села, де з місцевими жителями щось не так. Гра пропонує модернізований геймплей, переосмислений сюжет та яскраву, деталізовану графіку.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg?t=1699975143',
        price: 1699,
        system_requirements: {
            minimum: { os: 'Windows 10 (64 bit)', processor: 'AMD Ryzen 3 1200 / Intel Core i5-7500', memory: '8 ГБ ОЗП', graphics: 'AMD Radeon RX 560 4ГБ VRAM / NVIDIA GeForce GTX 1050 Ti 4ГБ VRAM', storage: 'Приблизно 50-60 ГБ' },
            recommended: { os: 'Windows 10 (64 bit)/Windows 11 (64 bit)', processor: 'AMD Ryzen 5 3600 / Intel Core i7 8700', memory: '16 ГБ ОЗП', graphics: 'AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070', storage: 'Приблизно 50-60 ГБ SSD' }
        }
    },
    {
        id: 'hades',
        title: 'Hades',
        category: 'rpg',
        short_desc: 'Динамічний рогалик, де ви намагаєтеся втекти з Підземного світу давньогрецьких міфів.',
        full_desc: 'Киньте виклик богу мертвих, прорубуючи собі шлях із Підземного світу в цій грі в жанрі dungeon crawler від творців Bastion, Transistor та Pyre. Як безсмертний принц Підземного світу, Загрей, ви будете володіти силами та міфічною зброєю Олімпу, щоб вирватися з лап самого бога мертвих, стаючи сильнішим і розкриваючи більше сюжету з кожною унікальною спробою втечі.',
        os_supported: ['Windows', 'macOS'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg?t=1689900005',
        price: 399,
        system_requirements: {
            minimum: { os: 'Windows 7 SP1', processor: 'Dual Core 2.4 ГГц', memory: '4 ГБ ОЗП', graphics: '1ГБ VRAM / підтримка DirectX 10+', storage: '15 ГБ' },
            recommended: { os: 'Windows 10', processor: 'Dual Core 3.0 ГГц+', memory: '8 ГБ ОЗП', graphics: '2ГБ VRAM / підтримка DirectX 10+', storage: '20 ГБ' }
        }
    },
    {
        id: 'stardewvalley',
        title: 'Долина Стардью',
        category: 'strategy',
        short_desc: 'Затишний симулятор фермерського життя з елементами RPG та дослідження.',
        full_desc: 'Ви успадкували стару ферму свого дідуся в Долині Стардью. Озброївшись вживаними інструментами та кількома монетами, ви вирушаєте починати нове життя. Чи зможете ви навчитися жити за рахунок землі та перетворити ці зарослі поля на процвітаючий дім? Вас чекає вирощування врожаю, розведення тварин, риболовля, ремесло, спілкування з місцевими жителями та дослідження таємничих печер.',
        os_supported: ['Windows', 'macOS', 'Linux'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg?t=1684433904',
        price: 199,
        system_requirements: {
            minimum: { os: 'Windows Vista або новіша', processor: '2 ГГц', memory: '2 ГБ ОЗП', graphics: '256 МБ відеопам\'яті, shader model 3.0+', storage: '500 МБ' },
            recommended: { os: 'Windows Vista або новіша', processor: '2 ГГц', memory: '2 ГБ ОЗП', graphics: '256 МБ відеопам\'яті, shader model 3.0+', storage: '500 МБ' }
        }
    },
    {
        id: 'factorio',
        title: 'Factorio',
        category: 'strategy',
        short_desc: 'Будуйте, автоматизуйте та оптимізуйте величезні промислові комплекси.',
        full_desc: 'Factorio — це гра про будівництво та створення автоматизованих заводів для виробництва все складніших предметів у нескінченному 2D-світі. Використовуйте свою уяву для проектування свого заводу, комбінуйте прості елементи в геніальні структури, автоматизуйте видобуток ресурсів, досліджуйте технології та захищайте свою базу від місцевих істот.',
        os_supported: ['Windows', 'macOS', 'Linux'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/427520/header.jpg?t=1695123835',
        price: 499,
        system_requirements: {
            minimum: { os: 'Windows 10, 8, 7, Vista (64 Bit)', processor: 'Dual core 3ГГц+', memory: '4 ГБ ОЗП', graphics: 'DirectX 10.1 сумісна GPU з 512 МБ VRAM - GeForce GTX 260, Radeon HD 4850 або Intel HD Graphics 5500', storage: '3 ГБ' },
            recommended: { os: 'Windows 10, 8, 7 (64 Bit)', processor: 'Quad core 3ГГц+', memory: '8 ГБ ОЗП', graphics: 'DirectX 11 сумісна GPU з 2 ГБ VRAM - GeForce GTX 750 Ti, Radeon R7 360', storage: '3 ГБ' }
        }
    },
    {
        id: 'terraria',
        title: 'Terraria',
        category: 'action',
        short_desc: 'Величезний 2D-світ для копання, боротьби, дослідження та будівництва.',
        full_desc: 'Копайте, боріться, досліджуйте, будуйте! Ніщо не неможливо в цій пригодницькій грі, наповненій дією. Світ — це ваш полотно, а сама земля — ваша фарба. Хапайте свої інструменти та вперед! Створюйте зброю, щоб відбиватися від різноманітних ворогів у численних біомах, збирайте ресурси, будуйте власні міста та кидайте виклик могутнім босам.',
        os_supported: ['Windows', 'macOS', 'Linux'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg?t=1690490882',
        price: 149,
        system_requirements: {
            minimum: { os: 'Windows Xp, Vista, 7, 8/8.1, 10', processor: '2.0 ГГц', memory: '2.5ГБ ОЗП', graphics: '128МБ відеопам\'яті, підтримка Shader Model 2.0+', storage: '200 МБ' },
            recommended: { os: 'Windows 7, 8/8.1, 10', processor: 'Dual Core 3.0 ГГц', memory: '4ГБ ОЗП', graphics: '256МБ відеопам\'яті, підтримка Shader Model 2.0+', storage: '200 МБ' }
        }
    },
    {
        id: 'deeprockgalactic',
        title: 'Deep Rock Galactic',
        category: 'action',
        short_desc: 'Кооперативний FPS про космічних гномів, що видобувають ресурси та нищать монстрів.',
        full_desc: 'Deep Rock Galactic — це кооперативний науково-фантастичний шутер від першої особи для 1-4 гравців, у якому беруть участь круті космічні гноми, повністю руйноване оточення, процедурно генеровані печери та нескінченні орди інопланетних монстрів. Працюйте разом, щоб копати, досліджувати та пробиватися крізь величезну систему печер, наповнених смертельними ворогами та цінними ресурсами.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/548430/header.jpg?t=1699005828',
        price: 449,
        system_requirements: {
            minimum: { os: 'Windows 7 64-bit', processor: '2.4 ГГц Dual Core', memory: '6 ГБ ОЗП', graphics: 'NVIDIA GeForce GTX 460 або AMD Radeon HD 5770 /w 1ГБ VRAM', storage: '3 ГБ' },
            recommended: { os: 'Windows 10 64-bit', processor: '2.4 ГГц Quad Core', memory: '8 ГБ ОЗП', graphics: 'NVIDIA GeForce GTX 970 або AMD Radeon R9 290 /w 2ГБ VRAM', storage: '3 ГБ' }
        }
    },
    {
        id: 'sekiro',
        title: 'Sekiro: Тіні вмирають двічі',
        category: 'action',
        short_desc: 'Хардкорний екшен від FromSoftware з унікальною бойовою системою у феодальній Японії.',
        full_desc: 'У Sekiro: Shadows Die Twice ви — «однорукий вовк», зганьблений та понівечений воїн, врятований від межі смерті. Зв\'язаний обов\'язком захищати молодого пана, який є нащадком древнього роду, ви стаєте ціллю багатьох злісних ворогів, включаючи небезпечний клан Асіна. Якщо молодий пан буде захоплений, ніщо не зупинить вас на шляху до відновлення честі, навіть сама смерть.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg?t=1678991267',
        price: 999,
        system_requirements: {
            minimum: { os: 'Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit', processor: 'Intel Core i3-2100 | AMD FX-6300', memory: '4 ГБ ОЗП', graphics: 'NVIDIA GeForce GTX 760 | AMD Radeon HD 7950', storage: '25 ГБ' },
            recommended: { os: 'Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit', processor: 'Intel Core i5-2500K | AMD Ryzen 5 1400', memory: '8 ГБ ОЗП', graphics: 'NVIDIA GeForce GTX 970 | AMD Radeon RX 570', storage: '25 ГБ' }
        }
    },
    {
        id: 'persona5royal',
        title: 'Persona 5 Royal',
        category: 'rpg',
        short_desc: 'Стильна японська рольова гра про Фантомних Злодіїв Сердець, що борються з корупцією.',
        full_desc: 'Приготуйтеся до відзначеної нагородами RPG у її остаточній версії! Надягніть маску Джокера та приєднайтеся до Фантомних Злодіїв Сердець. Звільніться від ланцюгів сучасного суспільства та здійснюйте грандіозні пограбування, щоб проникнути в уми корумпованих та змусити їх змінити свої шляхи! Persona 5 Royal наповнена новими персонажами, сюжетними лініями, локаціями та новою механікою гака для непомітного доступу до нових зон.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1687950/header.jpg?t=1697058088',
        price: 1699,
        system_requirements: {
            minimum: { os: 'Windows 10', processor: 'Intel Core i7-4790, 3.4 ГГц | AMD Ryzen 5 1500X, 3.5 ГГц', memory: '8 ГБ ОЗП', graphics: 'Nvidia GeForce GTX 650 Ti, 2 ГБ | AMD Radeon R7 360, 2 ГБ', storage: '41 ГБ' },
            recommended: { os: 'Windows 10', processor: 'Intel Core i7-4790, 3.4 ГГц | AMD Ryzen 5 1500X, 3.5 ГГц', memory: '8 ГБ ОЗП', graphics: 'Nvidia GeForce GTX 760, 2 ГБ | AMD Radeon HD 7870, 2 ГБ', storage: '41 ГБ' }
        }
    },
    {
        id: 'hitman3',
        title: 'HITMAN: Світ Найманих Убивць',
        category: 'strategy',
        short_desc: 'Станьте Агентом 47, майстром маскування та ліквідації цілей по всьому світу.',
        full_desc: 'Увійдіть у світ ідеального вбивці. HITMAN Світ Найманих Убивць об\'єднує найкраще з HITMAN, HITMAN 2 та HITMAN 3, включаючи основну кампанію, режим контрактів, ескалації, невловимі цілі та представлений у HITMAN Freelancer режим roguelike. Подорожуйте по екзотичних локаціях, використовуйте величезний арсенал інструментів та зброї, і виконуйте завдання творчо та непомітно.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1659040/header.jpg?t=1698870743',
        price: 999,
        system_requirements: {
            minimum: { os: 'Windows 10 64-bit', processor: 'Intel CPU Core i5-2500K 3.3ГГц / AMD CPU Phenom II X4 940', memory: '8 ГБ ОЗП', graphics: 'NVIDIA GeForce GTX 660 / Radeon HD 7870', storage: '60 ГБ' },
            recommended: { os: 'Windows 10 64-bit', processor: 'Intel CPU Core i7 4790 4 ГГц', memory: '16 ГБ ОЗП', graphics: 'Nvidia GPU GeForce GTX 1070 / AMD GPU Radeon RX Vega 56 8ГБ', storage: '60 ГБ' }
        }
    },
    {
        id: 'civilization6',
        title: "Цивілізація VI Сіда Мейєра",
        category: 'strategy',
        short_desc: 'Глобальна покрокова стратегія, де ви будуєте імперію, що витримає випробування часом.',
        full_desc: "Civilization VI пропонує нові способи взаємодії з вашим світом, розширення вашої імперії, просування вашої культури та змагання з найвидатнішими лідерами історії, щоб побудувати цивілізацію, яка витримає випробування часом. Досліджуйте нові землі, розвивайте технології, ведіть дипломатію та війну, і ведіть свою націю від кам'яного віку до інформаційної ери.",
        os_supported: ['Windows', 'macOS', 'Linux'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg?t=1680024470',
        price: 799,
        system_requirements: {
            minimum: { os: 'Windows 7x64 / Windows 8.1x64 / Windows 10x64', processor: 'Intel Core i3 2.5 ГГц або AMD Phenom II 2.6 ГГц або краще', memory: '4 ГБ ОЗП', graphics: '1 ГБ & AMD 5570 або nVidia 450 або Intel Integrated Graphics 530', storage: '12 ГБ' },
            recommended: { os: 'Windows 7x64 / Windows 8.1x64 / Windows 10x64', processor: 'Fourth Generation Intel Core i5 2.5 ГГц або AMD FX8350 4.0 ГГц або краще', memory: '8 ГБ ОЗП', graphics: '2ГБ & AMD 7970 або nVidia 770 або краще', storage: '12 ГБ' }
        }
    },
    {
        id: 'streetfighter6',
        title: 'Street Fighter 6',
        category: 'action',
        short_desc: 'Нова ера файтингів з інноваційними режимами та яскравими персонажами.',
        full_desc: 'Ось і новий претендент від Capcom! Street Fighter™ 6 виходить на світову арену та представляє собою наступний ступінь еволюції серії Street Fighter™. Гра працює на власному рушії Capcom RE ENGINE та охоплює три різні ігрові режими: Fighting Ground (класичні бої), World Tour (однокористувацька сюжетна пригода) та Battle Hub (онлайн-центр для спілкування та змагань).',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/header.jpg?t=1700608512',
        price: 1699,
        system_requirements: {
            minimum: { os: 'Windows 10 (64 bit required)', processor: 'Intel Core i5-7500 / AMD Ryzen 3 1200', memory: '8 ГБ ОЗП', graphics: 'GTX1060 (VRAM 6ГБ) / Radeon RX 580 (VRAM 4ГБ)', storage: '60 ГБ' },
            recommended: { os: 'Windows 10 (64 bit required) / Windows 11', processor: 'Intel Core i7 8700 / AMD Ryzen 5 3600', memory: '16 ГБ ОЗП', graphics: 'RTX2070 / Radeon RX 5700XT', storage: '60 ГБ' }
        }
    },
    {
        id: 'thelastofuspart1',
        title: 'Останні з нас: Частина I',
        category: 'action',
        short_desc: 'Повністю перероблена версія культової гри про виживання у постапокаліптичному світі.',
        full_desc: 'Переживіть улюблену історію та незабутніх персонажів у «Останні з нас™: Частина I». Повністю перероблена для ПК версія з безліччю поліпшень, включаючи повну підтримку DualSense™, покращену графіку та багато іншого. У зруйнованій цивілізації, де лютують заражені та загартовані вцілілі, Джоел, стомлений головний герой, найнятий, щоб вивезти 14-річну Еллі з військової карантинної зони. Те, що починається як невелика робота, незабаром перетворюється на жорстоку, небезпечну подорож.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/header.jpg?t=1699037428',
        price: 1699,
        system_requirements: {
            minimum: { os: 'Windows 10 (Версія 1909 або новіша)', processor: 'AMD Ryzen 5 1500X, Intel Core i7-4770K', memory: '16 ГБ ОЗП', graphics: 'AMD Radeon RX 470 (4 ГБ), AMD Radeon RX 6500 XT (4 ГБ), NVIDIA GeForce GTX 970 (4 ГБ), NVIDIA GeForce 1050 Ti (4 ГБ)', storage: '100 ГБ SSD' },
            recommended: { os: 'Windows 10 (Версія 1909 або новіша)', processor: 'AMD Ryzen 5 3600X, Intel Core i7-8700', memory: '16 ГБ ОЗП', graphics: 'AMD Radeon RX 5700 XT (8 ГБ), AMD Radeon RX 6600 XT (8 ГБ), NVIDIA GeForce RTX 2070 SUPER (8 ГБ), NVIDIA GeForce RTX 3060 (8 ГБ)', storage: '100 ГБ SSD' }
        }
    },
    {
        id: 'godofwar2018',
        title: 'Бог Війни (2018)',
        category: 'action',
        short_desc: 'Кратос та його син Атрей вирушають у небезпечну подорож світом скандинавських міфів.',
        full_desc: 'Помстившись богам Олімпу, Кратос тепер живе як людина в царстві скандинавських богів і монстрів. Саме в цьому суворому, невблаганному світі він повинен боротися, щоб вижити… і навчити свого сина робити те саме. Ця разюче переосмислення God of War поєднує в собі всі відмінні риси культової серії — жорстокі бої, епічні сутички з босами та захоплюючий дух масштаб — і поєднує їх з потужним та зворушливим оповіданням, яке відновлює світ Кратоса та його стосунки з сином.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg?t=1695755958',
        price: 1199,
        system_requirements: {
            minimum: { os: 'Windows 10 64-bit (версія 1809)', processor: 'Intel i5-2500k (4 ядра 3.3 ГГц) або AMD Ryzen 3 1200 (4 ядра 3.1 ГГц)', memory: '8 ГБ ОЗП', graphics: 'NVIDIA GTX 960 (4 ГБ) або AMD R9 290X (4 ГБ)', storage: '70 ГБ HDD (рекомендовано SSD)' },
            recommended: { os: 'Windows 10 64-bit (версія 1809)', processor: 'Intel i5-6600k (4 ядра 3.5 ГГц) або AMD Ryzen 5 2400 G (4 ядра 3.6 ГГц)', memory: '8 ГБ ОЗП', graphics: 'NVIDIA GTX 1060 (6 ГБ) або AMD RX 570 (4 ГБ)', storage: '70 ГБ SSD' }
        }
    },
    {
        id: 'pathofexile',
        title: 'Path of Exile',
        category: 'rpg',
        short_desc: 'Безкоштовна онлайн Action RPG у похмурому фентезі-світі з глибокою кастомізацією.',
        full_desc: 'Path of Exile — це безкоштовна онлайн Action RPG, дія якої відбувається у темному фентезійному світі Ре́класта. Ви — вигнанець, що бореться за виживання на проклятому континенті. Гра відома своєю складною системою предметів, величезним деревом пасивних навичок, регулярними оновленнями та чесною моделлю монетизації (тільки косметика).',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/238960/header.jpg?t=1700672089',
        price: 0,
        system_requirements: {
            minimum: { os: 'Windows 7 SP1/8/10', processor: 'x86-сумісний 2.6ГГц або краще', memory: '4 ГБ ОЗП', graphics: 'NVIDIA® GeForce® GTX 650 Ti або ATI Radeon™ HD 7850 або краще', storage: '40 ГБ' },
            recommended: { os: 'Windows 10', processor: 'x64-сумісний, чотириядерний, 3.2ГГц або краще', memory: '8 ГБ ОЗП', graphics: 'NVIDIA® GeForce® GTX 1050 Ti або ATI Radeon™ RX560 або краще', storage: '40 ГБ SSD' }
        }
    },
    {
        id: 'stalker2',
        title: 'S.T.A.L.K.E.R. 2: Серце Чорнобиля',
        category: 'rpg',
        short_desc: 'Довгоочікуване продовження легендарної серії про виживання у Чорнобильській Зоні.',
        full_desc: 'Чорнобильська Зона Відчуження кардинально змінилася після другого потужного вибуху в 2006 році. Жорстокі мутанти, смертоносні аномалії та ворогуючі фракції зробили Зону місцем, де дуже важко вижити. Проте, артефакти неймовірної цінності ваблять багатьох людей, яких називають сталкерами. Вони проникають у Зону на свій страх і ризик, прагнучи розбагатіти на цьому або навіть знайти Правду, приховану в Серці Чорнобиля. На вас чекає нелінійний сюжет, величезний відкритий світ та атмосфера справжнього постапокаліпсису.',
        os_supported: ['Windows'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1643320/header.jpg?t=1695828365',
        price: 1499,
        system_requirements: {
            minimum: { os: 'Windows 10 / Windows 11', processor: 'AMD Ryzen 5 1600X / Intel Core i5-7600K', memory: '8 ГБ ОЗП', graphics: 'AMD Radeon RX 580 8ГБ / NVIDIA GeForce GTX 1060 6ГБ', storage: '150 ГБ SSD' },
            recommended: { os: 'Windows 10 / Windows 11', processor: 'AMD Ryzen 7 3700X / Intel Core i7-9700K', memory: '16 ГБ ОЗП', graphics: 'AMD Radeon RX 5700 XT 8ГБ / NVIDIA GeForce RTX 2070 SUPER 8ГБ / NVIDIA GeForce GTX 1080 Ti 11ГБ', storage: '150 ГБ SSD' }
        }
    },
    {
        id: 'metroexodus',
        title: 'Метро: Вихід',
        category: 'action',
        short_desc: 'Залишіть руїни московського метро та вирушайте в епічну подорож постапокаліптичною Росією.',
        full_desc: 'Metro Exodus — це епічний сюжетний шутер від першої особи від 4A Games, що поєднує смертельні бої та стелс із дослідженням та жахом виживання в одному з найбільш захоплюючих ігрових світів, коли-небудь створених. Втечіть із розбитих руїн мертвої Москви та вирушайте в епічну, трансконтинентальну подорож постапокаліптичною Росією у найбільшій пригоді Metro на сьогодні, що охоплює цілий рік.',
        os_supported: ['Windows', 'macOS', 'Linux'],
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/412020/header.jpg?t=1698770034',
        price: 499,
        system_requirements: {
            minimum: { os: 'Windows 7/8/10', processor: 'Intel Core i5-4440 або еквівалент', memory: '8 ГБ ОЗП', graphics: 'GeForce GTX 670 / GeForce GTX 1050 / AMD Radeon HD 7870', storage: '59 ГБ' },
            recommended: { os: 'Windows 10', processor: 'Intel Core i7-4770k або еквівалент', memory: '8 ГБ ОЗП', graphics: 'GeForce GTX 1070 / GeForce RTX 2060 / AMD RX VEGA 56', storage: '59 ГБ' }
        }
    },
]);

export function useProductsStore() {
    const getProductById = (id) => {
        return allProducts.value.find(p => p.id === id);
    }
    const categories = computed(() => {
        const uniqueCategoriesSet = new Set(allProducts.value.map(p => p.category));
        const uniqueCategoriesArray = ['all', ...Array.from(uniqueCategoriesSet).sort()];
        return uniqueCategoriesArray;
    });

    return {
        allProducts,
        getProductById,
        categories
    }
}