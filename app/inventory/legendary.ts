import {Item} from "@/models/item";
import constantsJSON from "@/utils/constants/constants.json";

export default class Legendary extends Item {
    constructor(name: string, sellIn: number, quality: number) {
        quality = constantsJSON.quality.sulfuras_quality;
        super(name, sellIn, quality);
    }
}