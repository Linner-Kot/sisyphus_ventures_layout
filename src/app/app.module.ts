import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditProfileModule } from './edite-profile/edite-profile.module';
import { UserPopupComponent } from './user-popup/user-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UserPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
