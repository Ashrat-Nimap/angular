import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondReciverComponent } from './second-reciver.component';

describe('SecondReciverComponent', () => {
  let component: SecondReciverComponent;
  let fixture: ComponentFixture<SecondReciverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondReciverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondReciverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
