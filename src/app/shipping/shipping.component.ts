import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  @Output() formReady = new EventEmitter<FormGroup>();
  shippingForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.shippingForm = this.fb.group({
      country: null,
      city: null,
      address: null,
      zip: null
    });

    this.formReady.emit(this.shippingForm);
  }

}
