import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainArticleComponent } from './main-article/main-article.component';
import { RelatedArticlesComponent } from './related-articles/related-articles.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainArticleComponent,
    RelatedArticlesComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cat-blog';
}
