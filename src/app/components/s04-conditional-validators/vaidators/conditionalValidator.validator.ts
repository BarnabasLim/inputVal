import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";



export function conditionalValidator(conditionalFunction:()=>boolean, validator:ValidatorFn):ValidatorFn|null{

    return (control:AbstractControl):ValidationErrors|null=>{
        console.log("conditionalVaidator Function Called")
        if(conditionalFunction()){//Evaluate to True or False
            return validator(control);//Evaluate and returns a ValidationErrors 
            //e.g. Validators.required(control) => {required:true}|null
            //e.g. Validators.maxLength(control) => {maxlength:{requiredLength:11, actuallength:26}}|null
        }else{
            return null
        }
    }

}