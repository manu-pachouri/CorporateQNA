import { OidcSecurityService } from 'angular-auth-oidc-client';
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
  constructor(private oidcSecurityService:OidcSecurityService) { }

  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe((auth) => console.log('is authenticated', auth));
  }

  login() {
    this.oidcSecurityService.authorize();
}

logout() {
    this.oidcSecurityService.logoff();
}

}
