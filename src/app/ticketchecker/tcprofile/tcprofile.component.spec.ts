import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcprofileComponent } from './tcprofile.component';

describe('TcprofileComponent', () => {
  let component: TcprofileComponent;
  let fixture: ComponentFixture<TcprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
