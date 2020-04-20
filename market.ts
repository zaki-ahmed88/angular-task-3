import { Mango } from "./Mango";
import { Restaurant } from "./Restaurant";


let mango = new Mango(0.5);

mango.attach(new Restaurant('Gad', 0.4));
mango.attach(new Restaurant('Mac', 0.3));
mango.attach(new Restaurant('KFC', 0.5));


//Mango
mango.PricePerPound = 0.6;
mango.PricePerPound = 0.4;
mango.PricePerPound = 0.81;
mango.PricePerPound = 0.5;