import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "addSuffix",
})
export class AddSuffixPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    return value + " " + args[0];
  }
}
