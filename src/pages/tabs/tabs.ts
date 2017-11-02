import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AtividadePage } from '../atividade/atividade';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AtividadePage;

  constructor() {

  }
}
