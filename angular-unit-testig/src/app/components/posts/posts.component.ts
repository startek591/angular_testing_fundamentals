import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  delete(post: Post) {
    this.posts = this.posts.filter((p) => p.id !== post.id);
    this.postService.deletePost(post).subscribe();
  }
}
