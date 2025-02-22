import { of } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let mockPostService: any;

  beforeEach(() => {
    POSTS = [
      { id: 1, title: 'Post 1', body: 'Body 1' },
      { id: 2, title: 'Post 2', body: 'Body 2' },
      { id: 3, title: 'Post 3', body: 'Body 3' },
    ];
    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);
    component = new PostsComponent(mockPostService);
  });

  describe('delete', () => {
    beforeEach(() => {
      mockPostService.deletePost.and.returnValue(of(true));
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
      component.delete(POSTS[1]);
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
    });
  });
});
