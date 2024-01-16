import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

  nome: string = ""; 

  constructor(
    private router:Router,
    private actRouter: ActivatedRoute,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
  }
  usuario(){
    this.router.navigate(['usuarios']);
  }

 async addUsuario(){
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Menssagem Importante!!',
    message: 'Preencha todos os campos!' + this.nome,
    buttons: ['OK'],
  });

  await alert.present();
}

  }

