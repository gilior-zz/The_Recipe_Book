import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import firebase from 'firebase'

import {TabsPage} from "../pages/tabs/tabs";
import {SigninPage} from "../pages/signin/signin";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav') nav: NavController;
  tabsPage: any = TabsPage;
  signinPage: string = 'SigninPage'
  signupPage: string = 'SignupPage'

  constructor(platform: Platform, statusBar: StatusBar,
              splashScreen: SplashScreen,
              private mnu: MenuController) {
    firebase.initializeApp({
      apiKey: "AIzaSyBZhLWjA2GdVm7Lei581s-smQ0TCnGAcu0",
      authDomain: "ion-recipe.firebaseapp.com"
    })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goTo(page) {
    this.nav.setRoot(page)
    this.mnu.close();
  }

  onLogout() {

  }
}

