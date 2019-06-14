import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuriosityService {
  private apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=Y0VfUmf5Z2zbHV6uPcd2n5Du4y6xCIt3rfM0cGaO';
  constructor(private http: HttpClient) { }

  getImages(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.apiUrl);
  }

}
