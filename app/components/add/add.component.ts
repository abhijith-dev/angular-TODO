import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name='';
  job='';
  added;
  result=0
  constructor(private data:DataService) { }

  ngOnInit() {
  }
  addData(){
    this.data.addEmpDetails(this.name,this.job).subscribe(res=>{
       this.added=res
       this.result=1
       let count=5
       this.name=''
       this.job=''
       setTimeout(() => {
         this.result=0
       },6000);
    })
    
  }
}
