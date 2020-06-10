import { Component } from '@angular/core';
import {Recommendations} from '../../../../../../../core/models/models';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-quiz-recomendation',
  templateUrl: './quiz-recomendation.component.html',
  styleUrls: ['./quiz-recomendation.component.scss']
})
export class QuizRecomendationComponent {
  public variants: {[key: number]: string}[] = [
    {1: 'Variant 1'},
    {2: 'Variant 2'},
    {3: 'Variant 3'},
    {4: 'Variant 4'}
    ];
  public questions: {[key: number]: string}[] = [
    {1: 'Variant 1'},
    {2: 'Variant 2'},
    {3: 'Variant 3'},
    {4: 'Variant 4'}
  ];
  public recommendations: Recommendations[] = [
    {
      title: 'description 1',
      description: 'qweqweqwe',
      variant: 1,
      question: 1
    }
  ];

  constructor(private fb: FormBuilder) {}

  trackByFn(index, item) {
    return index; // or item.id
  }

  addRecommendation() {
    this.recommendations.push(
      {
        title: '',
        description: '',
        question: 1,
        variant: 1,
      }
    );
    console.log(this.recommendations);
  }
  delete(e) {
    this.recommendations.splice(e, 1);
  }
}
