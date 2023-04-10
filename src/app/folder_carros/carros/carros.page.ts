import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.page.html',
  styleUrls: ['./carros.page.scss'],
})
export class CarrosPage implements OnInit {

  constructor(
    private router:Router,
    private actRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  listarVeiculos(){
    this.router.navigate(['listar-carros']);
  }

  addVeiculos(){
    this.router.navigate(['add-carros']);
  }
}
