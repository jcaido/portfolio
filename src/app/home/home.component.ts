import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';
import { CarouselComponent } from '../carousel/carousel.component';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  featuredProject = {} as Project;
  pictures: string[] = ["assets/tallerFront1.png", "assets/tallerBack1.png"]

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Cristóbal Rosa - home')
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }

}
