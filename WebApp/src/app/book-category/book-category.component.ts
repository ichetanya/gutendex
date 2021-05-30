import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.scss']
})
export class BookCategoryComponent implements OnInit {

  public genreList = [];

  constructor(private router: Router) { }

  public ngOnInit(): void {
    this.genreList = [
      {
        icon : 'Fiction.svg',
        category: 'FICTION'
      },
      {
        icon : 'Drama.svg',
        category: 'DRAMA'
      },
      {
        icon : 'Humour.svg',
        category: 'HUMOUR'
      },
      {
        icon : 'Politics.svg',
        category: 'POLITICS'
      },
      {
        icon : 'Philosophy.svg',
        category: 'PHILOSOPHY'
      },
      {
        icon : 'History.svg',
        category: 'HISTORY'
      },
      {
        icon : 'Adventure.svg',
        category: 'ADVENTURE'
      }
   ];
  }

  public searchGenre(genre: string): void {
    this.router.navigate(['search',genre]);
  }

}
