const express = require("express");
const Controller = require("../controllers/user.controller");

const router = express.Router();

router.get("/users", Controller.getUser);
router.get("/admin", Controller.getAdmin);

module.exports = router;
