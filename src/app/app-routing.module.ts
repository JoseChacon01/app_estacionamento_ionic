import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'carros',
    loadChildren: () => import('./folder_carros/carros/carros.module').then( m => m.CarrosPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./folder_usuarios/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'estacionamento',
    loadChildren: () => import('./folder_estacionamento/estacionamento/estacionamento.module').then( m => m.EstacionamentoPageModule)
  },
  {
    path: 'listar-usuario',
    loadChildren: () => import('./folder_usuarios/listar-usuario/listar-usuario.module').then( m => m.ListarUsuarioPageModule)
  },
  {
    path: 'add-usuario',
    loadChildren: () => import('./folder_usuarios/add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'add-carros',
    loadChildren: () => import('./folder_carros/add-carros/add-carros.module').then( m => m.AddCarrosPageModule)
  },
  {
    path: 'listar-carros',
    loadChildren: () => import('./folder_carros/listar-carros/listar-carros.module').then( m => m.ListarCarrosPageModule)
  },
  {
    path: 'listar-estacionamentos',
    loadChildren: () => import('./folder_estacionamento/listar-estacionamentos/listar-estacionamentos.module').then( m => m.ListarEstacionamentosPageModule)
  },
  {
    path: 'cadastrar-estacionamento',
    loadChildren: () => import('./folder_estacionamento/cadastrar-estacionamento/cadastrar-estacionamento.module').then( m => m.CadastrarEstacionamentoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
