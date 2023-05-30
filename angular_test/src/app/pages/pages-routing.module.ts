import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {PagesComponent} from "./pages.component";
import {PostListComponent} from "./posts/posts-list/post-list.component";
import {PostDetailComponent} from "./posts/post-detail/post-detail.component";
const routes: Routes = [
  {
    path: 'page',
    component: PagesComponent,
    children: [
      {
        path: 'posts',
        component: PostListComponent
      },
      {
        path: 'posts/:id',
        component: PostDetailComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: '',
        redirectTo: '/page/posts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/page/posts',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
