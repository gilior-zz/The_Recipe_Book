import {Injectable} from '@angular/core';
import firebase from 'firebase'

@Injectable()
export class AuthService {

  constructor() {
  }

  get user(): firebase.User {
    return firebase.auth().currentUser;
  }

  get uid(): string {
    return firebase.auth().currentUser.uid;
  }

 // async get userToken(): string {
 //    let l=await firebase.auth().currentUser.getToken();
 //   return l;
 //
 //  }

  signUp(email: string, pwd: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, pwd)
  }

  signIn(email: string, pwd: string) {
    return firebase.auth().signInWithEmailAndPassword(email, pwd)
  }

  signOut() {
    return firebase.auth().signOut()

  }
}
