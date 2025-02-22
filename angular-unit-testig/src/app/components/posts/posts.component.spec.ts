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
    it('should delete the selected Post from the posts', () => {});
  });
});
