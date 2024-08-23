import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgProductos } from '../../utils/imgProductos';
import * as imgProductos from '../.../../../../../public/json/imgProductos.json';
import { Router } from '@angular/router'
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  imgProducto?: ImgProductos;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id =  params.get("id");
      this.imgProducto = ((imgProductos as any).default as ImgProductos[])
      .find((imgProducto) => imgProducto.id == Number(id));
    })
  }

}
