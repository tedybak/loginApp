import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean;
  emailUsuario:string;
  nomberUsuario:string;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
    this.auth.getAuth().subscribe( (auth) => {
      if(auth){
        this.isLogin = true;
        this.nomberUsuario = auth.displayName;
        this.emailUsuario = auth.email
      }else{
        this.isLogin = false;
      }
    })
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['home']);
  }
}
