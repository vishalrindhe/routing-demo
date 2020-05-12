import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deptlist',
  template: `
    <h3>  Department List  </h3>
    <ul class="items">
      <li (click)=" onSelect(department) " *ngFor="let department of departments">
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


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(department){
    this.router.navigate(['/departments', department.id ]);


  }

}
