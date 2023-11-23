
// 1.Add user Router
export const addUser = (req, res) => {
  res.status(200).json({ message: "add User Route" });
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
