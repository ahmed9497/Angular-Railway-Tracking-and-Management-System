import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketcheckersListComponent } from './ticketcheckers-list.component';

describe('TicketcheckersListComponent', () => {
  let component: TicketcheckersListComponent;
  let fixture: ComponentFixture<TicketcheckersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketcheckersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketcheckersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
