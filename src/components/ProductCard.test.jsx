// src/components/ProductCard.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import ProductCard from './ProductCard';

describe('ProductCard Component', () => {
  const mockProduct = {
    id: 1,
    title: 'Croissant pur beurre',
    price: 3.50,
    image: 'test-image.jpg',
  };

  it('renders product title and price correctly', () => {
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);

    expect(screen.getByText('Croissant pur beurre')).toBeInTheDocument();
    expect(screen.getByText('$3.50')).toBeInTheDocument();
  });

  it('calls onAddToCart with product and correct quantity when button is clicked', async () => {
    const handleAddToCart = vi.fn();
    const user = userEvent.setup();

    render(<ProductCard product={mockProduct} onAddToCart={handleAddToCart} />);

    const addButton = screen.getByRole('button', { name: /ajouter au panier/i });
    await user.click(addButton);

    // Default quantity is 1
    expect(handleAddToCart).toHaveBeenCalledWith(mockProduct, 1);
  });

  it('allows user to increment quantity using the plus button', async () => {
    const handleAddToCart = vi.fn();
    const user = userEvent.setup();

    render(<ProductCard product={mockProduct} onAddToCart={handleAddToCart} />);

    const plusButton = screen.getByRole('button', { name: '+' });
    await user.click(plusButton); // quantity becomes 2

    const addButton = screen.getByRole('button', { name: /ajouter au panier/i });
    await user.click(addButton);

    expect(handleAddToCart).toHaveBeenCalledWith(mockProduct, 2);
  });
});