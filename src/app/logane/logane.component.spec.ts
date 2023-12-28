import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoganeComponent } from './logane.component';

describe('LoganeComponent', () => {
  let component: LoganeComponent;
  let fixture: ComponentFixture<LoganeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoganeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoganeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
