import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent implements OnInit {

  @Input()
  repo: any = {name: "", index: 0};

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  detailsHandler(repoName: string) {
    this.router.navigate(['details'], {queryParams: {name: repoName}});
  }
}
