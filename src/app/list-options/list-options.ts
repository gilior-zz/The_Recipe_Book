import {IonicPage, IonicPageModule, ViewController} from "ionic-angular";
import {Component, NgModule} from "@angular/core";

@IonicPage()
@Component({
  selector: 'list-options',
  template: `
    <ion-list>
      <ion-list>
        <button (click)="onAction('save')" ion-item outline>save list</button>
        <button (click)="onAction('load')" ion-item outline>load list</button>
      </ion-list>
    </ion-list>`
})

export class ListOptionsPage {
  constructor(private viewController: ViewController) {

  }

  onAction(action: string) {
    this.viewController.dismiss({action})
  }
}

