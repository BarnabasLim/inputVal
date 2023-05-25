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

  @Input() validators_object={'required':{function:Validators.required, async:false},'email':{function:Validators.email, async:false},'pattern':{function:Validators.pattern(/^[a-zA-Z0-9\s]*$/), async:false},'minLength':{function:Validators.minLength(3), async:false},'maxLength':{function:Validators.maxLength(11), async:false}};
  @Input() myForm:FormGroup|null=null;
  @Input() controlName:string='name';
  constructor() { }

  ngOnInit(): void {
    this.specialValidatorControlNames=`${this.controlName}_validators_active`

    this.myForm.addControl(
      this.specialValidatorControlNames, new FormGroup({
        // 'required':new FormControl(this.myForm.get(this.controlName).hasValidator(this.validators_object['required'])),
        // 'email':new FormControl(this.myForm.get(this.controlName).hasValidator(this.validators_object['email'])),
        // 'pattern':new FormControl(this.myForm.get(this.controlName).hasValidator(this.validators_object['pattern'])),
        // 'minLength':new FormControl(this.myForm.get(this.controlName).hasValidator(this.validators_object['minLength'])),
        // 'maxLength':new FormControl(this.myForm.get(this.controlName).hasValidator(this.validators_object['maxLength']))
      })
    )

    Object.keys(this.validators_object).forEach((key)=>{
      let control=this.myForm.get(this.specialValidatorControlNames) as FormGroup
      if( !control.contains(key)){
        control.addControl(key, new FormControl(
          this.myForm.get(this.controlName).hasValidator(this.validators_object[key].function) ||
          this.myForm.get(this.controlName).hasAsyncValidator(this.validators_object[key].function)
        ))
      }
    })
    this.validators_keys=Object.keys(this.validators_object)
    this.validators_Fns_instance=Object.values(this.validators_object).map(item=>item.function)
  }

  generateValidatorsFns(){
    let validators_Fns=[]
    Object.keys(this.myForm.get(this.specialValidatorControlNames).value).forEach(key => {
      if(this.myForm.get(this.specialValidatorControlNames).value[key]){
        //if asyc:false
        if(!this.validators_object[key].async){
          validators_Fns.push(this.validators_object[key].function)
        }
      }
    });
    return validators_Fns
  }

  generateAsyncValidatorsFns(){
    let validators_Fns=[]
    Object.keys(this.myForm.get(this.specialValidatorControlNames).value).forEach(key => {
      if(this.myForm.get(this.specialValidatorControlNames).value[key]){
        //if asyc:true
        if(this.validators_object[key].async){
          validators_Fns.push(this.validators_object[key].function)
        }
      }
    });
    return validators_Fns
  }

  toggleValidators(){
    let form=this.myForm.get(this.controlName);
    if(form){
      form.setValidators(this.generateValidatorsFns())
      form.setAsyncValidators(this.generateAsyncValidatorsFns())
      form.updateValueAndValidity();
    }
  }

}
