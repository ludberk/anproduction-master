import { ApiResponse } from "../../shared/api-response/api-response.js";
import { APIError } from "../../shared/error-response/error-response.js";
import { cloudinaryDeleteImg, cloudinaryUploadImg } from "../../shared/utils/cloundinary.js";
import { ProductDto } from "./dto/product.dto.js";
import { ProductService } from "./product.service.js";
import fs from "fs";

export class ProductController {

    static async add(request, response) {
        let body = request.body;
        const data = await ProductService.add(body);

        return new ApiResponse(
            new ProductDto(data),
            "Product created success"
        ).created(response);
    }



    static async getFindById(request, response) {
        const data = await ProductService.getFindById(
            request.params.id
        );
        return new ApiResponse(
            new ProductDto(data),
            "Product find success"
        ).success(response);
    }

    static async getAll(request, response) {
       // console.log("asdasdsadadsad")
        const data = await ProductService.getAll();
      //  console.log(data)
        return new ApiResponse(
            data.map((e) => new ProductDto(e)),
            "Product list success"
        ).success(response);
    }

    static async deleteById(request, response) {
        const Product = await ProductService.getFindById(request.params.id);
        Product.images.forEach(url => {
            console.log(url)
            cloudinaryDeleteImg(url);
        });

        await ProductService.deleteById(request.params.id);
        return new ApiResponse(
            null,
            "Product deleted success"
        ).success(response);
    }
    static async updateById(request, response) {
        let body = request.body;
        let updateData = await ProductService.updateById(
            request.params.id,
            body
        );
        return new ApiResponse(
            new ProductDto(updateData),
            "Product Update success"
        ).success(response);
    }

    static async deleteImages(request, response) {
        const { id } = request.params;
        if(!id)
            throw new APIError("Write params id",404);
        //const id = "66426bf87934c73ea4feaef4";
        let Product = await ProductService.getFindById(id);
        const imageUrls = request.body.imageUrls;
        let productImages = Product.images;
        
        //console.log(productImages);

        // Both arrays should have the same elements
        for (let i = 0; i < imageUrls.length; i++) {
            let index = productImages.indexOf(imageUrls[i]);
            if (index==-1) {
                throw new APIError('The sent image URLs do not match the product images.');
            }
            else{
                productImages.splice(index, 1);
                //console.log(productImages);
            }
        }

        Product.images = productImages;
        ProductService.updateById(id,Product);
        let deletedurls = []
        let dontdeletedurl = []
        for (const url of imageUrls) {
            let data = await cloudinaryDeleteImg(url);
            if (data.result == "ok")
                deletedurls.push(url);
            else
                dontdeletedurl.push(url);

            //console.log(data.result);
        }

        let obj = {
            deletedPhotos: deletedurls,
            undeletedPhotos: dontdeletedurl
        }
        if (!deletedurls || deletedurls.length == 0) {
            throw new APIError("Url not found", 404);
        }
        else if (dontdeletedurl && dontdeletedurl.length > 0) {
            return new ApiResponse(
                obj,
                "Url delete finish"
            ).mystatuscode(response, 202);
        }
        return new ApiResponse(
            obj,
            "Url delete success"
        ).success(response);
    }

    static async uploadImages(request, response) {
        const { id } = request.params;
        const files = request.files;
        if (!files) {
            throw new APIError("file is empty", 403);
        }
        let Product = await ProductService.getFindById(id)


        const urls = [];

        for (const file of files) {
            const { path } = file;
            const newPath = await cloudinaryUploadImg(path);
            urls.push(newPath);
            fs.unlinkSync(path);
        }


        //onsole.log(urls);

        Product.images = Product.images.concat(urls);

       // console.log(Product.images);
        const updateProduct = await ProductService.updateById(id,
            Product
        )

       // console.log(updateProduct);

        return new ApiResponse(
            new ProductDto(updateProduct),
            "Upload Product Image"
        ).created(response)
    }

}
