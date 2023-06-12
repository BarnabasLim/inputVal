import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

//forbiddenNameValidator(['na','nil','null'])
export function forbiddenNameValidator(list_of_forbidden_name=[]):ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null=>{
        if(list_of_forbidden_name.includes(control?.value?.toLowerCase())){
            return {forbiddenName:{value:control.value}}
        }else{
            return null
        }
    }
}