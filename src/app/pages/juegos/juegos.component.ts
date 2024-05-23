import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {ConnexionApiService} from "../../servicios/api.service";
import {MaterialModuleModule} from "../../material/modulo-material/modulo-material.module";
import {EnviromentService} from "../../servicios/enviroment.service";
import {debounce} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [
    RouterLink,
    MaterialModuleModule
  ],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.scss'
})
export class JuegoComponent implements OnInit {
  endPoint = "game?id="
  options: any;
  cargando: boolean = true;
  errorEncontrado: boolean = false;

  constructor(private apiService: ConnexionApiService, private router: Router, private env: EnviromentService) {
    this.options = [];
  }

  ngOnInit(): void {
    let currentUrl = this.router.url;
    let idJuego = currentUrl.substring(1);
    let urlFinal = this.env.urlApi + this.endPoint + idJuego;
    console.log(urlFinal);
    this.apiService.getData(urlFinal).subscribe(data => {
      this.options = data;
      console.log(this.options);
      debounceTime(15000)
      this.cargando = false
      if (this.options.status === 0) {
        this.errorEncontrado = true;
      }
    });
  }
}
