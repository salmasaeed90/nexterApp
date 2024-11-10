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

  homes = [
    {
      title:"Beautiful Familiy House",
      country:"usa",
      rooms:"5",
      price:"1200000",
      area:"325",
      img:"../assets/img/house-1.jpeg"
},
{
  title:"Modern Glass Villa",
  country:"canada",
  rooms:"6",
  price:"2750000",
  area:"450",
  img:"../assets/img/house-2.jpeg"
},
{
  title:"Cozy Country House",
  country:"uk",
  rooms:"4",
  price:"850000",
  area:"250",
  img:"../assets/img/house-3.jpeg"
},
{
  title:"Large Rustical Villa",
  country:"portugal",
  rooms:"6",
  price:"1950000",
  area:"480",
  img:"../assets/img/house-4.jpeg"
},
{
  title:"Majestic Palace House",
  country:"germany",
  rooms:"18",
  price:"9500000",
  area:"4230",
  img:"../assets/img/house-5.jpeg"
},
{
  title:"Modern Familiy Apartment",
  country:"italy",
  rooms:"3",
  price:"600000",
  area:"180",
  img:"../assets/img/house-6.jpeg"
},
  ]
}








