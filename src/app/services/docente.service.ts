import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { environment } from '../../environments/environment';
import { StordocenteService } from './stordocente.service';
import { Docente } from '../interface/docente.interface';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private API_URL_DOCENTE = environment.API_URL_DOCENTE;

  constructor(
    private http: HttpClient,
    private stordocen: StordocenteService
  ) { }
  getDocente():Observable<Docente []> {
    return this.http.get<Docente[]>(this.API_URL_DOCENTE).pipe(
      tap((docete:Docente[]) => this.stordocen.docente$.next(docete))
    );
  }
  addDocente(docente: Docente) {
    return this.http.post(this.API_URL_DOCENTE, docente);
  }

  updateDocente(docente: Docente, id:number) {
    return this.http.put(`${this.API_URL_DOCENTE}/${id}`, docente);
  }

  deleteDocente(id:number) {
    return this.http.delete(`${this.API_URL_DOCENTE}/${id}`)
  }
}
