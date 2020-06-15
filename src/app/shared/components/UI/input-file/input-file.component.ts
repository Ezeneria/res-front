import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent implements OnInit {
  public src: string | ArrayBuffer;
  @Output() imgLoaded: EventEmitter<string | ArrayBuffer> = new EventEmitter<string | ArrayBuffer>();
  constructor(private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
  }
}
