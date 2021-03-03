import { Component, Input, OnInit } from '@angular/core';
import { IApplication } from 'src/app/store/application/application.reducer';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.scss']
})
export class EmpInfoComponent implements OnInit {

  @Input()
  application: IApplication;

  constructor() { }

  ngOnInit(): void {
  }

}
