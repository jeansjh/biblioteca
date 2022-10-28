import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { StorcursoService } from './storcurso.service';
import { Observable, tap } from 'rxjs';
import { Curso } from '../interface/curso.interface';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  getDocente() {
    throw new Error('Method not implemented.');
  }

  private API_URL_CURSO = environment.API_URL_CURSO;

  constructor(
    private http: HttpClient,
    private storcurso: StorcursoService
  ) { }
  getCurso():Observable<Curso[]> {
    return this.http.get<Curso[]>(this.API_URL_CURSO).pipe(
      tap((corsos:Curso[]) => this.storcurso.curoso$.next(corsos))
    );
  }
  addCurso(curso: Curso) {
    return this.http.post(this.API_URL_CURSO, curso);
  }

  updateCurso(curso: Curso, id:number) {
    return this.http.put(`${this.API_URL_CURSO}/${id}`, curso);
  }

  deleteCurso(id:number) {
    return this.http.delete(`${this.API_URL_CURSO}/${id}`)
  }
}
