import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "addIva",
})
export class AddIvaPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    return (parseFloat(value) * parseFloat(args[0])) + "";
  }
}
