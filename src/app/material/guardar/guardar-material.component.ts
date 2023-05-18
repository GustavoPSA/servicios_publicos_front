import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  idMaterialEdit: number = 0;
	estadoId: number = 0;
  estado: Estado = new Estado(0);
	ciudades: Ciudad[] = [];
  listEstados: Estado[] = [];
  listCiudades: Ciudad[] = [];
  material: Material = new Material ('','','','','',0,new Date,new Date,this.estado,this.ciudades);

  constructor(
      private materialService: MaterialService,
      private ciudadService: CiudadService,
      private estadoService: EstadoService,
      private activatedRoute: ActivatedRoute,
      private toastr: ToastrService,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.cargarEstados();
    this.cargarCiudades();
    this.cargarMaterial();
  }

  onCreate (): void {
        
    this.material.estado = {idEstado: this.estadoId};

    if (this.idMaterialEdit != null) {
      this.material.idMaterial = this.idMaterialEdit;      
      this.materialService.edit(this.material).subscribe(
        data => {
          this.toastr.success('Material Modificado', 'Exitosamente', {
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
    else{
      this.materialService.add(this.material).subscribe(
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
    
  }

  cargarEstados(): void {
    this.estadoService.list().subscribe(
      data => {

        this.listEstados = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000,
        });
      }
    );
  }

  cargarCiudades(): void {
    this.ciudadService.list().subscribe(
      data => {

        this.listCiudades = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000,
        });
      }
    );
  }

  cargarMaterial(): void {
    
    this.idMaterialEdit = this.activatedRoute.snapshot.params['idMaterial'];
    if (this.idMaterialEdit != null){
      this.materialService.getById(this.idMaterialEdit).subscribe(
        data => {                    
          this.material = data;
          this.material.fechaCompra = new Date(data.fechaCompra);
          this.material.fechaVenta = new Date(data.fechaVenta);
          this.estadoId = this.material.estado.idEstado;
        },
        err => {
          this.toastr.error(err.error.message, 'Error', {
            timeOut: 3000,
          });
        }  
      );
    }    
  }

}
