import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "./model/book";
import { BookList } from "./model/book-list";

@Injectable({
    providedIn:'root'
})

export class BookService {
    private url = 'https://api.itbook.store/1.0/new' // Random API - https://api.itbook.store/
    

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http: HttpClient) {

    }

    getBook():Observable<BookList> {
        return this.http.get<BookList>(this.url);
    }

}