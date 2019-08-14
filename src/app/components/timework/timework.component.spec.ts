import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeworkComponent } from './timework.component';

describe('TimeworkComponent', () => {
  let component: TimeworkComponent;
  let fixture: ComponentFixture<TimeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
