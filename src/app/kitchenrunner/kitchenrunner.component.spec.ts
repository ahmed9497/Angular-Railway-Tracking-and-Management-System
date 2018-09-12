import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenrunnerComponent } from './kitchenrunner.component';

describe('KitchenrunnerComponent', () => {
  let component: KitchenrunnerComponent;
  let fixture: ComponentFixture<KitchenrunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenrunnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenrunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
