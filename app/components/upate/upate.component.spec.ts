import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpateComponent } from './upate.component';

describe('UpateComponent', () => {
  let component: UpateComponent;
  let fixture: ComponentFixture<UpateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
