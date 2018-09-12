import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainrouteComponent } from './trainroute.component';

describe('TrainrouteComponent', () => {
  let component: TrainrouteComponent;
  let fixture: ComponentFixture<TrainrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
