import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsPanelComponent } from './logs-panel.component';

describe('LogsPanelComponent', () => {
  let component: LogsPanelComponent;
  let fixture: ComponentFixture<LogsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
