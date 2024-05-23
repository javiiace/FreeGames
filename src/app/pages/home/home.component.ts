import {Component, OnInit} from '@angular/core';
import {MaterialModuleModule} from "../../material/modulo-material/modulo-material.module";
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConnexionApiService} from "../../servicios/api.service";
import {createBrowserCodeBundleOptions} from "@angular-devkit/build-angular/src/tools/esbuild/application-code-bundle";
import {RouterLink} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import {EnviromentService} from "../../servicios/enviroment.service";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModuleModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  myControl = new FormControl('');
  filteredOptions: any[] = [];
  options: any[] = [];
  url:string="";

  constructor(private apiService: ConnexionApiService, public env: EnviromentService) {

  }

  ngOnInit(): void {
    console.log("oninit");
    this.url=this.env.urlApi+"games";
    this.apiService.getData(this.url).subscribe(data => {
      this.options = data;
      this.filteredOptions=data;
    });

    this.myControl.valueChanges.pipe(
      debounceTime(300), // Esperar 300ms después de que el usuario ha dejado de escribir
      distinctUntilChanged(), // Solo emitir si el valor ha cambiado
      map(value => value?.toLowerCase()), // Convertir la entrada a minúsculas para comparación
      map(value => this.filterOptions(value || '')) // Filtrar opciones basadas en el valor de entrada
    ).subscribe(filteredOptions => {
      this.filteredOptions = filteredOptions;
    });
  }

  private filterOptions(value: string): any[] {
    return this.options.filter(option =>
      option.title.toLowerCase().includes(value)
    );
  }


}
