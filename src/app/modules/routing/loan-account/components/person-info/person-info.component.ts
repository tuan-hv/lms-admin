import { Component, Input, OnInit } from '@angular/core';
import { IApplication } from 'src/app/store/application/application.reducer';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {

  @Input()
  application: IApplication;
  constructor() { }

  ngOnInit(): void {
  }

}
