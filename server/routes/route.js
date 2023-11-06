const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "fghdfgjgkfdtkgioda9deurfifgdgo45894357853[]5][[]5@#&*%*^$()sadfkljfd";

router.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exist" });
    }

    const user = new User({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const checkUser = await User.findOne({ email });

  if (!checkUser) {
    return res.json({ error: "User Not Found!" });
  }

  if(await bcrypt.compare(password , checkUser.password)){
    const token = jwt.sign({email : checkUser.email} , JWT_SECRET_KEY);
    if(res.status(201)){
        return res.json({status: "ok" , data: token});
    }else{
        return res.json({error:"error"});
    }
}
return res.json({status:"error" , error:"Invalid Password"});

});



module.exports = router;
