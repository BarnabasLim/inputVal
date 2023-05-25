import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-s01-status-properties',
  templateUrl: './s01-status-properties.component.html',
  styleUrls: ['./s01-status-properties.component.scss']
})
export class S01StatusPropertiesComponent implements OnInit {
  //Things to do Reset Form once complete
  //Show results of forms
  public checked:boolean=false;
  public myForm:FormGroup;
  constructor(
    public fb:FormBuilder
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

  toggleClicked($event){
    this.checked=$event
    console.log(this.checked)
  }

}
