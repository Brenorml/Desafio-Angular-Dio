import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Book } from "./model/book";

@Injectable()

export class BookService {
    private url = 'https://api.itbook.store/1.0/new' // Random API - https://api.itbook.store/
    

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http: HttpClient) {

    }

    getBook() {
        return this.http.get(this.url)
    }

}