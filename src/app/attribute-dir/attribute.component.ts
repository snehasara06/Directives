import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {
classZero='zero';
classOne='one';
classTwo='two';
public name:string='';

addStyle(){
return{
  'font-size.px':20,
  'color':'rebeccapurple',
  'font-style':'bold'
}
}
  constructor() { }

  ngOnInit(): void {
  }

}
