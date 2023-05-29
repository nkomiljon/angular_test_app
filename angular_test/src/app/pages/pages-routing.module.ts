import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {PagesComponent} from "./pages.component";
import {PostsListComponent} from "./posts/posts-list/posts-list.component";
const routes: Routes = [
  {
    path: 'page',
    component: PagesComponent,
    children: [
      {
        path: 'posts',
        //loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
        component: PostsListComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: '*',
        redirectTo: 'posts',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
