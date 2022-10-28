import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';


import { environment } from '../../environments/environment';
import { StorlibroService } from './storlibro.service';
import { Libro } from '../interface/libro.interface';


@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private API_URL_LIBRO = environment.API_URL_LIBRO;

  constructor(
    private http: HttpClient,
    private storlibr: StorlibroService
  ) { }
  getLibro():Observable<Libro[]> {
    return this.http.get<Libro[]>(this.API_URL_LIBRO).pipe(
      tap((books:Libro[]) => this.storlibr.libro$.next(books))
    );
  }
  addBook(book: Libro) {
    return this.http.post(this.API_URL_LIBRO, book);
  }

  updateBook(book: Libro, id:number) {
    return this.http.put(`${this.API_URL_LIBRO}/${id}`, book);
  }

  deleteBook(id:number) {
    return this.http.delete(`${this.API_URL_LIBRO}/${id}`)
  }
}
