import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./componentes/home-page/home-page.component";
import { LoginPageComponent } from "./componentes/login-page/login-page.component";
import { RegisterPageComponent } from "./componentes/register-page/register-page.component";
import { NotFoundPageComponent } from "./componentes/not-found-page/not-found-page.component";
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "login", component: LoginPageComponent },
  { path: "home", component: HomePageComponent },
  { path: "registrarse", component: RegisterPageComponent },
  { path: "privado", component: PrivadoPageComponent },
  { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
