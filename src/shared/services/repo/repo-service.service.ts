import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {

  constructor(private httpClient: HttpClient) { }

  getRepositoryList(name: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${name}/repos`).pipe(map(res => {
      return res;
    }));
  }

  getReadMe(name: string, repoName: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/repos/${name}/${repoName}/readme`).pipe(map(res => {
      return res;
    }))
  }
}
