import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

export interface PeriodicElement {
  position: number;
  fullName: string;
  email: string;
  state: string;
  students: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, fullName: 'Slava V', email: 'qweqwe@wqe.com', state: 'Idaho', students: 'Anna Green'},
  {position: 2, fullName: 'Egor', email: 'qweqwe@wqe.com', state: 'Idaho', students: 'Anna Green'},
  {position: 3, fullName: 'Igor', email: 'qweqwe@wqe.com', state: 'Idaho', students: 'Anna Green'},
  {position: 4, fullName: 'Zqweqw', email: 'qweqwe@wqe.com', state: 'Idaho', students: 'Anna Green'}
];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit {

  public displayedColumns: string[] = ['fullName', 'email', 'state', 'students'];
  public dataSource = new MatTableDataSource(ELEMENT_DATA);
  public foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
