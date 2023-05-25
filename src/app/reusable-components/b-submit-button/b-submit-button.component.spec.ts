import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BSubmitButtonComponent } from './b-submit-button.component';

describe('BSubmitButtonComponent', () => {
  let component: BSubmitButtonComponent;
  let fixture: ComponentFixture<BSubmitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BSubmitButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BSubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
