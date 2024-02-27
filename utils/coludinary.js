// import  cloudinary  from "cloudinary";
const cloudinary = require("cloudinary")
const fs = require('fs');
cloudinary.config({
  cloud_name: "dmtgfgwp1",
  api_key: "667599998919327",
  api_secret: "qrJBgEeayUqHGMe_jQtuGPY-cF8",
});

const uploadClodinary = async (localPath) => {
  try {
   const produactimg= await cloudinary.uploader.upload(localPath);
   fs.unlinkSync(localPath)
    return produactimg
  } catch (error) {
    fs.unlinkSync(localPath)
    console.log(error);
  }
};


module.exports = uploadClodinary