import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {PostsListComponent} from "./posts-list/posts-list.component";

const routes: Routes = [
  {
    path: 'posts',
    component: PostsListComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
