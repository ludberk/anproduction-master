import { ApiResponse } from "../../shared/api-response/api-response.js";
import { APIError } from "../../shared/error-response/error-response.js";
import cloudinaryUploadImg from "../../shared/utils/cloundinary.js";
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
        const data = await ProductService.getAll();
        return new ApiResponse(
            data.map((e) => new ProductDto(e)),
            "Product list success"
        ).success(response);
    }

    static async deleteById(request, response) {
        await ProductService.deleteById(request.params.id);
        return new ApiResponse(
            null,
            "Product deleted success"
        ).success(response);
    }
    static async updateById(request, response) {
        let body = request.body;
        let updateData = await UserService.updateById(
            request.params.id,
            body
        );
        return new ApiResponse(
            new ProductDto(updateData),
            "Product Update success"
        ).success(response);
    }

    static async uploadImages(request, response) {
        const { id } = request.params;
        const files = request.files;
        if(!files){
            throw new APIError("file is empty",403);
        }
        let Product = await ProductService.getFindById(id)

        const uploader = (path) => cloudinaryUploadImg(path, "images")
        const urls = [];

        for (const file of files) {
            const { path } = file;
            const newPath = await uploader(path);
            urls.push(newPath.url);
            fs.unlinkSync(path);
        }


        console.log(urls);

        Product.images = Product.images.concat(urls);

        console.log(Product.images);
        const updateProduct = await ProductService.updateById(id,
            Product
        )

        console.log(updateProduct);

        return new ApiResponse(
            new ProductDto(updateProduct),
            "Upload Product Image"
        ).created(response)
    }

}
