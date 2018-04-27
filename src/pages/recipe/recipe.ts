import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {FormBuilder} from "@angular/forms";
import {Recipe} from "../../models/models";
import {RecipesService} from "../../services/recipes.service";

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  recipesService: RecipesService,
              private toastController:ToastController) {

  }

  ngOnInit(): void {
    this.recipe = this.navParams.data as Recipe;
  }


  onEdit() {
    this.navCtrl.push('EditRecipePage',this.recipe)
  }

  onDelete() {
    this.recipesService.removeRecipe(this.recipe);
    this.toastController.create({message:'deleted',duration:1000}).present();this.navCtrl.popToRoot();
  }
}
