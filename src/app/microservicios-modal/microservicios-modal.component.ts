import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-microservicios-modal',
  standalone: true,
  imports: [],
  templateUrl: './microservicios-modal.component.html',
  styleUrl: './microservicios-modal.component.css'
})
export class MicroserviciosModalComponent {

  constructor(public bsModalRef: BsModalRef) {}

}
