import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/UI/button/button.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialComponentsModule} from './material-modules.module';
import {InputComponent} from './components/UI/input/input.component';
import {QuestionFormComponent} from './components/forms/question-form/question-form.component';
import {RecommendationFormComponent} from './components/forms/recommendation-form/recommendation-form.component';
import {InputFileComponent} from './components/UI/input-file/input-file.component';

const modules = [
  CommonModule,
  MaterialComponentsModule,
  FormsModule,
  ReactiveFormsModule,
]
const components = [
  ButtonComponent,
  InputComponent,
  QuestionFormComponent,
  RecommendationFormComponent,
  InputFileComponent
]
@NgModule({
  declarations: [
    components,
  ],
  imports: [
    modules,
  ],
  exports: [
    ...modules,
    ...components,
  ]
})
export class SharedModule { }
