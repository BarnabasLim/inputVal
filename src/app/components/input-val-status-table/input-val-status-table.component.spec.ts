import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValStatusTableComponent } from './input-val-status-table.component';

describe('InputValStatusTableComponent', () => {
  let component: InputValStatusTableComponent;
  let fixture: ComponentFixture<InputValStatusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputValStatusTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputValStatusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
