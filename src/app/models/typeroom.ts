export class Typeroom {
        constructor(_id = '', name = '', description = '', price = 0) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    _id: string;
    name: string;
    description: string;
    price: number;
}
