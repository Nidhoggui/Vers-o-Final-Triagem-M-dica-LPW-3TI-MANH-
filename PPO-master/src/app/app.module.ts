import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AngularFireModule} from "@angular/fire";
import{AngularFireDatabaseModule} from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { EditComponent } from './pacientes/edit/edit.component';
import {environment} from '../environments/environment';
import { ListComponent } from './pacientes/list/list.component';
import { EditPediatraComponent } from './pacientes/edit-pediatra/edit-pediatra.component';
import { FebreComponent } from './pacientes/doencas/febre/febre.component';
import { ListPediatraComponent } from './pacientes/list-pediatra/list-pediatra.component';

const appRoutes: Routes = [
  { path: 'edit', component: EditComponent },
  { path: 'list', component: ListComponent },
  { path: 'editPediatra', component: EditPediatraComponent },
  { path: 'listPediatra', component: ListPediatraComponent },
  { path: '', redirectTo: 'listPediatra', pathMatch: 'full' },

];

  

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListComponent,
    EditPediatraComponent,
    FebreComponent,
    ListPediatraComponent,
 
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  exports: [ RouterModule ],
  providers: [AngularFireModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
