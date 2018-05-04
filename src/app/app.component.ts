import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import firebase from 'firebase'

import {TabsPage} from "../pages/tabs/tabs";
import {SigninPage} from "../pages/signin/signin";
import {AuthService} from "../services/auth";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav') nav: NavController;
  tabsPage: any = TabsPage;
  signinPage: string = 'SigninPage'
  signupPage: string = 'SignupPage'
  isAuthenticated = false;

  constructor(platform: Platform, statusBar: StatusBar,
              splashScreen: SplashScreen,
              private mnu: MenuController,
              private authService: AuthService) {
    firebase.initializeApp({
      apiKey: "AIzaSyBZhLWjA2GdVm7Lei581s-smQ0TCnGAcu0",
      authDomain: "ion-recipe.firebaseapp.com"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.nav.setRoot(this.tabsPage);
      }
      else {
        this.isAuthenticated = false;
        this.nav.setRoot(this.signinPage);
      }
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
    this.authService.signOut();
    this.mnu.close();
  }
}

