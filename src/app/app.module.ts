import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DestinationComponent } from './destination/destination.component';
import { ToursComponent } from './tours/tours.component';
import { TraveltipsComponent } from './traveltips/traveltips.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterComponent,
    LoginpageComponent,
    DestinationComponent,
    ToursComponent,
    TraveltipsComponent,
    AboutusComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule

  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"travelista-173f5","appId":"1:524260066198:web:1be4233f81f912682dd3b7","storageBucket":"travelista-173f5.appspot.com","apiKey":"AIzaSyAedr2k75UOdpUkxJJNyQhZAiPaJnbyiB8","authDomain":"travelista-173f5.firebaseapp.com","messagingSenderId":"524260066198","measurementId":"G-LT20MK66W8"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
