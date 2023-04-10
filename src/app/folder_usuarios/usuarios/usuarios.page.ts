import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(
    private router:Router,
    private actRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  listarUsuarios(){
    this.router.navigate(['listar-usuario']);
  }

  addUsuarios(){
    this.router.navigate(['add-usuario']);
  }
}
