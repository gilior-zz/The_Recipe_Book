import {ChangeDetectorRef, Component} from '@angular/core';
import {
  AlertController,
  IonicPage,
  LoadingController,
  NavController,
  NavParams,
  PopoverController
} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {ShoppingListService} from "../../services/shopping-list.service";
import {Ingredient} from "../../models/models";
import {AuthService} from "../../services/auth";
import {HttpErrorResponse} from "@angular/common/http";

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
              private  changeDetectorRef: ChangeDetectorRef,
              private  popoverController: PopoverController,
              private  authService: AuthService,
              private loadingController: LoadingController,
              private alertController: AlertController) {
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

  onRemove(item: Ingredient) {
    this.shoppingListService.removeIngredient(item);
  }

  onShowOptions(mse: MouseEvent) {

    let l = this.popoverController.create('SlOptionsPage');
    l.present({ev: mse});
    l.onDidDismiss(data => {
      let loadingController = this.loadingController.create({content: 'plz wait'});
      loadingController.present();
      loadingController.dismissAll();
      if (data.action === 'load') {
        this.shoppingListService.fetchList()
          .subscribe(
            i => loadingController.dismissAll(),
            error2 => {
              this.handleError;
              loadingController.dismissAll()
            }
          )

      }
      else {
        this.shoppingListService.storeList()
          .subscribe(
            i => loadingController.dismissAll(),
            error2 => {
              this.handleError;
              loadingController.dismissAll()
            }
          )
        loadingController.dismissAll();
      }

    })

  }

  private handleError(err: HttpErrorResponse) {
    let l = this.alertController.create({title: 'oopssss', message: err.message, buttons: ['Ok']});
    l.present();
  }


}
