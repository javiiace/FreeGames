import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {

  public urlApi: string = "https://free-to-play-games-database.p.rapidapi.com/api/"
  public headers= {
    'X-RapidAPI-Key': 'c8f20292damsh21f3e1bdc9ada76p1f7b6fjsn9be65a21d983',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }

  public modoOscuro:boolean=false;
  constructor() {
  }
}
