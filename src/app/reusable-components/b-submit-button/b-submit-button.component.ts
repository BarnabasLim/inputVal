import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'b-submit-button',
  templateUrl: './b-submit-button.component.html',
  styleUrls: ['./b-submit-button.component.scss'],
  providers: [MessageService]
})
export class BSubmitButtonComponent implements OnInit {
  @Input() myForm:FormGroup|null=null;
  @Input() checked:boolean=false;
  public reset=false;
  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("submit ")
    if(this.myForm.valid){
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Form Submitted'});
      this.reset=true;
    }else{
      this.myForm.markAllAsTouched();
      this.markAllControlsAsDirty(Object.values(this.myForm.controls));
      this.messageService.add({severity:'error', summary: 'Error', detail: 'From Invalid'});
    }
  }
  onReset(){
    this.reset=false;
    this.myForm.reset()
  }

  public markAllControlsAsDirty(abstractControls: AbstractControl[]): void {
    abstractControls.forEach(abstractControl => {
      if (abstractControl instanceof FormControl) {
        (abstractControl as FormControl).markAsDirty({onlySelf: true});
      } else if (abstractControl instanceof FormGroup) {
        this.markAllControlsAsDirty(Object.values((abstractControl as FormGroup).controls));
      } else if (abstractControl instanceof FormArray) {
        this.markAllControlsAsDirty((abstractControl as FormArray).controls);
      }
    });
  }
}
