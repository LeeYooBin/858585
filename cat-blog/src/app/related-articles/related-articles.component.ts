import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-related-articles',
  standalone: true,
  imports: [CommonModule, ArticleComponent],
  templateUrl: './related-articles.component.html',
  styleUrl: './related-articles.component.css'
})
export class RelatedArticlesComponent {
  articles = [
    {
      title: "Lazy Saturday",
      description: "Discover interesting activities to do with your pet during the weekends.",
      img: "/01.png"
    },
    {
      title: "Cat Basket",
      description: "How to avoid confusion among your kittens and get them used to it from a young age.",
      img: "/02.png"
    },
    {
      title: "Color Chart",
      description: "Is your cat intense winter? Deep summer? Discover the colors that best suit your pet.",
      img: "/03.png"
    },
    {
      title: "Do cats feel cold?",
      description: "Prepare for the cold front that comes to the country in the best way possible.",
      img: "/04.png"
    },
    {
      title: "Get known the Moacir",
      description: "Moacir is our blog's kitten of the week. Come and discover his story of overcoming.",
      img: "/05.png"
    },
  ]
}
