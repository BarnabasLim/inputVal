import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-s02-angular-validators',
  templateUrl: './s02-angular-validators.component.html',
  styleUrls: ['./s02-angular-validators.component.scss']
})
export class S02AngularValidatorsComponent implements OnInit {
  public validators_object={'required':{function:Validators.required, async:false},'email':{function:Validators.email, async:false},'pattern':{function:Validators.pattern(/^[a-zA-Z0-9\s]*$/), async:false},'minLength':{function:Validators.minLength(3), async:false},'maxLength':{function:Validators.maxLength(11), async:false}}
  public checked:boolean=false;
  
  public myForm:FormGroup;
  constructor(
    public fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',Object.values(this.validators_object).map((item)=>item.function)],
      alias:['',[Validators.required]],
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

  

}
