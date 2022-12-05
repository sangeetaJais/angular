import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'api';
  tableList: any;
  p: any;

  Objectkeys = Object.keys;
  constructor(private data: ApiService) {}

  ngOnInit(): void {
    this.tableData();
  }

  tableData() {
    this.data.apiData().subscribe((res: any) => {
      this.tableList = res['Time Series (5min)'];
    });
  }
}
