import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'productos/:id', component: ProductosComponent},
];
