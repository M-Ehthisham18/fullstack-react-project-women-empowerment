import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    console.log("JWT_SECRET is missing");
    throw new Error("JWT_SECRET is not defined in the environment variables!");
  }

  try {
    const token = jwt.sign( { userId }, jwtSecret , { expiresIn: "7d"});

    res.cookie("jwt", token , {
      maxAge : 7 * 24 * 60 * 60 * 1000, // 7days
      httpOnly : true,
      sameSite : "strict",
      secure : process.env.NODE_ENV !== "development"
    });

    return token;
    
  } catch (error) {
    console.log("error in generating token : ", error);
    throw error;
  }
};

export default generateToken;
