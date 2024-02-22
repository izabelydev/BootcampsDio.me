import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome:string = ''

  constructor() {
    console.log(`Olá ${this.nome}, esse é o Constructor`);

   }

  ngOnChanges(): void {
    console.log(`Olá ${this.nome}, esse é o OnChange`);
  }

  ngOnInit(): void {
    this.nome = 'x';
    console.log(`Olá ${this.nome}, esse é o OnInit`);
  }

}
