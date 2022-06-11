import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 condn:boolean=true;
 display=false;
 condition=true;
 public color="blue";
 cars=['Bugatti','Jaquar','Lamborghini','Ferrari','Rolls-Royce']
}
