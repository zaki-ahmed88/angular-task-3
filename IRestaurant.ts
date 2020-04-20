import { Veggies } from "./veggies";

//Observer: Updating to objects when subject change to the state
export interface IRestaurant
{
    update(veggies: Veggies)
}