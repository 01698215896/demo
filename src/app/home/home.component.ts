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
  dataa: any[] = [];
  datac: any[] = [];
  activeTab = 0;
  savedata: number = 0;
  isSorted = false;
  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data) => {
      this.data = data.top10cauthu;
      this.dataa = this.data;
    });
    this.dataService.fetchData().subscribe((data) => {
      this.data1 = data.NewsBoard;
    });
    this.dataService.fetchData().subscribe((data) => {
      this.data2 = data.MatchTable3;
      console.log(this.data2);
    });
    this.dataService.fetchData().subscribe((data) => {
      this.data3 = data.MatchTable2;
    });
    this.dataService.fetchData().subscribe((data) => {
      this.datachart = data.Charts1;
      this.datac = this.datachart;
    });
  }

  profile(id: string) {
    sessionStorage.setItem('dataPlayer', JSON.stringify(id));
    this.router.navigate(['/profile']);
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
  }
  event(id: string) {
    sessionStorage.setItem('dataEvent', JSON.stringify(id));
    this.router.navigate(['/tintuc']);
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
    console.log(id);
  }
  router1() {
    this.router.navigate(['/matchdetails']);
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
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
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
  }
  sh(id: string) {
    sessionStorage.setItem('idclub1', id);
    this.router.navigate(['/listclub']);
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
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
  playOnChange(event: any) {
 
    const inputValue = event.target.value.toUpperCase();
    this.data = this.dataa.filter((data) =>
      data.tencauthu.toUpperCase().includes(inputValue)
    );
  }
  playOnChangee(event: any) {
    
      const inputValue = event.target.value.toUpperCase();
      this.datachart = this.datac.filter((data) =>
        data.Footballteam.toUpperCase().includes(inputValue)
      );
    
  }

  op3(index: number){
    this.activeTab = index;
    this.dataService.fetchData().subscribe((data) => {
      this.datachart = data.MatchTable4;
    });
  }
}
