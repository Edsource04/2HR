import { Observable } from 'rxjs/Observable';
import { JobDescription } from './models/job-description';
import { JobPost } from './models/job-post';
import { Injectable } from '@angular/core';


@Injectable()
export class InformationService {
  jobDescription: JobDescription = {
    _id: 'DDDDD',
    functions: 'Limpieza de portales y escaleras, zonas comunes, mantenimiento básico, se valora conocimientos básicos o experiencia en jardinería aunque no es imprescindible.',
    contractType: 'indefinido',
    duration: 'indefinida',
    location: 'Santo Domingo',
    workDayType: 'Jornada Completa',
    schedule: 'De 9 a 2 de la tarde y de 3 a 6 de la tarde',
    salary: 15000,
    requiredTitle: 'no requerido',
    computerRequirements: 'no requerido',
    languagesRequirements: 'Ingles Intermedio, Español',
    driverLicense: false,
    carOwner: false,
    age: 35,
    incorporationDate: new Date(2018, 1, 8)
 };

  jobPost: Array<JobPost> = [
    {
      _id: 'AAAAA',
      imgSrc: 'assets/job_post/concerge_post.jpg',
      jobDescription: this.jobDescription,
      entryDate: new Date(),
      expireDate: new Date(2018, 1, 10),
      posteredBy: 'admin@admin.com',
      status: true
    },{
      _id: 'BBBBB',
      imgSrc: 'assets/job_post/concerge_limpieza.jpg',
      jobDescription: {
              _id: 'LLLLL',
              functions: 'Conserjería, apertura y cierre del edificio, recepción de visitas, control de mantenimiento básico (cortes de agua, apertura de cerraduras, etc.).',
              contractType: 'Temporal',
              duration: '1 año Minimo',
              location: 'Santo Domingo',
              workDayType: 'parcial sábados, domingos y festivos (16 horas semanales).',
              schedule: 'de 07:30 a 09:30 y de 18:00 a 00:00.',
              salary: 15000,
              requiredTitle: 'No Requerido',
              computerRequirements: 'No Requeridos',
              languagesRequirements: 'No Requeridos',
              driverLicense: false,
              carOwner: false,
              age: 40,
              incorporationDate: new Date (2017, 11, 20)
      },
      entryDate: new Date(),
      expireDate: new Date(2017, 12, 15),
      posteredBy: 'admin@admin.com',
      status: true
    }
  ];

  constructor() { }
  getPost(): Observable<JobPost[]>{
    let observable = Observable.create(observer => {
      setTimeout(()=>{
        observer.next(this.jobPost);
        console.log('Sending Posts');
        //if there is an error observer.error(new Error('three was an erro'));
        observer.complete();
      }, 2000);
    });

    return observable;
  }
}


