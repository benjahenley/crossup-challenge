export interface Product {
  id: string;
  name: string;
  images: string[];
  regularPrice: number;
  promotionalPrice?: number | null;
  availableStock?: number;
  shortDescription: string;
}

export interface Shooter {
  id: string;
  name: string;
  images: string[];
  regularPrice: number;
  promotionalPrice?: number | null;
  shortDescription: string;
}

export interface Offer {
  title: string;
  shooter: Shooter;
  products: Product[];
  description: string;
  offerExpirationTime: number;
}
