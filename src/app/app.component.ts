import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MaterialModuleModule} from "./material/modulo-material/modulo-material.module";
import {HttpClientModule} from "@angular/common/http";
import {EnviromentService} from "./servicios/enviroment.service";
import {NgClass} from "@angular/common";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModuleModule, RouterLink, NgClass, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PracticaVideoJuegos';
  mostrarMenu=false;
  pages: string[] =["MMORPG", "Shooter", "MOBA", "Anime", "Strategy", "Fantasy", "Racing",
    "Fighting", "Social", "Sports"]
  constructor(public env: EnviromentService) {
  }
  toggleMenu(){
    if(this.mostrarMenu){
      this.mostrarMenu=false;
    }else {
      this.mostrarMenu=true;
    }
    console.log(this.mostrarMenu)
  }
  toggleMode():void{
    if(this.env.modoOscuro){
      this.env.modoOscuro=false;
    }else{
      this.env.modoOscuro=true;
    }
    console.log(this.env.modoOscuro)
  }
}
