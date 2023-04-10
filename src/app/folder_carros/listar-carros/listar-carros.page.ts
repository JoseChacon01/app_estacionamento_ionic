import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-carros',
  templateUrl: './listar-carros.page.html',
  styleUrls: ['./listar-carros.page.scss'],
})
export class ListarCarrosPage implements OnInit {

  constructor(
    private router:Router,
    private actRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  carros(){
    this.router.navigate(['carros']);
  }

}
