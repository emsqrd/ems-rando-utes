export class Item {

  public id?: number | null;
  public itemName?: string | null;
  public itemSliceColor?: string | null;
  
  constructor(id?: number | null, itemName?: string | null, itemSliceColor?: string | null) {
    this.id = id;
    this.itemName = itemName;
    this.itemSliceColor = itemSliceColor;
  }
}
