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
    console.log(newUser);
    await newUser.save();
    res.status(200).json({ message: "User Added Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 2.Get user Router
//     1. get All user

export const getAllUser = async (req, res) => {
  try {
    const Alluser = await userModel.find();
    res.status(200).json(Alluser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//     2. get single user
export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 3.update user Router
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const updateduser = await userModel.findByIdAndUpdate(id, user, {
      new: true,
    });
    res.status(200).json({ message: "user Updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 4.delte user Router

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
