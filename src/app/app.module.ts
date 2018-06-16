import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CurrentPage } from '../pages/current/current';
import { TimePage } from '../pages/time/time';
import { ReceiptPage } from '../pages/receipt/receipt';
import { MorePeoplePage } from '../pages/more-people/more-people';
import { AppprovedReceiptPage } from '../pages/appproved-receipt/appproved-receipt';
import { NotApprovedPage } from '../pages/not-approved/not-approved';
import { NeedMoreInfoPage } from '../pages/need-more-info/need-more-info';
import { HotelPage } from '../pages/hotel/hotel';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CurrentPage,
    TimePage,
    ReceiptPage,
    MorePeoplePage,
    AppprovedReceiptPage,
    NotApprovedPage,
    NeedMoreInfoPage,
    HotelPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CurrentPage,
    TimePage,
    ReceiptPage,
    MorePeoplePage,
    AppprovedReceiptPage,
    NotApprovedPage,
    NeedMoreInfoPage,
    HotelPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
