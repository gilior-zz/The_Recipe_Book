import {IonicPage, ViewController} from "ionic-angular";
import {Component} from "@angular/core";

@IonicPage()
@Component({
  selector: 'rec-options',
  templateUrl: 'rec-options.html'
})

export class RecOptionsPage {


  constructor(private   viewController:ViewController){

  }
  onAction(action: string) {
    this.viewController.dismiss({action})
  }
}
