import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostDetailComponent } from './post-detail.component';
import { PostService } from '../services/post/post.service';

describe('PostDetailComponent', () => {
  let fixture: ComponentFixture<PostDetailComponent>;
  beforeEach(() => {
    let mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return '3';
          },
        },
      },
    };
    let mockPostService = jasmine.createSpyObj(['getPost', 'updatePost']);
    let mockLocation = jasmine.createSpyObj(['back']);

    TestBed.configureTestingModule({
      imports: [PostDetailComponent],
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: PostService, useValue: mockPostService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    });
    fixture = TestBed.createComponent(PostDetailComponent);
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
