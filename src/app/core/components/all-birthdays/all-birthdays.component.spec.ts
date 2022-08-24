import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBirthdaysComponent } from './all-birthdays.component';

describe('AllBirthdaysComponent', () => {
  let component: AllBirthdaysComponent;
  let fixture: ComponentFixture<AllBirthdaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBirthdaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBirthdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
