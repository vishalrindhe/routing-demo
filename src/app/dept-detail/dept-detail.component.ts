import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dept-detail',
  template: `
    <h3>
      U selected department with id = {{deptId}}
    </h3>
    <a (click)="goPrevious()" > previous</a>
    <a (click)="goNext()" > next</a>

    <div><button (click)="gotoDept()" >Back</button></div>

  `,
  styles: [ 
  ]
})
export class DeptDetailComponent implements OnInit {

  public deptId;

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    // let id= parseInt(this.route.snapshot.paramMap.get('id'));
    // this.deptId= id;

    this.route.paramMap.subscribe((param: ParamMap ) => {
      let id = parseInt(param.get('id'));
      this.deptId= id;

    } );
        }

  goPrevious(){
    let previousId = this.deptId - 1;
    this.router.navigate(['/departments', previousId ]);
  }  

    
  goNext(){
    let nextId = this.deptId + 1;
    this.router.navigate(['/departments', nextId ]);
  }

  gotoDept(){
    let selectedId = this.deptId ? this.deptId : null;
     this.router.navigate(['/departments', {id:selectedId, test: "TestValue"} ]);
  }

}
