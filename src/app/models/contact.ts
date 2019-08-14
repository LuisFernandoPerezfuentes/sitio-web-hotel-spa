export class Contact {
    constructor(_id = '', telephone = '', mail = '') {
        this._id = _id;
        this.telephone = telephone;
        this.mail = mail;
    }

    _id: string;
    telephone: string;
    mail: string;
}
