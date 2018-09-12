import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainrouteListComponent } from './trainroute-list.component';

describe('TrainrouteListComponent', () => {
  let component: TrainrouteListComponent;
  let fixture: ComponentFixture<TrainrouteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainrouteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainrouteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
