import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'standard-card',
  templateUrl: './standard-card.component.html',
  styleUrls: ['./standard-card.component.scss']
})
export class StandardCardComponent implements OnInit {

  @Input() headerString="Header content here";
  @Input() checked=false;
  @Output() checkedChange=new EventEmitter<boolean>();

  constructor(
  ) { }

  ngOnInit(): void {
  }


  toggleClicked(){
    console.log("CLICKED IT", this.checked)
    this.checkedChange.emit(this.checked);
  }

}
