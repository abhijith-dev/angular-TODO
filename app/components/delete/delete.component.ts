import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service'
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  _id='';
  deleted;
  result=0
  constructor(private data:DataService) { }
  ngOnInit() {
  }
  deleteData(){
    this.data.deleteEmpDetails(this._id).subscribe(res=>{
       this.deleted=res
       this.result=1
       this._id=''
       setTimeout(() => {
         this.result=0
       },6000);
    })
    
  }
}
