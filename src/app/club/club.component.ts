import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css'],
})
export class ClubComponent implements OnInit {
  data: any[] = [];
  data1: any[] = [];
  idd: string = '';
  data2: any[] = [];
  datachart: any[] = [];
  datachart1: any[] = [];
  data3: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data) => {
      this.data = data.danhsach;
      console.log(this.data);
      this.data3 = this.data;
    });
    this.dataService.fetchData().subscribe((data) => {
      this.datachart = data.Charts1;
    });
  }


  play(id: string) {
    sessionStorage.setItem('idclub', id);
    this.router.navigate(['listclub']);
  }
  playOnChange(event: any) {
    const inputValue = event.target.value.toUpperCase();
    this.data = this.data3.filter((data) =>
      data.name.toUpperCase().includes(inputValue)
    );

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
  playsoccer() {
    this.data2 = this.data.sort((a,b) =>
      a.name.localeCompare(b.name)
    );
  }
}
