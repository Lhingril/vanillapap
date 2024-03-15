const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//UPDATE
router.put("/:id", async (req, res) => { //info von der URL
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate( //Änderung des Users
        req.params.id,
        {
          $set: req.body,
        },
        { new: true } //send
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("Du kannst nur deinen Account updaten!");
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {                                           
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });  //löscht auch alle Beiträge des Users
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Dieser User wurde gelöscht...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User nicht gefunden!");
    }
  } else {
    res.status(401).json("Du kannst nur deinen Account löschen!");
  }
});

//GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc; //versteckt das passwort
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;