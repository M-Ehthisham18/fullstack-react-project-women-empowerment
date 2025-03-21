import { v2 as cloudinary } from 'cloudinary';
//import fs from "fs"; // available in npm package
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name : process.env.CLOUDINARY_NAME || dpijljz0p,
  api_key : process.env.CLOUDINARY_API_KEY,
  api_secret : process.env.CLOUDINARY_API_SECRET
});

//upload on cloudinary.
const uploadOnCloudinary = async (profilePic) => {
  try {
    if(!profilePic) return null;

    // const response = await cloudinary.uploader.upload(profilePic,{ resource_type : "image"});
    const response = await cloudinary.uploader.upload(profilePic);
    console.log(`file uploaded successfully : ${response.secure_url}`);

    // fs.unlink(localFilePath);
    return response.secure_url;
    
  } catch (error) {
    // fs.unlink(localFilePath);
    console.error("error in uploading file : ",error); 
    return error;
  }
};

// delete file from cloudinary;
const deleteFromCloudinary = async (publicIdUrl) => {
  try {
    const filename = publicIdUrl.substring(publicIdUrl.lastIndexOf("/") + 1);
    const publicId = filename.split(".")[0];
    const result = await cloudinary.uploader.destroy(publicId);
    console.log("file deleted successfully : ",result);
    return result;
    
  } catch (error) {
    console.log("error deleting from cloudinary :",error);
    return null;
  }
}

export { uploadOnCloudinary, deleteFromCloudinary};