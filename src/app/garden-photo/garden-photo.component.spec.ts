import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenPhotoComponent } from './garden-photo.component';

describe('GardenPhotoComponent', () => {
  let component: GardenPhotoComponent;
  let fixture: ComponentFixture<GardenPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
