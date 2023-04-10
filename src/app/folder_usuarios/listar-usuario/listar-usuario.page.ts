import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.page.html',
  styleUrls: ['./listar-usuario.page.scss'],
})
export class ListarUsuarioPage implements OnInit {

  constructor(
    private router:Router,
    private actRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  usuario(){
    this.router.navigate(['usuarios']);
  }
}
