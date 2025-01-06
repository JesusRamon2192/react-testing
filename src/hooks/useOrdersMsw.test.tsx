import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useOrders } from './useOrders';
import { SessionProvider, useSession } from '../context/AuthContext';

vi.mock('../context/AuthContext', async() => {
    const actual = await vi.importActual('../context/AuthContext');
    return {
        ...actual,
        useSession: vi.fn()
    }
})

describe('useOrdersMSW', () => {
    const mockUser = { user: { id: 1, name: "Wilmer Garzon" }}

    beforeEach(() => {
        (useSession as Mock).mockReturnValue({user: mockUser}) 
    })

    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <SessionProvider>
            <MemoryRouter>
                {children}
            </MemoryRouter>
        </SessionProvider>
    )

    it('debe obtener good la data', async()=> {
        const {result, waitForNextUpdate} = renderHook(() => useOrders(), {wrapper})
        const initialLoading = result.current.loading;
        expect(initialLoading).toBe(true);
        await waitForNextUpdate();

        const length = result.current.orders.length;
        expect(length).toBe(1);
    })
})