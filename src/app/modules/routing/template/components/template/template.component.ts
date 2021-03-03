import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/appState';
import { FunctionalAbstractComponent } from "src/app/utils/functional.abstract";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent extends FunctionalAbstractComponent implements OnInit {

  checkOptions = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];
  languages: string = 'vn';
  datePicker: any;
  dataTable = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor(
    protected store: Store<AppState>,
    protected route: ActivatedRoute,
    protected router: Router,
  ) {
    super(store, route, router);
  }

  ngOnInit(): void {
  }

  log(value: object[]): void {
    console.log('checkOptions: ', value);
  }

  getDate(result: Date): void {
    console.log('result ', result);
  }

}
