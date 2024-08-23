import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeImagenes } from '../../utils/homeImagenes';
import * as homeImgData from "../../../../public/json/homeImgData.json"
import * as imgProductos from "../../../../public/json/imgProductos.json"
import { ImgProductos } from '../../utils/imgProductos';
import { Router } from '@angular/router'


function randomInt(max: number){
  return Math.floor(Math.random()*max);
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  homeImagenes: HomeImagenes[]=(homeImgData as any).default;
  indiceImgsemana: number = randomInt(this.homeImagenes.length);

  imgPorductos: ImgProductos[]=(imgProductos as any).default;

  constructor(private router:Router) {}

  ngOnInit(): void{

  }


  imgProducto: ImgProductos[] = (imgProductos as any).default;


  ngOnInt(): void{}

  onClickProductos(imgProducto: ImgProductos): void{
    this.router.navigate(["/productos", imgProducto.id]);
  }

}
