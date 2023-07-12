export interface IFunkos {
  id: number;
  title: string;
  price: number;
  images: {
    icon1: string;
    icon2?: string;
    icon3?: string;
  };
}

export interface ShoppingCartState {
  cart: {
    item: IFunkos;
    quantity: number;
  }[];
  addItem: (item: IFunkos) => void;
  removeItem: (item: IFunkos) => void;
  incrementQuantity: (item: IFunkos) => void;
  decrementQuantity: (item: IFunkos) => void;
}

export interface SidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export interface DescriptionProps {
  id: number;
  title: string;
  price: number;
  images: {
    icon1: string;
  };
}
