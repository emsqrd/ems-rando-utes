import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitySelectorComponent } from './utility-selector.component';

describe('UtilitySelectorComponent', () => {
  let component: UtilitySelectorComponent;
  let fixture: ComponentFixture<UtilitySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilitySelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
