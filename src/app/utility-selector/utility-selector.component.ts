import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility-selector',
  templateUrl: './utility-selector.component.html',
  styleUrls: ['./utility-selector.component.css']
})
export class UtilitySelectorComponent implements OnInit {

  public title: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.title = 'ems-rando-utes';
  }

}
