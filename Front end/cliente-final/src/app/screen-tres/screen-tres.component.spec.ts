import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTresComponent } from './screen-tres.component';

describe('ScreenTresComponent', () => {
  let component: ScreenTresComponent;
  let fixture: ComponentFixture<ScreenTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
