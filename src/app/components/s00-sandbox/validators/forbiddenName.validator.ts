import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";



//forbiddenNameValidator(['null','na','nil'])
export function forbiddenNameValidator(list_of_forbidden_name=[]):ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null=>{
        //checks
        if(list_of_forbidden_name.includes(control?.value?.toLowerCase())){
            return {forbiddenName:{value:control?.value}}
        }else{
            return null
        }
    }
}






















// import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// export function forbiddenNameValidator(list_of_forbidden_name=[]):ValidatorFn{
//     return (control:AbstractControl):ValidationErrors|null=>{
//         return list_of_forbidden_name.includes(control?.value?.toLowerCase()) 
//         ? 
//             {forbiddenName:{value:control.value}}
//         :
//             null;
//     }
// }