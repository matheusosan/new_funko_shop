export interface Product {
  id: number;
  title: string;
  price: string;
  description?: string;
  images: Image[];
}

interface Image {
  id?: number;
  url: string;
}

export interface ShoppingCartState {
  cart: {
    item: Product;
    quantity: number;
  }[];
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;
  incrementQuantity: (item: Product) => void;
  decrementQuantity: (item: Product) => void;
}

export interface SidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export interface DescriptionProps {
  id: number;
  title: string;
  price: string;
  images: Image[];
}

interface ImagesProps {
  id?: string;
  url: string;
}
