import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Recipe} from "../../models/models";
import {RecipesService} from "../../services/recipes.service";

/**
 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private RecipesService: RecipesService) {
  }

  get recipes(): Recipe[] {
    return this.RecipesService.getRecipes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }

  onNewRecipe() {

    this.navCtrl.push('EditRecipePage');
  }

  onLoadRecipe(recipe: Recipe) {
    this.navCtrl.push('RecipePage', recipe)
  }
}
