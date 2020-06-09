import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Self,
  SimpleChanges
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl, FormGroup,
  FormGroupDirective,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgForm
} from '@angular/forms';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {Subject} from 'rxjs';


interface InputOptions {
  maxLength?: number;
  placeholder?: string;
  minLength?: number;
  required?: boolean;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  // providers: [{
  //   provide: NG_VALUE_ACCESSOR,
  //   useExisting: forwardRef(() => InputComponent),
  //   multi: true
  // }],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class InputComponent implements ControlValueAccessor, OnChanges {
  // tslint:disable-next-line:variable-name
  _value;
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
    this.stateChanges.next();
  }
  readonly stateChanges = new Subject();
  @Input() public options: InputOptions;

  public onChange: (e) => void;
  public onTouch: () => void;
  public config: InputOptions = {
    maxLength: null,
    minLength: null,
    required: null,
    placeholder: null
  };

  constructor(@Self() @Optional() public control: NgControl, private fb: FormBuilder) {
    this.control.valueAccessor = this;
    this.options = {...this.config, ...this.options};
  }
  public get required(): boolean {
    return this.control.touched && this.control.hasError('required');
  }
  public get invalid(): boolean {
    return this.control.touched && this.control.invalid;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.stateChanges.next();
    console.log('ssasd');
  }

  registerOnChange(fn: any){
    this.onChange = fn;
    this.stateChanges.next();
  }

  registerOnTouched(fn: any){
    this.onTouch = fn;
  }

  writeValue(value: string | number): void {
    this._value = value ? value : '';
  }

}

