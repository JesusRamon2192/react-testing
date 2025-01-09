import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { OrderItem } from "./OrderItem";

// Mock CSS modules
vi.mock("./OrderItem.module.scss", () => ({
    default: {}, // Provee una exportación por defecto vacía
  }));

const mockOrder = {
  id: "12345678abcdefgh",
  orderDate: "2023-12-25T12:30:00Z",
  status: "shipped",
  customer: {
    name: "John Doe",
    email: "john.doe@example.com",
  },
  products: [
    { id: "p1", name: "Product 1", quantity: 2, price: 10.5 },
    { id: "p2", name: "Product 2", quantity: 1, price: 20.0 },
  ],
  paymentMethod: "credit_card",
  total: 41.0,
};

describe("OrderItem component", () => {
  it("renders the order ID", () => {
    render(<OrderItem order={mockOrder} />);
    expect(screen.getByText(/Order #12345678/i)).toBeInTheDocument();
  });

  it("formats and renders the order date", () => {
    render(<OrderItem order={mockOrder} />);
    expect(screen.getByText(/Dec 25, 2023, 06:30 AM/i)).toBeInTheDocument();
  });

  it("renders the customer name and email", () => {
    render(<OrderItem order={mockOrder} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
  });

  it("renders the status badge", () => {
    render(<OrderItem order={mockOrder} />);
    expect(screen.getByText(/shipped/i)).toBeInTheDocument();
  });

  it("renders the list of products with correct details", () => {
    render(<OrderItem order={mockOrder} />);
    expect(screen.getByText(/Product 1 x2/i)).toBeInTheDocument();
    expect(screen.getByText(/\$21.00/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 2 x1/i)).toBeInTheDocument();
    expect(screen.getByText(/\$20.00/i)).toBeInTheDocument();
  });

  it("renders the payment method", () => {
    render(<OrderItem order={mockOrder} />);
    expect(screen.getByText(/Payment Method/i)).toBeInTheDocument();
    expect(screen.getByText(/credit card/i)).toBeInTheDocument();
  });

  it("renders the total amount", () => {
    render(<OrderItem order={mockOrder} />);
    expect(screen.getByText(/Total Amount/i)).toBeInTheDocument();
    expect(screen.getByText(/\$41.00/i)).toBeInTheDocument();
  });

  it("handles empty products gracefully", () => {
    const emptyProductsOrder = { ...mockOrder, products: [] };
    render(<OrderItem order={emptyProductsOrder} />);
    expect(screen.queryByText(/Order Items:/i)).toBeInTheDocument();
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
