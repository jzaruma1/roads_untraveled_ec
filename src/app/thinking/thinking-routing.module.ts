import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThinkingDetailComponent } from './components/thinking-detail/thinking-detail.component';
import { ThinkingListComponent } from './components/thinking-list/thinking-list.component';

const routes: Routes = [
  {
    path: "list",
    component: ThinkingListComponent
  },
  {
    path: "new",
    component: ThinkingDetailComponent
  },
  {
    path: ":id",
    component: ThinkingDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThinkingRoutingModule { }
