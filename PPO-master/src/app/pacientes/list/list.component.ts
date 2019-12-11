import { Component, OnInit } from '@angular/core';
import {Paciente } from './../shared/paciente';
import {PacienteService} from '../shared/paciente.service';
import {Observable} from 'rxjs';
import {PacienteDataService} from '../shared/paciente-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pacientes: Observable<any>;

  constructor(private contatoService:PacienteService,private contatoDataService:PacienteDataService) { }

  ngOnInit() {
    this.pacientes=this.contatoService.getAll();
  }
  delete(key:string){
    this.contatoService.delete(key);
  }
  edit(paciente:Paciente,key:string){
    this.contatoDataService.changePaciente(paciente,key);
  }

}