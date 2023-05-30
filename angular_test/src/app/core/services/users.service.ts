import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces/IUser";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = "https://jsonplaceholder.typicode.com/users";
  constructor(private _http: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this.url);
  }
  createUser(data: any): Observable<IUser[]> {
    return this._http.post<IUser[]>(this.url, data);
  }
}
