  import bcrypt from "bcrypt";
  import jwt from "jsonwebtoken";
  import "../config/index.mjs";
  import User from "../modal/userSchema.mjs";
  import Stripe from "stripe";


  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY , { apiVersion: '2020-08-27' });

  const createUser = async (req, res) => {
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
  };

  const LoginUser = async (req, res) => {
    const { email, password } = req.body;
    const checkUser = await User.findOne({ email });

    if (!checkUser) {
      return res.json({ error: "User Not Found!" });
    }

    if (await bcrypt.compare(password, checkUser.password)) {
      const token = jwt.sign(
        { email: checkUser.email },
        process.env.JWT_SECRET_KEY
      );
      if (res.status(201)) {
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    return res.json({ status: "error", error: "Invalid Password" });
  };

  const checkOut = async (req, res) => {
    try {
      const sessions = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",  // Corrected typo here
        line_items: req.body.items.map((item) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          };
        }),
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
      });

      res.json({ url: sessions.url });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export { createUser, LoginUser, checkOut };
