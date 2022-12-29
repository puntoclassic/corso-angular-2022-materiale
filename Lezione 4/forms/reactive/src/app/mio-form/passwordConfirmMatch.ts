import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordConfirmMatch(
  passwordFieldName: string,
  passwordConfirmFieldName: string,
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    var password = control.get(passwordFieldName)?.value;
    var confirmPassword = control.get(passwordConfirmFieldName)?.value;

    return password !== confirmPassword ? { passwordMatch: true } : null;
  };
}
