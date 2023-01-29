import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { FooterComponent } from './core/footer/footer.component';
import { CoreModule } from './core/core.module';
import { BlogsComponent } from './components/home/blogs/blogs.component';
import { SearchComponent } from './components/home/search/search.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { HomeComponent } from './components/home/home.component';
import { NewBlogComponent } from './components/blog/new-blog/new-blog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    SearchComponent,
    BlogDetailsComponent,
    HomeComponent,
    NewBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
