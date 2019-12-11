import { Component, OnInit } from '@angular/core';
import{Paciente} from '../shared/paciente';
import {PacienteService} from '../shared/paciente.service'
import{PacienteDataService} from '../shared/paciente-data.service';


@Component({
  selector: 'app-edit-pediatra',
  templateUrl: './edit-pediatra.component.html',
  styleUrls: ['./edit-pediatra.component.css']
})
export class EditPediatraComponent implements OnInit {
  paciente:Paciente; 
  key:string="";
  doencas=["febre","desmaio"];
  condOpen=[];

  constructor(private pacienteService:PacienteService,private pacienteDataService:PacienteDataService) { }

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
    this.pacienteService.update(this.paciente,this.key);
    this.paciente=new Paciente();
  }
  onUpdate(event){
   this.paciente[event.target.name] = event.currentTarget.checked;
   switch(event.target.name){
       case "febre":
           if(this.condOpen.find(x=>x.doenca=='febre')){
               let index=this.condOpen.indexOf('febre');
               //this.paciente.febre=event.currentTarget.checked;
           }else{
            this.condOpen.push('febre');
            //this.paciente.febre=event.currentTarget.checked;
           }
   }
   console.log(event.currentTarget.checked)
  }
 
  
  
}


