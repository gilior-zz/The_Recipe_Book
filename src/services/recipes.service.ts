import {Injectable} from '@angular/core';
import {Recipe} from "../models/models";
import {HttpClient} from "@angular/common/http";
import {Const} from "../app/app.const";
import {AuthService} from "./auth";
import {tap} from 'rxjs/operators'
import dbURL = Const.dbURL;

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    {description: 'a', difficulty: 'easy', ingredients: [{name: 'a', amount: 0}], name: 'a'},
    {description: 'b', difficulty: 'easy', ingredients: [{name: 'b', amount: 0}], name: 'b'},
    {description: 'c', difficulty: 'easy', ingredients: [{name: 'c', amount: 0}], name: 'c'},
  ];

  constructor(private  httpClient: HttpClient,
              private  authService: AuthService) {
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

  saveList() {
    let url = dbURL + this.authService.uid + '/' + 'rec.json';
    return this.httpClient.put(url, this.recipes)
  }

  loadList() {
    let url = dbURL + this.authService.uid + '/' + 'rec.json';
    return this.httpClient.get(url)
      .pipe(
        tap((i: any[]) => this.recipes = i)
      )
  }
}
