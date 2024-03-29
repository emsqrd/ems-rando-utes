import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilitySelectorComponent } from '../utility-selector/utility-selector.component';

import { UtilityCardComponent } from './utility-card.component';

describe('UtilityCardComponent', () => {
  let component: UtilityCardComponent;
  let fixture: ComponentFixture<UtilityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityCardComponent, UtilitySelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
