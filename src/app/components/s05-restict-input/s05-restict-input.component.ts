import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {PrimeIcons} from 'primeng/api';
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-s05-restict-input',
  templateUrl: './s05-restict-input.component.html',
  styleUrls: ['./s05-restict-input.component.scss']
})
export class S05RestictInputComponent implements OnInit {
  public validators_object={'required':{function:Validators.required, async:false},}
  public toggles_val={'keydown':false,'keypress':false, 'input': true, 'keyup':false, 'maxLength5':true, 'illegalChar':true}
  public toggles_keys=[]
  public console_logs=''
  public checked:boolean=false;
  public orderOfEvents=[];
  public eventCounter=0;

  public myForm:FormGroup;
  public name_subscriber:any=null;
  constructor(
    public fb:FormBuilder
  ) { }


  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',[Validators.required]],
      alias:['', [Validators.required]]
    })

    Object.keys(this.toggles_val).forEach((key)=>{
      let control=this.myForm as FormGroup
      if( !control.contains(key)){
        control.addControl(key, new FormControl(this.toggles_val[key]))
      }
    })

    this.toggles_keys=Object.keys(this.toggles_val)
  }
  
  get name(){
    return this.myForm.get('name')
  }
  get alias(){
    return this.myForm.get('alias')
  }

  toggleClicked($event){
    this.checked=$event
  }

  onReset(){
  }
  constructEvent($event){
    if($event instanceof KeyboardEvent){
      return {type:"KeyboardEvent", isTrusted:$event.isTrusted, key:$event.key, code: $event.code, location:$event.location, ctrlKey:$event.ctrlKey}
    }
    if($event instanceof InputEvent){
      return {type:"InputEvent", isTrusted:$event.isTrusted, data:$event.data, isComposing: $event.isComposing, 
        // inputType:$event.inputType, 
        dataTransfer:$event.dataTransfer
      }
    }
  }

  onKeydown(formControl:AbstractControl,$event:any, logEvents=false, retrict=false){
    if(logEvents){
      this.logEvents($event, formControl,'keydown')
    }

    if(retrict && this.myForm.get('keydown').value){
      return this.restrictKeysEvents($event, formControl)
    }    
  }
  onKeypress(formControl:AbstractControl,$event:any, logEvents=false, retrict=false){
    if(logEvents){
      this.logEvents($event, formControl,'keypress')
    }
    if(retrict && this.myForm.get('keypress').value){
      return this.restrictKeysEvents($event, formControl)
    }    
  }
  onInput(formControl:AbstractControl, $event:any, logEvents=false, retrict=false){
    if(logEvents){
      this.logEvents($event, formControl,'input')
    }
    if(retrict && this.myForm.get('input').value){
      this.restrictInputEvents($event,formControl)
    }
  }
  onKeyup(formControl:AbstractControl, $event:any, logEvents=false, retrict=false){
    if(logEvents){
      this.logEvents($event, formControl,'keyup')
    }
    if(retrict && this.myForm.get('keyup').value){
      return this.restrictKeysEvents($event, formControl)
    }    
  }
  ResetEvent(){
    this.orderOfEvents=[]
    this.eventCounter=0
  }

  restrictKeysEvents($event, formControl:AbstractControl){
    this.console_logs='';
    const inp=($event.key);
    formControl=formControl as FormControl
    let eventHappen=true;

    //illegal Char Check
    if(this.myForm.get('illegalChar').value){
      let pattern=/^[a-zA-Z0-9\s]*$/
      if(!pattern.test(inp)){
        eventHappen=false
      }
    }

    //max Length Check
    if(this.myForm.get('maxLength5').value){
      if(this.myForm.get('alias')?.value?.length && this.myForm.get('alias')?.value?.length>=5){
        eventHappen=false
      }

    }
    this.console_logs+="restrictKeysEvents\n","$event.key: ",$event.key,"\n$event.keyCode: ",$event.keyCode, eventHappen;
    console.log("restrictKeysEvents\n","$event.key: ",$event.key,"\n$event.keyCode: ",$event.keyCode, eventHappen)
    return eventHappen

  }

  restrictInputEvents($event,formControl:AbstractControl){
    this.console_logs='';
    if($event.inputType=='insertFromPaste'){

    }else{
      if(formControl){
        formControl=formControl as FormControl
        //illegal Char Check
        if(this.myForm.get('illegalChar').value){
          let inp:string=formControl.value
          let pattern=/^[a-zA-Z0-9\s]*$/
          if(!pattern.test(inp) && inp!==null){
            this.console_logs+="Before restrictInputEvents illegalChar val: "+ formControl.value + "\n"
            console.log("Before restrictInputEvents", formControl.value,inp.replace(/[^a-zA-Z0-9\s]/gi,""))
            formControl.setValue(inp.replace(/[^a-zA-Z0-9\s]/gi,""))
            this.console_logs+="After restrictInputEvents illegalChar val:"+ formControl.value+"\n"
            console.log("After restrictInputEvents", formControl.value)
          }
        }

        //max Length Check
        if(this.myForm.get('maxLength5').value){
          if(this.myForm.get('alias')?.value?.length && this.myForm.get('alias')?.value?.length>=5){
            this.console_logs+="Before restrictInputEvents maxLength5 val: "+ formControl.value+"\n"
            console.log("Before restrictInputEvents", formControl.value)
            formControl.setValue(formControl.value?formControl.value.slice(0,5):null)
            this.console_logs+="After restrictInputEvents maxLength5 val: "+ formControl.value+"\n"
            console.log("After restrictInputEvents", formControl.value)
          }
        }
      }
    }
  }

  toggleRestictClicked(formName:string){
    if(this.myForm.get(formName).value){
      let eventKeys=['keydown','keypress', 'input', 'keyup']
      if(eventKeys.includes(formName)){
        eventKeys.forEach((key)=>{
          if(key!==formName){
            this.myForm.get(key).setValue(false)
          }else{
            this.myForm.get(key).setValue(true)
          }
          this.myForm.get(key).updateValueAndValidity()
        })
      }
    }
  }

  logEvents($event, formControl:AbstractControl,event_type){
    let logged_item={}
    switch(event_type){
      case 'keydown':
        logged_item= {id:this.eventCounter,name: '(keydown)', event:this.constructEvent($event),value:formControl.value, color: '#9C27B0', icon: PrimeIcons.ARROW_CIRCLE_DOWN}
        break;
      case 'keypress':
        logged_item= {id:this.eventCounter,name: '(keypress)', event:this.constructEvent($event),value:formControl.value , color: '#673AB7', icon: PrimeIcons.STOP_CIRCLE}
        break;
      case 'input':
        logged_item= {id:this.eventCounter,name: '(input)', event:this.constructEvent($event),value:formControl.value, color: '#FF9800' , icon: PrimeIcons.INFO_CIRCLE}
        break;
      case 'keyup':
        logged_item= {id:this.eventCounter,name: '(keyup)', event:this.constructEvent($event),value:formControl.value, color: '#607D8B' , icon: PrimeIcons.ARROW_CIRCLE_UP}
        break;
      default:
        logged_item={}
        break;

    }
    console.log(this.eventCounter,":", formControl.value,":",$event)
    this.orderOfEvents.push(logged_item)
    this.eventCounter+=1
    this.orderOfEvents=cloneDeep(this.orderOfEvents)
  }
}
