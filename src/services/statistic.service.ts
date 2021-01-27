import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BEE_FARM_API_URL } from 'src/app/app-injections-tokens';
import { Statistic } from '../models/statistic';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  private baseApiUrl = `${this.apiUrl}api/statistics/`;

  constructor(private http: HttpClient, @Inject(BEE_FARM_API_URL) private apiUrl: string) { }

  getAll(): Observable<Statistic[]> {
    return this.http.get<Statistic[]>(this.baseApiUrl);
  }

  getById(statisticId: number): Observable<Statistic> {
    return this.http.get<Statistic>(this.baseApiUrl + statisticId);
  }

  delete(statisticId: number) {
    return this.http.delete(this.baseApiUrl + statisticId);
  }
}
