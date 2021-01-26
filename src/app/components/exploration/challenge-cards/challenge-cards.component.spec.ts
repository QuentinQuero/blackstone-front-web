import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeCardsComponent } from './challenge-cards.component';

describe('ChallengeCardsComponent', () => {
  let component: ChallengeCardsComponent;
  let fixture: ComponentFixture<ChallengeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
