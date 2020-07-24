import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  list=[]
  display_list=[]
  page=1
  loading=1
  constructor(private data:DataService) { }
  ngOnInit() {
    this.loading=1
    this.data.getEmpDetails(this.page).subscribe(res=>{
      this.list.push(res)
      this.display_list=this.list[0].data
      console.log(this.display_list)
      this.loading=0
    })
  }

}
