import { describe, it, expect } from "vitest";
import { Contador } from "./Contador";
import { fireEvent, render, screen, act } from "@testing-library/react";

describe('<Contador />', () => {
    it('Deberia mostrar el valor inicial', () => { 
        render(<Contador />);
        const result = screen.getByText('Contador: 0');
        expect(result).toBeInTheDocument();
    })

    it('Deberia incrementar el contador', async () => {
        render(<Contador />);
        const button = screen.getByText('Incrementar');
        await act(()=> {
            fireEvent.click(button);
        })
        const result = screen.getByText('Contador: 1');
        expect(result).toBeInTheDocument();
    })
});