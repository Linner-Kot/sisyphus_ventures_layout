import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeProfile } from './main/edite-profile.component';

const routes: Routes = [
  { path: '', component: EditeProfile },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
