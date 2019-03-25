import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/domain/categoria-service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor(private categoriaService: CategoriaService) { 
    this.ionViewDidLoad();
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
  
  this.categoriaService.findAll()
      .subscribe(resp => {
        console.log(resp);
        
        return resp;
      },
        error => {
          console.log(error);

        });
        
  }


}
