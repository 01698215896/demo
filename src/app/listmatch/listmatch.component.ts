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

  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data) => {
      this.data = data.MatchTable3;
    });
  }
  opt1() {
    this.dataService.fetchData().subscribe((data) => {
      this.data = data.MatchTable3;
    });
  }
  opt2() {
    this.dataService.fetchData().subscribe((data) => {
      this.data = data.MatchTable2;
    });
  }
  router1() {
    this.router.navigate(['matchdetails']);
  }
}
