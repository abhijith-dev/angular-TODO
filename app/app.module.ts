import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './components/add/add.component';
import { ViewComponent } from './components/view/view.component';
import { DeleteComponent } from './components/delete/delete.component';
import { UpateComponent } from './components/upate/upate.component';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    DeleteComponent,
    UpateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
