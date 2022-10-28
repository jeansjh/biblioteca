import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../../interface/libro.interface';
import { LibroService } from '../../services/libro.service';
import { StorlibroService } from '../../services/storlibro.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  notCover = 'https://www.spl.org/Seattle-Public-Library/images/books-media/default-list-icons/default-book-icon.png'

  public libros: Libro[] = [];
  book: Libro = {} as Libro;

  constructor(
    private service: LibroService,
    private store: StorlibroService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.store.libro$.asObservable().subscribe((response: Libro[]) => {
      if (response.length > 0) {
        this.libros = response;
      } else {
        this.getLibros();
      }
    });
  }
  getLibros() {
    this.service.getLibro().subscribe((response: Libro[]) => {
      console.log(response);
      this.libros = response;
    })
  }
  selectLibro(libro: Libro) {
    this.store.selectLibro$.next(libro);
    this.router.navigate(['libro'])
  }

  getImageCover(): string {
    if(this.book.titulo !== undefined) {
      if(this.book.url_img == null || this.book.url_img == '' ) {
        return this.notCover;
      } else {
        return this.book.url_img;
      }
    }
    return this.notCover;
  }

}
