import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcharacterComponent } from './getcharacter.component';

describe('GetcharacterComponent', () => {
  let component: GetcharacterComponent;
  let fixture: ComponentFixture<GetcharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
