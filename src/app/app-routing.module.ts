import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { UiSidenavComponent } from './shared/ui-sidenav/ui-sidenav.component';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  { path: '', redirectTo: '/', pathMatch: 'full' },

  {
    path: '',
    component: UiSidenavComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
