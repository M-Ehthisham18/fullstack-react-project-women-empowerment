import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email : {
      type : String,
      required : true,
      unique : true,
    },
    password : {
      type : String,
      required : true,
      minlegth : 6,
    },
    profilePic : {
      type : String,
      default : ""
    },
    gender : {
      type : String,
      enum : ["Male", "Female", "Other"],
      default : "Other"
    },
    age : {
      type : Number,
      min : 6,
    },
    savedPost : {
      Array : []
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User",UserSchema);
export default User;