import { Injectable, Type } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id:0, name:"Taller de Reparación de Vehículos (backend)", pictures: ["assets/fotoPersonal.jpeg", "assets/fotoPersonal.jpeg", "assets/fotoPersonal.jpeg"], projectLink: "//github.com/jcaido/Taller-de-coches", summary: "API REST para el taller de reparación de vehículos", description: "Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio", tags: [Tag.JAVA_SPRING_BOOT, Tag.POSTGRESQL, Tag.DOCKER]},
    {id:1, name:"Taller de Reparación de Vehículos (frontend)", pictures: ["assets/fotoPersonal.jpeg", "assets/fotoPersonal.jpeg", "assets/fotoPersonal.jpeg"], projectLink: "//github.com/jcaido/mi_taller", summary: "Cliente Frontend para el taller de reparación de vehículos", description: "Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio", tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.DOCKER]},
    {id:3, name:"Mi portfolio", pictures: ["assets/fotoPersonal.jpeg", "assets/fotoPersonal.jpeg", "assets/fotoPersonal.jpeg"], projectLink: "//github.com/jcaido/portfolio", summary: "Mi portfolio de proyectos como fullstack developer", description: "Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
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
