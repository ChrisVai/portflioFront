import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {OutlinedButtonComponent} from "../../../../shared/components/outlined-button/outlined-button.component";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatIcon,
    OutlinedButtonComponent,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input({required: true}) imgUrl!: string[];
  index: number = 0;

  nextPicture(): void {
    if(this.index < this.imgUrl.length -1) {
      this.index ++;
    }
  }

  prevPicture(): void {
    if(this.index > 0) {
      this.index --;
    }
  }
}

