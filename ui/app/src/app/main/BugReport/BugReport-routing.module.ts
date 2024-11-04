import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugReportHomeComponent } from './home/BugReport-home.component';
import { BugReportNewComponent } from './new/BugReport-new.component';
import { BugReportDetailComponent } from './detail/BugReport-detail.component';

const routes: Routes = [
  {path: '', component: BugReportHomeComponent},
  { path: 'new', component: BugReportNewComponent },
  { path: ':id', component: BugReportDetailComponent,
    data: {
      oPermission: {
        permissionId: 'BugReport-detail-permissions'
      }
    }
  }
];

export const BUGREPORT_MODULE_DECLARATIONS = [
    BugReportHomeComponent,
    BugReportNewComponent,
    BugReportDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugReportRoutingModule { }