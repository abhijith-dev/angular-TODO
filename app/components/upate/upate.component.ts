import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service'
@Component({
  selector: 'app-upate',
  templateUrl: './upate.component.html',
  styleUrls: ['./upate.component.css']
})
export class UpateComponent implements OnInit {
   update=0;
   _id=''
   name='';
   job='';
   added;
   result=0
  constructor(private data:DataService) { }
  Ud(){
    this.update=1
  }
  addData(){
    this.data.addEmpDetails(this.name,this.job).subscribe(res=>{
       this.added=res
       this.result=1
       this.name=''
       this.job=''
       setTimeout(() => {
         this.result=0
       },6000);
    })
    
  }
  ngOnInit() {
  }

}
