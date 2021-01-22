import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Character_pageComponent } from './character_page.component';

describe('CharacterComponent', () => {
  let component: Character_pageComponent;
  let fixture: ComponentFixture<Character_pageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Character_pageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Character_pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
