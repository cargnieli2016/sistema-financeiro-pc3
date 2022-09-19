import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/models/produto/produto.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})

export class Pagina1Component implements OnInit {

  produtos: ProdutoService[] = [];
  displayedColumns: string[] = ['id', 'nome', 'valorVenda', 'estoque'];
  dataSource: any;



  constructor(
    private router: Router,
    private produtoService: ProdutoService,

  ) { }


  ngOnInit() {
    let that = this;

      this.produtoService.selectAll().subscribe(
        {
          next(produtos){
            console.log(produtos);
            that.dataSource = new MatTableDataSource(produtos);
          },
          error(err){
            console.error(err);
          },
          complete(){
            console.log("requisição completa");
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
}
