import { MaterialExampleModule } from './../material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DialogInserirTransacaoComponent } from './components/dialog-inserir-transacao/dialog-inserir-transacao.component';



@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    PaginaPrincipalComponent,
    DialogInserirTransacaoComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,

    MatTableModule,
    MatFormFieldModule,
    MatInputModule,

    HttpClientModule,
    BrowserAnimationsModule,

    MaterialExampleModule,
    FormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
