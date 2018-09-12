import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenUnoComponent } from './screen-uno.component';

describe('ScreenUnoComponent', () => {
  let component: ScreenUnoComponent;
  let fixture: ComponentFixture<ScreenUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
