import { Component } from '@angular/core';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LottieModule,MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
