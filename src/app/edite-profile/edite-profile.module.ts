import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditeProfileComponent } from './edite-profile.component';
import { UserPopupComponent } from '../user-popup/user-popup.component';

@NgModule({
  declarations: [
    EditeProfileComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class EditProfileModule { }
