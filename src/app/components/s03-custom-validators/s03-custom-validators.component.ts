import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { forbiddenNameValidator } from './validators/forbiddenName.validator';
import { asyncDuplicateCheck } from './validators/asyncDuplicateCheck.validator';

import PubSub from 'pubsub-js'

@Component({
  selector: 'app-s03-custom-validators',
  templateUrl: './s03-custom-validators.component.html',
  styleUrls: ['./s03-custom-validators.component.scss']
})
export class S03CustomValidatorsComponent implements OnInit {
  public validators_object={'required':{function:Validators.required, async:false},'forbiddenName':{function:forbiddenNameValidator(['na','null','nil']), async:false},"asyncDupCheck":{function:asyncDuplicateCheck, async:true}}
  public checked:boolean=false;
  //For Experiment(Start)//
  public name_async_val_count=0;
  public alias_async_val_count=0;
  //For Experiment(Start)//

  public myForm:FormGroup;
  constructor(
    public fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',[Validators.required, this.validators_object['forbiddenName'].function]],
      alias:['',  {
          validators: [Validators.required],
          asyncValidators: [this.validators_object['asyncDupCheck'].function],
          updateOn: 'blur'
        }
      ]
    })
    //For Experiment(Start)//
    PubSub.subscribe('name', ()=>{
      this.name_async_val_count+=1
    });
    PubSub.subscribe('alias', ()=>{
      this.alias_async_val_count+=1
    });
    //For Experiment(End)//
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
    this.name_async_val_count=0
    this.alias_async_val_count=0
  }
}
