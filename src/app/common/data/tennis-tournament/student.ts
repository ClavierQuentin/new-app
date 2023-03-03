export class Student{
    constructor(public id:number = 0, public firstMidName:string = "", public lastName:string = "", public enrollmentDate:string = new Date().toISOString()){}
}