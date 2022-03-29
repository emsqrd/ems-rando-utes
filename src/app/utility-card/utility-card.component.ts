import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'utility-card',
  templateUrl: './utility-card.component.html',
  styleUrls: ['./utility-card.component.css']
})
export class UtilityCardComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() utilityRoute: string | undefined;
  @Input() disableCard: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
