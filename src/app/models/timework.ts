export class Timework {
    constructor(_id = '', idemployee = '', hourenter = '', hourexit = '', tipohabitacion = '', fechareserva = '', numeropersonas = '',) {
        this._id = _id;
        this.idemployee = idemployee;
        this.hourenter = hourenter;
        this.hourexit = hourexit;
    }

    _id: string;
    idemployee: string;
    hourenter: string;
    hourexit: string;
    tipohabitacion: string;
    fechareserva: Date;
    numeropersonas: Number;


}

