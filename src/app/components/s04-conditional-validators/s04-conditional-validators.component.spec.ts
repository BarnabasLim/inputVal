import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S04ConditionalValidatorsComponent } from './s04-conditional-validators.component';

describe('S04ConditionalValidatorsComponent', () => {
  let component: S04ConditionalValidatorsComponent;
  let fixture: ComponentFixture<S04ConditionalValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S04ConditionalValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S04ConditionalValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
