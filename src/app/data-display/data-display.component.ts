import { Component, OnInit } from '@angular/core';
import{SharedService} from'../shared.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  studCollection: Array <object>

  constructor(private dataStore:SharedService) { }

  ngOnInit() {
     this.studCollection = this.dataStore.getStudent();
  }

}
