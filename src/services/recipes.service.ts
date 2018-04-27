import {Injectable} from '@angular/core';
import {Recipe} from "../models/models";

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    {description:'a',difficulty:'easy',ingredients:[{name:'a',amount:0}],name:'a'},
    {description:'b',difficulty:'easy',ingredients:[{name:'b',amount:0}],name:'b'},
    {description:'c',difficulty:'easy',ingredients:[{name:'c',amount:0}],name:'c'},
  ];

  constructor() {
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    console.log(this.recipes)
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
