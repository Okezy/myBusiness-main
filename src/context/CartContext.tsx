import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: number, color: string) => void;
  updateQuantity: (id: number, color: string, quantity: number) => void;
  getTotal: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (newItem: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    const quantity = newItem.quantity || 1;
    
    setItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === newItem.id && item.color === newItem.color
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === newItem.id && item.color === newItem.color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { ...newItem, quantity }];
    });
  };

  const removeFromCart = (id: number, color: string) => {
    setItems(prevItems =>
      prevItems.filter(item => !(item.id === id && item.color === color))
    );
  };

  const updateQuantity = (id: number, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, color);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.color === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setItems([]);
  };

  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotal,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};