import { Component } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { MicroserviciosModalComponent } from '../microservicios-modal/microservicios-modal.component';

@Component({
  selector: 'app-microservicios-card',
  standalone: true,
  imports: [],
  templateUrl: './microservicios-card.component.html',
  styleUrl: './microservicios-card.component.css',
  providers: [BsModalService]
})
export class MicroserviciosCardComponent {

  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}


  OpenMicroserviciosModal() {

    const modalOption: ModalOptions = {
      class: "modal-lg",
    };

    this.bsModalRef = this.modalService.show(MicroserviciosModalComponent, modalOption);

  }
}
