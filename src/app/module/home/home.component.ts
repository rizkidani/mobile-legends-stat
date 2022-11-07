import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // List Array
  heroes = new Array<any>();
  heroDetail = new Array<any>();
  heroByRole = new Array<any>();

  // Path Variable / Parameters
  roleId: any; // for path variable
  roleName: string = ""; // for parameters

  constructor(
    public readonly homeService: HomeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Get Parameter URL. SC : https://www.angularjswiki.com/angular/get-query-parameters-in-angular/
    // EX : http://localhost:4200/hero?nameHero=Nana
    this.route.queryParams.subscribe(
      (params) => {
        this.roleName = params['roleName'];
      }
    );

    // Get Path Variable. SC : https://tomastrajan.medium.com/how-to-get-route-path-parameters-in-non-routed-angular-components-32fc90d9cb52
    // EX : http://localhost:4200/hero/5
    this.roleId = this.route.snapshot.paramMap.get('id');

    // List All Heroes
    this.homeService.getHeroes().subscribe(
      (response) => { // get object from homeService
        if (response.success == true) {
          this.heroes = response.hero;
        } else {
          this.heroes = [];
        }
      },
      (error) => {

      }
    );

    // List Detail Heroes
    this.homeService.getHeroDetail().subscribe(
      (response) => {
        if (response.success == true) {
          this.heroDetail = response.hero;
        } else {
          this.heroDetail = [];
        }
      },
      (error) => {

      }
    );

    // List Hero By Role
    this.homeService.getHeroByRole(this.roleName).subscribe(
      (response) => {
        if (response.success == true) {
          this.heroByRole = response.hero;
        } else {
          this.heroByRole = [];
        }
      },
      (error) => {

      }
    );

  }

  formGroupLogin = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  onLogin() {
    if (this.formGroupLogin.valid) {
      this.homeService.postLogin(this.formGroupLogin.value).subscribe(
        (response) => {
          alert("Success");
          alert(JSON.stringify(response));
        },
        (error) => {
          alert("error");
          alert(JSON.stringify(error));
        }
      );
    } else {
      alert("Form not valid");
    }
  }

}
