import registrationModel from "../Models/registrationModel";
const getCode = async () => {
  const username = req.body;
  if (!username) {
    return res.status(500).json({ error: "username not found" });
  }
  try {
    const user = await registrationModel.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    const randomNumber = Math.floor(Math.random() * 10000);
    return res.status(200).json({ sucess: "user found", user, randomNumber });
  } catch (e) {
    return res.status(500).json({ error: "something went wrong" });
  }
};
