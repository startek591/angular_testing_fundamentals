import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post/post.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    id && this.postService.getPost(+id).subscribe((post) => (this.post = post));
  }

  goBack(): void {
    this.location.back();
  }

  save() {
    this.postService.updatePost(this.post).subscribe(() => this.goBack());
  }
}
