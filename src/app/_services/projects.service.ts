import { Injectable, Type } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id:0, name:"Taller de Reparación de Vehículos (backend)", pictures: ["assets/tallerBack1.png", "assets/tallerBack2.png", "assets/tallerBack3.png"], projectLink: "//github.com/jcaido/Taller-de-coches", demoOnline: "https://tallerh2render.onrender.com/swagger-ui/index.html#/", summary: "API REST para el taller de reparación de vehículos", description: "API REST creada para un proyecto de gestión diaria de un taller de reparación de vehículos. Puede obtener más información consultando el archivo README del repositorio de código en Github. Puede consultar y probar la API utilizando la interfaz de usuario de Swagger (puede demorar la carga unos cincuenta segundos aproximadamente, por lo que rogamos paciencia) en el siguiente ", tags: [Tag.JAVA_SPRING_BOOT, Tag.POSTGRESQL, Tag.DOCKER]},
    {id:1, name:"Taller de Reparación de Vehículos (frontend)", pictures: ["assets/tallerFront1.png", "assets/tallerFront2.png", "assets/tallerFront3.png", "assets/tallerFront4.png"], projectLink: "//github.com/jcaido/mi_taller", demoOnline: "https://mi-taller.onrender.com", summary: "Cliente Frontend para el taller de reparación de vehículos", description: "Aplicación Web que utiliza y consume los endpoints creados en el proyecto para la gestión diaria de un taller de reparación de vehículos. Puede obtener más información consultando el archivo README del repositorio de código en Github. Puede probar la aplicación mediante una demo online con datos ficticios de prueba en el siguiente ", tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.DOCKER]},
    {id:2, name:"Mi Polideportivo", pictures: ["assets/polideportivo-1.png", "assets/polideportivo-2.png", "assets/polideportivo-3.png"], projectLink: "//github.com/jcaido/Polideportivo", demoOnline: "https://jcaido.github.io/polideportivoGHP-4/", summary: "Aplicación para la gestión de reservas de un polideportivo", description: "Aplicación Web creada con Spring Boot para el backend, implementado la seguridad con Spring Security y Stripe como plataforma de pagos. El fronted está realizado con Angular pudiendo consultar su código en   https://github.com/jcaido/mi-polideportivo.   Puede probar la aplicación mediante una demo online de prueba (la primera petición al servidor, por ejemplo el registro de usario, puede demorar unos cincuenta segundos) en el siguiente ", tags: [Tag.JAVA_SPRING_BOOT, Tag.POSTGRESQL, Tag.ANGULAR, Tag.DOCKER]},
    {id:3, name:"Mi portfolio", pictures: ["assets/portfolio1.png", "assets/portfolio2.png"], projectLink: "//github.com/jcaido/portfolio", demoOnline:"", summary: "Mi portfolio de proyectos como fullstack developer", description: "Web con amplia información sobre mis proyectos personales. Puede obtener más información en el repositorio de código en Github. Puede consultar la web en el siguiente  ", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
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
