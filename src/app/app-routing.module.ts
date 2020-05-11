import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { EmplistComponent } from './emplist/emplist.component';


const routes: Routes = [
  { path: 'departments', component: DeptlistComponent },
  { path: 'employees', component: EmplistComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent= [ DeptlistComponent, EmplistComponent ]