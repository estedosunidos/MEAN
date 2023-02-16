import { PostsService } from '../posts.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {Post} from '../post.model'

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit ,OnDestroy{

  //post=[
    //{title:'First Post',content:'This is the first post content'},
    //{title:'Second Post',content:'This is the second post content'},
   // {title:'Third Post',content:'This is the thirdpost content'},
 // ]
 posts: Post[]=[]
 private postSub:Subscription

  constructor(public posService:PostsService){


  }
  ngOnInit(){
      this.posService.getPosts()
      this.postSub=this.posService.getPostUpdateListener().subscribe((post:Post)=>{
        this.posts=this.posts
      })
  }
  ngOnDestroy(): void {
     this.postSub.unsubscribe()
  }


}
