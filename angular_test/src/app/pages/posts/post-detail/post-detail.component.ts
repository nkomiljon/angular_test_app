import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {combineLatest, Subject, switchMap, takeUntil} from "rxjs";
import {PostsService} from "../../../core/services/posts.service";
import {IComment} from "../../../core/interfaces/IComment";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy {

  private subject$ = new Subject();
  public data: any;
  public comments: IComment[];
  constructor(private route: ActivatedRoute, private postService: PostsService)
  {
    this.comments = [];
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
            this.postService.getAllUser(),
            this.postService.getAllComment()
          ]);
        }),
        takeUntil(this.subject$)
      )
      .subscribe(([post, users, comments]) => {
        const user = users.find(user =>  user.id == post.userId);
        this.data = {"post": post, "user": user};
        this.comments = comments.filter(comment =>  comment.postId == post.id);
      })
  }

  ngOnDestroy(): void {
    this.subject$.next(true);
    this.subject$.unsubscribe();
  }
}
