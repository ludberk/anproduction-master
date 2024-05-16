import { ApiResponse } from "../../shared/api-response/api-response.js";
import { APIError } from "../../shared/error-response/error-response.js";
import { cloudinaryDeleteImg, cloudinaryUploadImg } from "../../shared/utils/cloundinary.js";
import { CategoryService } from "./category.service.js";
import { CategoryDto } from "./dto/category.dto.js";

import fs from "fs";

export class CategoryController {

    static async add(request, response) {
        let body = request.body;
        const data = await CategoryService.add(body);

        return new ApiResponse(
            new CategoryDto(data),
            "Category created success"
        ).created(response);
    }



    static async getFindById(request, response) {
        const data = await CategoryService.getFindById(
            request.params.id
        );
        return new ApiResponse(
            new CategoryDto(data),
            "Category find success"
        ).success(response);
    }

    static async getAll(request, response) {
        const data = await CategoryService.getAll();
        return new ApiResponse(
            data.map((e) => new CategoryDto(e)),
            "Category list success"
        ).success(response);
    }

    static async deleteById(request, response) {
        const category = await CategoryService.getFindById(request.params.id);
        if(category.image){
            cloudinaryDeleteImg(category.image);
        }
        
        await CategoryService.deleteById(request.params.id);

        return new ApiResponse(
            null,
            "Category deleted success"
        ).success(response);
    }
    static async updateById(request, response) {
        let body = request.body;
        let updateData = await CategoryService.updateById(
            request.params.id,
            body
        );
        return new ApiResponse(
            new CategoryDto(updateData),
            "Cateogry Update success"
        ).success(response);
    }

    static async deleteImage(request, response) {
        const { id } = request.params;
        if (!id)
            throw new APIError("Write params id", 404);
        //const id = "66426bf87934c73ea4feaef4";
        let Category = await CategoryService.getFindById(id);
        if(!Category.image){
            return new ApiResponse(
                new CategoryDto(Category),
                "image delete succes"
            ).success(response);
        }
        const oldurl = Category.image;
        Category.image = null;
        Category = await CategoryService.updateById(id, Category);

        let data = await cloudinaryDeleteImg(oldurl);

        console.log(data.result);

        if(data.result!="ok"){
            return new ApiResponse(
                new CategoryDto(Category),
                "The url was not found but it was deleted from the db"
            ).success(response);   
        }
    
        return new ApiResponse(
            new CategoryDto(Category),
            "image delete succes"
        ).success(response);
    }

    static async uploadImage(request, response) {
        const { id } = request.params;
        const file = request.file;
        if (!id)
            throw new APIError("Write params id", 403);
        else if (!file)
            throw new APIError("file is empty", 403);

        let Category = await CategoryService.getFindById(id)
        if(Category.image){
            await  cloudinaryDeleteImg(Category.image);
        }
        const { path } = file;
        const newPath = await cloudinaryUploadImg(path);
        fs.unlinkSync(path);
        console.log(newPath);
        Category.image = newPath;
        let updatedCategory;
        try {
             updatedCategory = await CategoryService.updateById(id,
                Category
            )
        } catch (error) {
            cloudinaryDeleteImg(newPath);
            throw error
        }
        console.log(updatedCategory);
        return new ApiResponse(
            new CategoryDto(updatedCategory),
            "Upload Category Image"
        ).created(response)
    }
}
