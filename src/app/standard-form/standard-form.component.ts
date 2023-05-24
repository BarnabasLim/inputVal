import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-standard-form',
  templateUrl: './standard-form.component.html',
  styleUrls: ['./standard-form.component.scss']
})
export class StandardFormComponent implements OnInit {
  @Input() headerString="Header content here";
  @Input() checked=false;
  @Output() checkedEmitter=new EventEmitter();

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

  toggleClicked(){
    this.checkedEmitter.emit(this.checked);
  }

}
