import { AbstractControl, ValidationErrors } from "@angular/forms";


export function asyncDuplicateCheck(control:AbstractControl):Promise<ValidationErrors|null>{
    let list_of_taken_alias=['super','cat','bob']

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(list_of_taken_alias.includes(control?.value?.toLowerCase())){
                //ValidationErrors
                resolve({asyncDuplicate:{value:control?.value}})
            }else{
                //No ValidationErrors
                resolve(null)
            }
        },2000)
    })
}