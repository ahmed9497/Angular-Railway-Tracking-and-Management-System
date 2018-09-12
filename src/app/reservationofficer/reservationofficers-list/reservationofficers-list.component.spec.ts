import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationofficersListComponent } from './reservationofficers-list.component';

describe('ReservationofficersListComponent', () => {
  let component: ReservationofficersListComponent;
  let fixture: ComponentFixture<ReservationofficersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationofficersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationofficersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
