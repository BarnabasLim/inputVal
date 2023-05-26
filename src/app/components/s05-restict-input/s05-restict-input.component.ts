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
      return {type:"InputEvent", isTrusted:$event.isTrusted, data:$event.data, isComposing: $event.isComposing, inputType:$event.inputType, dataTransfer:$event.dataTransfer}
    }
  }
  onKeydown(formControl:AbstractControl,$event:any){
    console.log(this.eventCounter,":", formControl.value,":",$event)
    this.orderOfEvents.push({id:this.eventCounter,name: '(keydown)', event:this.constructEvent($event),value:formControl.value, color: '#9C27B0', icon: PrimeIcons.ARROW_CIRCLE_DOWN})
    this.eventCounter+=1
    this.orderOfEvents=cloneDeep(this.orderOfEvents)
  }
  onKeypress(formControl:AbstractControl,$event:any){
    console.log(this.eventCounter,":", formControl.value,":",$event)
    this.orderOfEvents.push({id:this.eventCounter,name: '(keypress)', event:this.constructEvent($event),value:formControl.value , color: '#673AB7', icon: PrimeIcons.STOP_CIRCLE})
    this.eventCounter+=1
    this.orderOfEvents=cloneDeep(this.orderOfEvents)
  }
  onInput(formControl:AbstractControl, $event:any){
    console.log(this.eventCounter,":", formControl.value,":",$event)
    this.orderOfEvents.push({id:this.eventCounter,name: '(input)', event:this.constructEvent($event),value:formControl.value, color: '#FF9800' , icon: PrimeIcons.INFO_CIRCLE})
    this.eventCounter+=1
    this.orderOfEvents=cloneDeep(this.orderOfEvents)
  }
  onKeyup(formControl:AbstractControl, $event:any){
    console.log(this.eventCounter,":", formControl.value,":",$event)
    this.orderOfEvents.push({id:this.eventCounter,name: '(keyup)', event:this.constructEvent($event),value:formControl.value, color: '#607D8B' , icon: PrimeIcons.ARROW_CIRCLE_UP})
    this.eventCounter+=1
    this.orderOfEvents=cloneDeep(this.orderOfEvents)
  }
  ResetEvent(){
    this.orderOfEvents=[]
    this.eventCounter=0
  }
}
