import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeTresComponent } from './screen-tres.component';

describe('ScreeTresComponent', () => {
  let component: ScreeTresComponent;
  let fixture: ComponentFixture<ScreeTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
