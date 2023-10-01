import { Injectable } from '@angular/core';
import { Post } from './post.model';


@Injectable({ providedIn: 'root' })
export class PostService {

  listOfPosts: Post[] = [
    new Post("Tech Crunch", "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/12/techcrunch-website-homepage-1024x542.webp",
      "TechCrunch is a blog that provides technology and startup news, from the latest developments in Silicon Valley to venture capital funding.  The blog’s target audience is technology and business enthusiasts, especially startup founders and investors worldwide.",
      "reilan",
      new Date()),
    new Post("The verge", "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/12/the-verge-website-homepage.webp",
      "The Verge is a blog focused on examining how technology will change the future.  This blog provides news and opinion pieces on the latest technological developments in art, culture, and science for the mainstream audience.",
      "Johnny Bravo",
      new Date())
  ];

  getPosts() {
    return this.listOfPosts;
  }
  deletePost(index: number) {
    this.listOfPosts.splice(index, 1);
  }
  addPost(post: Post) {
    this.listOfPosts.push(post);
  }
  updatePost(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }
  getPost(index: number) {
    return this.listOfPosts[index];
  }
}
