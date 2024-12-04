import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatoryComponent } from './catory.component';

describe('CatoryComponent', () => {
  let component: CatoryComponent;
  let fixture: ComponentFixture<CatoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
