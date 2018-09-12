import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrprofileComponent } from './krprofile.component';

describe('KrprofileComponent', () => {
  let component: KrprofileComponent;
  let fixture: ComponentFixture<KrprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
