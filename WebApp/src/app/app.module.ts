import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCategoryComponent } from './book-category/book-category.component';
import { BookListingComponent } from './book-listing/book-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCategoryComponent,
    BookListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
