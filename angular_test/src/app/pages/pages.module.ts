import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UsersComponent } from './users/users.component';
import {PagesComponent} from "./pages.component";
import {PostsModule} from "./posts/posts.module";
@NgModule({
  declarations: [
    PagesComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PostsModule
  ]
})
export class PagesModule { }
