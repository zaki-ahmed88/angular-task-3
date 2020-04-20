import { IRestaurant } from "./IRestaurant";
import { Veggies } from "./veggies";

export class Restaurant implements IRestaurant
{

    private _name: string;
    private _purshaseThreshold: number;

    constructor(name: string, purshaseThreshold: number)
    {
        this._name = name;
        this._purshaseThreshold = purshaseThreshold;
    }

    update(veggies: Veggies) {

        console.log(`Notified that ${this._name} that veggies of ${typeof veggies} that the price change to ${veggies.PricePerPound}`);
        if(veggies.PricePerPound < this._purshaseThreshold)
        {
            console.log(`${this._name} wants to buy some ${typeof veggies}`);
            
        }
        
     
    }
   
}