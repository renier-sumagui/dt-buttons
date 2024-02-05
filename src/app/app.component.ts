import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  dtOptions: any = {};

  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'assets/data.json', 
      pagingType: 'simple_numbers',
      paging: true,
      columns: [
        { title: 'ID', data: 'id' },
        { title: 'First name', data: 'firstName' },
        { title: 'Last name', data: 'lastName' }
      ],
      dom: 'Brftip',
      buttons: [
        "pageLength",
        {
          text: 'Example button',
          key: '1',
          action: function (e: any, dt: any, node: any, config: any) {
            alert('Button activated');
          }
        }
      ]
    };
  }
}
