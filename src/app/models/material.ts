import { Estado } from "./estado";
import { Ciudad } from "./ciudad";

export class Material {

    idMaterial?: number;
	nombre: string;
	descripcion: string;
	tipo: string;
	serial: string;
	numeroInterno: string;
	precio: number;
	fechaCompra: Date;
	fechaVenta: Date;
	estado: Estado;
	ciudades: Ciudad[];

    constructor(
        nombre: string,
        descripcion: string,
        tipo: string,
        serial: string,
        numeroInterno: string,
        precio: number,
        fechaCompra: Date,
        fechaVenta: Date,
        estado: Estado,
        ciudades: Ciudad[]) {

            this.nombre = nombre;
            this.descripcion = descripcion;
            this.tipo = tipo;
            this.serial = serial;
            this.numeroInterno = numeroInterno;
            this.precio = precio;
            this.fechaCompra = fechaCompra;
            this.fechaVenta = fechaVenta;
            this.estado = estado;
            this.ciudades = ciudades;

    }

    
}

