import { first } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostComponent } from './post.component';

describe('Post Component', () => {
  it('should raise an event when the delete post is clicked', () => {
    const component = new PostComponent();
    const post: Post = { id: 1, body: 'body 1', title: 'dsdsd' };
    component.post = post;
    component.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });

    component.onDeletePost(new MouseEvent('click'));
  });
});
