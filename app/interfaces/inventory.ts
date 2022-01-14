export interface Inventory {
    name: string,
    quality: number,
    sellIn: number,
    updateQuality: () => void
}