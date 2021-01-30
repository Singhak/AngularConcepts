import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Pipe({
  name: 'fetchJson',
  pure: false
})
export class FetchJsonPipe implements PipeTransform {

  constructor(private http: HttpClient) { }
  private cacheData: any = null;
  private cacheUrl: string = '';
  transform(url: string): any {
    if (url !== this.cacheUrl) {
      this.cacheData = null;
      this.cacheUrl = url;
      this.http.get(url).subscribe(result => this.cacheData = result)
    }
    return this.cacheData;
  }

}
