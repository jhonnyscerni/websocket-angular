import { Routes, RouterModule } from '@angular/router';
import { ComponentExemploComponent } from './component-exemplo/component-exemplo.component';

const routes: Routes = [
  {
      path: "",
      canActivate: [],
      data: {
      }, children: [
          {
              path: 'componente-exemplo', component: ComponentExemploComponent, children: [
                  { path: '', component: ComponentExemploComponent },
              ]
          },
          { path: '', redirectTo: 'componente-exemplo' }
      ]
  },
  { path: '**', redirectTo: 'sample02/componente-exemplo' }//Rota padrão

];


export const Sample02Routes = RouterModule.forChild(routes);
