import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debug } from 'console';
import { ToastrService } from 'ngx-toastr';
import { Ciudad } from 'src/app/models/ciudad';
import { Estado } from 'src/app/models/estado';
import { Material } from 'src/app/models/material';
import { CiudadService } from 'src/app/service/ciudad.service';
import { EstadoService } from 'src/app/service/estado.service';
import { MaterialService } from 'src/app/service/material.service';

@Component({
  selector: 'app-guardar-material',
  templateUrl: './guardar-material.component.html',
  styleUrls: ['./guardar-material.component.css']
})
export class GuardarMaterialComponent implements OnInit {

  idMaterial: number = 0;
	nombre: string = '';
	descripcion: string = '';
	tipo: string = '';
	serial: string = '';
	numeroInterno: string = '';
	precio: number = 0;
	fechaCompra: Date = new Date;
	fechaVenta: Date = new Date;
	estadoId: number = 0;
  estado: Estado = new Estado();
	ciudades: Ciudad[] = [];

  listEstados: Estado[] = [];
  listCiudades: Ciudad[] = [];

  constructor(
      private materialService: MaterialService,
      private ciudadService: CiudadService,
      private estadoService: EstadoService,
      private toastr: ToastrService,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.cargarEstados();
    this.cargarCiudades();
  }

  onCreate (): void {
    debugger
    const material = new Material(this.nombre,
      this.descripcion,
      this.tipo,
      this.serial,
      this.numeroInterno,
      this.precio,
      this.fechaCompra,
      this.fechaVenta,
      this.estado = {idEstado: this.estadoId},
      this.ciudades);

    this.materialService.add(material).subscribe(
      data => {
        this.toastr.success('Material Creado', 'Exitosamente', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000,
        });
      }
    );
  }

  cargarEstados(): void {
    this.estadoService.list().subscribe(
      data => {

        this.listEstados = data;
      },
      err => {
        console.log(err);
      }

    )

  }

  cargarCiudades(): void {
    this.ciudadService.list().subscribe(
      data => {

        this.listCiudades = data;
      },
      err => {
        console.log(err);
      }

    )

  }

}
