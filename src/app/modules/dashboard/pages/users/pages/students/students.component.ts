import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from './user.service';
import {Mentor, UserList} from '../../../../../../core/models/models';
import {MyErrorStateMatcher} from '../../../../../../core/helpers/customErrorInput';

export interface UserTable {
  position: number;
  fullName: string;
  email: string;
  state: string;
  students: string;
}
export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit {
  public displayedColumns: string[] = ['position', 'email', 'fullName', 'status', 'mentor'];
  public userList: UserList[] = [];
  public mentorList: Mentor[] = [];
  public tableList;
  public dataSource = null;
  public foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  @ViewChild(MatSort, {static: true}) private sort: MatSort;
  public animal: string;
  public name: string;
  public ngOnInit() {

    this.userService.getUsersAndMentors().subscribe(([users, mentors]: [UserList[], Mentor[]]) => {
      this.userList = users.map((u, i) => {
        return {...u, ...{ position: i }, ...{ fullName: `${u.firstName} ${u.lastName}`}};
      });
      this.mentorList = mentors;
      this.dataSource = new MatTableDataSource(this.userList);
      console.log(this.userList);
    });
  }

  constructor(public dialog: MatDialog, private userService: UserService) {}

  inviteUsers(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '90%',
      data: {users: this.userList, mentors: this.mentorList},
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}

@Component({
  selector: 'app-invite-users',
  templateUrl: './invite-users.html',
  styleUrls: ['./students.component.scss']
})
export class DialogOverviewExampleDialogComponent {
  public form: FormGroup;
  public matcher = new MyErrorStateMatcher();
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {users: UserList[], mentors: Mentor[]},
    private fb: FormBuilder) {
    this.form = this.fb.group({
      form: this.fb.array([])
    });
    // @ts-ignore
    this.formFieldControl.push(this.createUserFormInvite());
  }

  public close(): void {
    this.dialogRef.close();
  }

  public addInviteUser() {
    // @ts-ignore
      this.formFieldControl.push(this.createUserFormInvite());
  }

  private createUserFormInvite(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mentor: ['', Validators.required]
    });
  }
  public submit(e) {
    // this.dialogRef.close(this.formFieldControl.value);
    console.log(this.formFieldControl);
  }
  get formFieldControl() {
    // @ts-ignore
    return this.form.get('form').controls;
  }
}
