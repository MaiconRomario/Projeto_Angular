import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductQuestionComponent } from './pages/product-question/product-question.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},

  {path: 'product-question', component:ProductQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
