import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CurrentPage } from '../pages/current/current';
import { TimePage } from '../pages/time/time';
import { ReceiptPage } from '../pages/receipt/receipt';
import { MorePeoplePage } from '../pages/more-people/more-people';
import { AppprovedReceiptPage } from '../pages/appproved-receipt/appproved-receipt';
import { NotApprovedPage } from '../pages/not-approved/not-approved';
import { NeedMoreInfoPage } from '../pages/need-more-info/need-more-info';
import { HotelPage } from '../pages/hotel/hotel';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HotelPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

