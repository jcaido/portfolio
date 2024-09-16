import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { PolideportivoModalComponent } from '../polideportivo-modal/polideportivo-modal.component';

@Component({
  selector: 'app-polideportivo-card',
  standalone: true,
  imports: [],
  templateUrl: './polideportivo-card.component.html',
  styleUrl: './polideportivo-card.component.css',
  providers: [BsModalService]
})
export class PolideportivoCardComponent {

  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  OpenPolideportivoModal() {

    const modalOption: ModalOptions = {
      class: "modal-lg",
      //initialState: {
      //  project: this.project
      //}
    };

    this.bsModalRef = this.modalService.show(PolideportivoModalComponent, modalOption);
  }

}
