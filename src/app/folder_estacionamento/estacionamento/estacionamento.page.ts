import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estacionamento',
  templateUrl: './estacionamento.page.html',
  styleUrls: ['./estacionamento.page.scss'],
})
export class EstacionamentoPage implements OnInit {

  constructor(
    private router:Router,
    private actRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  listarEstacionamentos(){
    this.router.navigate(['listar-estacionamentos']);
  }

  addEstacionamento(){
    this.router.navigate(['cadastrar-estacionamento']);
  }
}
