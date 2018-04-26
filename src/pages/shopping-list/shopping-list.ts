import {ChangeDetectorRef, Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {ShoppingListService} from "../../services/shopping-list.service";
import {Ingredient} from "../../models/ingredient";

/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  ingredientName: string;
  amount: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  shoppingListService: ShoppingListService,
              private  changeDetectorRef: ChangeDetectorRef) {
  }

  get items(): Ingredient[] {
    return this.shoppingListService.getIngredient()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }

  onSubmit(f: NgForm) {
    let ingredientName = f.form.get('ingredientName').value;
    let amount = f.form.get('amount').value;
    this.shoppingListService.addIngredient(new Ingredient(ingredientName, amount));
    f.reset();
    // this.changeDetectorRef.detectChanges();
  }

}
