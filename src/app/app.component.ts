import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nexterApp';

  features = [
    {
      title:'World`s best luxury homes',
      icon:'fa-solid fa-globe',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.'
    },
    {
      title:'Only the best properties',
      icon:'fa-solid fa-trophy',
      description:'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.'
    },
    {
      title:'All homes in in top locations',
      icon:'fa-solid fa-location-dot',
      description:'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.'
    },
    {
      title:'New home in one week',
      icon:'fa-solid fa-key',
      description:'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      title:'Top 1% realtors',
      icon:'fa-solid fa-display',
      description:'VQuidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.'
    },
    {
      title:'Secure payments on nexter',
      icon:'fa-solid fa-suitcase',
      description:'Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.'
    },
  ]
}








