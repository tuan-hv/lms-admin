import { Component, OnInit } from '@angular/core';
import { signInRequest } from "src/app/store/auth/actions/auth.action";
import { IUser } from "src/app/store/auth/auth.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/appState";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {

  validateForm!: FormGroup;
  user: IUser = {
    username: '',
    password: ''
  }

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
    ) { }
  
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    const { username, password } = this.validateForm.value;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.store.dispatch(signInRequest({
      username: username,
      password: password
    }))
  }
  
}
