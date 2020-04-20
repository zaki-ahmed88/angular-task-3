import { IRestaurant } from "./IRestaurant";
import { Restaurant } from "./Restaurant";

//Subject: Observers and Providers and Provide Abstract Class for main fn :/attch :/deattach
export abstract class Veggies 
{
   private _pricePerPound: number;
   private restaurants = new Set<IRestaurant>();
   

   constructor(pricePerPound: number)
   {
       this._pricePerPound = pricePerPound;
   }

   public attach(restaurant: IRestaurant)
   {
       this.restaurants.add(restaurant);
   }

   public deattach(restaurant: IRestaurant)
   {
       this.restaurants.delete(restaurant);
   }

   public notify(): void
   {
        this.restaurants.forEach(
            restaurants =>
            {
                restaurants.update(this);
            }
        ) 
        console.log('*************************************************************************');
        
   }

   public get PricePerPound(): number
   {
       return this.PricePerPound;
   }

   public set PricePerPound(value: number)
   {
    if(this.PricePerPound !=value)
    {
        this.PricePerPound = value;
        this.notify();
    }
   }
}