import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compa2Component } from './compa2.component';

describe('Compa2Component', () => {
  let component: Compa2Component;
  let fixture: ComponentFixture<Compa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compa2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
