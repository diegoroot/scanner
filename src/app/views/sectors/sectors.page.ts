import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Location} from '@angular/common';
import { ModalController } from '@ionic/angular';

// Service provider
import { SectorsService } from '../../services/sectors/sectors.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.page.html',
  styleUrls: ['./sectors.page.scss'],
})
export class SectorsPage implements OnInit {


  sectors: any[];

  constructor(public sectorService: SectorsService,
              public loadingController: LoadingController,
              public _location: Location,
              public modalCrl: ModalController) { }

  ngOnInit() {
    this.getAllSectors();
  }

  public async getAllSectors() {
  const loading = await this.loadingController.create({
    // content: 'Loading';
  });
  await loading.present();
  await this.sectorService.getAll()
    .subscribe(res => {
      this.sectors = res.interests;
      console.log(this.sectors);
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

    backSite() {
    this.modalCrl.dismiss();
    }

}
