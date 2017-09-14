import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service'


@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  constructor(private dataStore:SharedService) { }

  ngOnInit() {
  }
  
  onSubmit(studentForm){
    console.log('Ni click sha');
    this.dataStore.addNewStudent(studentForm.value.studnum,studentForm.value.studfname,
      studentForm.value.studlname,studentForm.value.studprog,studentForm.value.studyear);
      studentForm.reset();

  }

}
