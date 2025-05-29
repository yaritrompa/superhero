import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesService } from '../services/heroes-list-service';
import { Hero } from '../interfaces/hero.interface'
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './heroes-list-component.html',
  styleUrl: './heroes-list-component.scss'
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = [];

  page: number = 1;
  size: number = 10;
  totalPages: number = 1;

  totalItems: number = 0;
  startIndex: number = 0;
  endIndex: number = 0;

  sizes: number[] = [5, 10, 20, 50];

  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.loadHeroes();
  }

  loadHeroes(): void {
    this.heroesService.getHeroes(this.page, this.size).subscribe({
      next: (response) => {
        console.log('Respuesta de la API:', response);
        this.heroes = response.items;
        this.totalPages = response.lastPage;

        this.totalItems = response.length;
        this.startIndex = response.startIndex;
        this.endIndex = response.endIndex;
      },
      error: (err) => {
        console.error('Error al cargar héroes:', err);
      }
    });
  }

  nextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadHeroes();
    }
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadHeroes();
    }
  }

  onPageSizeChange(): void {
    this.page = 1; // Reiniciar a la primera página cuando cambia el tamaño
    this.loadHeroes();
  }

  goToDetail(heroId: number): void {
  this.router.navigate(['/hero', heroId]);
}
}
