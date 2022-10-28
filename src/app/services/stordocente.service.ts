import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Docente } from '../interface/docente.interface';

@Injectable({
  providedIn: 'root'
})
export class StordocenteService {

  docente$ = new BehaviorSubject<Docente[]>([]);
  selectDocente$= new BehaviorSubject<Docente>({}as Docente);
  editarDocente$= new BehaviorSubject<Docente>({} as Docente);

  constructor() { }
}
