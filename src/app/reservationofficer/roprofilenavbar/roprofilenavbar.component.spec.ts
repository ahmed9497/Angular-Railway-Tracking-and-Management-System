import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoprofilenavbarComponent } from './roprofilenavbar.component';

describe('RoprofilenavbarComponent', () => {
  let component: RoprofilenavbarComponent;
  let fixture: ComponentFixture<RoprofilenavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoprofilenavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoprofilenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
