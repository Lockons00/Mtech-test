import { Component, OnInit } from '@angular/core';
import { FarmService } from '../../services/farm.service';
import { Farm } from '../../interfaces/farm.interface';
import { Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'mt-sample-nav',
  templateUrl: './mt-sample-nav.component.html',
})
export class MtSampleNavComponent implements OnInit {
  close: Subject<void> = new Subject<void>();
  farms: Farm[] = [];
  farm!: Farm | null;
  farmId: number = 0;

  constructor(private farmService: FarmService) { }

  showErrorAlert(): void {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    });
  }

  ngOnInit(): void {
    this.farmService.getAllFarms().subscribe((farms) => {
      if (!farms.length) {
        this.showErrorAlert();
      }
      this.farms = farms;
    });
  }

  forceError() {
    this.farmService.getAllFarmsError().subscribe((farms) => {
      if (!farms.length) {
        this.showErrorAlert();
      }
      this.farms = farms;
    });
  }

  closeDetailCard(value: boolean) {
    if (value) {
      this.farmId = 0;
      this.farm = null;
      this.close.next();
    }
  }

  observer = {
    next: (farm: Farm) => {
      if (farm) this.farm = farm;
    },
    error: ({ error, status }: HttpErrorResponse) => {
      this.showErrorAlert();
    }
  }

  serchFarm(id: number): void {
    if (!id) {
      this.farmId = 0;
      return;
    }
    this.farmId = id;
    this.farmService.getFarmById(id).subscribe(this.observer);
  }
}