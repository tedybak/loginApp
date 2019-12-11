import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.scss"]
})
export class RegisterPageComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router,public flashMessageService: FlashMessagesService) {}

  ngOnInit() {}
  email: string;
  password: string;
  error:string;
  onSubmitAddUser() {
    this.auth
      .registerUser(this.email, this.password)
      .then(res => {
            this.flashMessageService.show('ha creado usted un nuevo usuario', { cssClass: 'alert-success', timeout: 5000 });
            this.router.navigate(["privado"]);
      })
      .catch(error => {
        this.error = error.message;
         this.router.navigate(["login"]);
      });
  }
}
