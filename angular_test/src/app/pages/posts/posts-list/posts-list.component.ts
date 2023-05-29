import {Component, OnInit} from '@angular/core';
import {IPosts} from "../../../core/interfaces/IPosts";
import {PostsService} from "../../../core/service/posts.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  public posts: IPosts[];

  constructor(private postService: PostsService) {
    this.posts = [];
  }

  ngOnInit() {
    this.getPosts();
  }

  private getPosts() {
    this.postService.getAllPosts()
      .pipe()
      .subscribe((result: IPosts[]) => {
        this.posts = result;
        console.log(this.posts)
      })
  }

  public getCommentById(id: number) {
    this.postService.getCommentById()
      .pipe()
      .subscribe((res: any) => {
        console.log(res)
      })
  }
}
