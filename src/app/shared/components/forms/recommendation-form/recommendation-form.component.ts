import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Question, Recommendations} from '../../../../core/models/models';

@Component({
  selector: 'app-recommendation-form',
  templateUrl: './recommendation-form.component.html',
  styleUrls: ['./recommendation-form.component.scss']
})
export class RecommendationFormComponent implements OnInit {
  @Input() public formData: { recommendations: Recommendations, variants: {[key: number]: string}[], index: number } = null;
  @Output() public deleted: EventEmitter<number> = new EventEmitter<number>();
  public form: FormGroup;
  public variants: [] = [];
  public questionsVariant: [] = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [this.formData.recommendations.title],
      description: [this.formData.recommendations.description],
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
      question: [null],
      variant: [null]
    });
  }
  addQuestion() {
    // @ts-ignore
    this.form.get('questions').push(this.createItem());
  }
  get questions() {
    // @ts-ignore
    return this.form.get('questions').controls;
  }
  delete() {
    this.deleted.emit(this.formData.index);
  }
}
