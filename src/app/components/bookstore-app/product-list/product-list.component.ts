import { Component, OnInit } from '@angular/core';
import { Book } from './model/book';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  livros: Array<Book> = [];
  bookService: BookService

  constructor(bookService: BookService) {
    this.bookService = bookService;
   }

  ngOnInit(): void {
    this.bookService.getBook().subscribe(data => {
      this.livros = this.editPrices(data.books.splice(0, 5));      
      console.log(this.livros);
    });
  }

  editPrices(lista: Array<Book>) {
    for(let i = 0; i < lista.length; i++) {
      const priceSymbol = lista[i].price.substring(1);
      lista[i].priceInNumber = Number(priceSymbol)
    }
    return lista;
  }

}
