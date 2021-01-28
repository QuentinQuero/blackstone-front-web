import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepersonnageComponent } from './homepersonnage.component';

describe('HomepersonnageComponent', () => {
  let component: HomepersonnageComponent;
  let fixture: ComponentFixture<HomepersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepersonnageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
