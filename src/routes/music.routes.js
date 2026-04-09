const express = require("express")
const musicControllers = require("../controllers/music.controllers")
const multer = require("../controllers/music.controllers")

const upload = multer({
    Storage:multer.memoryStorage()
})
const router = express.Router();


router.post("/upload",authMiddleware.authArtist,upload.single("file"),musicControllers.createMusic)

router.post("/album",authMiddleware.authArtist,musicControllers.createAlbum)

// jitne bhi music create hoe honge wo yha create ho skta hai 
router.get("/",authMiddleware.authUser,musicControllers.getAllMusics)


router.get("/albums",authMiddleware.authUser,musicControllers.getAllAlbums)



module.exports = routers