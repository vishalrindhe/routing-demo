import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { EmplistComponent } from './emplist/emplist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptDetailComponent } from './dept-detail/dept-detail.component';


const routes: Routes = [
  // { path: '', component: DeptlistComponent }, //this is empt path scenario like default 
  { path: '', redirectTo: '/department-list', pathMatch: 'full' }, 
  // for aboves line explaination 
  //if  URL is "Full" empt then onl it will redirect  to the "departments"
  // we tried "prefix" as pathmatch also but it redirect to "department" for all pages and URL

  { path: 'department-list', component: DeptlistComponent },
  { path: 'department-list/:id', component: DeptDetailComponent },
  { path: 'employees', component: EmplistComponent },
  

  // this is wildcard route. It should be alwas last in the paths.
  // if an route not found then it will show this "page not found"
  // if wildcard route placed at the first line it will automaticall show "pag not found " for all url
  { path: "**", component: PageNotFoundComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent= [ DeptlistComponent, 
                                  EmplistComponent,
                                PageNotFoundComponent,
                              DeptDetailComponent ]