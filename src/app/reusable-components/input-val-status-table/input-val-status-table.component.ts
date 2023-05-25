import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-val-status-table',
  templateUrl: './input-val-status-table.component.html',
  styleUrls: ['./input-val-status-table.component.scss']
})
export class InputValStatusTableComponent implements OnInit {

  @Input() myForm:FormControl|null=null;
  constructor(
  ) { }
  
  data=[{}]
  ngOnInit(): void {

  }

}
