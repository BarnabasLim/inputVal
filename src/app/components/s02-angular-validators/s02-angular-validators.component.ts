import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-s02-angular-validators',
  templateUrl: './s02-angular-validators.component.html',
  styleUrls: ['./s02-angular-validators.component.scss']
})
export class S02AngularValidatorsComponent implements OnInit {

  public checked:boolean=false;
  public myForm:FormGroup;
  constructor(
    public fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',[Validators.required, Validators.minLength(3),Validators.maxLength(11) ]],
      alias:['',[Validators.required]],
      
    })
  }

  get name(){
    return this.myForm.get('name')
  }

  toggleClicked($event){
    this.checked=$event
    console.log(this.checked)
  }

  

}
