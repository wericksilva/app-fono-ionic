import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { PacienteProvider } from '../../providers/paciente/paciente';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    PacienteProvider
  ]
})
export class HomePage {

  

  public lista_pacientes = new  Array<any>();
  
    public nome_usuario: string = "werick silva ";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private pacienteProvider: PacienteProvider) {

  }

  public pacienteLogado = {

    email: '',
    senha: ''
  };
  
 ionViewDidLoad(paciente: any) {
  this.pacienteLogado = paciente;







   /* this.pacienteProvider.getTodosPacientes().subscribe(data=>{
      const response = (data as any);
     const objeto_retorno = JSON.parse(response._body);
      this.lista_pacientes = objeto_retorno;
      console.log(objeto_retorno);
    }, error =>{
      console.log(error);
    })
*/


  }
 


}
