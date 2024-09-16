import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
import { PolideportivoCardComponent } from "../polideportivo-card/polideportivo-card.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, PolideportivoCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Cristóbal Rosa - portfolio')
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

}
