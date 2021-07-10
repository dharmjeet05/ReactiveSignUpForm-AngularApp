import { FormGroup } from '@angular/forms';

export function PasswordChecker(
  controleName: string,
  compareControlName: string
) {
  return (formGroup: FormGroup) => {
    const password = formGroup.controls[controleName];
    const confPassword = formGroup.controls[compareControlName];

    if (password.value !== confPassword.value) {
      confPassword.setErrors({ mustmatch: true });
    } else {
      confPassword.setErrors(null);
    }
  };
}
