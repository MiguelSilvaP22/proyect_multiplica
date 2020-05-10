import { Component, OnInit } from '@angular/core';
import { ColoresService } from 'src/app/services/colores.service';
import { Color } from '../../models/color';
import { Page } from 'src/app/models/page';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  public colors: Color[];
  public pages: Page;
  p: number = 1;

  constructor(private ColoresService: ColoresService) { 
    this.pages = new Page();
  }

  ngOnInit(): void {
    this.loadColors();
  }

  loadColors(): void {
    this.ColoresService.getColors(this.pages.page).subscribe(
      response => { 
        this.colors = response.data;
        this.loadPages(response);
      },
      error => {}
    )
  }

  loadPages(response): void {
    this.pages = new Page();
    this.pages.page = response.page;
    this.pages.per_page = response.per_page;
    this.pages.total = response.total;
    this.pages.total_pages = response.total_pages;
  }

  changePage() {
    this.loadColors()
  }

}
