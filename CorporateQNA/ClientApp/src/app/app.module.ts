import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AuthModule, LogLevel, OidcConfigService } from 'angular-auth-oidc-client';
import { HttpClientModule } from '@angular/common/http';

export function configureAuth(oidcConfigService: OidcConfigService) {
  return () =>
      oidcConfigService.withConfig({
          tokenRefreshInSeconds:600,
          stsServer: 'https://localhost:5001',
          redirectUrl: window.location.origin,
          postLogoutRedirectUri: window.location.origin,
          clientId: 'js',
          scope: 'openid profile email api',
          responseType: 'code',
          logLevel: LogLevel.Debug,
      });
}

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    AuthModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    OidcConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: configureAuth,
            deps: [OidcConfigService],
            multi: true,
        }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
