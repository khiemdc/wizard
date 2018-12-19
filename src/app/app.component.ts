import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'form-wizard';
  checkoutForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.checkoutForm = this.fb.group({
      lastName: null,
      firstName: null
    });
  }

  formInitialized(name: string, form: FormGroup) {
    this.checkoutForm.setControl(name, form);
  }

  SaveFormData() {
    console.log(this.checkoutForm.value);
  }

}
