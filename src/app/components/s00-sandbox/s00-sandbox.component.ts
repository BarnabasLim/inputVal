import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './validators/forbiddenName.validator';
import { asyncDuplicateCheck } from './validators/asyncDuplicateCheck.validator';
import { conditionalValidator } from './validators/conditionalValidator.validator';
@Component({
  selector: 'app-s00-sandbox',
  templateUrl: './s00-sandbox.component.html',
  styleUrls: ['./s00-sandbox.component.scss']
})
export class S00SandboxComponent implements OnInit {

  public checked:boolean=false;
  public name_subscriber:any=null;

  public myForm:FormGroup;
  constructor(
    public fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',[
        Validators.required, 
      ]],
      alias:['',[
        conditionalValidator(
            ()=>{return this.myForm?.get('name')?.value?.toLowerCase()=="secret"}, 
            Validators.required
        )
      ]]
    })

    this.subscriber()
  }

  ngOnDestroy():void{
    this.unsubscriber()
  }

  subscriber(){
    this.name_subscriber=this.myForm.get('name').valueChanges.subscribe((value)=>{
      this.myForm.get('alias').updateValueAndValidity();
    })
  }

  unsubscriber(){
    if(!this.name_subscriber){
      this.name_subscriber.unsubscribe();
    }
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
}
