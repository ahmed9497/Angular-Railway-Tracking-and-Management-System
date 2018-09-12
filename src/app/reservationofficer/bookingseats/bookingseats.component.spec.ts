import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingseatsComponent } from './bookingseats.component';

describe('BookingseatsComponent', () => {
  let component: BookingseatsComponent;
  let fixture: ComponentFixture<BookingseatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingseatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingseatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
