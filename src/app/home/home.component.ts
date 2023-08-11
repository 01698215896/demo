import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  data1: any[] = [];
  data2: any[] = [];
  data3: any[] = [];
  datachart: any[] = [];
  datachart1: any[] = [];

  savedata: number = 0;
  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data) => {
      this.data = data.top10cauthu;
    });
    this.dataService.fetchData().subscribe((data) => {
      this.data1 = data.NewsBoard;
    });
    this.dataService.fetchData().subscribe((data) => {
      this.data2 = data.MatchTable2;
    });
    this.dataService.fetchData().subscribe((data) => {
      this.data3 = data.MatchTable3;
    });
    this.dataService.fetchData().subscribe((data) => {
      this.datachart = data.Charts1;
    });
  }

  profile(id: string) {
    sessionStorage.setItem('dataPlayer', JSON.stringify(id));
    this.router.navigate(['/profile']);
  }
  event(id: string) {
    sessionStorage.setItem('dataEvent', JSON.stringify(id));
    this.router.navigate(['/tintuc']);
    console.log(id);
  }
  router1() {
    this.router.navigate(['/matchdetails']);
  }
  op1() {
    this.dataService.fetchData().subscribe((data) => {
      this.datachart = data.Charts1;
    });
  }
  op2() {
    this.dataService.fetchData().subscribe((data) => {
      this.datachart = data.Charts2;
      console.log(this.datachart);
    });
  }
}
