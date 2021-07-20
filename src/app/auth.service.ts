import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { OktaAuth } from '@okta/okta-auth-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authClient = new OktaAuth({
    issuer: 'https://dev-9323263.okta.com/oauth2/default',
    clientId: '0oafgkleyb98cJgcB5d6'
  });

  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
  }

  checkAuthenticated(): boolean {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      return true
    } else {
      return false
    }
  }

  async login(username: string, password: string): Promise<void> {
    const transaction = await this.authClient.signIn({username, password});

    if (transaction.status !== 'SUCCESS') {
      throw Error('We cannot handle the ' + transaction.status + ' status');
    }
    this.isAuthenticated.next(true);

    this.authClient.session.setCookieAndRedirect(transaction.sessionToken);
  }

  logout(redirect: string) {
    localStorage.clear();
    this.router.navigate([redirect]);
  }
}
