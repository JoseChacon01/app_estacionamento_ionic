import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

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
