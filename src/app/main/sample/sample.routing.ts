import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample.component';


const routes: Routes = [
 
  {
      path: "",
      data: {
      }, children: [
  
        { path: '**', component: SampleComponent},
      ]
    }
  ];

export const SampleRoutes = RouterModule.forChild(routes);
