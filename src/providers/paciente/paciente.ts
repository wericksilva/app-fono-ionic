import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PacienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PacienteProvider {

  private baseApiPath = "http://localhost:8080/pacientes/"

  private loginApiPath = "http://localhost:8080/pacientes/login/"

  constructor(public http: Http) {
    console.log('Hello PacienteProvider Provider');
  }


  cadastrarPaciente(paciente: any) {

    return this.http.post(this.baseApiPath, paciente);

  }

  loginPaciente(paciente: any) {

    return this.http.post(this.loginApiPath, paciente);

  }

  getTodosPacientes() {
    return this.http.get(this.baseApiPath);
  }


  getApiKey(): string {
    return "a2d9a311303a736feb7c73c45d26994f";
  }

}
