import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function nomeCognomeNotSame(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    var nome = control.get("nome")?.value;
    var cognome = control.get("cognome")?.value;

    return nome == cognome ? { nomeCognomeSame: true } : null;
  };
}
