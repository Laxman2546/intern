import registrationModel from "../Models/registrationModel.js";

export const getCode = async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "username not found" });
  }

  try {
    const user = await registrationModel.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const randomRupees = Math.floor(Math.random() * 100000);
    const number = randomRupees.toLocaleString();
    return res.status(200).json({
      success: "user found",
      user,
      randomNumber,
      number,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "something went wrong" });
  }
};
