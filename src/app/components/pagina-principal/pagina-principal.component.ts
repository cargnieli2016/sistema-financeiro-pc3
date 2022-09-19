import { DialogInserirTransacaoComponent } from './../dialog-inserir-transacao/dialog-inserir-transacao.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Transacao } from 'src/app/models/transacao/transacao.model';
import { TransacaoService } from 'src/app/models/transacao/transacao.service';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
  })

export class PaginaPrincipalComponent implements OnInit {

  transacoes: any = [];

  displayedColumns: string[] = ['id', 'createdAt', 'tipo', 'valor', 'saldo', 'acoes'];
  dataSource: any;

  constructor(
    private router: Router,
    private transacaoService: TransacaoService,
    public dialog: MatDialog,

  ) { }


  ngOnInit() {

this.buscaListaDeTransacoes();


  }
  buscaListaDeTransacoes() {
  let that = this;

    this.transacaoService.selectAll().subscribe(
      {
        next(transacoes) {
          that.dataSource = new MatTableDataSource(transacoes);
          that.transacoes = transacoes;
        },
        error(err){
          console.error(err);
        },
        complete(){
          console.log("Requisição Completa");
        }
    }
    );
  }


  navegarPara(rota: any[]){
    this.router.navigate(rota);
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    }

    openDialogAddTransacao(obj?: Transacao) {
     const dialogRef = this.dialog.open(DialogInserirTransacaoComponent, {
        width: '890px',
        data: {}

      });

      dialogRef.afterClosed().subscribe(result => {
        // if(result && result.id)this.transacoes = this.transacoes.concat([result]);
      this.buscaListaDeTransacoes();
      });


    }

    deletar(obj: Transacao){
      let that = this;
      this.transacaoService.delete(obj.id as number).subscribe(
        {
          next(transacoes) {

            that.buscaListaDeTransacoes();
          },
          error(err){
            console.error(err);
          },
          complete(){
            console.log("Requisição Completa");
          }
      }
      );

    }
  }
