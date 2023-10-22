import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index: number = 0;
  editMode = false;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let title = '';
    let description = '';
    let imgPath = '';
    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        console.log(params['index']);

        this.index = params['index'];
        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imgPath = post.imgPath;

        this.editMode = true;
      }
    });

    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      imgPath: new FormControl(imgPath, [Validators.required]),
    });
  }
  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imgPath = this.form.value.imgPath;

    //ready with object
    const post: Post = new Post(
      title, imgPath, description, 'test@tes.com', new Date(), 0
    );

    //calling service
    if (this.editMode) {
      this.postService.updatePost(this.index, post)
    }
    else {
      this.postService.addPost(post);
    }
    //navigate ti post-list
    this.router.navigate(["/post-list"])
  }
}
