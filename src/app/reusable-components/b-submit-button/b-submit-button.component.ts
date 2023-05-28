import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() resetEmitted:EventEmitter<boolean>=new EventEmitter();
  public reset=false;
  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("submit ", this.myForm.status)
    if(this.myForm.status=="VALID"){
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Form Submitted'});
      this.reset=true;
    }else if(this.myForm.status=="INVALID"){
      this.myForm.markAllAsTouched();
      this.markAllControlsAsDirty(Object.values(this.myForm.controls));
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Form Invalid'});
    }else if(this.myForm.status=="PENDING"){
      this.myForm.markAllAsTouched();
      this.markAllControlsAsDirty(Object.values(this.myForm.controls));
      this.messageService.add({severity:'warn', summary: 'WARNING', detail: 'Form Pending'});
    }
  }
  onReset(){
    this.reset=false;
    //Reset from without changing Validators
    this.myForm.reset({...this.myForm.value,'name':'','alias':''})
    this.resetEmitted.emit()
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
