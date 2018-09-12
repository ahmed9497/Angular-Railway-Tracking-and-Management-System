import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketcheckerComponent } from './ticketchecker.component';

describe('TicketcheckerComponent', () => {
  let component: TicketcheckerComponent;
  let fixture: ComponentFixture<TicketcheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketcheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketcheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
