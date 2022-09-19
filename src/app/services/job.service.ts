import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { JobModel } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService{

  constructor(private http: HttpClient) { 
  }

  jobSub?: Subscription;

  languageSelected = new Subject<any>();
  languageDeleted = new Subject<any>();

  getAllJobs(): Observable<JobModel[]>{
    return this.http.get<JobModel[]>("assets/data.json");
  }

  
}
