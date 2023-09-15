import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeProfileComponent } from './edite-profile/edite-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'edit', component: EditeProfileComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
