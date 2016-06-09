import {Component} from '@angular/core';
import {NavController, Modal, Alert} from 'ionic-angular';
import {MoldeLancamentosPage} from '../molde-lancamentos/molde-lancamentos';
import {DAOLancamentos} from '../../dao/dao-lancamentos';
import {DataUtil} from '../../util/data-util';
import {DataFilter} from '../../components/data-filter';

@Component({
  templateUrl: 'build/pages/lancamentos/lancamentos.html',
  directives: [DataFilter]
})
export class LancamentosPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
    this.dao = new DAOLancamentos();
    this.listLancamentos = [];

    this.dao.getList((lista)=>{
      this.listLancamentos = lista;
    });
  }

  insert (){
    let modal = Modal.create(MoldeLancamentosPage);

    modal.onDismiss((data) => {
      if(data){
        this.dao.insert(data, (lancamento) => {
          this.listLancamentos.push(lancamento);
        })
      }
    })

    this.nav.present(modal);
  }

  delete(lancamento){
    let confirm = Alert.create({
      title: "Excluir",
      body: "Deseja prosseguir com a exclusão do lançamento "+"\""+lancamento.descricao+"\"?",
      buttons: [{
        text: "Sim",
        handler: () => {
          this.dao.delete(lancamento, (lancamento) => {
            let pos = this.listLancamentos.indexOf(lancamento);
            this.listLancamentos.splice(pos, 1);
          });
        }
      },{
        text: "Não"
      }]
    });

    this.nav.present(confirm);
  }

  edit(lancamento){
    let modal = Modal.create(MoldeLancamentosPage, {parametro: lancamento});

    modal.onDismiss((data) => {
      if(data){
        this.dao.edit(lancamento, (lancamento) => {

        });
      }

    });

    this.nav.present(modal);
  }

  getDate(lancamento){
    let dataUtil = new DataUtil;
    return dataUtil.parseString(lancamento.data);
  }

  situacaoLancamento(lancamento){
    return lancamento.pago ? "Pago" : "Não pago"
  }

  lancamentoEntrada(lancamento){
    return lancamento.entradaSaida == "entrada";
  }
}
