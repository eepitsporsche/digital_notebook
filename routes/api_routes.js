//Router Object for Express App
const router = require('express').Router();
//File System Object to Import 'fs' Module
const fs = require('fs');
//UUID Object imports 'uuidv4' to Generate Unique Identifiers
const { v4: uuid } = require('uuid');

//API/Notes Route Handler Using Asynchronous Function to Handle Requests
router.get('/api/notes', async (req, res) => {
    const jsonDatabase = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    res.json(jsonDatabase);
});

//Post Request for New Note Entries
router.post('/api/notes', (res, req) => {
    const jsonDatabase = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    //Adds New Note Entries to "db.json"
    jsonDatabase.push (newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(jsonDatabase));
    //Responds with Updated Data
    res.json(jsonDatabase);
})

//Export Allowing the Rest of the App to Access the Router Object
module.exports = router;