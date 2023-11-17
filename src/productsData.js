//Сокращение PPP - Plant protection products

export const products = [
    [
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
            availability: "В наличии",
            priceFor: [1, 5, 10, 15],
            count: 1,
            catalog: "seeds",
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
            availability: "В наличии",
            priceFor: [1, 4, 6],
            count: 1,
            catalog: "PPP",
            category: "fungicides",
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
            availability: "В наличии",
            priceFor: [1, 3, 5],
            count: 1,
            catalog: "PPP",
            category: "fungicides",
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
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "fertilizer",
        },
    ],
    [
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
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "fungicides",
        },
        {
            id: 6,
            name: "Фитоспорин-М, Рассада",
            alt: "Фитоспорин-М, Рассада",
            img: [require("./img/product/phytosporinSeedlings/phytosporinSeedlings.png")],
            price: 65,
            totalPrice: 65,
            to: "horys",
            availability: "В наличии",
            priceFor: [1, 3, 5],
            count: 1,
            catalog: "PPP",
            category: "fungicides",
        },
        {
            id: 7,
            name: "Топаз, средство от болезней растений",
            alt: "Топаз, средство от болезней растений",
            img: [
                require("./img/product/topaz/topaz.png"),
                require("./img/product/topaz/topazTwo.png"),
            ],
            price: 91,
            totalPrice: 91,
            to: "skor",
            availability: "В наличии",
            priceFor: [1, 4, 6],
            count: 1,
            catalog: "PPP",
            category: "fungicides",
        },
        {
            id: 8,
            name: "Раундап от сорняков",
            alt: "Раундап от сорняков",
            img: [require("./img/product/roundup/roundup.png")],
            price: 15,
            totalPrice: 15,
            to: "petunia",
            availability: "В наличии",
            priceFor: [1, 5, 10, 15],
            count: 1,
            catalog: "PPP",
            category: "herbicides",
        },
    ],
    [
        {
            id: 9,
            name: "Риманол, средство от сорняков",
            alt: "Риманол, средство от сорняков",
            img: [
                require("./img/product/rimanol/rimanol.png"),
                require("./img/product/rimanol/rimanolTwo.png"),
            ],
            price: 22,
            totalPrice: 22,
            to: "skor",
            availability: "В наличии",
            priceFor: [1, 4, 6],
            count: 1,
            catalog: "PPP",
            category: "herbicides",
        },
        {
            id: 10,
            name: "Линтур",
            alt: "Линтур",
            img: [require("./img/product/lintur/lintur.png")],
            price: 34,
            totalPrice: 34,
            to: "petunia",
            availability: "В наличии",
            priceFor: [1, 5, 10, 15],
            count: 1,
            catalog: "PPP",
            category: "herbicides",
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
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            catalog: "PPP",
            category: "herbicides",
        },
        {
            id: 12,
            name: "Стриж, средство от сорняков",
            alt: "Стриж, средство от сорняков",
            img: [
                require("./img/product/strizh/strizh.png"),
                require("./img/product/strizh/strizhTwo.png"),
                require("./img/product/strizh/strizhThree.png"),
            ],
            price: 45,
            totalPrice: 45,
            to: "horys",
            availability: "В наличии",
            priceFor: [1, 3, 5],
            count: 1,
            catalog: "PPP",
            category: "herbicides",
        },
    ],
    [
        {
            id: 13,
            name: "Рубит Санти, средство от сорняков",
            alt: "Рубит Санти, средство от сорняков",
            img: [require("./img/product/rubit/rubit.png")],
            price: 54,
            totalPrice: 54,
            to: "petunia",
            availability: "В наличии",
            priceFor: [1, 5, 10, 15],
            catalog: "PPP",
            category: "herbicides",
        },
        {
            id: 14,
            name: "Актара",
            alt: "Актара",
            img: [require("./img/product/aktara/aktara.png"),],
            price: 78,
            totalPrice: 78,
            to: "horys",
            availability: "В наличии",
            priceFor: [1, 3, 5],
            count: 1,
            catalog: "PPP",
            category: "insecticides",
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
            to: "skor",
            availability: "В наличии",
            priceFor: [1, 4, 6],
            count: 1,
            catalog: "PPP",
            category: "insecticides",
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
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "insecticides",
        },
    ],
    [
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
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "insecticides",
        },
        {
            id: 18,
            name: "Алирин Б",
            alt: "Алирин Б",
            img: [require("./img/product/alirin/alirin.png")],
            price: 35,
            totalPrice: 35,
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "protectants",
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
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "protectants",
        },
        {
            id: 20,
            name: "Стрекар КС",
            alt: "Стрекар КС",
            img: [require("./img/product/strekar/strekar.png")],
            price: 63,
            totalPrice: 63,
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "protectants",
        },
    ],
    [
        {
            id: 21,
            name: "Гамаир овощи",
            alt: "Гамаир овощи",
            img: [
                require("./img/product/gamair/gamair.png"),
            ],
            price: 34,
            totalPrice: 34,
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "protectants",
        },
        {
            id: 22,
            name: "Чистогряд, средство от сорняков",
            alt: "Чистогряд, средство от сорняков",
            img: [require("./img/product/chistogryad/chistogryad.png")],
            price: 87,
            totalPrice: 87,
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "desiccants",
        },
        {
            id: 23,
            name: "Торнадо, средство от сорняков",
            alt: "Торнадо, средство от сорняков",
            img: [
                require("./img/product/tornado/tornado.png"),
                require("./img/product/tornado/tornadoTwo.png"),
                require("./img/product/tornado/tornadoThree.png"),
                require("./img/product/tornado/tornadoFour.png"),
            ],
            price: 87,
            totalPrice: 87,
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "desiccants",
        },
        {
            id: 24,
            name: "Прилипатель - адъювант ЖУСС Аква",
            alt: "Прилипатель - адъювант ЖУСС Аква",
            img: [
                require("./img/product/prilipatel/prilipatel.png"),
                require("./img/product/prilipatel/prilipatelTwo.png"),
                require("./img/product/prilipatel/prilipatelThree.png"),
            ],
            price: 30,
            totalPrice: 30,
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "adjuvants",
        },
    ],
    [
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
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "adjuvants",
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
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "adjuvants",
        },
        {
            id: 27,
            name: "Алар Голд",
            alt: "Алар Голд",
            img: [require("./img/product/alar/alar.png")],
            price: 80,
            totalPrice: 80,
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "rodenticides",
        },
        {
            id: 28,
            name: "Регулар, ВРП",
            alt: "Регулар, ВРП",
            img: [require("./img/product/regular/regular.png")],
            price: 50,
            totalPrice: 50,
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "rodenticides",
        },
    ],
    [
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
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "retardants",
        },
        {
            id: 30,
            name: "Nadzor, гранулы от мышей и крыс",
            alt: "Nadzor, гранулы от мышей и крыс",
            img: [
                require("./img/product/ratobor/ratobor.png"),
                require("./img/product/ratobor/ratoborTwo.png"),
                require("./img/product/ratobor/ratoborThree.png"),
                require("./img/product/ratobor/ratoborFour.png"),
            ],
            price: 39,
            totalPrice: 39,
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "retardants",
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
            to: "agrikola",
            availability: "В наличии",
            priceFor: [1, 3, 6, 9],
            count: 1,
            catalog: "PPP",
            category: "retardants",
        },
    ]
]