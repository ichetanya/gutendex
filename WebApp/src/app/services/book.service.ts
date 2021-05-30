import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = 'http://skunkworks.ignitesol.com:8000';

  constructor(private http: HttpClient) { }

  public getAllBooks() : Observable<any>{
    return this.http.get(`${this.url}/books`);
  }

  public getBooksByIds(id: number): Observable<any>{
    return this.http.get(`${this.url}/books?ids=${id}`);
  }

  /**
   * This API was supposed to be called while fetching all the books with cover but 
   * I did not understand its requirement so I did not use it.Instead, I used a default image cover when the image is not available.
   */
  public getBooksByMediaType(mimeType: string): Observable<any>{
    return this.http.get(`${this.url}/books?mime_type=${mimeType}`);
  }

  public searchBook(text: string): Observable<any>{
    return this.http.get(`${this.url}/books?search=${text}`);
  }

  public getBooksByTopic(topic: string): Observable<any>{
    return this.http.get(`${this.url}/books?topic=${topic}`);
  }

  public getBooksByUrl(url: string): Observable<any>{
    return this.http.get(url);
  }
}
