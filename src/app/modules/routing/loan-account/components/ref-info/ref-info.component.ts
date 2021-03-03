import { Component, Input, OnInit } from '@angular/core';
import { IApplication } from 'src/app/store/application/application.reducer';

@Component({
  selector: 'app-ref-info',
  templateUrl: './ref-info.component.html',
  styleUrls: ['./ref-info.component.scss']
})
export class RefInfoComponent implements OnInit {

  @Input()
  application: IApplication;
  constructor() { }

  ngOnInit(): void {
  }

}
