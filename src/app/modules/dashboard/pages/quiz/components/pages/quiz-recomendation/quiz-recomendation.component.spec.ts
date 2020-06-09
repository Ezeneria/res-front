import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizRecomendationComponent } from './quiz-recomendation.component';

describe('QuizRecomendationComponent', () => {
  let component: QuizRecomendationComponent;
  let fixture: ComponentFixture<QuizRecomendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizRecomendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizRecomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
