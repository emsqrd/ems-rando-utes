import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePickerComponent } from './name-picker.component';

describe('NamePickerComponent', () => {
  let component: NamePickerComponent;
  let fixture: ComponentFixture<NamePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
