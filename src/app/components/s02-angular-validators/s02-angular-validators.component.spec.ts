import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S02AngularValidatorsComponent } from './s02-angular-validators.component';

describe('S02AngularValidatorsComponent', () => {
  let component: S02AngularValidatorsComponent;
  let fixture: ComponentFixture<S02AngularValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S02AngularValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S02AngularValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
