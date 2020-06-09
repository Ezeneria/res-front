import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../../../core/models/models';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  @Input() public formData: { questions: Question, variants: {[key: number]: string}[] } = null;
  public form: FormGroup;
  public question: Question;
  public variants: [] = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      description: [this.formData.questions.description],
      questions: this.fb.array([
        this.createItem(),
      ]),
    });
  }

  addVariant() {
    // @ts-ignore
    this.form.get('questions').push(this.createItem());
  }

  createItem(): FormGroup {
    return this.fb.group({
      title: [''],
      selected: [null]
    });
  }
  get questions() {
      // @ts-ignore
    return this.form.get('questions').controls;
  }
}
