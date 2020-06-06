import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

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
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InputComponent implements ControlValueAccessor {
  @Input() public options: InputOptions;

  public value: string | number;
  public onChange: (e) => void;
  public onTouch: () => void;
  public config: InputOptions = {
    maxLength: null,
    minLength: null,
    required: null,
    placeholder: null
  };

  constructor() {
    this.options = {...this.config, ...this.options};
  }

  registerOnChange(fn: any){
    this.onChange = fn;
  }

  registerOnTouched(fn: any){
    this.onTouch = fn;
  }

  writeValue(value: string | number): void {
    this.value = value ? value : '';
  }

}
