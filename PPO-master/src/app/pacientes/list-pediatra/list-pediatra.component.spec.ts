import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPediatraComponent } from './list-pediatra.component';

describe('ListPediatraComponent', () => {
  let component: ListPediatraComponent;
  let fixture: ComponentFixture<ListPediatraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPediatraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPediatraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
