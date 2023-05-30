// Rachel testing stuff out, feel free to ignore
const express = require("express");
const userController = require("./../controllers/userController");
const router = express.Router();

router
    .route("/register")
    .post(userController.createUser);

router
    .route("/:id")
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;