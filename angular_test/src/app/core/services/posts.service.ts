import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces/IPost";
import {IComment} from "../interfaces/IComment";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url: string = 'https://jsonplaceholder.typicode.com/';
  private posts: string = 'https://jsonplaceholder.typicode.com/posts';
  private comments: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private _http: HttpClient) { }

  getAllPost(): Observable<IPost[]> {
    return this._http.get<IPost[]>(this.posts);
  }

  getPostById(id: number): Observable<IPost> {
    return this._http.get<IPost>(this.posts +'/'+ id);
  }
  getCommentById(id: number): Observable<IComment> {
    return this._http.get<IComment>(this.comments +'/'+ id);
  }

}
