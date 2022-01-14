import {Item} from "@/models/item";
import constantsJSON from "@/utils/constants/constants.json";

export default class BackstageTicket extends Item{

    constructor(name: string, sellIn: number, quality: number) {
        quality = Math.min(Math.max(quality, constantsJSON.quality.minimum_quality), constantsJSON.quality.maximum_quality);
        super(name, sellIn, quality);
    }

    updateQuality(): number {
        
        this.sellIn -= constantsJSON.quality.quality_step;

        if(this.sellIn < 0){
            this.quality = 0;
            return this.quality;
        }

        this.quality += constantsJSON.quality.quality_step;

        if(this.sellIn < 11){
            this.quality += constantsJSON.quality.quality_step;
        }

        if(this.sellIn < 6){
            this.quality += constantsJSON.quality.quality_step;
        }

        if(this.quality > constantsJSON.quality.maximum_quality){
            this.quality = constantsJSON.quality.maximum_quality;
        }

        return this.quality;
    }
}