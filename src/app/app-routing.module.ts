import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostAdditionPageComponent } from './pages/cost-addition-page/cost-addition-page.component';
import { IncomeAdditionPageComponent } from './pages/income-addition-page/income-addition-page.component';
import { PlanSavingsPageComponent } from './pages/plan-savings-page/plan-savings-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { CostItemComponent } from './modules/widgets/cost-item/cost-item.component';
import { NotFound404PageComponent } from './pages/not-found-404-page/not-found-404-page.component';


const routes: Routes = [
  { path: 'addCost', component: CostAdditionPageComponent },
  { path: '', redirectTo: '/addCost', pathMatch: 'full' },
  { path: 'addIncome', component: IncomeAdditionPageComponent },
  { path: 'planSavings', component: PlanSavingsPageComponent },
  { path: 'history', component: HistoryPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'costItems/:id', component: CostItemComponent },
  { path: 'update/:id', component: CostAdditionPageComponent },
  { path: '404', component: NotFound404PageComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
