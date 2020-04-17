import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { CoronaTotalsComponent } from './corona-totals/corona-totals.component';
import { CoronaDayComponent } from './corona-day/corona-day.component';
import { BooksComponent } from './books/books.component';
// import { CoronaChartsComponent } from './corona-charts/corona-charts.component';
import { CoronaNewsComponent } from './corona-news/corona-news.component';
import { LineChartComponent } from './google-chart/line-chart/line-chart.component'
import { AreaChartComponent } from './google-chart/area-chart/area-chart.component'
import { MapComponent } from './google-chart/map/map.component'
import { CoronaGlobalComponent } from './corona-global/corona-global.component'

const routes: Routes = [

  // these are direct feeds:
  { path: '', redirectTo: '/corona-news', pathMatch: 'full' },
  { path: 'corona-news', component: CoronaNewsComponent },
  { path: 'corona-global', component: CoronaGlobalComponent },
  { path: 'corona-totals', component: CoronaTotalsComponent },

  { path: 'google-chart/line-chart/:country', component: LineChartComponent },
  { path: 'google-chart/map', component: MapComponent },
  { path: 'google-chart/area-chart', component: AreaChartComponent },
  
  // ADD: corona-charts (maps, etc...)

  // deprecated: link now from <app-corona-totals>
  // { path: 'corona-day/:country', component: CoronaDayComponent },

  // below from (my) api:
  // { path: 'corona-day', component: CoronaDayComponent },
  // { path: 'books', component: BooksComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}