import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../_services/httpBaseUrl/httpBaseUrl';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../_services/comments/comment.service';
import { error } from 'util';

class NewBlog {
  author: String;
  title: String;
  content: String;
  dates: Date;
}
interface NewBlogInterface {
  author: String;
  title: String;
  content: String;
  dates: Date;
}
class Comment {
  discussionId: String;
  name: String;
  content: String;
  replies: [
    {
      name: String;
      content: String;
    }
  ];
  createdDate: Date;
}

interface CommentInterface {
  discussionId: String;
  name: String;
  content: String;
  replies: [
    {
      name: String;
      content: String;
    }
  ];
  createdDate: Date;
}

interface ServerResponse {
  type: boolean;
  data: any;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public comment: Comment;
  public newComment: Comment;
  public headerID;
  public httpHead;
  public newBlog: NewBlog;
  public cycleComments;
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private commentService: CommentService ) {
    this.route.params.subscribe((params) => {
      this.headerID = params.id;
      this.pullData();
      console.log(params);
    });
  }

  ngOnInit() {

  }

  pullData() {

    const headers = new HttpHeaders().set('ID', this.headerID);

    this.newBlog = new NewBlog;
    // HTTP Get Blogs
    this.http.get(baseUrl + '/postBlog', {
      headers: new HttpHeaders().set('headerID', this.headerID)
    })
      .subscribe((data: NewBlogInterface) => {
        this.newBlog = data;
        console.log(this.newBlog);
      });
    // HTTP Get Comments
    this.http.get(baseUrl + '/postComment', { headers })
      .subscribe((data: CommentInterface) => {
        this.comment = data;
        this.cycleComments = this.comment;
        console.log(this.comment);
      });
    this.comment = new Comment;
    this.newComment = new Comment;
  }

  onSubmit() {
    this.newComment.discussionId = this.headerID;
    console.log(this.newComment);
    this.commentService.comment(this.newComment)
      .subscribe((res: ServerResponse) => {
        if (error) {
          throw error;
        }
        console.log(res);
      });
   }
}
