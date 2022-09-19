import { Component, Input, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-tag-container',
  templateUrl: './tag-container.component.html',
  styleUrls: ['./tag-container.component.scss']
})
export class TagContainerComponent implements OnInit {

  constructor(private jobService: JobService) { }

  currentTags: string[] = [];

  ngOnInit(): void {
    this.jobService.languageSelected.subscribe(
      lang => {
        if (this.currentTags.includes(lang)) {
          return;
        } else {
          this.currentTags.push(lang);
          console.log(this.currentTags);
        }
      }
    )
  }

  removeFromTag(id: number) {
    this.currentTags.splice(id, 1);
    console.log(this.currentTags);
  }

  clearTags() {
    this.currentTags.length = 0;
    console.log(this.currentTags);
  }

}
