import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepoServiceService } from 'src/shared/services/repo/repo-service.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  repoName: string = "";
  content: string = "Not Find Readme.MD";
  temp:string="";
  constructor(
    private route: ActivatedRoute,
    private repoService: RepoServiceService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(res => {
      this.repoName = res['name'];
    });

    this.repoService.getReadMe("ddiiego4", this.repoName)
    .subscribe( res => {
      
      this.temp = res.content;
      this.content=atob(this.temp);
    })
  }

}
