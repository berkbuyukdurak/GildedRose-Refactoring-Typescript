export class Item {
    name: string;
    sellIn: number;
    quality: number;
    
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    /**
     * For each item, this function will be overwritten.
     */
    updateQuality (): void {

    }
}