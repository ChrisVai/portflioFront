import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ButtonContentModel} from "../../models/buttonContentModel";

@Component({
  selector: 'app-outlined-button',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './outlined-button.component.html',
  styleUrl: './outlined-button.component.css'
})
export class OutlinedButtonComponent {
  @Input({required: true}) content!: ButtonContentModel;
}
