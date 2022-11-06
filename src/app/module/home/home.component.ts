import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';
import { ObservableService } from 'src/app/services/observable/observable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users = new Array<any>();

  constructor(
    public readonly homeService: HomeService,
  ) { }

  ngOnInit(): void {

    this.homeService.getUsers().subscribe(
      (response) => { // get object from homeService
        this.users = response.data;
      }
    );
  }
}
