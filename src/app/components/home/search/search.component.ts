import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Article } from 'src/app/_models/article';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  articles: any = [Article];
  emptyFlag: boolean = false;
  constructor(
    public articleSer: BlogService,
    public router: Router,
    private root: Router
  ) {}
  searchKey: string = '';
  // filter articles
  filterArticles() {
    this.articleSer.getfilterItems(this.searchKey).subscribe(
      (data) => {
        this.articles = data;
        this.emptyFlag = false;
      },
      (error) => {
        console.log('error', error);
        this.emptyFlag = true;
      }
    );
  }
  getArticleInfo(id: number) {
    this.router.navigateByUrl(`title/${id}`);
  }

  ngOnInit(): void {
    this.articleSer.getfilterItems('').subscribe(
      (data) => {
        this.articles = data;
        this.emptyFlag = false;
      },
      (error) => {
        console.log('error', error);
        this.emptyFlag = true;
      }
    );
  }
}
