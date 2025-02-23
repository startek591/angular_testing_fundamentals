import { ComponentFixture, TestBed } from '@angular/core/testing';
import { first } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostComponent } from './post.component';

describe('Post Component', () => {
  let fixture: ComponentFixture<PostComponent>;
  let component: PostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PostComponent],
    });

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  });

  it('should create the post component using TestBed', () => {
    expect(component).toBeDefined();
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
