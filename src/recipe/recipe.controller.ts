import { Controller, Delete, Get, Post } from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller('recipes')
export class RecipeController {
    constructor(private recipeService: RecipeService) {}

    @Get()
    getAll(){
        return this.recipeService.findAll();
    }

    // @Get(':id')

    // @Post()

    // @Delete(':id')
}
