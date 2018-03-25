import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../_services/httpBaseUrl/httpbase';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


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

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public headerID;
  public httpHead;
  public newBlog: NewBlog;
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.route.params.subscribe((params) => {
      this.headerID = params.id;
    });
  }

  ngOnInit() {
    this.newBlog = new NewBlog;
    this.http.get(baseUrl + '/blog', {
      headers: new HttpHeaders().set('headerID', this.headerID)

    })
      .subscribe((data: NewBlogInterface) => {
        this.newBlog = data;
        console.log(this.newBlog);


      });
  }


}
