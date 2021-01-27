import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BEE_FARM_API_URL } from 'src/app/app-injections-tokens';
import { BeeGarden } from '../models/beeGarden';

@Injectable({
  providedIn: 'root'
})
export class BeeGardenService {

  private baseApiUrl = `${this.apiUrl}api/beegardens/`;

  constructor (private http: HttpClient, @Inject(BEE_FARM_API_URL) private apiUrl: string) {}

  getAll(): Observable<BeeGarden[]> {
    return this.http.get<BeeGarden[]>(this.baseApiUrl);
  }

  getById(beegardenId: number) :Observable<BeeGarden> {
    return this.http.get<BeeGarden>(this.baseApiUrl + beegardenId);
  }

  post(beegarden: BeeGarden) {
    return this.http.post(this.baseApiUrl, beegarden);
  }

  put(beeGardenId: number, beeGarden: BeeGarden) {
    return this.http.put(this.baseApiUrl  + beeGardenId, beeGarden);
  }

  delete(beeGardenId: number) {
    return this.http.delete(this.baseApiUrl + beeGardenId);
  }
}