//Router Object for Express App
const router = require('express').Router();
//Path Object for Directory Paths
const path = require('path');

//Root URL '/' Route Handler with "index.html" as a Response to Requests
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//Notes URL Handler with notes.html as a Response to Requests
router.get('./notes', (res, req) => {
    res.sendFile(path.join(__dirname, '../public/note.html'))
});

//Export Allowing the Rest of the App to Access the Router Object
module.exports = router;