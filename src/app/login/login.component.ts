import { Component } from '@angular/core';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { Firestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LottieModule,MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private firestore : Firestore) {
    this.firestore = firestore;
  };
  fetchFormData() : void{

  }
}
