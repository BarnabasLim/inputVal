import { AbstractControl, ValidationErrors } from "@angular/forms";

export function asyncDuplicateCheck(control:AbstractControl):Promise<ValidationErrors|null>{
    let exiting_alias=['super','cat','bob']
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(exiting_alias.includes(control.value.toLowerCase())){
                //ValidationErrors
                resolve({asyncDuplicate:{value:control.value}})
            }else{
                //No ValidationErrors
                resolve(null)
            }
        },4000)
    })
}