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
  activeTab = 0;
  savedata: number = 0;
  isSorted = false;
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
      console.log(this.data2);
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
  op1(index: number) {
    this.dataService.fetchData().subscribe((data) => {
      this.datachart = data.Charts1;
    });
    this.activeTab = index;
  }
  op2(index: number) {
    this.dataService.fetchData().subscribe((data) => {
      this.datachart = data.Charts2;
      console.log(this.datachart);
    });
    this.activeTab = index;
  }
  tt() {
    this.router.navigate(['listmatch']);
  }
  sh(id: string) {
    sessionStorage.setItem('idclub1', id);
    this.router.navigate(['/listclub']);
  }
  sort1() {
    this.datachart = this.datachart.sort((a, b) =>
      a.Score.localeCompare(b.Score)
    );
  }
  sort2() {
    if (!this.isSorted) {
      this.data = this.data.sort((a, b) =>
        a.tencauthu.localeCompare(b.tencauthu)
      );
    } else {
      this.data = this.data.sort((a, b) =>
        b.tencauthu.localeCompare(a.tencauthu)
      );
    }

    this.isSorted = !this.isSorted;
  }
}
