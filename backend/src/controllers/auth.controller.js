import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/token.utils.js";
import {
  deleteFromCloudinary,
  uploadOnCloudinary,
} from "../utils/cloudinary.utils.js";

const signup = async (req, res) => {
  const { fullName, email, password, gender, age } = req.body;

  try {
    if (!email || !password || !fullName) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be atlest 6 charcters !" });
    }
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (age < 6)
      return res.status(400).json({ message: "Age must be greater than 6." });
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      gender,
      age,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      const { password, ...userData } = newUser._doc;
      res
        .status(200)
        .json({ userData, message: "User Created Succcessfully." });
    }
  } catch (error) {
    console.log("error in signup : ", error);
    res.status(500).json({ message: "Interanl error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res.status(401).json({ message: " All fields are required." });

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found ." });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Credentail." });

    if (isPasswordCorrect) {
      generateToken(user._id, res);

      const { password, ...userData } = user._doc;
      res.status(200).json({ userData, message: "Login Successfull." });
    }
  } catch (error) {
    console.log("error in login : ", error);
    res.status(500).json({ message: "Interanl error" });
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successfully." });
  } catch (error) {
    res.status(500).json({ message: "Internal error." });
  }
};

const updateProfilePic = async (req, res) => {
  try {
    const { profilePic } = req.body;
    
    const userId = req.user?._id;    

    if (!profilePic)
      return res.status(400).json({ message: "Profile pic is required." });

    //find any previous profile pic is there or not.
    const user = await User.findById(userId);
    if (user.profilePic) await deleteFromCloudinary(user.profilePic);
    //upload new profile pic.
    const uploadedPic = await uploadOnCloudinary(profilePic);
    
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { profilePic: uploadedPic },
      { new: true }
    );

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log("error in update profile:", error);
    res.status(500).json({ 
      message: "Internal server error", 
      error: error.message, 
      stack: error.stack 
    });
  }
};

const deleteAccount = async (req, res) => {
  try {
    if (!req.user)
      return res
        .status(401)
        .json({ message: "Unauthorized : user not found." });
    const { password } = req.body;
    if (!password)
      return res.status(400).json({ message: "Password is required." });
    const email = req.user.email;

    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found." });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "invalid password." });

    if (user.profilePic){
      await deleteFromCloudinary(user.profilePic)
    }

    await User.findOneAndDelete({ email });

    res.status(200).json({ message: "Account deleted successfully." });
  } catch (error) {
    console.error("Error deleting account:", error);
    res.status(500).json({ error });
  }
};

const checkAuth = async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: "Interanl error!" });
  }
};

export { signup, login, logout, deleteAccount, updateProfilePic, checkAuth };
