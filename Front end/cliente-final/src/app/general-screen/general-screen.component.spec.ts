import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralScreenComponent } from './general-screen.component';

describe('GeneralScreenComponent', () => {
  let component: GeneralScreenComponent;
  let fixture: ComponentFixture<GeneralScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
