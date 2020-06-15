import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from '../../../../services/registration.service';
const usRegions = require('us-regions');
@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.scss']
})
export class RegistrationUserComponent implements OnInit {
  @ViewChild('preview', {static: false}) preview: ElementRef<HTMLDivElement>;
  public form: FormGroup;
  public image: HTMLImageElement;
  public states = [
    { value: 'AK', name: 'Alaska'},
    { value: 'TX', name: 'TX'},
    { value: 'AL', name: 'Alabama'},
    { value: 'AR', name: 'Arkansas'},
    { value: 'AZ', name: 'Arizona'},
    { value: 'CA', name: 'California'},
    { value: 'CO', name: 'Colorado'},
    { value: 'CT', name: 'Connecticut'},
    { value: 'DC', name: 'DistrictofColumbia'},
    { value: 'DE', name: 'Delaware'},
    { value: 'FL', name: 'Florida'},
    { value: 'GA', name: 'Georgia'},
    { value: 'HI', name: 'Hawaii'},
    { value: 'IA', name: 'Iowa'},
    { value: 'ID', name: 'Idaho'},
    { value: 'IL', name: 'Illinois'},
    { value: 'IN', name: 'Indiana'},
    { value: 'KS', name: 'Kansas'},
    { value: 'KY', name: 'Kentucky'},
    { value: 'LA', name: 'Louisiana'},
    { value: 'MA', name: 'Massachusetts'},
    { value: 'MD', name: 'Maryland'},
    { value: 'ME', name: 'Maine'},
    { value: 'MI', name: 'Michigan'},
    { value: 'MN', name: 'Minnesota'},
    { value: 'MO', name: 'Missouri'},
    { value: 'MS', name: 'Mississippi'},
    { value: 'MT', name: 'Montana'},
    { value: 'NC', name: 'NorthCarolina'},
    { value: 'ND', name: 'NorthDakota'},
    { value: 'NE', name: 'Nebraska'},
    { value: 'NH', name: 'NewHampshire'},
    { value: 'NJ', name: 'NewJersey'},
    { value: 'NM', name: 'NewMexico'},
    { value: 'NV', name: 'Nevada'},
    { value: 'NY', name: 'NewYork'},
    { value: 'OH', name: 'Ohio'},
    { value: 'OK', name: 'Oklahoma'},
    { value: 'OR', name: 'Oregon'},
    { value: 'PA', name: 'Pennsylvania'},
    { value: 'RI', name: 'RhodeIsland'},
    { value: 'SC', name: 'SouthCarolina'},
    { value: 'SD', name: 'SouthDakota'},
    { value: 'TN', name: 'Tennessee'},
    { value: 'TX', name: 'Texas'},
    { value: 'UT', name: 'Utah'},
    { value: 'VA', name: 'Virginia'},
    { value: 'VT', name: 'Vermont'},
    { value: 'WA', name: 'Washington'},
    { value: 'WI', name: 'Wisconsin'},
    { value: 'WV', name: 'WestVirginia'},
    { value: 'WY', name: 'Wyoming'},
  ];
  public regions = [];
  public isSuccess = false;
  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {
    this.form = this.fb.group({
      email: ['test@test.test', Validators.compose([Validators.email, Validators.required])],
      first_name: ['Test', Validators.compose([Validators.required])],
      last_name: ['Test', Validators.compose([Validators.required ])],
      state: ['AZ', Validators.required],
      region: ['NY', Validators.required],
      address: ['test', Validators.required],
      snn: ['Test', Validators.required],
      phone: ['Test', Validators.required],
      avatar: [''],
      password1: ['Slava685', Validators.required],
      password2: ['SLava685', Validators.required],
    });
  }

  public ngOnInit(): void {
    this.state.valueChanges.subscribe(postalState => {
      this.regions = [];
      const r = usRegions;
      r.region(postalState);
      Object.keys(r.REGIONS).map(postalCode => {
        this.regions.push(
          {
            value: postalCode,
            name: r.normalize(postalCode)
          });
      });
    });
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.image =  document.createElement('img');
        this.image.src = (window as any).URL.createObjectURL(file);
        this.preview.nativeElement.appendChild(this.image);
        this.avatar.patchValue(event.target.files[0]);
      };
    }
  }
  public submit(e) {
    // formData.append('avatar', this.avatar.value);
    e.preventDefault();
    if (this.form.valid) {
      this.registrationService.registrUser(this.form.value).subscribe(val => {
        console.log(val);
      });
      // formData.append('avatar', this.avatar.value);
      // this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      //   (res) => console.log(res),
      //   (err) => console.log(err)
      // );
      // this.isSuccess = true;
    }
    console.log(this.form.value);
  }
  get state(): AbstractControl {
    return this.form.get('state');
  }
  get password1(): AbstractControl {
    return this.form.get('password1');
  }
  get password2(): AbstractControl {
    return this.form.get('password2');
  }
  get avatar(): AbstractControl {
    return this.form.get('avatar');
  }
  get email(): AbstractControl {
    return this.form.get('email');
  }
  get firstName(): AbstractControl {
    return this.form.get('first_name');
  }
  get last_name(): AbstractControl {
    return this.form.get('last_name');
  }
  get region(): AbstractControl {
    return this.form.get('region');
  }
  get snn(): AbstractControl {
    return this.form.get('snn');
  }
  get phone(): AbstractControl {
    return this.form.get('phone');
  }
}

