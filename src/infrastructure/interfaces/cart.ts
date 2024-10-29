export interface CartItem {
  id: string;
  name: string;
  images: string[];
  price: number;
  quantity: number;
  maxStock: number;
}

export interface CartState {
  items: CartItem[];
  itemAdded: boolean;
}
