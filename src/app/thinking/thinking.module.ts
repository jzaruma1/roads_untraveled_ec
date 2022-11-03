import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThinkingRoutingModule } from './thinking-routing.module';
import { ThinkingListComponent } from './components/thinking-list/thinking-list.component';
import { ThinkingDetailComponent } from './components/thinking-detail/thinking-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ThinkingListComponent,
    ThinkingDetailComponent
  ],
  imports: [
    CommonModule,
    ThinkingRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ThinkingModule { }
