import cloudinary from "../../services/cloundinary/cloudinary.service.js";
import { APIError } from "../error-response/error-response.js";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.SECRET_KEY,
});

export const cloudinaryUploadImg = async (fileToUploads) => {
  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_chunked(fileToUploads, (err, result) => {
      if (err) {
        console.error("Error:", err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
  console.log(result);
  return result.url;
}
async function getPublicIdFromUrl(url) {

  const parts = url.split('/');
  const fileName = parts.pop();
  const publicId = fileName.split('.')[0];
  console.log(publicId);
  return publicId;
}


export async function cloudinaryDeleteImg (imageUrl){
  imageUrl = await getPublicIdFromUrl(imageUrl);
  // delete image (for public id)
  //console.log(imageUrl);
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(imageUrl, (err, result) => {
      if (err) {
        console.error("Error:", err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};


