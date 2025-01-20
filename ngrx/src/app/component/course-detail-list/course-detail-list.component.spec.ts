import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailListComponent } from './course-detail-list.component';

describe('CourseDetailListComponent', () => {
  let component: CourseDetailListComponent;
  let fixture: ComponentFixture<CourseDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDetailListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
