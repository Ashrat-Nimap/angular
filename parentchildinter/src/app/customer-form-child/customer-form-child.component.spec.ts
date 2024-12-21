import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormChildComponent } from './customer-form-child.component';

describe('CustomerFormChildComponent', () => {
  let component: CustomerFormChildComponent;
  let fixture: ComponentFixture<CustomerFormChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerFormChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFormChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
