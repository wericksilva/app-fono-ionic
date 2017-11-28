import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PacienteProvider } from '../../providers/paciente/paciente';
import { LoginPage } from '../login/login';
import { Camera } from '@ionic-native/camera';
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

  public base64Image: string;

  constructor(private camera: Camera, public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private pacienteProvider: PacienteProvider) {
  }

  takePicture(){
    
        this.camera.getPicture({
          sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
      //      targetWidth: 1000,
      //      targetHeight: 1000
        }).then((imageData) => {
          // imageData is a base64 encoded string
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }, (err) => {
            console.log(err);
        });
    
    
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