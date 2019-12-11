import { Component, OnInit } from '@angular/core';
import {Paciente } from './../shared/paciente';
import {PacienteService} from '../shared/paciente.service';
import {Observable} from 'rxjs';
import {PacienteDataService} from '../shared/paciente-data.service';

@Component({
  selector: 'app-list-pediatra',
  templateUrl: './list-pediatra.component.html',
  styleUrls: ['./list-pediatra.component.css']
})
export class ListPediatraComponent implements OnInit {
  pacientes: Observable<any>;

  constructor(private contatoService:PacienteService,private contatoDataService:PacienteDataService) { }

  ngOnInit() {
    this.pacientes=this.contatoService.getAll();
  }
  edit(paciente:Paciente,key:string){
    this.contatoDataService.changePaciente(paciente,key);
  }

}
