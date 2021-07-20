import { Component, OnInit } from '@angular/core';
import { RepoServiceService } from 'src/shared/services/repo/repo-service.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  // repos: Array<{name: string, description: string,  index: number}> = [
  //   {
  //     name: "test1",
  //     description: "description1",
  //     index: 1,
  //   }, {
  //     name: "test2",
  //     description: "description2",
  //     index: 2,
  //   }, {
  //     name: "test3",
  //     description: "description3",
  //     index: 3,
  //   }, {
  //     name: "test1",
  //     description: "description1",
  //     index: 1,
  //   }, {
  //     name: "test2",
  //     description: "description2",
  //     index: 2,
  //   }, {
  //     name: "test3",
  //     description: "description3",
  //     index: 3,
  //   }, {
  //     name: "test1",
  //     description: "description1",
  //     index: 1,
  //   }, {
  //     name: "test2",
  //     description: "description2",
  //     index: 2,
  //   }, {
  //     name: "test3",
  //     description: "description3",
  //     index: 3,
  //   },
  // ];
  // searchedrepos: Array<{name: string, description: string,  index: number}> = [
  //   {
  //     name: "test1",
  //     description: "description1",
  //     index: 1,
  //   }, {
  //     name: "test2",
  //     description: "description2",
  //     index: 2,
  //   }, {
  //     name: "test3",
  //     description: "description3",
  //     index: 3,
  //   }, {
  //     name: "test1",
  //     description: "description1",
  //     index: 1,
  //   }, {
  //     name: "test2",
  //     description: "description2",
  //     index: 2,
  //   }, {
  //     name: "test3",
  //     description: "description3",
  //     index: 3,
  //   }, {
  //     name: "test1",
  //     description: "description1",
  //     index: 1,
  //   }, {
  //     name: "test2",
  //     description: "description2",
  //     index: 2,
  //   }, {
  //     name: "test3",
  //     description: "description3",
  //     index: 3,
  //   },
  // ];
  repos: Array<{name: string, description: string,  index: number}> = [];
  searchedrepos: Array<{name: string, description: string,  index: number}> = [];
  index: number = 1;
  searchText: string = "";

  constructor(private repoService: RepoServiceService) {
    this.getRepositories("ddiiego4");
  }

  ngOnInit(): void {
    this.index = 1;
  }

  getRepositories(name: string) {
    this.repoService.getRepositoryList(name)
    .subscribe( res => {
      res.map((item: any, index: number) => {
        const name = item.name;
        const description = item.description;
        this.repos.push({ name, description, index });
      })
    });
    this.searchedrepos = this.repos;
  }

  searchHandler() {
    if(this.searchText === "") {
      this.searchedrepos = this.repos;
      return;
    }    
    this.searchedrepos = [];
    this.repos.map((item) => {
      if(item.name === this.searchText) this.searchedrepos.push(item);
    });
  }
}
