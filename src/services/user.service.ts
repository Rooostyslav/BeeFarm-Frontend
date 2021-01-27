import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BEE_FARM_API_URL } from 'src/app/app-injections-tokens';
import { User } from '../models/user';
import { BeeGarden } from 'src/models/beeGarden';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseApiUrl = `${this.apiUrl}api/users/`;

  constructor(private http: HttpClient, @Inject(BEE_FARM_API_URL) private apiUrl: string) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseApiUrl);
  }

  getById(userId: number): Observable<User> {
    return this.http.get<User>(this.baseApiUrl + userId);
  }

  getBeeGardens(userId: number): Observable<BeeGarden[]> {
    return this.http.get<BeeGarden[]>(this.baseApiUrl + userId + `/beegardens`);
  }

  post(user: User) {
    return this.http.post(this.baseApiUrl, user);
  }

  put(userId: number, user: User) {
    return this.http.put(this.baseApiUrl + userId, user);
  }

  delete(userId: number) {
    return this.http.delete(this.baseApiUrl + userId);
  }
}
