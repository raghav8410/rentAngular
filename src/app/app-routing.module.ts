import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FaqComponent} from './faq/faq.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
   {
    path: "",
    component: HomeComponent,
    data: { title: "Home | Rent Frock" }
  },
  {
    path: "faq",
    component : FaqComponent,
    data: { title:"faq | Rent Frock"}
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
