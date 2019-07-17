import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import { firebaseConfig } from '../config';
import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';




import { TranslateService } from '@ngx-translate/core';

export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
       AngularFireModule.initializeApp(firebaseConfig.fire),
        FormsModule,
         ReactiveFormsModule,
          NgxErrorsModule,
          AngularFirestoreModule,
          HttpClientModule,
          TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: (LanguageLoader),
              deps: [HttpClient]
            }})
        ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    { provide: FirestoreSettingsToken, useValue: {} },
    AngularFireAuth,
    AuthService,
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
