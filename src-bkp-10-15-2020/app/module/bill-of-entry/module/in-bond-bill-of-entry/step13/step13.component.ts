import { Component, OnInit, Input,forwardRef } from '@angular/core';
import { FormGroup,FormControl, Validator, FormBuilder,Validators,ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';
import {ValidatorsService} from '../../../../common/service/validators.service';

@Component({
  selector: 'app-step13',
  templateUrl: './step13.component.html',
  styleUrls: ['./step13.component.css'],
  providers: [
    {
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(() => Step13Component),
   multi: true
 },
  {
   provide: NG_VALIDATORS,
   useExisting: forwardRef(() => Step13Component),
   multi: true
 }
  ]
})
export class Step13Component implements OnInit {
  panelOpenState = false;
  isLinear = false;
  inBondFormStep13: FormGroup
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inBondFormStep13 = this._formBuilder.group({

      invoice_serial_number: ['', [Validators.required, Validators.maxLength(5), Validators.pattern("^[0-9]+$")]],
      item_serial_number: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("[0-9]+$")]],
      decleration_type: ['', [Validators.required, Validators.maxLength(2), Validators.pattern("^[a-zA-Z]+$")]],
      cha_license_number: ['', [Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      iec: ['', [Validators.maxLength(10), Validators.pattern("^[a-zA-Z]+$")]],
      icegate_user_id: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      image_reference_number: ['', [Validators.required, Validators.maxLength(16), Validators.pattern("^[a-zA-Z]+$")]],
      document_type_code: ['', [Validators.required, Validators.maxLength(6), Validators.pattern("^[a-zA-Z]+$")]],
      document_issuing_party_code: ['', [Validators.maxLength(35), Validators.pattern("^[a-zA-Z]+$")]],
      document_issuing_party_name: ['', [Validators.required, Validators.maxLength(70), Validators.pattern("^[a-zA-Z]+$")]],
      document_issuing_party_name_address1: ['', [Validators.maxLength(70), Validators.pattern("^[a-zA-Z]+$")]],
      document_issuing_party_name_address2: ['', [Validators.maxLength(70), Validators.pattern("^[a-zA-Z]+$")]],
      document_issuing_party_name_city: ['', [Validators.maxLength(35), Validators.pattern("^[a-zA-Z]+$")]],
      document_issuing_party_name_pin: ['', [Validators.maxLength(10), Validators.pattern("[1-9]{1}[0-9]{5}")]],
      document_reference_number:['', [Validators.maxLength(17),Validators.pattern("^[a-zA-Z]+$")]],
      place_of_issue:['', [Validators.required,Validators.maxLength(35),Validators.pattern("^[a-zA-Z]+$")]],
      document_issue_date:['',Validators.required],
      document_expiry_date:[''],
      document_beneficary_party_code:['', [Validators.maxLength(35),Validators.pattern("^[a-zA-Z]+$")]],
      document_beneficary_party_name:['', [Validators.required,Validators.maxLength(70),Validators.pattern("^[a-zA-Z]+$")]],
      document_beneficary_party_name_address1:['', [Validators.maxLength(70),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      document_beneficary_party_name_address2:['', [Validators.maxLength(70),Validators.pattern("^[0-9a-zA-Z]{1,}(\\W|\\s)\\d*\\s\\w{1,}\\s\\w+$")]],
      document_beneficary_party_name_city:['', [Validators.maxLength(35),Validators.pattern("^[a-zA-Z]+$")]],
      document_beneficary_party_name_pin:['', [Validators.maxLength(10),Validators.pattern("[1-9]{1}[0-9]{9}")]],
      file_type: ['', [Validators.required, Validators.maxLength(5), Validators.pattern("^[a-zA-Z]+$")]],
    })
  }
 // communication between part to child compoentent code for form data saving in main in-bound-bill-of-entry part code
 
 public onTouched: () => void = () => {

  //console.log('data');
};
writeValue(val: any): void {
  //console.log('written values')
  val && this.inBondFormStep13.setValue(val, { emitEvent: false });
}
registerOnChange(fn: any): void {
  //console.log("on change");
  this.inBondFormStep13.valueChanges.subscribe(fn);
}
registerOnTouched(fn: any): void {
 //console.log("on blur");
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.inBondFormStep13.disable() : this.inBondFormStep13.enable();
}
validate(c: AbstractControl): ValidationErrors | null{
 // console.log("Consignment Info validation", c);
  return this.inBondFormStep13.valid ? null : { invalidForm: {valid: false, message: "Step1 fields are invalid"}};
}
}
