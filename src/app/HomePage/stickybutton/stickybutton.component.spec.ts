import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickybuttonComponent } from './stickybutton.component';

describe('StickybuttonComponent', () => {
  let component: StickybuttonComponent;
  let fixture: ComponentFixture<StickybuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickybuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickybuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
