var express = require('express');
var router = express.Router();
const fs = require('fs');

const STORE_FILE = './data/store.json';

/* GET users listing. */
router.get('/', function (req, res, next) {
    fs.readFile(store_FILE, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file')
            return;

        }
        res.json(JSON.parse(data));
            const newJerseys = {
            id: (jersey.length + 1).toString(),
            name: req.body.params,
        }
    })
});

router.get('/store/:id', function (req, res) {
    fs.readFile(store_FILE, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file')
            return;

        }
        res.json(JSON.parse(data)); 
});
})
//Post a new jersey

router.post('/', (req, res) => {
    fs.readFile(STORE_FILE, 'utf-8', (err, data) => {
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
        fs.writeFile(STORE_FILE, JSON.stringify(store), err => {
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