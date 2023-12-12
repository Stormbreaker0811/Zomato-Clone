import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes : Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'home',component: HomeComponent},
  {path: 'services',component: ServicesComponent},
  {path: 'about-us',component: AboutUsComponent},
  {path: 'contact-us',component: ContactUsComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [provideRouter(routes)]
})
export class AppRoutingModule { }
