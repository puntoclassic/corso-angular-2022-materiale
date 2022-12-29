import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  AbstractControl,
  AsyncValidator,
  AsyncValidatorFn,
  ValidationErrors,
} from "@angular/forms";
import { catchError, map, Observable, of, switchMap, timer } from "rxjs";

export default class NomeCognomeNotSameAsync {
  static createValidator(httpClient: HttpClient): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      var nome = control.get("nome")?.value;
      var cognome = control.get("cognome")?.value;
      return timer(500).pipe(
        switchMap(() =>
          httpClient.post("api/verificaNomeCognome", {
            "nome": nome,
            "cognome": cognome,
          })
            .pipe(
              map((response: any) =>
                response.result == true ? { nomeCognomeSame: true } : null
              ),
            )
        ),
      );
    };
  }
}
