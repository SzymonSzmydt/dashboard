export interface CorrectProductType {
  id: number;
  priceEU: string;
  pricePL: string;
  shipping: string;
  category: string;
  delivery: string;
  colorEN: string;
  colorPL: string;
  descriptionEN: string;
  descriptionPL: string;
  nameEN: string;
  namePL: string;
  sales: number;
  image1: string;
  image2: string;
  image3: string;
  weight: string;
}

export interface Body {
  [key: number]: CorrectProductType;
}

export interface BasketData {
  id: number;
  quantity: number;
  name: string;
  price: number;
  image: string;
  weight: number;
  delivery: number;
}
