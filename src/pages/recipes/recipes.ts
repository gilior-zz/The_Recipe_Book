import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, PopoverController} from 'ionic-angular';
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
              private  popoverController: PopoverController,
              private loadingController: LoadingController) {
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
    let popoverController = this.popoverController.create('ListOptionsPage');
    popoverController.present({ev: event});
    let loadingController = this.loadingController.create({content: 'plz wait'});
    popoverController.onDidDismiss(data => {
      if (!data) return;
      if (data.action === 'load') {
        loadingController.present();
        this.recipesService.loadList()
          .subscribe(
            i => console.log(i),
            error2 => console.log(error2),
            () => loadingController.dismissAll()
          )
      }
      else {
        loadingController.present();
        this.recipesService.saveList()
          .subscribe(
            i => console.log(i),
            error2 => console.log(error2),
            () => loadingController.dismissAll()
          )
      }
    })
  }
}
