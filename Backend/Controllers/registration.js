import registrationModel from "../Models/registrationModel.js";

export const Registration = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "all fields required" });
    }
    const findName = await registrationModel.findOne({ username });
    if (findName) {
      return res.status(400).json({ message: "username already exists" });
    }

    const newUser = registrationModel.create({
      username,
      email,
      password,
    });
    console.log(newUser);
    return res.status(200).json({ sucess: "user registered successfully" });
  } catch (e) {
    console.log("error occured while registering user", e);
    return res.status(500).json({ error: "something went wrrong" });
  }
};

export const login = async (req, res) => {
  const username = req.body.username;
  if (!username) {
    return res.status(500).json({ error: "username not found" });
  }
  try {
    const user = await registrationModel.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    return res.status(200).json({ sucess: "user found", user });
  } catch (e) {
    return res.status(500).json({ error: "something went wrong" });
  }
};
