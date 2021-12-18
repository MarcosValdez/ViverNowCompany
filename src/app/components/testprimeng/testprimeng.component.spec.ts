import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprimengComponent } from './testprimeng.component';

describe('TestprimengComponent', () => {
  let component: TestprimengComponent;
  let fixture: ComponentFixture<TestprimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprimengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestprimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
