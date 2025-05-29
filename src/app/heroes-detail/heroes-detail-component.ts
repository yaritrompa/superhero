import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroesDetailService } from '../services/heroes-detail-service';
import { HeroDetail } from '../interfaces/hero-detail-interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroes-detail',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './heroes-detail-component.html',
  styleUrl: './heroes-detail-component.scss'
})
export class HeroesDetailComponent implements OnInit {
  hero: HeroDetail | null = null;
  isLoading = true;

  constructor( private route: ActivatedRoute,private heroService: HeroesDetailService,private location:Location){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.heroService.getHeroDetail(id).subscribe({
        next: (data) => {
          this.hero = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error cargando el héroe', err);
          this.isLoading = false;
        }
      });
    }
  }
  goBack() {
  this.location.back();
}

}
