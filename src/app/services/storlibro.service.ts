import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Libro } from '../interface/libro.interface';

@Injectable({
  providedIn: 'root'
})
export class StorlibroService {

  libro$ = new BehaviorSubject<Libro[]>([]);
  selectLibro$= new BehaviorSubject<Libro>({}as Libro);
  editarLibro$= new BehaviorSubject<Libro>({} as Libro);


  constructor() { }
}
