import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ThinkingItem } from '../models/thinking-item';

@Injectable({
  providedIn: 'root'
})
export class ThinkingService {

  constructor(private http: HttpClient) { }

  getList() {
    return of<ThinkingItem[]>(
      [
        { id: 1, title: "Item 1", description: "Description 1", url: "https://res.cloudinary.com/dlrrsfpfq/image/upload/v1667435414/314008923_874333713701733_1011241634789835696_n_af8bhs.jpg" },
        { id: 2, title: "Item 2", description: "Description 2", url: "https://res.cloudinary.com/dlrrsfpfq/image/upload/v1667437201/WhatsApp_Image_2022-11-02_at_19.59.26_qng95h.jpg" },
        { id: 3, title: "Item 3", description: "Description 3" },
        { id: 4, title: "Item 4", description: "Description 4" },
        { id: 5, title: "Item 5", description: "Description 5" },
      ]);
  }
}
