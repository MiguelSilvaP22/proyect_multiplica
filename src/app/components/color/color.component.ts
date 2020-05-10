import { Component, OnInit, Input } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ClipboardService } from 'ngx-clipboard'

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  @Input() color: Color;
  public copyingColor: boolean;

  constructor(private clipboardService: ClipboardService) {
    this.color = new Color();
    this.copyingColor = false;
  }

  ngOnInit(): void {
  }

  copyColor(): void {
    this.copyingColor = true;
    this.copyToClipboard(this.color.color);
    setTimeout(() => {
      this.copyingColor = false;
    }, 2000);
  }

  copyToClipboard(item) {
    this.clipboardService.copyFromContent(item);
  }

}
