import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-asgnmnt',
  templateUrl: './directives-asgnmnt.component.html',
  styleUrls: ['./directives-asgnmnt.component.css']
})
export class DirectivesAsgnmntComponent implements OnInit {
   /* 1. In a component create two variables title, name and lastname and on HTML page 
        create a text box for name and lastname do two-way binding.  */
       
      name:string;
      lastname:string;
      title:string = "Session7- Directives Assignment!!!";
      //SomeVar:boolean=true;
      hiddenTitle:boolean=false;
      //hiddenTitle:string="hidden";
  constructor() { }


  ngOnInit() {
  }
  clickMe(){
    console.log("inside click me function"); 
   // this.title= "Session7- Directives Assignment!!!";
    this.hiddenTitle=true;
    //this.SomeVar=false;   
    
  }

}
