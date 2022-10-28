import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Docente } from '../../interface/docente.interface';
import { StordocenteService } from '../../services/stordocente.service';
import { DocenteService } from '../../services/docente.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  notCover = 'https://cdn.iconscout.com/icon/free/png-256/teacher-240-1128987.png'


  public docentes: Docente[] = [];
  docente: Docente = {} as Docente;

  constructor(
    private service: DocenteService,
    private store: StordocenteService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.store.docente$.asObservable().subscribe((response: Docente[]) => {
      if (response.length > 0) {
        this.docentes = response;
      } else {
        this.getDocentes();
      }
    });
  }
  getDocentes() {
    this.service.getDocente().subscribe((response: Docente[]) => {
      console.log(response);
      this.docentes = response;
    })
  }
  selectLibro(curso: Docente) {
    this.store.selectDocente$.next(curso);
    this.router.navigate(['docente'])
  }

  getImageCover(): string {
    if(this.docente.nombre !== undefined) {
      if(this.docente.url_foto == null || this.docente.url_foto == '' ) {
        return this.notCover;
      } else {
        return this.docente.url_foto;
      }
    }
    return this.notCover;
  }

}
