import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Page } from 'src/app/models/page';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() pages: Page;
  @Output() changePage: EventEmitter<any> = new EventEmitter(); ; 

  constructor() { }

  ngOnInit(): void {
  }

  next(): void  { 
    if (this.pages.page < this.pages.total_pages) {
      this.pages.page ++;
      this.emitChange();
     }
  }

  previous(): void  { 
    if (this.pages.page > 1) {
      this.pages.page --;
      this.emitChange();
    }
   }

   emitChange(): void  {
     this.changePage.emit();
   }

}
