import {Injectable} from '@angular/core';
import {Ingredient} from "../models/models";
import {AuthService} from "./auth";
import {HttpClient} from "@angular/common/http";
import {tap} from 'rxjs/operators'
import {Const} from "../app/app.const";
import dbURL = Const.dbURL;

@Injectable()
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('a', 1),
    new Ingredient('b', 2),
    new Ingredient('c', 3),
  ];

  constructor(private  authService: AuthService,
              private httpClient: HttpClient) {
  }

  addIngredient(ingredient: Ingredient | Ingredient[]) {
    if (ingredient instanceof Ingredient)
      this.ingredients.push(ingredient);
    else
      this.ingredients.push(...ingredient);
    console.log('ingredients ', this.ingredients)
  }

  getIngredient() {
    return this.ingredients.slice();
  }

  removeIngredient(ingredient: Ingredient) {
    this.ingredients.remove(ingredient);
  }

  storeList() {
    // let url=this.dbURL+this.authService.uid+'/'+'s-l.json'+'?auth='+this.authService.uid;
    let url = dbURL + this.authService.uid + '/' + 's-l.json';
    return this.httpClient.put(url, this.ingredients)
  }

  fetchList() {
    let url = dbURL + this.authService.uid + '/' + 's-l.json';
    return this.httpClient.get(url)
      .pipe(
        tap((i: any[]) => {
            console.log(i);
            this.ingredients = i;
          }
        )
      )


  }

}
