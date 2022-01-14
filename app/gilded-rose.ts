import { General, Aged, Conjured, BackstageTicket, Legendary} from '@/inventory';
import { Inventory } from '@/interfaces/inventory';

export class GildedRose {

  items: Inventory[];

  constructor(items: Inventory[] = []){
    this.items = GildedRose.initialize(items);
  }

  private static initialize(items: Inventory[]): Inventory[]{
    let inventory: Inventory[] = [];

    for(let item of items){
      let product: Inventory;

      if (item.name.toLowerCase().includes('aged')) {
        product = new Aged(item.name, item.sellIn, item.quality);
      } else if (item.name.toLowerCase().includes('conjured')) {
        product = new Conjured(item.name, item.sellIn, item.quality);
      } else if (item.name.toLowerCase().includes('backstage passes')) {
        product = new BackstageTicket(item.name, item.sellIn, item.quality);
      } else if (item.name.toLowerCase().includes('sulfuras')) {
        product = new Legendary(item.name, item.sellIn, item.quality);
      } else {
        product = new General(item.name, item.sellIn, item.quality);
      }
      
      inventory.push(product);
    }

    return inventory;
  }

  updateQuality(): Inventory[]{
    for(let item of this.items){
      item.updateQuality();
    }
    return this.items;
  }
}