import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S05RestictInputComponent } from './s05-restict-input.component';

describe('S05RestictInputComponent', () => {
  let component: S05RestictInputComponent;
  let fixture: ComponentFixture<S05RestictInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S05RestictInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S05RestictInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
