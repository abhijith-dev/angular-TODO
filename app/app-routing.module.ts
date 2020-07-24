import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewComponent} from './components/view/view.component'
import {AddComponent} from './components/add/add.component'
import {DeleteComponent} from './components/delete/delete.component'
import {UpateComponent} from './components/upate/upate.component'
const routes: Routes = [
   {
     path:'view',
     component:ViewComponent
   },
   {
     path:'delete',
     component:DeleteComponent
   },
   {
     path:'update',
     component:UpateComponent
   },
   {
     path:'add',
     component:AddComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
