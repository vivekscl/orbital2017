import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  email: string;
  password: string;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public authService: AuthProvider, public loadingCtrl: LoadingController) {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  register(){
 
    this.showLoader();
 
    let details = {
        email: this.email,
        password: this.password,
    };
 
    this.authService.createAccount(details).then((result) => {
      this.loading.dismiss();
      console.log(result);
    }, (err) => {
        this.loading.dismiss();
    });
 
  }

  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }

  closeModal() {
  	this.viewCtrl.dismiss();
  }
}
