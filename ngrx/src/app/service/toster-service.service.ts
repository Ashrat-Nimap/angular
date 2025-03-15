import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TosterServiceService {

  constructor(private tosts : ToastrService) { }

  showSuccess(message:string){
    this.tosts.success(message);
  }
}
