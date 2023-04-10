import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-estacionamentos',
  templateUrl: './listar-estacionamentos.page.html',
  styleUrls: ['./listar-estacionamentos.page.scss'],
})
export class ListarEstacionamentosPage implements OnInit {

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
