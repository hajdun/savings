import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode, ErrorHandler } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ChartModule } from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppComponent } from './app.component';
import { MomentModule } from 'angular2-moment';
import { DatePipe } from '@angular/common';

import { CostItemService } from './cost-item.service';
import { CategoryService } from './category.service';
import { CustomErrorHandlerService } from './custom-error-handler.service';

import { CostAdditionPageComponent } from './pages/cost-addition-page/cost-addition-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { IncomeAdditionPageComponent } from './pages/income-addition-page/income-addition-page.component';
import { NotFound404PageComponent } from './pages/not-found-404-page/not-found-404-page.component';
import { PlanSavingsPageComponent } from './pages/plan-savings-page/plan-savings-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { PieChartComponent } from './modules/charts/pie-chart/pie-chart.component';
import { HeaderComponent } from './modules/widgets/header/header.component';
import { FooterComponent } from './modules/widgets/footer/footer.component';
import { NavigationComponent } from './modules/widgets/navigation/navigation.component';
import { AddCostFormComponent } from './modules/forms/add-cost-form/add-cost-form.component';
import { AddIncomeFormComponent } from './modules/forms/add-income-form/add-income-form.component';
import { AddSavingsFormComponent } from './modules/forms/add-savings-form/add-savings-form.component';
import { AddSettingsFormComponent } from './modules/forms/add-settings-form/add-settings-form.component';
import { CostItemComponent } from './modules/widgets/cost-item/cost-item.component';

import { BalanceComponent } from './modules/widgets/balance/balance.component';
import { GameModuleComponent } from './modules/widgets/game-module/game-module.component';
import { SavingsListComponent } from './modules/widgets/savings-list/savings-list.component';
import { CostSumComponent } from './modules/widgets/cost-sum/cost-sum.component';
import { CostListComponent } from './modules/widgets/cost-list/cost-list.component';
import { IncomeSumComponent } from './modules/widgets/income-sum/income-sum.component';
import { IncomeListComponent } from './modules/widgets/income-list/income-list.component';
import { SavingsSumComponent } from './modules/widgets/savings-sum/savings-sum.component';


@NgModule({
  declarations: [
    AppComponent,
    CostAdditionPageComponent,
    HistoryPageComponent,
    IncomeAdditionPageComponent,
    NotFound404PageComponent,
    PlanSavingsPageComponent,
    SettingsPageComponent,
    PieChartComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    AddCostFormComponent,
    AddIncomeFormComponent,
    AddSavingsFormComponent,
    AddSettingsFormComponent,
    CostItemComponent,
    BalanceComponent,
    GameModuleComponent,
    SavingsListComponent,
    CostSumComponent,
    CostListComponent,
    IncomeSumComponent,
    IncomeListComponent,
    SavingsSumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    ChartModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatExpansionModule
  ],
  providers: [
    CostItemService,
    CategoryService,
    DatePipe,
    { provide: ErrorHandler, useClass: CustomErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
enableProdMode();

