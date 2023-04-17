var express = require('express');
var router = express.Router();
const fs = require('fs'); 

const JERSEY_FILE = './jersey.json';

/* GET users listing. */
router.get('/', function (req, res, next) {
    fs.readFile(JERSEY_FILE, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file')
            return;
        }

        res.json(JSON.parse(data));
        //     const newJerseys = {
        //     id: (jersey.length + 1).toString(),
        //     name: req.body.params,
        // }
    })
});

router.get('/jersey/:id', function (req, res) {
    console.log("jerseyId")
    fs.readFile(JERSEY_FILE, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file')
            return;

        }
        data = JSON.parse(data)
        console.log(data)
        const id = req.params.id
        let jersey = data.find((jersey) => {
            console.log(jersey)
            return jersey.id === id
        })
        res.json(JSON.parse(jersey)); 
});
})
//Post a new jersey 

router.post('/', (req, res) => {
    fs.readFile(JERSEY_FILE, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file')
            return;

        }
        //converts  store.json to a js array
        const pets = JSON.parse(data);

        // template for incoming new jersey objects
        const newJerseys = {
            id: (jerseys.length + 1),
            player: req.body.player,
            status: req.body.status
        }
        //pushes new jersey object into jersey array
        jersey.push(newJersey)

        //writes our new array to the json file after stringifying it/converting back to json
        fs.writeFile(JERSEY_FILE, JSON.stringify(jersey), err => {
            if (err) {
                console.error(err);
                res.status(500).send('There was a problem writing the file')
                return;

            }
            res.json(newJersey)  //respond with json version of newJersey object

        })
    })


})


module.exports = router;