import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dept-detail',
  template: `
    <h3>
      U selected department with id = {{deptId}}
    </h3>
  `,
  styles: [
  ]
})
export class DeptDetailComponent implements OnInit {

  public deptId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.deptId= id;
  }

}
