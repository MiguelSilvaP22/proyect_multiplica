import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColoresService {

  public urlApi: string;

  constructor(private http: HttpClient) { 
    this.urlApi = environment.urlApi;
  }

  getColors(page: number) {
    if (page === null || page === undefined) {
      return this.http.get<any>(this.urlApi);
    } else {
      return this.http.get<any>(this.urlApi + '?page=' + page);

    }
  }
}
