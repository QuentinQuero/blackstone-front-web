import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomevaisseauComponent } from './homevaisseau.component';

describe('HomevaisseauComponent', () => {
  let component: HomevaisseauComponent;
  let fixture: ComponentFixture<HomevaisseauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomevaisseauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomevaisseauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
