import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglescombatComponent } from './reglescombat.component';

describe('ReglescombatComponent', () => {
  let component: ReglescombatComponent;
  let fixture: ComponentFixture<ReglescombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglescombatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglescombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
