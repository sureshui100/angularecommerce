import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col-auto"><button class="btn btn-primary">Order Food</button></div>
        </div> 
      </div>
    </header>
  `,
  styles: [`
    header{ padding:10px;background-color:#FFFFFF;  box-shadow:0px 3px 5px rgba(0,0,0,0.2);}
  
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
