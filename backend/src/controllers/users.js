/**
 * fields:
 * name
 * email
 * password
 * phone
 * isVerified
 * loginAttempts
 * timeOut
 */
const usersController = {};

import usersModel from "../models/users.js";

//SELECT
usersController.getUsers = async (req, res) => {
  try {
    const users = await usersModel.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Error fetching users" });
  }
};

//SELECT BY ID
usersController.getUserById = async (req, res) => {
  try {
    const user = await usersModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ message: "Error fetching user" });
  }
};

//UPDATE
usersController.updateUser = async (req, res) => {
  try {
    const { name, email, phone, isVerified, loginAttempts, timeOut } = req.body;
    const updatedUser = await usersModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        phone,
        isVerified,
        loginAttempts,
        timeOut
      },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User updated", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "Error updating user" });
  }
};

//DELETE
usersController.deleteUser = async (req, res) => {
  try {
    const deleted = await usersModel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Error deleting user" });
  }
};

export default usersController;
