import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs';
import {Paciente} from './paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteDataService {
  private pacienteSource=new BehaviorSubject({paciente:null,key:''})
  currentPaciente=this.pacienteSource.asObservable();

  constructor() { }

  changePaciente(paciente:Paciente,key:string){
    this.pacienteSource.next({paciente:paciente,key:key})
  }
}
