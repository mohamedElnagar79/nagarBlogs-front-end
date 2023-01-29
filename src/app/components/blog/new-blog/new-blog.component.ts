import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import { Article } from 'src/app/_models/article';
@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss'],
})
export class NewBlogComponent {
  article: Article = {};
  constructor(public articleSer: BlogService) {}
  addArticle(f: NgForm) {
    if (f.valid) {
      this.articleSer.addArticle(this.article).subscribe(
        (data) => {
          console.log('added' + data);
        },
        (error) => {
          console.log('error: ', error);
        }
      );
    } else {
      alert('Please fill all information?');
    }
  }
  ngOnInit(): void {}
}
