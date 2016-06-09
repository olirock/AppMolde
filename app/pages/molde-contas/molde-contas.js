import {Component} from '@angular/core';
import {ViewController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/molde-contas/molde-contas.html',
})
export class MoldeContasPage {
  static get parameters(){
    return [[ViewController] ,[NavParams]]
  }

  constructor(view, params) {
    this.view = view;

    this.conta = params.get("parametro") || {descricao: ""};
  }

  cancel(){
    this.view.dismiss();
  }

  salvar(){
    this.view.dismiss(this.conta);
  }
}
