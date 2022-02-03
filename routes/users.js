const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", (req, res) => {
  const users = userController.getAllUsers();
  res.json(users);
});

router.get(`/:userID/username/`, (req, res) => {
  const userName = userController.getUserName(req.params.userID);
  res.send(userName);
});

module.exports = router;
