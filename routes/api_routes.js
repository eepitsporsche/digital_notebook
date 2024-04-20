//Router Object for Express App
const router = require('express').Router();
//File System Object to Import 'fs' Module
const fs = require('fs');
//UUID Object imports 'uuidv4' to Generate Unique Identifiers
const { v4: uuidv4 } = require('uuid');

//API/Notes Route Handler Using Asynchronous Function to Handle Requests
router.get('/api/notes', async (req, res) => {
    const jsonDatabase = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    res.json(jsonDatabase);
});

//Post Request for New Note Entries
router.post('/api/notes', (req, res) => {
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
});

//Remove Note Object From db.json//
//Delete Request Via JSON Object's ID Parameter
router.delete('/api/notes/:id', (req, res) => {
    //JSON Data is Read and Parsed
    let jsonData = fs.readFileSync('db/db.json', 'utf8');
    const note = JSON.parse(jsonData);
    /*Filter Objects by ID Parameter and Return an Array with Only Objects Whose ID 
    Does Not Match the Request Object*/
    const deleteNote = note.filter((note) => {
        return note.id !== req.params.id;
    });

    //Write New Array to JSON file
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNote));
    res.json('Note has been deleted.')
})


//Export Allowing the Rest of the App to Access the Router Object
module.exports = router;