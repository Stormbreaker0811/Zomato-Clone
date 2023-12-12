import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "zomato-clone-angular", "appId": "1:983038628769:web:4ac7a8fed2819e5fd871e0", "databaseURL": "https://zomato-clone-angular-default-rtdb.asia-southeast1.firebasedatabase.app", "storageBucket": "zomato-clone-angular.appspot.com", "apiKey": "AIzaSyDZAW7fQiaow_53EzDIXUDPoEmJLa9nD5g", "authDomain": "zomato-clone-angular.firebaseapp.com", "messagingSenderId": "983038628769", "measurementId": "G-RKEVY5FPNC" }))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), provideAnimations()]
};
