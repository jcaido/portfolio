import { Injectable, Type } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id:0, name:"Sample Python Project", pictures: [], projectLink: "//www.github.com", summary: "Resumen programa de angular para portfolio", description: "Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio", tags: [Tag.PYTHON]},
    {id:1, name:"Sample Angular app", pictures: [], projectLink: "//www.github.com", summary: "Resumen programa de angular para portfolio", description: "Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]},
    {id:3, name:"Web API project", pictures: [], projectLink: "//www.github.com", summary: "Resumen programa de angular para portfolio", description: "Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio", tags: [Tag.REACT, Tag.CSHARP, Tag.ASPNET] },
    {id:4, name:"Chrome Extension", pictures: [], projectLink: "//www.github.com", summary: "Resumen programa de angular para portfolio", description: "Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio", tags: [Tag.CSHARP, Tag.ASPNET]},
    {id:5, name:"Mobile app", pictures: [], projectLink: "//www.github.com", summary: "Resumen programa de angular para portfolio", description: "Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio", tags: [Tag.JAVASCRIPT]},
    {id:6, name:"Sample .NET project", pictures: [], projectLink: "//www.github.com", summary: "Resumen programa de angular para portfolio", description: "Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio", tags: [Tag.JAVA]}
  ]

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }
}