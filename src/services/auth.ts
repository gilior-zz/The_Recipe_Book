import {Injectable} from '@angular/core';
import firebase from 'firebase'
@Injectable()
export class AuthService {

  constructor() {
  }

  signUp(email:string,pwd:string){return firebase.auth().createUserWithEmailAndPassword(email,pwd)}
}
