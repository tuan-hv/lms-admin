import { IReplanSearchForm } from './../../../../../store/replanning/replanning.reducer';
import { TimeUtil } from 'src/app/utils/time';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-replanning-search-form',
  templateUrl: './replanning-search-form.component.html',
  styleUrls: ['./replanning-search-form.component.scss']
})
export class ReplanningSearchFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter();

  searchForm: FormGroup = this.fb.group({
    loanType: [''],
    loanAccount: [''],
    status: [''],
    customerName: [''],
    cardNumber: [''],
    fromDate: [TimeUtil.createFromDefault(), [Validators.required]],
    toDate: [TimeUtil.createToDefault(), [Validators.required]],
    approveDueDate: [TimeUtil.createToDefault()]
  });

  loanTypes = [];
  loanStatus = [1, 2, 3, 4, 5];
  status = [
    { name: 'Drop_off', color: '#808080' },
    { name: 'Approved', color: '#FB32DB' },
    { name: 'Rejected', color: '#FF5756' },
    { name: 'Signed-off', color: '#007AFF' },
    { name: 'Active', color: '#4AAF05' },
    { name: 'Closed', color: '#808080' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onSubmit.emit(
      {
        fromDate : this.searchForm.get('fromDate').value,
        toDate : this.searchForm.get('toDate').value,
      } as IReplanSearchForm
    );
  }

  submitForm(): void{
    this.onSubmit.emit(
      {
        fromDate : this.searchForm.get('fromDate').value,
        toDate : this.searchForm.get('toDate').value,
      } as IReplanSearchForm
    );
  }

}
