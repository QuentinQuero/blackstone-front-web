import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeexplorationComponent } from './homeexploration.component';

describe('HomeexplorationComponent', () => {
  let component: HomeexplorationComponent;
  let fixture: ComponentFixture<HomeexplorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeexplorationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeexplorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
