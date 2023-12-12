import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'about-us', component: AboutUsComponent}
];
