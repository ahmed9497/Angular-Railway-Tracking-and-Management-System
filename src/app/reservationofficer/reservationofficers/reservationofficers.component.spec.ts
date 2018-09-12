import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationofficersComponent } from './reservationofficers.component';

describe('ReservationofficersComponent', () => {
  let component: ReservationofficersComponent;
  let fixture: ComponentFixture<ReservationofficersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationofficersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationofficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
