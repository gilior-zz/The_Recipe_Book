import {IonicPage, ViewController} from "ionic-angular";
import {Component} from "@angular/core";

@IonicPage()
@Component({
  templateUrl: 'sl-options.html'

})
export class SlOptionsPage {
  constructor(private viewController: ViewController) {

  }

  onAction(action: string) {
    this.viewController.dismiss({action})
  }
}
