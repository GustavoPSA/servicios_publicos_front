export class Estado {

    idEstado?: number;
	desEstado: string;

    constructor(desEstado?: string) {

        this.desEstado = desEstado || '';;
    }
}
