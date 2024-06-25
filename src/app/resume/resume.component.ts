import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isLenguagesOpen: boolean = false;
  isCertificationsOpen: boolean = false;
  isSkillsOpen: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Cristóbal Rosa - resume')
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/CurriculumVitae.pdf');
    link.setAttribute('download', 'CurriculumVitae.pdf');
    link.click();
    link.remove();
  }

}
