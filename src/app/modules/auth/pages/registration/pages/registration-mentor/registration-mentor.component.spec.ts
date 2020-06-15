import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMentorComponent } from './registration-mentor.component';

describe('RegistrationMentorComponent', () => {
  let component: RegistrationMentorComponent;
  let fixture: ComponentFixture<RegistrationMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
