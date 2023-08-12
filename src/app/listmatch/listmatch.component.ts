import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listmatch',
  templateUrl: './listmatch.component.html',
  styleUrls: ['./listmatch.component.css'],
})
export class ListmatchComponent implements OnInit {
  data: any[] = [];
  data1: any[] = [];
  data2: any[] = [];
  data5: any[] = [];

  activeTab = 0;

  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data) => {
      this.data = data.MatchTable3;
      this.data2 = this.data;
    });
  }
  opt1(index: number) {
    this.dataService.fetchData().subscribe((data) => {
      this.data = data.MatchTable3;
      this.data2 = this.data;
    });
    this.activeTab = index;
  }
  opt2(index: number) {
    this.dataService.fetchData().subscribe((data) => {
      this.data = data.MatchTable2;
      this.data2 = this.data;
    });
    this.activeTab = index;
  }
  router1() {
    this.router.navigate(['matchdetails']);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  playOnChange(event: any) {
    const inputValue = event.target.value.toUpperCase();
    this.data = this.data2.filter((data) =>
      data.tentrandau.toUpperCase().includes(inputValue)
    );
  }

  playsoccer(event: any) {
    const inputValue = event.target.value.toUpperCase();
    this.data = this.data2.filter((data) =>
      data.Guestteam.toUpperCase().includes(inputValue)
    );
  }
  playpos(event: any) {
    const inputValue = event.target.value.toUpperCase();

    const date = new Date(inputValue);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    this.data = this.data2.filter((data) =>
      data.DateandTime.toUpperCase().includes(formattedDate)
    );
  }
  playop(event: any) {
    const inputValue = event.target.value.toUpperCase();
    // this.data2 = this.data4.filter((data) =>
    //   data.Competitionposition.toUpperCase().includes(inputValue)

    // );
  }
  op3(index: number) {
    this.activeTab = index;
    this.dataService.fetchData().subscribe((data) => {
      this.data = data.MatchTable4;
      this.data2 = this.data;
    });
  }
}
