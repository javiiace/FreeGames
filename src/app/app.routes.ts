import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {JuegoComponent} from "./pages/juegos/juegos.component";
import {CategoriasComponent} from "./pages/categorias/categorias.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"mmorpg",
    component: CategoriasComponent
  },
  {
    path:"shooter",
    component: CategoriasComponent
  },
  {
    path:"moba",
    component: CategoriasComponent
  },
  {
    path:"anime",
    component: CategoriasComponent
  },

  {
    path:"strategy",
    component: CategoriasComponent
  },
  {
    path:"fantasy",
    component: CategoriasComponent
  },
  {
    path:"racing",
    component: CategoriasComponent
  },
  {
    path:"fighting",
    component: CategoriasComponent
  },
  {
    path:"social",
    component: CategoriasComponent
  },
  {
    path:"sports",
    component: CategoriasComponent
  },

  {
    path:"**",
    component: JuegoComponent
  },


];
