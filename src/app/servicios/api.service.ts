import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConnexionApiService {

  constructor(private http: HttpClient) { }
  getData(url:string):Observable<any[]>{
    return this.http.get<any[]>(url, {
      headers:{
        'X-RapidAPI-Key': 'c8f20292damsh21f3e1bdc9ada76p1f7b6fjsn9be65a21d983',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    });
  }
}
