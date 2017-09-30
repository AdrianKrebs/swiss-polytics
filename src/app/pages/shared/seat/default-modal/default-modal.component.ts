import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-service-modal',
  styleUrls: [('./default-modal.component.scss')],
  templateUrl: './default-modal.component.html',
})

export class DefaultModal implements OnInit {

  modalName: string;
  modalNumber: Number;
  modalPersonId: Number;

  constructor(private activeModal: NgbActiveModal,
    private router: Router) {
  }

  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }

  navigateToProfile(personId) {
    this.activeModal.close();
    this.router.navigate(['/pages/politician/' + personId]);
  }

}
