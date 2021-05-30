import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.scss']
})
export class BookListingComponent implements OnInit {
  
  public genre: string;
  public bookArray = [];
  private nextUrl: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bookService : BookService
    ) { }

  public ngOnInit(): void {
   this.route.params.subscribe(params => {
       this.genre = params['genre'];
       this.bookService.getBooksByTopic(this.genre).subscribe(data => {
        this.bookArray = data.results; 
        this.nextUrl = data.next;    
      });
    });  
  }

  public goBack(): void {
    this.location.back();
  }

  public searchBooks(book: string): void{
    this.bookService.searchBook(book).subscribe(data => {
      this.bookArray = data.results;        
    });
  }

  public openBook(id: number) : void{
    this.bookService.getBooksByIds(id).subscribe(data => {
      let file, url;
      file = data?.results[0]?.formats;     
      url = file['text/html; charset=utf-8'] || file['text/html'] || file['application/pdf'] ||
       file['text/plain; charset=utf-8'] || file['text/plain'];
       if(url){
        window.open(url, '_blank').focus();
       }else{
         alert('No viewable version available');
       }
      
    });
  }

  public loadMore(): void {
    this.bookService.getBooksByUrl(this.nextUrl).subscribe(data => { 
      this.bookArray =  this.bookArray.concat(data.results);
      this.nextUrl = data.next;
    });
  }
}
