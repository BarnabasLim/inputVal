import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-s02-angular-validators',
  templateUrl: './s02-angular-validators.component.html',
  styleUrls: ['./s02-angular-validators.component.scss']
})
export class S02AngularValidatorsComponent implements OnInit {
  public validators_object={'required':Validators.required,'email':Validators.email,'pattern':Validators.pattern(/^[a-zA-Z0-9\s]*$/),'minLength':Validators.minLength(3),'maxLength':Validators.maxLength(11)}
  public checked:boolean=false;
  
  public myForm:FormGroup;
  constructor(
    public fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',Object.values(this.validators_object)],
      alias:['',[Validators.required]],
      validators_active:this.fb.group({
        'required':[true],
        'email':[true],
        'pattern':[true],
        'minLength':[true],
        'maxLength':[true]
      })
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
    console.log(this.checked)
  }

  

}
