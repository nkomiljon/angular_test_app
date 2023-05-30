import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UsersComponent } from './users/users.component';
import {PagesComponent} from "./pages.component";
import {PostsModule} from "./posts/posts.module";
import {ReactiveFormsModule} from "@angular/forms";
import {PostListComponent} from "./posts/posts-list/post-list.component";
import {PostDetailComponent} from "./posts/post-detail/post-detail.component";
import {ModalComponent} from "../componets/modal/modal.component";
@NgModule({
  declarations: [
    PagesComponent,
    UsersComponent,
    PostListComponent,
    PostDetailComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PostsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
