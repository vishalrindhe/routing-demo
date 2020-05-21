import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-deptlist',
  template: `
    <h3>  Department List  </h3>
    <ul class="items">
      <li (click)=" onSelect(department) "  [class.selected]="isSelected(department)" *ngFor="let department of departments">
      <span class="badge">{{department.id}} </span> {{department.name}}
      </li>
      </ul>

  `,
  styles: [
  ]
})
export class DeptlistComponent implements OnInit {

  departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "MongoDB" },
    { "id": 4, "name": "Bootstrap" },
    { "id": 5, "name": "rub" }
  ]
  public selectedId;


  constructor(private route: ActivatedRoute ,private router: Router) { }

  ngOnInit(): void {
    // let id= parseInt(this.route.snapshot.paramMap.get('id'));
    // this.deptId= id;

    this.route.paramMap.subscribe((param: ParamMap ) => {
      let id = parseInt(param.get('id'));
      this.selectedId= id;

    } );
        }

  onSelect(department){
    this.router.navigate(['/department-list', department.id ]);
    // this.router.navigate([department.id],{relativeTo: this.route});
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
