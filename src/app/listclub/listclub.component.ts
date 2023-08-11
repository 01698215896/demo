import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listclub',
  templateUrl: './listclub.component.html',
  styleUrls: ['./listclub.component.css'],
})
export class ListclubComponent implements OnInit {
  data: any[] = [];
  data1: any;
  logo: string = '';
  name: string = '';
  data2: any[] = [];
  data3: any;
  data4: any[] = [];
  socauthu: string = '';
  sobanthang: string = '';
  sotranthamgia: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe((datas) => {
      this.data = datas.danhsach;
      console.log(this.data);

      let idd = sessionStorage.getItem('idclub');
      console.log(idd);

      this.data1 = this.data.find((datass) => {
        return datass.id === idd;
      });

      this.logo = this.data1.logo;
      this.name = this.data1.name;
      this.sobanthang = this.data1.sobanthang;
      this.sotranthamgia = this.data1.sotranthamgia;
      this.socauthu = this.data1.socauthu;
      this.data2 = this.data1.Bangcauthu;
      this.data4 = this.data2
    });
  }

  routerpage() {
    this.router.navigate(['/profile']);
  }

  playOnChange(event: any): void {
    const inputValue = event.target.value.toUpperCase();
    this.data2 = this.data4.filter((data) =>
      data.PlayerName.toUpperCase().includes(inputValue)
    );
  }

  playsoccer() {
    this.data2 = this.data4.sort((a,b) =>
      a.PlayerName.localeCompare(b.PlayerName)
    );
  }
  playpos(event: any) {
    const inputValue = event.target.value.toUpperCase();
    this.data2 = this.data4.filter((data) =>
      data.Nationality.toUpperCase().includes(inputValue)
    );
  }
  playop(event: any) {
    const inputValue = event.target.value.toUpperCase();
    this.data2 = this.data4.filter((data) =>
      data.Competitionposition.toUpperCase().includes(inputValue)

    );
  }
}
