import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { conditionalValidator } from './vaidators/conditionalValidator.validator';

@Component({
  selector: 'app-s04-conditional-validators',
  templateUrl: './s04-conditional-validators.component.html',
  styleUrls: ['./s04-conditional-validators.component.scss']
})
export class S04ConditionalValidatorsComponent implements OnInit {
  public validators_object={'required':{function:Validators.required, async:false},}
  public checked:boolean=false;

  public myForm:FormGroup;
  public name_subscriber:any=null;
  constructor(
    public fb:FormBuilder
  ) { }


  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',[Validators.required]],
      alias:['', [
          conditionalValidator(
            ()=>{ return this.myForm?.get('name')?.value?.toLowerCase()=="secret"}, 
            Validators.required)
          ]
      ]
    })
    this.subscriber()
  }

  ngOnDestroy():void{
    this.unsubscriber()
  }
  
  get name(){
    return this.myForm.get('name')
  }
  get alias(){
    return this.myForm.get('alias')
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
  toggleClicked($event){
    this.checked=$event
    console.log(this.checked)
  }

  onReset(){
  }
}
