import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {PagesModule} from "./pages/pages.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


/// link: localhost:4200/page/posts -> posts page
///       localhost:4200/page/post/1 -> post id page
///       localhost:4200/page/users -> users page

const route: Routes = [
  {
    path: 'page',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '**',
    redirectTo: 'page',
    pathMatch: 'full'
  }
]

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RouterOutlet,
        RouterModule.forRoot(route),
        HttpClientModule,
        PagesModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
