export interface Product {
  createdAt: Date;
  name: string;
  material: string;
  price: string;
  description: string;
  image: string;
  id: string;
}

export type ProductList = Product[];
