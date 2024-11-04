import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportHomeComponent } from './home/Report-home.component';
import { ReportNewComponent } from './new/Report-new.component';
import { ReportDetailComponent } from './detail/Report-detail.component';

const routes: Routes = [
  {path: '', component: ReportHomeComponent},
  { path: 'new', component: ReportNewComponent },
  { path: ':id', component: ReportDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Report-detail-permissions'
      }
    }
  }
];

export const REPORT_MODULE_DECLARATIONS = [
    ReportHomeComponent,
    ReportNewComponent,
    ReportDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }