import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/domain/categoria-service';
import { CategoriaDTO } from 'src/models/categoria.dto';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  items: CategoriaDTO[];

  constructor(private categoriaService: CategoriaService) { 
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


}
