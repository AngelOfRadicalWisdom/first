import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{Routes, RouterModule} from '@angular/router'
import { DataEntryComponent } from './data-entry/data-entry.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import{SharedService}from'./shared.service';

const navigator:Routes=[
{path:'dataentry',component: DataEntryComponent },
{path:'datadisplay', component: DataDisplayComponent}

] 
@NgModule({
  declarations: [
    AppComponent,
    DataEntryComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(navigator)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
