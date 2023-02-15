import { PostsService } from './../posts.service';
import { Component,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Post} from '../post.model'
@Component({
  selector: 'app-posts',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsComponent {
  enteredTitle=""
  enteredContent=""
  postcreated=new EventEmitter<Post>()
  constructor(public PostsService: PostsService) {}

  onAddPost(form:NgForm){
    if(form.invalid){
      return
    }
  const post: Post={
    title:form.value.title,
    content:form.value.content
  }
  this.PostsService.addPost(form.value.title,form.value.content);
  }
}
