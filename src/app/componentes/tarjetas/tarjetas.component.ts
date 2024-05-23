import {Component, Input} from '@angular/core';
import {MaterialModuleModule} from "../../material/modulo-material/modulo-material.module";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [MaterialModuleModule, RouterLink],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.scss'
})
export class CardComponent {
  @Input() titulo?:string;
  @Input() imagen?:string;
  @Input() shortDescription?:string;
  @Input() id?:string
}
