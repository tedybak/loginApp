import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

import { Injectable } from "@angular/core";
import { resolve } from "url";
import { reject } from "q";
 import 'rxjs/add/operator/map';
 import 'rxjs/Rx';
 import { map } from 'rxjs/operators';





@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  registerUser(email: string, password: string) {
    return new Promise((resolve, reject) =>
      this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
        userData => resolve(userData),
        error => reject(error)
      )
    );
  }


  loginEmail(email:string, password: string) {

    return new Promise((resolve, reject) =>
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
        error => reject(error))
    );

  }


  getAuth(){
    return this.afAuth.authState.pipe(map( auth => auth));
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
