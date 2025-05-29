import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesListComponent } from "./heroes-list/heroes-list-component";
import { FormsModule } from '@angular/forms';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesListComponent, FormsModule, HeroesDetailComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'superheroes';
}
