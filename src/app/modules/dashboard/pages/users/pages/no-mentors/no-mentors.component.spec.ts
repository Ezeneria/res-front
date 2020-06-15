import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMentorsComponent } from './no-mentors.component';

describe('NoMentorsComponent', () => {
  let component: NoMentorsComponent;
  let fixture: ComponentFixture<NoMentorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoMentorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
