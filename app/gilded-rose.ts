import {Item} from "@/models/item";
import {UpdateItemQuality} from "@/controllers/update-quality-controller";
import * as _ from "lodash";


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

  this.items.forEach(selectedItemFromArray => {
    var item = new Item(selectedItemFromArray.name, selectedItemFromArray.sellIn, selectedItemFromArray.quality);
    item = qualityUpdater.updateItemQuality(item);
  });

    return this.items;
  }
}
