import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddColComponent } from './add-col.component';

describe('AddColComponent', () => {
  let component: AddColComponent;
  let fixture: ComponentFixture<AddColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
