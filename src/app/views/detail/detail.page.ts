import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../../services/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Location} from '@angular/common';
import { QrCouponPage } from '../qr-coupon/qr-coupon.page';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {


  public id: string;
  public viewType: string;
  public user_name: string;
  public lorem: string;
  public msjHeader: string;
  public enterprise: string;

  coupon: any = {};
  public classStyle = '';

  constructor
  (
  public api: RestApiService,
  public loadingController: LoadingController,
  public route: ActivatedRoute,
  public router: Router,
  public alertController: AlertController,
  private _location: Location,
  public modalController: ModalController
  ) {
    // this.id=this.route.snapshot.paramMap.get('id');
    // this.viewType=this.route.snapshot.paramMap.get('viewType');
  this.route.queryParams.subscribe(params => {
      this.id = params['coupon_id'];
      this.viewType = params['viewType'];
  });
    console.log(this.id + '--<>>>>' + this.viewType);
    this.lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor.';
  }

    async takeCoupon() {
      const alert = await this.alertController.create({
        header: 'Notificación!',
        subHeader: 'Hola User',
        message: 'Esta seguro que desea descargar el cupon',
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

    ngOnInit() {
      this.getCouponsId();
    }

  async getCouponsId() {
  const loading = await this.loadingController.create({
    // content: 'Loading';
  });
  await loading.present();
  await this.api.getCouponById(this.id)
    .subscribe(res => {
      this.enterprise = res.enterprise;
      if (res.count > 1) {
        this.msjHeader = res.count + ' disponibles en ' + res.enterprise;
      }
      this.coupon = res;
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
}

backSite() {
  this._location.back();
}

async scanCoupon() {
  let data = { message : 'hello world' };
  const modal = await this.modalController.create({
    component: QrCouponPage,
    componentProps: { value: data }
  });
  this.classStyle = 'scan';
  modal.onDidDismiss()
  .then((data) => {
  this.classStyle = 'hydrated';
  console.log(data);
  });
  return await modal.present();
}

}
