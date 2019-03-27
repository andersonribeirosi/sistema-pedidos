import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/domain/categoria-service';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { CredenciaisDTO } from 'src/models/credenciais.dto.';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})

export class CategoriaPage implements OnInit {

  items: CategoriaDTO[];

  constructor(private categoriaService: CategoriaService, 
    private route: Router,
    private nav: NavController,
    public navParams: NavParams) {
    this.ionViewDidLoad();
  }

  ngOnInit() {
  }

  ionViewDidLoad() {

    this.categoriaService.findAll()
      .subscribe(resp => {
        this.items = resp;

        return resp;
      },
        error => {
          console.log(error);

        });

  }

  showProdutos() {    
    this.route.navigateByUrl('/produtos');
  }

  // showProdutos(categoria_id : string) {
  //   this.nav.navigateForward('ProdutosPage', {categoria_id: categoria_id});    
  // }

}