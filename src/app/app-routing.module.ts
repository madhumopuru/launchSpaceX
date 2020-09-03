import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SpacexComponent } from './spacex/spacex.component';

const routes: Routes = [

    {
      path: '',
      redirectTo: '/spacex',
      pathMatch: 'full'
    },
    {
      path: 'spacex',
      component: SpacexComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
