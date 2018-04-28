import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Recipe} from "../../models/models";
import {RecipesService} from "../../services/recipes.service";
import {ShoppingListService} from "../../services/shopping-list.service";

/**
 * Generated class for the RecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage implements OnInit {
  private recipe: Recipe;
  private index: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  recipesService: RecipesService,
              private toastController: ToastController,
              private shoppingListService: ShoppingListService) {

  }

  ngOnInit(): void {
    this.recipe = this.navParams.get('recipe') as Recipe;
    this.index = this.navParams.get('index') as number;
  }


  onEdit() {
    this.navCtrl.push('EditRecipePage', {recipe:this.recipe,index:this.index})
  }

  onDelete() {
    this.recipesService.removeRecipe(this.recipe);
    this.toastController.create({message: 'deleted', duration: 1000}).present();
    this.navCtrl.popToRoot();
  }

  onAddIngredients() {
    this.shoppingListService.addIngredient(this.recipe.ingredients);
  }
}
