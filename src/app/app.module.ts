import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { AppRoutingModule } from './app-routing.module';
import { TabuadaComponentComponent } from './tabuada-component/tabuada-component.component';
import { TimerComponentComponent } from './timer-component/timer-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FirstComponentComponent,
    TabuadaComponentComponent,
    TimerComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
