import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S03CustomValidatorsComponent } from './s03-custom-validators.component';

describe('S03CustomValidatorsComponent', () => {
  let component: S03CustomValidatorsComponent;
  let fixture: ComponentFixture<S03CustomValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S03CustomValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S03CustomValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
