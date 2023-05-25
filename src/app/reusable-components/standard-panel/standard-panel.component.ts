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
  @Output() checkedChange=new EventEmitter();
  items = []
  constructor() { }

  ngOnInit(): void {
  }
  toggleClicked(){
    this.checkedChange.emit(this.checked);
  }
}
