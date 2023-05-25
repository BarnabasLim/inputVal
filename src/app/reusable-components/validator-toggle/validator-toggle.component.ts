import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'validator-toggle',
  templateUrl: './validator-toggle.component.html',
  styleUrls: ['./validator-toggle.component.scss']
})
export class ValidatorToggleComponent implements OnInit {
  //https://angular.io/api/forms/Validators#validators
  
  public validators_keys=[]
  public validators_Fns_instance=[]
  public specialValidatorControlNames=''

  @Input() validators_object={'required':Validators.required,'email':Validators.email,'pattern':Validators.pattern(/^[a-zA-Z0-9\s]*$/),'minLength':Validators.minLength(3),'maxLength':Validators.maxLength(11)};
  @Input() myForm:FormGroup|null=null;
  @Input() controlName:string='name';
  constructor() { }

  ngOnInit(): void {
    this.specialValidatorControlNames=`${this.controlName}_validators_active`
    this.myForm.addControl(
      this.specialValidatorControlNames, new FormGroup({
        'required':new FormControl(this.myForm.get(this.controlName).hasValidator(this.validators_object['required'])),
        'email':new FormControl(this.myForm.get(this.controlName).hasValidator(this.validators_object['email'])),
        'pattern':new FormControl(this.myForm.get(this.controlName).hasValidator(this.validators_object['pattern'])),
        'minLength':new FormControl(this.myForm.get(this.controlName).hasValidator(this.validators_object['minLength'])),
        'maxLength':new FormControl(this.myForm.get(this.controlName).hasValidator(this.validators_object['maxLength']))
      })
    )
    this.validators_keys=Object.keys(this.validators_object)
    this.validators_Fns_instance=Object.values(this.validators_object)
  }

  generateValidatorsFns(){
    let validators_Fns=[]
    Object.keys(this.myForm.get(this.specialValidatorControlNames).value).forEach(key => {
      if(this.myForm.get(this.specialValidatorControlNames).value[key]){
        validators_Fns.push(this.validators_object[key])
      }
    });
    return validators_Fns
  }

  toggleValidators(){
    let form=this.myForm.get(this.controlName);
    if(form){
      form.setValidators(this.generateValidatorsFns())
      form.updateValueAndValidity();
    }
  }

}
