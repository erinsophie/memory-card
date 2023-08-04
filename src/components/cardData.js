import { v4 as uuidv4 } from 'uuid';
import stuffedPumpkin from '../assets/img/food1.png';
import mushroomSkewers from '../assets/img/food2.png';
import spicyPepperSteak from '../assets/img/food3.png';
import seafoodRiceBalls from '../assets/img/food4.png';
import meatyRiceBalls from '../assets/img/food5.png';
import veggieCreamSoup from '../assets/img/food6.png';
import pumpkinPie from '../assets/img/food7.png';
import fruitPie from '../assets/img/food8.png';
import eggPudding from '../assets/img/food9.png';
import honeyCrepe from '../assets/img/food10.png';
import fishPie from '../assets/img/food11.png';
import wildberryCrepe from '../assets/img/food12.png';
import meatCurry from '../assets/img/food13.png';
import meatStew from '../assets/img/food14.png';
import steamedMeat from '../assets/img/food15.png';
import steamedFish from '../assets/img/food16.png';

const cardData = [
  { id: uuidv4(), src: stuffedPumpkin, name: 'Stuffed Pumpkin' },
  { id: uuidv4(), src: honeyCrepe, name: 'Honey Crepe' },
  { id: uuidv4(), src: spicyPepperSteak, name: 'Spicy Pepper Steak' },
  { id: uuidv4(), src: seafoodRiceBalls, name: 'Seafood Rice Balls' },
  { id: uuidv4(), src: meatCurry, name: 'Meat Curry' },
  { id: uuidv4(), src: fruitPie, name: 'Fruit Pie' },
  { id: uuidv4(), src: meatyRiceBalls, name: 'Meaty Rice Balls' },
  { id: uuidv4(), src: pumpkinPie, name: 'Pumpkin Pie' },
  { id: uuidv4(), src: steamedFish, name: 'Steamed Fish' },
  { id: uuidv4(), src: eggPudding, name: 'Egg Pudding' },
  { id: uuidv4(), src: mushroomSkewers, name: 'Mushroom Skewers' },
  { id: uuidv4(), src: wildberryCrepe, name: 'Wildberry Crepe' },
  { id: uuidv4(), src: meatStew, name: 'Meat Stew' },
  { id: uuidv4(), src: veggieCreamSoup, name: 'Veggie Cream Soup' },
  { id: uuidv4(), src: steamedMeat, name: 'Steamed Meat' },
  { id: uuidv4(), src: fishPie, name: 'Fish Pie' },
];

export default cardData;
