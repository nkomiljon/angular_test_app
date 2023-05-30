import {Component, OnDestroy, OnInit} from '@angular/core';
import {IPost} from "../../../core/interfaces/IPost";
import {PostsService} from "../../../core/services/posts.service";
import {Observable, Observer, Subject, Subscription, takeUntil} from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  private subject$ = new Subject();
  public posts: IPost[];

  constructor(private postService: PostsService) {
    this.posts = [];
  }

  ngOnInit() {
    this.getPosts();
  }

  private getPosts() {
    this.postService.getAllPost()
      .pipe(
        takeUntil(this.subject$)
      )
      .subscribe((result: IPost[]) => {
        this.posts = result;
      })
  }

  ngOnDestroy(): void {
    this.subject$.next(true);
    this.subject$.unsubscribe();
  }
}
