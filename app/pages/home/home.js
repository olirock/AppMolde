import {Component} from '@angular/core';
import {LancamentosPage} from '../lancamentos/lancamentos';
import {SaldoPage} from '../saldo/saldo';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor() {
    this.saldo = SaldoPage;
    this.lancamentos = LancamentosPage;
  }

}
