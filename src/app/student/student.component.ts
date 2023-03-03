import { Component, OnInit } from '@angular/core';
import { Student } from '../common/data/tennis-tournament/student';
import { StudentService } from '../common/services/student.service';
import { firstValueFrom } from 'rxjs';
import { messageFromError } from '../common/utils/util';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  public studentsList:Student[] = [];
  public student = new Student();
  public isNewForm:boolean = false;
  public message:string = "";

  public selectedStudent:Student | null = null;
  public newStudent:Student = new Student();

  private _updateList(student:Student, list:Student[]){
    for(let i = 0; i < list.length; i++){
      if(student.id == list[i].id){
        list[i] = student;
      }
    }
  }

  public async onClickGetDetails(student:Student){
    this.selectedStudent = student;
    try{
      this.student = await firstValueFrom(this._studentService.getDetails$(student));
    } catch(err:any){
        this.message = messageFromError(err, "Erreur");
    }
  }

  public async onUpdate(){
    // this._studentService.updateStudent$(this.student).subscribe({
    //   next:(res:any) => {console.log(res); this._updateList(this.student, this.studentsList)},
    //   error:(err:any) => {this.message = messageFromError(err, "Erreur")}
    // });
    try{
      await firstValueFrom(this._studentService.updateStudent$(this.student));
      this._updateList(this.student, this.studentsList);
    } catch(err:any){
      this.message = messageFromError(err, "Erreur");
    }
  }

  public async onAddStudent(){
    // this._studentService.addStudent$(this.newStudent).subscribe({
    //   next:(res:Student) => {console.log(res); this.getAll(); this.onBack();},
    //   error:(err) => {this.message = messageFromError(err, "Erreur")}
    // });
    try{
      let student = await firstValueFrom(this._studentService.addStudent$(this.newStudent));
      this.studentsList.push(student);
      this.onBack();
    }catch(err:any){
      this.message = messageFromError(err, "Erreur");
    }
  }

  public async onDelete(){
    // this._studentService.deleteStudent$(this.student).subscribe({
    //   next:(res:any) => {console.log(res); this.getAll()},
    //   error:(err) => {this.message = messageFromError(err, "Erreur")}
    // })
    if(window.confirm("Voulez-vous supprimer cette entrée ?")){
      try{
        await firstValueFrom(this._studentService.deleteStudent$(this.student));
        location.reload();
      }catch(err:any){
        this.message = messageFromError(err, "Erreur");
      }  
    }
  }

  public onNewForm(){
    this.isNewForm = true;
  }

  public onBack(){
    this.isNewForm = false;
  }

  // public getAll(){
  //   this._studentService.getAllStudents$().subscribe({
  //     next:(students:Student[]) => {this.studentsList = students;
  //     },
  //     error:(err:any) => {this.message = messageFromError(err, "Erreur")}
  //   });
  // }

  public async getAll(){
    try{
      this.studentsList = await firstValueFrom(this._studentService.getAllStudents$());
    } catch(err:any){
      this.message = messageFromError(err, "Erreur");
    }
  }

  constructor(private _studentService:StudentService){}

  public ngOnInit(){
    this.getAll();
  }
}
