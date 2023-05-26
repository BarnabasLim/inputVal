import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-s00-sandbox',
  templateUrl: './s00-sandbox.component.html',
  styleUrls: ['./s00-sandbox.component.scss']
})
export class S00SandboxComponent implements OnInit {

  //Things to do Reset Form once complete
  //Show results of forms
  public checked:boolean=false;

  public myForm:FormGroup;
  constructor(
    public fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',[Validators.required]],
      alias:['',[Validators.required]]
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
