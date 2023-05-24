import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardPanelComponent } from './standard-panel.component';

describe('StandardPanelComponent', () => {
  let component: StandardPanelComponent;
  let fixture: ComponentFixture<StandardPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
