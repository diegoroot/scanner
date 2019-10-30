import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth.guard';
import {DetailPage} from './views/detail/detail.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'list/:myList',
    loadChildren: './list/list.module#ListPageModule',
    canActivate: [AuthGuard]
  },
    {
    path: 'list/:data',
    loadChildren: './list/list.module#ListPageModule',
    canActivate: [AuthGuard]
  },
  { path: 'detail',
    component: DetailPage,
    canActivate: [AuthGuard]
  },
  /*{
    path: 'detail',
    loadChildren: './views/detail/detail.module#DetailPageModule',
    canActivate: [AuthGuard]
  },*/
  {
    path: 'login',
    loadChildren: './views/login/login.module#LoginPageModule'
  },
  { path: 'user-profile',
   loadChildren: './views/user-profile/user-profile.module#UserProfilePageModule'
  },
  { path: 'check-town',
    loadChildren: './views/check-town/check-town.module#CheckTownPageModule'
  },
  { path: 'sectors',
   loadChildren: './views/sectors/sectors.module#SectorsPageModule'
  },
  { path: 'qr-coupon',
  loadChildren: './views/qr-coupon/qr-coupon.module#QrCouponPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
