import {GildedRose } from '@/gilded-rose';
import {Item} from '@/models/item';
describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
  });
});
