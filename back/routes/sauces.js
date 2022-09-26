const express = require("express");
const router = express.Router();

// auth pour securiser les routes
const auth = require("../middleware/auth");
// multer pour sauvegarder les images sur le serveur
const multer = require("../middleware/multer-config");

const saucesController = require("../controllers/sauces");

// Les routes pour le CRUD des sauces
router.get("/", auth, saucesController.getAllSauces);
router.post("/", auth, multer, saucesController.createSauce);
router.get("/:id", auth, saucesController.getOneSauce);
router.put("/:id", auth, multer, saucesController.modifySauce);
router.delete("/:id", auth, saucesController.deleteSauce);

// La route pour les likes et dislikes
router.post("/:id/like", auth, saucesController.likeSauce);

module.exports = router;
