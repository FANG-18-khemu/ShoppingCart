import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytableComponent } from './displaytable.component';

describe('DisplaytableComponent', () => {
  let component: DisplaytableComponent;
  let fixture: ComponentFixture<DisplaytableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaytableComponent]
    });
    fixture = TestBed.createComponent(DisplaytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
