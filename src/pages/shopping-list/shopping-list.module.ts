import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingListPage } from './shopping-list';
import {ShoppingListService} from "../../services/shopping-list.service";

@NgModule({
  declarations: [
    ShoppingListPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingListPage),
  ],
  providers:[ShoppingListService]
})
export class ShoppingListPageModule {}
