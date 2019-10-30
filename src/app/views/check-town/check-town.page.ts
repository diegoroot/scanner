import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Location} from '@angular/common';

import { TownService } from '../../services/town/town.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-check-town',
  templateUrl: './check-town.page.html',
  styleUrls: ['./check-town.page.scss'],
})
export class CheckTownPage implements OnInit {

  constructor(private _location: Location,
              public api: TownService,
              public loadingController: LoadingController,
              public modalCrl: ModalController) { }

  searchQuery: string;
  towns: any[];
  items: string[];
  itemsAux: string[] = [];

  ngOnInit() {
    this.getAllTown();
    // this.initializeItems();
  }

    backSite() {
    // this._location.back();
    this.modalCrl.dismiss();
    }

     initializeItems() {
       /*this.items =[
                  'one',
                  'two',
                  'three',
                  'four',
                  'five',
                  'six'
                ];*/
                this.items = this.itemsAux;
  }

   async getAllTown() {
    /*const loading = await this.loadingController.create({
    content: 'Loading'
  });*/
   // await loading.present();
   // await
   this.api.getAll()
    .subscribe(res => {
       console.log(res.towns);
       this.towns = res.towns;
       for (let index = 0; index < this.towns.length; index++) {
         const element = this.towns[index];
         this.itemsAux.push(element.town_name);
       }
       console.log(this.itemsAux);
       this.items = this.itemsAux;
      // loading.dismiss();
    }, err => {
      console.log(err);
      // loading.dismiss();
    });
  }

getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

public townSelecter(ev: any) {
  // const val = ev.target.value;
  alert('hola' + ev);
}

public onAccountTypeChange() {
  alert('hola');
}

}
