import { Routes } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list-component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail-component';

export const routes: Routes = [
  {
    path: '',
    component: HeroesListComponent,
  },
  {
    path: 'hero/:id',
    component: HeroesDetailComponent,
  }
];