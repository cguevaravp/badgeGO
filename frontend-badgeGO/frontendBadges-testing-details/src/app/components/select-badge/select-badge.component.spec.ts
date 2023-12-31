import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBadgeComponent } from './select-badge.component';

describe('SelectBadgeComponent', () => {
  let component: SelectBadgeComponent;
  let fixture: ComponentFixture<SelectBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
