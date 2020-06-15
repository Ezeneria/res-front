import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {Question} from '../../../../../../../core/models/models';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {
  public variants: {[key: number]: string}[] = [
    {1: 'Variant 1'},
    {2: 'Variant 2'},
    {3: 'Variant 3'},
    {4: 'Variant 4'}
  ];
  public questions: Question[] = [
    {
      description: 'description 1',
      question: 'qweqweqwe',
      variant: 1,
      image: ''
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  trackByFn(index, item) {
    return index;
  }

  addQuestion() {
    this.questions.push(
      {
        description: '',
        question: '',
        variant: 1,
        image: ''
      }
    );
  }
  delete(e) {
    this.questions.splice(e, 1);
  }
}
