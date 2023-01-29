import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Article } from 'src/app/_models/article';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent {
  article: Article = {};
  id: number = Number(this.ac.snapshot.params['id']);
  constructor(public articleSer: BlogService, private ac: ActivatedRoute) {}
  ngOnInit(): void {
    this.articleSer.getArticleById(this.id).subscribe(
      (data) => {
        this.article = data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
