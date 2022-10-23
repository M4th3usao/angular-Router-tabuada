import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { TabuadaComponentComponent } from './tabuada-component/tabuada-component.component';
import { TimerComponentComponent } from './timer-component/timer-component.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'tabuada', component: TabuadaComponentComponent },
  { path: 'timer', component: TimerComponentComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
