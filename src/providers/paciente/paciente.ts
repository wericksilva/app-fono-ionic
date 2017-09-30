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

  constructor(public http: Http) {
    console.log('Hello PacienteProvider Provider');
  }

  getTodosPacientes() {
    return this.http.get(this.baseApiPath);
  }


  getApiKey(): string { 
    return "a2d9a311303a736feb7c73c45d26994f";
  }

}
