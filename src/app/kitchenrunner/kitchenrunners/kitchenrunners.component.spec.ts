import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenrunnersComponent } from './kitchenrunners.component';

describe('KitchenrunnersComponent', () => {
  let component: KitchenrunnersComponent;
  let fixture: ComponentFixture<KitchenrunnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenrunnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenrunnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
