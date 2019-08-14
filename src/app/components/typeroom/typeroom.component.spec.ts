import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyperoomComponent } from './typeroom.component';

describe('TyperoomComponent', () => {
  let component: TyperoomComponent;
  let fixture: ComponentFixture<TyperoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyperoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyperoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
