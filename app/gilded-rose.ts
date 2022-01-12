import {Item} from "@/models/item";
import {UpdateItemQuality} from "@/controllers/update-quality-controller";


export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  /**
   * Goal is to remove nesting as much as possible.
   * @returns items
   */
  updateQuality() {

  let qualityUpdater:UpdateItemQuality = new UpdateItemQuality();


    for (let i = 0; i < this.items.length; i++) {
      
      // First, assigning items to the object.
      // Object --> (name, sellIn, quality)
      var item = new Item(this.items[i].name, this.items[i].sellIn, this.items[i].quality);
      item = qualityUpdater.updateItemQuality(item);
    }

    return this.items;
  }
}
