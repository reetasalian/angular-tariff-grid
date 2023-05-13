import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TariffDetailsComponent } from './tariff-details/tariff-details.component';
import { TariffListItemComponent } from './tariff-list-item/tariff-list-item.component';
import { TariffListComponent } from './tariff-list/tariff-list.component';
import { TariffComponent } from './tariff.component';
import { FilterPanelComponent } from '../filter-panel/filter-panel.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
registerLocaleData(localeDe, 'de-DE', localeDeExtra);

const routes: Routes = [
  { path: 'tarrif-list', component: TariffComponent },
  { path: 'tariff-details', component: TariffDetailsComponent },
  { path: '', redirectTo: '/tarrifs-list', pathMatch: 'full' },
  { path: '**', component: TariffComponent },
];

@NgModule({
  declarations: [
    TariffListComponent,
    TariffListItemComponent,
    TariffComponent,
    TariffDetailsComponent,
    FilterPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'de-DE'
   }]
 
})
export class TariffModule { }
