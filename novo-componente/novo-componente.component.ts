import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  template: `
  <input type="text" [disabled]="isDisabled" [class]="fundo">
  <button type="button" (click) ="cliqueBtn()" [class]="fundo">{{isDisabled? 'off' : 'on'}}</button>

  `,
  styles: [
    `
    .verde {
      background-color: green;
    }

    .vermelho {
      background-color: red;
    }

  `
  ],
})
export class NovoComponenteComponent {
  public isDisabled: boolean = false;

  public fundo: string = 'verde';
  private cont: number = 0;


  public cliqueBtn(){
    this.isDisabled = !this.isDisabled;
    (++this.cont);
    if(this.cont % 2 == 0 ){
      console.log('verde');
      this.fundo = 'verde';

    } else {
      console.log('vermelho');
      this.fundo = 'vermelho';
    }
  }
}
