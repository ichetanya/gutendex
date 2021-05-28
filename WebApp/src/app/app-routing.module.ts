import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCategoryComponent } from './book-category/book-category.component';
import { BookListingComponent } from './book-listing/book-listing.component';

const routes: Routes = [
  {
    path : '',
    pathMatch:'full',
    redirectTo:'searchFlight'
  },
  {
    path : 'category',
    component: BookCategoryComponent
  },
  {
    path : 'search',
    component: BookListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
