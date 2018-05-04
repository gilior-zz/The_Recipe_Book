import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth";

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage implements AfterViewInit {
  @ViewChild('frm') frm: NgForm;
  email = 'a@a.com';
  pwd = '1q2w3e';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService,
              private  loadingController: LoadingController,
              private  alertController: AlertController) {
  }

  ngAfterViewInit(): void {
    this.frm.value.email = 'sdf'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
    this.email = 'a@a.com';
    this.pwd = '1q2w3e';
  }

  onSubmit(frm: NgForm) {
    let loadingController = this.loadingController.create({
      content: 'signing in...'
    })
    loadingController.present();
    this.authService.signIn(frm.value.email, frm.value.pwd)
      .then(i => {
        loadingController.dismissAll();
      })
      .catch(i => {
        let alertController = this.alertController.create({
          title: 'signini failed',
          message: i.message,
          buttons: ['Ok']
        });
        alertController.present();
      })
  }

}
