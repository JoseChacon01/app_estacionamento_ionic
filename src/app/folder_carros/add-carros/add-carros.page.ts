import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-carros',
  templateUrl: './add-carros.page.html',
  styleUrls: ['./add-carros.page.scss'],
})
export class AddCarrosPage implements OnInit {

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
