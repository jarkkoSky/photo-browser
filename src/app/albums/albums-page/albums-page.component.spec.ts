import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsPageComponent } from './albums-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AlbumsPageComponent', () => {
  let component: AlbumsPageComponent;
  let fixture: ComponentFixture<AlbumsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumsPageComponent],
      imports: [
        SharedModule,
        MatProgressSpinnerModule,
        RouterModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
