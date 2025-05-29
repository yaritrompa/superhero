import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroDetail } from '../interfaces/hero-detail-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesDetailService {
  private baseUrl = 'https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api';

  constructor(private http: HttpClient) {}

  getHeroDetail(id: number): Observable<HeroDetail> {
    return this.http.get<HeroDetail>(`${this.baseUrl}/hero?id=${id}`);
  }
}
