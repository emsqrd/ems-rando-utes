import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'utility-card',
  templateUrl: './utility-card.component.html',
  styleUrls: ['./utility-card.component.css']
})
export class UtilityCardComponent implements OnInit {

  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
