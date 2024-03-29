const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.get("/test", async (req, res) => {
  
  test="hallo";
  res.status(200).json(test);
});


router.post("/register", async (req, res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({  //User Schema
          username: req.body.username,
          email: req.body.email,
          password: hashedPass,
        });

    const user = await newUser.save(); //neuer User speichern FUNKTIONIERT NICHT
    res.status(200).json(user);
  } catch (err) {
    test = req.body.username;
    res.status(500).json(req.body.password);
  }
});
//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });//abfrage username
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password); //abfrage passwort
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc; //everything but the password
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;