import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";


// conditionalValidator(
//     ()=>{ return this.myForm?.get('name')?.value?.toLowerCase()=="secret"}, 
//     Validators.required
// )
export function conditionalValidator(conditionalFunction:()=>boolean, validator:ValidatorFn):ValidatorFn|null{

    return (control:AbstractControl):ValidationErrors|null=>{
        console.log("conditionalValidator Function Called")
        if(conditionalFunction()){//Evaluates to True or False
            return validator(control);
            //Evaluates and returns a ValidationErrors 
            //e.g. Validators.required(control) => {required:true}|null
            //e.g. Validators.maxLength(control) => {maxlength:{requiredLength:11, actuallength:26}}|null
        }else{
            return null
        }
    }

}