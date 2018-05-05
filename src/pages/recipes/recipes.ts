import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
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
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private recipesService: RecipesService,
              private  popoverController: PopoverController) {
  }

  get recipes(): Recipe[] {
    return this.recipesService.getRecipes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }

  onNewRecipe() {

    this.navCtrl.push('EditRecipePage');
  }

  onLoadRecipe(recipe: Recipe, index: number) {
    this.navCtrl.push('RecipePage', {recipe: recipe, index: index})
  }

  onSettings(event: MouseEvent) {
    let l = this.popoverController.create('RecOptionsPage');
    l.present({ev: event});
    l.onDidDismiss(data => {
      if (data.action === 'load') {
        this.recipesService.loadList()
          .subscribe(
            i => console.log(i),
            error2 => console.log(error2)
          )
      }
      else {
        this.recipesService.saveList()
          .subscribe(
            i => console.log(i),
            error2 => console.log(error2)
          )
      }
    })
  }
}
