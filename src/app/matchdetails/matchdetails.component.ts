import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matchdetails',
  templateUrl: './matchdetails.component.html',
  styleUrls: ['./matchdetails.component.css'],
})
export class MatchdetailsComponent implements OnInit {
  data: any[] = [];
  dataG: any;

  DateandTime: string = '';
  Result: string = '';
  urlH: string = '';
  Guestteam: string = '';
  HomeTeam: string = '';
  urlG: string = '';
  GoalH: any[] = [];

  Goalg: any[] = [];
  dataplayer: any[] = [];
  dataplayer1: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {
    this.dataService.fetchData().subscribe((datas) => {
      this.data = datas.MatchTable1;
      console.log(this.data);
      this.dataG = this.data.find((data) => data.IDMatch == '01');
      console.log(this.dataG);
      this.DateandTime = this.dataG.DateandTime;
      this.Result = this.dataG.Result;
      this.GoalH = this.dataG.Goal.HomeTeam;
      this.urlH = this.dataG.urlH;
      this.urlG = this.dataG.urlG;
      this.Guestteam = this.dataG.Guestteam;
      this.HomeTeam = this.dataG.HomeTeam;
      this.Goalg = this.dataG.Goal.Guestteam;
      this.dataplayer = this.dataG.Bangcauthunha;
      this.dataplayer1 = this.dataG.Bangcauthukhach;
    });
  }

  resultG(id: string) {
    console.log(id);
    this.dataG = this.data.find((data) => data.IDMatch == id);
    this.DateandTime = this.dataG.DateandTime;
    this.Result = this.dataG.Result;
    this.GoalH = this.dataG.Goal.HomeTeam;
    this.urlH = this.dataG.urlH;
    this.urlG = this.dataG.urlG;
    this.Guestteam = this.dataG.Guestteam;
    this.HomeTeam = this.dataG.HomeTeam;
    this.Goalg = this.dataG.Goal.Guestteam;
    this.dataplayer = this.dataG.Bangcauthunha;
    this.dataplayer1 = this.dataG.Bangcauthukhach;
  }
  show(data: string) {
    console.log(data);
  }
  ppp(id: string) {
    sessionStorage.setItem('dataPlayer', id);
    this.router.navigate(['/profile']);
  }
}
