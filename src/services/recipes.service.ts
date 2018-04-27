import {Injectable} from '@angular/core';
import {Recipe} from "../models/models";

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [];

  constructor() {
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  getRecipes() {
    return this.recipes.slice()
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
  }

  removeRecipe(recipe: Recipe) {
    this.recipes.remove(recipe);
  }
}
