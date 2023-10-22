import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

/*
database path:
https://blog-6bcd3-default-rtdb.asia-southeast1.firebasedatabase.app/
*/

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private postService: PostService, private http: HttpClient) { }

  saveData() {
    const listOfPosts: Post[] = this.postService.getPosts();
    this.http
      .put('https://blog-6bcd3-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        listOfPosts)
      .subscribe((res) => {
        console.log(res)
      });

  }
  fetchData() {
    this.http.get<Post[]>('https://blog-6bcd3-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts)

          this.postService.setPosts(listOfPosts);
        })
      ).subscribe();
  }
}
