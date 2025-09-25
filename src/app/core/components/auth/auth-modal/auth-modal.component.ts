import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, takeUntil } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

import { controlMatchValidator } from '../../../../modules/shared/validators/password-match.validator';
import { OnDestroyDirective } from '../../../directives/on-destroy.directive';
import { AuthService } from '../../../services/auth/auth.service';

enum AuthMode {
  signup = 'signup',
  signin = 'signin',
} 

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent extends OnDestroyDirective implements OnInit {
  isSigninMode = false;
  authModeSwitcher$ = new BehaviorSubject(AuthMode.signin);

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private readonly authService: AuthService,
    private readonly dialogRef: MatDialogRef<AuthModalComponent>,
  ) {
    super();
  }

  ngOnInit(): void {
    this.authModeSwitcher$.pipe(takeUntil(this.destroy$)).subscribe((mode) => {
      this.isSigninMode = mode === AuthMode.signin;

      if (mode === AuthMode.signup) {
        (this.form as FormGroup).addControl('confirmPassword', new FormControl('', [Validators.required]));
        this.form.setValidators(controlMatchValidator('password', 'confirmPassword'));
        this.form.updateValueAndValidity();
      }

      if (mode === AuthMode.signin && this.form.contains('confirmPassword')) {
        this.form.clearValidators();
        (this.form as FormGroup).removeControl('confirmPassword');
        this.form.updateValueAndValidity();
      }
    });
  }

  onSwitchAuthMode(): void {
    const currentMode = this.authModeSwitcher$.getValue();
    this.authModeSwitcher$.next(currentMode === AuthMode.signin ? AuthMode.signup : AuthMode.signin)

    this.form.reset();
  }

  onAuthenticate(): void {
    if (this.form.valid) {
      const currentMode = this.authModeSwitcher$.getValue();
      const formData = this.form.getRawValue();

      this.authService.authenticate(currentMode, {
        email: formData.email as string,
        password: formData.password as string
      }).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }
}
