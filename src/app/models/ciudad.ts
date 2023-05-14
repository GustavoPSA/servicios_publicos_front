export class Ciudad {

    idCiudad?: number;
	desCiudad: string;
	indActivo: number;

    constructor(desCiudad: string, indActivo: number){
        this.desCiudad = desCiudad;
        this.indActivo = indActivo;
    }
}
