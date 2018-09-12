import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoprofileComponent } from './roprofile.component';

describe('RoprofileComponent', () => {
  let component: RoprofileComponent;
  let fixture: ComponentFixture<RoprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
