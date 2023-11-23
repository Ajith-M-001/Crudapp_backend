import userModel from "../model/userModel.js";

// 1.Add user Router
export const addUser = async (req, res) => {
  try {
    const { name, email, district, state } = req.body;
    const newUser = new userModel({
      name,
      email,
      district,
      state,
    });
    await newUser.save();
    res.status(200).json({ message: "User Added Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 2.Get user Router
//     1. get All user

export const getAllUser = (req, res) => {
  res.status(200).json({ message: "get all User Route" });
};

//     2. get single user
export const getSingleUser = (req, res) => {
  res.status(200).json({ message: "get Single User Route" });
};

// 3.update user Router
export const updateUser = (req, res) => {
  res.status(200).json({ message: "update User Route" });
};

// 4.delte user Router

export const deleteUser = (req, res) => {
  res.status(200).json({ message: "delete User Route" });
};
