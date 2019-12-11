import { Component, OnInit } from '@angular/core';
import{Paciente} from '../shared/paciente';
import {PacienteService} from '../shared/paciente.service'
import{PacienteDataService} from '../shared/paciente-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  paciente:Paciente;  
  atributoTeste = false;
  key:string="";
  condOpen=[];

  constructor(private pacienteService:PacienteService,private pacienteDataService:PacienteDataService) {
 }

  ngOnInit() {
    this.paciente=new Paciente();
    this.pacienteDataService.currentPaciente.subscribe(data=>{
      if(data.paciente && data.key){
        this.paciente=new Paciente();
        this.paciente.nome=data.paciente.nome;
        this.paciente.estado=data.paciente.estado;
        this.paciente.idade=data.paciente.idade;
        this.paciente.cartaoVacinal=data.paciente.cartaoVacinal;
        this.paciente.peso=data.paciente.peso;
        this.paciente.tomaLeite=data.paciente.tomaLeite;
        this.key=data.key;
      }
    })
  }
  onSubmit(){
    if(this.key){
      this.pacienteService.update(this.paciente,this.key);
    }else{
      this.pacienteService.insert(this.paciente);
    }
    this.paciente=new Paciente();
  }
  
  
}
