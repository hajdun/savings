export interface CostItem {
    _id: string;
    itemBoughtDate: string;
    itemBoughtRegularness: boolean;
    itemName: string;
    itemCategory: { 'categoryName': string, 'categoryColor': string };
    unitPrice: number;
    itemAmount: number;
}
