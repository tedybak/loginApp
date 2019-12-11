import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string;
  password: string;
  error:string;


   constructor(private authLogin: AuthService, private router: Router, private flashMessageService:FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitLogin() {

    this.authLogin.loginEmail(this.email, this.password).then(
      (resp) => {
        this.flashMessageService.show('se ha logueado con exito', { cssClass: 'alert-success', timeout: 5000 });

        this.router.navigate(["privado"])

      }).catch((error)=>{
        this.error = error.message
      })

    }

}
