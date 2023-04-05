const express = require("express");
const Controller = require("../controllers/productAccecoris.controller");

const router = express.Router();

router.get("/jam", Controller.getProductJam);
router.get("/kacamata", Controller.getProductKacamata);

module.exports = router;
