import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservamasajeComponent } from './reservamasaje.component';

describe('ReservamasajeComponent', () => {
  let component: ReservamasajeComponent;
  let fixture: ComponentFixture<ReservamasajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservamasajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservamasajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
