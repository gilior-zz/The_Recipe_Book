import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onSubmit(frm: NgForm) {
    console.log(frm)
    this.authService.signUp(frm.value.email,frm.value.pwd)
      .then(i=>console.log(i))
      .catch(i=>console.log(i))
  }

}
