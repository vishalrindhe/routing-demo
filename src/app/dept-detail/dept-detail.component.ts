import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dept-detail',
  template: `
    <h3>
      U selected department with id = {{deptId}}
    </h3>
    <p>
      <button (click)="showOverview()" > Overview </button>
      <button (click)="showContact()" > Contact </button>
    </p>
    <router-outlet></router-outlet>


    <p>       
    <button (click)="goPrevious()" > previous</button>
    <button (click)="goNext()" > next</button>
    </p>       

    <div><button (click)="gotoDept()" >Back</button></div>

  `,
  styles: [ 
  ]
})
export class DeptDetailComponent implements OnInit {

  public deptId: number;

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
    this.router.navigate(['/department-list', previousId ]);
  }  

    
  goNext(){
    let nextId = this.deptId + 1;
    this.router.navigate(['/department-list', nextId ]);
  }

  gotoDept(){
    let selectedId = this.deptId ? this.deptId : null;
    //  this.router.navigate(['/departments', {id:selectedId, test: "TestValue"} ]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

}
