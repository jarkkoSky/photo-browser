import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePhotoPageComponent } from './single-photo-page.component';

describe('SinglePhotoPageComponent', () => {
  let component: SinglePhotoPageComponent;
  let fixture: ComponentFixture<SinglePhotoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePhotoPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePhotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
