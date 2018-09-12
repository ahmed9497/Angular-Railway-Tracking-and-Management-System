import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationofficerComponent } from './reservationofficer.component';

describe('ReservationofficerComponent', () => {
  let component: ReservationofficerComponent;
  let fixture: ComponentFixture<ReservationofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
