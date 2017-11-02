import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PacienteProvider } from '../../providers/paciente/paciente';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CadastroContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-conta',
  templateUrl: 'cadastro-conta.html',
  providers: [
    PacienteProvider
  ]
})
export class CadastroContaPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private pacienteProvider: PacienteProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroContaPage');
  }

 
  

  alertSucesso() {
        let alert = this.alertCtrl.create({
          title: 'OK!',
          subTitle: 'Seu Cadastro foi realizado com sucesso!',
          buttons: ['OK']
        });
        alert.present();
      }


      onSubmit() {
        console.log('submitting form');
      }

  paciente = {
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    senha: '',
    confirmarSenha: ''
  };


  cadastrar() {
    this.pacienteProvider.cadastrarPaciente(this.paciente).subscribe(() =>{
    });
    
    this.navCtrl.push(LoginPage)
    this.alertSucesso();
    console.log(this.paciente)
  }

}
