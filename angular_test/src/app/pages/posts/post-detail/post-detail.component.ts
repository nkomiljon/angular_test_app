import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {combineLatest, Subject, Subscription, switchMap, takeUntil} from "rxjs";
import {PostsService} from "../../../core/services/posts.service";
import {IPost} from "../../../core/interfaces/IPost";
import {IComment} from "../../../core/interfaces/IComment";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy {

  private subject$ = new Subject();
  public post!: IPost;
  public comment!: IComment;
  constructor(private route: ActivatedRoute, private postService: PostsService) {
  }

  ngOnInit() {
    this.getPostIdFromRoute();
  }

  getPostIdFromRoute() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          let id = Number(params.get('id'));
          return combineLatest([
            this.postService.getPostById(id),
            this.postService.getCommentById(id)
          ]);
        }),
        takeUntil(this.subject$)
      )
      .subscribe(([post, comment]) => {
        this.post = post;
        this.comment = comment;
      })
  }

  ngOnDestroy(): void {
    this.subject$.next(true);
    this.subject$.unsubscribe();
  }
}
