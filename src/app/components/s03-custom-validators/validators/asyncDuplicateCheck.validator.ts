import { AbstractControl, ValidationErrors } from "@angular/forms";
import PubSub from 'pubsub-js'
export function asyncDuplicateCheck(control:AbstractControl):Promise<ValidationErrors|null>{
    let exiting_alias=['super','cat','bob']

    //For Experiment(Start)//
    let controlName=getControlName(control)
    console.log(controlName, ' called asyncDuplicateCheck')
    PubSub.publish(controlName, 'AsyncCalled');
    //For Experimenet(End)//

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(exiting_alias.includes(control?.value?.toLowerCase())){
                //ValidationErrors
                resolve({asyncDuplicate:{value:control.value}})
            }else{
                //No ValidationErrors
                resolve(null)
            }
        },4000)
    })
}

//For Experiment(Start)//
function getControlName(c: AbstractControl): string | null {
    const formGroup = c.parent.controls;
    return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
}
//For Experimenet(End)//