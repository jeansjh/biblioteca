import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Curso } from '../interface/curso.interface';

@Injectable({
  providedIn: 'root'
})
export class StorcursoService {

  curoso$ = new BehaviorSubject<Curso[]>([]);
  selectCurso$= new BehaviorSubject<Curso>({}as Curso);
  editarCurso$= new BehaviorSubject<Curso>({} as Curso);

  constructor() { }
}
