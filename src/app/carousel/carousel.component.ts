import { Component, Input } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() project = {} as Project;
}
