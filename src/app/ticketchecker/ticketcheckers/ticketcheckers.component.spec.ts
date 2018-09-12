import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketcheckersComponent } from './ticketcheckers.component';

describe('TicketcheckersComponent', () => {
  let component: TicketcheckersComponent;
  let fixture: ComponentFixture<TicketcheckersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketcheckersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketcheckersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
