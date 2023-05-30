import {Component, OnDestroy, OnInit} from '@angular/core';
import {IPost} from "../../../core/interfaces/IPost";
import {PostsService} from "../../../core/services/posts.service";
import {Observable, Observer, Subject, Subscription, takeUntil} from "rxjs";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  public posts: IPost[];

  constructor(private postService: PostsService) {
    this.posts = [];
  }

  ngOnInit() {
    this.getPosts();
  }

  private getPosts() {
    this.subscription = this.postService.getAllPost()
      .subscribe((result: IPost[]) => {
        this.posts = result;
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
