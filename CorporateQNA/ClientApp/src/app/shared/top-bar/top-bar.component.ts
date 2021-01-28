import { JwtKey, OidcSecurityService } from 'angular-auth-oidc-client';
import { Icons } from '../font-awesome-icons';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styles: [
  ]
})
export class TopBarComponent implements OnInit {
  Icons = new Icons();
  CurrentDate = new Date();
  LoggedIn:boolean;
  userName:string = null;
  imageUrl:string = null;

  constructor(private oidcSecurityService:OidcSecurityService) { }

  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe((auth) => {
      console.log('is authenticated', auth)
        this.LoggedIn = auth;
        if(auth){
          var details = JSON.parse(sessionStorage.getItem('js_userData'));
          this.userName = details['name'];
          this.imageUrl = details['picture'];
        }
    });
  }

  login() {
    this.oidcSecurityService.authorize();
    
}

logout() {
    this.oidcSecurityService.logoff();
}

}
