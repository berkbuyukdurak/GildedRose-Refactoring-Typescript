import {Item} from "@/models/item";
import constantsJSON from "@/utils/constants/constants.json";

export default class Conjured extends Item {
    
    constructor(name: string, sellIn: number, quality: number) {
        quality = Math.min(Math.max(quality, constantsJSON.quality.minimum_quality), constantsJSON.quality.maximum_quality);
        super(name, sellIn, quality);
    }

    updateQuality(): number {

        this.sellIn -= constantsJSON.quality.quality_step;

        if(this.quality > 0){
            this.quality -= (this.sellIn < 0) ? (constantsJSON.quality.quality_step * 2 * 2) : (constantsJSON.quality.quality_step * 2);
        }

        if(this.quality < 0){
            this.quality = 0;
        }


        return this.quality;
    }
}