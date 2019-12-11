import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthService } from "src/app/servicios/auth.service";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireModule } from "@angular/fire";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "src/app/app-routing.module";
import { environment } from "src/environments/environment";
import { HomePageComponent } from "./home-page/home-page.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { PrivadoPageComponent } from "./privado-page/privado-page.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { MainComponent } from "./main.component";
import { LoginGuardGuard } from "../guard/login-guard.guard";

import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NotFoundPageComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule.forRoot()
  ],
  providers: [AuthService, AngularFireAuth, LoginGuardGuard, FlashMessagesService],
  exports: [MainComponent]
})
export class CoreModule {}
