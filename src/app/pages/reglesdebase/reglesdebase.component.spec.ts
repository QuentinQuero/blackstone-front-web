import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglesdebaseComponent } from './reglesdebase.component';

describe('ReglesdebaseComponent', () => {
  let component: ReglesdebaseComponent;
  let fixture: ComponentFixture<ReglesdebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglesdebaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglesdebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
