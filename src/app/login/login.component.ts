import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthDemo } from "../../../auth.config";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/repositories';

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.authService.checkAuthenticated()) {
      this.router.navigate([this.returnUrl]);
    }
  }
  

  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      const username = this.form.get('username')?.value;
      const password = this.form.get('password')?.value;
      if (AuthDemo.username !== username) {
        this.loginInvalid = true; return;
      }
      if (AuthDemo.pass !== password) {
        this.loginInvalid = true; return;
      }
      this.loginInvalid = false
      localStorage.setItem('username', username);
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/repositories'])
      this.formSubmitAttempt = true; return;

      // await this.authService.login(username, password);
    } 
  }
}
