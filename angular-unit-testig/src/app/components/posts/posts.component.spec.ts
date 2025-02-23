import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostsComponent } from './posts.component';
import { PostService } from '../../services/post/post.service';

class mockPostService {
  getPosts() {}
  deletePost() {
    return of(true);
  }
}

describe('PostsComponent', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let postService: any;

  beforeEach(() => {
    POSTS = [
      { id: 1, title: 'Post 1', body: 'Body 1' },
      { id: 2, title: 'Post 2', body: 'Body 2' },
      { id: 3, title: 'Post 3', body: 'Body 3' },
    ];

    //mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);

    TestBed.configureTestingModule({
      providers: [
        PostsComponent,
        { provide: PostService, useClass: mockPostService },
      ],
    });

    component = TestBed.inject(PostsComponent);
    postService = TestBed.inject(PostService);
  });

  describe('delete', () => {
    beforeEach(() => {
      //postService.deletePost.and.returnValue(of(true));
      component.posts = POSTS;
    });

    it('should delete the selected Post from the posts', () => {
      component.delete(POSTS[1]);

      expect(component.posts.length).toBe(2);
    });

    it('should delete the actual selected Post in Posts', () => {
      component.delete(POSTS[1]);
      for (let post of component.posts) {
        expect(post).not.toEqual(POSTS[1]);
      }
    });

    it('should call the delete method in Post Service only once', () => {
      spyOn(postService, 'deletePost').and.callThrough();
      component.delete(POSTS[1]);
      expect(postService.deletePost).toHaveBeenCalledTimes(1);
    });
  });
});
