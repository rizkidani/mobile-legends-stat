import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public readonly loginService: LoginService,
    private formBuilder: FormBuilder
  ) { }

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', {
          validators: [Validators.required, Validators.email],
          updateOn: 'change'
        }],
        password: ['', {
          validators: [Validators.required, Validators.minLength(6), Validators.maxLength(15)],
          updateOn: 'change'
        }]
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  // Form Validation | SC : https://www.bezkoder.com/angular-14-form-validation/
  postLogin(): void {
    if (this.form.valid) {
      this.loginService.postLogin(this.form.value).subscribe(
        (response) => {
          alert("Success");
          console.log(response);
        },
        (error) => {
          alert("Error");
          console.log(error);
        }
      )
    } else { // invalid
      alert("form not valid");
    }
  }

}
