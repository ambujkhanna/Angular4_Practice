import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { innerComponent } from './inner/inner.component';
import { RoutingComponent } from './routing.component';

const routers: Routes = [
  {path : '', redirectTo : '/Inner', pathMatch:'full'},
  { path: 'Inner', component: innerComponent },
  { path: 'Outer', component: AppComponent },
  { path: '**', redirectTo: '/Inner', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    innerComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  //bootstrap: [AppComponent]
  bootstrap: [RoutingComponent]
})
export class AppModule { }
