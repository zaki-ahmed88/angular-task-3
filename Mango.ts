import { Veggies } from "./veggies";

//Concrete Subject
//Set Price for specific product
export class Mango extends Veggies
{

    constructor(price: number)
    {
        super(price);
    }

}