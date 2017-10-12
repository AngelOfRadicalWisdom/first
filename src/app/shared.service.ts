import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  sNum:number;
  sFName:string;
  sLName:string;
  sProg:string;
  sYear:string;

  studCollection: Array<object> =[];
  sNameObject: {studnum:number, firstName:string, lastName:string, studprog:string, studyear:number };

  constructor() { }
  
  addNewStudent(studnum:number, studfname:string, studlname:string, studprog:string, studyear:number){
    this.sNameObject = {
        studnum:studnum,
        firstName:studfname,
        lastName:studlname,
        studprog:studprog,
        studyear:studyear
    }

  this.studCollection.push(this.sNameObject);
  }

  getStudent(): Array<object>{
    return this.studCollection;
  
}
}
