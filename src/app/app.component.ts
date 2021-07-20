import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tic Tac Toe';
  isAuthenticated = false;

  constructor(public authService: AuthService) {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

  ngOnInit() {             
    this.isAuthenticated = this.authService.checkAuthenticated();
  }

  ngDoCheck(): void {
    this.isAuthenticated = this.authService.checkAuthenticated()
    
  }

  logout() {
    this.authService.logout('/');
    this.isAuthenticated = false;
  }
}
