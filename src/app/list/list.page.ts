import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../services/rest-api.service';

import { ModalController } from '@ionic/angular';
import { SectorsPage } from '../views/sectors/sectors.page';
import { CheckTownPage } from '../views/check-town/check-town.page';
// import { NavParams } from 'ionic-angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {


  /*private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }*/

public user = {name: null,
            id: null,
            first_name: null,
            last_name: null,
            email: null
          };

          firstname = '';
          lastname = '';
          public myItem = '';

constructor  (public api: RestApiService,
              public loadingController: LoadingController,
              public modalController: ModalController,
              public route: ActivatedRoute,
              public router: Router) {
              this.myItem = this.route.snapshot.paramMap.get('myList');
              console.log('.>>>>>' + this.myItem);

                  /* this.user ={
                    id: navParams.get('id'),
                    email: navParams.get('email'),
                    first_name: navParams.get('first_name'),
                    last_name: navParams.get('last_name'),
                    name: navParams.get('name')
                }
                console.log("---holauseFB"+this.user);*/
               }

  coupons = [];

  public cuopon = {
    id: null,
    description: null,
    count: null,
    couponsUri: null
  };

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
  ngOnInit() {
  this.getAllCopupons(this.myItem);
  /*this.user ={
      id:	this.route.snapshot.data.id,
      name:	this.route.snapshot.data.name,
      email:	this.route.snapshot.data.email,
      first_name:	this.route.snapshot.data.first_name,
      last_name:	this.route.snapshot.data.last_name
  };*/
  // this.user=this.route.snapshot.paramMap.get('data');
  // console.log(this.route.snapshot.paramMap.get('data'));
  // console.log(this.route.snapshot.data);
  // console.log(this.user);
  this.route.queryParams.subscribe(params => {
    this.firstname = params['firstname'];
    this.lastname = params['lastname'];
});
  }

  async openTowns() {
    const modal = await this.modalController.create({
          component: CheckTownPage,
          componentProps: { value: 123 }
        });
        return await modal.present();
  }

  async openSectors() {
        const modal = await this.modalController.create({
          component: SectorsPage,
          componentProps: { value: 123 }
        });
        return await modal.present();
  }

  async getAllCopupons(searchType: string) {
  /*const loading = await this.loadingController.create({
    content: 'Loading'
  });*/
  // await loading.present();
  // await
  this.api.getData()
    .subscribe(res => {
      console.log(res);
      this.coupons = res.coupons;
      // loading.dismiss();
    }, err => {
      console.log(err);
      // loading.dismiss();
    });
  }

/**
 * name
 */
public goToDetails(couponId: any) {
  console.log('hola coupon id ' + couponId);
  let navigationExtras: NavigationExtras = {
    queryParams: {
        'coupon_id': couponId,
        'viewType': this.myItem
    }
};
  this.router.navigate(['detail'], navigationExtras);
}

}
