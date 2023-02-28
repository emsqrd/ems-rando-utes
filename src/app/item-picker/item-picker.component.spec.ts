import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPickerComponent } from './item-picker.component';

describe('NamePickerComponent', () => {
  let component: ItemPickerComponent;
  let fixture: ComponentFixture<ItemPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPickerComponent ],
      imports: [ HttpClientModule ],
      providers: [ HttpClient ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
