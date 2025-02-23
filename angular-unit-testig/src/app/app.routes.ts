import { Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsComponent } from './components/posts/posts.component';

export const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'details/:id', component: PostDetailComponent },
];
