import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs/observable/timer';
// import { Geolocation } from '@ionic-native/geolocation';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public msj = '';
  public lat: any;

  public appPages = [
    {
      title: 'Mis Cupones',
      url: '/list/1',
      icon: 'list',
      click: null
    },
    {
      title: 'Mi Perfil',
      url: '/user-profile',
      icon: 'list',
      click: null
    },
    /*{
      title: 'Elige Tu ciudad',
      url: '/check-town',
      icon: 'list',
      click:null
    },*/
    {
      title: 'Cerrar',
      url: '/login',
      icon: 'list',
      click: null
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private geolocation: Geolocation,
    private alertController: AlertController
  ) {
    this.initializeApp();
    // this.verPosicion();
  }

  showSplash = true; // <-- show animation

  initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();  // <-- hide static image
        timer(3000).subscribe(() => this.showSplash = false); // <-- hide animation after 3s
      });
    }

   verPosicion() {
      this.geolocation.getCurrentPosition().then((resp) => {
        // resp.coords.latitude
        // resp.coords.longitude
        console.log(resp); // solo sirve en nativo
        this.lat = resp.coords.latitude;
        this.saludar(resp.coords.longitude,resp.coords.latitude);
        }).catch((error) => {
          console.log('Error getting location', error);
        });
        /*let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
        // data can be a set of coordinates, or an error (if an error occurred).
         data.coords.latitude
         data.coords.longitude
        console.log('getting location:'+data.coords.latitude+" "+data.coords.longitude);
        });*/
    }

    async saludar(longitude: any, latitude: any) {
      this.msj = 'hola:' + longitude + ':' + latitude;
      const alert = await this.alertController.create({
        header: 'Notificación!',
        subHeader: 'Hola User',
        message: this.msj,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Confirmar',
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]
      });
      await alert.present();
    }
}
