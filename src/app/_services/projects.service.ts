import { Injectable, Type } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id:0, name:"Taller de Reparación de Vehículos (backend)", pictures: ["assets/tallerBack1.png", "assets/tallerBack2.png", "assets/tallerBack3.png"], projectLink: "//github.com/jcaido/Taller-de-coches", demoOnline: "https://tallerh2render.onrender.com/swagger-ui/index.html#/", summary: "API REST para el taller de reparación de vehículos", description: "API REST creada para un proyecto de gestión diaria de un taller de reparación de vehículos. Puede obtener más información consultando el archivo README del repositorio de código en Github. Puede consultar y probar la API utilizando la interfaz de usuario de Swagger (puede demorar la carga unos cincuenta segundos aproximadamente, por lo que rogamos paciencia) en el siguiente ", tags: [Tag.JAVA_SPRING_BOOT, Tag.POSTGRESQL, Tag.DOCKER]},
    {id:1, name:"Taller de Reparación de Vehículos (frontend)", pictures: ["assets/fotoPersonal.jpeg", "assets/fotoPersonal.jpeg", "assets/fotoPersonal.jpeg"], projectLink: "//github.com/jcaido/mi_taller", demoOnline: "", summary: "Cliente Frontend para el taller de reparación de vehículos", description: "Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio", tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.DOCKER]},
    {id:3, name:"Mi portfolio", pictures: ["assets/fotoPersonal.jpeg", "assets/fotoPersonal.jpeg", "assets/fotoPersonal.jpeg"], projectLink: "//github.com/jcaido/portfolio", demoOnline:"", summary: "Mi portfolio de proyectos como fullstack developer", description: "Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio Resumen programa de angular para portfolio", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
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
