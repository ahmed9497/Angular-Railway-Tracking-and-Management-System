import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignrouteComponent } from './assignroute.component';

describe('AssignrouteComponent', () => {
  let component: AssignrouteComponent;
  let fixture: ComponentFixture<AssignrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
