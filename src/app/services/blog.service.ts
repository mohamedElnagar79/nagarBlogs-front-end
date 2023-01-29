import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../_models/article';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  url: string = ' http://localhost:3000/articles';
  constructor(private http: HttpClient) {}

  getAllBlogs() {
    return this.http.get<[]>(this.url);
  }
  getArticleById(id: number) {
    return this.http.get<{}>(this.url + `/${id}`);
  }

  addArticle(newObj: Article) {
    return this.http.post<Article>(this.url, newObj);
  }
  getfilterItems(search: any) {
    return this.http.get<[]>(
      this.url + `?title=${search}&body=${search}&author=${search}`
    );
  }
}
