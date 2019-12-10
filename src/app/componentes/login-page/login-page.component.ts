import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string;
  password: string;
  error:string;

  @Output() isLoggued = new EventEmitter();

   constructor(private authLogin: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin() {

    this.authLogin.loginEmail(this.email, this.password).then(
      (resp) => {
        this.isLoggued.emit("logged");
        console.log(this.isLoggued)
        this.router.navigate(["privado"])

      }).catch((error)=>{
        this.error = error.message
      })

    }

}
