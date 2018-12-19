import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: [ './billing.component.scss' ]
})
export class BillingComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  billingForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.billingForm = this.fb.group({
      cardNumber: null,
      cvv: null,
      expirationMonth: null,
      exporationYear: null
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.billingForm);
  }

}
