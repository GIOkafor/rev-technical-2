import { Pipe, PipeTransform } from "@angular/core";
/*
 * Replace &quot; with "
 * Takes a string argument and returns a string.
 * Usage:
 *   value | quotePipe
 * Example:
 *   {{ "people as &quot;ABC&quot;" | quotePipe }}
 *   formats to: people as "ABC"
 */
@Pipe({ name: "quotePipe" })
export class QuotePipe implements PipeTransform {
  transform(value: string): string {
    return "";
  }
}
