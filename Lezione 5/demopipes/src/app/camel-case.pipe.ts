import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "camelCase",
})
export class CamelCasePipe implements PipeTransform {
  camelize(str: string) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, "");
  }

  transform(value: string, ...args: unknown[]): string {
    return this.camelize(value);
  }
}
