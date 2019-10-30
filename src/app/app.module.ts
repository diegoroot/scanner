import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { Geolocation } from '@ionic-native/geolocation';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
// import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';


import { CheckTownPageModule } from './views/check-town/check-town.module';
import { SectorsPageModule } from './views/sectors/sectors.module';
import { DetailPageModule } from './views/detail/detail.module';
import { QrCouponPageModule } from './views/qr-coupon/qr-coupon.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CheckTownPageModule,
    SectorsPageModule,
    QrCouponPageModule,
    DetailPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlertController,
    Geolocation,
    Facebook,
    QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
