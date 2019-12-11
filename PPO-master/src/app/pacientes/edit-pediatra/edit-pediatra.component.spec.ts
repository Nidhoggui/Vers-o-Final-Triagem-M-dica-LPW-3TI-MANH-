import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPediatraComponent } from './edit-pediatra.component';

describe('EditPediatraComponent', () => {
  let component: EditPediatraComponent;
  let fixture: ComponentFixture<EditPediatraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPediatraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPediatraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
