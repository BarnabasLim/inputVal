import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(list_of_forbidden_name=[]):ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null=>{
        return list_of_forbidden_name.includes(control?.value?.toLowerCase()) 
        ? 
            {forbiddenName:{value:control.value}}
        :
            null;
    }
}