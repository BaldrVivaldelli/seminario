import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenDosComponent } from './screen-dos.component';

describe('ScreenDosComponent', () => {
  let component: ScreenDosComponent;
  let fixture: ComponentFixture<ScreenDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
