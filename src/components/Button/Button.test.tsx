import {describe, it, expect, vi} from 'vitest';
import {render,screen, fireEvent, act} from '@testing-library/react';
import {Button} from './Button';

describe('<Button />', () => {
    it('Deberia renderizar el boton', () => {
        render(<Button label='click'/>);
        const button = screen.getByText("click");
        expect(button).toBeInTheDocument;
    })

    it('Deberia llamar ala funcion onclick', async () => {
        const handleClick = vi.fn();
        render(<Button label='Click' onClick={handleClick} />);
        const button = screen.getByText("Click");
        await act(() => {
            fireEvent.click(button);
            fireEvent.click(button);
        })
        expect(handleClick).toHaveBeenCalledTimes(2);
    })
})