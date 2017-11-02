import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { CadastroContaPage } from '../cadastro-conta/cadastro-conta';
import { PacienteProvider } from '../../providers/paciente/paciente';
import { HomePage } from '../home/home';

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
  providers: [
    PacienteProvider
  ]
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private pacienteProvider: PacienteProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  vaiParatabPage(){
    this.loginPaciente();
    this.navCtrl.push(HomePage,this.paciente)
  }
  
  vaiParaCadastro(){
    this.navCtrl.push(CadastroContaPage);
}

paciente = {
  email: '',
  senha: ''
};


  loginPaciente() {
    this.pacienteProvider.loginPaciente(this.paciente).subscribe(() =>{
  });
  console.log(this.paciente)
}


}
