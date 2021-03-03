import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/appState';
import { IBreadscrumb } from "../../models/breadscrumb";

@Component({
  selector: 'app-breadscrumb',
  templateUrl: './breadscrumb.component.html',
  styleUrls: ['./breadscrumb.component.scss']
})
export class BreadscrumbComponent implements OnInit {

  breadscrumbs: IBreadscrumb[] = [];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select((state: AppState) => state.config.breadscrumbs).subscribe(breadscrumbs => {
      this.breadscrumbs = breadscrumbs;
    })
  }

}
