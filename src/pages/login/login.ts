import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-login',
 	templateUrl: 'login.html',
 })
 export class LoginPage {

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 		
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad LoginPage');
 	}
 	goToSignup():void {
 		this.navCtrl.push('SignupPage');
 	}
 	goToResetPassword():void {
 		this.navCtrl.push('ResetPasswordPage');
 	}

 	goToHome():void{
 		this.navCtrl.push(HomePage);
 	}
 }
