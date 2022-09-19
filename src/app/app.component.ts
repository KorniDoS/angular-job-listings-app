import { Component } from '@angular/core';
import { JobModel } from './models/job.model';
import { OnInit, OnDestroy } from '@angular/core';
import { JobService } from './services/job.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {


  jobs: JobModel[] = [];
  languages: string[] = [];
  jobSub!: Subscription;

  constructor(private jobService: JobService){}


  ngOnInit(): void{
 
    this.jobSub = this.jobService.getAllJobs().subscribe(
      (resp: any)=>{
        this.jobs = resp;
        this.languages = resp.languages;
        console.log(this.jobs);
      }
    )
  }

  ngOnDestroy(): void {
    this.jobSub.unsubscribe();
  }

 

}
