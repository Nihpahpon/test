import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compb2Component } from './compb2.component';

describe('Compb2Component', () => {
  let component: Compb2Component;
  let fixture: ComponentFixture<Compb2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compb2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
