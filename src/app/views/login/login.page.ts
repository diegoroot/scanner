import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { LoginService} from '../../services/login/login.service';
// import { NavController } from 'ionic-angular';
import { ListPage} from '../../list/list.page';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private fb: Facebook,
              public loginService: LoginService,
              private router: Router) { }

  user: any = {};
  userData: any = {};

  ngOnInit() {}

    logIng(userData: any) {
        // this.navCtrl.push(ListPage,userData);
        // this.router.navigateByUrl('/list');
        let navigationExtras: NavigationExtras = {
          queryParams: {
              'id': userData.id,
              'name': userData.name,
              'email': userData.email,
              'first_name': userData.first_name,
              'last_name': userData.last_name
          }
      };
        this.router.navigate(['list'], navigationExtras);
    }

    logIng2() {
        // this.navCtrl.push(ListPage,userData);
          this.userData = {
          id:	'2116179175073463',
          name:	'Royer David Estrada Esponda',
          email:	'rogerthebrother@hotmail.com',
          first_name:	'Royer',
          last_name:	'Estrada Esponda'
        };
        console.log(this.userData);
        let navigationExtras: NavigationExtras = {
          queryParams: {
              'firstname': 'Royer',
              'lastname': 'David'
          }
      };
         this.router.navigate(['list'], navigationExtras);
    }
/*
*
*
*/
  logInFb() {
    this.fb.login(['public_profile', 'email'])
    .then((res: FacebookLoginResponse) => {
        if (res.status === 'connected') {
          this.user.img = 'https://graph.facebook.com/' + res.authResponse.userID + '/picture?type=square';
          this.getdata(res.authResponse.accessToken);
        } else {
          alert('Log In failed');
        }
        console.log('Logged into Facebook!', res);
        })
    .catch(e => console.log('Error logging into Facebook', e));
  }

/**Obtener los datos publicos del proveedor de autenticaciòn FB
 */
 async getdata(access_token: string) {
    // let url = "https://graph.facebook.com/me?fields=id,name,email,first_name,last_name&access_token="+access_token;
    await this.loginService.getData(access_token)
    .subscribe(res => {
      console.log(res);
      this.userData = res.res;
      this.logIng(this.userData);
    }, err => {
      console.log(err);
    });
  }
}
