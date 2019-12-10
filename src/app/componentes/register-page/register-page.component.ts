import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.scss"]
})
export class RegisterPageComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {}
  email: string;
  password: string;
  onSubmitAddUser() {
    this.auth
      .registerUser(this.email, this.password)
      .then(res => {
        this.router.navigate(["privado"]);
      })
      .catch(error => {
        this.router.navigate(["login"]);
      });
  }
}
