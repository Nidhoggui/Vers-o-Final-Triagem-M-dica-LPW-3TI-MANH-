import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FebreComponent } from './febre.component';

describe('FebreComponent', () => {
  let component: FebreComponent;
  let fixture: ComponentFixture<FebreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FebreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FebreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
