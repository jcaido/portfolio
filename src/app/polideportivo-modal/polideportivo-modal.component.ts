import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-polideportivo-modal',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './polideportivo-modal.component.html',
  styleUrl: './polideportivo-modal.component.css'
})
export class PolideportivoModalComponent {

  constructor(public bsModalRef: BsModalRef) {}

}
