import {Component, OnDestroy, OnInit} from '@angular/core';
import {IPost} from "../../../core/interfaces/IPost";
import {PostsService} from "../../../core/services/posts.service";
import {forkJoin, Subject } from "rxjs";
import {IUser} from "../../../core/interfaces/IUser";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  private subject$ = new Subject();
  public posts: any[];

  constructor(private postService: PostsService) {
    this.posts = [];
  }

  ngOnInit() {
    this.combineData();
  }
  private combineData(): void {
    forkJoin([
       this.postService.getAllPost(),
       this.postService.getAllUser()
    ])
      .subscribe(([posts, users]) => {
        this.posts = posts.map((post: IPost) => {
          const user = users.find((user: IUser) => user.id == post.userId);
          return { ...post, name: user?.name, username: user?.username, email: user?.email, company: {name: user?.company.name }};
        });
    });
  }
  ngOnDestroy(): void {
    this.subject$.next(true);
    this.subject$.unsubscribe();
  }
}
