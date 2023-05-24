import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'standard-panel',
  templateUrl: './standard-panel.component.html',
  styleUrls: ['./standard-panel.component.scss']
})
export class StandardPanelComponent implements OnInit {
  @Input() headerString="Header content here";
  @Input() checked=false;
  @Output() checkedEmitter=new EventEmitter();
  items = []
  constructor() { }

  ngOnInit(): void {
  }
  toggleClicked(){
    this.checkedEmitter.emit(this.checked);
  }
}
