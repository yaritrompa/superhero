import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { HeroApiResponse } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {
  private apiUrl = 'https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes';

  constructor(private http: HttpClient) {}

 getHeroes(page: number, size: number): Observable<HeroApiResponse> {
  return this.http.get<HeroApiResponse>(this.apiUrl, {
    params: {
      page: page.toString(),
      size: size.toString()
    }
  });
}
}
