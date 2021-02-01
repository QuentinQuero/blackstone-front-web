import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagedeComponent } from './imagede.component';

describe('ImagedeComponent', () => {
  let component: ImagedeComponent;
  let fixture: ComponentFixture<ImagedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
