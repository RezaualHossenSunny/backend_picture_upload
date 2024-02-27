// import  cloudinary  from "cloudinary";
const cloudinary = require("cloudinary")

cloudinary.config({
  cloud_name: "dmtgfgwp1",
  api_key: "667599998919327",
  api_secret: "qrJBgEeayUqHGMe_jQtuGPY-cF8",
});

const uploadClodinary = async (localPath) => {
  try {
    await cloudinary.uploader.upload(localPath);
  } catch (error) {
    console.log(error);
  }
};


module.exports = uploadClodinary