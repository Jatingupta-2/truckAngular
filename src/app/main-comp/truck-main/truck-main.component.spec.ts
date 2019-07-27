import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckMainComponent } from './truck-main.component';

describe('TruckMainComponent', () => {
  let component: TruckMainComponent;
  let fixture: ComponentFixture<TruckMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
