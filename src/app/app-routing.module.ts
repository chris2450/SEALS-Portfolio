import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactMeComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'admin/login',
    component: LoginComponent

  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactMeComponent
  },
  {
    path: 'blog/:id',
    component: BlogComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
