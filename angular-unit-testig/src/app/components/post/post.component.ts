import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post.model';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() post!: Post;
  @Output() delete = new EventEmitter<Post>();

  onDeletePost(event: Event) {
    event.preventDefault();
    this.delete.emit(this.post);
  }
}
