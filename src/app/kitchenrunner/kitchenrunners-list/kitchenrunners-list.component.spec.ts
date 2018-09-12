import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenrunnersListComponent } from './kitchenrunners-list.component';

describe('KitchenrunnersListComponent', () => {
  let component: KitchenrunnersListComponent;
  let fixture: ComponentFixture<KitchenrunnersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenrunnersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenrunnersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
