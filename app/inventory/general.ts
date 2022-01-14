import {Item} from "@/models/item";
import constantsJSON from "@/utils/constants/constants.json";

export default class General extends Item {

    constructor(name: string, sellIn: number, quality: number) {
        quality = Math.min(Math.max(quality, constantsJSON.quality.minimum_quality), constantsJSON.quality.maximum_quality);
        super(name, sellIn, quality);
    }

    updateQuality(): number {
        
        this.sellIn -= constantsJSON.quality.quality_step;

        if(this.quality > constantsJSON.quality.minimum_quality){
            this.quality -= (this.sellIn < 0) ? (constantsJSON.quality.quality_step * 2) : (constantsJSON.quality.quality_step);
        }

        if(this.quality < constantsJSON.quality.minimum_quality){
            this.quality = constantsJSON.quality.minimum_quality;
        }

        return this.quality
    }
}