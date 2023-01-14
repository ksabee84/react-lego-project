const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const appPort = 8080;

const legoItems = [
    {
        id: 1,
        name: 'App-Controlled Cat D11 Bulldozer',
        category: 'Technic',
        theme: '',
        serial: '42131',
        year: 2021,
        pieces: 3854,
        price: 500,
        condition: 'new',
        imgUrl: '/img/lego_42131.jpg',
        imgAlt: 'LEGO App-Controlled Cat D11 Bulldozer'
    },
    {
        id: 2,
        name: 'Crocodile Locomotive',
        category: 'Creator',
        theme: 'Expert',
        serial: '10277',
        year: 2020,
        pieces: 1271,
        price: 100,
        condition: 'new',
        imgUrl: '/img/lego_10277.jpg',
        imgAlt: 'LEGO Crocodile Locomotive'
    },
    {
        id: 3,
        name: 'Pirate Ship',
        category: 'Creator',
        theme: '3in1',
        serial: '31109',
        year: 2020,
        pieces: 1264,
        price: 130,
        condition: 'new',
        imgUrl: '/img/lego_31109.jpg',
        imgAlt: 'LEGO Pirate Ship'
    },
    {
        id: 4,
        name: 'Forbidden Cove',
        category: 'System',
        theme: 'Islanders',
        serial: '6264',
        year: 1994,
        pieces: 214,
        price: 80,
        condition: 'used',
        imgUrl: '/img/lego_6264.jpg',
        imgAlt: 'LEGO Pirate Cave'
    },
    {
        id: 5,
        name: 'Alien Avenger',
        category: 'System',
        theme: '',
        serial: '6975',
        year: 1997,
        pieces: 369,
        price: 85,
        condition: 'used',
        imgUrl: '/img/lego_6975.jpg',
        imgAlt: 'Lego UFO'
    },
    {
        id: 6,
        name: 'Super Car',
        category: 'Technic',
        theme: '',
        serial: '8880',
        year: 1994,
        pieces: 1343,
        price: 160,
        condition: 'used',
        imgUrl: '/img/lego_8880.jpg',
        imgAlt: 'LEGO Super Car'
    },
    {
        id: 7,
        name: "Hogwarts Express Collector's Editon",
        category: '',
        theme: 'Harry Potter',
        serial: '76405',
        year: 2022,
        pieces: 5129,
        price: 500,
        condition: 'new',
        imgUrl: '/img/lego_76405.jpg',
        imgAlt: "Hogwarts Express Collector's Editon"
    },
    {
        id: 8,
        name: 'Medieval Castle',
        category: 'Creator',
        theme: '3in1',
        serial: '31120',
        year: 2021,
        pieces: 1426,
        price: 100,
        condition: 'new',
        imgUrl: '/img/lego_31120.jpg',
        imgAlt: 'LEGO Medival Castle'
    },
    {
        id: 9,
        name: 'McLaren Formula 1 Race Car',
        category: 'Technic',
        theme: '',
        serial: '42141',
        year: 2022,
        pieces: 1434,
        price: 200,
        condition: 'new',
        imgUrl: '/img/lego_42141.jpg',
        imgAlt: 'LEGO McLaren Formula 1 Race Car'
    },
    {
        id: 10,
        name: 'Poolside Paradise',
        category: 'System',
        theme: 'Town / Paradisa',
        serial: '6416',
        year: 1992,
        pieces: 229,
        price: 62,
        condition: 'used',
        imgUrl: '/img/lego_6416.jpg',
        imgAlt: 'LEGO Poolside Paradise'
    },
    {
        id: 11,
        name: 'Town Center',
        category: 'City',
        theme: '',
        serial: '60292',
        year: 2021,
        pieces: 790,
        price: 100,
        condition: 'new',
        imgUrl: '/img/lego_60292.jpg',
        imgAlt: 'LEGO City Town Center'
    },
    {
        id: 12,
        name: 'Skull Island',
        category: 'System',
        theme: 'Pirates',
        serial: '6279',
        year: 1995,
        pieces: 378,
        price: 100,
        condition: 'used',
        imgUrl: '/img/lego_6279.jpg',
        imgAlt: "LEGO Pirates' Skull Island"
    },
    {
        id: 13,
        name: 'Train Station',
        category: 'City',
        theme: 'Trains',
        serial: '60335',
        year: 2022,
        pieces: 907,
        price: 80,
        condition: 'new',
        imgUrl: '/img/lego_60335.jpg',
        imgAlt: 'LEGO City Train Station'
    },
    {
        id: 14,
        name: 'Titanic',
        category: 'Icons',
        theme: '',
        serial: '10294',
        year: 2021,
        pieces: 9090,
        price: 680,
        condition: 'new',
        imgUrl: '/img/lego_10294.jpg',
        imgAlt: 'LEGO Icons Titanic ship'
    },
    {
        id: 15,
        name: 'Big Ben',
        category: 'Creator Expert',
        theme: 'Buildings',
        serial: '10253',
        year: 2016,
        pieces: 4163,
        price: 220,
        condition: 'new',
        imgUrl: '/img/lego_10253.jpg',
        imgAlt: 'LEGO Creator Expert Big Ben'
    },
    {
        id: 16,
        name: `Sheriff's Lock Up`,
        category: 'Western',
        theme: 'Cowboys',
        serial: '6755',
        year: 1996,
        pieces: 176,
        price: 55,
        condition: 'used',
        imgUrl: '/img/lego_6755.jpg',
        imgAlt: "LEGO Western Sheriff's Lock Up"
    }

];

app.get('/api/v1/react-lego-project/items', (req, res) => {
    res.status(200).send(legoItems);
});

app.get('/api/v1/react-lego-project/items/:id', (req,res) => {
    const item = legoItems.find((item) => item.id === parseInt(req.params.id));

    item
    ? res.status(200).send(item)
    : res.status(404).send(
        {
            message: `No item with given id: ${req.params.id}`,
            countryCode: ['HU, ENG'],
        });
});

app.delete('/api/v1/react-lego-project/items/:id', (req, res) => {
    const { index } = checkDetailsOfReq({ req, res, newItem: false});

    legoItems.splice(index, 1);

    res.status(200).send(`Item with id ${req.params.id} was deleted successfully!`);
});

app.put('/api/v1/react-lego-project/items/:id', (req, res) => {
    const { item, index } = checkDetailsOfReq({ req, res, newItem: false });

    legoItems[index] = {
        ...legoItems[index],
        ...req.body,
    };

    res.status(200).send('Item was updated successfully!');
});

const checkDetailsOfReq = ({ req, res, newItem }) => {
    const item = legoItems.find((item) => item.id === parseInt(req.params.id));
    const index = item && legoItems.indexOf(item);

    if(!newItem) {
        if(!item) {
            res.status(404).send('Item with given id was not found!');
        }
    }

    return { item, index };
};

app.listen(appPort, () => console.log(`App is listening on port ${appPort}...`));
