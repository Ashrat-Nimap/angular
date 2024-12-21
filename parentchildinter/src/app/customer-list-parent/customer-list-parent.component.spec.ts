import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListParentComponent } from './customer-list-parent.component';

describe('CustomerListParentComponent', () => {
  let component: CustomerListParentComponent;
  let fixture: ComponentFixture<CustomerListParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerListParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerListParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
