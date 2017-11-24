import { Injectable } from '@angular/core';
import { Application,          
         WorkDays,          
         FamilyMember,          
         EducationApplication,          
         WorkExpApplication,          
         SkillApplication,          
         LanguageApplication,          
         PersonalReference } from '../information/models/application.ts';
         
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminService{
     
     applications: Array<Application> = [
         {
           _id: 'AAA1234',
           positionTitle: 'concerje-dektop',
           category: 'customer service',
           vacantNumber: 'CONC-1234',
           availableWorkDay: new Date(2017, 12, 15),
           lastName: 'Rivera Nolasco',
           firstName: 'Edgar Yovanni',
           nationality: 'Dominicana',
           birthday: new Date(1983, 11, 4);
           address: 'Respaldo la Milagrosa #22 los Guandules',
           email: 'ing_edgar_rivera@hotmail.com',
           telephone: '8096210897',
           cellphone: '8097181821',
           socialId: '00117631721',
           driverLicense: true,
           carOwner: false,
           missionRequired: null,
           workDays: [WorkDays.monday, Workdays.tuesday, WorkDays.wednesday, WorkDays.thursday, WorkDays.friday],
           familyMembers: null,
           educationApplications: [{_id: 'edu111', schoolName: 'IADI', fromDate: new Date(1995, 6, 1), toDate: new Date(1995, 12, 15), gradeObtained: 'Tecnico en Ofimatica'}
                                   {_id: 'edu222', schoolName: 'Canadian English Institute', new Date(1999, 5, 1), new Date(2012, 12, 20), gradeObtained: 'Advance English'}],
           workExpApplications: [{_id: 'wordExp111', position: 'customer service agent', companyName: 'Stream Global Services', fromDate: new Date(2012, 12, 3), toDate: new Date(2013, 10, 29)},
                                 {_id: 'wordExp222', position: 'customer service agent', companyName: 'Teleperformance', fromDate: new Date(2013, 11, 10), toDate: new Date(2014, 4, 10)}],
           skillApplications: [{_id: 'skill111', description: 'C#, Java, TypeScript Programmer', field: 'computer science', finishedDate: new Date(2014, 6, 30), institution: 'UTESA'}],
           languageApplications: [{_id: 'lang111', languageName: 'English', speak: 90, read: 95, write: 90},
                                  {_id: 'lang222', languageName: 'Spanish', speak: 90, read: 95, write: 90}],
           personalReferences: [{_id: 'pers111', fullname: 'carlos cruz cuello', relationship: 'pastor', contactNumber: '8094568795'},
                                {_id: 'pers222', fullname: 'Wellington Bido', relationship: 'Reporting Manager', contactNumber: '8294789632'}],
           presentationLetter: 'Hola, mi nombre es edgar yovanni rivera nolasco y deseo pertenecer a esta famosa empresa y proveer con mis conocimientos para ayudar a la empresa a alcanzar su mission',
           profile: null
         }
     ];
     
     constructor(){}
     
     getApplications(): Observable<Application>{
               let apps = Observable.create(observer => {
                    setTimeout(()=>{
                         observer.next(this.applications);
                         console.log('Applications sent');
                         observer.complete();
                    }, 2000);
               });  
               
               return apps;
     }
}
