import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfunctionComponent } from './searchfunction.component';

describe('SearchfunctionComponent', () => {
  let component: SearchfunctionComponent;
  let fixture: ComponentFixture<SearchfunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchfunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
