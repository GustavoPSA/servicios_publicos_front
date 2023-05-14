import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/models/material';
import { MaterialService } from 'src/app/service/material.service';

@Component({
  selector: 'app-lista-material',
  templateUrl: './lista-material.component.html',
  styleUrls: ['./lista-material.component.css']
})
export class ListaMaterialComponent implements OnInit {

  materiales: Material[] = [];

  constructor(private materialService: MaterialService) { }

  ngOnInit(): void {
    this.cargarMateriales();
  }

  cargarMateriales(): void {
    this.materialService.list().subscribe(
      data => {

        this.materiales = data;
      },
      err => {
        console.log(err);
      }

    )

  }

}
