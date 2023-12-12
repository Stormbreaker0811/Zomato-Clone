import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { Firestore } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    Firestore,
    Auth
  ]
})
export class AppModule { }
