import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeDosComponent } from './screen-dos.component';

describe('ScreenDosComponent', () => {
  let component: ScreeDosComponent;
  let fixture: ComponentFixture<ScreeDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
