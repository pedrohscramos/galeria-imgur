import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGalleryComponent } from './display-gallery.component';

describe('DisplayGalleryComponent', () => {
  let component: DisplayGalleryComponent;
  let fixture: ComponentFixture<DisplayGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayGalleryComponent]
    });
    fixture = TestBed.createComponent(DisplayGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
