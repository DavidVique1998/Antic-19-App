import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  generalOptions = { closeButton: true, timeOut: 3000, positionClass: 'toast-top-center' };
  constructor(private toastr: ToastrService) {

  }
  showSuccess(message: any, title: any) {
    this.toastr.success(message, title, this.generalOptions);
  }

  showError(message: any, title: any) {
    this.toastr.error(message, title, this.generalOptions);
  }

  showWarning(message: any, title: any) {
    this.toastr.warning(message, title, this.generalOptions);
  }

  showInfo(message: any, title: any) {
    this.toastr.info(message, title, this.generalOptions);
  }

  clearToast() {
    this.toastr.clear();
  }
}
