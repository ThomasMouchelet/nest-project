import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecipeEntity } from './recipe.entity';

@Injectable()
export class RecipeService {
    constructor(
        @InjectRepository(RecipeEntity)
        private recipeRepository: Repository<RecipeEntity>,
    ) {}

    findAll() {
        const recipes = this.recipeRepository.find();
        return recipes;
    }
}
