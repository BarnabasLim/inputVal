import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S01StatusPropertiesComponent } from './s01-status-properties.component';

describe('S01StatusPropertiesComponent', () => {
  let component: S01StatusPropertiesComponent;
  let fixture: ComponentFixture<S01StatusPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S01StatusPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S01StatusPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
