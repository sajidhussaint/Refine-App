import { User } from "../models/userModel.js";

export const getHome = async (req, res) => {
  try {
    const user = await User.find();
    return res.status(201).json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
