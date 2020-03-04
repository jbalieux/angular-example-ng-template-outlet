import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';


const routes: Routes = [
  { path:'home', component: DisplayComponent },
  { path:'error', component: DisplayComponent },
  { path:'nice', component: DisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
