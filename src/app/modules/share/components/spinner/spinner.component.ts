import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from "src/app/store/appState";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  isSpinning: boolean = true;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select((state: AppState) => state.config.spinner).subscribe(isSpinning => this.isSpinning = isSpinning);
  }

}
