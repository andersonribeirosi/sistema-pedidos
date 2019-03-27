import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto.';
import { AuthServiceLogin } from 'src/models/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  }

  constructor(private route: Router,
    private nav: NavController,
    private menu: MenuController,

    private auth: AuthServiceLogin) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }


  // login() {
  //   this.auth.authenticate(this.creds).
  //     subscribe(response => {
  //       console.log(response.headers.get('Authorization'));
  //       this.route.navigateByUrl('/categoria')
  //     },
  //       error => {
  //       })

  // }

  login() {
    
        this.route.navigateByUrl('/categoria')
  
  }

}
