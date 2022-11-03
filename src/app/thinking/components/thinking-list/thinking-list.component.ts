import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThinkingItem } from '../../shared/models/thinking-item';
import { ThinkingService } from '../../shared/services/thinking.service';

@Component({
  selector: 'app-thinking-list',
  templateUrl: './thinking-list.component.html',
  styleUrls: ['./thinking-list.component.scss']
})
export class ThinkingListComponent implements OnInit {
  items$!: Observable<ThinkingItem[]>;
  constructor(private service: ThinkingService) { }

  ngOnInit(): void {
    this.items$ = this.service.getList();
  }

}
