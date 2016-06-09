import {Component} from '@angular/core';

@Component({
  selector: "data-filter",
  template: `<ion-row>
    <ion-col width-10>
      <button favorite clear round><ion-icon name="arrow-dropleft-circle"></ion-icon></button>
    </ion-col>
    <ion-col width-75>
      <h4 favorite class="texto-destaque">Abril-2016</h4>
    </ion-col>
    <ion-col width-10>
      <button favorite clear round><ion-icon name="arrow-dropright-circle"></ion-icon></button>
    </ion-col>
  </ion-row>`
})

export class DataFilter {

}
