import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-estacionamento',
  templateUrl: './cadastrar-estacionamento.page.html',
  styleUrls: ['./cadastrar-estacionamento.page.scss'],
})
export class CadastrarEstacionamentoPage implements OnInit {

  constructor(
    private router:Router,
    private actRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  estacionamento(){
    this.router.navigate(['estacionamento']);
  }

}
