export interface User {
    id: string;
    email: string;
    username: string;
    photo: string;
    provider: string;
    cart: { [key: string]: number };
}

export interface OrderObj {
    id: string;
    foodItems: Food[];
    totalPrice: number;
    status: string;
}

export interface Food {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  quantity?: string; // Optional property
}