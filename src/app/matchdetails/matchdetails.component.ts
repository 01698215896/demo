import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

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


  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.fetchData().subscribe((datas) => {
      this.data = datas.MatchTable1;
  
    });
  }

  resultG(id: string) {
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
  show(data: string){
    console.log(data);
  }
}
