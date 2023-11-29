//Сокращение PPP - Plant protection products

export const products = [
    {
        id: 1,
        name: "Петуния Софистика",
        alt: "Петуния Софистика F1",
        img: [
            require("./img/product/petunia/petunia.png"),
            require("./img/product/petunia/petuniaTwo.png"),
            require("./img/product/petunia/petuniaThree.png")
        ],
        price: 10,
        totalPrice: 10,
        to: "petunia",
        priceFor: [1, 5, 10, 15],
        count: 1,
        catalog: "seeds",
        category: "flowers",
        manufacturer: "nertys",
        quantitativeStock: 10,
    },
    {
        id: 2,
        name: "Скор",
        alt: "Скор",
        img: [
            require("./img/product/skor/skor.png"),
            require("./img/product/skor/skorTwo.png"),
            require("./img/product/skor/skorThree.png"),
        ],
        price: 19,
        totalPrice: 19,
        to: "skor",
        priceFor: [1, 4, 6],
        count: 1,
        catalog: "PPP",
        category: "fungicides",
        manufacturer: "basf",
        quantitativeStock: 12,
    },
    {
        id: 3,
        name: "Хорус",
        alt: "Хорус",
        img: [
            require("./img/product/horys/horys.png"),
            require("./img/product/horys/horysTwo.png"),
            require("./img/product/horys/horysThree.png"),
        ],
        price: 23,
        totalPrice: 23,
        to: "horys",
        priceFor: [1, 3, 5],
        count: 1,
        catalog: "PPP",
        category: "fungicides",
        manufacturer: "bayer",
        quantitativeStock: 10,
    },
    {
        id: 4,
        name: "Агрикола",
        alt: "Агрикола, удобрение для орхидей",
        img: [
            require("./img/product/agrikola/agrikola.png"),
            require("./img/product/agrikola/agrikolaTwo.png"),
            require("./img/product/agrikola/agrikolaThree.png"),
            require("./img/product/agrikola/agrikolaFour.png"),
        ],
        price: 31,
        totalPrice: 31,
        to: "agrikola",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "fertilizer",
        category: "universal",
        manufacturer: "stephes",
        quantitativeStock: 10,
    },
    {
        id: 5,
        name: "Фитоспорин-М Антигниль",
        alt: "Фитоспорин-М Антигниль",
        img: [
            require("./img/product/phytosporin/phytosporin.png"),
            require("./img/product/phytosporin/phytosporinTwo.png"),
            require("./img/product/phytosporin/phytosporinThree.png"),
        ],
        price: 82,
        totalPrice: 82,
        to: "phytosporinAnti",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "fungicides",
        manufacturer: "gdz",
        quantitativeStock: 12,
    },
    {
        id: 6,
        name: "Фитоспорин-М, Рассада",
        alt: "Фитоспорин-М, Рассада",
        img: [require("./img/product/phytosporinSeedlings/phytosporinSeedlings.png")],
        price: 65,
        totalPrice: 65,
        to: "phytosporinSeedlings",
        priceFor: [1, 3, 5],
        count: 1,
        catalog: "PPP",
        category: "fungicides",
        manufacturer: "basf",
        quantitativeStock: 10,
    },
    {
        id: 7,
        name: "Топаз",
        alt: "Топаз, средство от болезней растений",
        img: [
            require("./img/product/topaz/topaz.png"),
            require("./img/product/topaz/topazTwo.png"),
        ],
        price: 91,
        totalPrice: 91,
        to: "topaz",
        priceFor: [1, 4, 6],
        count: 1,
        catalog: "PPP",
        category: "fungicides",
        manufacturer: "nertys",
        quantitativeStock: 9,
    },
    {
        id: 8,
        name: "Раундап от сорняков",
        alt: "Раундап от сорняков",
        img: [require("./img/product/roundup/roundup.png")],
        price: 15,
        totalPrice: 15,
        to: "roundup",
        priceFor: [1, 5, 10, 15],
        count: 1,
        catalog: "PPP",
        category: "herbicides",
        manufacturer: "gdz",
        quantitativeStock: 12,
    },
    {
        id: 9,
        name: "Риманол",
        alt: "Риманол, средство от сорняков",
        img: [
            require("./img/product/rimanol/rimanol.png"),
            require("./img/product/rimanol/rimanolTwo.png"),
        ],
        price: 22,
        totalPrice: 22,
        to: "rimanol",
        priceFor: [1, 4, 6],
        count: 1,
        catalog: "PPP",
        category: "herbicides",
        manufacturer: "gdz",
        quantitativeStock: 9,
    },
    {
        id: 10,
        name: "Линтур",
        alt: "Линтур",
        img: [require("./img/product/lintur/lintur.png")],
        price: 34,
        totalPrice: 34,
        to: "lintur",
        priceFor: [1, 5, 10, 15],
        count: 1,
        catalog: "PPP",
        category: "herbicides",
        manufacturer: "basf",
        quantitativeStock: 12,
    },
    {
        id: 11,
        name: "Спрут экстра",
        alt: "Спрут экстра",
        img: [
            require("./img/product/sprut/sprut.png"),
            require("./img/product/sprut/sprutTwo.png"),
            require("./img/product/sprut/sprutThree.png"),
        ],
        price: 48,
        totalPrice: 48,
        to: "sprut",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "herbicides",
        manufacturer: "bayer",
        quantitativeStock: 12,
    },
    {
        id: 12,
        name: "Стриж",
        alt: "Стриж, средство от сорняков",
        img: [
            require("./img/product/strizh/strizh.png"),
            require("./img/product/strizh/strizhTwo.png"),
            require("./img/product/strizh/strizhThree.png"),
        ],
        price: 45,
        totalPrice: 45,
        to: "strizh",
        priceFor: [1, 3, 5],
        count: 1,
        catalog: "PPP",
        category: "herbicides",
        manufacturer: "basf",
        quantitativeStock: 9,
    },
    {
        id: 13,
        name: "Рубит Санти",
        alt: "Рубит Санти, средство от сорняков",
        img: [require("./img/product/rubit/rubit.png")],
        price: 54,
        totalPrice: 54,
        to: "rubit",
        priceFor: [1, 5, 10, 15],
        count: 1,
        catalog: "PPP",
        category: "herbicides",
        manufacturer: "nertys",
        quantitativeStock: 12,
    },
    {
        id: 14,
        name: "Актара",
        alt: "Актара",
        img: [require("./img/product/aktara/aktara.png"),],
        price: 78,
        totalPrice: 78,
        to: "aktara",
        priceFor: [1, 3, 5],
        count: 1,
        catalog: "PPP",
        category: "insecticides",
        manufacturer: "stephes",
        quantitativeStock: 12,
    },
    {
        id: 15,
        name: "Арубарин инсектицид",
        alt: "Арубарин инсектицид",
        img: [
            require("./img/product/arubarin/arubarin.png"),
            require("./img/product/arubarin/arubarinTwo.png"),
            require("./img/product/arubarin/arubarinThree.png"),
        ],
        price: 56,
        totalPrice: 56,
        to: "arubarin",
        priceFor: [1, 4, 6],
        count: 1,
        catalog: "PPP",
        category: "insecticides",
        manufacturer: "gdz",
        quantitativeStock: 10,
    },
    {
        id: 16,
        name: "Мовенто Энерджи",
        alt: "Мовенто Энерджи",
        img: [
            require("./img/product/movento/movento.png"),
            require("./img/product/movento/moventoTwo.png"),
            require("./img/product/movento/moventoThree.png"),
        ],
        price: 78,
        totalPrice: 78,
        to: "movento",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "insecticides",
        manufacturer: "gdz",
        quantitativeStock: 14,
    },
    {
        id: 17,
        name: "Моспилан",
        alt: "Моспилан",
        img: [
            require("./img/product/mospilan/mospilan.png"),
            require("./img/product/mospilan/mospilanTwo.png"),
        ],
        price: 44,
        totalPrice: 44,
        to: "mospilan",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "insecticides",
        manufacturer: "stephes",
        quantitativeStock: 14,
    },
    {
        id: 18,
        name: "Алирин Б",
        alt: "Алирин Б",
        img: [require("./img/product/alirin/alirin.png")],
        price: 35,
        totalPrice: 35,
        to: "alirin",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "protectants",
        manufacturer: "bayer",
        quantitativeStock: 20,
    },
    {
        id: 19,
        name: "Каратэ Зеон",
        alt: "Каратэ Зеон",
        img: [
            require("./img/product/karatezeon/karatezeon.png"),
            require("./img/product/karatezeon/karatezeonTwo.png"),
        ],
        price: 98,
        totalPrice: 98,
        to: "karatezeon",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "protectants",
        manufacturer: "gdz",
        quantitativeStock: 14,
    },
    {
        id: 20,
        name: "Стрекар КС",
        alt: "Стрекар КС",
        img: [require("./img/product/strekar/strekar.png")],
        price: 63,
        totalPrice: 63,
        to: "strekar",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "protectants",
        manufacturer: "nertys",
        quantitativeStock: 20,
    },
    {
        id: 21,
        name: "Гамаир овощи",
        alt: "Гамаир овощи",
        img: [
            require("./img/product/gamair/gamair.png"),
        ],
        price: 34,
        totalPrice: 34,
        to: "gamair",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "protectants",
        manufacturer: "bayer",
        quantitativeStock: 20,
    },
    {
        id: 22,
        name: "Чистогряд",
        alt: "Чистогряд, средство от сорняков",
        img: [require("./img/product/chistogryad/chistogryad.png")],
        price: 87,
        totalPrice: 87,
        to: "chistogryad",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "desiccants",
        manufacturer: "stephes",
        quantitativeStock: 14,
    },
    {
        id: 23,
        name: "Торнадо",
        alt: "Торнадо, средство от сорняков",
        img: [
            require("./img/product/tornado/tornado.png"),
            require("./img/product/tornado/tornadoTwo.png"),
            require("./img/product/tornado/tornadoThree.png"),
            require("./img/product/tornado/tornadoFour.png"),
        ],
        price: 87,
        totalPrice: 87,
        to: "tornado",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "desiccants",
        manufacturer: "bayer",
        quantitativeStock: 14,
    },
    {
        id: 24,
        name: "Прилипатель ЖУСС Аква",
        alt: "Прилипатель - адъювант ЖУСС Аква",
        img: [
            require("./img/product/prilipatel/prilipatel.png"),
            require("./img/product/prilipatel/prilipatelTwo.png"),
            require("./img/product/prilipatel/prilipatelThree.png"),
        ],
        price: 30,
        totalPrice: 30,
        to: "prilipatel",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "adjuvants",
        manufacturer: "stephes",
        quantitativeStock: 20,
    },
    {
        id: 25,
        name: "Флорабис",
        alt: "Флорабис",
        img: [
            require("./img/product/florabis/florabis.png"),
            require("./img/product/florabis/florabisTwo.png"),
            require("./img/product/florabis/florabisThree.png"),
            require("./img/product/florabis/florabisFour.png"),
        ],
        price: 40,
        totalPrice: 40,
        to: "florabis",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "adjuvants",
        manufacturer: "bayer",
        quantitativeStock: 20,
    },
    {
        id: 26,
        name: "Плантафол",
        alt: "Плантафол",
        img: [
            require("./img/product/plantafol/plantafol.png"),
            require("./img/product/plantafol/plantafolTwo.png"),
            require("./img/product/plantafol/plantafolThree.png"),
            require("./img/product/plantafol/plantafolFour.png"),
        ],
        price: 20,
        totalPrice: 20,
        to: "plantafol",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "adjuvants",
        manufacturer: "basf",
        quantitativeStock: 14,
    },
    {
        id: 27,
        name: "Алар Голд",
        alt: "Алар Голд",
        img: [require("./img/product/alar/alar.png")],
        price: 80,
        totalPrice: 80,
        to: "alar",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "rodenticides",
        manufacturer: "nertys",
        quantitativeStock: 20,
    },
    {
        id: 28,
        name: "Регулар, ВРП",
        alt: "Регулар, ВРП",
        img: [require("./img/product/regular/regular.png")],
        price: 50,
        totalPrice: 50,
        to: "regular",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "rodenticides",
        manufacturer: "gdz",
        quantitativeStock: 14,
    },
    {
        id: 29,
        name: "Ратобор",
        alt: "Ратобор",
        img: [
            require("./img/product/ratobor/ratobor.png"),
            require("./img/product/ratobor/ratoborTwo.png"),
            require("./img/product/ratobor/ratoborThree.png"),
            require("./img/product/ratobor/ratoborFour.png"),
        ],
        price: 90,
        totalPrice: 90,
        to: "ratobor",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "retardants",
        manufacturer: "bayer",
        quantitativeStock: 14,
    },
    {
        id: 30,
        name: "Nadzor от мышей и крыс",
        alt: "Nadzor, гранулы от мышей и крыс",
        img: [
            require("./img/product/nadzor/nadzor.png"),
            require("./img/product/nadzor/nadzorTwo.png"),
            require("./img/product/nadzor/nadzorThree.png"),
            require("./img/product/nadzor/nadzorFour.png"),
        ],
        price: 39,
        totalPrice: 39,
        to: "nadzor",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "retardants",
        manufacturer: "basf",
        quantitativeStock: 20,
    },
    {
        id: 31,
        name: "Бродефор",
        alt: "Бродефор",
        img: [
            require("./img/product/brodefor/brodefor.png"),
        ],
        price: 65,
        totalPrice: 65,
        to: "brodefor",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "PPP",
        category: "retardants",
        manufacturer: "nertys",
        quantitativeStock: 20,
    },
    {
        id: 32,
        name: "Астра, Серебряная башня",
        alt: "Астра, Серебряная башня",
        img: [
            require("./img/product/astra/astra.png"),
            require("./img/product/astra/astraTwo.png"),
        ],
        price: 73,
        totalPrice: 73,
        to: "astra",
        priceFor: [1, 3, 6],
        count: 1,
        catalog: "seeds",
        category: "flowers",
        manufacturer: "basf",
        quantitativeStock: 15,
    },
    {
        id: 33,
        name: "Георгин гибридный",
        alt: "Георгин гибридный",
        img: [
            require("./img/product/georgin/georgin.png"),
        ],
        price: 156,
        totalPrice: 156,
        to: "georgin",
        priceFor: [1, 10, 15],
        count: 1,
        catalog: "seeds",
        category: "flowers",
        manufacturer: "bayer",
        quantitativeStock: 20,
    },
    {
        id: 34,
        name: "Дельфиниум многолетний",
        alt: "Дельфиниум многолетний",
        img: [
            require("./img/product/delfinium/delfinium.png"),
            require("./img/product/delfinium/delfiniumTwo.png"),
            require("./img/product/delfinium/delfiniumThree.png"),
            require("./img/product/delfinium/delfiniumFour.png"),
        ],
        price: 147,
        totalPrice: 147,
        to: "delfinium",
        priceFor: [1, 3, 7],
        count: 1,
        catalog: "seeds",
        category: "flowers",
        manufacturer: "bayer",
        quantitativeStock: 10,
    },
    {
        id: 35,
        name: "Лантана",
        alt: "Лантана",
        img: [
            require("./img/product/lantana/lantana.png"),
            require("./img/product/lantana/lantanaTwo.png"),
            require("./img/product/lantana/lantanaThree.png"),
            require("./img/product/lantana/lantanaFour.png"),
        ],
        price: 538,
        totalPrice: 538,
        to: "lantana",
        priceFor: [1, 5, 9],
        count: 1,
        catalog: "seeds",
        category: "flowers",
        manufacturer: "basf",
        quantitativeStock: 8,
    },
    {
        id: 36,
        name: "Плюмерия Микс",
        alt: "Плюмерия Микс",
        img: [
            require("./img/product/plyumeriya/plyumeriya.png"),
            require("./img/product/plyumeriya/plyumeriyaTwo.png"),
        ],
        price: 86,
        totalPrice: 86,
        to: "plyumeriya",
        priceFor: [1, 4, 10],
        count: 1,
        catalog: "seeds",
        category: "flowers",
        manufacturer: "bayer",
        quantitativeStock: 25,
    },
    {
        id: 37,
        name: "Гацания гибридная",
        alt: "Гацания гибридная",
        img: [
            require("./img/product/gatsaniya/gatsaniya.png"),
            require("./img/product/gatsaniya/gatsaniyaTwo.png"),
            require("./img/product/gatsaniya/gatsaniyaThree.png"),
        ],
        price: 17,
        totalPrice: 17,
        to: "gatsaniya",
        priceFor: [1, 5, 15],
        count: 1,
        catalog: "seeds",
        category: "flowers",
        manufacturer: "basf",
        quantitativeStock: 5,
    },
    {
        id: 38,
        name: "Гвоздика",
        alt: "Гвоздика",
        img: [
            require("./img/product/gvozdika/gvozdika.png"),
        ],
        price: 129,
        totalPrice: 129,
        to: "gvozdika",
        priceFor: [1, 5, 15],
        count: 1,
        catalog: "seeds",
        category: "flowers",
        manufacturer: "nertys",
        quantitativeStock: 5,
    },
    {
        id: 39,
        name: "Огурец",
        alt: "Огурец",
        img: [
            require("./img/product/cucumber/cucumber.png"),
            require("./img/product/cucumber/cucumberTwo.png"),
            require("./img/product/cucumber/cucumberThree.png"),
            require("./img/product/cucumber/cucumberFour.png"),
        ],
        price: 99,
        totalPrice: 99,
        to: "cucumber",
        priceFor: [1, 3, 10],
        count: 1,
        catalog: "seeds",
        category: "vegetables",
        manufacturer: "basf",
        quantitativeStock: 22,
    },
    {
        id: 40,
        name: "Свекла Пабло",
        alt: "Свекла Пабло",
        img: [
            require("./img/product/beetroot/beetroot.png"),
            require("./img/product/beetroot/beetrootTwo.png"),
            require("./img/product/beetroot/beetrootThree.png"),
        ],
        price: 65,
        totalPrice: 65,
        to: "beetroot",
        priceFor: [1, 5, 12],
        count: 1,
        catalog: "seeds",
        category: "vegetables",
        manufacturer: "nertys",
        quantitativeStock: 22,
    },
    {
        id: 41,
        name: "Томат низкорослый",
        alt: "Томат низкорослый",
        img: [
            require("./img/product/tomato/tomato.png"),
        ],
        price: 116,
        totalPrice: 116,
        to: "tomato",
        priceFor: [1, 4, 10],
        count: 1,
        catalog: "seeds",
        category: "vegetables",
        manufacturer: "nertys",
        quantitativeStock: 9,
    },
    {
        id: 42,
        name: "Перец острый",
        alt: "Перец острый",
        img: [
            require("./img/product/pepper/pepper.png"),
            require("./img/product/pepper/pepperTwo.png"),
        ],
        price: 126,
        totalPrice: 126,
        to: "pepper",
        priceFor: [1, 4, 10],
        count: 1,
        catalog: "seeds",
        category: "vegetables",
        manufacturer: "basf",
        quantitativeStock: 30,
    },
    {
        id: 43,
        name: "Морковь Роте",
        alt: "Морковь Роте",
        img: [
            require("./img/product/carrot/carrot.png"),
            require("./img/product/carrot/carrotTwo.png"),
        ],
        price: 63,
        totalPrice: 63,
        to: "carrot",
        priceFor: [1, 5, 8],
        count: 1,
        catalog: "seeds",
        category: "vegetables",
        manufacturer: "nertys",
        quantitativeStock: 13,
    },
    {
        id: 44,
        name: "Укроп",
        alt: "Укроп",
        img: [
            require("./img/product/dill/dill.png"),
        ],
        price: 141,
        totalPrice: 141,
        to: "dill",
        priceFor: [1, 3, 12],
        count: 1,
        catalog: "seeds",
        category: "greenery",
        manufacturer: "nertys",
        quantitativeStock: 9,
    },
    {
        id: 45,
        name: "Петрушка",
        alt: "Петрушка",
        img: [
            require("./img/product/petrushka/petrushka.png"),
            require("./img/product/petrushka/petrushkaTwo.png"),
            require("./img/product/petrushka/petrushkaThree.png"),
        ],
        price: 106,
        totalPrice: 106,
        to: "petrushka",
        priceFor: [1, 4, 8],
        count: 1,
        catalog: "seeds",
        category: "greenery",
        manufacturer: "nertys",
        quantitativeStock: 14,
    },
    {
        id: 46,
        name: "Сельдерей",
        alt: "Сельдерей",
        img: [
            require("./img/product/selderey/selderey.png"),
        ],
        price: 96,
        totalPrice: 96,
        to: "selderey",
        priceFor: [1, 3, 9],
        count: 1,
        catalog: "seeds",
        category: "greenery",
        manufacturer: "nertys",
        quantitativeStock: 14,
    },
    {
        id: 47,
        name: "Корневин для растений",
        alt: "Корневин для растений",
        img: [
            require("./img/product/kornevin/kornevin.png"),
            require("./img/product/kornevin/kornevinTwo.png"),
            require("./img/product/kornevin/kornevinThree.png"),
        ],
        price: 64,
        totalPrice: 64,
        to: "kornevin",
        priceFor: [1, 3, 6],
        count: 1,
        catalog: "fertilizer",
        category: "universal",
        manufacturer: "gdz",
        quantitativeStock: 10,
    },
    {
        id: 48,
        name: "Terra Aquatica TriPart",
        alt: "Terra Aquatica TriPart",
        img: [
            require("./img/product/terra/terra.png"),
        ],
        price: 59,
        totalPrice: 59,
        to: "terra",
        priceFor: [1, 3, 6],
        count: 1,
        catalog: "fertilizer",
        category: "universal",
        manufacturer: "gdz",
        quantitativeStock: 10,
    },
    {
        id: 49,
        name: "Аминоким БОМБАРДИР",
        alt: "Аминоким БОМБАРДИР",
        img: [
            require("./img/product/aminokim/aminokim.png"),
            require("./img/product/aminokim/aminokimTwo.png"),
            require("./img/product/aminokim/aminokimThree.png"),
            require("./img/product/aminokim/aminokimFour.png"),
        ],
        price: 55,
        totalPrice: 55,
        to: "aminokim",
        priceFor: [1, 3, 6],
        count: 1,
        catalog: "fertilizer",
        category: "universal",
        manufacturer: "stephes",
        quantitativeStock: 100,
    },
    {
        id: 50,
        name: "Canna Cannaboost",
        alt: "Canna Cannaboost",
        img: [
            require("./img/product/canna/canna.png"),
            require("./img/product/canna/cannaTwo.png"),
        ],
        price: 64,
        totalPrice: 64,
        to: "canna",
        priceFor: [1, 3, 6],
        count: 1,
        catalog: "fertilizer",
        category: "universal",
        manufacturer: "gdz",
        quantitativeStock: 10,
    },
    {
        id: 51,
        name: "Ломонософф",
        alt: "Ломонософф",
        img: [
            require("./img/product/lomonosoff/lomonosoff.png"),
            require("./img/product/lomonosoff/lomonosoffTwo.png"),
            require("./img/product/lomonosoff/lomonosoffThree.png"),
            require("./img/product/lomonosoff/lomonosoffFour.png"),
        ],
        price: 30,
        totalPrice: 30,
        to: "lomonosoff",
        priceFor: [1, 5, 9],
        count: 1,
        catalog: "fertilizer",
        category: "forflowers",
        manufacturer: "stephes",
        quantitativeStock: 13,
    },
    {
        id: 52,
        name: "Осмокот",
        alt: "Осмокот",
        img: [
            require("./img/product/osmokot/osmokot.png"),
            require("./img/product/osmokot/osmokotTwo.png"),
            require("./img/product/osmokot/osmokotThree.png"),
            require("./img/product/osmokot/osmokotFour.png"),
            require("./img/product/osmokot/osmokotFive.png"),
        ],
        price: 67,
        totalPrice: 67,
        to: "osmokot",
        priceFor: [1, 5, 15],
        count: 1,
        catalog: "fertilizer",
        category: "forflowers",
        manufacturer: "gdz",
        quantitativeStock: 9,
    },
    {
        id: 53,
        name: "Органик Микс",
        alt: "Органик Микс",
        img: [
            require("./img/product/organik/organik.png"),
            require("./img/product/organik/organikTwo.png"),
            require("./img/product/organik/organikThree.png"),
            require("./img/product/organik/organikFour.png"),
        ],
        price: 67,
        totalPrice: 67,
        to: "organik",
        priceFor: [1, 3, 8],
        count: 1,
        catalog: "fertilizer",
        category: "forflowers",
        manufacturer: "gdz",
        quantitativeStock: 15,
    },
    {
        id: 54,
        name: "Биогумус",
        alt: "Биогумус",
        img: [
            require("./img/product/biogumus/biogumus.png"),
            require("./img/product/biogumus/biogumusTwo.png"),
            require("./img/product/biogumus/biogumusThree.png"),
            require("./img/product/biogumus/biogumusFour.png"),
        ],
        price: 92,
        totalPrice: 92,
        to: "biogumus",
        priceFor: [1, 5, 10],
        count: 1,
        catalog: "fertilizer",
        category: "forvegetables",
        manufacturer: "stephes",
        quantitativeStock: 10,
    },
    {
        id: 55,
        name: "Плантафол",
        alt: "Плантафол",
        img: [
            require("./img/product/plantafol/plantafol.png"),
            require("./img/product/plantafol/plantafolTwo.png"),
            require("./img/product/plantafol/plantafolThree.png"),
            require("./img/product/plantafol/plantafolFour.png"),
        ],
        price: 30,
        totalPrice: 30,
        to: "plantafolfertilizer",
        priceFor: [1, 4, 8],
        count: 1,
        catalog: "fertilizer",
        category: "forvegetables",
        manufacturer: "gdz",
        quantitativeStock: 20,
    },
    {
        id: 56,
        name: "Брексил",
        alt: "Брексил",
        img: [
            require("./img/product/breksil/breksil.png"),
        ],
        price: 59,
        totalPrice: 59,
        to: "breksilfertilizer",
        priceFor: [1, 4, 8],
        count: 1,
        catalog: "fertilizer",
        category: "forvegetables",
        manufacturer: "gdz",
        quantitativeStock: 15,
    },
    {
        id: 57,
        name: "Берес-4",
        alt: "Берес-4",
        img: [
            require("./img/product/beres/beres.png"),
            require("./img/product/beres/beresTwo.png"),
            require("./img/product/beres/beresThree.png"),
            require("./img/product/beres/beresFour.png"),
        ],
        price: 20,
        totalPrice: 20,
        to: "beres",
        priceFor: [1, 3, 10],
        count: 1,
        catalog: "fertilizer",
        category: "forvegetables",
        manufacturer: "stephes",
        quantitativeStock: 45,
    },
    {
        id: 58,
        name: "Хлорелла",
        alt: "Хлорелла",
        img: [
            require("./img/product/khlorella/khlorella.png"),
            require("./img/product/khlorella/khlorellaTwo.png"),
        ],
        price: 15,
        totalPrice: 15,
        to: "khlorella",
        priceFor: [1, 3, 8],
        count: 1,
        catalog: "fertilizer",
        category: "forflowers",
        manufacturer: "stephes",
        quantitativeStock: 10,
    },
    {
        id: 59,
        name: "Farmina",
        alt: "Farmina",
        img: [
            require("./img/product/farmina/farmina.png"),
            require("./img/product/farmina/farminaTwo.png"),
            require("./img/product/farmina/farminaThree.png"),
            require("./img/product/farmina/farminaFour.png"),
        ],
        price: 31,
        totalPrice: 31,
        to: "farmina",
        priceFor: [1, 3, 6, 9],
        count: 1,
        catalog: "feedgroup",
        category: "forcat",
        manufacturer: "stephes",
        quantitativeStock: 10,
    },
    {
        id: 60,
        name: "Fiskas",
        alt: "Fiskas",
        img: [
            require("./img/product/fiskas/fiskas.png"),
            require("./img/product/fiskas/fiskasTwo.png"),
            require("./img/product/fiskas/fiskasThree.png"),
            require("./img/product/fiskas/fiskasFour.png"),
        ],
        price: 64,
        totalPrice: 64,
        to: "fiskas",
        priceFor: [1, 3, 6],
        count: 1,
        catalog: "feedgroup",
        category: "forcat",
        manufacturer: "gdz",
        quantitativeStock: 10,
    },
    {
        id: 61,
        name: "Лапико",
        alt: "Лапико",
        img: [
            require("./img/product/lapico/lapico.png"),
        ],
        price: 59,
        totalPrice: 59,
        to: "lapico",
        priceFor: [1, 3, 6],
        count: 1,
        catalog: "feedgroup",
        category: "forcat",
        manufacturer: "gdz",
        quantitativeStock: 10,
    },
    {
        id: 62,
        name: "Hairball",
        alt: "Hairball",
        img: [
            require("./img/product/hairball/hairball.png"),
            require("./img/product/hairball/hairballTwo.png"),
            require("./img/product/hairball/hairballThree.png"),
            require("./img/product/hairball/hairballFour.png"),
        ],
        price: 55,
        totalPrice: 55,
        to: "hairball",
        priceFor: [1, 3, 6],
        count: 1,
        catalog: "feedgroup",
        category: "forcat",
        manufacturer: "stephes",
        quantitativeStock: 100,
    },
    {
        id: 63,
        name: "Leo&Lysi",
        alt: "Leo&Lysi",
        img: [
            require("./img/product/leolysi/leolysi.png"),
            require("./img/product/leolysi/leolysiTwo.png"),
            require("./img/product/leolysi/leolysiThree.png"),
            require("./img/product/leolysi/leolysiFour.png"),
        ],
        price: 64,
        totalPrice: 64,
        to: "leolysi",
        priceFor: [1, 3, 6],
        count: 1,
        catalog: "feedgroup",
        category: "forcat",
        manufacturer: "gdz",
        quantitativeStock: 10,
    },
    {
        id: 64,
        name: "Милаторк",
        alt: "Милаторк",
        img: [
            require("./img/product/milatork/milatork.png"),
            require("./img/product/milatork/milatorkTwo.png"),
        ],
        price: 30,
        totalPrice: 30,
        to: "milatork",
        priceFor: [1, 5, 9],
        count: 1,
        catalog: "feedgroup",
        category: "fordogs",
        manufacturer: "stephes",
        quantitativeStock: 13,
    },
    {
        id: 65,
        name: "KORWOOD",
        alt: "KORWOOD",
        img: [
            require("./img/product/korwood/korwood.png"),
            require("./img/product/korwood/korwoodTwo.png"),
            require("./img/product/korwood/korwoodThree.png"),
        ],
        price: 67,
        totalPrice: 67,
        to: "korwood",
        priceFor: [1, 5, 15],
        count: 1,
        catalog: "feedgroup",
        category: "fordogs",
        manufacturer: "gdz",
        quantitativeStock: 9,
    },
    {
        id: 66,
        name: "DARSI",
        alt: "DARSI",
        img: [
            require("./img/product/darsi/darsi.png"),
            require("./img/product/darsi/darsiTwo.png"),
            require("./img/product/darsi/darsiThree.png"),
            require("./img/product/darsi/darsiFour.png"),
        ],
        price: 67,
        totalPrice: 67,
        to: "darsi",
        priceFor: [1, 3, 8],
        count: 1,
        catalog: "feedgroup",
        category: "fordogs",
        manufacturer: "gdz",
        quantitativeStock: 15,
    },
    {
        id: 67,
        name: "Сено",
        alt: "Сено",
        img: [
            require("./img/product/seno/seno.png"),
            require("./img/product/seno/senoTwo.png"),
            require("./img/product/seno/senoThree.png"),
            require("./img/product/seno/senoFour.png"),
        ],
        price: 92,
        totalPrice: 92,
        to: "seno",
        priceFor: [1, 5, 10],
        count: 1,
        catalog: "feedgroup",
        category: "forsx",
        manufacturer: "stephes",
        quantitativeStock: 10,
    },
    {
        id: 68,
        name: "Овес",
        alt: "Овес",
        img: [
            require("./img/product/owes/owes.png"),
            require("./img/product/owes/owesTwo.png"),
            require("./img/product/owes/owesThree.png"),
            require("./img/product/owes/owesFour.png"),
        ],
        price: 30,
        totalPrice: 30,
        to: "owes",
        priceFor: [1, 4, 8],
        count: 1,
        catalog: "feedgroup",
        category: "forsx",
        manufacturer: "gdz",
        quantitativeStock: 20,
    },
    {
        id: 69,
        name: "Зерносмесь",
        alt: "Зерносмесь",
        img: [
            require("./img/product/zerno/zerno.png"),
            require("./img/product/zerno/zernoTwo.png"),
            require("./img/product/zerno/zernoThree.png"),
        ],
        price: 59,
        totalPrice: 59,
        to: "zerno",
        priceFor: [1, 4, 8],
        count: 1,
        catalog: "feedgroup",
        category: "forsx",
        manufacturer: "gdz",
        quantitativeStock: 15,
    },
    {
        id: 70,
        name: "Комбикорм",
        alt: "Комбикорм",
        img: [
            require("./img/product/kombikorm/kombikorm.png"),
            require("./img/product/kombikorm/kombikormTwo.png"),
            require("./img/product/kombikorm/kombikormThree.png"),
            require("./img/product/kombikorm/kombikormFour.png"),
        ],
        price: 20,
        totalPrice: 20,
        to: "kombikorm",
        priceFor: [1, 3, 10],
        count: 1,
        catalog: "feedgroup",
        category: "forsx",
        manufacturer: "stephes",
        quantitativeStock: 45,
    },
    {
        id: 71,
        name: "AlpenHof",
        alt: "AlpenHof",
        img: [
            require("./img/product/alpenhof/alpenhof.png"),
            require("./img/product/alpenhof/alpenhofTwo.png"),
            require("./img/product/alpenhof/alpenhofThree.png"),
            require("./img/product/alpenhof/alpenhofFour.png"),
        ],
        price: 15,
        totalPrice: 15,
        to: "alpenhof",
        priceFor: [1, 3, 8],
        count: 1,
        catalog: "feedgroup",
        category: "fordogs",
        manufacturer: "stephes",
        quantitativeStock: 10,
    },
]

export const manufacturers = [
    { key: "basf", name: "Басф" },
    { key: "nertys", name: "Нертус" },
    { key: "bayer", name: "Байер" },
    { key: "gdz", name: "ГДЗ" },
    { key: "stephes", name: "Штефес" },
];

export const cultures = [
    { key: "sunflower", name: "Подсолнечник" },
    { key: "corn", name: "Кукуруза" },
    { key: "wheat", name: "Пшеница" },
    { key: "barley", name: "Ячмень" },
    { key: "rapeseed", name: "Рапс" },
    { key: "soy", name: "Соя" },
    { key: "peas", name: "Горох" },
    { key: "pea", name: "Бобы" },
    { key: "mustard", name: "Горчица" },
    { key: "polkaDots", name: "Горошек" },
    { key: "breadbasket", name: "Житняк" },
    { key: "beans", name: "Фасоль" },
    { key: "clover", name: "Клевер" },
    { key: "ovsanitsa", name: "Овсяница" },
    { key: "timofeevka", name: "Тимофеевка" },
    { key: "triticale", name: "Тритикале" },
    { key: "sugarbeet", name: "Сахарная свекла" },
    { key: "fodderbeetroot", name: "Кормовая свекла" },
];
