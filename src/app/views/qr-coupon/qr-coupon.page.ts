import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams  } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-qr-coupon',
  templateUrl: './qr-coupon.page.html',
  styleUrls: ['./qr-coupon.page.scss'],
})
export class QrCouponPage implements OnInit {


  public data = {};

  constructor(public qrScanner: QRScanner,
              public modalCrl: ModalController,
              public params: NavParams
              ) {

               }

  ngOnInit() {
    this.testQr();
    // this.params.get('value');
    this.data = this.params.get('value');
  }

  backSite() {
    // let data = { 'foo': 'bar' };
    this.modalCrl.dismiss(this.data);
    }

  testQr() {
    this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted

       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });

       this.showCamera();

       this.qrScanner.resumePreview();
       // show camera preview
       this.qrScanner.show()
       .then((data: QRScannerStatus) => {
         console.log('datashowing', data.showing);
       }, err => {
         console.log('reading error');
       });

     } else if (status.denied) {
      console.log('Sin permisos');
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is', e));
  }


  // https://github.com/bitpay/cordova-plugin-qrscanner/issues/204
showCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
}

hideCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
    let content = <HTMLElement>document.getElementsByTagName('body')[0];
    content.style.background = 'white !important';
}

}
