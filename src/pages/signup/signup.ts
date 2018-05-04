import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authService: AuthService,
              private  loadingController: LoadingController,
              private alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onSubmit(frm: NgForm) {
    console.log(frm)
    let loadingController = this.loadingController.create({
      content: 'signing up...'
    });
    loadingController.present();
    this.authService.signUp(frm.value.email, frm.value.pwd)
      .then(i => loadingController.dismissAll())
      .catch(i => {
        loadingController.dismissAll();
        this.alertController.create({
          message: i.message,
          title: 'didnt sign up',
          buttons:['Ok']
        }).present();
      })

  }

}
