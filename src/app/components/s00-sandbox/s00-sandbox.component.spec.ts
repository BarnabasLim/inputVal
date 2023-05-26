import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S00SandboxComponent } from './s00-sandbox.component';

describe('S00SandboxComponent', () => {
  let component: S00SandboxComponent;
  let fixture: ComponentFixture<S00SandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S00SandboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S00SandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
