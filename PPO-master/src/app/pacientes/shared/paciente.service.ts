import { Injectable } from '@angular/core';
import {Paciente} from './paciente';
import { AngularFireDatabase } from '@angular/fire/database';
import{map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  constructor(private db:AngularFireDatabase) { }

  insert(paciente:Paciente){
    this.db.list('pacientes').push(paciente);
  }
  delete(key:string){
    this.db.object(`pacientes/${key}`).remove();
  }
  getAll(){
    //retornando a 'árvore' dee pacientes
    return this.db.list('pacientes')
    //vendo se tem alteração
    .snapshotChanges()
    //concatenando
    .pipe(
      //for automático que precisa de função de callback
      map(changes=>{
        return changes.map(c=>({
          key:c.payload.key,...c.payload.val()
        }));
      })
    );

  }
  update(paciente:Paciente,key:string){
    this.db.list('pacientes').update(key,paciente)
    .catch((error:any)=>{
      console.error(error);
    });
  }

}
