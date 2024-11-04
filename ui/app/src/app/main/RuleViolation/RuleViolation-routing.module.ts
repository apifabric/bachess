import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuleViolationHomeComponent } from './home/RuleViolation-home.component';
import { RuleViolationNewComponent } from './new/RuleViolation-new.component';
import { RuleViolationDetailComponent } from './detail/RuleViolation-detail.component';

const routes: Routes = [
  {path: '', component: RuleViolationHomeComponent},
  { path: 'new', component: RuleViolationNewComponent },
  { path: ':id', component: RuleViolationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'RuleViolation-detail-permissions'
      }
    }
  }
];

export const RULEVIOLATION_MODULE_DECLARATIONS = [
    RuleViolationHomeComponent,
    RuleViolationNewComponent,
    RuleViolationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RuleViolationRoutingModule { }