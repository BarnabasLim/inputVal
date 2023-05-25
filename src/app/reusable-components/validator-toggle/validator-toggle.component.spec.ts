import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorToggleComponent } from './validator-toggle.component';

describe('ValidatorToggleComponent', () => {
  let component: ValidatorToggleComponent;
  let fixture: ComponentFixture<ValidatorToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatorToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
