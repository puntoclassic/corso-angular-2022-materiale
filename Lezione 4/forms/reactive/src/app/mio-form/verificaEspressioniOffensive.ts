import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function notEspressioniOffensive(blacklist: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    var valore: string = control.value;

    return blacklist.indexOf(valore) > 0
      ? { espressioniOffensive: true }
      : null;
  };
}
