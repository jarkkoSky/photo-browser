import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePhotoPageComponent } from './single-photo-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('SinglePhotoPageComponent', () => {
  let component: SinglePhotoPageComponent;
  let fixture: ComponentFixture<SinglePhotoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePhotoPageComponent],
      imports: [
        SharedModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatProgressSpinnerModule
      ]
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
