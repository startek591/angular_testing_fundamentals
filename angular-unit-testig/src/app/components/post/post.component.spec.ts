import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { first } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostComponent } from './post.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Post Component', () => {
  let fixture: ComponentFixture<PostComponent>;
  let component: PostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PostComponent, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  });

  it('should create the post component using TestBed', () => {
    expect(component).toBeDefined();
  });

  it('should render the post title in the anchor element', () => {
    const post: Post = { id: 1, body: 'body 1', title: 'dsdsd' };
    component.post = post;
    fixture.detectChanges();
    const postElement: HTMLElement = fixture.nativeElement;
    const a = postElement.querySelector('a');
    expect(a?.textContent).toEqual(post.title);
  });

  it('should raise an event when the delete post is clicked', () => {
    const post: Post = { id: 1, body: 'body 1', title: 'dsdsd' };
    component.post = post;
    component.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });

    component.onDeletePost(new MouseEvent('click'));
  });
});
