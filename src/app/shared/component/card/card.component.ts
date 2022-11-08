import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // SC : https://angular.io/guide/inputs-outputs
  @Input() item: any;
}
