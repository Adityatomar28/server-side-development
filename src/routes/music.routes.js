const express = require("express")
const musicControllers = require("../controllers/music.controllers")
const multer = require("../controllers/music.controllers")

const upload = multer({
    Storage:multer.memoryStorage()
})
const router = express.Router();


router.post("/upload",upload.single("file"),musicControllers.createMusic)


module.exports = router;