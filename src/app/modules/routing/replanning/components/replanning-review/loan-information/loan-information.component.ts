import { IApplication } from 'src/app/store/application/application.reducer';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-information',
  templateUrl: './loan-information.component.html',
  styleUrls: ['./loan-information.component.scss']
})
export class LoanInformationComponent implements OnInit {
  @Input() application: IApplication;

  constructor() { }

  ngOnInit(): void {
  }

}
