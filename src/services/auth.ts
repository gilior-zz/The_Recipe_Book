import {Injectable} from '@angular/core';
import firebase from 'firebase'

@Injectable()
export class AuthService {

  constructor() {
  }

  get user(): firebase.User {
    return firebase.auth().currentUser;
  }

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
