import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BEE_FARM_API_URL } from 'src/app/app-injections-tokens';
import { Beehive } from '../models/beehive';

@Injectable({
  providedIn: 'root'
})
export class BeehiveService {

  private baseApiUrl = `${this.apiUrl}api/beehives/`;

  constructor(private http: HttpClient, @Inject(BEE_FARM_API_URL) private apiUrl: string) { }

  getAll(): Observable<Beehive[]> {
    return this.http.get<Beehive[]>(this.baseApiUrl);
  }

  getById(beehiveId: number): Observable<Beehive> {
    return this.http.get<Beehive>(this.baseApiUrl + beehiveId);
  }

  post(beehive: Beehive) {
    return this.http.post(this.baseApiUrl, beehive);
  }

  put(beehiveId: number, beehive: Beehive) {
    return this.http.put(this.baseApiUrl + beehiveId, beehive);
  }

  delete(beehiveId: number) {
    return this.http.delete(this.baseApiUrl + beehiveId);
  }
}
