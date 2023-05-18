export class Estado {

    idEstado: number;
	desEstado?: string;

    constructor(idEstado: number, desEstado?: string) {

        this.idEstado = idEstado;
        this.desEstado = desEstado || '';
    }
}
