import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})
export class ProjectModalComponent {
  @Input() project = {} as Project;

  constructor(public bsModalRef: BsModalRef) {

  }

}
