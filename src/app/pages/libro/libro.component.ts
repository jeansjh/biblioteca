import { Component, OnInit } from '@angular/core';
import { Libro } from '../../interface/libro.interface';
import { StorlibroService } from '../../services/storlibro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  book: Libro = {} as Libro;
  notCover = 'https://www.spl.org/Seattle-Public-Library/images/books-media/default-list-icons/default-book-icon.png'


  constructor(
    private store: StorlibroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBookFromStore();
  }
  getBookFromStore(): void {
    this.book = this.store.selectLibro$.getValue();
    if(this.book.titulo == undefined) {
      this.router.navigate(['biblioteca']);
    }
    console.log(this.book)
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
