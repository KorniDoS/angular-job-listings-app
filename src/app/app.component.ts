import { Component } from '@angular/core';
import { JobModel } from './models/job.model';
import { OnInit } from '@angular/core';
import { JobService } from './services/job.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  jobs: JobModel[] = [];

  constructor(private jobService: JobService){}


  ngOnInit(): void{
    this.jobService.getAllJobs().subscribe(
      res=>{
        this.jobs = res;
        console.log(this.jobs);
      }
    )
  }

}
