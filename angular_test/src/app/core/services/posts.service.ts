import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces/IPost";
import {IComment} from "../interfaces/IComment";
import {IUser} from "../interfaces/IUser";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private users: string = 'https://jsonplaceholder.typicode.com/users';
  private posts: string = 'https://jsonplaceholder.typicode.com/posts';
  private comments: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private _http: HttpClient) { }

  getAllPost(): Observable<IPost[]> {
    return this._http.get<IPost[]>(this.posts);
  }

  getPostById(id: number): Observable<IPost> {
    return this._http.get<IPost>(this.posts +'/'+ id);
  }

  getAllUser(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this.users);
  }

  getUserById(id: number): Observable<IUser> {
    return this._http.get<IUser>(this.users +'/'+ id)
  }
  getAllComment(): Observable<IComment[]> {
    return this._http.get<IComment[]>(this.comments);
  }

}
