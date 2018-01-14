import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'graph',component: GraphComponent },
  { path: '', component: MainComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
