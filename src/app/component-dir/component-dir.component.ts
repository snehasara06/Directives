import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-dir',
  templateUrl: './component-dir.component.html',
  styleUrls: ['./component-dir.component.scss']
})
export class ComponentDirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
clickMe(){
  alert("Welcome Sneha!!")
}
}
